import React from 'react'
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  Box,
} from '@chakra-ui/react'

const NewsletterModal = ({
  isOpen,
  onClose,
}: {
  isOpen: boolean
  onClose: () => void
}): React.ReactElement => (
  <Modal onClose={onClose} size={'xl'} isOpen={isOpen}>
    <ModalOverlay />
    <ModalContent bg="linear-gradient(135.91deg, #B06FD8 29.97%, #597AEE 99.26%)">
      <ModalHeader>Newsletter</ModalHeader>
      <ModalCloseButton />
      <ModalBody>
        <Box
          display="flex"
          flexShrink="initial"
          justifyContent="center"
          p="8"
          borderRadius="lg"
          width="100%"
        >
          <iframe
            height="320px"
            width="320px"
            style={{ maxWidth: '100%' }}
            scrolling="yes"
            src="https://cdn.forms-content.sg-form.com/21588aac-6045-11ed-a92e-a663f73c8296"
          ></iframe>
        </Box>
      </ModalBody>
    </ModalContent>
  </Modal>
)

export default NewsletterModal
