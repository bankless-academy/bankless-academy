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
import { UserPlus } from '@phosphor-icons/react'
import router from 'next/router'
import { useAccount } from 'wagmi'
import { t } from 'i18next'
import { fetchEnsAddress } from '@wagmi/core'

import Badges from 'components/Badges'
import Card from 'components/Card'
import { MetaData } from 'components/Head'
import { DOMAIN_URL } from 'constants/index'
import { UserType } from 'entities/user'
import { shortenAddress } from 'utils'
import ProgressTitle from 'components/ProgressTitle'
import ExternalLink from 'components/ExternalLink'

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
    title: `Explorer ${address}`,
    description: `${badge ? 'Explorer badge' : 'Explorer profile'}`,
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
    typeof window !== 'undefined' ? `${window.location.href}?referral=true` : ''
  const [isSmallScreen] = useMediaQuery(['(max-width: 981px)'])
  const { referral } = router.query
  const [user, setUser] = useState<UserType | null>(null)
  const [error, setError] = useState(preloadError)
  const [fullProfileAddress, setFullProfileAddress] = useState('')
  const { address } = useAccount()
  const { onCopy, hasCopied } = useClipboard(profileUrl)

  useEffect(() => {
    const loadUser = async () => {
      try {
        const fullAddress = profileAddress?.endsWith('.eth')
          ? (await fetchEnsAddress({ name: profileAddress }))?.toLowerCase()
          : profileAddress?.toLowerCase()
        console.log(fullAddress)
        if (!fullAddress) setError('No address found')
        else {
          setFullProfileAddress(fullAddress)
          const res = await fetch(`/api/user/${fullAddress}`)
          if (!res.ok) setError('Failed to fetch user data.')
          const user: UserType = await res.json()
          if (user?.error) {
            setError(user?.error)
          } else if (user) {
            setUser(user)
            console.log(user)
          }
        }
      } catch (error) {
        console.log(error)
        setError('Failed to fetch user data from API.')
      }
    }
    loadUser()
  }, [])

  const collectibles = []
  for (let i = 0; i < user?.stats.datadisks?.length; i++) {
    collectibles.push(user?.stats.datadisks[i])
  }
  for (let i = 0; i < user?.stats.handbooks?.length; i++) {
    collectibles.push(user?.stats.handbooks[i])
  }

  const share = `Checkout my @BanklessAcademy Explorer profile ${
    typeof window !== 'undefined' && window.location.href
  }?referral=true`
  const twitterLink = `https://twitter.com/intent/tweet?url=${encodeURIComponent(
    share
  )}`

  const wallets = localStorage.getItem('wallets')
    ? JSON.parse(localStorage.getItem('wallets'))
    : []

  const isMyProfile =
    fullProfileAddress !== '' && wallets.includes(fullProfileAddress)

  if (
    referral === 'true' &&
    !isMyProfile &&
    !localStorage.getItem('referral')?.length &&
    fullProfileAddress
  ) {
    console.log('referral', localStorage.getItem('referral'))
    localStorage.setItem('referral', fullProfileAddress?.toLowerCase())
  }
  if (address && localStorage.getItem('referral') === address?.toLowerCase()) {
    localStorage.setItem('referral', '')
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
            {user.ensName || shortenAddress(profileAddress)}
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
                    {t('Share on Twitter')}
                  </Button>
                </ExternalLink>
              </Box>
              <Button
                variant="primary"
                w="100%"
                borderTopRadius="0"
                leftIcon={<UserPlus size="30px" />}
                onClick={() => onCopy()}
              >
                {hasCopied ? t('Referal link copied') : t('Refer-a-Friend')}
              </Button>
            </Box>
          )}
        </Card>
        <Card my="8" borderRadius="2xl !important">
          <Box m="auto" maxW={isSmallScreen ? '600px' : '100%'}>
            <Box m="auto" position="relative" w="300px">
              <Image w="300px" src="/images/bankless-score.png" />
              <Box
                position="absolute"
                top="55px"
                width="72px"
                textAlign="center"
                left="212px"
                fontSize="5xl"
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
                  max={9}
                  description={t(
                    `Each lesson badges is going to increase your Bankless Explorer score by 1 point.`
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
                  max={8}
                  description={t(
                    `1 DATADISK will get you 3 points and 1 HANDBOOK is equivalent to 1 point.`
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
                  max={8}
                  description={t(
                    `Each time you donate to Bankless Academy via Gitcoin, you increase your score by 1 point. Donation score are only updated after the end of a round.`
                  )}
                />
                <Badges
                  badges={Object.keys(user.stats?.donations)}
                  type="donations"
                  isMyProfile={isMyProfile}
                />
              </Box>
              <Box w={isSmallScreen ? '100%' : '50%'}>
                <ProgressTitle
                  title={t('Stamps')}
                  score={user.stats?.valid_stamps?.length}
                  max={8}
                  description={t(
                    `Each Gitcoin Passport stamp is going to increase you Bankless Explorer score by 1 point.`
                  )}
                />
                <Badges
                  badges={user.stats?.valid_stamps}
                  type="stamps"
                  isMyProfile={isMyProfile}
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
