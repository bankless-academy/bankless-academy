import { INFURA_ID } from 'constants/index'
import { IS_MINTKUDOS_SANDBOX } from 'constants/kudos'

const TESTNET_NETWORKS = IS_MINTKUDOS_SANDBOX
  ? {
      kovan: {
        name: 'Goerli Testnet',
        image: '/images/eth-test.svg',
        currencySymbol: 'GoerliETH',
        chainId: 5,
        rpcUrl: `https://goerli.infura.io/v3/${INFURA_ID}`,
        rpcUrlAdd: 'https://goerli.infura.io/v3/',
        faucet: 'https://goerlifaucet.com/',
        blockExplorer: 'https://goerli.etherscan.io/',
      },
      mumbai: {
        name: 'Mumbai Testnet',
        image: '/images/matic-test.svg',
        networkName: 'Matic (Polygon) Testnet Mumbai',
        currencySymbol: 'MATIC',
        chainId: 80001,
        rpcUrl: `https://polygon-mumbai.infura.io/v3/${INFURA_ID}`,
        rpcUrlAdd: 'https://rpc-mumbai.maticvigil.com',
        faucet: 'https://faucet.matic.network/',
        blockExplorer: 'https://mumbai.polygonscan.com/',
      },
    }
  : {}

export const NETWORKS = Object.freeze({
  mainnet: {
    name: 'Ethereum',
    image: '/images/eth.svg',
    currencySymbol: 'ETH',
    chainId: 1,
    rpcUrl: `https://mainnet.infura.io/v3/${INFURA_ID}`,
    rpcUrlAdd: 'https://mainnet.infura.io/v3/',
    blockExplorer: 'https://etherscan.io/',
  },
  matic: {
    name: 'Polygon',
    image: '/images/matic.svg',
    networkName: 'Matic (Polygon) Mainnet',
    currencySymbol: 'MATIC',
    chainId: 137,
    rpcUrl: `https://polygon-mainnet.infura.io/v3/${INFURA_ID}`,
    rpcUrlAdd: 'https://polygon-rpc.com',
    faucet: 'https://matic.supply/',
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
