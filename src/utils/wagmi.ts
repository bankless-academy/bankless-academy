import { PROJECT_NAME } from 'constants/index'
import { injected, walletConnect } from 'wagmi/connectors'
import { cookieStorage, createStorage, http } from 'wagmi'
import { defaultWagmiConfig } from '@web3modal/wagmi/react/config'
import {
  mainnet,
  optimism,
  polygon,
  base,
  sepolia,
  polygonMumbai,
  optimismSepolia,
  baseSepolia,
  arbitrum,
  arbitrumSepolia,
  type Chain
} from 'wagmi/chains'

import { ENABLE_TESTNET } from 'constants/networks'

const testChains = ENABLE_TESTNET ? [
  sepolia,
  arbitrumSepolia,
  baseSepolia,
  optimismSepolia,
  polygonMumbai,
] : []

const testTransports = ENABLE_TESTNET ? {
  [sepolia.id]: http(),
  [arbitrumSepolia.id]: http(),
  [baseSepolia.id]: http(),
  [optimismSepolia.id]: http(),
  [polygonMumbai.id]: http(),
} : {}

export const chains = [
  mainnet,
  arbitrum,
  base,
  optimism,
  polygon,
  ...testChains
] as [Chain, ...Chain[]]

// 1. Get projectID at https://cloud.walletconnect.com
export const WALLET_CONNECT_PROJECT_ID = process.env.NEXT_PUBLIC_WALLET_CONNECT_PROJECT_ID

// 2. Configure wagmi client
const metadata = {
  name: PROJECT_NAME,
  description: `Connect to ${PROJECT_NAME}`,
  url: 'https://app.banklessacademy.com/',
  icons: ['https://app.banklessacademy.com/logo.jpg'],
}

export const wagmiConfig = defaultWagmiConfig({
  chains,
  projectId: WALLET_CONNECT_PROJECT_ID,
  metadata,
  ssr: true,
  auth: {
    email: false, // default to true
    // socials: ['google', 'x', 'github', 'discord', 'apple'],
    // showWallets: true, // default to true
    // walletFeatures: true // default to true
  },
  storage: createStorage({
    storage: cookieStorage
  }),
  enableInjected: true,
  // enableCoinbase: false,
  // coinbasePreference: 'eoaOnly',
  transports: {
    [mainnet.id]: http(),
    [arbitrum.id]: http(),
    [base.id]: http(),
    [optimism.id]: http(),
    [polygon.id]: http(),
    ...testTransports,
  },
  connectors: [injected(), walletConnect({
    isNewChainsStale: false,
    projectId: WALLET_CONNECT_PROJECT_ID,
  }),],
})
