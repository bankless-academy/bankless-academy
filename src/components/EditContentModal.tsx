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
import { diffWords } from 'utils/textDiff'
import { useTranslation } from 'react-i18next'

import { LessonType, SlideType } from 'entities/lesson'
import { useAccount } from 'wagmi'

const EditContentModal = ({
  lesson,
  slide,
  iconOnly,
}: {
  lesson: LessonType
  iconOnly?: boolean
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
  const [title, setTitle] = useState(slide.title || '')
  const [comment, setComment] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)

  // The heading is part of the slide's markdown and is translated like any
  // other copy, so it should be suggestible. Quiz headings are the exception:
  // build-content.js derives the slide title from `Knowledge Check <n>` and the
  // numbering has to stay sequential, so those stay read-only.
  const isTitleEditable = slide.type !== 'QUIZ' && slide.type !== 'POLL'

  // Contributors edit a raw markdown blob, which makes it easy to change more
  // than you meant to. Show what actually changed before they submit.
  const contentChanged = suggestion !== originalContent
  const parts = contentChanged ? diffWords(originalContent, suggestion) : []

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
          // the ORIGINAL title stays the identifier so a maintainer can still
          // find the slide even when the suggestion renames it
          slide: slide.title,
          suggestedTitle:
            isTitleEditable && title.trim() && title.trim() !== slide.title
              ? title.trim()
              : undefined,
          suggestion,
          originalContent,
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
          aria-label={t(`Suggest Changes`)}
          leftIcon={
            <NotePencil
              width={iconOnly ? '20px' : '24px'}
              height={iconOnly ? '20px' : '24px'}
            />
          }
          iconSpacing={iconOnly ? 0 : undefined}
          variant={iconOnly ? 'ghost' : 'outline'}
          size={iconOnly ? 'sm' : undefined}
          opacity={iconOnly ? 0.5 : 1}
          _hover={iconOnly ? { opacity: 1, bg: 'whiteAlpha.200' } : undefined}
          p={iconOnly ? '0' : undefined}
          // match the neighbouring `?` IconButton exactly: Chakra's size="sm"
          // IconButton is a 32px round target, this one was a rounded rect
          minW={iconOnly ? '32px' : undefined}
          w={iconOnly ? '32px' : undefined}
          h={iconOnly ? '32px' : undefined}
          borderRadius={iconOnly ? 'full' : undefined}
          onClick={onOpenModal}
        >
          {iconOnly || isSmallScreen ? '' : t(`Suggest Changes`)}
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
            <Input
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              isReadOnly={!isTitleEditable}
              mb="4"
              bg="blackAlpha.300"
            />
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
            {contentChanged && (
              <>
                <Text fontWeight="bold" mb="1">
                  {t('Your changes')}
                </Text>
                <Box
                  mb="4"
                  p="3"
                  bg="blackAlpha.300"
                  borderRadius="md"
                  maxH="220px"
                  overflowY="auto"
                  whiteSpace="pre-wrap"
                  fontSize="sm"
                  lineHeight="1.6"
                >
                  {parts.map((part, i) => (
                    <Box
                      key={i}
                      as="span"
                      bg={
                        part.added
                          ? 'rgba(72, 187, 120, 0.35)'
                          : part.removed
                          ? 'rgba(245, 101, 101, 0.35)'
                          : 'transparent'
                      }
                      textDecoration={part.removed ? 'line-through' : 'none'}
                      opacity={part.removed ? 0.8 : 1}
                    >
                      {part.value}
                    </Box>
                  ))}
                </Box>
              </>
            )}
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
                  (suggestion === originalContent &&
                    title.trim() === (slide.title || '') &&
                    !comment.trim())
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
