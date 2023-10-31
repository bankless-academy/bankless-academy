import { Box } from '@chakra-ui/react'
import Badges from 'components/Badges'
import { MetaData } from 'components/Head'
import { DOMAIN_URL } from 'constants/index'
import { TABLES, db } from 'utils/db'

/* eslint-disable no-console */
export async function getServerSideProps({ query }) {
  const { address, badge } = query

  let error = ''
  if (!address) error = 'missing address'
  const [userExist] = await db(TABLES.users)
    .select('id')
    .whereILike('address', address)
  console.log('user', userExist)
  if (!userExist) error = 'user not found'
  if (error) return { props: { error } }

  const DOMAIN =
    process.env.NODE_ENV === 'development'
      ? 'http://localhost:3000'
      : DOMAIN_URL

  console.log(address)
  console.log(badge)
  const res = await fetch(`${DOMAIN}/api/user/${address}`)
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
  const user = await res.json()
  console.log(user)
  const badgeTokenIds = user.badgeTokenIds
  if (badge && !badgeTokenIds.includes(parseInt(badge)))
    return { props: { error: 'badge not found' } }
  const data = {
    address,
    ensName: user.ensName,
    badges: badgeTokenIds,
    badgeToHighlight: parseInt(badge),
  }
  console.log(data)
  const badgeId = badge ? `&badgeId=${badge}` : ''

  const pageMeta: MetaData = {
    title: `profile: ${address}`,
    // description: currentLesson.description,
    image: `${DOMAIN}/api/og/profile?address=${address}${badgeId}`,
  }

  return { props: { ...data, pageMeta } }
}

export default function Page({
  address,
  ensName,
  badges,
  badgeToHighlight,
  error,
}) {
  if (error) return error
  console.log(badgeToHighlight)
  console.log(address)
  return (
    <>
      <Box>
        <h1>{ensName || address}</h1>
        <Badges badges={badges} badgeToHighlight={badgeToHighlight} />
      </Box>
    </>
  )
}
