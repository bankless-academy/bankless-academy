import { Button, Box, Image as ChakraImage } from '@chakra-ui/react'

import { LessonType } from 'entities/lesson'
import { useLocalStorage } from 'usehooks-ts'

const LessonButton = ({
  lesson,
  openLesson,
}: {
  lesson: LessonType
  openLesson?: (open: boolean) => void
}): React.ReactElement => {
  const [isKudosMintedLS] = useLocalStorage(
    `isKudosMinted-${lesson.kudosId}`,
    false
  )
  const isLessonStarted = (localStorage.getItem(lesson.slug) || 0) > 0
  const lessonHasSponsor =
    lesson?.sponsorName?.length && lesson?.sponsorLogo?.length
  return (
    <Box onClick={() => (openLesson ? openLesson(true) : null)}>
      {lessonHasSponsor && (
        <Button
          variant={'secondaryBig'}
          size="lg"
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
        borderLeftRadius={lessonHasSponsor ? '0' : null}
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
