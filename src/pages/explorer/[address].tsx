import { MetaData } from 'components/Head'
import { shortenAddress } from 'utils/index'
import { DOMAIN_URL } from 'constants/index'
import ExplorerProfile from 'components/ExplorerProfile'

export async function getServerSideProps({ query }) {
  const { address, badge } = query

  let preloadError = ''
  if (!address) preloadError = 'missing address'
  if (preloadError) return { props: { preloadError } }
  const badgeToHighlight = parseInt(badge)
  const data = {
    profileAddress: address,
    badgeToHighlight,
  }

  const random = Math.floor(Math.random() * 100000)

  const pageMeta: MetaData = {
    title: `${address?.includes('.') ? address : shortenAddress(address)}`,
    description: `${
      badge ? 'Bankless Explorer Badge' : 'Bankless Explorer Profile'
    }`,
    image: `/api/og/social?address=${address}${
      badge ? `&badge=${badge}` : ''
    }&r=${random}`,
  }

  return { props: { ...data, pageMeta } }
}

export default function ExplorerPage({
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
