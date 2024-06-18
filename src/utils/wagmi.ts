import { PROJECT_NAME } from 'constants/index'
import { injected, walletConnect } from 'wagmi/connectors'
import { cookieStorage, createStorage, http } from 'wagmi'
import { defaultWagmiConfig } from '@web3modal/wagmi/react/config'
import {
  mainnet,
  polygon,
  optimism
} from 'wagmi/chains'

export const chains = [
  mainnet,
  polygon,
  optimism,
] as const

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
  chains: chains as any,
  projectId: WALLET_CONNECT_PROJECT_ID,
  metadata,
  ssr: true,
  storage: createStorage({
    storage: cookieStorage
  }),
  enableInjected: true,
  // enableCoinbase: false,
  transports: {
    [mainnet.id]: http(),
    [polygon.id]: http(),
    [optimism.id]: http(),
  },
  connectors: [injected(), walletConnect({
    isNewChainsStale: false,
    projectId: WALLET_CONNECT_PROJECT_ID,
  }),],
})
