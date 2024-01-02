import { Button, Box, Image as ChakraImage } from '@chakra-ui/react'
import { useTranslation } from 'react-i18next'

import { LessonType } from 'entities/lesson'
import { useLocalStorage } from 'usehooks-ts'
import { useState } from 'react'
import OpenLesson from 'components/OpenLesson'

const LessonButton = ({
  lesson,
  click,
}: {
  lesson: LessonType
  click?: boolean
}): React.ReactElement => {
  const { t } = useTranslation()
  const [isBadgeMintedLS] = useLocalStorage(
    `isBadgeMinted-${lesson.badgeId}`,
    false
  )
  const isArticleRead = lesson.isArticle
    ? localStorage.getItem(lesson.slug)
    : false
  const [isHover, setIsHover] = useState(false)

  const isLessonStarted = (parseInt(localStorage.getItem(lesson.slug)) || 0) > 0
  const lessonHasSponsor =
    lesson?.sponsorName?.length && lesson?.sponsorLogo?.length
  const completed = isBadgeMintedLS || isArticleRead
  return (
    <OpenLesson lesson={lesson} click={click}>
      <Box
        display="flex"
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
      >
        {lessonHasSponsor && (
          <Button
            variant="secondaryBig"
            size="lg"
            w="50%"
            background={'transparent !important'}
            border={
              completed
                ? '1px solid #3F3253 !important'
                : '1px solid #B85FF1 !important'
            }
            borderRightRadius="0"
            leftIcon={<ChakraImage width="24px" src={lesson?.sponsorLogo} />}
            isActive
          >
            {lesson.sponsorName}
          </Button>
        )}
        <Button
          variant={completed ? 'secondaryBig' : 'primaryBig'}
          size="lg"
          paddingX={
            completed
              ? '24px !important'
              : isHover
              ? '23px !important'
              : '24px !important'
          }
          w={lessonHasSponsor ? '50%' : 'inherit'}
          border={
            completed
              ? isHover
                ? '1px solid #3F3253 !important'
                : '1px solid #3F3253 !important'
              : isHover
              ? '1px solid #B85FF1 !important'
              : 'none !important'
          }
          borderLeftRadius={lessonHasSponsor ? '0' : null}
          background={
            completed
              ? isHover
                ? '#25212e'
                : '#3F3253'
              : isHover
              ? 'linear-gradient(132deg, #67407E 0%, #354374 100%)'
              : 'linear-gradient(84.62deg, #B06FD8 7.42%, #597AEE 218.41%)'
          }
        >
          {lesson?.isArticle
            ? t('Read Entry')
            : isBadgeMintedLS
            ? t('View Lesson')
            : isLessonStarted
            ? t('View Lesson')
            : t('Start Lesson')}
        </Button>
      </Box>
    </OpenLesson>
  )
}

export default LessonButton
