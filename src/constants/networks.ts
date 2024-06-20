import { IS_BADGE_PROD } from 'constants/badges'
import { base, baseSepolia, mainnet, optimism, optimismSepolia, polygon, polygonMumbai, sepolia } from 'viem/chains'

export const ENABLE_TESTNET = true

// https://chainlist.org/
const TESTNET_NETWORKS =
  !IS_BADGE_PROD || ENABLE_TESTNET
    ? {
      sepolia: {
        name: sepolia.name,
        image: '/images/eth-test.svg',
        currencySymbol: sepolia.nativeCurrency.symbol,
        chainId: sepolia.id,
        infuraRpcUrl: 'https://sepolia.infura.io/v3/',
        rpcUrlAdd: sepolia.rpcUrls.default,
        blockExplorer: sepolia.blockExplorers,
      },
      polygonMumbai: {
        name: polygonMumbai.name,
        image: '/images/matic-test.svg',
        currencySymbol: polygonMumbai.nativeCurrency.symbol,
        chainId: polygonMumbai.id,
        infuraRpcUrl: 'https://polygon-mumbai.infura.io/v3/',
        rpcUrlAdd: polygonMumbai.rpcUrls.default,
        blockExplorer: polygonMumbai.blockExplorers,
      },
      optimismSepolia: {
        name: optimismSepolia.name,
        image: '/images/op-test.svg',
        currencySymbol: optimismSepolia.nativeCurrency.symbol,
        chainId: optimismSepolia.id,
        infuraRpcUrl: 'https://optimism-sepolia.infura.io/v3/',
        rpcUrlAdd: optimismSepolia.rpcUrls.default,
        blockExplorer: optimismSepolia.blockExplorers,
      },
      baseSepolia: {
        name: baseSepolia.name,
        image: '/images/base-test.svg',
        currencySymbol: baseSepolia.nativeCurrency.symbol,
        chainId: baseSepolia.id,
        infuraRpcUrl: 'https://base-sepolia.infura.io/v3/',
        rpcUrlAdd: baseSepolia.rpcUrls.default,
        blockExplorer: baseSepolia.blockExplorers,
      },
    }
    : {}

export const NETWORKS = Object.freeze({
  mainnet: {
    name: mainnet.name,
    image: '/images/eth.svg',
    currencySymbol: mainnet.nativeCurrency.symbol,
    chainId: mainnet.id,
    infuraRpcUrl: 'https://mainnet.infura.io/v3/',
    rpcUrlAdd: mainnet.rpcUrls.default,
    blockExplorer: mainnet.blockExplorers,
  },
  polygon: {
    name: polygon.name,
    image: '/images/matic.svg',
    currencySymbol: polygon.nativeCurrency.symbol,
    chainId: polygon.id,
    infuraRpcUrl: 'https://polygon-mainnet.infura.io/v3/',
    rpcUrlAdd: polygon.rpcUrls.default,
    blockExplorer: polygon.blockExplorers,
  },
  optimism: {
    name: 'Optimism', // technically OP Mainnet
    image: '/images/op.svg',
    currencySymbol: optimism.nativeCurrency.symbol,
    chainId: optimism.id,
    infuraRpcUrl: 'https://optimism-mainnet.infura.io/v3/',
    rpcUrlAdd: optimism.rpcUrls.default,
    blockExplorer: optimism.blockExplorers,
  },
  base: {
    name: base.name,
    image: '/images/base.svg',
    currencySymbol: base.nativeCurrency.symbol,
    chainId: base.id,
    infuraRpcUrl: 'https://base-mainnet.infura.io/v3/',
    rpcUrlAdd: base.rpcUrls.default,
    blockExplorer: base.blockExplorers,
  },
  ...TESTNET_NETWORKS,
})

export const SUPPORTED_NETWORKS_IDS = Object.values(NETWORKS).map(
  (network) => network.chainId
)
