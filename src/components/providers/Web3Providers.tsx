// Client-only web3 provider tree.
//
// WHY THIS FILE EXISTS: `utils/wagmi` instantiates a WagmiAdapter at module
// scope, which pulls @walletconnect (420MB), @selfxyz (136MB), viem (62MB),
// @reown (24MB) and @coinbase (23MB) into whatever bundle imports it. _app.tsx
// used to import it statically, so all of that landed in the SERVER bundle of
// every page and was evaluated on each cold container: measured ~15s of
// cold-start before getServerSideProps even ran (which itself took 1-425ms).
// It also executed Coinbase's telemetry loader server-side, producing the
// "window is not defined" unhandled rejections.
//
// Loading this module through `next/dynamic(..., { ssr: false })` is what
// actually keeps those packages out of the server bundle. Nothing here may be
// imported statically from _app.tsx or the win is silently lost.
//
// Behaviour is unchanged: this whole subtree already rendered inside
// NonSSRWrapper, i.e. client-only.
import React from 'react'
import { Box, Button, Text } from '@chakra-ui/react'
import styled from '@emotion/styled'
import { createAppKit, useAppKitState } from '@reown/appkit/react'
import { ArrowSquareOut } from '@phosphor-icons/react'
import { WagmiProvider } from 'wagmi'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { t } from 'i18next'

import {
  WALLET_CONNECT_PROJECT_ID,
  wagmiAdapter,
  networks,
  metadata,
} from 'utils/wagmi'
import { FrameProvider } from 'components/providers/FrameProvider'
import ExternalLink from 'components/ExternalLink'

// Copied verbatim from _app.tsx, where it lived before this subtree moved.
const Overlay = styled(Box)`
  opacity: 1;
  position: fixed;
  left: 0px;
  top: 0px;
  width: 100vw;
  height: 100vh;
  background: var(--chakra-colors-blackAlpha-600);
  margin: 0;
  backdrop-filter: blur(10px);
`

const themeVariables = {
  '--w3m-accent': '#B85FF1',
  '--w3m-color-mix': '#B85FF1',
}

createAppKit({
  adapters: [wagmiAdapter],
  networks,
  metadata: metadata,
  projectId: WALLET_CONNECT_PROJECT_ID,
  themeMode: 'dark',
  themeVariables,
  allowUnsupportedChain: true,
  features: {
    analytics: true,
    onramp: false,
    email: false,
    socials: [],
  },
  featuredWalletIds: [
    // Zerion
    'ecc4036f814562b41a5268adc86270fba1365471402006302e70169465b7ac18',
    // Rainbow
    '1ae92b26df02f0abca6304df07debccd18262fdf5fe82daa81593582dac9a369',
    // MetaMask
    'c57ca95b47569778a828d19178114f4db188b89b763c899ba0be274e97267d96',
    // Coinbase Wallet
    'fd20dc426fb37566d803205b19bbc1d4096b248ac04548e3cfb6b3a38bd033aa',
  ],
})

const queryClient = new QueryClient()

const Web3Providers = ({
  children,
}: {
  children: React.ReactNode
}): React.ReactElement => {
  const stateData = useAppKitState()
  return (
    <>
      <WagmiProvider config={wagmiAdapter.wagmiConfig}>
        <QueryClientProvider client={queryClient}>
          <FrameProvider>{children}</FrameProvider>
        </QueryClientProvider>
      </WagmiProvider>

  <Overlay hidden={!stateData.open} zIndex="999" />
  {/* don't show if injected wallet is detected */}
  {stateData.open &&
    typeof window !== 'undefined' &&
    !window.ethereum && (
      <Box
        position="fixed"
        top="0"
        left="0"
        right="0"
        p="4"
        zIndex="1000"
        maxW="380px"
        margin="auto"
      >
        {/* The qualifier is load-bearing here in a way it is not elsewhere:
            this banner sits directly above AppKit's wallet list, which already
            offers Zerion as a connect option. Without "No wallet?" the two read
            as the same action, when one installs a wallet and the other
            connects one you already have. */}
        <Text textAlign="center" fontWeight="bold" mb="2">
          {t('No wallet?')}
        </Text>
        <ExternalLink href="https://bankless.ac/zerion">
          <Button
            size="lg"
            variant="primaryBig"
            width="100%"
            // Same trailing marker as the nav popover: both go off-site to the
            // same URL, and ExternalLink opens every one of them in a new tab.
            rightIcon={<ArrowSquareOut />}
            // Long in several languages ("Obtenez le portefeuille Zerion"),
            // and the banner is capped at 380px, so wrap rather than clip.
            whiteSpace="normal"
            // Pin the geometry the variant's hover would otherwise change.
            // primaryBig uses the wider 23px padding, not primary's 15px.
            px="23px"
            border="1px solid transparent"
            h="auto"
            minH="48px"
            py="2"
            lineHeight="1.3"
          >
            {t('Get the Zerion wallet')}
          </Button>
        </ExternalLink>
      </Box>
    )}
    </>
  )
}

export default Web3Providers
