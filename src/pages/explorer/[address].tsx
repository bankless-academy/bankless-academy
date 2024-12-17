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
  useMediaQuery,
  useToast,
} from '@chakra-ui/react'
import { Envelope } from '@phosphor-icons/react'
import router from 'next/router'
import { useAccount } from 'wagmi'
import { t } from 'i18next'
import { useLocalStorage } from 'usehooks-ts'

import Badges from 'components/Badges'
import Card from 'components/Card'
import { MetaData } from 'components/Head'
import { DEFAULT_AVATAR, DOMAIN_URL, MAX_COLLECTIBLES } from 'constants/index'
import { UserType } from 'entities/user'
import {
  emailRegex,
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
import ShareAction from 'components/ShareAction'
import LESSONS from 'constants/lessons'

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
  const [isMobileScreen] = useMediaQuery(['(max-width: 800px)'])
  const { referral, badge, lng } = router.query
  const [user, setUser] = useState<UserType | null>(null)
  const [error, setError] = useState(preloadError)
  const [isMyProfile, setIsMyProfile] = useState(false)
  const [score, setScore] = useLocalStorage(`score`, 0)
  const { address } = useAccount()
  const [passportLS] = useLocalStorage('passport', EMPTY_PASSPORT)
  const [email, setEmail] = useLocalStorage(
    'email',
    localStorage.getItem('email') || ''
  )
  const [initialEmail] = useLocalStorage(
    'email',
    localStorage.getItem('email') || ''
  )
  const toast = useToast()
  const [ens] = useLocalStorage(`name-cache`, {})
  const [community] = useLocalStorage(`community`, '')
  const [efpStats, setEfpStats] = useState<{
    followers_count: number
    following_count: number
  } | null>(null)
  const [isFollowing, setIsFollowing] = useState<boolean>(false)

  const wallets = localStorage.getItem('wallets')
    ? JSON.parse(localStorage.getItem('wallets'))
    : []

  useEffect(() => {
    if (badge !== '') {
      // redirect badge referral to lesson
      const lesson = LESSONS.find(
        (lesson) => lesson.badgeId === parseInt(badge as string)
      )
      if (lesson) {
        const redirect = `/lessons/${lng ? `${lng}/` : ''}${
          lesson.slug
        }?referral=${profileAddress}`
        window.location.href = redirect
      }
    }
  }, [badge, lng])

  useEffect(() => {
    const loadUser = async () => {
      try {
        const res = await fetch(`/api/user/${profileAddress}?profile=true`)
        if (!res.ok) {
          setError('Failed to fetch user data.')
          return
        }
        const loadedUser: UserType = await res.json()

        if (loadedUser?.error) {
          setError(loadedUser?.error)
        } else {
          if (
            typeof window !== 'undefined' &&
            wallets.includes(loadedUser.address) &&
            referral !== 'true'
          ) {
            const redirect = `/explorer/${profileAddress}?referral=true`
            window.history.replaceState(null, null, redirect)
          }
          if (loadedUser?.address !== user?.address) {
            setUser(loadedUser)
          }
        }
      } catch (error) {
        console.log(error)
        setError(
          'Failed to fetch user data from API. Please refresh the page manually.'
        )
      }
    }

    // Add a check to prevent re-fetching if not necessary
    if (profileAddress && (!user || user.address !== profileAddress)) {
      loadUser()
    }
  }, [profileAddress])

  useEffect(() => {
    const newIsMyProfile = address?.toLowerCase() === user?.address
    if (isMyProfile !== newIsMyProfile) {
      setIsMyProfile(newIsMyProfile)
    }

    if (newIsMyProfile && user?.stats?.score !== score) {
      setScore(user?.stats?.score)
    }
  }, [user, address])

  useEffect(() => {
    if (isMyProfile && passportLS?.stamps && passportLS?.version) {
      // update user stamps without requiring to refresh
      const valid_stamps = Object.keys(passportLS.stamps)
      if (
        user &&
        valid_stamps?.length &&
        user?.stats?.valid_stamps?.length !== valid_stamps.length
      ) {
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
  }, [passportLS])

  useEffect(() => {
    const fetchEfpStats = async () => {
      try {
        const res = await fetch(
          `https://api.ethfollow.xyz/api/v1/users/${profileAddress}/stats`
        )
        if (!res.ok) {
          console.error('Failed to fetch EFP stats.')
          return
        }
        const stats = await res.json()
        if (
          stats &&
          stats?.followers_count >= 0 &&
          stats?.following_count >= 0
        ) {
          setEfpStats(stats)
        }
      } catch (error) {
        console.error('Error fetching EFP stats:', error)
      }
    }

    if (profileAddress) {
      fetchEfpStats()
    }
  }, [profileAddress])

  useEffect(() => {
    const fetchEfpStats = async () => {
      try {
        const res = await fetch(
          `https://api.ethfollow.xyz/api/v1/users/${profileAddress}/${address}/followerState`
        )
        if (!res.ok) {
          console.error('Failed to fetch follower state.')
          return
        }
        const followerState = await res.json()
        if (followerState && followerState?.state) {
          setIsFollowing(followerState?.state?.follow)
        }
      } catch (error) {
        console.error('Error fetching follower state:', error)
      }
    }

    if (profileAddress && address) {
      fetchEfpStats()
    }
  }, [profileAddress, address])

  const collectibles = []
  for (let i = 0; i < user?.stats.datadisks?.length; i++) {
    collectibles.push(user?.stats.datadisks[i])
  }
  for (let i = 0; i < user?.stats.handbooks?.length; i++) {
    collectibles.push(user?.stats.handbooks[i])
  }

  const shareLink = profileUrl
  const share = `Check out my Bankless Explorer Score, and track my journey at @BanklessAcademy.

Join me! Discover the knowledge and tools to #OwnYourFuture 👨🏻‍🚀🚀`

  const referrals = user?.stats?.referrals?.length || 0

  const displayCommunity = isMyProfile ? community : user?.community

  if (user)
    // TODO: create Profile component
    return (
      <Layout page={isMyProfile ? 'PROFILE' : 'PROFILE'}>
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
              position="relative"
            >
              <Image
                w="260px"
                h="260px"
                margin="auto"
                borderRadius="50%"
                backgroundColor="black"
                fallbackSrc={DEFAULT_AVATAR}
                src={
                  user.ensName?.endsWith('.eth')
                    ? `https://metadata.ens.domains/mainnet/avatar/${user.ensName}`
                    : user.avatar
                }
              />
              {isMyProfile && (
                <Box position="absolute" top="25px" right="25px">
                  <Helper
                    title={`Profile username & avatar`}
                    isProfile={true}
                    definition={
                      <>
                        <Box mb="4">
                          {`Check out `}
                          <ExternalLink
                            underline="true"
                            href="/lessons/registering-your-web3-username"
                          >
                            this article
                          </ExternalLink>
                          {` to register your web3 username and avatar with the Ethereum Name Service (ENS).`}
                          <br />
                          {`Your ENS user info will be displayed here, and on other web3 sites you visit.`}
                        </Box>
                      </>
                    }
                  />
                </Box>
              )}
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
            {/* ENS edit profile */}
            {isMyProfile && (
              <Box textAlign="right" m="4">
                <ExternalLink
                  href={`https://app.ens.domains/${
                    user.ensName?.endsWith('.eth') ? user.ensName : ''
                  }`}
                >
                  <Button
                    variant="secondary"
                    leftIcon={<Image h="20px" src="/images/ens.svg" />}
                  >
                    Edit profile
                  </Button>
                </ExternalLink>
              </Box>
            )}
            {/* EFP stats */}
            {efpStats !== null && isFollowing !== null && (
              <Box
                display="flex"
                placeContent="center"
                alignItems="center"
                gap="32px"
                fontSize="xl"
                fontWeight="bold"
                backgroundColor="#161515"
                borderBottomRadius={isMyProfile ? '0' : '2xl'}
                padding="16px"
              >
                <Box>
                  <ExternalLink
                    href={`https://ethfollow.xyz/${profileAddress}`}
                  >
                    <Button
                      variant={isFollowing ? 'secondary' : 'primary'}
                      leftIcon={
                        <Image
                          h="20px"
                          src={
                            isFollowing
                              ? '/images/efp-white.svg'
                              : '/images/efp.svg'
                          }
                        />
                      }
                    >
                      {isFollowing ? 'Following' : 'Follow'}
                    </Button>
                  </ExternalLink>
                </Box>
                <Box
                  display="flex"
                  flexDirection={isMobileScreen ? 'column' : 'row'}
                  gap="16px"
                >
                  <Box>{`${efpStats.followers_count} Follower${
                    efpStats.followers_count > 1 ? 's' : ''
                  }`}</Box>
                  <Box>{`${efpStats.following_count} Following`}</Box>
                </Box>
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
                                    title: `Email missing.`,
                                    description: `Please provide an email address.`,
                                    status: 'warning',
                                    duration: 10000,
                                    isClosable: true,
                                  })
                                else if (emailRegex.test(email) === false)
                                  toast({
                                    title: `Wrong email format.`,
                                    description: `Please check your email.`,
                                    status: 'warning',
                                    duration: 10000,
                                    isClosable: true,
                                  })
                                else {
                                  const addressLower = address?.toLowerCase()
                                  const result = await api(
                                    '/api/subscribe-newsletter',
                                    {
                                      email,
                                      wallet: address,
                                      ens:
                                        addressLower &&
                                        addressLower in ens &&
                                        !ens[addressLower]?.name?.includes(
                                          '...'
                                        )
                                          ? ens[addressLower]?.name
                                          : undefined,
                                    }
                                  )
                                  if (result && result.status === 200) {
                                    setEmail(email)
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
                        description="Explore under the banner of your favorite community."
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
                      <Box justifyContent="center" w="100%" m="32px auto 0">
                        <ShareAction
                          shareMessage={share}
                          shareLink={shareLink}
                        />
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
                  pr={isSmallScreen ? '0' : '50px'}
                  flex="1 1 0px"
                >
                  <ProgressTitle
                    title={`Badges`}
                    score={user.stats.badges || 0}
                    max={MAX_BADGES}
                    definition={
                      <>
                        {`Explorers study their surroundings.`}
                        <br />
                        {`Each lesson badge increases your score by 1 point.`}
                      </>
                    }
                  />
                  <Badges
                    badges={user.badgeTokenIds}
                    badgeToHighlight={badgeToHighlight}
                    type="badges"
                    isMyProfile={isMyProfile}
                  />
                </Box>
                <Box w={isSmallScreen ? '100%' : '50%'} flex="1 1 0px">
                  <ProgressTitle
                    title={`Referral`}
                    score={referrals}
                    max={maxReferrals(referrals)}
                    definition={
                      <>
                        {`Explorers share knowledge with others.`}
                        <br />
                        {`Each friend referred (after claiming their first badge) increases your score by 1 point.`}
                      </>
                    }
                  />

                  <MacScrollbar
                    skin="dark"
                    suppressScrollX={true}
                    style={{ maxHeight: '445px', paddingRight: '18px' }}
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
                      <Box
                        mt="2"
                        display="flex"
                        flexDirection="column"
                        textAlign="right"
                      >
                        <Box mb="4">No referrals yet.</Box>
                        {isMyProfile && (
                          <ShareAction
                            shareMessage={share}
                            shareLink={shareLink}
                          />
                        )}
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
                  pr={isSmallScreen ? '0' : '50px'}
                  flex="1 1 0px"
                >
                  <ProgressTitle
                    title={`Ownership`}
                    score={
                      3 * (user.stats?.datadisks?.length || 0) +
                      (user.stats?.handbooks?.length || 0)
                    }
                    max={MAX_COLLECTIBLES}
                    definition={
                      <>
                        {`Explorers own digital items.`}
                        <br />
                        {`Each Handbook increases your score by 1 point, and each DataDisk increases it by 3 points.`}
                      </>
                    }
                  />
                  <Badges
                    badges={collectibles}
                    type="collectibles"
                    isMyProfile={isMyProfile}
                  />
                </Box>
                <Box w={isSmallScreen ? '100%' : '50%'} flex="1 1 0px">
                  <ProgressTitle
                    title={`Humanity`}
                    score={user.stats?.valid_stamps?.length || 0}
                    max={MAX_STAMPS}
                    definition={
                      <>
                        {`Explorers can prove they aren’t bots.`}
                        <br />
                        {`Each account you connect increases your score by 1 point.`}
                      </>
                    }
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
                  pr={isSmallScreen ? '0' : '50px'}
                  flex="1 1 0px"
                >
                  <ProgressTitle
                    title={`Achievement`}
                    score={calculateExplorerAchievements(
                      user.stats?.achievements || []
                    )}
                    max={MAX_ACHIEVEMENT}
                    definition={
                      <>
                        {`Explorers go above and beyond.`}
                        <br />
                        {`Each achievement grants a unique amount of points.`}
                      </>
                    }
                  />
                  <Badges
                    badges={user.stats?.achievements || []}
                    type="achievements"
                    isMyProfile={isMyProfile}
                  />
                </Box>
                <Box w={isSmallScreen ? '100%' : '50%'} flex="1 1 0px"></Box>
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
