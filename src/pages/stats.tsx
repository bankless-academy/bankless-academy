import React, { useState, useEffect } from 'react'
import { Box, Container, Text } from '@chakra-ui/react'
import { GetStaticProps } from 'next'
import axios from 'axios'

import { MetaData } from 'components/Head'
import { LESSONS, IS_WHITELABEL } from 'constants/index'

const pageMeta: MetaData = {
  title: 'Stats',
  noindex: true,
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
              {`${stats?.sybils} 😈 sybils (duplicated stamp detected) | ${stats?.sybils7days} 'week | ${stats?.sybils1day} 'day`}
              <br />
              {`${stats?.bots} 🤖 bots (using scripts to automate) | ${stats?.bots7days} 'week | ${stats?.bots1day} 'day`}
            </Box>
          )}
          <Box mt={8}>
            <Text fontSize="lg" color="orange.300">
              {IS_WHITELABEL ? 'lesson' : 'Quest'} completion{' '}
              {IS_WHITELABEL ? '' : '/ lesson'}
            </Text>
            {LESSONS.filter(
              (lesson) =>
                !lesson.isArticle &&
                // lesson.publicationStatus !== 'planned' &&
                lesson.notionId !== '7bc2bf9be4ac4e9181782f996a2a6060' &&
                lesson.notionId !== 'fd14e05114294d6282713809742f79a4'
            ).map((lesson, index) => {
              const lessonCompleted =
                stats?.lessonCompleted[lesson.notionId] || 0
              const userConverted = stats?.userConverted[lesson.notionId] || 0
              const badgeClaimed = stats?.badgeClaimed[lesson.notionId] || 0
              return (
                <>
                  <p>
                    {`${index + 1}. ${lesson.englishName}: `}
                    <br />
                    &nbsp;|- quest completed: {lessonCompleted}
                    <br />
                    &nbsp;|- badge claimed: {badgeClaimed}
                    {/* <br />&nbsp;|- claim conversion rate:{' '}
                    {(badgeClaimed / lessonCompleted) * 100}% */}
                    <br />
                    {lesson.notionId === 'e90059604739465ea99b9a2c8af5eb75' &&
                      userConverted > 0 && (
                        <>
                          &nbsp;|- user converted via the quest: {userConverted}
                          <br />
                        </>
                      )}
                    <br />
                  </p>
                </>
              )
            })}
          </Box>
          <Box mt={8}>
            <Text fontSize="lg" color="orange.300">
              Monthly {IS_WHITELABEL ? 'lesson' : 'quest'} completion
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
              Total {IS_WHITELABEL ? 'lesson' : 'quest'} completion
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
