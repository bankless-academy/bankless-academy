import React, { useEffect } from 'react'
import { Box, Heading, SimpleGrid, useDisclosure } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import { useLocalStorage } from 'usehooks-ts'
import { isMobile } from 'react-device-detect'
import { useAccount } from 'wagmi'
import queryString from 'query-string'

import { LESSONS, IS_WHITELABEL } from 'constants/index'
import MODULES from 'constants/whitelabel_modules'
import { getArticlesCollected, getLessonsCollected } from 'utils/index'
import InstallAppModal from 'components/InstallAppModal'
import LessonCard from 'components/LessonCard'
import { LessonTypeType, LevelType } from 'entities/lesson'
import styled from '@emotion/styled'
import { useSmallScreen } from 'hooks/index'

export const StyledHeading = styled(Heading)`
  @media only screen and (min-width: 801px) {
    display: flex;
    flex-basis: 100%;
    align-items: center;
    margin: 24px 0 24px;

    &:before,
    &:after {
      content: '';
      flex-grow: 1;
      background: #989898;
      height: 1px;
      font-size: 0;
      line-height: 0;
    }
    &:before {
      margin: 0 36px 0 0;
    }
    &:after {
      margin: 0 0 0 36px;
    }
  }
`

const LessonCards = ({
  level,
  lessonType,
  moduleName,
}: {
  level?: LevelType
  lessonType?: LessonTypeType
  moduleName?: string
}): React.ReactElement => {
  const router = useRouter()
  const [isSmallScreen] = useSmallScreen()
  const { slug } = router.query

  const all =
    typeof window !== 'undefined'
      ? queryString.parse(window.location.search).all
      : undefined

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
      : all === null
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
      badgesMintedLS?.length > 0 &&
      // user doesn't want to install the Mobile App
      mobilePreferences !== 'no' &&
      // user has collected a new badge
      ((mobilePreferences?.length &&
        parseInt(mobilePreferences) < badgesMintedLS?.length) ||
        // user has at least 1 badge
        (!mobilePreferences && badgesMintedLS?.length))
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
    <Box>
      <StyledHeading
        as="h1"
        size="2xl"
        textAlign="center"
        pt={isSmallScreen ? '12px' : '0'}
      >
        {level || moduleName || "Explorer's Handbook"}
      </StyledHeading>
      {!moduleName ? (
        <Heading
          as="h2"
          size="md"
          color="#9E9E9E"
          fontWeight="normal"
          textAlign="center"
          mt={4}
          mb={6}
        >
          {level === 'Essentials'
            ? `Begin your crypto journey with these entry-level lessons.`
            : level === 'Level 1'
            ? `Level up your knowledge and abilities with more specific topics and quests.`
            : level === 'Community Lessons'
            ? `Get involved with our ecosystem partners.`
            : `Quick guides for getting your crypto journey started.`}
        </Heading>
      ) : null}
      <SimpleGrid
        minChildWidth={isSmallScreen ? 'unset' : '400px'}
        spacing={4}
        my={8}
        gap={6}
      >
        {Lessons.filter((lesson) => {
          if (level) {
            if (!lesson?.isArticle && lesson?.level === level) return lesson
          } else if (lessonType) {
            if (lesson?.isArticle) return lesson
          } else return lesson
        }).map((lesson, index) => {
          return (
            <LessonCard
              key={`lesson-${index}`}
              lesson={lesson}
              articlesCollectedLS={articlesCollectedLS}
              badgesMintedLS={badgesMintedLS}
              lessonsCollectedLS={lessonsCollectedLS}
            />
          )
        })}
        {/* HACK: Add fake empty card for community lessons */}
        {level === 'Community Lessons' && <Box />}
      </SimpleGrid>
      {level === 'Essentials' && (
        <InstallAppModal isOpen={isOpenAppModal} onClose={onCloseAppModal} />
      )}
    </Box>
  )
}

export default LessonCards
