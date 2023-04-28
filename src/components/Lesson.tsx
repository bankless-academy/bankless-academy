import { useState } from 'react'
import styled from '@emotion/styled'
import { Text, Image, Button, Box } from '@chakra-ui/react'
import { ArrowUUpLeft } from '@phosphor-icons/react'
import { useLocalStorage } from 'usehooks-ts'

import { LessonType } from 'entities/lesson'
import LessonSlides from 'components/LessonSlides'
import Card from 'components/Card'
import Badge from 'components/Badge'
import QuestComponent from 'components/Quest/QuestComponent'
import CollectLessonButton from 'components/CollectLessonButton'
import InternalLink from 'components/InternalLink'
import { useSmallScreen } from 'hooks'

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
  const [isKudosMintedLS] = useLocalStorage(
    `isKudosMinted-${lesson.kudosId}`,
    false
  )
  const [, isSmallScreen] = useSmallScreen()
  const isLessonStarted = (localStorage.getItem(lesson.slug) || 0) > 0
  const [isLessonOpenLS, setIsLessonOpenLS] = useLocalStorage(
    `isLessonOpen`,
    false
  )
  const [collectibleHover, setCollectibleHover] = useState(false)

  const Quest = QuestComponent(lesson.quest, lesson.kudosId)

  return (
    <>
      {isLessonOpenLS ? (
        <LessonSlides
          lesson={lesson}
          extraKeywords={extraKeywords}
          closeLesson={() => setIsLessonOpenLS(false)}
          Quest={Quest}
        />
      ) : (
        <>
          {!isSmallScreen && (
            <Box
              w="-webkit-fill-available"
              position="absolute"
              h="calc( 100vh - 97px)"
              minH="calc( 100% - 97px)"
              overflow="hidden"
            >
              <Image
                position="relative"
                top="0"
                right="-500px"
                h="100%"
                src="/images/bankless-instructor.png"
              />
            </Box>
          )}
          <StyledCard
            p={8}
            maxW="600px"
            mt={6}
            display={isSmallScreen ? 'contents' : 'block'}
            position="relative"
          >
            <Box h="0">
              <InternalLink href="/lessons" alt={`Back to Lesson Selection`}>
                <Button
                  position="relative"
                  top={isSmallScreen ? '8px' : '-38px'}
                  left={isSmallScreen ? '0' : '-67px'}
                  size="lg"
                  variant="secondaryBig"
                  leftIcon={<ArrowUUpLeft />}
                ></Button>
              </InternalLink>
            </Box>
            <Text
              as="h1"
              fontSize="2xl"
              fontWeight="bold"
              textAlign="center"
              m="auto"
              borderBottom="1px solid #989898"
              pb="2"
              w="fit-content"
            >
              {lesson.name}
            </Text>
            <Text textAlign="center" fontWeight="bold" p="4">
              TODO: add sponsor
            </Text>
            <Box m="auto" maxW="500px">
              <Box
                style={{
                  cursor: 'pointer',
                }}
                minH="260px"
                onClick={() => setIsLessonOpenLS(true)}
                onMouseOver={() => setCollectibleHover(true)}
                onMouseOut={() => setCollectibleHover(false)}
              >
                {/* TEMP: make this dynamic */}
                {lesson.slug === 'wallet-basics' ? (
                  collectibleHover ? (
                    <video autoPlay loop playsInline muted>
                      <source
                        src={lesson.lessonCollectibleVideo}
                        type="video/webm"
                      ></source>
                    </video>
                  ) : (
                    <Image src={lesson.lessonCollectedImageLink} />
                  )
                ) : (
                  <Image src={lesson.lessonImageLink} />
                )}
              </Box>
            </Box>
            <Box
              display="flex"
              mt="4"
              justifyContent="space-between"
              maxW="300px"
              m="auto"
              mb="8"
            >
              <CollectLessonButton lesson={lesson} />
              <Button
                variant={isKudosMintedLS ? 'secondary' : 'primary'}
                onClick={() => setIsLessonOpenLS(true)}
              >
                {isKudosMintedLS
                  ? 'View Lesson'
                  : isLessonStarted
                  ? 'View Lesson'
                  : 'Start Lesson'}
              </Button>
            </Box>
            <Box>
              <Text
                as="h2"
                fontSize="large"
                fontWeight="bold"
                borderBottom="1px solid #989898"
                pb="2"
                w="fit-content"
              >
                Lesson Description
              </Text>
              <Text as="p" fontSize="medium" py="4">
                {lesson.description}
              </Text>
            </Box>
            <Box>
              <Text
                as="h2"
                fontSize="large"
                fontWeight="bold"
                borderBottom="1px solid #989898"
                pb="2"
                mb="4"
                w="fit-content"
              >
                Rewards
              </Text>
              <Badge
                lesson={lesson}
                isQuestCompleted={Quest.isQuestCompleted}
              />
            </Box>
            {/* {!embed && lesson.communityDiscussionLink && (
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
            )} */}
          </StyledCard>
        </>
      )}
    </>
  )
}

export default Lesson
