import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  useMediaQuery,
  Box,
} from '@chakra-ui/react'

import { LessonType } from 'entities/lesson'

const MintCollectibleModal = ({
  isOpen,
  onClose,
  lesson,
}: {
  isOpen: boolean
  onClose: () => void
  lesson: LessonType
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
        overflowY="auto"
        maxH="100vh"
      >
        <ModalHeader>
          Collect Lesson
          <Box mt="4" fontSize="md" fontWeight="normal">
            Bankless Academy is issuing a small quantity of collectible
            DataDisk™ devices in an evolving effort to decentralize Bankless
            Academy content. Collect yours to{' '}
            <b>become a Guardian of Bankless Academy</b>, and retroactively fund
            education public goods!
          </Box>
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody padding={isMobileScreen ? '0' : 'default'}>
          {lesson.LessonCollectibleMintID && (
            <iframe
              src={`/mint.html?collection=${lesson.LessonCollectibleMintID}`}
              frameBorder="0"
              style={{
                width: isMobileScreen ? '100%' : '400px',
                height: '650px',
                margin: 'auto',
              }}
            ></iframe>
          )}
        </ModalBody>
      </ModalContent>
    </Modal>
  )
}

export default MintCollectibleModal
