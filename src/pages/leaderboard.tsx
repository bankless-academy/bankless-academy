import React, { useState, useEffect } from 'react'
import { Box, Container, Heading, Image, Tooltip } from '@chakra-ui/react'
import { GetStaticProps } from 'next'
import axios from 'axios'
import { createColumnHelper } from '@tanstack/react-table'

import { MetaData } from 'components/Head'
import { DataTable } from 'components/DataTable'
import { shortenAddress } from 'utils'
import InternalLink from 'components/InternalLink'
import { useRouter } from 'next/router'

const pageMeta: MetaData = {
  title: 'Bankless Explorer Leaderboard',
}

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: { pageMeta },
  }
}

export const DONATION_MAPPING = {
  GCR1: 'Gitcoin Citizen Round 1',
  GR11: 'Gitcoin Round 11',
  GR12: 'Gitcoin Round 12',
  GR13: 'Gitcoin Round 13',
  GR14: 'Gitcoin Round 14',
  GR15: 'Gitcoin Round 15',
  GR16: 'Gitcoin Round 16',
  GR17: 'Gitcoin Round 17',
  GR18: 'Gitcoin Round 18',
}

export const getDonationdetails = (donations) => {
  return Object.keys(donations).map((donation) => DONATION_MAPPING[donation])
}

type UnitConversion = {
  address: string
  rank: number
  score: number
  collectibles: number
  handbooks: number
  badges: number
  ens_name?: string
  ens_avatar?: string
  donations?: any
  donations_count?: number
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
              mx="2"
              src={
                info.row.original?.ens_avatar || '/images/default_avatar.png'
              }
            />
            {address}
          </Box>
        </InternalLink>
      )
    },
    header: 'Explorer Address',
  }),
  columnHelper.accessor('score', {
    cell: (info) => info.getValue(),
    header: 'Bankless Score',
  }),
  columnHelper.accessor('collectibles', {
    cell: (info) => info.getValue(),
    header: 'Datadisks',
  }),
  columnHelper.accessor('handbooks', {
    cell: (info) => info.getValue(),
    header: 'Handbooks',
  }),
  columnHelper.accessor('donations_count', {
    cell: (info) => {
      const donations = info.row.original?.donations
      if (typeof donations === 'object') {
        const donationdetails = getDonationdetails(donations).join(', ')
        const numberOfDonations = Object.keys(donations)?.length
        return (
          <>
            <Tooltip label={donationdetails}>
              <Box>{numberOfDonations}</Box>
            </Tooltip>
          </>
        )
      } else
        return (
          <>
            <Tooltip label="No donation yet.">
              <Box>0</Box>
            </Tooltip>
          </>
        )
    },
    header: 'Donations',
  }),
  columnHelper.accessor('badges', {
    cell: (info) => info.getValue(),
    header: 'Badges',
  }),
]

const Leaderboard = (): JSX.Element => {
  const [leaderboard, setLeaderboard]: any = useState(null)
  const [fetchedAt, setFetchedAt]: any = useState(null)
  const router = useRouter()
  const [isLoadingProfile, setIsLoadingProfile] = useState(false)

  const [error, setError]: any = useState('')
  useEffect(() => {
    setError('')
    axios
      .get(`/api/cache/leaderboard`)
      .then(function (res) {
        if (!res.data.error) {
          const data = []
          for (const address of Object.keys(res.data.data)) {
            data.push({ address, ...res.data.data[address] })
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
      url !== router.asPath && setIsLoadingProfile(true)
    const handleComplete = (url) =>
      url === router.asPath &&
      setTimeout(() => {
        setIsLoadingProfile(false)
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

  if (leaderboard && fetchedAt && !isLoadingProfile)
    return (
      <Container maxW="container.xl">
        <Heading as="h2" size="xl" m="8" textAlign="center">
          {isLoadingProfile
            ? 'Loading Explorer Profile'
            : 'Bankless Explorer Leaderboard'}
        </Heading>
        <Heading as="h3" size="md" m="8" textAlign="center">
          Last update: {fetchedAt}
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
        <Heading as="h2" size="xl" m="8" textAlign="center">
          {isLoadingProfile
            ? 'Loading Explorer Profile'
            : 'Bankless Explorer Leaderboard'}
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
