/* eslint-disable no-console */
import { useEffect, useState } from 'react'
import {
  Box,
  Button,
  Container,
  Heading,
  Image,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightAddon,
  Text,
  useClipboard,
  useMediaQuery,
  useToast,
} from '@chakra-ui/react'
import { CopySimple, Envelope } from '@phosphor-icons/react'
import router from 'next/router'
import { useAccount } from 'wagmi'
import { t } from 'i18next'
import { useLocalStorage } from 'usehooks-ts'

import Badges from 'components/Badges'
import Card from 'components/Card'
import { MetaData } from 'components/Head'
import { DOMAIN_URL, MAX_COLLECTIBLES } from 'constants/index'
import { UserType } from 'entities/user'
import {
  emailRegex,
  generateFarcasterLink,
  generateTwitterLink,
  shortenAddress,
  api,
  Mixpanel,
  calculateExplorerAchievements,
} from 'utils/index'
import ProgressTitle from 'components/ProgressTitle'
import ExternalLink from 'components/ExternalLink'
import { MAX_BADGES } from 'constants/badges'
import { EMPTY_PASSPORT, MAX_STAMPS } from 'constants/passport'
import Layout from 'layout/Layout'
import SelectCommunity from 'components/SelectCommunity'
import Helper from 'components/Helper'
import { maxReferrals } from 'components/OgSocial'
import { MAX_ACHIEVEMENT } from 'constants/achievements'
import { MacScrollbar } from 'mac-scrollbar'

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

export const ProfileTitle = ({
  title,
  description,
}: {
  title: string
  description: string
}): React.ReactElement => (
  <Box borderBottom="1px solid #989898">
    <Box
      fontSize="2xl"
      fontWeight="bold"
      textTransform="uppercase"
      textAlign="left"
    >
      {title}
    </Box>
    <Box fontSize="md" color="#CBCBCB" mb="2">
      {description}
    </Box>
  </Box>
)

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
  const [isSmallScreen] = useMediaQuery(['(max-width: 1200px)'])
  const { referral } = router.query
  const [user, setUser] = useState<UserType | null>(null)
  const [error, setError] = useState(preloadError)
  const [fullProfileAddress, setFullProfileAddress] = useState('')
  const [isMyProfile, setIsMyProfile] = useState(false)
  const { address } = useAccount()
  const { onCopy, hasCopied } = useClipboard(profileUrl)
  const [passportLS] = useLocalStorage('passport', EMPTY_PASSPORT)
  const [email, setEmail] = useState(localStorage.getItem('email'))
  const [initialEmail] = useState(localStorage.getItem('email'))
  const toast = useToast()
  const [ens] = useLocalStorage(`ens-cache`, {})
  const [community] = useLocalStorage(`community`, '')

  const wallets = localStorage.getItem('wallets')
    ? JSON.parse(localStorage.getItem('wallets'))
    : []

  useEffect(() => {
    const loadUser = async () => {
      try {
        const res = await fetch(`/api/user/${profileAddress}?profile=true`)
        if (!res.ok) setError('Failed to fetch user data.')
        const user: UserType = await res.json()
        if (user?.error) {
          setError(user?.error)
        } else if (user) {
          setIsMyProfile(false)
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
          if (address?.toLowerCase() === user.address) {
            setIsMyProfile(true)
          }
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
  }, [profileAddress, address])

  useEffect(() => {
    if (isMyProfile && passportLS?.stamps && passportLS?.version) {
      // update user stamps without requiring to refresh
      const valid_stamps = Object.keys(passportLS.stamps)
      if (valid_stamps?.length) {
        const updatedUser: any = {
          stats: {
            ...user.stats,
            valid_stamps,
            score:
              user.stats.score -
              user.stats.valid_stamps?.length +
              valid_stamps.length,
          },
        }
        setUser({ ...user, ...updatedUser })
      }
    }
  }, [passportLS, isMyProfile])

  const collectibles = []
  for (let i = 0; i < user?.stats.datadisks?.length; i++) {
    collectibles.push(user?.stats.datadisks[i])
  }
  for (let i = 0; i < user?.stats.handbooks?.length; i++) {
    collectibles.push(user?.stats.handbooks[i])
  }

  const shareLink = typeof window !== 'undefined' ? window.location.href : ''
  const share = `Check out my Bankless Explorer Score, and track my journey at @BanklessAcademy.

Join me! Discover the knowledge and tools to #OwnYourFuture 👨🏻‍🚀🚀`

  const twitterLink = generateTwitterLink(share, shareLink)

  const farcasterLink = generateFarcasterLink(share, shareLink)

  if (
    referral?.length &&
    !isMyProfile &&
    !localStorage.getItem('referrer')?.length &&
    fullProfileAddress
  ) {
    localStorage.setItem('referrer', fullProfileAddress?.toLowerCase())
    console.log('referrer added', localStorage.getItem('referrer'))
  }
  if (address && localStorage.getItem('referrer') === address?.toLowerCase()) {
    localStorage.setItem('referrer', '')
    console.log('reset referrer')
  }

  const referrals = user?.stats?.referrals?.length || 0

  const displayCommunity = isMyProfile ? community : user?.community

  if (user)
    // TODO: create Profile component
    return (
      <Layout page={isMyProfile ? 'PROFILE' : ''}>
        <Container maxW="container.lg" paddingX={isSmallScreen ? '0' : '16px'}>
          <Card
            mt="180px"
            borderRadius="2xl !important"
            background="linear-gradient(223deg, #A379BD30, #5B519830) !important"
          >
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
              mb={displayCommunity ? '0' : '8'}
            >
              {user.ensName?.includes('.')
                ? user.ensName
                : profileAddress?.includes('.')
                ? profileAddress
                : shortenAddress(profileAddress)}
            </Text>
            {displayCommunity && (
              <Box mt="0" mb="6" mx="4" display="flex" placeContent="center">
                <Text
                  as="h2"
                  fontSize="3xl"
                  fontWeight="bold"
                  textAlign="center"
                  textTransform="uppercase"
                  color="#ffffff70"
                >
                  <Box display="flex" justifyContent="center">
                    <Box>-[&nbsp;</Box>
                    <Box mt="2.5px">
                      {isMyProfile ? community : user.community}
                    </Box>
                    <Box>&nbsp;]-</Box>
                  </Box>
                </Text>
              </Box>
            )}
            {isMyProfile && (
              <Box
                backgroundColor="#161515"
                borderBottomRadius="var(--chakra-radii-2xl) !important"
              >
                <Box
                  background="linear-gradient(107.1deg,
    rgba(46, 33, 33, 0.3) -3.13%,
    rgba(80, 73, 84, 0.3) 16.16%,
    rgba(94, 89, 104, 0.3) 29.38%,
    rgba(86, 81, 94, 0.3) 41.5%,
    rgba(23, 21, 21, 0.3) 102.65%
  )"
                  // hack
                  paddingBottom="1px"
                  borderBottomRadius="var(--chakra-radii-2xl) !important"
                >
                  <Box
                    display={isSmallScreen ? 'block' : 'flex'}
                    borderTop="1px solid #524f4f"
                  >
                    <Box m="8" flex="1">
                      <ProfileTitle
                        title="Email"
                        description="Link your email to receive our monthly newsletter."
                      />
                      <Box mt="8" display="flex" placeContent="center">
                        <InputGroup maxW="400px">
                          <InputLeftElement pointerEvents="none">
                            <Envelope size="32" />
                          </InputLeftElement>
                          <Input
                            value={email}
                            placeholder={'Enter your email address...'}
                            type="email"
                            onChange={(e): void => {
                              setEmail(e.target.value)
                            }}
                          />
                          <InputRightAddon padding="0">
                            <Button
                              variant="primary"
                              width="100%"
                              borderRadius="6px"
                              borderLeftRadius="0"
                              onClick={async () => {
                                toast.closeAll()
                                if (!email)
                                  toast({
                                    title: t('Email missing'),
                                    description: t('Provide an email.'),
                                    status: 'warning',
                                    duration: 10000,
                                    isClosable: true,
                                  })
                                else if (emailRegex.test(email) === false)
                                  toast({
                                    title: t('Wrong email format'),
                                    description: t('Please check your email.'),
                                    status: 'warning',
                                    duration: 10000,
                                    isClosable: true,
                                  })
                                else {
                                  const result = await api(
                                    '/api/subscribe-newsletter',
                                    {
                                      email,
                                      wallet: address,
                                      ens:
                                        address && address in ens
                                          ? ens[address]?.name
                                          : undefined,
                                    }
                                  )
                                  if (result && result.status === 200) {
                                    localStorage.setItem('email', email)
                                    localStorage.setItem(`newsletter`, 'true')
                                    Mixpanel.track(
                                      initialEmail?.length
                                        ? 'subscribe_newsletter'
                                        : 'update_newsletter',
                                      {
                                        email: email,
                                      }
                                    )
                                    toast({
                                      title: t(
                                        'Thanks for subscribing Explorer 🧑‍🚀'
                                      ),
                                      description: t(
                                        `You'll hear from us soon!`
                                      ),
                                      status: 'success',
                                      duration: 10000,
                                      isClosable: true,
                                    })
                                  } else {
                                    toast({
                                      title: t(
                                        `Something went wrong... we couldn't add your subscription.`
                                      ),
                                      description: t('Please try again later.'),
                                      status: 'warning',
                                      duration: 10000,
                                      isClosable: true,
                                    })
                                  }
                                }
                              }}
                            >
                              Save
                            </Button>
                          </InputRightAddon>
                        </InputGroup>
                      </Box>
                      <Box mt="4" color="#ffffff70">
                        * Your email is not displayed in your public profile.
                      </Box>
                    </Box>
                    <Box m="8" flex="1">
                      <ProfileTitle
                        title="Community"
                        description="Explore under the banner of your favourite community."
                      />
                      <SelectCommunity />
                    </Box>
                  </Box>
                  <Box display={isSmallScreen ? 'block' : 'flex'}>
                    <Box m="8" flex="1">
                      <ProfileTitle
                        title="Share"
                        description="Share your profile, earn referral points!"
                      />
                      <Box justifyContent="center" w="256px" m="32px auto 0">
                        <Box pb="2">
                          <ExternalLink href={twitterLink} mr="2">
                            <Button
                              variant="primary"
                              w="100%"
                              borderBottomRadius="0"
                              leftIcon={
                                <Image
                                  width="24px"
                                  src="/images/TwitterX.svg"
                                />
                              }
                            >
                              {t('Share on Twitter / X')}
                            </Button>
                          </ExternalLink>
                        </Box>
                        <Box pb="2">
                          <ExternalLink href={farcasterLink} mr="2">
                            <Button
                              variant="primary"
                              w="100%"
                              borderRadius="0"
                              leftIcon={
                                <Image
                                  width="24px"
                                  src="/images/Farcaster.svg"
                                />
                              }
                            >
                              {t('Share on Farcaster')}
                            </Button>
                          </ExternalLink>
                        </Box>
                        <Button
                          variant="primary"
                          w="100%"
                          borderTopRadius="0"
                          leftIcon={<CopySimple size="30px" />}
                          onClick={() => onCopy()}
                          isActive={hasCopied}
                        >
                          {hasCopied
                            ? t('Referral Link Copied')
                            : t('Copy Referral Link')}
                        </Button>
                      </Box>
                    </Box>
                    <Box m="8" flex="1"></Box>
                  </Box>
                </Box>
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
                <Box position="absolute" top="38px" right="109px">
                  <Helper
                    title={`Explorer Score`}
                    isProfile={true}
                    definition={
                      <>
                        <Box mb="4">{`Your Explorer Score measures progress along your Bankless journey. Score calculation may evolve in the future.`}</Box>
                      </>
                    }
                  />
                </Box>
              </Box>
              <Box display={isSmallScreen ? 'block' : 'flex'} m="8">
                <Box
                  w={isSmallScreen ? '100%' : '50%'}
                  mr={isSmallScreen ? '0' : '50px'}
                >
                  <ProgressTitle
                    title={`Badge`}
                    score={user.stats.badges || 0}
                    max={MAX_BADGES}
                    definition={`Each lesson Badge increases your score by 1 point.`}
                    // description={`Your KNOWLEDGE score measures your lesson & quest progress.`}
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
                    title={`Referral`}
                    score={referrals}
                    max={maxReferrals(referrals)}
                    definition={`Share knowledge with others by onboarding them. Each validated referral (new Explorer claimed at least 1 Badge) increases your score by 1 point.`}
                  />

                  <MacScrollbar
                    skin="dark"
                    suppressScrollX={true}
                    style={{ height: '445px', paddingRight: '18px' }}
                  >
                    {referrals > 0 ? (
                      user?.stats?.referrals?.map((ref, index) => {
                        const date = new Date(ref.created_at)
                          .toLocaleDateString('en-GB')
                          .replace(/\//g, '/')
                        return (
                          <Box
                            key={`ref-${index}`}
                            mt="2"
                            display="flex"
                            placeContent="end"
                          >
                            <ExternalLink
                              href={`/explorer/${ref.profile_address}`}
                            >
                              {ref.profile_address?.includes('.')
                                ? ref.profile_address
                                : shortenAddress(ref.profile_address)}
                            </ExternalLink>
                            <Box ml="2">{date}</Box>
                          </Box>
                        )
                      })
                    ) : (
                      <Box mt="2" display="flex" placeContent="end">
                        No referrals yet
                      </Box>
                    )}
                  </MacScrollbar>
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
                    title={`Ownership`}
                    score={
                      3 * (user.stats?.datadisks?.length || 0) +
                      (user.stats?.handbooks?.length || 0)
                    }
                    max={MAX_COLLECTIBLES}
                    definition={`Each Handbook increases your score by 1 point, and each DataDisk increases it by 3.`}
                  />
                  <Badges
                    badges={collectibles}
                    type="collectibles"
                    isMyProfile={isMyProfile}
                  />
                </Box>
                <Box w={isSmallScreen ? '100%' : '50%'}>
                  <ProgressTitle
                    title={`Humanity`}
                    score={user.stats?.valid_stamps?.length || 0}
                    max={MAX_STAMPS}
                    definition={`Each stamp you collect by connecting an account increases your score by 1 point.`}
                  />
                  <Badges
                    badges={user.stats?.valid_stamps || []}
                    type="stamps"
                    isMyProfile={address && isMyProfile}
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
                    title={`Achievement`}
                    score={calculateExplorerAchievements(
                      user.stats?.achievements || []
                    )}
                    max={MAX_ACHIEVEMENT}
                    definition={
                      <>
                        {`Donations made on Gitcoin since June 2023 (using Allo Protocol) or Giveth increases your score by 3 points. More achievements to come soon!`}
                      </>
                    }
                  />
                  <Badges
                    badges={user.stats?.achievements || []}
                    type="achievements"
                    isMyProfile={isMyProfile}
                  />
                </Box>
                <Box w={isSmallScreen ? '100%' : '50%'}></Box>
              </Box>
            </Box>
          </Card>
        </Container>
      </Layout>
    )
  else
    return (
      <Layout page="">
        <Container maxW="container.xl" minH="calc(100vh - 73px)">
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
      </Layout>
    )
}
