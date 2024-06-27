import React from 'react'
import { GetStaticProps } from 'next'
import { Box, Text, Image } from '@chakra-ui/react'
import { WagmiProvider, http, createConfig } from 'wagmi'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

import { MetaData } from 'components/Head'
import InternalLink from 'components/InternalLink'
import MintSmartNFT from 'components/MintSmartNFT'
import { coinbaseWallet } from 'wagmi/connectors'
import { Chain, base } from 'wagmi/chains'

const pageMeta: MetaData = {
  title: 'Onchain Summer',
  description: 'Challenge: Go onchain in less than 60 seconds',
  nolayout: true,
  noindex: true,
}

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: { pageMeta },
  }
}

const Confirmation = (): JSX.Element => {
  const chains = [base] as [Chain, ...Chain[]]

  const customWagmiConfig = createConfig({
    chains,
    multiInjectedProviderDiscovery: false,
    connectors: [
      coinbaseWallet({
        appName: 'Bankless Academy',
        preference: 'smartWalletOnly',
        appLogoUrl: 'https://app.banklessacademy.com/logo.jpg',
      }),
    ],
    ssr: true,
    transports: {
      [base.id]: http(),
    },
  })

  const queryClient = new QueryClient()

  return (
    <WagmiProvider config={customWagmiConfig}>
      <QueryClientProvider client={queryClient}>
        <Box h="100vh">
          <Box m="24px">
            <InternalLink href="/" target="_blank">
              <Image
                height="60px"
                src="/images/BanklessAcademy.svg"
                alt="Bankless Academy"
              />
            </InternalLink>
          </Box>
          <Text
            as="h1"
            fontSize="4xl"
            fontWeight="bold"
            textAlign="center"
            mt="8"
          >
            Onchain Summer Challenge
          </Text>
          <Text
            as="h2"
            fontSize="3xl"
            fontWeight="bold"
            textAlign="center"
            mt="8"
          >
            - Go onchain in less than 60 seconds -
          </Text>
          <Image
            position="absolute"
            zIndex={-10}
            bottom="0"
            right="0"
            h="auto"
            w="auto"
            maxH="80vh"
            src="/images/bankless-instructor.png"
          />
          <MintSmartNFT />
        </Box>
      </QueryClientProvider>
    </WagmiProvider>
  )
}

export default Confirmation
