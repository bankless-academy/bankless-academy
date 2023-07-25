import { Button, Box, Image as ChakraImage, useToast } from '@chakra-ui/react'

import { LessonType } from 'entities/lesson'
import { useLocalStorage } from 'usehooks-ts'
import { openLesson } from 'components/CollectLessonButton'
import { useAccount } from 'wagmi'
import { useState } from 'react'

const LessonButton = ({
  lesson,
  click,
}: {
  lesson: LessonType
  click?: boolean
}): React.ReactElement => {
  const [isKudosMintedLS] = useLocalStorage(
    `isKudosMinted-${lesson.kudosId}`,
    false
  )
  const [openLessonLS, setOpenLessonLS] = useLocalStorage(
    `lessonOpen`,
    JSON.stringify([])
  )
  const [isHover, setIsHover] = useState(false)
  const toast = useToast()
  const { address } = useAccount()

  const isLessonStarted = (localStorage.getItem(lesson.slug) || 0) > 0
  const lessonHasSponsor =
    lesson?.sponsorName?.length && lesson?.sponsorLogo?.length
  return (
    <Box
      display="flex"
      onClick={async () =>
        click
          ? setOpenLessonLS(
              await openLesson(openLessonLS, lesson, toast, address)
            )
          : null
      }
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      {lessonHasSponsor && (
        <Button
          variant={'secondaryBig'}
          size="lg"
          w="50%"
          background="#3F3253 !important"
          border={'1px solid #B85FF1 !important'}
          borderRightRadius="0"
          leftIcon={<ChakraImage width="24px" src={lesson?.sponsorLogo} />}
          isActive
        >
          {lesson.sponsorName}
        </Button>
      )}
      <Button
        variant={'primaryBig'}
        size="lg"
        w={lessonHasSponsor ? '50%' : 'inherit'}
        borderLeftRadius={lessonHasSponsor ? '0' : null}
        border={isHover ? '1px solid #B85FF1 !important' : 'none'}
        background={
          isHover
            ? 'linear-gradient(132deg, #67407E 0%, #354374 100%)'
            : 'linear-gradient(84.62deg, #B06FD8 7.42%, #597AEE 218.41%)'
        }
      >
        {lesson?.isArticle
          ? 'Read Entry'
          : isKudosMintedLS
          ? 'View Lesson'
          : isLessonStarted
          ? 'View Lesson'
          : 'Start Lesson'}
      </Button>
    </Box>
  )
}

export default LessonButton
