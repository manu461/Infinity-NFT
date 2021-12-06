require('dotenv').config()

const HDWalletProvider = require('@truffle/hdwallet-provider');

const mnemonic = process.env.MNEMONIC
const ethClientURL = process.env.ETH_CLIENT_URL
const maticClientUrl = process.env.MATIC_CLIENT_URL

module.exports = {

  networks: {
    development: {
      host: "127.0.0.1",
      port: 8545,
      network_id: "*",
    },

    rinkeby: {
      provider: () => new HDWalletProvider(mnemonic, ethClientURL),
      confirmations: 2,
      skipDryRun: true,
      timeoutBlocks: 200,
      network_id: 4,
      gas: 3000000,
      networkCheckTimeout: 10000000,
    },

    matic: {
      provider: () => HDWalletProvider(mnemonic, maticClientUrl),
      confirmations: 2,
      skipDryRun: true,
      timeoutBlocks: 200,
      network_id: 137,
    }
  },

  mocha: {
  },

  compilers: {
    solc: {
      version: "0.8.7",
    }
  },

};
