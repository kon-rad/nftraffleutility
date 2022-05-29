// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `npx hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
import { ethers } from "hardhat";

async function main() {
  
  // mumbai 
  const SUBSCRIPTION_ID = 423;
  const VRF_COORDINATOR = "0x7a1BaC17Ccc5b313516C5E16fb24f7659aA5ebed";
  const KEY_HASH = "0x4b09e658ed251bcafeebbc69400383d49f344ace09b9576fe248bb02c003fe9f";

  const RaffleUtility = await ethers.getContractFactory("RaffleUtility");
  // constructor(uint64 _subscriptionId, address _vrfCoordinator, bytes32 _keyHash) VRFConsumerBaseV2(_vrfCoordinator) {
  const raffleUtility = await RaffleUtility.deploy(SUBSCRIPTION_ID, VRF_COORDINATOR, KEY_HASH);

  await raffleUtility.deployed();

  console.log("RaffleUtility deployed to:", raffleUtility.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
