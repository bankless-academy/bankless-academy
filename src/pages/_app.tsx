import type { AppProps } from 'next/app'
import { Global, css } from '@emotion/react'
import 'react-notion-x/src/styles.css'
import 'prismjs/themes/prism-tomorrow.css'
import 'mac-scrollbar/dist/mac-scrollbar.css'
import { GlobalScrollbar } from 'mac-scrollbar'
import { isMobile } from 'react-device-detect'
import styled from '@emotion/styled'
import { Box } from '@chakra-ui/react'

import Head, { MetaData } from 'components/Head'
import Layout from 'layout'
import ThemeProvider from 'theme'
import { DEBUG } from 'utils/index'
import NonSSRWrapper from 'components/NonSSRWrapper'

import {
  EthereumClient,
  modalConnectors,
  walletConnectProvider,
} from '@web3modal/ethereum'

import { useWeb3Modal, Web3Modal } from '@web3modal/react'

import { configureChains, createClient, WagmiConfig } from 'wagmi'

import { mainnet, polygon } from 'wagmi/chains'

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

  const chains = [mainnet, polygon]
  const { isOpen } = useWeb3Modal()

  // Wagmi client
  const { provider } = configureChains(chains, [
    walletConnectProvider({
      projectId: process.env.NEXT_PUBLIC_WALLET_CONNECT_PROJECT_ID,
    }),
  ])
  const wagmiClient = createClient({
    autoConnect: true,
    connectors: modalConnectors({ appName: 'Bankless Academy', chains }),
    provider,
  })

  // Web3Modal Ethereum Client
  const ethereumClient = new EthereumClient(wagmiClient, chains)

  return (
    <>
      <Head metadata={pageProps.pageMeta} />
      {!isMobile && <GlobalScrollbar skin="dark" />}
      <ThemeProvider>
        <NonSSRWrapper>
          <WagmiConfig client={wagmiClient}>
            <Global
              styles={css`
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
              `}
            />
            <Layout isLesson={pageProps.pageMeta?.isLesson || false}>
              <Component {...pageProps} />
            </Layout>
          </WagmiConfig>

          <Overlay hidden={!isOpen} />
          <Web3Modal
            projectId={process.env.NEXT_PUBLIC_WALLET_CONNECT_PROJECT_ID}
            ethereumClient={ethereumClient}
            themeMode="dark"
            themeColor="purple"
            themeBackground="themeColor"
          />
        </NonSSRWrapper>
      </ThemeProvider>
    </>
  )
}

export default App
