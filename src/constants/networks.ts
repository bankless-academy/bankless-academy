import { IS_BADGE_PROD } from 'constants/badges'

const ENABLE_TESTNET = false

// https://chainlist.org/
const TESTNET_NETWORKS =
  !IS_BADGE_PROD || ENABLE_TESTNET
    ? {
      kovan: {
        name: 'Goerli Testnet',
        image: '/images/eth-test.svg',
        currencySymbol: 'GoerliETH',
        chainId: 5,
        infuraRpcUrl: 'https://goerli.infura.io/v3/',
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
        infuraRpcUrl: 'https://polygon-mumbai.infura.io/v3/',
        rpcUrlAdd: 'https://rpc-mumbai.maticvigil.com',
        faucet: 'https://faucet.matic.network/',
        blockExplorer: 'https://mumbai.polygonscan.com/',
      },
      goerli: {
        name: 'Optimism Testnet',
        image: '/images/op-test.svg',
        networkName: 'Optimistic Goerli',
        currencySymbol: 'GoerliETH',
        chainId: 420,
        infuraRpcUrl: 'https://optimism-goerli.infura.io/v3/',
        rpcUrlAdd: 'https://goerli.optimism.io',
        faucet: 'https://faucet.quicknode.com/optimism/goerli',
        blockExplorer: 'https://goerli-optimism.etherscan.io/',
      },
    }
    : {}

export const NETWORKS = Object.freeze({
  mainnet: {
    name: 'Ethereum',
    image: '/images/eth.svg',
    currencySymbol: 'ETH',
    chainId: 1,
    infuraRpcUrl: 'https://mainnet.infura.io/v3/',
    rpcUrlAdd: 'https://mainnet.infura.io/v3/',
    blockExplorer: 'https://etherscan.io/',
  },
  matic: {
    name: 'Polygon',
    image: '/images/matic.svg',
    networkName: 'Matic (Polygon) Mainnet',
    currencySymbol: 'MATIC',
    chainId: 137,
    infuraRpcUrl: 'https://polygon-mainnet.infura.io/v3/',
    rpcUrlAdd: 'https://polygon-rpc.com',
    faucet: 'https://matic.supply/',
    blockExplorer: 'https://polygonscan.com',
  },
  optimism: {
    name: 'Optimism',
    image: '/images/op.svg',
    networkName: 'Optimism Mainnet',
    currencySymbol: 'ETH',
    chainId: 10,
    infuraRpcUrl: 'https://optimism-mainnet.infura.io/v3/',
    rpcUrlAdd: 'https://mainnet.optimism.io',
    faucet: 'https://community.optimism.io/docs/useful-tools/faucets/',
    blockExplorer: 'https://optimistic.etherscan.io',
  },
  ...TESTNET_NETWORKS,
})

export const SUPPORTED_NETWORKS_IDS = Object.values(NETWORKS).map(
  (network) => network.chainId
)
