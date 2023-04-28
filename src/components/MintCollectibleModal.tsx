import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  useMediaQuery,
} from '@chakra-ui/react'

import { LessonType } from 'entities/lesson'

const MintCollectibleModal = ({
  isOpen,
  onClose,
}: {
  isOpen: boolean
  onClose: () => void
  lesson?: LessonType
}): React.ReactElement => {
  const [isMobileScreen] = useMediaQuery(['(max-width: 480px)'])
  return (
    <Modal
      onClose={onClose}
      size={isMobileScreen ? 'full' : 'md'}
      isCentered
      isOpen={isOpen}
    >
      <ModalOverlay backdropFilter="blur(10px)" />
      <ModalContent
        bg="linear-gradient(180deg, #a379bd82 0%, #5a519882 100%)"
        border={isMobileScreen ? '0' : '2px solid #B68BCC'}
        borderRadius={isMobileScreen ? '0' : '3xl'}
        backdropFilter="blur(10px)"
      >
        <ModalHeader>Collect Lesson</ModalHeader>
        <ModalCloseButton />
        <ModalBody padding={isMobileScreen ? '0' : 'default'}>
          <iframe
            src="/mint.html?collection=64413093d296198479460ad0"
            frameBorder="0"
            style={{
              width: isMobileScreen ? '100%' : '400px',
              height: '647px',
              margin: 'auto',
            }}
          ></iframe>
        </ModalBody>
      </ModalContent>
    </Modal>
  )
}

export default MintCollectibleModal
