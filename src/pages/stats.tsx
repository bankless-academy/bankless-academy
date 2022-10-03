import React, { useState, useEffect } from 'react'
import { Box, Container, Text } from '@chakra-ui/react'
import { GetStaticProps } from 'next'
import axios from 'axios'

import { MetaData } from 'components/Head'
import { LESSONS, IS_WHITELABEL } from 'constants/index'

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
        if (!res.data.error) setStats(res.data)
      })
      .catch(function (error) {
        console.error(error)
      })
  }, [])
  return (
    <Container maxW="container.xl">
      {stats && (
        <Box maxW="500px">
          {!IS_WHITELABEL && (
            <>
              <Box mt={8}>
                <Text fontSize="lg" color="orange.300">
                  Number of unique addresses connected to the app
                </Text>
                {stats?.uniqueAddresses}
              </Box>
              {/* <Box mt={8}>
                <Text fontSize="lg" color="orange.300">
                  Remaining POAPs
                </Text>
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
                <Text fontSize="lg" color="orange.300">
                  POAP codes distributed
                </Text>
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
              </Box> */}
            </>
          )}
          <Box mt={8}>
            <Text fontSize="lg" color="orange.300">
              Number of lesson completion
            </Text>
            {LESSONS.map((lesson, index) => {
              const lessonCompleted =
                stats?.lessonCompleted[lesson.notionId] || 0
              return (
                <>
                  <p>
                    {`${index + 1}. ${lesson.name}: `}
                    {lessonCompleted}
                  </p>
                </>
              )
            })}
          </Box>
          <Box mt={8}>
            <Text fontSize="lg" color="orange.300">
              Monthly lesson completion
            </Text>
            {stats?.monthyCompletion.map((monthlyStats) => (
              <>
                <p>{`${monthlyStats.month.slice(0, 7)}: ${
                  monthlyStats.count
                }`}</p>
              </>
            ))}
          </Box>
        </Box>
      )}
    </Container>
  )
}

export default Stats
