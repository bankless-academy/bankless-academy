import React from 'react'
import { Box, Button } from '@chakra-ui/react'
import { useTranslation } from 'react-i18next'
import { useRouter } from 'next/router'
import styled from '@emotion/styled'

import { LanguageType, LessonType } from 'entities/lesson'
import { Mixpanel } from 'utils/index'
import { LanguageDescription } from 'constants/index'
import { useApp } from 'contexts/AppContext'

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
  const { setLanguage } = useApp()

  const languages = Object.keys(LanguageDescription).filter((v: LanguageType) =>
    lesson.languages?.includes(v)
  )

  const content = window.location.pathname?.endsWith('/content')
    ? '/content'
    : ''

  const handleLanguageChange = (lang: string, path: string) => {
    i18n.changeLanguage(lang)
    setLanguage(lang)
    router.push(path)

    Mixpanel.track(lesson.isArticle ? 'open_lesson' : 'lesson_briefing', {
      lesson: lesson?.englishName,
      language: lang,
    })
    Mixpanel.track('change_language', {
      lesson: lesson?.englishName,
      language: lang,
      link: path,
      name: lang,
    })
  }

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
              variant="secondary"
              isselected={(
                i18n.language === 'en' ||
                !lesson.languages.includes(i18n.language as any)
              )?.toString()}
              m={2}
              onClick={() =>
                handleLanguageChange('en', `/lessons/${lesson.slug}${content}`)
              }
            >
              {LanguageDescription['en']}
            </StyledButton>
            {languages.map((l) => (
              <StyledButton
                key={`key-${l}`}
                variant="secondary"
                isselected={(i18n.language === l)?.toString()}
                onClick={() =>
                  handleLanguageChange(
                    l,
                    `/lessons/${l}/${lesson.slug}${content}`
                  )
                }
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
