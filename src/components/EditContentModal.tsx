import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalOverlay,
  Button,
  useDisclosure,
  useMediaQuery,
  Tooltip,
  Box,
  Text,
  Input,
  Textarea,
  useToast,
} from '@chakra-ui/react'
import { useState } from 'react'
import { NotePencil } from '@phosphor-icons/react'
import { useSmallScreen } from 'hooks/index'
import { useTranslation } from 'react-i18next'

import { LessonType, SlideType } from 'entities/lesson'
import { useAccount } from 'wagmi'

const EditContentModal = ({
  lesson,
  slide,
}: {
  lesson: LessonType
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
  const { t, i18n } = useTranslation()
  const {
    isOpen: isOpenModal,
    onOpen: onOpenModal,
    onClose: onCloseModal,
  } = useDisclosure()
  const [, isSmallScreen] = useSmallScreen()
  const [isMobileScreen] = useMediaQuery(['(max-width: 480px)'])
  const { address } = useAccount()
  const toast = useToast()

  // don't reveal which quiz option is the correct one
  const originalContent = (slide.md || '').replaceAll('- [x] ', '- [ ] ')
  const [suggestion, setSuggestion] = useState(originalContent)
  const [comment, setComment] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)

  // deprecated lessons are frozen for history: no content suggestions
  if (lesson.publicationStatus === 'deprecated') return <></>

  const submit = async () => {
    setIsSubmitting(true)
    try {
      const res = await fetch('/api/suggest-content', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          lesson: lesson.englishName,
          slide: slide.title,
          suggestion,
          comment,
          wallet: address || '',
          language: i18n.language,
        }),
      })
      const data = await res.json()
      if (res.ok) {
        toast({
          title: t('Thank you! Your suggestion has been submitted.'),
          status: 'success',
          duration: 8000,
          isClosable: true,
        })
        setComment('')
        onCloseModal()
      } else {
        toast({
          title: data?.error || t('Could not submit suggestion.'),
          status: 'warning',
          duration: 8000,
          isClosable: true,
        })
      }
    } catch (error) {
      toast({
        title: t('Could not submit suggestion.'),
        status: 'warning',
        duration: 8000,
        isClosable: true,
      })
    } finally {
      setIsSubmitting(false)
    }
  }

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
          {isSmallScreen ? '' : t(`Suggest Changes`)}
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
          <ModalHeader>{t(`Content suggestion`)}</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb="6">
            <Text fontWeight="bold" mb="1">
              {t('Slide Title')}
            </Text>
            <Input value={slide.title} isReadOnly mb="4" bg="blackAlpha.300" />
            <Text fontWeight="bold" mb="1">
              {t('Suggested Content')}
            </Text>
            <Textarea
              value={suggestion}
              onChange={(e) => setSuggestion(e.target.value)}
              minH="280px"
              mb="4"
              bg="blackAlpha.300"
            />
            <Text fontWeight="bold" mb="1">
              {t('Comment')}
            </Text>
            <Textarea
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              placeholder={t('Add any comment here ...')}
              minH="80px"
              mb="6"
              bg="blackAlpha.300"
            />
            <Box textAlign="center">
              <Button
                variant="primary"
                onClick={submit}
                isLoading={isSubmitting}
                isDisabled={
                  !suggestion.trim() ||
                  (suggestion === originalContent && !comment.trim())
                }
              >
                {t('Submit suggestion')}
              </Button>
            </Box>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  )
}

export default EditContentModal
