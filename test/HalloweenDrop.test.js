const {expect} = require("chai");
const {ethers} = require("hardhat");

describe("Halloween Drop Contract", async function(){
    let contract;

    before(async function(){
        let ABI = await ethers.getContractFactory("HalloweenDrop");
        contract = await ABI.deploy();
    });

    describe("Adding tokenId to familyId", async function(){
        it("adding a new tokenId to familyId", async function(){
            await contract.addFamilyTokenIds(1,1);
        });
    });
});