import { IS_BADGE_PROD } from 'constants/badges'
import { arbitrum, arbitrumSepolia, base, baseSepolia, mainnet, optimism, optimismSepolia, polygon, polygonMumbai, sepolia } from 'viem/chains'

export const ENABLE_TESTNET = false

// https://chainlist.org/
const TESTNET_NETWORKS =
  !IS_BADGE_PROD || ENABLE_TESTNET
    ? {
      sepolia: {
        name: sepolia.name,
        image: '/images/eth-test.svg',
        currencySymbol: sepolia.nativeCurrency.symbol,
        chainId: sepolia.id,
        rpcUrlAdd: sepolia.rpcUrls.default,
        blockExplorer: sepolia.blockExplorers,
      },
      arbitrumSepolia: {
        name: arbitrumSepolia.name,
        image: '/images/arbitrum-test.svg',
        currencySymbol: arbitrumSepolia.nativeCurrency.symbol,
        chainId: arbitrumSepolia.id,
        rpcUrlAdd: arbitrumSepolia.rpcUrls.default,
        blockExplorer: arbitrumSepolia.blockExplorers,
      },
      baseSepolia: {
        name: baseSepolia.name,
        image: '/images/base-test.svg',
        currencySymbol: baseSepolia.nativeCurrency.symbol,
        chainId: baseSepolia.id,
        rpcUrlAdd: baseSepolia.rpcUrls.default,
        blockExplorer: baseSepolia.blockExplorers,
      },
      optimismSepolia: {
        name: optimismSepolia.name,
        image: '/images/op-test.svg',
        currencySymbol: optimismSepolia.nativeCurrency.symbol,
        chainId: optimismSepolia.id,
        rpcUrlAdd: optimismSepolia.rpcUrls.default,
        blockExplorer: optimismSepolia.blockExplorers,
      },
      polygonMumbai: {
        name: polygonMumbai.name,
        image: '/images/matic-test.svg',
        currencySymbol: polygonMumbai.nativeCurrency.symbol,
        chainId: polygonMumbai.id,
        rpcUrlAdd: polygonMumbai.rpcUrls.default,
        blockExplorer: polygonMumbai.blockExplorers,
      },
    }
    : {}

export const NETWORKS = Object.freeze({
  mainnet: {
    name: mainnet.name,
    image: '/images/eth.svg',
    currencySymbol: mainnet.nativeCurrency.symbol,
    chainId: mainnet.id,
    rpcUrlAdd: mainnet.rpcUrls.default,
    blockExplorer: mainnet.blockExplorers,
  },
  arbitrum: {
    name: 'Arbitrum', // technically Arbitrum One
    image: '/images/arbitrum.svg',
    currencySymbol: arbitrum.nativeCurrency.symbol,
    chainId: arbitrum.id,
    rpcUrlAdd: arbitrum.rpcUrls.default,
    blockExplorer: arbitrum.blockExplorers,
  },
  base: {
    name: base.name,
    image: '/images/base.svg',
    currencySymbol: base.nativeCurrency.symbol,
    chainId: base.id,
    rpcUrlAdd: base.rpcUrls.default,
    blockExplorer: base.blockExplorers,
  },
  optimism: {
    name: 'Optimism', // technically OP Mainnet
    image: '/images/op.svg',
    currencySymbol: optimism.nativeCurrency.symbol,
    chainId: optimism.id,
    rpcUrlAdd: optimism.rpcUrls.default,
    blockExplorer: optimism.blockExplorers,
  },
  polygon: {
    name: polygon.name,
    image: '/images/matic.svg',
    currencySymbol: polygon.nativeCurrency.symbol,
    chainId: polygon.id,
    rpcUrlAdd: polygon.rpcUrls.default,
    blockExplorer: polygon.blockExplorers,
  },
  ...TESTNET_NETWORKS,
})

export const SUPPORTED_NETWORKS_IDS = Object.values(NETWORKS).map(
  (network) => network.chainId
)
