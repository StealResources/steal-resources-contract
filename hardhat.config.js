require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.17",
  networks: {
    hardhat: {
      forking: {
        url: "https://rpc.ankr.com/bsc",
        // blockNumber: 21140430
        // blockNumber: 21140430
      }
    }
  },
  mocha: {
    timeout: 100000000
  }
};
