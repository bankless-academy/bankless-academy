import React, { useState } from 'react'
import {
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  useDisclosure,
  Box,
  Image,
} from '@chakra-ui/react'
import { Mixpanel } from 'utils/index'
import { useTranslation } from 'react-i18next'
import {
  Bug,
  DotsThreeVertical,
  Gear,
  DeviceMobileCamera,
  Newspaper,
  TelegramLogo,
  WarningDiamond,
  Info,
  Question,
  Book,
} from '@phosphor-icons/react'

import InstallAppModal from 'components/InstallAppModal'
import ExternalLink from 'components/ExternalLink'
import { IS_WHITELABEL, TWITTER_ACCOUNT } from 'constants/index'
import OnboardingModal from 'components/OnboardingModal'
import InternalLink from './InternalLink'

const OptionMenu = ({
  isSmallScreen,
  isWebApp,
}: {
  isSmallScreen: boolean
  isWebApp: boolean
}): React.ReactElement => {
  const { t } = useTranslation()
  const {
    isOpen: isOpenAppModal,
    onOpen: onOpenAppModal,
    onClose: onCloseAppModal,
  } = useDisclosure()
  const [isOnboardingModalOpen, setIsOnboardingModalOpen] = useState(false)

  const twitterLink = IS_WHITELABEL
    ? `https://x.com/intent/follow?screen_name=${TWITTER_ACCOUNT}`
    : `https://bankless.ac/twitter`

  return (
    <Box zIndex="10">
      <Menu autoSelect={false}>
        <MenuButton
          variant="secondary"
          as={Button}
          size={isSmallScreen ? 'sm' : 'md'}
          w={isSmallScreen ? '28px' : '32px'}
          leftIcon={
            <DotsThreeVertical weight="bold" size={isSmallScreen ? 28 : 32} />
          }
          iconSpacing="0px"
          p="0px !important"
          display="grid"
          alignContent="center"
        ></MenuButton>
        <MenuList>
          <ExternalLink href="/faq" color="white">
            <MenuItem>
              <Question size={20} style={{ marginRight: '5px' }} />
              {t('FAQ')}
            </MenuItem>
          </ExternalLink>
          <InternalLink href="/glossary" color="white">
            <MenuItem>
              <Book size={20} style={{ marginRight: '5px' }} />
              {t('Glossary')}
            </MenuItem>
          </InternalLink>
          <InternalLink href="/about" color="white">
            <MenuItem>
              <Info size={20} style={{ marginRight: '5px' }} />
              {t('About')}
            </MenuItem>
          </InternalLink>
          <InternalLink href="/disclaimer" color="white">
            <MenuItem>
              <WarningDiamond size={20} style={{ marginRight: '5px' }} />
              {t('Disclaimer')}
            </MenuItem>
          </InternalLink>
          <ExternalLink href="/report-an-issue" color="white">
            <MenuItem>
              <Bug size={20} style={{ marginRight: '5px' }} />
              {t('Report an Issue')}&nbsp;
            </MenuItem>
          </ExternalLink>
          {!IS_WHITELABEL && (
            <ExternalLink href="/feature-request" color="white">
              <MenuItem>
                <Gear size={20} style={{ marginRight: '5px' }} />
                {t('Feature Request')}&nbsp;
              </MenuItem>
            </ExternalLink>
          )}
          {!IS_WHITELABEL && (
            <>
              <MenuItem
                onClick={() => {
                  setIsOnboardingModalOpen(true)
                  Mixpanel.track('click_internal_link', {
                    link: 'modal',
                    name: 'Newsletter signup',
                  })
                }}
              >
                <Newspaper size={20} style={{ marginRight: '5px' }} />
                {t('Newsletter Signup')}
              </MenuItem>
              {isWebApp ? null : (
                <MenuItem
                  onClick={() => {
                    onOpenAppModal()
                    Mixpanel.track('click_internal_link', {
                      link: 'modal',
                      name: 'Install Mobile App',
                    })
                  }}
                >
                  <DeviceMobileCamera
                    size={20}
                    style={{ marginRight: '5px' }}
                  />
                  {t('Install Mobile App')}
                </MenuItem>
              )}
              <ExternalLink href="https://bankless.ac/hey" color="white">
                <MenuItem>
                  <Image src="/images/Lens.svg" w="18px" mr="5px" ml="2px" />
                  {t('Lens')}
                </MenuItem>
              </ExternalLink>
              <ExternalLink href="https://bankless.ac/farcaster" color="white">
                <MenuItem>
                  <Image src="/images/Farcaster.svg" w="20px" mr="5px" />
                  {t('Farcaster')}
                </MenuItem>
              </ExternalLink>
            </>
          )}
          <ExternalLink href={twitterLink} color="white">
            <MenuItem>
              <Image src="/images/TwitterX.svg" w="16px" mr="5px" ml="4px" />
              {t('Twitter')}
            </MenuItem>
          </ExternalLink>
          <ExternalLink href="https://bankless.ac/community" color="white">
            <MenuItem>
              <TelegramLogo size={20} style={{ marginRight: '5px' }} />
              {t('Telegram')}
            </MenuItem>
          </ExternalLink>
        </MenuList>
      </Menu>
      <OnboardingModal
        isOpen={isOnboardingModalOpen}
        onClose={() => {
          setIsOnboardingModalOpen(false)
        }}
        newsletterOnly={true}
      />
      <InstallAppModal
        isOpen={isOpenAppModal}
        onClose={onCloseAppModal}
        yes={true}
      />
    </Box>
  )
}

export default OptionMenu
