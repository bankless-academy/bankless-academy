import { Box, useToast } from '@chakra-ui/react'
import { ReactElement, useState } from 'react'
import { useLocalStorage } from 'usehooks-ts'
import useSound from 'use-sound'

import Disclaimer from 'components/Disclaimer'
import { LessonType } from 'entities/lesson'
import { openLesson } from 'utils/index'
import { useAccount } from 'wagmi'
import soundStart from 'sound/start.mp3'

const OpenLesson = ({
  children,
  lesson,
  click,
}: {
  children: ReactElement
  lesson: LessonType
  click?: boolean
}): React.ReactElement => {
  const [playStart] = useSound(soundStart)
  const [showDisclaimer, setShowDisclaimer] = useState(false)
  const [openLessonLS, setOpenLessonLS] = useLocalStorage(
    `lessonOpen`,
    JSON.stringify([])
  )
  const toast = useToast()
  const { address } = useAccount()

  return (
    <Box
      style={{
        cursor: 'pointer',
      }}
      position="relative"
      onClick={async () => (click ? setShowDisclaimer(true) : null)}
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
            playStart()
            setOpenLessonLS(
              await openLesson(openLessonLS, lesson, toast, address)
            )
            setShowDisclaimer(false)
          }}
          onClose={() => setShowDisclaimer(false)}
        />
      )}
    </Box>
  )
}

export default OpenLesson
