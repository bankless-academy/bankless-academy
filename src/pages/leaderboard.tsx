import React, { useState, useEffect } from 'react'
import { Container, Heading, Image } from '@chakra-ui/react'
import { GetStaticProps } from 'next'
import axios from 'axios'
import { createColumnHelper } from '@tanstack/react-table'

import { MetaData } from 'components/Head'
import { DataTable } from 'components/DataTable'
import ExternalLink from 'components/ExternalLink'

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
}

const columnHelper = createColumnHelper<UnitConversion>()

const columns = [
  columnHelper.accessor('address', {
    cell: (info) => (
      <ExternalLink
        href={`https://opensea.io/${info.getValue()}/collected?search[sortBy]=LAST_TRANSFER_DATE&search[sortAscending]=false`}
      >
        {info.getValue()}
      </ExternalLink>
    ),
    header: 'address',
  }),
  columnHelper.accessor('score', {
    cell: (info) => info.getValue(),
    header: 'score',
  }),
  columnHelper.accessor('collectibles', {
    cell: (info) => info.getValue(),
    header: 'lesson collectibles',
  }),
  columnHelper.accessor('handbooks', {
    cell: (info) => info.getValue(),
    header: 'handbooks',
  }),
  columnHelper.accessor('badges', {
    cell: (info) => info.getValue(),
    header: 'badges',
  }),
]

const Leaderboard = (): JSX.Element => {
  const [leaderboard, setLeaderboard]: any = useState(null)
  const [error, setError]: any = useState('')
  useEffect(() => {
    setError('')
    axios
      .get(`/api/cache/leaderboard`)
      .then(function (res) {
        if (!res.data.error) {
          const data = []
          for (const address of Object.keys(res.data)) {
            const addressNumbers = { ...res.data[address] }
            addressNumbers.score =
              3 * (addressNumbers?.collectibles || 0) +
              (addressNumbers?.handbooks || 0) +
              (addressNumbers?.badges || 0)
            data.push({ address, ...addressNumbers })
          }
          setLeaderboard(data)
        } else {
          setError(res.data.error)
        }
      })
      .catch(function (error) {
        setError('API limit reached, try again in 1 minute. ' + error?.message)
        console.error(error)
      })
  }, [])

  if (leaderboard)
    return (
      <Container maxW="container.xl">
        <Heading as="h2" size="xl" m="8" textAlign="center">
          Bankless Academy Leaderboard
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
