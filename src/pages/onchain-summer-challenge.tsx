import React from 'react'
import { GetServerSidePropsContext } from 'next'
import { Box, Center, Image } from '@chakra-ui/react'
import { WagmiProvider, http, createConfig } from 'wagmi'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

import { MetaData } from 'components/Head'
import MintSmartNFT from 'components/MintSmartNFT'
import { coinbaseWallet } from 'wagmi/connectors'
import { Chain, base } from 'wagmi/chains'
import { useSmallScreen } from 'hooks/index'
import { StyledHeading } from 'components/LessonCards'
import { DOMAIN_URL_, HOMEPAGE_BACKGROUND } from 'constants/index'
import ExternalLink from 'components/ExternalLink'

export const pageMeta: MetaData = {
  title: 'Onchain Summer Challenge',
  description: 'How fast can you go onchain?',
  image: '/images/onchain-summer-challenge-social.jpg',
  nolayout: true,
  ssr: true,
}

export const getServerSideProps = async (ctx: GetServerSidePropsContext) => {
  const proto = ctx.req.headers['x-forwarded-proto'] ?? 'http'
  const host = ctx.req.headers['x-forwarded-host'] ?? ctx.req.headers.host
  const { searchParams } = new URL(ctx.req.url ?? '/', `${proto}://${host}`)

  const time = searchParams.get('time')
  const version = 'v=1'

  return {
    props: {
      pageMeta: {
        ...pageMeta,
        image: `${DOMAIN_URL_}/api/og/onchain-summer-challenge${
          time ? `?time=${time}&${version}` : `?${version}`
        }`,
      },
    },
  }
}

const OnchainSummerChallenge = (): JSX.Element => {
  const [isSmallScreen] = useSmallScreen()
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
        <Box backgroundColor="#201E1D" minH="100vh">
          <Center
            height={isSmallScreen ? '16vh' : '45vh'}
            bg={`url(${HOMEPAGE_BACKGROUND}) lightgray 50%`}
            bgSize="cover"
            bgPosition="top"
            position="relative"
            _after={{
              content: `""`,
              position: 'absolute',
              top: '60%',
              left: 0,
              right: 0,
              bottom: 0,
              background: 'linear-gradient(180deg, transparent, #201e1d)',
            }}
          >
            <Box width="100%" maxW="1200px" position="absolute" bottom="-32px">
              <Box w="100%" maxW="80vw" m="auto">
                <ExternalLink href="https://devfolio.co/projects/onchain-summer-onboarding-challenge-7b7a">
                  <Image
                    style={{
                      filter: 'drop-shadow( 3px 3px 2px rgba(0, 0, 0, .7))',
                    }}
                    position="relative"
                    zIndex={1}
                    src="/images/ocs_banner.svg"
                    alt="Bankless Academy"
                    m="auto"
                  />
                </ExternalLink>
              </Box>
            </Box>
          </Center>
          <Box maxW="1080px" m="auto" mt={isSmallScreen ? '16' : '24'}>
            <StyledHeading
              as="h1"
              size={isSmallScreen ? 'lg' : '2xl'}
              textAlign="center"
              my={8}
            >
              Onchain Summer Challenge
            </StyledHeading>
            <MintSmartNFT />
          </Box>
        </Box>
      </QueryClientProvider>
    </WagmiProvider>
  )
}

export default OnchainSummerChallenge
