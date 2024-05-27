import React from 'react'
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalOverlay,
  ModalFooter,
  Button,
  useDisclosure,
  useMediaQuery,
  Box,
} from '@chakra-ui/react'
import { useTranslation } from 'react-i18next'
import useSound from 'use-sound'

import { DISCLAIMER_ENABLED } from 'constants/index'
import { useEffect } from 'react'
import ExternalLink from 'components/ExternalLink'
import { LessonType } from 'entities/lesson'
import soundCorrect from 'sound/correct.mp3'

const Disclaimer = ({
  lesson,
  accepted,
  onClose,
}: {
  lesson: LessonType
  accepted: () => void
  onClose: () => void
}): React.ReactElement => {
  const [playCorrect] = useSound(soundCorrect)
  const {
    isOpen: isOpenHelpModal,
    onOpen: onOpenHelpModal,
    onClose: onCloseHelpModal,
  } = useDisclosure()
  const { t } = useTranslation()
  const initialRef = React.useRef(null)
  const [isMobileScreen] = useMediaQuery(['(max-width: 480px)'])

  useEffect(() => {
    const currentTimestamp = Math.floor(Date.now() / 1000)
    const disclaimerTimestamp =
      parseInt(localStorage.getItem(`disclaimer-${lesson.slug}`)) || 0
    const skipDisclaimer = currentTimestamp - disclaimerTimestamp < 60 * 60 * 24
    if (!DISCLAIMER_ENABLED || skipDisclaimer) accepted()
    else onOpenHelpModal()
  }, [])

  return (
    <Modal
      onClose={() => {
        onCloseHelpModal()
        onClose()
      }}
      initialFocusRef={initialRef}
      size={isMobileScreen ? 'full' : 'lg'}
      isOpen={isOpenHelpModal}
      isCentered
    >
      <ModalOverlay />
      <ModalContent
        bg="linear-gradient(180deg, #a379bdcc 0%, #5a5198cc 100%)"
        border={isMobileScreen ? '0' : '2px solid #B68BCC'}
        borderRadius={isMobileScreen ? '0' : '3xl'}
        backdropFilter="blur(10px)"
        overflowY="auto"
        maxH="var(--chakra-vh)"
      >
        <ModalHeader>{t('Disclaimer')}</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Box>
            <Box mb="4">
              {t('Remember, engaging in crypto is risky.')}{' '}
              {t(
                'This is the frontier of technology and finance, it’s not for everyone.'
              )}{' '}
              {t(
                'Even the most trained Explorers can lose what they put in — but in building expertise, you reduce risk.'
              )}
            </Box>
            <Box mb="4" fontWeight="bold">
              <ExternalLink underline="true" href="/disclaimer">
                {t(
                  'Do you accept full responsibility for your own Bankless journey?'
                )}
              </ExternalLink>
            </Box>
            {/* <Box
              mb="4"
              minW="200px"
              w="calc(100vh - 375px)"
              maxW="90%"
              m="auto"
            >
              <video autoPlay loop playsInline muted>
                <source
                  src="https://openseauserdata.com/files/fafb924293e3b909b4eb5c803fe11e6e.mp4"
                  type="video/mp4"
                ></source>
              </video>
            </Box> */}
          </Box>
        </ModalBody>
        <ModalFooter>
          <Button
            variant="secondaryWhite"
            onClick={() => {
              onCloseHelpModal()
              onClose()
            }}
          >
            {t('Take me back')}
          </Button>

          <Button
            variant="primaryWhite"
            ref={initialRef}
            onClick={() => {
              playCorrect()
              accepted()
              onCloseHelpModal()
              onClose()
            }}
            ml="4"
          >
            {t('Yes, let’s go!')}
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}

export default Disclaimer
