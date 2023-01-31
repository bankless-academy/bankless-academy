import React from 'react'
import {
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  useDisclosure,
  Box,
} from '@chakra-ui/react'
import { Mixpanel } from 'utils'
import SubscriptionModal from 'components/SubscriptionModal'
import InstallAppModal from 'components/InstallAppModal'

import ExternalLink from 'components/ExternalLink'
import { IS_WHITELABEL, TWITTER_ACCOUNT } from 'constants/index'

const OptionMenu = ({
  isSmallScreen,
  isWebApp,
}: {
  isSmallScreen: boolean
  isWebApp: boolean
}): React.ReactElement => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const {
    isOpen: isOpenAppModal,
    onOpen: onOpenAppModal,
    onClose: onCloseAppModal,
  } = useDisclosure()

  const twitterLink = `https://twitter.com/${TWITTER_ACCOUNT}`

  // TEMP: remove soon
  const disableFeature = true

  return (
    <Box zIndex="2">
      <Menu>
        <MenuButton
          variant="secondary"
          as={Button}
          size={isSmallScreen ? 'sm' : 'md'}
        >
          ...
        </MenuButton>
        <MenuList>
          <ExternalLink href="/faq" color="white">
            <MenuItem>FAQ</MenuItem>
          </ExternalLink>
          <ExternalLink href="/disclaimer" color="white">
            <MenuItem>Disclaimer</MenuItem>
          </ExternalLink>
          <ExternalLink href="/bug" color="white">
            <MenuItem>Report a bug</MenuItem>
          </ExternalLink>
          {!IS_WHITELABEL && (
            <>
              <MenuItem
                onClick={() => {
                  onOpen()
                  Mixpanel.track('click_internal_link', {
                    link: 'modal',
                    name: 'Newsletter signup',
                  })
                }}
              >
                Newsletter signup
              </MenuItem>
              {isWebApp || disableFeature ? null : (
                <MenuItem
                  onClick={() => {
                    onOpenAppModal()
                    Mixpanel.track('click_internal_link', {
                      link: 'modal',
                      name: 'Install Mobile App',
                    })
                  }}
                >
                  Install Mobile App 📱
                </MenuItem>
              )}
            </>
          )}
          <ExternalLink href={twitterLink} color="white">
            <MenuItem>Follow our Twitter</MenuItem>
          </ExternalLink>
        </MenuList>
      </Menu>
      <SubscriptionModal isOpen={isOpen} onClose={onClose} />
      <InstallAppModal
        isOpen={isOpenAppModal}
        onClose={onCloseAppModal}
        yes={true}
      />
    </Box>
  )
}

export default OptionMenu
