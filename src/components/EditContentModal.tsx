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
  Input,
  Tooltip,
  Textarea,
} from '@chakra-ui/react'
import { NotePencil } from '@phosphor-icons/react'
import { useSmallScreen } from 'hooks'
import { useTranslation } from 'react-i18next'

import { SlideType } from 'entities/lesson'
import { useState } from 'react'

const EditContentModal = ({
  slide,
}: {
  slide: {
    type: SlideType
    title: string
    notionId?: string
    content?: string
    quiz?: {
      id: string
      question: string
      answers: string[]
      feedback?: string[]
      rightAnswerNumber?: number
    }
    md?: string
  }
}): React.ReactElement => {
  const { t } = useTranslation()
  const {
    isOpen: isOpenModal,
    onOpen: onOpenModal,
    onClose: onCloseModal,
  } = useDisclosure()
  const [, isSmallScreen] = useSmallScreen()
  const [isMobileScreen] = useMediaQuery(['(max-width: 480px)'])
  const [title, setTitle] = useState<string>(slide.title)
  const [content, setContent] = useState<string>(slide.md)
  const [comment, setComment] = useState<string>('')

  return (
    <>
      <Tooltip
        hasArrow
        label={t('Help us improve the content by suggesting changes')}
      >
        <Button
          leftIcon={<NotePencil width="24px" height="24px" />}
          variant="outline"
          onClick={onOpenModal}
        >
          {isSmallScreen ? '' : `suggest changes`}
        </Button>
      </Tooltip>
      <Modal
        onClose={onCloseModal}
        size={isMobileScreen ? 'full' : '3xl'}
        isOpen={isOpenModal}
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
          <ModalHeader>Content suggestion</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {slide.type === 'LEARN' && (
              <>
                Slide Title
                <Input
                  background="whiteAlpha.400"
                  height="40px"
                  value={title}
                  onChange={(e): void => {
                    setTitle(e.target.value)
                  }}
                />
              </>
            )}
            Slide Content
            <Textarea
              background="whiteAlpha.400"
              height={isMobileScreen ? '400px' : '300px'}
              value={content}
              onChange={(e): void => {
                setContent(e.target.value)
              }}
            />
            Comment
            <Textarea
              background="whiteAlpha.400"
              placeholder="Add any comment here ..."
              value={comment}
              onChange={(e): void => {
                setComment(e.target.value)
              }}
            />
          </ModalBody>
          <ModalFooter m="auto">
            <Button onClick={onCloseModal}>{t('Submit suggestion')}</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}

export default EditContentModal
