import React, { useState } from 'react'
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  Image,
  ModalBody,
  Button,
  Box,
  Text,
} from '@chakra-ui/react'
import { Global, css } from '@emotion/react'
import { isAndroid, isIOS } from 'react-device-detect'
import { useLocalStorage } from 'usehooks-ts'
import { useTranslation } from 'react-i18next'

const InstallAppModal = ({
  isOpen,
  onClose,
  yes,
}: {
  isOpen: boolean
  onClose: () => void
  yes?: boolean
}): React.ReactElement => {
  const { t } = useTranslation()
  const [showInstall, setShowInstall]: any = useState(yes)
  const [badgesMintedLS] = useLocalStorage('badgesMinted', [])
  const isDesktop = !(isAndroid || isIOS)

  return (
    <Modal onClose={onClose} size="xs" isOpen={isOpen}>
      <Global
        styles={css`
          .chakra-modal__content-container {
            flex-flow: wrap-reverse;
            .chakra-modal__content {
              flex-flow: column;
            }
          }
        `}
      />
      <ModalContent
        bg="linear-gradient(180deg, #a379bdcc 0%, #5a5198cc 100%)"
        border="2px solid #B68BCC"
        borderRadius="3xl"
        backdropFilter="blur(10px)"
        flexFlow="wrap-reverse"
        my="5vw"
        w="92vw"
        maxW="600px"
      >
        {showInstall === true ? (
          <>
            <ModalHeader px="3">
              <Box display="flex">
                <Image
                  width="50px"
                  height="50px"
                  borderRadius="8px"
                  mr="4"
                  src="/app-icon.png"
                />
                <Text fontSize="lg" alignSelf="center">
                  {t('How to install the Bankless Academy Mobile App')}
                </Text>
              </Box>
            </ModalHeader>
            <ModalCloseButton />
            <ModalBody px="6" pb="4">
              {isDesktop ? (
                <>
                  <Text fontSize="md" mb="4" alignSelf="center">
                    {t(
                      `Open the website on mobile, open the main menu, and press "Install Mobile App".`
                    )}
                  </Text>
                  <Image
                    borderRadius="10px"
                    maxH="60vh"
                    m="auto"
                    src="/images/install-app-desktop.gif"
                    alt="Open website on mobile"
                  />
                </>
              ) : isIOS ? (
                <>
                  <Image
                    borderRadius="10px"
                    maxH="60vh"
                    m="auto"
                    src="/images/install-app-iOS.gif"
                    alt="Install Mobile App on iOS"
                  />
                  <Text fontSize="md" mt="4">
                    {t(
                      `Open the website in Safari, click "Share" icon, "Add to Home Screen". This won't work with other browsers on iOS.`
                    )}
                  </Text>
                </>
              ) : (
                <>
                  <video
                    autoPlay
                    loop
                    playsInline
                    muted
                    style={{
                      borderRadius: '10px',
                      overflow: 'hidden',
                      maxHeight: '60vh',
                      margin: 'auto',
                    }}
                  >
                    <source
                      src="/images/install-app-Android.mp4"
                      type="video/mp4"
                    ></source>
                  </video>
                  <Text fontSize="md" mt="4">
                    {t(
                      'In your mobile browser, click on "︙" icon for menu options, then click "Install app".'
                    )}
                  </Text>
                </>
              )}
            </ModalBody>
          </>
        ) : (
          <>
            <ModalHeader px="3">
              <Box display="flex">
                <Image
                  width="50px"
                  height="50px"
                  borderRadius="8px"
                  mr="4"
                  src="/app-icon.png"
                />
                <Text fontSize="lg" alignSelf="center">
                  {t('Do you want to install the Bankless Academy Mobile App?')}
                </Text>
              </Box>
            </ModalHeader>
            <ModalCloseButton />
            <ModalBody px="3">
              <Box mb="0" textAlign="right">
                <Box display="inline-flex" mb="2" ml="2">
                  <Button
                    variant="secondaryWhite"
                    onClick={() => {
                      localStorage.setItem(
                        'mobile-preferences',
                        badgesMintedLS?.length.toString() || '0'
                      )
                      onClose()
                    }}
                  >
                    {t('Remind me later')}
                  </Button>
                </Box>
                <Box display="inline-flex" mb="2" ml="2">
                  <Button
                    variant="secondaryWhite"
                    onClick={() => {
                      localStorage.setItem('mobile-preferences', 'no')
                      onClose()
                    }}
                  >
                    {t('No')}
                  </Button>
                  <Button
                    ml="2"
                    variant="primaryWhite"
                    onClick={() => setShowInstall(true)}
                  >
                    {t('Yes')}
                  </Button>
                </Box>
              </Box>
            </ModalBody>
          </>
        )}
      </ModalContent>
    </Modal>
  )
}

export default InstallAppModal
