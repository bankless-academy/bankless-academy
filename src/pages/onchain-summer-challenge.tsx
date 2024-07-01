import React, { useEffect, useState } from 'react'
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
import { useSmallScreen } from 'hooks/index'

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

const OnchainSummerChallenge = (): JSX.Element => {
  const [isSmallScreen, isMediumScreen] = useSmallScreen()
  const chains = [base] as [Chain, ...Chain[]]
  const [isScrollable, setIsScrollable] = useState(false)

  const checkScrollable = () => {
    const scrollHeight = document.body.scrollHeight
    const innerHeight = window.innerHeight
    setIsScrollable(scrollHeight > innerHeight)
  }

  useEffect(() => {
    const handleResize = () => {
      checkScrollable()
    }

    window.addEventListener('resize', handleResize)

    setTimeout(() => {
      checkScrollable()
    }, 500)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

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
        <Box
          h="100vh"
          position="relative"
          display={isScrollable ? 'contents' : 'block'}
        >
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
          {!isMediumScreen && (
            <Image
              position={isScrollable ? 'fixed' : 'absolute'}
              bottom="0"
              right="0"
              h="80%"
              zIndex="-1"
              src="/images/bankless-instructor.png"
            />
          )}
          <Text
            as="h1"
            fontSize={isSmallScreen ? '3xl' : '5xl'}
            fontWeight="bold"
            textAlign="center"
            mt="8"
            p={isSmallScreen ? '4' : '8'}
          >
            Can you go onchain in less than 60 seconds?
          </Text>
          <MintSmartNFT />
        </Box>
      </QueryClientProvider>
    </WagmiProvider>
  )
}

export default OnchainSummerChallenge
