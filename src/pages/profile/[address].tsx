import { Box, Heading, Image } from '@chakra-ui/react'
import Badges from 'components/Badges'
import { MetaData } from 'components/Head'
import { ALCHEMY_KEY_BACKEND, DOMAIN_URL } from 'constants/index'
import { TABLES, db } from 'utils/db'
import { createPublicClient, http } from 'viem'
import { mainnet } from 'viem/chains'
import { normalize } from 'viem/ens'

/* eslint-disable no-console */
export async function getServerSideProps({ query }) {
  const { address, badge } = query

  let error = ''
  if (!address) error = 'missing address'
  const transport = http(
    `https://eth-mainnet.g.alchemy.com/v2/${ALCHEMY_KEY_BACKEND}`
  )
  const client = createPublicClient({
    chain: mainnet,
    transport,
  })
  const fullAddress = address.endsWith('.eth')
    ? await client.getEnsAddress({ name: normalize(address) })
    : address
  console.log(fullAddress)
  const [userExist] = await db(TABLES.users)
    .select('id', 'address')
    .whereILike('address', fullAddress)
  console.log('user', userExist)
  if (!userExist) error = 'user not found'
  if (error) return { props: { error } }
  const confirmedAddress = userExist.address

  const DOMAIN =
    process.env.NODE_ENV === 'development'
      ? 'http://localhost:3000'
      : DOMAIN_URL

  console.log(confirmedAddress)
  console.log(badge)
  const res = await fetch(`${DOMAIN}/api/user/${confirmedAddress}`)
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
  const user = await res.json()
  console.log(user)
  const badgeTokenIds = user.badgeTokenIds
  if (badge && !badgeTokenIds.includes(parseInt(badge)))
    return { props: { error: 'badge not found' } }
  const data = {
    address: confirmedAddress,
    ensName: user.ensName,
    avatar: user.avatar,
    badges: badgeTokenIds,
    badgeToHighlight: parseInt(badge),
  }
  console.log(data)
  const badgeId = badge ? `&badgeId=${badge}` : ''

  const pageMeta: MetaData = {
    title: `profile: ${user.ensName || confirmedAddress}`,
    // description: currentLesson.description,
    image: `${DOMAIN}/api/og/profile?address=${confirmedAddress}${badgeId}`,
  }

  return { props: { ...data, pageMeta } }
}

export default function Page({
  address,
  ensName,
  avatar,
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
        <Heading as="h2" size="xl" m="8" textAlign="center">
          {ensName || address}
        </Heading>
        <Box display="flex" justifyContent="center" w="100%" mb="8">
          <Image src={avatar} width="100px" height="100px" borderRadius="50%" />
        </Box>
        <Badges
          badges={badges}
          badgeToHighlight={badgeToHighlight}
          profile={true}
        />
      </Box>
    </>
  )
}
