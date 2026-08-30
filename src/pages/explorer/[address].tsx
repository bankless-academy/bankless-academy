import { withSsrTiming } from 'utils/ssrTiming'
import { MetaData } from 'components/Head'
import { shortenAddress } from 'utils/index'
import { DOMAIN_URL } from 'constants/index'
import ExplorerProfile from 'components/ExplorerProfile'
import Layout from 'layout/Layout'

const getServerSidePropsImpl = async ({ query }: any) => {
  const { address, badge } = query

  let preloadError = ''
  if (!address) preloadError = 'missing address'
  if (preloadError) return { props: { preloadError } }
  const badgeToHighlight = parseInt(badge)
  const data = {
    profileAddress: address,
    badgeToHighlight,
  }
  // console.log(data)

  const random = Math.floor(Math.random() * 100000)

  const pageMeta: MetaData = {
    title: `${address?.includes('.') ? address : shortenAddress(address)}`,
    description: `${
      badge ? 'Bankless Explorer Badge' : 'Bankless Explorer Profile'
    }`,
    image: `${DOMAIN_URL}/api/og/social?address=${address}${
      badge ? `&badge=${badge}` : ''
    }&r=${random}`,
  }

  return { props: { ...data, pageMeta } }
}

function ExplorerPage({
  profileAddress,
  badgeToHighlight,
  preloadError,
}: {
  profileAddress: string
  badgeToHighlight?: number
  preloadError?: string
}) {
  return (
    <ExplorerProfile
      profileAddress={profileAddress}
      badgeToHighlight={badgeToHighlight}
      preloadError={preloadError}
    />
  )
}

// PageLayout is attached here, not rendered inside the page - see _app.tsx.
ExplorerPage.getLayout = (page: JSX.Element): JSX.Element => (
  <Layout page="PROFILE">{page}</Layout>
)

export default ExplorerPage

export const getServerSideProps = withSsrTiming(
  '/explorer/[address]',
  getServerSidePropsImpl as any
)
