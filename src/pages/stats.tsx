import React, { useState, useEffect } from 'react'
import { Box, Container, Progress, Text } from '@chakra-ui/react'
import { GetStaticProps } from 'next'
import axios from 'axios'

import { MetaData } from 'components/Head'
import LESSONS from 'constants/lessons'

const pageMeta: MetaData = {
  title: 'Stats',
}

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: { pageMeta },
  }
}

const Stats = (): JSX.Element => {
  const [stats, setStats]: any = useState(null)
  useEffect(() => {
    axios
      .get(`/api/stats`)
      .then(function (res) {
        setStats(res.data)
      })
      .catch(function (error) {
        console.error(error)
      })
  }, [])
  return (
    <Container maxW="container.xl">
      {stats && (
        <Box maxW="500px">
          <Box mt={8}>
            <Text fontSize="lg">
              {`Number of unique addresses: ${stats?.uniqueAddresses}`}
            </Text>
          </Box>
          <Box mt={8}>
            <Text fontSize="lg">Remaining POAPs</Text>
            {LESSONS.map((lesson, index) => {
              const remainingPoaps =
                stats?.remainingPoaps[lesson.poapEventId] || 0
              return (
                <>
                  <p>
                    {`${index + 1}. ${lesson.name}: `}
                    {remainingPoaps}
                    <Progress
                      value={(remainingPoaps / 200) * 100}
                      size="md"
                      colorScheme="yellow"
                    />
                  </p>
                </>
              )
            })}
          </Box>
          <Box mt={8}>
            <Text fontSize="lg">POAP codes distributed</Text>
            {LESSONS.map((lesson, index) => {
              const poapDistributed =
                stats?.poapDistributed[lesson.poapEventId] || 0
              return (
                <>
                  <p>
                    {`${index + 1}. ${lesson.name}: `}
                    {poapDistributed}
                  </p>
                </>
              )
            })}
          </Box>
        </Box>
      )}
    </Container>
  )
}

export default Stats
