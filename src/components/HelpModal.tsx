import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalOverlay,
  ModalFooter,
  Button,
} from '@chakra-ui/react'
import { Global, css } from '@emotion/react'
import { ReactNode } from 'react'

const HelpModal = ({
  isOpen,
  onClose,
  title,
  definition,
}: {
  isOpen: boolean
  onClose: () => void
  title: ReactNode
  definition: ReactNode
}): React.ReactElement => (
  <Modal onClose={onClose} size="xs" isOpen={isOpen} isCentered>
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
    <ModalOverlay />
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
      <ModalHeader>{title}</ModalHeader>
      <ModalCloseButton />
      <ModalBody>{definition}</ModalBody>
      <ModalFooter m="auto">
        <Button onClick={onClose}>Got it</Button>
      </ModalFooter>
    </ModalContent>
  </Modal>
)

export default HelpModal
