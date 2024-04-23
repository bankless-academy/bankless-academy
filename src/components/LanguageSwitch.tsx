import React from 'react'
import { Box, Button } from '@chakra-ui/react'
import { useTranslation } from 'react-i18next'
import { useRouter } from 'next/router'
import styled from '@emotion/styled'

import { LessonType } from 'entities/lesson'
import { Mixpanel } from 'utils'

const StyledButton = styled(Button)<{ isselected?: string }>`
  padding: 16px;
  width: 60px;
  height: 56px;
  border-radius: 16px;
  :hover {
    background: #3f3253;
    border: 0;
  }
  ${(props) =>
    props.isselected === 'true' &&
    `
    background: linear-gradient(132deg, #67407E 0%, #354374 100%);
    border: 2px solid #B85FF1 !important;
    :hover {
      background: linear-gradient(132deg, #67407E 0%, #354374 100%);
      border: 2px solid #B85FF1 !important;
    }
  `}
`

const LanguageSwitch = ({
  lesson,
}: {
  lesson: LessonType
}): React.ReactElement => {
  const { t, i18n } = useTranslation()
  const router = useRouter()

  const languages = lesson.languages

  const content = window.location.pathname?.endsWith('/content')
    ? '/content'
    : ''

  return (
    <Box>
      {languages?.length ? (
        <Box
          display="flex"
          flexWrap="wrap"
          justifyContent="center"
          alignItems="center"
          m="auto"
        >
          <Box fontSize="xl" fontWeight="bold">
            {t('Select language:')}
          </Box>
          <Box
            display="flex"
            flexWrap="wrap"
            justifyContent="center"
            alignItems="center"
            m="auto"
          >
            <StyledButton
              // variant={
              //   i18n.language === 'en' ||
              //   !lesson.languages.includes(i18n.language as any)
              //     ? 'primary'
              //     : 'secondary'
              // }
              variant="secondary"
              isselected={(
                i18n.language === 'en' ||
                !lesson.languages.includes(i18n.language as any)
              )?.toString()}
              m={3}
              onClick={() => {
                i18n.changeLanguage('en', () =>
                  router.push(`/lessons/${lesson.slug}${content}`)
                )
                Mixpanel.track(
                  lesson.isArticle ? 'open_lesson' : 'lesson_briefing',
                  {
                    lesson: lesson?.englishName,
                    language: 'en',
                  }
                )
                Mixpanel.track('change_language', {
                  lesson: lesson?.englishName,
                  language: 'en',
                  link: `/lessons/${lesson.slug}`,
                  name: 'en',
                })
              }}
            >
              EN
            </StyledButton>
            {languages.map((l) => (
              <StyledButton
                // variant={i18n.language === l ? 'primary' : 'secondary'}
                variant="secondary"
                isselected={(i18n.language === l)?.toString()}
                key={`key-${l}`}
                onClick={() => {
                  i18n.changeLanguage(l, () =>
                    router.push(`/lessons/${l}/${lesson.slug}${content}`)
                  )
                  Mixpanel.track(
                    lesson.isArticle ? 'open_lesson' : 'lesson_briefing',
                    {
                      lesson: lesson?.englishName,
                      language: l,
                    }
                  )
                  Mixpanel.track('change_language', {
                    lesson: lesson?.englishName,
                    language: l,
                    link: `/lessons/${l}/${lesson.slug}`,
                    name: l,
                  })
                }}
                m={3}
              >
                {l.toUpperCase()}
              </StyledButton>
            ))}
          </Box>
        </Box>
      ) : null}
    </Box>
  )
}

export default LanguageSwitch
