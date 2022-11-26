import React from 'react'
import {
  Button,
  Link,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  useDisclosure,
} from '@chakra-ui/react'
import { Mixpanel } from 'utils'
import NewsletterModal from 'components/NewsletterModal'

import { IS_WHITELABEL, TWITTER_ACCOUNT } from 'constants/index'

const OptionMenu = ({
  isSmallScreen,
}: {
  isSmallScreen: boolean
}): React.ReactElement => {
  const { isOpen, onOpen, onClose } = useDisclosure()

  const twitterLink = `https://twitter.com/${TWITTER_ACCOUNT}`

  return (
    <>
      <Menu>
        <MenuButton
          variant="secondary"
          as={Button}
          size={isSmallScreen ? 'sm' : 'md'}
        >
          ...
        </MenuButton>
        <MenuList>
          <Link href="/faq" target="_blank" color="white">
            <MenuItem>FAQ</MenuItem>
          </Link>
          <Link href="/bug" target="_blank" color="white">
            <MenuItem>Report a bug</MenuItem>
          </Link>
          {!IS_WHITELABEL && (
            <MenuItem
              onClick={() => {
                onOpen()
                Mixpanel.track('click_newsletter_modal')
              }}
            >
              Newsletter signup
            </MenuItem>
          )}
          <Link href={twitterLink} target="_blank" color="white">
            <MenuItem>Follow us Twitter</MenuItem>
          </Link>
        </MenuList>
      </Menu>
      <NewsletterModal isOpen={isOpen} onClose={onClose} />
    </>
  )
}

export default OptionMenu
