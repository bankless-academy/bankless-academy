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
import ProgressTitle from 'components/ProgressTitle'

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

  const collectibles = []
  for (let i = 0; i < user.stats.collectibles; i++) {
    collectibles.push(
      'https://raw.seadn.io/files/df805d7e6cee4f4697207f7a9929a77f.png'
    )
  }
  for (let i = 0; i < user.stats.handbooks; i++) {
    collectibles.push('/images/handbook.svg')
  }
  if (error) return error
  return (
    <Container maxW="container.lg">
      <Card mt="180px" borderRadius="2xl !important" height="280px">
        <Box
          margin="auto"
          mt="-130px"
          pt="12px"
          w="284px"
          h="284px"
          borderRadius="50%"
          backgroundImage="linear-gradient(223deg, #3a355a 16.65%, #634c70 95.78%)"
        >
          <Image
            w="260px"
            h="260px"
            margin="auto"
            borderRadius="50%"
            src={user.avatar}
          />
        </Box>
        <Text
          as="h2"
          fontSize="3xl"
          fontWeight="bold"
          textAlign="center"
          textTransform="uppercase"
          mt="40px"
        >
          {user.ensName || shortenAddress(address)}
        </Text>
      </Card>
      <Card mt="8" borderRadius="2xl !important">
        <Box display={isSmallScreen ? 'block' : 'flex'} m="8">
          <Box
            w={isSmallScreen ? '100%' : '50%'}
            maxW="624px"
            mr={isSmallScreen ? '0' : '50px'}
          >
            <ProgressTitle
              title={t('Badges')}
              score={user.stats.badges}
              max={9}
            />
            <Badges
              badges={user.badgeTokenIds}
              badgeToHighlight={badgeToHighlight}
              profile={true}
            />
          </Box>
          <Box w={isSmallScreen ? '100%' : '50%'} maxW="624px">
            <ProgressTitle
              title={t('Collectibles')}
              score={user.stats?.collectibles + user.stats?.handbooks || 0}
              max={8}
            />
            <Badges badges={collectibles} profile={true} />
          </Box>
        </Box>
        <Box display={isSmallScreen ? 'block' : 'flex'} m="8">
          <Box
            w={isSmallScreen ? '100%' : '50%'}
            maxW={isSmallScreen ? '100%' : '438px'}
            mr={isSmallScreen ? '0' : '50px'}
          >
            <ProgressTitle
              title={t('Donations')}
              score={
                user.stats?.donations
                  ? Object.keys(user.stats?.donations)?.length || 0
                  : 0
              }
              max={8}
            />
            <Badges badges={Object.keys(user.donations)} profile={true} />
          </Box>
        </Box>
      </Card>
    </Container>
  )
}
