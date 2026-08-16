import { Box, useToast } from '@chakra-ui/react'
import { ReactElement } from 'react'

import { LessonType } from 'entities/lesson'
import { useAccount } from 'wagmi'
import { useApp } from 'contexts/AppContext'
import { TOKEN_GATING_ENABLED } from 'constants/index'
import { isHolderOfNFT } from 'utils/index'

const OpenLesson = ({
  children,
  lesson,
  click,
  onLessonOpen,
}: {
  children: ReactElement
  lesson: LessonType
  click?: boolean
  onLessonOpen?: () => void
}): React.ReactElement => {
  const toast = useToast()
  const { address } = useAccount()
  const { openLessons, setOpenLessons } = useApp()

  const openLesson = async () => {
    if (TOKEN_GATING_ENABLED && lesson.nftGating) {
      if (!address) {
        toast.closeAll()
        toast({
          title: 'This is a token gated lesson',
          description: 'Connect your wallet to access the lesson.',
          status: 'warning',
          duration: 20000,
          isClosable: true,
        })
        return
      }
      const hasNFT = await isHolderOfNFT(address, lesson.nftGating)
      if (!hasNFT) {
        toast.closeAll()
        toast({
          title: "You don't own the required NFT",
          description: lesson?.nftGatingRequirements,
          status: 'warning',
          duration: 20000,
          isClosable: true,
        })
        return
      }
    }

    // Add lesson to openLessons if not already there
    if (!openLessons.includes(lesson.slug)) {
      setOpenLessons([...openLessons, lesson.slug])
    }

    // Call onLessonOpen after the lesson is opened
    if (onLessonOpen) {
      onLessonOpen()
    }
  }

  return (
    <Box
      style={{
        cursor: 'pointer',
      }}
      position="relative"
      // The disclaimer modal used to gate this click. It now lives in the quest
      // slide's nav (components/Quest/QuestDisclaimer), where the learner is
      // asked to act — reading a lesson has never cost anyone money.
      onClick={() => {
        if (click) openLesson()
      }}
    >
      {children}
    </Box>
  )
}

export default OpenLesson
