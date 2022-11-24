import { INFURA_ID } from 'constants/index'
import { IS_MINTKUDOS_SANDBOX } from 'constants/kudos'

const TESTNET_NETWORKS = IS_MINTKUDOS_SANDBOX
  ? {
      kovan: {
        name: 'Kovan Testnet',
        image: '/images/eth-test.svg',
        chainId: 42,
        rpcUrl: `https://kovan.infura.io/v3/${INFURA_ID}`,
        faucet: 'https://ethdrop.dev/',
        blockExplorer: 'https://kovan.etherscan.io/',
      },
      mumbai: {
        name: 'Mumbai Testnet',
        image: '/images/matic-test.svg',
        networkName: 'Matic(Polygon) Testnet Mumbai',
        currencySymbol: 'MATIC',
        chainId: 80001,
        rpcUrl: `https://polygon-mumbai.infura.io/v3/${INFURA_ID}`,
        faucet: 'https://faucet.matic.network/',
        blockExplorer: 'https://mumbai.polygonscan.com/',
      },
    }
  : {}

export const NETWORKS = Object.freeze({
  mainnet: {
    name: 'Ethereum',
    image: '/images/eth.svg',
    chainId: 1,
    rpcUrl: `https://mainnet.infura.io/v3/${INFURA_ID}`,
    blockExplorer: 'https://etherscan.io/',
  },
  matic: {
    name: 'Polygon',
    image: '/images/matic.svg',
    networkName: 'Matic(Polygon) Mainnet',
    currencySymbol: 'MATIC',
    chainId: 137,
    rpcUrl: `https://polygon-mainnet.infura.io/v3/${INFURA_ID}`,
    faucet: 'https://faucet.matic.network/',
    blockExplorer: 'https://polygonscan.com',
  },
  ...TESTNET_NETWORKS,
})

export const SUPPORTED_NETWORKS_IDS = Object.values(NETWORKS).map(
  (network) => network.chainId
)

export const RPCS = {}

Object.values(NETWORKS).map((network) => {
  RPCS[network.chainId] = network.rpcUrl
})
