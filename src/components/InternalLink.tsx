import NextLink, { LinkProps } from 'next/link'
import {
  Link as ChakraLink,
  LinkProps as ChakraLinkProps,
} from '@chakra-ui/react'

import { Mixpanel, getNodeText } from 'utils/index'
import { LESSONS } from 'constants/index'
import { useLanguage } from 'contexts/LanguageContext'

type ChakraLinkAndNextProps = ChakraLinkProps & LinkProps & any

const InternalLink = ({
  href,
  children,
  alt,
  ignoreLocale,
  ...props
}: ChakraLinkAndNextProps): JSX.Element => {
  const { currentLanguage } = useLanguage()

  const isLessonLink =
    (href?.startsWith('/lessons/') ||
      href?.startsWith('https://app.banklessacademy.com/lessons/')) &&
    !ignoreLocale

  const lessonSlug = isLessonLink ? href?.split('/')?.pop() : ''

  const iHref =
    isLessonLink &&
    currentLanguage !== 'en' &&
    LESSONS.some(
      (lesson) =>
        lesson.slug === lessonSlug &&
        (lesson.languages as any)?.includes(currentLanguage)
    )
      ? href.replace('/lessons/', `/lessons/${currentLanguage}/`)
      : href

  return (
    <NextLink href={iHref} passHref legacyBehavior>
      <ChakraLink
        {...props}
        onClick={() => {
          const link = iHref || 'NO_LINK'
          const name = alt || getNodeText(children) || 'NO_NAME'
          Mixpanel.track('click_internal_link', { link, name })
        }}
      >
        {children}
      </ChakraLink>
    </NextLink>
  )
}

export default InternalLink
