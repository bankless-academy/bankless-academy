import React from 'react'
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  Input,
  Button,
  Box,
  InputGroup,
  InputLeftElement,
  useToast,
} from '@chakra-ui/react'
import { Envelope } from '@phosphor-icons/react'
import { useTranslation } from 'react-i18next'

import { LessonType } from 'entities/lesson'
import { api, emailRegex, Mixpanel } from 'utils/index'
import { useAccount } from 'wagmi'
import { useLocalStorage } from 'usehooks-ts'

const SubscriptionModal = ({
  isOpen,
  onClose,
  lesson,
}: {
  isOpen: boolean
  onClose: () => void
  lesson?: LessonType
}): React.ReactElement => {
  const { t } = useTranslation()
  const toast = useToast()
  const { address } = useAccount()
  const [ens] = useLocalStorage(`name-cache`, {})
  const [email, setEmail] = useLocalStorage('email', '')

  return (
    <Modal onClose={onClose} size={'xl'} isCentered isOpen={isOpen}>
      <ModalOverlay backdropFilter="blur(10px)" />
      <ModalContent
        bg="linear-gradient(180deg, #a379bd82 0%, #5a519882 100%)"
        border="2px solid #B68BCC"
        borderRadius="3xl"
        backdropFilter="blur(10px)"
      >
        <ModalHeader>
          {lesson
            ? t(`Subscribe to {{lesson_title}} notifications`, {
                lesson_title: lesson.name,
                interpolation: { escapeValue: false },
              })
            : t('Newsletter')}
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <InputGroup size="lg">
            <InputLeftElement pointerEvents="none">
              <Envelope size="32" />
            </InputLeftElement>
            <Input
              backgroundColor="black"
              placeholder={t('Enter your email address...')}
              type="email"
              value={email}
              mb="8"
              onChange={(e): void => {
                setEmail(e.target.value)
              }}
            />
          </InputGroup>
          <Box textAlign="right" mb="6">
            <Button
              size="lg"
              variant="primaryWhite"
              onClick={async () => {
                toast.closeAll()
                if (!email)
                  toast({
                    title: t('Email missing'),
                    description: t('Provide an email.'),
                    status: 'warning',
                    duration: 10000,
                    isClosable: true,
                  })
                else if (emailRegex.test(email) === false)
                  toast({
                    title: t('Wrong email format'),
                    description: t('Please check your email.'),
                    status: 'warning',
                    duration: 10000,
                    isClosable: true,
                  })
                else {
                  const paramBE = lesson ? { notionId: lesson.notionId } : {}
                  const addressLower = address?.toLowerCase()
                  const result = await api('/api/subscribe-newsletter', {
                    email,
                    wallet: address,
                    ens:
                      addressLower &&
                      addressLower in ens &&
                      !ens[addressLower]?.name?.includes('...')
                        ? ens[addressLower]?.name
                        : undefined,
                    ...paramBE,
                  })
                  if (result && result.status === 200) {
                    localStorage.setItem(
                      `${
                        lesson ? `${lesson.slug}-notification` : 'newsletter'
                      }`,
                      'true'
                    )
                    const paramStats = lesson
                      ? { lesson: lesson.englishName }
                      : {}
                    Mixpanel.track(
                      lesson ? 'subscribe_lesson' : 'subscribe_newsletter',
                      {
                        email: email,
                        ...paramStats,
                      }
                    )
                    toast({
                      title: t('Thanks for subscribing Explorer 🧑‍🚀'),
                      description: t(`You'll hear from us soon!`),
                      status: 'success',
                      duration: 10000,
                      isClosable: true,
                    })
                  } else {
                    toast({
                      title: t(
                        `Something went wrong... we couldn't add your subscription.`
                      ),
                      description: t('Please try again later.'),
                      status: 'warning',
                      duration: 10000,
                      isClosable: true,
                    })
                  }
                  onClose()
                }
              }}
            >
              {lesson ? t('Notify me') : t('Subscribe')}
            </Button>
          </Box>
        </ModalBody>
      </ModalContent>
    </Modal>
  )
}

export default SubscriptionModal
