// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `npx hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
const hre = require("hardhat");

async function main() {
  // Hardhat always runs the compile task when running scripts with its command
  // line interface.
  //
  // If this script is run directly using `node` you may want to call compile
  // manually to make sure everything is compiled
  // await hre.run('compile');

  // We get the contract to deploy
  const Halloween2021 = await hre.ethers.getContractFactory("Halloween2021");
  const Halloween = await Halloween2021.deploy();

  await Halloween.deployed();
  let role = await Halloween.MINER_ROLE();
  await Halloween.grantRole(role,"0xfbaADd5e5a02015B378c6aC41a66eEbd6E8C03ef");
  await Halloween.mint("0xfbaADd5e5a02015B378c6aC41a66eEbd6E8C03ef",[1,2,3],[10,20,30]);

  console.log("Contract deployed to:", Halloween.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
