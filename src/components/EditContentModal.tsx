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
} from '@chakra-ui/react'
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
          <ModalBody>
            <Box w="100%" h="100%" padding="0" backgroundColor="transparent">
              <iframe
                src={`https://form.bankless.ac/suggest-slide-changes?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1&wallet=${address}&slide=${encodeURIComponent(
                  `${lesson.englishName} > ${slide.title}`
                )}&slide_link=${encodeURIComponent(
                  `https://www.notion.so/${lesson.notionId}#${
                    slide.notionId || ''
                  }`
                )}&title=${encodeURIComponent(
                  slide.title
                )}&language=${encodeURIComponent(
                  i18n.language
                )}&content=${encodeURIComponent(slide.md || '')}`}
                style={{
                  colorScheme: 'none',
                }}
                loading="lazy"
                width="100%"
                height="812px"
                title="Suggest slide changes"
              ></iframe>
            </Box>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  )
}

export default EditContentModal
