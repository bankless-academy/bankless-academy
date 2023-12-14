/* eslint-disable no-console */
import { useEffect, useState } from 'react'
import {
  Box,
  Button,
  Container,
  Heading,
  Image,
  Text,
  useClipboard,
  useMediaQuery,
} from '@chakra-ui/react'
import { CopySimple } from '@phosphor-icons/react'
import router from 'next/router'
import { useAccount } from 'wagmi'
import { t } from 'i18next'

import Badges from 'components/Badges'
import Card from 'components/Card'
import { MetaData } from 'components/Head'
import { DOMAIN_URL, MAX_COLLECTIBLES } from 'constants/index'
import { UserType } from 'entities/user'
import { shortenAddress } from 'utils'
import ProgressTitle from 'components/ProgressTitle'
import ExternalLink from 'components/ExternalLink'
import { MAX_DONATIONS } from 'constants/donations'
import { MAX_BADGES } from 'constants/badges'
import { MAX_STAMPS } from 'constants/passport'

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
  // console.log(data)

  const random = Math.floor(Math.random() * 100000)

  const pageMeta: MetaData = {
    title: `${address?.endsWith('.eth') ? address : shortenAddress(address)}`,
    description: `${
      badge ? 'Bankless Explorer Badge' : 'Bankless Explorer Profile'
    }`,
    image: `${DOMAIN_URL}/api/og/social?address=${address}${
      badge ? `&badge=${badge}` : ''
    }&r=${random}`,
  }

  return { props: { ...data, pageMeta } }
}

export default function Page({
  profileAddress,
  badgeToHighlight,
  preloadError,
}: {
  profileAddress: string
  badgeToHighlight?: number
  preloadError?: string
}) {
  const profileUrl =
    typeof window !== 'undefined' ? `${window.location.href}` : ''
  const [isSmallScreen] = useMediaQuery(['(max-width: 981px)'])
  const { referral } = router.query
  const [user, setUser] = useState<UserType | null>(null)
  const [error, setError] = useState(preloadError)
  const [fullProfileAddress, setFullProfileAddress] = useState('')
  const { address } = useAccount()
  const { onCopy, hasCopied } = useClipboard(profileUrl)

  const wallets = localStorage.getItem('wallets')
    ? JSON.parse(localStorage.getItem('wallets'))
    : []

  const isMyProfile =
    fullProfileAddress !== '' && wallets.includes(fullProfileAddress)

  useEffect(() => {
    const loadUser = async () => {
      try {
        const res = await fetch(`/api/user/${profileAddress}?profile=true`)
        if (!res.ok) setError('Failed to fetch user data.')
        const user: UserType = await res.json()
        if (user?.error) {
          setError(user?.error)
        } else if (user) {
          console.log(user)
          if (
            typeof window !== 'undefined' &&
            wallets.includes(user.address) &&
            referral !== 'true'
          ) {
            const redirect = `/explorer/${profileAddress}?referral=true`
            window.history.replaceState(null, null, redirect)
          }
          setFullProfileAddress(user.address)
          setUser(user)
        }
      } catch (error) {
        console.log(error)
        setError(
          'Failed to fetch user data from API. Please refresh the page manually.'
        )
      }
    }
    loadUser()
  }, [profileAddress])

  const collectibles = []
  for (let i = 0; i < user?.stats.datadisks?.length; i++) {
    collectibles.push(user?.stats.datadisks[i])
  }
  for (let i = 0; i < user?.stats.handbooks?.length; i++) {
    collectibles.push(user?.stats.handbooks[i])
  }

  const share = `Check out my Bankless Explorer Score, and track my journey at @BanklessAcademy.
${typeof window !== 'undefined' && window.location.href}
Join me! Discover the knowledge and tools to #OwnYourFuture 👨🏻‍🚀🚀`
  const twitterLink = `https://twitter.com/intent/tweet?url=${encodeURIComponent(
    share
  )}`

  if (
    referral === 'true' &&
    !isMyProfile &&
    !localStorage.getItem('referrer')?.length &&
    fullProfileAddress
  ) {
    console.log('referrer', localStorage.getItem('referrer'))
    localStorage.setItem('referrer', fullProfileAddress?.toLowerCase())
  }
  if (address && localStorage.getItem('referrer') === address?.toLowerCase()) {
    localStorage.setItem('referrer', '')
  }

  if (user)
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
            backgroundImage="linear-gradient(180deg, #A379BD 0%, #5B5198 100%)"
          >
            <Image
              w="260px"
              h="260px"
              margin="auto"
              borderRadius="50%"
              backgroundColor="black"
              src={user.avatar}
            />
          </Box>
          <Text
            as="h2"
            fontSize="4xl"
            fontWeight="bold"
            textAlign="center"
            textTransform="uppercase"
            mt="40px"
            mb="8"
          >
            {user.ensName?.endsWith('.eth')
              ? user.ensName
              : profileAddress?.endsWith('.eth')
              ? profileAddress
              : shortenAddress(profileAddress)}
          </Text>
          {isMyProfile && (
            <Box justifyContent="center" w="256px" m="auto" mb="8">
              <Box pb="2">
                <ExternalLink href={twitterLink} mr="2">
                  <Button
                    variant="primary"
                    w="100%"
                    borderBottomRadius="0"
                    leftIcon={<Image width="24px" src="/images/TwitterX.svg" />}
                  >
                    {t('Share on Twitter / X')}
                  </Button>
                </ExternalLink>
              </Box>
              <Button
                variant="primary"
                w="100%"
                borderTopRadius="0"
                leftIcon={<CopySimple size="30px" />}
                onClick={() => onCopy()}
              >
                {hasCopied ? t('Profile Link Copied') : t('Copy Profile Link')}
              </Button>
            </Box>
          )}
        </Card>
        <Card my="8" borderRadius="2xl !important">
          <Box m="auto" maxW={isSmallScreen ? '600px' : '100%'}>
            <Box m="auto" position="relative" w="300px" mt={4}>
              <Image w="300px" src="/images/explorer-score.png" />
              <Box
                position="absolute"
                top="52.9px"
                width="72px"
                textAlign="center"
                left="212px"
                fontSize="4xl"
                fontWeight="bold"
              >
                {user.stats.score || 0}
              </Box>
            </Box>
            <Box display={isSmallScreen ? 'block' : 'flex'} m="8">
              <Box
                w={isSmallScreen ? '100%' : '50%'}
                mr={isSmallScreen ? '0' : '50px'}
              >
                <ProgressTitle
                  title={t('Badges')}
                  score={user.stats.badges || 0}
                  max={MAX_BADGES}
                  description={t(
                    `Each lesson badge increases your score by 1 point.`
                  )}
                />
                <Badges
                  badges={user.badgeTokenIds}
                  badgeToHighlight={badgeToHighlight}
                  type="badges"
                  isMyProfile={isMyProfile}
                />
              </Box>
              <Box w={isSmallScreen ? '100%' : '50%'}>
                <ProgressTitle
                  title={t('Collectibles')}
                  score={
                    3 * (user.stats?.datadisks?.length || 0) +
                    (user.stats?.handbooks?.length || 0)
                  }
                  max={MAX_COLLECTIBLES}
                  description={t(
                    `Each Handbook increases your score by 1 point, and each DataDisk increases it by 3.`
                  )}
                />
                <Badges
                  badges={collectibles}
                  type="collectibles"
                  isMyProfile={isMyProfile}
                />
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
                  max={MAX_DONATIONS}
                  description={t(
                    `Each round you donate to Bankless Academy on Gitcoin increases your score by 1 point. Points are updated at the end of a round.`
                  )}
                />
                <Badges
                  badges={Object.keys(user.stats?.donations || {})}
                  type="donations"
                  isMyProfile={isMyProfile}
                />
              </Box>
              <Box w={isSmallScreen ? '100%' : '50%'}>
                <ProgressTitle
                  title={t('Stamps')}
                  score={user.stats?.valid_stamps?.length || 0}
                  max={MAX_STAMPS}
                  description={t(
                    `Each stamp you collect on Gitcoin Passport increases your score by 1 point.`
                  )}
                />
                <Badges
                  badges={user.stats?.valid_stamps || []}
                  type="stamps"
                  isMyProfile={address && isMyProfile}
                />
              </Box>
            </Box>
          </Box>
        </Card>
      </Container>
    )
  else
    return (
      <Container maxW="container.xl">
        <Heading as="h2" size="xl" m="8" textAlign="center">
          Loading Explorer Profile
        </Heading>
        {error || (
          <Image
            margin="auto"
            paddingTop="200px"
            width="250px"
            src="/loading_purple.svg"
          />
        )}
      </Container>
    )
}
