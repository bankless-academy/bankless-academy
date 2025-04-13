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
import { Box, Button, Container, Heading, Image } from '@chakra-ui/react'
import { createAppKit, useAppKitState } from '@reown/appkit/react'
import { WagmiProvider } from 'wagmi'
import Router from 'next/router'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import * as Sentry from '@sentry/nextjs'
import { SENTRY_ENABLED } from 'constants/index'

import Head, { MetaData } from 'components/Head'
import Layout from 'layout/index'
import ThemeProvider from 'theme'
import { DEBUG } from 'utils/index'
import NonSSRWrapper from 'components/NonSSRWrapper'
import 'utils/translation'
import {
  WALLET_CONNECT_PROJECT_ID,
  wagmiAdapter,
  networks,
  metadata,
} from 'utils/wagmi'
import { FrameProvider } from 'components/providers/FrameProvider'
import ExternalLink from 'components/ExternalLink'
import { AppProvider } from 'contexts/AppContext'

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

const App = ({
  Component,
  pageProps,
}: AppProps<{
  pageMeta: MetaData
  isNotion: boolean
}>): JSX.Element => {
  const [isTelegramWebApp, setIsTelegramWebApp] = useState(false)

  useEffect(() => {
    // Check if running as Telegram Mini App
    if (typeof window !== 'undefined' && window.Telegram?.WebApp) {
      setIsTelegramWebApp(true)
      const tg = window.Telegram.WebApp

      // Apply Telegram theme colors
      if (tg.themeParams) {
        document.documentElement.style.setProperty(
          '--tg-theme-bg-color',
          tg.themeParams.bg_color
        )
        document.documentElement.style.setProperty(
          '--tg-theme-text-color',
          tg.themeParams.text_color
        )
        document.documentElement.style.setProperty(
          '--tg-theme-hint-color',
          tg.themeParams.hint_color
        )
        document.documentElement.style.setProperty(
          '--tg-theme-link-color',
          tg.themeParams.link_color
        )
        document.documentElement.style.setProperty(
          '--tg-theme-button-color',
          tg.themeParams.button_color
        )
        document.documentElement.style.setProperty(
          '--tg-theme-button-text-color',
          tg.themeParams.button_text_color
        )
        document.documentElement.style.setProperty(
          '--tg-theme-secondary-bg-color',
          tg.themeParams.secondary_bg_color
        )
      }
    }
  }, [])

  if (
    (process.env.NEXT_PUBLIC_MAINTENANCE &&
      process.env.NEXT_PUBLIC_MAINTENANCE !== DEBUG) ||
    pageProps.pageMeta?.title === 'Maintenance'
  ) {
    return SENTRY_ENABLED ? (
      <Sentry.ErrorBoundary>Maintenance in progress ...</Sentry.ErrorBoundary>
    ) : (
      <div>Maintenance in progress ...</div>
    )
  }
  if (pageProps.pageMeta?.nolayout) {
    const content = (
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
    return SENTRY_ENABLED ? (
      <Sentry.ErrorBoundary>{content}</Sentry.ErrorBoundary>
    ) : (
      content
    )
  }

  // 0. Setup queryClient
  const queryClient = new QueryClient()

  // 3. createWeb3Modal
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

  const stateData = useAppKitState()
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

  const appContent = (
    <>
      <Head metadata={pageProps.pageMeta} />
      {!isMobile && !isTelegramWebApp && <GlobalScrollbar skin="dark" />}
      <ThemeProvider>
        <NonSSRWrapper>
          <WagmiProvider config={wagmiAdapter.wagmiConfig}>
            <QueryClientProvider client={queryClient}>
              <FrameProvider>
                <AppProvider>
                  <>
                    <Global
                      styles={css`
                        @font-face {
                          font-family: 'ClearSans';
                          src: url(/fonts/clear-sans/TTF/ClearSans-Bold.ttf);
                        }
                        /* Telegram Mini App theme variables */
                        :root {
                          --tg-theme-bg-color: #000000;
                          --tg-theme-text-color: #ffffff;
                          --tg-theme-hint-color: #999999;
                          --tg-theme-link-color: #b85ff1;
                          --tg-theme-button-color: #b85ff1;
                          --tg-theme-button-text-color: #ffffff;
                          --tg-theme-secondary-bg-color: #1a1a1a;
                        }
                        /* Apply Telegram theme to body */
                        body {
                          background-color: var(--tg-theme-bg-color) !important;
                          color: var(--tg-theme-text-color) !important;
                        }
                        /* .web3modal-modal-lightbox {
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
                        } */
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
                        .chakra-toast
                          > div
                          > div
                          > div
                          > div
                          > div
                          > div
                          > div {
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
                        // HACK: mobile lesson button hover disabled
                        .css-fhy18r:hover:disabled,
                        .css-fhy18r[data-hover]:disabled,
                        .css-fhy18r:hover[disabled],
                        .css-fhy18r[data-hover][disabled],
                        .css-fhy18r:hover[aria-disabled='true'],
                        .css-fhy18r[data-hover][aria-disabled='true'],
                        .css-fhy18r:hover[data-disabled],
                        .css-fhy18r[data-hover][data-disabled] {
                          background: linear-gradient(
                            135.91deg,
                            #b06fd8 29.97%,
                            #597aee 99.26%
                          ) !important;
                        }
                        @keyframes pulse {
                          0% {
                            opacity: 0.5;
                          }
                          50% {
                            opacity: 1;
                          }
                          100% {
                            opacity: 0.5;
                          }
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
                </AppProvider>
              </FrameProvider>
            </QueryClientProvider>
          </WagmiProvider>

          <Overlay hidden={!stateData.open} zIndex="999" />
          {/* don't show if injected wallet is detected */}
          {stateData.open && typeof window !== 'undefined' && !window.ethereum && (
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
              <ExternalLink href="https://bankless.ac/zerion">
                <Button size="lg" variant="primaryBig" width="100%">
                  No wallet? 👉 Get Zerion wallet here
                </Button>
              </ExternalLink>
            </Box>
          )}
        </NonSSRWrapper>
      </ThemeProvider>
    </>
  )

  return SENTRY_ENABLED ? (
    <Sentry.ErrorBoundary>{appContent}</Sentry.ErrorBoundary>
  ) : (
    appContent
  )
}

export default App
