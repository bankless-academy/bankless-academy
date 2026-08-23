import NextLink, { LinkProps } from 'next/link'
import {
  Link as ChakraLink,
  LinkProps as ChakraLinkProps,
} from '@chakra-ui/react'

import { Mixpanel, getNodeText } from 'utils/index'
import { LESSONS } from 'constants/index'
import { isNonLocalizedPath } from 'constants/languages'
import { useApp } from 'contexts/AppContext'

type ChakraLinkAndNextProps = ChakraLinkProps & LinkProps & any

const InternalLink = ({
  href,
  children,
  alt,
  ignoreLocale,
  ...props
}: ChakraLinkAndNextProps): JSX.Element => {
  const { language } = useApp()

  // next/link carries the active locale automatically (/fr/... URLs), so no
  // href rewriting is needed. Two exceptions pin locale="en":
  //   - a lesson link whose lesson has no translation in the active language
  //     (its localized URL does not exist and would 404);
  //   - the non-localized pages (explorer, Notion aliases) — their localized
  //     URLs only 308 back to the bare path.
  // /lessons/handbook and /lessons/preview are listings, not lessons: they
  // exist at every locale and must NOT be forced to English.
  const path =
    href?.replace('https://app.banklessacademy.com', '') || ''
  const lessonSlug = path.startsWith('/lessons/')
    ? path.split('/').filter(Boolean)[1]
    : ''
  const isLessonLink =
    !!lessonSlug &&
    !['handbook', 'preview'].includes(lessonSlug) &&
    !ignoreLocale

  const forceEnglish =
    (isLessonLink &&
      language !== 'en' &&
      !LESSONS.some(
        (lesson) =>
          lesson.slug === lessonSlug &&
          (lesson.languages as any)?.includes(language)
      )) ||
    isNonLocalizedPath(path) ||
    ignoreLocale

  return (
    <NextLink
      href={href}
      locale={forceEnglish ? 'en' : undefined}
      passHref
      legacyBehavior
    >
      <ChakraLink
        {...props}
        onClick={(e) => {
          // Call the passed onClick handler if it exists
          if (props.onClick) {
            props.onClick(e)
          }
          const link = href || 'NO_LINK'
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
