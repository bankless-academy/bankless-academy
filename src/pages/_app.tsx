import { useEffect, useState } from 'react'
import type { AppProps } from 'next/app'
import { Global, css } from '@emotion/react'
import 'react-notion-x/src/styles.css'
import 'prismjs/themes/prism-tomorrow.css'
import 'mac-scrollbar/dist/mac-scrollbar.css'
import 'highlight.js/styles/vs.css'
import { GlobalScrollbar } from 'mac-scrollbar'
import { isMobile } from 'react-device-detect'
import styled from '@emotion/styled'
import { Box, Container, Heading, Image } from '@chakra-ui/react'
// https://docs.walletconnect.com/2.0/web3modal/react/about
import { createWeb3Modal } from '@web3modal/wagmi/react'
import { WagmiProvider } from 'wagmi'
import Router from 'next/router'
import { useWeb3ModalState } from '@web3modal/wagmi/react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

import Head, { MetaData } from 'components/Head'
import Layout from 'layout/index'
import ThemeProvider from 'theme'
import { DEBUG } from 'utils/index'
import NonSSRWrapper from 'components/NonSSRWrapper'
import 'utils/translation'
import { WALLET_CONNECT_PROJECT_ID, wagmiConfig } from 'utils/wagmi'

const Overlay = styled(Box)`
  opacity: 1;
  position: fixed;
  left: 0px;
  top: 0px;
  width: 100vw;
  height: 100vh;
  background: var(--chakra-colors-blackAlpha-600);
  z-index: 2;
  margin: 0;
  backdrop-filter: blur(10px);
`

const App = ({
  Component,
  pageProps,
}: AppProps<{
  pageMeta: MetaData
  isNotion: boolean
}>): JSX.Element => {
  if (
    (process.env.NEXT_PUBLIC_MAINTENANCE &&
      process.env.NEXT_PUBLIC_MAINTENANCE !== DEBUG) ||
    pageProps.pageMeta?.title === 'Maintenance'
  ) {
    return <>Maintenance in progress ...</>
  }
  if (pageProps.pageMeta?.nolayout) {
    return (
      <>
        <Head metadata={pageProps.pageMeta} />
        <ThemeProvider>
          <Global styles={css``} />
          {pageProps.pageMeta?.ssr ? (
            <Component {...pageProps} />
          ) : (
            <NonSSRWrapper>
              <Component {...pageProps} />
            </NonSSRWrapper>
          )}
        </ThemeProvider>
      </>
    )
  }

  // 0. Setup queryClient
  const queryClient = new QueryClient()

  // 3. createWeb3Modal
  const themeVariables = {
    '--w3m-accent': '#B85FF1',
    '--w3m-color-mix': '#B85FF1',
  }
  createWeb3Modal({
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

  const { open } = useWeb3ModalState()

  const [isLoadingProfile, setIsLoadingProfile] = useState(false)
  useEffect(() => {
    Router.events.on('routeChangeStart', (url) => {
      if (url?.startsWith('/explorer/')) setIsLoadingProfile(true)
    })
    Router.events.on('routeChangeComplete', () => {
      setIsLoadingProfile(false)
    })

    Router.events.on('routeChangeError', () => {
      setIsLoadingProfile(false)
    })
  }, [Router])

  return (
    <>
      <Head metadata={pageProps.pageMeta} />
      {!isMobile && <GlobalScrollbar skin="dark" />}
      <ThemeProvider>
        <NonSSRWrapper>
          <WagmiProvider config={wagmiConfig}>
            <QueryClientProvider client={queryClient}>
              <>
                <Global
                  styles={css`
                    @font-face {
                      font-family: 'ClearSans';
                      src: url(/fonts/clear-sans/TTF/ClearSans-Bold.ttf);
                    }
                    .web3modal-modal-lightbox {
                      background: linear-gradient(
                        152.97deg,
                        rgba(0, 0, 0, 0.45) 0%,
                        rgba(38, 38, 38, 0.25) 100%
                      );
                      backdrop-filter: blur(42px);
                    }
                    .web3modal-modal-card {
                      border: 1px solid #646587 !important;
                      box-shadow: 0px 0px 50px 0px rgba(123, 0, 255, 0.25) !important;
                      backdrop-filter: blur(42px) !important;
                    }
                    /* Disable focus border in Chakra-UI */
                    *:focus {
                      box-shadow: none !important;
                    }
                    /* custom scrollbar color & width */
                    .ms-track .ms-thumb {
                      background: #916ab8;
                    }
                    .ms-track.ms-y .ms-thumb {
                      width: 7px;
                    }
                    /* #chakra-toast-manager-bottom {
                  margin-bottom: 81px !important;
                } */
                    /* HACK: custom toast */
                    .css-qret8q,
                    .css-zqqgfp,
                    .css-mu48c4 {
                      color: white !important;
                      border-radius: 15px !important;
                      a {
                        color: white !important;
                        text-decoration: underline;
                        text-underline-position: under;
                      }
                    }
                    /* success toast */
                    .css-qret8q {
                      background: linear-gradient(
                        180deg,
                        #429683,
                        #35564f
                      ) !important;
                      border: 2px solid #a4d7cb !important;
                    }
                    /* warning toast */
                    .css-zqqgfp {
                      background: linear-gradient(
                        180deg,
                        #e7b283,
                        #8e5c49
                      ) !important;
                      border: 2px solid #ffe0bb !important;
                    }
                    /* error toast */
                    .css-mu48c4 {
                      background: linear-gradient(
                        180deg,
                        #fe7a7a,
                        #e05e55
                      ) !important;
                      border: 2px solid #f5a98d !important;
                    }
                    /* hide toast status logo */
                    .css-14ogjxt {
                      display: none !important;
                    }
                    /* toast content max width for mobile */
                    /* .css-cgq59l { */
                    .chakra-toast > div > div > div > div > div > div > div {
                      max-width: calc(100vw - 108px);
                    }
                    @media (max-width: 480px) {
                      .chakra-toast {
                        margin-bottom: 80px !important;
                      }
                    }
                    /* menu + popover styling */
                    .chakra-menu__menu-list,
                    .chakra-popover__content {
                      background: linear-gradient(
                        rgba(163, 121, 189, 0.8) 0%,
                        rgba(90, 81, 152, 0.8) 100%
                      ) !important;
                      backdrop-filter: blur(10px);
                      border: 1px solid #b68bcc !important;
                    }
                    .chakra-menu__menuitem {
                      background: transparent !important;
                    }
                    .css-1slra81 {
                      background-color: var(
                        --chakra-colors-blackAlpha-500
                      ) !important;
                    }
                    .css-1lh2krs:focus,
                    .css-18esm8n:focus {
                      background-color: var(
                        --chakra-colors-blackAlpha-300
                      ) !important;
                    }
                    .chakra-popover__arrow {
                      background: #86629c !important;
                      box-shadow: none !important;
                    }
                    .chakra-popover__popper[data-popper-placement='right']
                      .chakra-popover__arrow {
                      background: #705992 !important;
                    }
                    .chakra-popover__popper[data-popper-placement='top-end']
                      .chakra-popover__arrow {
                      background: #514984 !important;
                    }
                    .chakra-popover__popper[data-popper-placement='top']
                      .chakra-popover__arrow {
                      background: #514984 !important;
                    }
                    #chakra-toast-manager-top-left {
                      top: 20% !important;
                      left: 2vh !important;
                      max-width: 30vh !important;
                    }
                  `}
                />
                <Layout isLesson={pageProps.pageMeta?.isLesson || false}>
                  {isLoadingProfile ? (
                    <Container maxW="container.xl">
                      <Heading as="h2" size="xl" m="8" textAlign="center">
                        Loading Explorer Profile
                      </Heading>
                      <Image
                        margin="auto"
                        paddingTop="200px"
                        width="250px"
                        src="/loading_purple.svg"
                      />
                    </Container>
                  ) : (
                    <Component {...pageProps} />
                  )}
                </Layout>
              </>
            </QueryClientProvider>
          </WagmiProvider>

          <Overlay hidden={!open} />
        </NonSSRWrapper>
      </ThemeProvider>
    </>
  )
}

export default App
