import styled from '@emotion/styled'
import { Text, Image, Button, Box } from '@chakra-ui/react'
import { ArrowUUpLeft } from '@phosphor-icons/react'
import { useLocalStorage } from 'usehooks-ts'

import { LessonType } from 'entities/lesson'
import Lesson from 'components/Lesson'
import Card from 'components/Card'
import Badge from 'components/Badge'
import QuestComponent from 'components/Quest/QuestComponent'
import CollectLessonButton from 'components/CollectLessonButton'
import InternalLink from 'components/InternalLink'
import { useSmallScreen } from 'hooks'
import LessonButton from 'components/LessonButton'
import NFT from 'components/NFT'
import ExternalLink from './ExternalLink'
import { DOMAIN_URL, TOKEN_GATING_ENABLED } from 'constants/index'

const StyledCard = styled(Card)<{ issmallscreen?: string }>`
  h1 {
  }
`

const closeLesson = (openedLesson: string, lesson: LessonType): string => {
  const openedLessonArray = JSON.parse(openedLesson)
  return JSON.stringify(
    [...openedLessonArray, lesson.slug].filter((value) => value !== lesson.slug)
  )
}

const LessonDetail = ({
  lesson,
  extraKeywords,
}: {
  lesson: LessonType
  extraKeywords?: any
}): React.ReactElement => {
  const [, isSmallScreen] = useSmallScreen()

  const [openLessonLS, setOpenLessonLS] = useLocalStorage(
    `lessonOpen`,
    JSON.stringify([])
  )

  const Quest = QuestComponent(lesson.quest, lesson.kudosId)

  const hasLessonGating =
    TOKEN_GATING_ENABLED && lesson?.nftGating && lesson?.nftGatingRequirements

  return (
    <>
      {JSON.parse(openLessonLS)?.includes(lesson.slug) ? (
        <Lesson
          lesson={lesson}
          extraKeywords={extraKeywords}
          closeLesson={() => setOpenLessonLS(closeLesson(openLessonLS, lesson))}
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
                zIndex="1"
                // src="/images/bankless-instructor.png"
                src="https://link.assetfile.io/Pat8R3ry2Whkdey4fj8xr/Instructor.png"
              />
            </Box>
          )}
          <StyledCard
            p={12}
            maxW="600px"
            mt={6}
            display={isSmallScreen ? 'contents' : 'block'}
            position="relative"
          >
            <Box m="auto" p={isSmallScreen ? '12px' : 'auto'}>
              <Box h="0">
                <InternalLink href="/lessons" alt={`Back to Lesson Selection`}>
                  <Button
                    position="relative"
                    top={isSmallScreen ? '-4px' : '-70px'}
                    left={isSmallScreen ? '-10px' : '-83px'}
                    size={isSmallScreen ? 'md' : 'lg'}
                    iconSpacing="0"
                    variant="secondaryBig"
                    leftIcon={<ArrowUUpLeft width="24px" height="24px" />}
                    p={isSmallScreen ? '0' : 'auto'}
                  ></Button>
                </InternalLink>
              </Box>
              <Text
                as="h1"
                fontSize="3xl"
                fontWeight="bold"
                textAlign="center"
                m="auto"
                borderBottom="1px solid #989898"
                w="fit-content"
                mb="8"
                mt={isSmallScreen ? '-10px' : 'auto'}
              >
                {lesson.name}
              </Text>
              <Box
                display="flex"
                mt="4"
                justifyContent="space-between"
                maxW="450px"
                m="auto"
                mb="8"
              >
                <CollectLessonButton lesson={lesson} />
              </Box>
              <Box display="flex" justifyContent="center" mb="8">
                <LessonButton lesson={lesson} click />
              </Box>
              <Box>
                <Text
                  as="h2"
                  fontSize="2xl"
                  fontWeight="bold"
                  borderBottom="1px solid #989898"
                  pb="2"
                >
                  Lesson Description
                </Text>
                <Text as="p" fontSize="medium" py="4">
                  {lesson.description}
                </Text>
              </Box>
              {hasLessonGating && (
                <Box my="4">
                  <Text
                    as="h2"
                    fontSize="2xl"
                    fontWeight="bold"
                    borderBottom="1px solid #989898"
                    pb="2"
                  >
                    Lesson Requirements
                  </Text>
                  <Box textAlign="center">
                    <NFT nftLink={lesson.nftGatingImageLink} />
                    <Text as="p" fontSize="medium" py="4">
                      {lesson.nftGatingRequirements}
                    </Text>
                    <ExternalLink
                      href={lesson.nftGatingLink.replace(DOMAIN_URL, '')}
                    >
                      <Button size="lg" variant="primaryBig">
                        {lesson.nftGatingCTA}
                      </Button>
                    </ExternalLink>
                  </Box>
                </Box>
              )}
              <Box pb="8">
                <Text
                  as="h2"
                  fontSize="2xl"
                  fontWeight="bold"
                  borderBottom="1px solid #989898"
                  pb="2"
                >
                  Rewards
                </Text>
              </Box>
              <Box textAlign="center">
                <Badge
                  lesson={lesson}
                  isQuestCompleted={Quest.isQuestCompleted}
                />
                <Text fontSize="2xl" mb="4">
                  “{lesson.name}” Lesson Badge
                </Text>
              </Box>
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

export default LessonDetail
