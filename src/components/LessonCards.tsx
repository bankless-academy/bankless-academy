import React, { useEffect, useState } from 'react'
import {
  Box,
  Text,
  Tag,
  Image,
  TagRightIcon,
  Button,
  useDisclosure,
} from '@chakra-ui/react'
import styled from '@emotion/styled'
import { CircleWavyCheck } from '@phosphor-icons/react'
import { useRouter } from 'next/router'
import { useLocalStorage } from 'usehooks-ts'
import { isMobile } from 'react-device-detect'
import { useAccount } from 'wagmi'
import { useTranslation } from 'react-i18next'

import { LESSONS, IS_WHITELABEL } from 'constants/index'
import InternalLink from 'components/InternalLink'
import LessonBanner from 'components/LessonBanner'
import MODULES from 'constants/whitelabel_modules'
import {
  getArticlesCollected,
  getLessonsCollected,
  Mixpanel,
} from 'utils/index'
import SubscriptionModal from 'components/SubscriptionModal'
import { LessonType } from 'entities/lesson'
import InstallAppModal from 'components/InstallAppModal'
import LessonButton from 'components/LessonButton'

// TODO: move to dedicated component file
export const LessonCard = styled(Box)`
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

const LessonCards: React.FC = () => {
  const { t } = useTranslation()
  const router = useRouter()
  const { all, slug } = router.query

  // const [stats, setStats]: any = useState(null)
  const [badgesMintedLS] = useLocalStorage('badgesMinted', [])
  const [articlesCollectedLS, setArticlesCollectedLS] = useLocalStorage(
    'articlesCollected',
    []
  )
  const [lessonsCollectedLS, setLessonsCollectedLS] = useLocalStorage(
    'lessonsCollected',
    []
  )
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [selectedLesson, setSelectedLesson] = useState<LessonType>()
  const { address } = useAccount()
  const {
    isOpen: isOpenAppModal,
    onOpen: onOpenAppModal,
    onClose: onCloseAppModal,
  } = useDisclosure()

  const moduleId = MODULES.find((m) => m.slug === slug)?.moduleId

  const Lessons =
    module !== undefined && moduleId
      ? LESSONS.filter(
          (lesson) =>
            lesson.publicationStatus === 'publish' &&
            lesson.moduleId === moduleId
        )
      : all !== undefined
      ? LESSONS
      : LESSONS.filter(
          (lesson) =>
            lesson.publicationStatus === 'publish' ||
            lesson.publicationStatus === 'planned'
        )

  // useEffect(() => {
  //   if (IS_DEBUG) {
  //     axios
  //       .get(`/api/stats`)
  //       .then(function (res) {
  //         setStats(res.data)
  //       })
  //       .catch(function (error) {
  //         console.error(error)
  //       })
  //   }
  // }, [])

  useEffect(() => {
    const mobilePreferences = localStorage.getItem('mobile-preferences')
    if (
      isMobile &&
      // don't show on embed or webapp
      !localStorage.getItem('embed')?.length &&
      // user has at least 1 badge
      badgesMintedLS.length > 0 &&
      // user doesn't want to install the Mobile App
      mobilePreferences !== 'no' &&
      // user has collected a new badge
      ((mobilePreferences?.length &&
        parseInt(mobilePreferences) < badgesMintedLS.length) ||
        // user has at least 1 badge
        (!mobilePreferences && badgesMintedLS.length))
    ) {
      onOpenAppModal()
    }
  }, [badgesMintedLS])

  useEffect(() => {
    const updateNFTCollected = async () => {
      const articlesCollected = await getArticlesCollected(address)
      if (articlesCollected && Array.isArray(articlesCollected))
        setArticlesCollectedLS(articlesCollected)
      const lessonsCollected = await getLessonsCollected(address)
      if (lessonsCollected && Array.isArray(lessonsCollected))
        setLessonsCollectedLS(lessonsCollected)
    }
    if (!IS_WHITELABEL && address) {
      updateNFTCollected().catch(console.error)
    }
  }, [address])

  return (
    <>
      {Lessons.map((lesson, index) => {
        // lesson not started yet: -1
        // const currentSlide = parseInt(localStorage.getItem(lesson.slug) || '-1')
        // const numberOfSlides = lesson.slides.length
        const isBadgeMinted = badgesMintedLS.includes(lesson.badgeId)
        const isNotified =
          lesson.publicationStatus === 'planned'
            ? localStorage.getItem(`${lesson.slug}-notification`)
            : false
        // const lessonCompleted =
        //   (lesson.quest &&
        //     stats?.lessonCompleted &&
        //     stats?.lessonCompleted[lesson.notionId]) ||
        //   0
        const isArticleCollected =
          lesson.mirrorNFTAddress?.length &&
          articlesCollectedLS.includes(lesson.mirrorNFTAddress.toLowerCase())
        const isArticleRead =
          lesson.isArticle && localStorage.getItem(lesson.slug) === 'true'
        const isLessonCollected =
          !!lesson.lessonCollectibleTokenAddress?.length &&
          lessonsCollectedLS.includes(
            lesson.lessonCollectibleTokenAddress.toLowerCase()
          )
        const lessonHasSponsor =
          lesson?.sponsorName?.length && lesson?.sponsorLogo?.length
        return (
          <LessonCard key={`lesson-${index}`} p={6} pb={8} borderRadius="3xl">
            <Box position="relative" zIndex="1">
              <Text
                fontSize="xl"
                fontWeight="bold"
                minH="60px"
                display="flex"
                alignItems="center"
              >
                {t(lesson.name, { ns: 'lesson' })}
              </Text>
              <Box display="flex" justifyContent="space-between" my="4">
                {isBadgeMinted || isArticleRead || lesson.duration ? (
                  <StyledTag
                    size="md"
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
                  <Tag size="md" backgroundColor="transparent"></Tag>
                )}
                {lesson.hasCollectible && (
                  <StyledTag
                    size="md"
                    variant="outline"
                    color="white"
                    gold="true"
                  >
                    {!isLessonCollected
                      ? t('Collectible Available')
                      : t('Lesson Collected')}
                  </StyledTag>
                )}
                {lesson.isArticle ? (
                  isArticleCollected ? (
                    <StyledTag size="md" variant="outline" gold="true">
                      Entry Collected
                    </StyledTag>
                  ) : !lesson.areMirrorNFTAllCollected ? (
                    <StyledTag size="md" variant="outline" gold="true">
                      Entry Available
                    </StyledTag>
                  ) : null
                ) : (
                  !lessonHasSponsor &&
                  lesson.publicationStatus !== 'planned' && (
                    <Box width="auto"></Box>
                  )
                )}
              </Box>
              <Text
                fontSize="lg"
                minH="81px"
                display="flex"
                alignItems="center"
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
                  <Image src={lesson.lessonImageLink} />
                </LessonBanner>
              ) : (
                <InternalLink
                  href={`/lessons/${lesson.slug}`}
                  alt={lesson.englishName}
                >
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
                    />
                  </LessonBanner>
                </InternalLink>
              )}
              <Box
                display="flex"
                flexDirection="row-reverse"
                mt={lesson.isArticle || lesson.hasCollectible ? '25px' : '16px'}
                justifyContent="space-between"
                alignItems="center"
                maxWidth="calc(100vw - 80px)"
              >
                {lesson.publicationStatus === 'planned' && all === undefined ? (
                  <Button
                    variant={isNotified ? 'secondaryBig' : 'primaryBig'}
                    size="lg"
                    onClick={() => {
                      if (isNotified) return
                      setSelectedLesson(lesson)
                      onOpen()
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
                    alt={lesson.englishName}
                    margin={lessonHasSponsor ? 'auto' : ''}
                    w={lessonHasSponsor ? '100%' : 'inherit'}
                  >
                    <LessonButton lesson={lesson} />
                  </InternalLink>
                )}
              </Box>
            </Box>
          </LessonCard>
        )
      })}
      <SubscriptionModal
        lesson={selectedLesson}
        isOpen={isOpen}
        onClose={onClose}
      />
      <InstallAppModal isOpen={isOpenAppModal} onClose={onCloseAppModal} />
    </>
  )
}

export default LessonCards
