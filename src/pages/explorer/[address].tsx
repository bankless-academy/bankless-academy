import {
  Box,
  Button,
  Container,
  Image,
  Text,
  useMediaQuery,
} from '@chakra-ui/react'
import { mainnet } from 'viem/chains'
import { normalize } from 'viem/ens'
import { createPublicClient, http } from 'viem'

import Badges from 'components/Badges'
import Card from 'components/Card'
import { MetaData } from 'components/Head'
import { ALCHEMY_KEY_BACKEND, DOMAIN_URL } from 'constants/index'
import { UserType } from 'entities/user'
import { shortenAddress } from 'utils'
import { TABLES, db } from 'utils/db'
import { t } from 'i18next'
import ProgressTitle from 'components/ProgressTitle'
import ExternalLink from 'components/ExternalLink'
import router from 'next/router'
import { useAccount } from 'wagmi'

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
    userAddress: confirmedAddress,
    badgeToHighlight,
  }
  console.log(data)

  const pageMeta: MetaData = {
    title: `Explorer ${user.ensName || shortenAddress(confirmedAddress)}`,
    // description: currentLesson.description,
    image: `${DOMAIN_URL}/api/og/social?address=${confirmedAddress}${
      badge ? `&badge=${badge}` : ''
    }&f=1`,
  }

  return { props: { ...data, pageMeta } }
}

export default function Page({
  user,
  userAddress,
  badgeToHighlight,
  error,
}: {
  user: UserType
  userAddress: string
  badgeToHighlight?: number
  error?: any
}) {
  const [isSmallScreen] = useMediaQuery(['(max-width: 981px)'])
  const { referral } = router.query
  const { address } = useAccount()

  const collectibles = []
  for (let i = 0; i < user?.stats.collectibles; i++) {
    collectibles.push(
      'https://raw.seadn.io/files/df805d7e6cee4f4697207f7a9929a77f.png'
    )
  }
  for (let i = 0; i < user?.stats.handbooks; i++) {
    collectibles.push('/images/handbook.svg')
  }
  if (error) return error

  const share = `Checkout my @BanklessAcademy Explorer profile ${
    typeof window !== 'undefined' && window.location.href
  }?referral=true`
  const twitterLink = `https://twitter.com/intent/tweet?url=${encodeURIComponent(
    share
  )}`

  const wallets = localStorage.getItem('wallets')
    ? JSON.parse(localStorage.getItem('wallets'))
    : []

  const isMyProfile = wallets.includes(userAddress?.toLowerCase())

  if (
    referral === 'true' &&
    !isMyProfile &&
    !localStorage.getItem('referral')?.length
  ) {
    console.log('referral', localStorage.getItem('referral'))
    localStorage.setItem('referral', userAddress?.toLowerCase())
  }
  if (address && localStorage.getItem('referral') === address?.toLowerCase()) {
    localStorage.setItem('referral', '')
  }

  return (
    <Container maxW="container.lg">
      <Card mt="180px" borderRadius="2xl !important">
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
          mb="6"
        >
          {user.ensName || shortenAddress(userAddress)}
        </Text>
        {isMyProfile && (
          <Box pb="8" textAlign="center">
            <ExternalLink href={twitterLink} mb="8">
              <Button
                variant="primary"
                leftIcon={<Image width="24px" src="/images/Twitter.svg" />}
              >
                {t('Share on Twitter')}
              </Button>
            </ExternalLink>
          </Box>
        )}
      </Card>
      <Card my="8" borderRadius="2xl !important">
        <Box m="auto" maxW={isSmallScreen ? '600px' : '100%'}>
          <Box m="auto" position="relative" w="300px">
            <Image w="300px" src="/images/bankless-score.png" />
            <Box
              position="absolute"
              top="69px"
              left="227px"
              fontSize="3xl"
              fontWeight="bold"
            >
              {user.stats.score}
            </Box>
          </Box>
          <Box display={isSmallScreen ? 'block' : 'flex'} m="8">
            <Box
              w={isSmallScreen ? '100%' : '50%'}
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
                type="badges"
              />
            </Box>
            <Box w={isSmallScreen ? '100%' : '50%'}>
              <ProgressTitle
                title={t('Collectibles')}
                score={user.stats?.collectibles + user.stats?.handbooks || 0}
                max={8}
              />
              <Badges badges={collectibles} type="collectibles" />
            </Box>
          </Box>
          <Box
            display={isSmallScreen ? 'block' : 'flex'}
            m="8"
            maxW={isSmallScreen ? '600px' : '100%'}
          >
            <Box
              w={isSmallScreen ? '100%' : '50%'}
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
              <Badges badges={Object.keys(user.donations)} type="donations" />
            </Box>
          </Box>
        </Box>
      </Card>
    </Container>
  )
}
