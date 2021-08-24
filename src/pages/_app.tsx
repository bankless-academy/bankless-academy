import type { AppProps } from 'next/app'
import { Web3ReactProvider } from '@web3-react/core'
import { ethers } from 'ethers'
import 'swiper/swiper-bundle.min.css'
import Head from 'next/head'
import { hotjar } from 'react-hotjar'

import dynamic from 'next/dynamic'
import Layout from 'layout'
import ThemeProvider from 'theme'

function getLibrary(provider) {
  return new ethers.providers.Web3Provider(provider) // this will vary according to whether you use e.g. ethers or web3.js
}

const Web3ReactProviderDefault = dynamic(
  () => import('providers/Web3ReactProviderDefaultSSR'),
  { ssr: false }
)

const App = ({ Component, pageProps }: AppProps): JSX.Element => {
  return (
    <>
      <Head>
        <script
          async
          defer
          data-website-id={
            process.env.UMAMI || 'e84c3a1e-0ab0-4502-b0fe-67d660765535'
          }
          src="https://bankless-umami.vercel.app/umami.js"
        />
        {typeof window !== 'undefined' && process.env.UMAMI
          ? hotjar.initialize(2568813, 6)
          : null}
      </Head>
      <noscript>You need to enable JavaScript to run this app.</noscript>
      <ThemeProvider>
        <Web3ReactProvider getLibrary={getLibrary}>
          <Web3ReactProviderDefault getLibrary={getLibrary}>
            <Layout pageMeta={pageProps.pageMeta}>
              <Component {...pageProps} />
            </Layout>
          </Web3ReactProviderDefault>
        </Web3ReactProvider>
      </ThemeProvider>
    </>
  )
}

export default App
