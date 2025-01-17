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
    selectedLanguage && selectedLanguage.length === 2
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
    <Menu autoSelect={false}>
      {({ isOpen }) => (
        <>
          <MenuButton
            isActive={isOpen}
            as={Button}
            variant="secondary"
            size={isSmallScreen ? 'sm' : 'md'}
            border={isSmallScreen ? '1px solid transparent' : 'default'}
            px={isSmallScreen ? '11px !important' : '16px'}
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
              Select preferred language
              {isLessonPage && (
                <Text fontSize="xs" color="lightgrey">
                  * Translation not available
                </Text>
              )}
            </Text>
            {Object.entries(LanguageDescription).map(([code, name]) => {
              const lessonSlug = router.asPath.endsWith('/content')
                ? lessonSlugs?.[lessonSlugs.length - 2]
                : lessonSlugs?.[lessonSlugs.length - 1]

              const content = router.asPath.endsWith('/content')
                ? `/content`
                : ''
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
                    if (isLessonPage) {
                      // Update lesson and handbook pages to match the language
                      if (lessonAvailable) {
                        router.push(`/lessons/${code}/${lessonSlug}${content}`)
                      } else {
                        router.push(`/lessons/${lessonSlug}${content}`)
                      }
                    }
                    // Refresh internal links without page reload
                    refreshLanguage()
                  }}
                  backgroundColor={
                    defaultLanguage === code ? 'blackAlpha.300' : 'default'
                  }
                >
                  <Box flex="1" isTruncated>
                    {name}
                    {!isLessonPage || code === 'en'
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
