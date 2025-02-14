import { PROJECT_NAME } from 'constants/index'
import { WagmiAdapter } from '@reown/appkit-adapter-wagmi'
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
  type Chain,
} from '@reown/appkit/networks'

import { ENABLE_TESTNET } from 'constants/networks'
import { frameConnector } from './frameConnector'

const testChains = ENABLE_TESTNET ? [
  sepolia,
  arbitrumSepolia,
  baseSepolia,
  optimismSepolia,
  polygonMumbai,
] : []

export const networks: [Chain, ...Chain[]] = [
  mainnet,
  arbitrum,
  base,
  optimism,
  polygon,
  ...testChains
]

// 1. Get projectID at https://cloud.walletconnect.com
export const WALLET_CONNECT_PROJECT_ID = process.env.NEXT_PUBLIC_WALLET_CONNECT_PROJECT_ID

// 2. Configure wagmi client
export const metadata = {
  name: PROJECT_NAME,
  description: `Connect to ${PROJECT_NAME}`,
  url: 'https://app.banklessacademy.com/',
  icons: ['https://app.banklessacademy.com/logo.jpg'],
}

// Only add Frame connector if in webapp or embed mode
const isWebappOrEmbed = typeof window !== 'undefined' && (
  new URLSearchParams(window.location.search).get('webapp') === 'true' ||
  new URLSearchParams(window.location.search).get('embed') === 'true' ||
  localStorage.getItem('pwa') === 'true'
)
const connectors = isWebappOrEmbed ? [frameConnector()] : []

export const wagmiAdapter = new WagmiAdapter({
  networks,
  projectId: WALLET_CONNECT_PROJECT_ID,
  ssr: true,
  connectors,
})

export const wagmiConfig = wagmiAdapter.wagmiConfig
