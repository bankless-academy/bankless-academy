import Link, { LinkProps } from 'next/link'
import {
  Link as ChakraLink,
  LinkProps as ChakraLinkProps,
} from '@chakra-ui/react'

import { Mixpanel } from 'utils'

type ChakraLinkAndNextProps = ChakraLinkProps & LinkProps & any

const TrackedLink = ({ href, children, ...props }: ChakraLinkAndNextProps) => (
  <Link href={href} passHref>
    <ChakraLink
      {...props}
      isExternal
      onClick={() => {
        const link = href || 'NO_LINK'
        const name = children?.props?.children || 'NO_NAME'
        Mixpanel.track('click_external_link', { link, name })
      }}
    >
      {children}
    </ChakraLink>
  </Link>
)

export default TrackedLink
