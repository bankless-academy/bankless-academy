import React, { useState } from 'react'
import styled from '@emotion/styled'
import { Text, Image, Button, Box, Tag, Tooltip } from '@chakra-ui/react'
import router from 'next/router'
import { useLocalStorage } from 'usehooks-ts'

import { LessonType } from 'entities/lesson'
import LessonSlides from 'components/LessonSlides'
import Card from 'components/Card'
import ExternalLink from 'components/ExternalLink'
import Badge from 'components/Badge'
import QuestComponent from 'components/Quest/QuestComponent'

const StyledCard = styled(Card)<{ issmallscreen?: string }>`
  h1 {
  }
`

const Lesson = ({
  lesson,
  extraKeywords,
}: {
  lesson: LessonType
  extraKeywords?: any
}): React.ReactElement => {
  const { embed } = router.query
  const [isKudosMintedLS] = useLocalStorage(
    `isKudosMinted-${lesson.kudosId}`,
    false
  )
  const isLessonStarted = (localStorage.getItem(lesson.slug) || 0) > 0
  const [isLessonOpen, setIsLessonOpen] = useState<boolean>(false)

  const Quest = QuestComponent(lesson.quest, lesson.kudosId)

  return (
    <>
      {isLessonOpen ? (
        <LessonSlides
          lesson={lesson}
          extraKeywords={extraKeywords}
          closeLesson={() => setIsLessonOpen(false)}
          Quest={Quest}
        />
      ) : (
        <>
          <StyledCard p={6}>
            <Text
              as="h1"
              fontSize="xl"
              fontWeight="bold"
              textAlign="center"
              m="auto"
              borderBottom="1px solid #989898"
              pb="2"
              w="fit-content"
            >
              {lesson.name}
            </Text>
            <Box textAlign="right" maxW="500px">
              <Box
                style={{
                  cursor: 'pointer',
                }}
                onClick={() => setIsLessonOpen(true)}
              >
                <Image src={lesson.lessonImageLink} />
              </Box>
              <Tag size="md" variant="outline">
                {`${lesson.duration} minutes`}
              </Tag>
            </Box>
            <Box>
              <Text>Lesson Objectives</Text>
              ...
            </Box>
            <Box>
              <Text>Rewards</Text>
              <Badge
                lesson={lesson}
                isQuestCompleted={Quest.isQuestCompleted}
              />
            </Box>
            <Box
              display="flex"
              mt="4"
              justifyContent="space-between"
              maxW="500px"
              mb="8"
            >
              {lesson.kudosId && (
                <Button variant={'primaryGold'}>Collect Lesson</Button>
              )}
              <Button
                variant={isKudosMintedLS ? 'secondary' : 'primary'}
                onClick={() => setIsLessonOpen(true)}
              >
                {isKudosMintedLS
                  ? 'Revisit Lesson'
                  : isLessonStarted
                  ? 'Resume Lesson'
                  : 'Start Lesson'}
              </Button>
            </Box>
            {!embed && lesson.communityDiscussionLink && (
              <ExternalLink
                href={lesson.communityDiscussionLink}
                alt={`${lesson.name} community discussion`}
              >
                <Tooltip
                  hasArrow
                  label="Join other explorers to discuss this lesson."
                >
                  <Button w="100%" variant="secondary">
                    Lesson Discussion
                  </Button>
                </Tooltip>
              </ExternalLink>
            )}
          </StyledCard>
        </>
      )}
    </>
  )
}

export default Lesson
