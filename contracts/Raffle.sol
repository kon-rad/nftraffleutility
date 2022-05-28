//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

import "@chainlink/contracts/src/v0.8/interfaces/VRFCoordinatorV2Interface.sol";
import "@chainlink/contracts/src/v0.8/VRFConsumerBaseV2.sol";
import "@openzeppelin/contracts/utils/math/SafeMath.sol";
import "@openzeppelin/contracts/token/ERC721/utils/ERC721Holder.sol";
import "@openzeppelin/contracts/token/ERC721/IERC721.sol";

contract Raffle is VRFConsumerBaseV2, ERC721Holder {
    using SafeMath for uint256;

    mapping(uint256 => address) private s_rollers;
    mapping(address => uint256) private s_results;

    uint64 subscriptionId;
    address vrfCoordinator;
    bytes32 keyHash;
    uint32 callbackGasLimit = 40000;
    uint16 requestConfirmations = 3;
    uint32 numWords =  1;
    VRFCoordinatorV2Interface COORDINATOR;
    address public admin;
    uint256 public adminFeePercent = 3;

    enum Status {
        Active,
        Finished,
        Pending
    }

    struct Raffle {
        string name;
        string description;
        address owner;
        Status status;
        uint256 winnerIndex;
        uint256 balance;
        address prizeNFTAddress;
        uint256 prizeNFTTokenId;
        uint256 ticketPrice;
        uint256 ticketGoal;
        uint256 startDate;
        uint256 endDate;
        uint256 raffleTotal;
        address[] tickets;
    }

    mapping(uint256 => Raffle) public raffles;
    mapping(uint256 => uint256) public requestIdToRaffle;
    uint256 rafflesCount = 0;

    event RaffleCreated(uint256 id, string name);
    event RaffleFinished(uint256 id, string name, uint256 winnerIndex);
    event RafflePending(uint256 id, string name, uint256 requestId);

    constructor(uint64 _subscriptionId, address _vrfCoordinator, bytes32 _keyHash) VRFConsumerBaseV2(_vrfCoordinator) {
        vrfCoordinator = _vrfCoordinator;
        keyHash = _keyHash;
        COORDINATOR = VRFCoordinatorV2Interface(_vrfCoordinator);
        admin = msg.sender;
        subscriptionId = _subscriptionId;
    }

    modifier onlyAdmin() {
        require(
            msg.sender == admin,
            "This function is restricted to the admin"
        );
        _;
    }

    modifier onlyOwner(uint256 _raffleId) {
        require(
            msg.sender == raffles[_raffleId].owner,
            "This function is restricted to the owner"
        );
        _;
    }

    modifier onlyActive(uint256 _raffleId) {
        require(
            raffles[_raffleId].status == Status.Active,
            "The raffle already finished"
        );
        _;
    }

    modifier onlyFinished(uint256 _raffleId) {
        require(raffles[_raffleId].status == Status.Finished, "The raffle is not finished");
        _;
    }

    function createRaffle(
        string memory _name,
        string memory _description,
        address _prizeNFTAddress,
        uint256 _prizeNFTTokenId,
        uint256 _ticketPrice,
        uint256 _ticketGoal,
        uint256 _raffleDurationDays
    ) public {
        require(_ticketGoal >= 10, "Ticket goal must be 10 or greater");
        require(_ticketGoal <= 1000000, "Ticket goal must be less than 1,000,000");

        // transfer NFT to raffle contract
        IERC721(_prizeNFTAddress).safeTransferFrom(msg.sender, address(this), _prizeNFTTokenId);

        Raffle storage raffle = raffles[rafflesCount++];

        raffle.status = Status.Active;
        raffle.name = _name;
        raffle.name = _description;
        raffle.owner = msg.sender;
        raffle.balance = 0;
        raffle.prizeNFTAddress = _prizeNFTAddress;
        raffle.prizeNFTTokenId = _prizeNFTTokenId;
        raffle.ticketPrice = _ticketPrice;
        raffle.ticketGoal = _ticketGoal;
        raffle.startDate = block.timestamp;
        raffle.endDate = block.timestamp + _raffleDurationDays * 1 days; 
        raffle.raffleTotal = 0;
        raffle.tickets;

        emit RaffleCreated(rafflesCount, _name);
    }

    function getRaffle(uint256 _raffleId) public view returns (Raffle memory) {
        return raffles[_raffleId];
    }

    function getWinner(uint256 _raffleId) public onlyFinished(_raffleId) view returns (address) {
        return raffles[_raffleId].tickets[raffles[_raffleId].winnerIndex];
    }

    function attemptFinish(uint256 _raffleId) public onlyActive(_raffleId) {
        if (raffles[_raffleId].tickets.length == raffles[_raffleId].ticketGoal
            || raffles[_raffleId].endDate <= block.timestamp) {
                _finishRaffle(_raffleId);
        }
    }

    function _finishRaffle(uint256 _raffleId) internal {
        Raffle storage raffle = raffles[_raffleId];
        if (raffle.tickets.length == 0) {
            raffle.status = Status.Finished;
            return;
        }

        uint256 requestId = COORDINATOR.requestRandomWords(
            keyHash,
            subscriptionId,
            requestConfirmations,
            callbackGasLimit,
            numWords
        );
        raffle.status = Status.Pending;
        requestIdToRaffle[requestId] = _raffleId;
        emit RafflePending(_raffleId, raffle.name, requestId);
    }
    
    function fulfillRandomWords(
        uint256 requestId,
        uint256[] memory randomWords
    ) internal override {
        uint256 _raffleId = requestIdToRaffle[requestId];
        Raffle storage raffle = raffles[_raffleId];
        raffle.winnerIndex = randomWords[0];
        address winner = raffle.tickets[randomWords[0]];

        // transfer NFT to winner
        IERC721(raffle.prizeNFTAddress).safeTransferFrom(address(this), address(winner), raffle.prizeNFTTokenId);

        // send raffle funds to owner
        uint256 adminShare = raffle.balance.div(100).mul(adminFeePercent);
        payable(address(admin)).transfer(adminShare);
        payable(address(raffle.owner)).transfer(raffle.balance.sub(adminShare));

        emit RaffleFinished(_raffleId, raffle.name, raffle.winnerIndex);
    }

    function buyRaffleTicket(uint256 _raffleId, uint256 _numOfTickets) public onlyActive(_raffleId) payable {
        require(_numOfTickets > 0, "Must buy at least one ticket");
        require(_numOfTickets < raffles[_raffleId].tickets.length + raffles[_raffleId].ticketGoal, "Not enough tickets to sell");
        require(_numOfTickets.mul(raffles[_raffleId].ticketPrice) <= msg.value, "Not enough to pay for tickets");
        raffles[_raffleId].balance = raffles[_raffleId].balance.add(_numOfTickets.mul(raffles[_raffleId].ticketPrice));
        uint256 i = 0;
        for (i; i < _numOfTickets; i++) {
            raffles[_raffleId].tickets.push(msg.sender);
        }
    }
}