import { Box, useToast } from '@chakra-ui/react'
import { ReactElement, useState } from 'react'

import Disclaimer from 'components/Disclaimer'
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
  const [showDisclaimer, setShowDisclaimer] = useState(false)
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
      onClick={async () => {
        if (click) {
          const disclaimerTimestamp = localStorage.getItem(
            `disclaimer-${lesson.slug}`
          )
          if (disclaimerTimestamp) {
            // If disclaimer was already accepted, open lesson directly
            await openLesson()
          } else {
            // Show disclaimer if not yet accepted
            setShowDisclaimer(true)
          }
        }
      }}
    >
      {children}
      {showDisclaimer && (
        <Disclaimer
          lesson={lesson}
          accepted={async () => {
            const currentTimestamp = Math.floor(Date.now() / 1000)
            localStorage.setItem(
              `disclaimer-${lesson.slug}`,
              currentTimestamp.toString()
            )
            await openLesson()
            setShowDisclaimer(false)
          }}
          onClose={() => setShowDisclaimer(false)}
        />
      )}
    </Box>
  )
}

export default OpenLesson
