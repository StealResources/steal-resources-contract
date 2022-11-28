const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("StealResources", function() {
    it("init params", async function () {
        [deployer, ...users] = await ethers.getSigners();
    });
    it("Should return the new greeting once it's changed", async function() {
        const StealResources = await ethers.getContractFactory("StealResources");
        const stealResources = await StealResources.deploy();
        
        await stealResources.deployed();
        
        await stealResources.connect(deployer).getAirdrop({ value: ethers.utils.parseEther("0.01") });
    });
});