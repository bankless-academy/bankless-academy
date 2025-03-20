import { Box, Text, Tag, Image, TagRightIcon, Button } from '@chakra-ui/react'
import styled from '@emotion/styled'
import { CircleWavyCheck } from '@phosphor-icons/react'
import { useTranslation } from 'react-i18next'
import { useRouter } from 'next/router'

import { IS_COLLECTIBLE_ACTIVATED, IS_WHITELABEL } from 'constants/index'
import InternalLink from 'components/InternalLink'
import LessonBanner from 'components/LessonBanner'
import { Mixpanel } from 'utils/index'
import LessonButton from 'components/LessonButton'
import { LessonType } from 'entities/lesson'
import { useSmallScreen } from 'hooks/index'
// TODO: move to dedicated component file
export const StyledLessonCard = styled(Box)`
  position: relative;
  ::after {
    background: linear-gradient(
      107.1deg,
      rgba(46, 33, 33, 0.3) -3.13%,
      rgba(80, 73, 84, 0.3) 16.16%,
      rgba(94, 89, 104, 0.3) 29.38%,
      rgba(86, 81, 94, 0.3) 41.5%,
      rgba(23, 21, 21, 0.3) 102.65%
    );
    opacity: 0.6;
    border-radius: var(--chakra-radii-3xl);
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }
  ::before {
    background: radial-gradient(#353535, #3d3333);
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border-radius: var(--chakra-radii-3xl);
    padding: 1px;
    -webkit-mask: linear-gradient(#fff 0 0) content-box,
      linear-gradient(#fff 0 0);
    -webkit-mask-composite: source-out;
    mask-composite: exclude;
  }
`

const StyledTag = styled(Tag)<{ isminted?: string; gold?: string }>`
  height: 30px;
  ${(props) =>
    props.gold === 'true' &&
    `
    ::before {
      background: #F1B15A;
    }
    color: #F1B15A;
  `};
`

const LessonCard = ({
  lesson,
  articlesCollectedLS,
  badgesMintedLS,
  lessonsCollectedLS,
  isNextLesson = false,
}: {
  lesson: LessonType
  articlesCollectedLS?: any[]
  badgesMintedLS?: any[]
  lessonsCollectedLS?: any[]
  isNextLesson?: boolean
}): React.ReactElement => {
  const { t } = useTranslation()
  const router = useRouter()
  const { all } = router.query
  const [isSmallScreen] = useSmallScreen()

  const isBadgeMinted = badgesMintedLS?.includes(lesson.badgeId)
  const isNotified =
    lesson.publicationStatus === 'planned'
      ? localStorage.getItem(`${lesson.slug}-notification`)
      : false
  const isArticleCollected =
    lesson.mirrorNFTAddress?.length &&
    articlesCollectedLS?.includes(lesson.mirrorNFTAddress.toLowerCase())
  const isArticleRead =
    lesson.isArticle && localStorage.getItem(lesson.slug) === 'true'
  const isLessonCollected =
    IS_COLLECTIBLE_ACTIVATED &&
    !!lesson.lessonCollectibleTokenAddress?.length &&
    lessonsCollectedLS?.includes(
      lesson.lessonCollectibleTokenAddress.toLowerCase()
    )
  const lessonHasSponsor =
    lesson?.sponsorName?.length && lesson?.sponsorLogo?.length

  const lessonTitle = isNextLesson
    ? `Next: ${lesson.englishName}`
    : lesson.englishName

  return (
    <StyledLessonCard p={6} pb={8} borderRadius="3xl" maxW="500px" m="auto">
      <Box position="relative" zIndex="1">
        <Text
          fontSize="lg"
          fontWeight="bold"
          minH={isSmallScreen ? '45px' : lesson.isArticle ? '54px' : '34px'}
          display="flex"
          alignItems="center"
        >
          {t(lesson.name, { ns: 'lesson' })}
        </Text>
        <Box
          display="flex"
          justifyContent="space-between"
          my={isSmallScreen ? '2' : '3'}
        >
          {isBadgeMinted || isArticleRead || lesson.duration ? (
            <StyledTag
              size="sm"
              variant="outline"
              gold={(isBadgeMinted || isArticleRead)?.toString()}
            >
              {isBadgeMinted || isArticleRead
                ? 'Done'
                : `${lesson.duration} minutes`}
              {isBadgeMinted || isArticleRead ? (
                <TagRightIcon as={CircleWavyCheck} weight="bold" />
              ) : null}
            </StyledTag>
          ) : (
            <Tag size="sm" backgroundColor="transparent"></Tag>
          )}
          {IS_COLLECTIBLE_ACTIVATED && lesson.hasCollectible && (
            <StyledTag size="sm" variant="outline" color="white" gold="true">
              {!isLessonCollected
                ? t('Collectible Available')
                : t('Lesson Collected')}
            </StyledTag>
          )}
          {lesson.isArticle ? (
            isArticleCollected ? (
              <StyledTag size="sm" variant="outline" gold="true">
                Entry Collected
              </StyledTag>
            ) : !lesson.areMirrorNFTAllCollected ? (
              <StyledTag size="sm" variant="outline" gold="true">
                Entry Available
              </StyledTag>
            ) : null
          ) : (
            !lessonHasSponsor &&
            !lesson.hasCollectible &&
            lesson.publicationStatus !== 'planned' && <Box width="auto"></Box>
          )}
        </Box>
        <Text
          fontSize="md"
          height="72px"
          display="flex"
          alignItems="start"
          color="#9E9E9E"
          overflow="hidden"
          textOverflow="ellipsis"
          noOfLines={3}
        >
          {t(lesson.description, { ns: 'lesson' })}
        </Text>
        {lesson.publicationStatus === 'planned' && all === undefined ? (
          <LessonBanner
            iswhitelabel={IS_WHITELABEL.toString()}
            isarticle={lesson?.isArticle?.toString()}
            style={{
              aspectRatio: '1.91/1',
            }}
            py="4"
          >
            <Image src={lesson.lessonImageLink} alt={lesson.englishName} />
            {/* <Image
                    src={
                      lesson.isArticle
                        ? lesson.socialImageLink
                        : lesson.lessonImageLink
                    }
                  /> */}
          </LessonBanner>
        ) : (
          <InternalLink href={`/lessons/${lesson.slug}`} alt={lessonTitle}>
            <LessonBanner
              iswhitelabel={IS_WHITELABEL.toString()}
              isarticle={lesson?.isArticle?.toString()}
              cursor="pointer"
              style={{
                aspectRatio: '1.91/1',
              }}
              py="4"
            >
              <Image
                src={
                  isLessonCollected
                    ? lesson.lessonCollectedImageLink
                    : lesson.lessonImageLink
                }
                alt={lesson.englishName}
              />
            </LessonBanner>
          </InternalLink>
        )}
        <Box
          display="flex"
          flexDirection="row-reverse"
          mt={
            lesson.isArticle || lesson.hasCollectible
              ? isSmallScreen
                ? '16px'
                : '25px'
              : '16px'
          }
          justifyContent="space-between"
          alignItems="center"
          maxWidth="calc(100vw - 80px)"
        >
          {lesson.publicationStatus === 'planned' && all === undefined ? (
            <Button
              variant={isNotified ? 'secondaryBig' : 'primaryBig'}
              size="md"
              onClick={() => {
                if (isNotified) return
                Mixpanel.track('click_internal_link', {
                  link: 'modal',
                  name: 'Lesson notification',
                  lesson: lesson.englishName,
                })
              }}
              cursor={isNotified ? 'default' : 'pointer'}
            >
              {isNotified ? 'Subscribed' : 'Notify me'}
            </Button>
          ) : (
            <InternalLink
              href={`/lessons/${lesson.slug}`}
              alt={lessonTitle}
              margin={lessonHasSponsor ? 'auto' : ''}
              w={lessonHasSponsor ? '100%' : 'inherit'}
            >
              <LessonButton lesson={lesson} size="md" />
            </InternalLink>
          )}
        </Box>
      </Box>
    </StyledLessonCard>
  )
}

export default LessonCard
