import React from 'react'
import {
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Box,
  Text,
} from '@chakra-ui/react'
import { ChevronDownIcon, ChevronUpIcon } from '@chakra-ui/icons'
import { useTranslation } from 'react-i18next'
import { LanguageDescription } from 'constants/index'
import { useLocalStorage } from 'usehooks-ts'
import { useRouter } from 'next/router'
import { LESSONS } from 'constants/index'
import { Globe } from '@phosphor-icons/react'
import { useLanguage } from 'contexts/LanguageContext'

const SelectLanguage = ({
  isSmallScreen,
}: {
  isSmallScreen: boolean
}): JSX.Element => {
  const { i18n } = useTranslation()
  const router = useRouter()
  const isLessonPage =
    router.pathname.startsWith('/lessons/') &&
    router.pathname !== '/lessons/handbook'
  const lessonSlugs = isLessonPage ? (router.query.slug as string[]) : []
  const selectedLanguage = lessonSlugs?.length > 1 ? lessonSlugs[0] : null
  const [defaultLanguage, setDefaultLanguage] = useLocalStorage(
    'default-language',
    selectedLanguage
      ? selectedLanguage
      : typeof window !== 'undefined'
      ? window.navigator.language.split('-')[0]
      : 'en'
  )
  const { refreshLanguage } = useLanguage()

  // Set initial language from localStorage
  React.useEffect(() => {
    if (defaultLanguage && i18n.language !== defaultLanguage) {
      i18n.changeLanguage(defaultLanguage)
    }
  }, [defaultLanguage, i18n])

  return (
    <Menu>
      {({ isOpen }) => (
        <>
          <MenuButton
            isActive={isOpen}
            as={Button}
            variant="secondary"
            size={isSmallScreen ? 'sm' : 'md'}
            leftIcon={<Globe />}
            iconSpacing={isSmallScreen ? '0' : '1'}
          >
            <Box display="flex" alignItems="center">
              <Box
                flex="1"
                isTruncated
                display={isSmallScreen ? 'none' : 'inherit'}
              >
                {LanguageDescription[i18n.language] ||
                  LanguageDescription['en']}
              </Box>
              {isOpen ? <ChevronUpIcon ml="1" /> : <ChevronDownIcon ml="1" />}
            </Box>
          </MenuButton>
          <MenuList zIndex="10">
            <Text
              mt="-10px"
              pt="10px"
              pl="4"
              pb="2"
              bg="var(--chakra-colors-whiteAlpha-200)"
              color="lightgrey"
            >
              Select default language
              <Text fontSize="xs" color="lightgrey">
                * Translation not available
              </Text>
            </Text>
            {Object.entries(LanguageDescription).map(([code, name]) => {
              const lessonSlug = lessonSlugs?.[lessonSlugs.length - 1]
              const lessonAvailable = lessonSlug
                ? LESSONS.find(
                    (lesson) =>
                      lesson.slug === lessonSlug &&
                      lesson.languages.includes(code as any)
                  )
                : null
              return (
                <MenuItem
                  key={code}
                  minH="40px"
                  onClick={() => {
                    i18n.changeLanguage(code)
                    setDefaultLanguage(code)
                    // Update lesson and handbook pages to match the language
                    if (lessonAvailable) {
                      router.push(`/lessons/${code}/${lessonSlug}`)
                    }
                    // Refresh internal links without page reload
                    refreshLanguage()
                  }}
                  backgroundColor={
                    i18n.language === code ? 'blackAlpha.300' : 'default'
                  }
                >
                  <Box flex="1" isTruncated>
                    {name}
                    {!isLessonPage
                      ? ''
                      : lessonAvailable && code !== 'en'
                      ? ''
                      : ' *'}
                  </Box>
                </MenuItem>
              )
            })}
          </MenuList>
        </>
      )}
    </Menu>
  )
}

export default SelectLanguage
