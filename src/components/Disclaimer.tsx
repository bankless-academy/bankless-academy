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
import { useEffect } from 'react'

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
  const [isMobileScreen] = useMediaQuery(['(max-width: 480px)'])

  useEffect(() => {
    onOpenHelpModal()
  }, [])

  return (
    <Modal
      onClose={() => {
        onCloseHelpModal()
        onClose()
      }}
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
        maxH="100vh"
      >
        <ModalHeader>Disclaimer</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Box>
            <Box mb="4">
              This website does not contain financial or tax advice. Bankless
              Academy is strictly educational and is not investment advice or a
              solicitation to buy or sell any assets or make any financial
              decisions. Talk to your accountant. Do your own research.
            </Box>
          </Box>
        </ModalBody>
        <ModalFooter m="auto">
          <Button
            onClick={() => {
              accepted()
              onCloseHelpModal()
              onClose()
            }}
          >
            Got it
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}

export default Disclaimer
