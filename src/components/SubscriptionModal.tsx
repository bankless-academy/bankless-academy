import React, { useState } from 'react'
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
import { Envelope } from 'phosphor-react'

import { LessonType } from 'entities/lesson'
import { api, Mixpanel } from 'utils'

const SubscriptionModal = ({
  isOpen,
  onClose,
  lesson,
}: {
  isOpen: boolean
  onClose: () => void
  lesson?: LessonType
}): React.ReactElement => {
  const toast = useToast()
  const [email, setEmail] = useState(localStorage.getItem('email'))
  const emailRegex =
    // eslint-disable-next-line no-useless-escape
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
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
            ? `Subscribe to '${lesson.name}' notifications`
            : 'Newsletter'}
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <InputGroup size="lg">
            <InputLeftElement pointerEvents="none">
              <Envelope size="32" />
            </InputLeftElement>
            <Input
              backgroundColor="black"
              placeholder="Enter your email address..."
              type="email"
              value={email}
              mb="8"
              onChange={(e): void => {
                setEmail(e.target.value)
                localStorage.setItem('email', e.target.value)
              }}
            />
          </InputGroup>
          <Box textAlign="right" mb="6">
            <Button
              size="lg"
              variant="primaryWhiteBig"
              onClick={async () => {
                toast.closeAll()
                if (!email)
                  toast({
                    title: 'Email missing',
                    description: 'Provide an email.',
                    status: 'warning',
                    duration: 10000,
                  })
                else if (emailRegex.test(email) === false)
                  toast({
                    title: 'Wrong email format',
                    description: 'Please check your email.',
                    status: 'warning',
                    duration: 10000,
                  })
                else {
                  const paramBE = lesson ? { notionId: lesson.notionId } : {}
                  const result = await api('/api/subscribe-newsletter', {
                    email,
                    ...paramBE,
                  })
                  if (result && result.status === 200) {
                    localStorage.setItem(
                      `${
                        lesson ? `${lesson.slug}-notification` : 'newsletter'
                      }`,
                      'true'
                    )
                    const paramStats = lesson ? { lesson: lesson.name } : {}
                    Mixpanel.track(
                      lesson ? 'subscribe_lesson' : 'subscribe_newsletter',
                      {
                        email: email,
                        ...paramStats,
                      }
                    )
                    toast({
                      title: 'Thanks for subscribing Explorer 🧑‍🚀',
                      description: "You'll hear from us soon!",
                      status: 'success',
                      duration: 10000,
                    })
                  } else {
                    toast({
                      title:
                        "Wrong went wrong ... we couldn't add your subscription.",
                      description: 'Please try again later.',
                      status: 'warning',
                      duration: 10000,
                    })
                  }
                  onClose()
                }
              }}
            >
              {lesson ? 'Notify me' : 'Subscribe'}
            </Button>
          </Box>
        </ModalBody>
      </ModalContent>
    </Modal>
  )
}

export default SubscriptionModal
