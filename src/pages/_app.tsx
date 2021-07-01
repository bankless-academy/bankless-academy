import type { AppProps } from 'next/app'
import dynamic from 'next/dynamic'
// import SiteLayout from '../components/global/SiteLayout'
import Layout from 'src/layout'
import ThemeProvider from '../theme/index'
import { Web3ReactProvider } from '@web3-react/core'
import { ethers } from 'ethers'
// const defaultPageMeta = {
//   title: 'Bankless Community',
// }

function getLibrary(provider) {
  return new ethers.providers.Web3Provider(provider) // this will vary according to whether you use e.g. ethers or web3.js
}

const Web3ReactProviderDefault = dynamic(
  () => import('../providers/Web3ReactProviderDefaultSSR'),
  { ssr: false }
)

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const BanklessApp = ({ Component, pageProps }: AppProps) => {
  return (
    <ThemeProvider>
      <Web3ReactProvider getLibrary={getLibrary}>
        <Web3ReactProviderDefault getLibrary={getLibrary}>
          <Layout />
          {/* <SiteLayout pageMeta={pageProps.pageMeta || { defaultPageMeta }}>
            <Component {...pageProps} />
          </SiteLayout> */}
        </Web3ReactProviderDefault>
      </Web3ReactProvider>
    </ThemeProvider>
  )
}

export default BanklessApp
