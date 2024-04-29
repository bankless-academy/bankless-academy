import React, { useEffect } from 'react'
import { useDisclosure } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import { useLocalStorage } from 'usehooks-ts'
import { isMobile } from 'react-device-detect'
import { useAccount } from 'wagmi'

import { LESSONS, IS_WHITELABEL } from 'constants/index'
import MODULES from 'constants/whitelabel_modules'
import { getArticlesCollected, getLessonsCollected } from 'utils/index'
import InstallAppModal from 'components/InstallAppModal'
import LessonCard from 'components/LessonCard'

const LessonCards: React.FC = () => {
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
    <>
      {Lessons.map((lesson, index) => {
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
      {/* <SubscriptionModal
        lesson={selectedLesson}
        isOpen={isOpen}
        onClose={onClose}
      /> */}
      <InstallAppModal isOpen={isOpenAppModal} onClose={onCloseAppModal} />
    </>
  )
}

export default LessonCards
