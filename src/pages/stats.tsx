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

  let totalLessonCompletion = 0
  stats?.monthyCompletion.map(
    (monthlyStats) => (totalLessonCompletion += parseInt(monthlyStats.count))
  )
  return (
    <Container maxW="container.xl">
      {stats && (
        <Box maxW="500px">
          {!IS_WHITELABEL && (
            <Box mt={8}>
              <Text fontSize="lg" color="orange.300">
                Number of unique addresses connected to the app
              </Text>
              {`${stats?.uniqueAddresses} 👨‍🚀 | ${stats?.uniqueAddresses7days} 'week | ${stats?.uniqueAddresses1day} 'day`}
              <br />
              {`${stats?.sybils} 👨‍🌾 | ${stats?.sybils7days} 'week | ${stats?.sybils1day} 'day`}
              <br />
              {`${stats?.bots} 🤖 | ${stats?.bots7days} 'week | ${stats?.bots1day} 'day`}
            </Box>
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
          <Box mt={8}>
            <Text fontSize="lg" color="orange.300">
              Total lesson completion
            </Text>
            <p>
              {`${totalLessonCompletion} | ${stats?.lessonCompleted7days} 'week | ${stats?.lessonCompleted1day} 'day`}
            </p>
          </Box>
        </Box>
      )}
    </Container>
  )
}

export default Stats
