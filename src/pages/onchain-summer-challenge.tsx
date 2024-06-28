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
import ExternalLink from 'components/ExternalLink'

const pageMeta: MetaData = {
  title: 'Onchain Summer Challenge',
  description: 'Go onchain in less than 60 seconds',
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
          <Box m="24px" display="flex" justifyContent="space-between">
            <InternalLink href="/">
              <Image
                height="60px"
                src="/images/BanklessAcademy.svg"
                alt="Bankless Academy"
                pr="8"
              />
            </InternalLink>
            <ExternalLink
              href="https://www.base.org/onchainsummer"
              target="_blank"
            >
              <Image
                height="60px"
                src="/images/ocs_banner.svg"
                alt="Onchain Summer"
              />
            </ExternalLink>
          </Box>
          <Text
            as="h1"
            fontSize="5xl"
            fontWeight="bold"
            textAlign="center"
            mt="8"
            p="8"
          >
            Can you go onchain in less than 60 seconds?
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
