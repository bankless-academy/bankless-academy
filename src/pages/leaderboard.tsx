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
  const [fetchedAt, setFetchedAt]: any = useState(null)
  const router = useRouter()
  const [isLoadingCommunities, setIsLoadingCommunities] = useState(false)
  const [error, setError]: any = useState('')

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
            // addressData.donations_count =
            //   Object.keys(addressData.donations || {})?.length || 0
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
  }, [])

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

  if (leaderboard && communities && fetchedAt && !isLoadingCommunities)
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
