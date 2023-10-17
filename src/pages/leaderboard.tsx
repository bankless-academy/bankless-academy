import React, { useState, useEffect } from 'react'
import { Container, Heading } from '@chakra-ui/react'
import { GetStaticProps } from 'next'
import axios from 'axios'
import { createColumnHelper } from '@tanstack/react-table'

import { MetaData } from 'components/Head'
import { DataTable } from 'components/DataTable'

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
  collectibles: number
  badges: number
}

const columnHelper = createColumnHelper<UnitConversion>()

const columns = [
  columnHelper.accessor('address', {
    cell: (info) => info.getValue(),
    header: 'address',
  }),
  columnHelper.accessor('collectibles', {
    cell: (info) => info.getValue(),
    header: 'collectibles',
  }),
  columnHelper.accessor('badges', {
    cell: (info) => info.getValue(),
    header: 'badges',
  }),
]

const Leaderboard = (): JSX.Element => {
  const [leaderboard, setLeaderboard]: any = useState(null)
  useEffect(() => {
    axios
      .get(`/api/leaderboard`)
      .then(function (res) {
        if (!res.data.error) {
          const data = []
          for (const address of Object.keys(res.data)) {
            data.push({ address, ...res.data[address] })
          }
          setLeaderboard(data)
        }
      })
      .catch(function (error) {
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
              id: 'collectibles',
              desc: true,
            },
          ]}
        />
      </Container>
    )
}

export default Leaderboard
