import { Box, Container, Heading, Image } from '@chakra-ui/react'
import Badges from 'components/Badges'
import { MetaData } from 'components/Head'
import { ALCHEMY_KEY_BACKEND, DOMAIN_URL } from 'constants/index'
import { UserType } from 'entities/user'
import { useSmallScreen } from 'hooks'
import { getDonationdetails } from 'pages/leaderboard'
import { shortenAddress } from 'utils'
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

  console.log(confirmedAddress)
  console.log(badge)
  const res = await fetch(`${DOMAIN_URL}/api/user/${confirmedAddress}`)
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
  const user = await res.json()
  console.log(user)
  const badgeTokenIds = user.badgeTokenIds
  if (badge && !badgeTokenIds.includes(parseInt(badge)))
    return { props: { error: 'badge not found' } }
  const data = {
    user: user,
    address: confirmedAddress,
    badgeToHighlight: parseInt(badge),
  }
  console.log(data)
  const badgeId = badge ? `&badgeId=${badge}` : ''

  const pageMeta: MetaData = {
    title: `Explorer ${user.ensName || shortenAddress(confirmedAddress)}`,
    // description: currentLesson.description,
    image: `${DOMAIN_URL}/api/og/profile?address=${confirmedAddress}${badgeId}`,
  }

  return { props: { ...data, pageMeta } }
}

export default function Page({
  user,
  address,
  badgeToHighlight,
  error,
}: {
  user: UserType
  address: string
  badgeToHighlight?: number
  error?: any
}) {
  const [isSmallScreen] = useSmallScreen()

  if (error) return error
  console.log(badgeToHighlight)
  console.log(address)
  return (
    <Container maxW="container.xl">
      <Box>
        <Box display="flex" justifyContent="center" w="100%" mb="8">
          <Image
            src={user.avatar}
            width="100px"
            height="100px"
            borderRadius="50%"
          />
        </Box>
        <Heading as="h2" size="xl" m="8" textAlign="center">
          {user.ensName || shortenAddress(address)}
        </Heading>
        <Heading as="h3" size="md" m="8" textAlign="center">
          Rank: #{user.stats.rank}
          <br />
          Bankless Level: {user.stats.score}
        </Heading>
        <Box display={isSmallScreen ? 'block' : 'flex'}>
          <Box w={isSmallScreen ? '100%' : '50%'} maxW="624px">
            <Badges
              badges={user.badgeTokenIds}
              badgeToHighlight={badgeToHighlight}
              profile={true}
            />
          </Box>
          <Box w={isSmallScreen ? '100%' : '50%'}>
            <Heading as="h3" size="md" m="8">
              Donations:
              {getDonationdetails(user.donations).map((donation, index) => (
                <Box key={`donation-${index}`}>- {donation}</Box>
              ))}
            </Heading>
          </Box>
        </Box>
      </Box>
    </Container>
  )
}
