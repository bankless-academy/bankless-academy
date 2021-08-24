import type { AppProps } from 'next/app'
import { Web3ReactProvider } from '@web3-react/core'
import { ethers } from 'ethers'
import 'swiper/swiper-bundle.min.css'
import Head from 'next/head'

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
        {/* TODO: separate tracking for dev and prod + add data-website-id to .env */}
        <script
          async
          defer
          data-website-id="62d1cf48-425d-4658-9b86-3eea78ac9714"
          src="https://bankless-umami.vercel.app/umami.js"
        />
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
