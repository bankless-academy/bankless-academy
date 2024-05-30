'use client'

import React, { ReactNode } from 'react'

import { createWeb3Modal } from '@web3modal/wagmi/react'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

import { State, WagmiProvider } from 'wagmi'
import { siweConfig } from 'utils/siweConfig'
import { WALLET_CONNECT_PROJECT_ID, wagmiConfig } from 'utils/wagmi'

// Setup queryClient
const queryClient = new QueryClient()

if (!WALLET_CONNECT_PROJECT_ID) throw new Error('Project ID is not defined')

// Create modal
const themeVariables = {
  '--w3m-accent': '#B85FF1',
  '--w3m-color-mix': '#B85FF1',
}
createWeb3Modal({
  siweConfig,
  wagmiConfig,
  projectId: WALLET_CONNECT_PROJECT_ID,
  themeMode: 'dark',
  themeVariables,
  allowUnsupportedChain: true,
  enableAnalytics: true,
  featuredWalletIds: [
    // Zerion
    'ecc4036f814562b41a5268adc86270fba1365471402006302e70169465b7ac18',
    // 1inch
    'c286eebc742a537cd1d6818363e9dc53b21759a1e8e5d9b263d0c03ec7703576',
    // Rainbow
    '1ae92b26df02f0abca6304df07debccd18262fdf5fe82daa81593582dac9a369',
    // MetaMask
    'c57ca95b47569778a828d19178114f4db188b89b763c899ba0be274e97267d96',
  ],
})

export default function Web3ModalProvider({
  children,
  initialState,
}: {
  children: ReactNode
  initialState?: State
}) {
  return (
    <WagmiProvider config={wagmiConfig} initialState={initialState}>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </WagmiProvider>
  )
}
