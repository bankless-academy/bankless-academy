import NextLink, { LinkProps } from 'next/link'
import {
  Link as ChakraLink,
  LinkProps as ChakraLinkProps,
} from '@chakra-ui/react'

import { Mixpanel, getNodeText } from 'utils'

type ChakraLinkAndNextProps = ChakraLinkProps & LinkProps & any

const InternalLink = ({
  href,
  children,
  alt,
  ...props
}: ChakraLinkAndNextProps): JSX.Element => (
  <NextLink href={href} passHref>
    <ChakraLink
      {...props}
      legacyBehavior
      onClick={() => {
        const link = href || 'NO_LINK'
        const name = alt || getNodeText(children) || 'NO_NAME'
        Mixpanel.track('click_internal_link', { link, name })
      }}
    >
      <a>{children}</a>
    </ChakraLink>
  </NextLink>
)

export default InternalLink
