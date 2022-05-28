//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

import "@chainlink/contracts/src/v0.8/interfaces/VRFCoordinatorV2Interface.sol";
import "@chainlink/contracts/src/v0.8/VRFConsumerBaseV2.sol";
import "@openzeppelin/contracts/utils/math/SafeMath.sol";

contract VRFD20 is VRFConsumerBaseV2 {

}

contract Raffle is VRFConsumerBaseV2 {
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
        address prizeNFTAddress;
        uint256 prizeNFTTokenId;
        uint256 ticketPrice;
        uint256 ticketGoal;
        uint256 startDate;
        uint256 endDate;
        uint256 raffleTotal;
        address[] tickets;
    }

    address public admin;
    uint256 public adminFeePercent;
    uint256 public adminBalance;

    mapping(uint256 => Raffle) public raffles;
    mapping(uint256 => uint256) public raffleToRandomRequestId;
    uint256 rafflesCount = 0;

    event RaffleCreated(uint256 id, string name);
    event RaffleFinished(uint256 id, string name);
    event RafflePending(uint256 id, string name, uint256 requestId);

    constructor(uint64 _subscriptionId, address _vrfCoordinator, bytes32 _keyHash) VRFConsumerBaseV2(_vrfCoordinator) {
        vrfCoordinator = _vrfCoordinator;
        keyHash = _keyHash;
        COORDINATOR = VRFCoordinatorV2Interface(vrfCoordinator);
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
        address _nftAddress,
        uint256 _nftTokenId,
        uint256 _prizePercentage,
        uint256 _ticketPrice,
        uint256 _ticketGoal,
        uint256 _raffleDurationDays
    ) public {
        require(_ticketGoal >= 10, "Ticket goal must be 10 or greater");
        require(_ticketGoal <= 1000000, "Ticket goal must be less than 1,000,000");
        Raffle storage raffle = Raffle({
            status: Status.Active,
            name: _name,
            description: _description,
            owner: msg.sender,
            nftAddress: _nftAddress,
            nftTokenId: _nftTokenId,
            ticketPrice: _ticketPrice,
            ticketGoal: _ticketGoal,
            startDate: block.timestamp,
            endDate: block.timestamp + _raffleDurationDays * 1 days,
            tickets: []
        });
        rafflesCount++;
        emit RaffleCreated(rafflesCount, _name);
    }

    function getRaffle(uint256 _raffleId) public view returns (Raffle memory) {
        return raffles[_raffleId];
    }

    function checkWinner(uint256 _raffleId) public view returns (address) {
        require(raffles[_raffleId].status == Status.Finished, "raffle is not finished");
        return raffles[_raffleId].tickets[raffles[_raffleId].winnerIndex];
    }

    function attemptFinish(uint256 _raffleId) public onlyActive(_raffleId) {
        if (raffles[_raffleId].tickets.length == raffles[_raffleId].ticketGoal
            || raffles[_raffleId].endDate <= block.timestamp) {
                _finishRaffle(_raffleId);
        }
    }

    function _finishRaffle(uint256 _raffleId) internal {
        require(LINK.balanceOf(address(this)) >= fee, "Not enough LINK - fill contract with faucet");
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
        raffleToRandomRequestId[requestId] = _raffleId;
        emit RafflePending(_raffleId, raffle.name, requestId);
    }
    
    function fulfillRandomWords(
        uint256, requestId
        uint256[] memory randomWords
    ) internal override {
        s_randomWords = randomWords;
    }

    function _finishRaffle(uint256 _raffleId) internal {
        require(
            raffles[_raffleId].tickets.length > 0,
            "The raffle didnt have any tickets"
        );
        Raffle storage raffle = raffles[_raffleId];
        uint256 winnerId = _generateRandomNumber(raffle.tickets.length);
        raffle.status = Status.Finished;
        raffle.winner = winnerId;
        raffle.endDate = block.timestamp;
        emit RaffleFinished(_raffleId, raffle.name);
    }

    // Request randomness
    function getRandomNumber() public returns (bytes32 requestId) {
        require(LINK.balanceOf(address(this)) >= fee, "Not enough LINK - fill contract with faucet");
        return requestRandomness(keyHash, fee);
    }


    // Assumes the subscription is funded sufficiently.
    function requestRandomWords() external onlyOwner {
        // Will revert if subscription is not set and funded.
        s_requestId = COORDINATOR.requestRandomWords(
            keyHash,
            s_subscriptionId,
            requestConfirmations,
            callbackGasLimit,
            numWords
        );
    }


    // Callback function used by VRF Coordinator
    function fulfillRandomness(bytes32 requestId, uint256 randomness) internal override {
        randomResult = randomness;
    }
}