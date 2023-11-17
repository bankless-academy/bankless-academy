import { Box, Container, Image, Text } from '@chakra-ui/react'
import { mainnet } from 'viem/chains'
import { normalize } from 'viem/ens'
import { createPublicClient, http } from 'viem'

import Badges from 'components/Badges'
import Card from 'components/Card'
import { MetaData } from 'components/Head'
import { ALCHEMY_KEY_BACKEND, DOMAIN_URL } from 'constants/index'
import { UserType } from 'entities/user'
import { useSmallScreen } from 'hooks'
import { shortenAddress } from 'utils'
import { TABLES, db } from 'utils/db'
import { t } from 'i18next'

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
  const badgeToHighlight = parseInt(badge)
  const data = {
    user: user,
    address: confirmedAddress,
    badgeToHighlight,
  }
  console.log(data)

  const pageMeta: MetaData = {
    title: `Explorer ${user.ensName || shortenAddress(confirmedAddress)}`,
    // description: currentLesson.description,
    image: `${DOMAIN_URL}/api/og/social?address=${confirmedAddress}${
      badge && `&badge=${badge}&f=1`
    }`,
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
  return (
    <Container maxW="container.lg">
      <Card mt="8" overflow="hidden">
        <Box position="relative">
          <Image
            w="100%"
            aspectRatio="300/157"
            src={`${DOMAIN_URL}/api/og/social?address=${address}`}
          />
        </Box>
        <Box display={isSmallScreen ? 'block' : 'flex'} m="8">
          <Box
            w={isSmallScreen ? '100%' : '50%'}
            maxW="624px"
            mr={isSmallScreen ? '0' : '10%'}
          >
            <Box pb="8">
              <Text
                as="h2"
                fontSize="2xl"
                fontWeight="bold"
                borderBottom="1px solid #989898"
                pb="2"
              >
                {t('Badges')}
              </Text>
            </Box>
            <Badges
              badges={user.badgeTokenIds}
              badgeToHighlight={badgeToHighlight}
              profile={true}
            />
          </Box>
          <Box w={isSmallScreen ? '100%' : '50%'}>
            <Box pb="8">
              <Text
                as="h2"
                fontSize="2xl"
                fontWeight="bold"
                borderBottom="1px solid #989898"
                pb="2"
              >
                {t('Donations')}
              </Text>
            </Box>
            <Badges badges={Object.keys(user.donations)} profile={true} />
          </Box>
        </Box>
      </Card>
    </Container>
  )
}
