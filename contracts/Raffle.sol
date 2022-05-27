//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

import "@chainlink/contracts/src/v0.8/VRFConsumerBase.sol";
import "@openzeppelin/contracts/utils/math/SafeMath.sol";

contract Raffle is VRFConsumerBase {
    using SafeMath for uint256;

    struct Raffle {
        uint numOfTickets;
    }
}