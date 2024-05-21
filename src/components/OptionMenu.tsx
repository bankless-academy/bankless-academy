import React from 'react'
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
import { Mixpanel } from 'utils'
import { useTranslation } from 'react-i18next'
import { Bug, Gear } from '@phosphor-icons/react'

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
  const { t } = useTranslation()
  const { isOpen, onOpen, onClose } = useDisclosure()
  const {
    isOpen: isOpenAppModal,
    onOpen: onOpenAppModal,
    onClose: onCloseAppModal,
  } = useDisclosure()

  const twitterLink = `https://x.com/intent/follow?screen_name=${TWITTER_ACCOUNT}`

  return (
    <Box zIndex="10">
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
            <MenuItem>{t('FAQ')}</MenuItem>
          </ExternalLink>
          <ExternalLink href="/about" color="white">
            <MenuItem>About</MenuItem>
          </ExternalLink>
          <ExternalLink href="/disclaimer" color="white">
            <MenuItem>{t('Disclaimer')}</MenuItem>
          </ExternalLink>
          <ExternalLink href="/report-an-issue" color="white">
            <MenuItem>
              {t('Report an Issue')}&nbsp;
              <Bug />
            </MenuItem>
          </ExternalLink>
          {!IS_WHITELABEL && (
            <ExternalLink
              href="https://app.dework.xyz/bankless-academy-25331/suggestions"
              color="white"
            >
              <MenuItem>
                {t('Feature Request')}&nbsp;
                <Gear />
              </MenuItem>
            </ExternalLink>
          )}
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
                {t('Newsletter Signup')} 📩
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
                  {t('Install Mobile App')} 📱
                </MenuItem>
              )}
              <ExternalLink
                href="https://hey.xyz/u/banklessacademy"
                color="white"
              >
                <MenuItem>
                  {t('Follow our Lens')}
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 28 27"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    style={{ marginLeft: '5px' }}
                  >
                    <path
                      d="M27.038 24.1564L26.7566 24.2868C25.0529 25.0632 23.1418 25.2608 21.3152 24.8494C20.3411 24.6355 19.4121 24.2523 18.5705 23.7172C20.2384 24.1484 22.007 23.9429 23.5316 23.1409L23.7512 23.0242L24.0462 22.8595L23.2228 21.4117L22.9277 21.5832L22.7631 21.6724C21.9603 22.0987 21.0603 22.3083 20.1518 22.2806C19.2433 22.2529 18.3577 21.9889 17.5824 21.5146C16.8947 21.1032 16.3075 20.5435 15.8635 19.8764C15.4195 19.2093 15.1301 18.4515 15.0161 17.6583C19.0003 17.2893 22.7398 15.5733 25.6176 12.7933L25.9195 12.4776C26.4256 11.973 26.8178 11.366 27.0699 10.6973C27.322 10.0286 27.4281 9.31375 27.381 8.60067C27.2642 7.32022 26.695 6.12331 25.7754 5.22467C24.8778 4.30358 23.6803 3.73404 22.3994 3.61901C21.2828 3.54039 20.1733 3.84807 19.2567 4.49045C19.066 3.38669 18.4956 2.38425 17.6441 1.65652C16.6588 0.830181 15.4099 0.384645 14.124 0.400816C12.848 0.385004 11.6079 0.822699 10.6245 1.63593C9.77703 2.36697 9.20753 3.36786 9.012 4.46987C8.09565 3.82697 6.98585 3.51922 5.86928 3.5984C4.58883 3.71521 3.39191 4.28449 2.49328 5.20409C1.5727 6.10126 1.00526 7.29942 0.894463 8.58009C0.846532 9.29325 0.952201 10.0084 1.20434 10.6772C1.45648 11.3461 1.84923 11.953 2.35603 12.457C2.4521 12.5668 2.55503 12.6697 2.65795 12.7727C5.53334 15.5522 9.27049 17.2683 13.2526 17.6377C13.14 18.4314 12.8511 19.1897 12.407 19.857C11.9629 20.5244 11.3749 21.0837 10.6863 21.494C9.91224 21.9684 9.02773 22.2325 8.12031 22.2602C7.21289 22.2878 6.31397 22.0782 5.51245 21.6519L5.34091 21.5627L5.04585 21.3911L4.22243 22.8389L4.52435 23.0036C4.59295 23.0466 4.66397 23.0855 4.73706 23.1203C6.26165 23.9223 8.03032 24.1278 9.69818 23.6967C8.85723 24.233 7.92799 24.6163 6.95346 24.8289C5.12685 25.2402 3.21578 25.0426 1.512 24.2662L1.23069 24.1358L0.400391 25.5768L0.736655 25.7346C2.79568 26.6783 5.10769 26.9194 7.31711 26.4208C9.56561 25.9364 11.5804 24.6965 13.0261 22.9076L13.2869 22.5713V26.7364H14.9474V22.5576C15.0298 22.6811 15.119 22.7978 15.2082 22.9076C16.6459 24.7208 18.6645 25.9833 20.9241 26.4826C21.6605 26.6492 22.4129 26.7344 23.1679 26.7364C24.669 26.7345 26.1515 26.4043 27.5114 25.7689L27.8408 25.6111L27.038 24.1564ZM10.5696 6.15787C10.5696 6.05494 10.5696 5.95888 10.5696 5.86281C10.5696 5.76675 10.5696 5.60207 10.5696 5.47855C10.5692 5.01622 10.6623 4.55856 10.8433 4.1331C11.0242 3.70764 11.2893 3.32314 11.6225 3.00269C11.9558 2.68223 12.3504 2.43246 12.7826 2.26834C13.2148 2.10422 13.6758 2.02915 14.1378 2.04765C14.5997 2.02915 15.0607 2.10422 15.4929 2.26834C15.9251 2.43246 16.3197 2.68223 16.653 3.00269C16.9862 3.32314 17.2513 3.70764 17.4323 4.1331C17.6132 4.55856 17.7063 5.01622 17.7059 5.47855C17.7059 5.60207 17.7059 5.73244 17.7059 5.86281C17.7059 5.99319 17.7059 6.06181 17.7059 6.16474L17.651 8.40167L19.2086 6.75484L19.4008 6.56271L19.6752 6.28824C20.0026 5.9632 20.3922 5.70751 20.8206 5.53648C21.2491 5.36544 21.7076 5.28256 22.1689 5.29281C22.6301 5.30306 23.0845 5.40624 23.5049 5.59614C23.9253 5.78604 24.3032 6.05877 24.6158 6.39804C24.955 6.71064 25.2278 7.08846 25.4177 7.50889C25.6076 7.92932 25.7107 8.38373 25.721 8.84494C25.7312 9.30616 25.6483 9.76471 25.4773 10.1932C25.3063 10.6216 25.0506 11.0112 24.7255 11.3386L24.4579 11.6199C21.6612 14.2703 18.0127 15.8391 14.1652 16.0457C10.3171 15.8415 6.66782 14.2723 3.87247 11.6199L3.59802 11.3386C3.27297 11.0112 3.01729 10.6216 2.84625 10.1932C2.67522 9.76471 2.59234 9.30616 2.60259 8.84494C2.61284 8.38373 2.71599 7.92932 2.90589 7.50889C3.09579 7.08846 3.36852 6.71064 3.70779 6.39804C4.38462 5.6998 5.30881 5.29562 6.28097 5.27269C7.17297 5.2865 8.02358 5.6514 8.6483 6.28824L8.92966 6.55586L9.13551 6.77543L10.6794 8.40167L10.5696 6.15787Z"
                      fill="#ABFE2C"
                    ></path>
                  </svg>
                </MenuItem>
              </ExternalLink>
              <ExternalLink
                href="https://warpcast.com/banklessacademy"
                color="white"
              >
                <MenuItem>
                  {t('Follow our Farcaster')}
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 1000 1000"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    style={{ marginLeft: '5px' }}
                  >
                    <path
                      d="M257.778 155.556H742.222V844.445H671.111V528.889H670.414C662.554 441.677 589.258 373.333 500 373.333C410.742 373.333 337.446 441.677 329.586 528.889H328.889V844.445H257.778V155.556Z"
                      fill="white"
                    />
                    <path
                      d="M128.889 253.333L157.778 351.111H182.222V746.667C169.949 746.667 160 756.616 160 768.889V795.556H155.556C143.283 795.556 133.333 805.505 133.333 817.778V844.445H382.222V817.778C382.222 805.505 372.273 795.556 360 795.556H355.556V768.889C355.556 756.616 345.606 746.667 333.333 746.667H306.667V253.333H128.889Z"
                      fill="white"
                    />
                    <path
                      d="M675.556 746.667C663.282 746.667 653.333 756.616 653.333 768.889V795.556H648.889C636.616 795.556 626.667 805.505 626.667 817.778V844.445H875.556V817.778C875.556 805.505 865.606 795.556 853.333 795.556H848.889V768.889C848.889 756.616 838.94 746.667 826.667 746.667V351.111H851.111L880 253.333H702.222V746.667H675.556Z"
                      fill="white"
                    />
                  </svg>
                </MenuItem>
              </ExternalLink>
            </>
          )}
          <ExternalLink href={twitterLink} color="white">
            <MenuItem>
              {t('Follow our Twitter')}
              <Image src="/images/TwitterX.svg" w="16px" ml="5px" />
            </MenuItem>
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
