import React, { useState, useEffect } from 'react'
import {
  Box,
  Container,
  Heading,
  Image,
  Tooltip,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Text,
  Select,
  Button,
} from '@chakra-ui/react'
import { GetStaticProps } from 'next'
import axios from 'axios'
import { createColumnHelper } from '@tanstack/react-table'

import { MetaData } from 'components/Head'
import { DataTable } from 'components/DataTable'
import { calculateExplorerAchievements, shortenAddress } from 'utils/index'
import InternalLink from 'components/InternalLink'
import { useRouter } from 'next/router'
import { STAMP_PLATFORMS } from 'constants/passport'
import { COLLECTIBLE_DETAILS } from 'constants/index'
import { ACHIEVEMENTS } from 'constants/achievements'

const pageMeta: MetaData = {
  title: 'Bankless Explorer Leaderboard',
}

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: { pageMeta },
  }
}

export const getAchievementDetails = (achievements) => {
  return achievements.map(
    (achievement) => ACHIEVEMENTS[achievement]?.description
  )
}

type UnitConversion = {
  address: string
  rank: number
  score: number
  datadisks: string[]
  datadisks_count: number
  handbooks: string[]
  handbooks_count: number
  badges: number
  ens_name?: string
  ens_avatar?: string
  achievements: string[]
  achievements_count?: number
  valid_stamps?: string[]
  valid_stamps_count?: number
  referrals?: number
}

type CommunityMember = {
  address: string
  ens_name: string | null
}

type Community = {
  community: string
  user_count: number
  members: CommunityMember[]
}

type MonthlyReferral = {
  address: string
  ens_name: string | null
  referrals: number
}

const columnHelper = createColumnHelper<UnitConversion>()

const columns = [
  columnHelper.accessor('address', {
    cell: (info) => {
      const address =
        info.row.original?.ens_name || shortenAddress(info.getValue())
      return (
        <InternalLink
          href={`/explorer/${info.row.original?.ens_name || info.getValue()}`}
        >
          <Box display="flex" alignItems="center">
            #{info.row.original.rank}
            <Image
              width="30px"
              height="30px"
              borderRadius="50%"
              loading="lazy"
              mx="2"
              src={
                info.row.original?.ens_avatar || '/images/explorer_avatar.png'
              }
            />
            <Text
              as="span"
              color={info.row.original?.ens_name ? undefined : 'blue.500'}
            >
              {address}
            </Text>
          </Box>
        </InternalLink>
      )
    },
    header: 'Explorer Address',
  }),
  columnHelper.accessor('score', {
    cell: (info) => info.getValue(),
    header: 'Explorer Score',
  }),
  columnHelper.accessor('datadisks_count', {
    cell: (info) => {
      const datadisks = info.row.original?.datadisks
      const datadisksList = datadisks
        ?.map((datadisk) => COLLECTIBLE_DETAILS[datadisk]?.englishName)
        .join(', ')
      const number = info.getValue()
      return (
        <>
          <Tooltip label={datadisksList}>
            <Box>{number}</Box>
          </Tooltip>
        </>
      )
    },
    header: 'Datadisks',
  }),
  columnHelper.accessor('handbooks_count', {
    cell: (info) => {
      const handbooks = info.row.original?.handbooks
      const handbooksList = handbooks
        ?.map((handbook) => COLLECTIBLE_DETAILS[handbook]?.englishName)
        .join(', ')
      const number = info.getValue()
      return (
        <>
          <Tooltip label={handbooksList}>
            <Box>{number}</Box>
          </Tooltip>
        </>
      )
    },
    header: 'Handbooks',
  }),
  columnHelper.accessor('achievements_count', {
    cell: (info) => {
      const achievements = info.row.original?.achievements
      if (achievements?.length) {
        const achievementdetails =
          getAchievementDetails(achievements)?.join(', ')
        const pointsForAchievements = info.getValue()
        return (
          <>
            <Tooltip label={achievementdetails}>
              <Box>{pointsForAchievements}</Box>
            </Tooltip>
          </>
        )
      } else
        return (
          <>
            <Tooltip label="No Achievements yet.">
              <Box>0</Box>
            </Tooltip>
          </>
        )
    },
    header: 'Achievements',
  }),
  columnHelper.accessor('valid_stamps_count', {
    cell: (info) => {
      const stamps = info.row.original?.valid_stamps
      const stampList = stamps
        ?.map((stamp) => STAMP_PLATFORMS[stamp]?.name)
        .join(', ')
      const numberOfStamps = info.getValue()
      return (
        <>
          <Tooltip label={stampList}>
            <Box>{numberOfStamps}</Box>
          </Tooltip>
        </>
      )
    },
    header: 'Stamps',
  }),
  columnHelper.accessor('referrals', {
    cell: (info) => info.getValue(),
    header: 'Referrals',
  }),
  columnHelper.accessor('badges', {
    cell: (info) => info.getValue(),
    header: 'Badges',
  }),
]

const Leaderboard = (): JSX.Element => {
  const [leaderboard, setLeaderboard]: any = useState(null)
  const [communities, setCommunities]: any = useState(null)
  const [communityReferrals, setCommunityReferrals]: any = useState(null)
  const [fetchedAt, setFetchedAt]: any = useState(null)
  const router = useRouter()
  const [isLoadingCommunities, setIsLoadingCommunities] = useState(false)
  const [error, setError]: any = useState('')
  const [monthlyReferrals, setMonthlyReferrals]: any = useState(null)
  const [selectedMonth, setSelectedMonth] = useState(() => {
    const now = new Date()
    return `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}`
  })

  // Generate array of months from Feb 2024 to current month
  const getAvailableMonths = () => {
    const months = []
    const startDate = new Date(2024, 1) // February 2024
    const endDate = new Date()

    const currentDate = new Date(startDate)
    while (currentDate <= endDate) {
      months.push(new Date(currentDate))
      currentDate.setMonth(currentDate.getMonth() + 1)
    }

    return months.reverse() // Most recent first
  }

  const handleMonthChange = (direction: 'prev' | 'next') => {
    const [year, month] = selectedMonth.split('-').map(Number)
    const date = new Date(year, month - 1) // month is 0-based in JS Date

    if (direction === 'prev') {
      date.setMonth(date.getMonth() - 1)
    } else {
      date.setMonth(date.getMonth() + 1)
    }

    // Don't allow going beyond current month
    const now = new Date()
    if (date > now) return

    // Don't allow going before January 2024
    const startDate = new Date(2024, 0)
    if (date < startDate) return

    setSelectedMonth(
      `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}`
    )
  }

  const canGoToPrevMonth = () => {
    const [year, month] = selectedMonth.split('-').map(Number)
    const currentDate = new Date(year, month - 1)
    const startDate = new Date(2024, 1) // February 2024
    return currentDate > startDate
  }

  const canGoToNextMonth = () => {
    const [year, month] = selectedMonth.split('-').map(Number)
    const currentDate = new Date(year, month - 1)
    const now = new Date()
    const firstDayOfCurrentMonth = new Date(now.getFullYear(), now.getMonth())
    return currentDate < firstDayOfCurrentMonth
  }

  useEffect(() => {
    // Fetch communities data
    axios
      .get(`/api/get/top-communities`)
      .then((res) => {
        if (!res.data.error) {
          setCommunities(res.data.communities)
        }
      })
      .catch((error) => {
        console.error('Error fetching communities:', error)
      })

    // Fetch community referrals
    axios
      .get(`/api/get/community-referrals`)
      .then((res) => {
        setCommunityReferrals(res.data.communityReferrals)
      })
      .catch((error) => {
        console.error('Error fetching community referrals:', error)
      })

    // Fetch monthly referrals
    axios
      .get(`/api/get/monthly-referrals?monthYear=${selectedMonth}`)
      .then((res) => {
        setMonthlyReferrals(res.data.referrals)
      })
      .catch((error) => {
        console.error('Error fetching monthly referrals:', error)
      })

    // Existing leaderboard fetch
    setError('')
    axios
      .get(`/api/cache/top200_leaderboard`)
      .then(function (res) {
        if (!res.data.error) {
          const data = []
          for (const address of Object.keys(res.data.data)) {
            const addressData = res.data.data[address]
            addressData.valid_stamps_count =
              addressData.valid_stamps?.length || 0
            addressData.datadisks_count = addressData.datadisks?.length || 0
            addressData.handbooks_count = addressData.handbooks?.length || 0
            addressData.referrals = addressData?.referrals || 0
            addressData.achievements_count = calculateExplorerAchievements(
              addressData?.achievements || []
            )
            data.push({ address, ...addressData })
          }
          setLeaderboard(data)
          const date = new Date(res.data.fetchedAt)
          setFetchedAt(
            `${date.toLocaleDateString()}: ${date.toLocaleTimeString()}`
          )
        } else {
          setError(res.data.error)
        }
      })
      .catch(function (error) {
        setError('API limit reached, try again in 1 minute. ' + error?.message)
        console.error(error)
      })
  }, [selectedMonth])

  useEffect(() => {
    const handleStart = (url) =>
      url !== router.asPath && setIsLoadingCommunities(true)
    const handleComplete = (url) =>
      url === router.asPath &&
      setTimeout(() => {
        setIsLoadingCommunities(false)
      }, 100)

    router.events.on('routeChangeStart', handleStart)
    router.events.on('routeChangeComplete', handleComplete)
    router.events.on('routeChangeError', handleComplete)

    return () => {
      router.events.off('routeChangeStart', handleStart)
      router.events.off('routeChangeComplete', handleComplete)
      router.events.off('routeChangeError', handleComplete)
    }
  })

  if (
    leaderboard &&
    communities &&
    communityReferrals &&
    fetchedAt &&
    !isLoadingCommunities
  )
    return (
      <Container maxW="container.xxl">
        <Box mb={10} mt={4}>
          <Heading as="h2" size="lg" mb={4} textAlign="center">
            Top Communities
          </Heading>
          <Table variant="simple">
            <Thead>
              <Tr>
                <Th>Rank</Th>
                <Th>Community</Th>
                <Th>Total Members</Th>
                <Th>Members</Th>
              </Tr>
            </Thead>
            <Tbody>
              {communities.map((community: Community, index: number) => (
                <Tr key={community.community}>
                  <Td>#{index + 1}</Td>
                  <Td>{community.community}</Td>
                  <Td>{community.user_count}</Td>
                  <Td>
                    <Text>
                      {[
                        // Display ENS name holders first
                        ...community.members
                          .filter((member) => member.ens_name)
                          .map((member, index) => (
                            <React.Fragment key={member.address}>
                              {index > 0 && ', '}
                              <InternalLink
                                href={`/explorer/${member.ens_name}`}
                                display="inline"
                              >
                                <Text as="span">{member.ens_name}</Text>
                              </InternalLink>
                            </React.Fragment>
                          )),
                        // Then display address-only members
                        ...community.members
                          .filter((member) => !member.ens_name)
                          .map((member, index) => (
                            <React.Fragment key={member.address}>
                              {(index > 0 ||
                                community.members.some((m) => m.ens_name)) &&
                                ', '}
                              <InternalLink
                                href={`/explorer/${member.address}`}
                                display="inline"
                              >
                                <Text as="span" color="blue.500">
                                  {shortenAddress(member.address)}
                                </Text>
                              </InternalLink>
                            </React.Fragment>
                          )),
                      ]}
                    </Text>
                  </Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </Box>

        <Box mb={10} mt={4}>
          <Heading as="h2" size="lg" mb={4} textAlign="center">
            Community Referral Leaderboard
          </Heading>
          <Table variant="simple">
            <Thead>
              <Tr>
                <Th>Rank</Th>
                <Th>Community</Th>
                <Th>Total Referrals</Th>
                <Th>Top Referrers</Th>
              </Tr>
            </Thead>
            <Tbody>
              {communityReferrals.map((community: any, index: number) => (
                <Tr key={community.community}>
                  <Td>#{index + 1}</Td>
                  <Td>{community.community}</Td>
                  <Td>{community.total_referrals}</Td>
                  <Td>
                    <Text>
                      {community.members
                        .filter((member: any) => member.referrals > 0)
                        .sort((a: any, b: any) => b.referrals - a.referrals)
                        .slice(0, 5)
                        .map((member: any, index: number) => (
                          <React.Fragment key={member.address}>
                            {index > 0 && ', '}
                            <InternalLink
                              href={`/explorer/${
                                member.ens_name || member.address
                              }`}
                              display="inline"
                            >
                              <Text
                                as="span"
                                color={member.ens_name ? undefined : 'blue.500'}
                              >
                                {member.ens_name ||
                                  shortenAddress(member.address)}
                              </Text>
                            </InternalLink>
                            <Text as="span" color="gray.500" fontSize="sm">
                              {` (${member.referrals})`}
                            </Text>
                          </React.Fragment>
                        ))}
                    </Text>
                  </Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </Box>

        <Box mb={10} mt={4}>
          <Heading as="h2" size="lg" mb={4} textAlign="center">
            Monthly Referrals
          </Heading>
          <Box
            mb={4}
            display="flex"
            alignItems="center"
            justifyContent="center"
            gap={2}
          >
            {canGoToPrevMonth() && (
              <Button
                variant="outline"
                onClick={() => handleMonthChange('prev')}
                cursor="pointer"
                _hover={{ opacity: 0.7 }}
                transition="opacity 0.2s"
              >
                &lt;
              </Button>
            )}
            <Select
              value={selectedMonth}
              onChange={(e) => setSelectedMonth(e.target.value)}
              maxWidth="200px"
            >
              {getAvailableMonths().map((date) => {
                const value = `${date.getFullYear()}-${String(
                  date.getMonth() + 1
                ).padStart(2, '0')}`
                return (
                  <option key={value} value={value}>
                    {date.toLocaleString('default', {
                      month: 'long',
                      year: 'numeric',
                    })}
                  </option>
                )
              })}
            </Select>
            {canGoToNextMonth() && (
              <Button
                variant="outline"
                onClick={() => handleMonthChange('next')}
                cursor="pointer"
                _hover={{ opacity: 0.7 }}
                transition="opacity 0.2s"
              >
                &gt;
              </Button>
            )}
          </Box>
          <Table variant="simple">
            <Thead>
              <Tr>
                <Th>Rank</Th>
                <Th>Explorer Address</Th>
                <Th>Referrals</Th>
              </Tr>
            </Thead>
            <Tbody>
              {monthlyReferrals?.length === 0 ? (
                <Tr>
                  <Td colSpan={3} textAlign="center" py={8}>
                    <Text color="gray.500">No referrals for this month</Text>
                  </Td>
                </Tr>
              ) : (
                monthlyReferrals?.map(
                  (referral: MonthlyReferral, index: number) => (
                    <Tr key={referral.address}>
                      <Td>#{index + 1}</Td>
                      <Td>
                        <InternalLink
                          href={`/explorer/${
                            referral.ens_name || referral.address
                          }`}
                        >
                          <Text
                            as="span"
                            color={referral.ens_name ? undefined : 'blue.500'}
                          >
                            {referral.ens_name ||
                              shortenAddress(referral.address)}
                          </Text>
                        </InternalLink>
                      </Td>
                      <Td>{referral.referrals}</Td>
                    </Tr>
                  )
                )
              )}
            </Tbody>
          </Table>
        </Box>

        <Heading as="h2" size="lg" mb={4} textAlign="center">
          <Tooltip label={`Last update: ${fetchedAt}`} hasArrow>
            <Text as="span" cursor="help">
              Explorer Leaderboard
            </Text>
          </Tooltip>
        </Heading>
        <DataTable
          columns={columns}
          data={leaderboard}
          defaultSorting={[
            {
              id: 'score',
              desc: true,
            },
          ]}
        />
      </Container>
    )
  else
    return (
      <Container maxW="container.xl">
        <Heading as="h2" size="xl" m="4" textAlign="center">
          Leaderboard
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

export default Leaderboard
