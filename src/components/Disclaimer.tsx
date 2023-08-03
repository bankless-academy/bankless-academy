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
import { DISCLAIMER_ENABLED } from 'constants/index'
import { useEffect } from 'react'
import ExternalLink from './ExternalLink'

const Disclaimer = ({
  accepted,
  onClose,
}: {
  accepted: () => void
  onClose: () => void
}): React.ReactElement => {
  const {
    isOpen: isOpenHelpModal,
    onOpen: onOpenHelpModal,
    onClose: onCloseHelpModal,
  } = useDisclosure()
  const initialRef = React.useRef(null)
  const [isMobileScreen] = useMediaQuery(['(max-width: 480px)'])

  useEffect(() => {
    if (DISCLAIMER_ENABLED) onOpenHelpModal()
    else accepted()
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
        <ModalHeader>Disclaimer</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Box>
            <Box mb="4">
              Remember, engaging in crypto is risky. This is the frontier of
              technology and finance, it’s not for everyone. Even the most
              trained Explorers{' '}
              <ExternalLink underline="true" href="/disclaimer">
                can lose what they put in
              </ExternalLink>{' '}
              — but in building expertise, you reduce risk.
            </Box>
            <Box mb="4" fontWeight="bold">
              Do you accept full responsibility for your own Bankless journey?
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
            Take me back
          </Button>

          <Button
            variant="primaryWhite"
            ref={initialRef}
            onClick={() => {
              accepted()
              onCloseHelpModal()
              onClose()
            }}
            ml="4"
          >
            Yes, let’s go!
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}

export default Disclaimer
