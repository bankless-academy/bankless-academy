import NextLink, { LinkProps } from 'next/link'
import {
  Link as ChakraLink,
  LinkProps as ChakraLinkProps,
} from '@chakra-ui/react'
import { useEffect, useState } from 'react'

import { Mixpanel, getNodeText } from 'utils/index'
import { LESSONS } from 'constants/index'

type ChakraLinkAndNextProps = ChakraLinkProps & LinkProps & any

const InternalLink = ({
  href,
  children,
  alt,
  ignoreLocale,
  ...props
}: ChakraLinkAndNextProps): JSX.Element => {
  const [i18nextLng, setI18nextLng] = useState('en')

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setI18nextLng(localStorage.getItem('i18nextLng') || 'en')
    }
  }, [])

  const isLessonLink =
    (href?.startsWith('/lessons/') ||
      href?.startsWith('https://app.banklessacademy.com/lessons/')) &&
    !ignoreLocale

  const lessonSlug = isLessonLink ? href?.split('/')?.pop() : ''

  const iHref =
    isLessonLink &&
    i18nextLng !== 'en' &&
    LESSONS.some(
      (lesson) =>
        lesson.slug === lessonSlug &&
        (lesson.languages as any)?.includes(i18nextLng)
    )
      ? href.replace('/lessons/', `/lessons/${i18nextLng}/`)
      : href

  return (
    <NextLink href={iHref} passHref legacyBehavior>
      <ChakraLink
        {...props}
        onClick={() => {
          const link = iHref || 'NO_LINK'
          const name = alt || getNodeText(children) || 'NO_NAME'
          Mixpanel.track('click_internal_link', { link, name })
          // HACK: fix link from explorer page
          // if (router.pathname.startsWith('/explorer/'))
          //   window.location.href = iHref
        }}
      >
        {children}
      </ChakraLink>
    </NextLink>
  )
}

export default InternalLink
