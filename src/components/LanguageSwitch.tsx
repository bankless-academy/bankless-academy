import React from 'react'
import { Box, Button } from '@chakra-ui/react'
import { useTranslation } from 'react-i18next'
import { useRouter } from 'next/router'

import { LessonType } from 'entities/lesson'

const LanguageSwitch = ({
  lesson,
}: {
  lesson: LessonType
}): React.ReactElement => {
  const { t, i18n } = useTranslation()
  const router = useRouter()

  const languages = lesson.languages

  // TEMP
  if (i18n.language === 'en' && lesson.slug !== 'blockchain-basics') return null

  return (
    <Box>
      {languages?.length ? (
        <Box textAlign="center" maxW="400px" m="auto">
          <Box display="inline-flex">{t('Select language:')}</Box>
          <Button
            variant={
              i18n.language === 'en' ||
              !lesson.languages.includes(i18n.language as any)
                ? 'secondary'
                : 'outline'
            }
            ml={3}
            mb={3}
            onClick={() => {
              i18n.changeLanguage('en', () =>
                router.push(`/lessons/${lesson.slug}`)
              )
            }}
          >
            EN
          </Button>
          {languages.map((l) => (
            <Button
              variant={i18n.language === l ? 'secondary' : 'outline'}
              key={`key-${l}`}
              onClick={() => {
                i18n.changeLanguage(l, () =>
                  router.push(`/lessons/${l}/${lesson.slug}`)
                )
              }}
              ml={3}
              mb={3}
            >
              {l.toUpperCase()}
            </Button>
          ))}
        </Box>
      ) : null}
    </Box>
  )
}

export default LanguageSwitch
