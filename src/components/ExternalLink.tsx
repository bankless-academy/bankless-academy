import { LinkProps } from 'next/link'
import {
  Link as ChakraLink,
  LinkProps as ChakraLinkProps,
} from '@chakra-ui/react'

import { Mixpanel, getNodeText } from 'utils/index'
import { LESSONS } from 'constants/index'

type ChakraLinkAndNextProps = ChakraLinkProps & LinkProps & any

const ExternalLink = ({
  href,
  children,
  alt,
  ...props
}: ChakraLinkAndNextProps): JSX.Element => {
  const i18nextLng =
    typeof window !== 'undefined' ? localStorage.getItem('i18nextLng') : 'en'
  const isLessonLink =
    href?.startsWith('/lessons/') ||
    href?.startsWith('https://app.banklessacademy.com/lessons/')
  const lessonSlug = isLessonLink ? href?.split('/')?.pop() : ''
  const iHref =
    isLessonLink &&
    i18nextLng !== 'en' &&
    LESSONS.some(
      (lesson) =>
        lesson.slug === lessonSlug &&
        (lesson.languages as any)?.includes(i18nextLng)
    )
      ? `/lessons/${i18nextLng}/${lessonSlug}`
      : href
  const whiteProps =
    props.underline === 'true'
      ? {
          style: {
            color: 'white',
            fontWeight: 'bold',
            textDecoration: 'underline',
            textUnderlinePosition: 'under',
          },
          _hover: {
            textDecoration: 'underline !important',
          },
        }
      : {}
  return (
    <ChakraLink
      href={iHref}
      {...props}
      {...whiteProps}
      isExternal="true"
      onClick={() => {
        const link = iHref || 'NO_LINK'
        const name = alt || getNodeText(children) || 'NO_NAME'
        Mixpanel.track('click_external_link', { link, name })
      }}
    >
      {children}
    </ChakraLink>
  )
}

export default ExternalLink
