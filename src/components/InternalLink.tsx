import NextLink, { LinkProps } from 'next/link'
import {
  Link as ChakraLink,
  LinkProps as ChakraLinkProps,
} from '@chakra-ui/react'

import { Mixpanel, getNodeText } from 'utils'
import { LESSONS } from 'constants/index'

type ChakraLinkAndNextProps = ChakraLinkProps & LinkProps & any

const InternalLink = ({
  href,
  children,
  alt,
  ...props
}: ChakraLinkAndNextProps): JSX.Element => {
  const i18nextLng = localStorage.getItem('i18nextLng')
  const lang =
    href.includes('/lessons/') &&
    !href.includes('?') &&
    i18nextLng !== 'en' &&
    LESSONS.some(
      (lesson) =>
        lesson.slug === href.replace('/lessons/', '') &&
        (lesson.languages as any).includes(i18nextLng)
    )
      ? `?lang=${i18nextLng}`
      : ''
  return (
    <NextLink href={`${href}${lang}`} passHref legacyBehavior>
      <ChakraLink
        {...props}
        onClick={() => {
          const link = `${href}${lang}` || 'NO_LINK'
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
