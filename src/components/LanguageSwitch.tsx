import React from 'react'
import { Box, Button } from '@chakra-ui/react'
import { useTranslation } from 'react-i18next'
import { useRouter } from 'next/router'
import styled from '@emotion/styled'

import { LessonType } from 'entities/lesson'
import { Mixpanel } from 'utils'
import { LanguageDescription } from 'constants/index'

const StyledButton = styled(Button)<{ isselected?: string }>`
  padding: 16px;
  //width: 60px;
  /* height: 56px; */
  border-radius: 12px;
  padding: 10px 16px !important;
  :hover {
    background: #3f3253;
    border: 0;
    padding: 10px 16px !important;
  }
  ${(props) =>
    props.isselected === 'true' &&
    `
    background: linear-gradient(132deg, #67407E 0%, #354374 100%);
    border: 1px solid #B85FF1 !important;
    padding: 10px 16px !important;
    :hover {
      background: linear-gradient(132deg, #67407E 0%, #354374 100%);
      border: 1px solid #B85FF1 !important;
      padding: 10px 16px !important;
    }
  `}
`

const LanguageSwitch = ({
  lesson,
}: {
  lesson: LessonType
}): React.ReactElement => {
  const { i18n } = useTranslation()
  const router = useRouter()

  const languages = lesson.languages

  const content = window.location.pathname?.endsWith('/content')
    ? '/content'
    : ''

  return (
    <Box>
      {languages?.length ? (
        <Box textAlign="center">
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
              // title={LanguageDescription['en']}
              m={2}
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
              {LanguageDescription['en']}
            </StyledButton>
            {languages.map((l) => (
              <StyledButton
                // variant={i18n.language === l ? 'primary' : 'secondary'}
                variant="secondary"
                isselected={(i18n.language === l)?.toString()}
                // title={l in LanguageDescription ? LanguageDescription[l] : ''}
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
                m={2}
              >
                {l in LanguageDescription ? LanguageDescription[l] : ''}
              </StyledButton>
            ))}
          </Box>
        </Box>
      ) : null}
    </Box>
  )
}

export default LanguageSwitch
