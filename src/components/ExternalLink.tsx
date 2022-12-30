import NextLink, { LinkProps } from 'next/link'
import {
  Link as ChakraLink,
  LinkProps as ChakraLinkProps,
} from '@chakra-ui/react'

import { Mixpanel, getNodeText } from 'utils'

type ChakraLinkAndNextProps = ChakraLinkProps & LinkProps & any

const ExternalLink = ({
  href,
  children,
  alt,
  ...props
}: ChakraLinkAndNextProps): JSX.Element => (
  <NextLink href={href} passHref>
    <ChakraLink
      {...props}
      isExternal
      onClick={() => {
        const link = href || 'NO_LINK'
        const name = alt || getNodeText(children) || 'NO_NAME'
        Mixpanel.track('click_external_link', { link, name })
      }}
    >
      {children}
    </ChakraLink>
  </NextLink>
)

export default ExternalLink
