import React, { useState, useEffect } from 'react'
import { Box, Container, Heading, Image } from '@chakra-ui/react'
import { GetStaticProps } from 'next'
import axios from 'axios'
import { createColumnHelper } from '@tanstack/react-table'

import { MetaData } from 'components/Head'
import { DataTable } from 'components/DataTable'
import { shortenAddress } from 'utils'
import InternalLink from 'components/InternalLink'

const pageMeta: MetaData = {
  title: 'Leaderboard',
}

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: { pageMeta },
  }
}

type UnitConversion = {
  address: string
  score: number
  collectibles: number
  handbooks: number
  badges: number
  ens_name?: string
  ens_avatar?: string
  donations?: any
}

const columnHelper = createColumnHelper<UnitConversion>()

const columns = [
  columnHelper.accessor('address', {
    cell: (info) => {
      const address =
        info.row.original?.ens_name || shortenAddress(info.getValue())
      return (
        <InternalLink
          href={`/profile/${info.row.original?.ens_name || info.getValue()}`}
        >
          <Box display="flex" alignItems="center">
            <Image
              width="30px"
              height="30px"
              borderRadius="50%"
              mr="2"
              src={
                info.row.original?.ens_avatar || '/images/default_avatar.png'
              }
            />
            {address}
          </Box>
        </InternalLink>
      )
    },
    header: 'address',
  }),
  columnHelper.accessor('score', {
    cell: (info) => info.getValue(),
    header: 'score',
  }),
  columnHelper.accessor('collectibles', {
    cell: (info) => info.getValue(),
    header: 'lesson datadisk',
  }),
  columnHelper.accessor('handbooks', {
    cell: (info) => info.getValue(),
    header: 'handbooks',
  }),
  columnHelper.accessor('donations', {
    cell: (info) => {
      const donation = info.getValue()
      if (typeof donation === 'object') {
        return Object.keys(donation).join(', ')
      } else return '-'
    },
    header: 'donations',
  }),
  columnHelper.accessor('badges', {
    cell: (info) => info.getValue(),
    header: 'badges',
  }),
]

const Leaderboard = (): JSX.Element => {
  const [leaderboard, setLeaderboard]: any = useState(null)
  const [fetchedAt, setFetchedAt]: any = useState(null)

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

  if (leaderboard && fetchedAt)
    return (
      <Container maxW="container.xl">
        <Heading as="h2" size="xl" m="8" textAlign="center">
          Bankless Academy Leaderboard
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
          Bankless Academy Leaderboard
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
