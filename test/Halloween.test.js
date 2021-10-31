// const { expect } = require("chai");
// const {ethers} = require("hardhat");

// describe("Halloween2021 Contract", function () {
//     let contract;
//     let admin; let minter; let user;

//     before(async function(){
//       let ABI = await ethers.getContractFactory("Halloween2021");
//       contract = await ABI.deploy();
//       [admin, minter, user] = await ethers.getSigners();
//     });

//     describe("Setting up minter & verifying", async function() {
//       it("adding new admin", async function(){
//         let role = await contract.MINTER_ROLE();
//         await contract.grantRole(role, minter.address);
//       });

//       it("verifying if role added", async function() {
//         let role = await contract.MINTER_ROLE();
//         let isMinter = await contract.hasRole(role, minter.address);
//         expect(isMinter).to.equals(true);
//       });
//     });

//     describe("Minting an NFT", async function() {
//       it("mint a new nft", async function() {
//         await contract.connect(minter).mint(user.address,[1,2,3],[10,20,30]);
//       });

//       it("validating balance after mint", async function() {
//         let data = await contract.balanceOfBatch([user.address, user.address, user.address],[1,2,3]);
//         expect(ethers.utils.formatUnits(data[0],0)).to.equals("10");
//         expect(ethers.utils.formatUnits(data[1],0)).to.equals("20");
//         expect(ethers.utils.formatUnits(data[2],0)).to.equals("30");
//       });

//       it("mint a new set of nft tokens", async function() {
//         await contract.connect(minter).mint(user.address,[1,2,3],[30,20,10]);
//       });

//       it("validating balance after second mint", async function() {
//         let data = await contract.balanceOfBatch([user.address, user.address, user.address],[1,2,3]);
//         expect(ethers.utils.formatUnits(data[0],0)).to.equals("40");
//         expect(ethers.utils.formatUnits(data[1],0)).to.equals("40");
//         expect(ethers.utils.formatUnits(data[2],0)).to.equals("40");
//       })
//     });

//     describe("Verification of Metadata", async function() {
//       it("testing metadata", async function() {
//         let uri = await contract.uri(1);
//         expect(uri).to.equals("ipfs://QmZgabyoV56vkYB13wSoNn4aVfoB5nD2kagpV7LCJGjeCr/1.json");
//       });
//     });
// });
