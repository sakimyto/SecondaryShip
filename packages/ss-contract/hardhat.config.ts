/* eslint-disable dot-notation */
import 'dotenv/config'
import '@nomiclabs/hardhat-waffle'
import type { HardhatUserConfig } from 'hardhat/config'
import '@typechain/hardhat'
import '@nomiclabs/hardhat-etherscan'
import 'hardhat-gas-reporter'

import '@nomiclabs/hardhat-ethers'

import { getEnvVariable } from './scripts/helpers'

/**
 * @type HardhatUserConfig
 */
const settings: HardhatUserConfig = {
  defaultNetwork: 'localhost',
  solidity: {
    version: '0.8.9',
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
  etherscan: {
    apiKey: {
      polygon: process.env['POLYGON_API'] || '',
      polygonMumbai: process.env['POLYGON_MUMBAI_API'] || '',
    },
  },
  gasReporter: {
    enabled: true,
  },
  networks: {
    localhost: {
      url: 'http://localhost:8545',
      chainId: 31337,
      accounts: {
        mnemonic: 'test test test test test test test test test test test junk',
      },
    },
    polygon: {
      url: process.env.POLYGON_API,
      accounts: [getEnvVariable('ACCOUNT_PRIVATE_KEY')],
    },
    mumbai: {
      url: process.env.POLYGON_MUMBAI_API,
      accounts: [getEnvVariable('ACCOUNT_PRIVATE_KEY')],
    },
  },
  mocha: {
    timeout: 60_000,
  },
}

export default settings
