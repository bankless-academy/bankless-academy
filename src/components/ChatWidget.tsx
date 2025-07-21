'use client'

import { useState, useRef, useEffect } from 'react'
import { useRouter } from 'next/router'
import {
  Box,
  IconButton,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Input,
  VStack,
  HStack,
  Text,
  useDisclosure,
  Avatar,
  Button,
  useToast,
  Link,
  Image,
  Tooltip,
} from '@chakra-ui/react'
import { ArrowUpIcon, DeleteIcon } from '@chakra-ui/icons'
import { RiRobot2Line } from 'react-icons/ri'
import NextLink from 'next/link'
import { useLocalStorage } from 'usehooks-ts'
import NonSSRWrapper from 'components/NonSSRWrapper'
import dynamic from 'next/dynamic'

const MacScrollbar = dynamic(
  () => import('mac-scrollbar').then((mod) => ({ default: mod.MacScrollbar })),
  { ssr: false }
)

import { useSmallScreen } from 'hooks'
import { DEFAULT_AVATAR, LESSONS } from 'constants/index'
import Helper from 'components/Helper'

const GM_RESPONSES = [
  'gm Explorer! 🧑‍🚀',
  'Good morning, anon! 🌞',
  'gm, wagmi! 🫡',
  'gm! Ready to go bankless?',
  "gm gm! What's on your mind today?",
  'gm! How can I help you today?',
  'gm! What do you want to learn today?',
]

const DEFAULT_ANSWER = `I can only help with crypto, blockchain, and web3 related topics.`

const TELEGRAM_CTA = `💬 Join Telegram community`

interface Message {
  id: string
  text: string
  sender: 'user' | 'ai'
  timestamp: Date
  isThinking?: boolean
  lessonName?: string
  lessonLink?: string
  lessonImage?: string
}

interface AIResponse {
  response: string
  lessonName?: string
  lessonLink?: string
}

const getLessonImage = (lessonLink?: string): string | undefined => {
  if (!lessonLink) return undefined

  // Extract the slug from the lesson link (e.g., /lessons/web3 -> web3)
  const slug = lessonLink.split('/').pop()?.split('?')[0]

  // Find the lesson with matching slug
  const lesson = LESSONS.find((l) => l.slug === slug)

  return lesson?.socialImageLink
}

const getRandomGmResponse = (): string => {
  const randomIndex = Math.floor(Math.random() * GM_RESPONSES.length)
  return GM_RESPONSES[randomIndex]
}

export const ChatWidget = ({
  avatar,
  username,
  address,
}: {
  avatar?: string
  username?: string
  address: string
}) => {
  const router = useRouter()
  const [isSmallScreen] = useSmallScreen()
  const { isOpen, onOpen, onClose } = useDisclosure({
    defaultIsOpen: router.pathname === '/ai',
  })
  const [messages, setMessages] = useLocalStorage<Message[]>('chat-history', [
    {
      id: '1',
      text: `gm! I'm the Bankless Academy AI assistant. How can I help you today?`,
      sender: 'ai',
      timestamp: new Date(),
    },
  ])
  const [newMessage, setNewMessage] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const toast = useToast()
  const [userMessageCount, setUserMessageCount] = useState(0)
  const [lastTelegramMessageId, setLastTelegramMessageId] = useState<
    string | null
  >(null)

  // Reset counters when component mounts
  useEffect(() => {
    const userMessages = messages.filter((msg) => msg.sender === 'user').length
    setUserMessageCount(userMessages)
  }, [])

  const handleClearHistory = () => {
    setMessages([
      {
        id: Date.now().toString(),
        text: `gm! I'm the Bankless Academy AI assistant. How can I help you today?`,
        sender: 'ai',
        timestamp: new Date(),
      },
    ])
    setUserMessageCount(0)
    setLastTelegramMessageId(null)
    toast({
      title: 'Chat history cleared',
      status: 'success',
      duration: 2000,
      isClosable: true,
    })
  }

  const scrollToBottom = () => {
    // Try scrolling the messages container first
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTo({
        top: scrollContainerRef.current.scrollHeight,
        behavior: 'smooth',
      })
    }

    // Also scroll the message end marker into view as backup
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    // Add a small delay to ensure content is rendered
    const timeoutId = setTimeout(() => {
      scrollToBottom()
    }, 100)

    return () => clearTimeout(timeoutId)
  }, [messages])

  const handleSendMessage = async () => {
    if (newMessage.trim() && !isLoading) {
      const userMessage: Message = {
        id: Date.now().toString(),
        text: newMessage,
        sender: 'user',
        timestamp: new Date(),
      }

      // Check if message is "gm" (case insensitive)
      if (newMessage.trim().toLowerCase() === 'gm') {
        const gmResponse: Message = {
          id: (Date.now() + 1).toString(),
          text: getRandomGmResponse(),
          sender: 'ai',
          timestamp: new Date(),
        }
        setMessages((prev) => [...prev, userMessage, gmResponse])
        setNewMessage('')
        return
      }

      const thinkingMessage: Message = {
        id: 'thinking',
        text: '...',
        sender: 'ai',
        timestamp: new Date(),
        isThinking: true,
      }

      setMessages((prev) => [...prev, userMessage, thinkingMessage])
      setNewMessage('')
      setIsLoading(true)
      setUserMessageCount((prev) => prev + 1)

      try {
        const response = await fetch('/api/ai', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            prompt: newMessage,
            address: address,
            username: username,
          }),
        })

        const data: AIResponse = await response.json()

        if ('error' in data) {
          throw new Error(data.error as string)
        }

        const lessonImage = getLessonImage(data.lessonLink)

        const isSupportMessage = data.response === DEFAULT_ANSWER

        const supportLink = `/report-an-issue?context=ai`

        const supportMessage = `⁉️ If you need help related to the platform, contact us here`

        const aiMessage: Message = {
          id: (Date.now() + 1).toString(),
          text: data.response,
          sender: 'ai',
          timestamp: new Date(),
          lessonName: isSupportMessage ? supportMessage : data.lessonName,
          lessonLink: isSupportMessage ? supportLink : data.lessonLink,
          lessonImage,
        }

        // Replace thinking message with actual response
        setMessages((prev) => {
          const newMessages = prev
            .filter((msg) => !msg.isThinking)
            .concat(aiMessage)

          // Add Telegram message after second user question or every 5th message
          // Only if we haven't shown a Telegram message in the last 5 messages
          if (
            (userMessageCount === 1 || userMessageCount % 5 === 0) &&
            (!lastTelegramMessageId ||
              !newMessages.some((msg) => msg.id === lastTelegramMessageId))
          ) {
            const telegramMessageId = (Date.now() + 2).toString()
            const telegramMessage: Message = {
              id: telegramMessageId,
              text: `Join our Telegram community to ask more questions and connect with other learners:`,
              sender: 'ai',
              lessonName: TELEGRAM_CTA,
              lessonLink: 'https://bankless.ac/community',
              timestamp: new Date(),
            }
            setLastTelegramMessageId(telegramMessageId)
            return [...newMessages, telegramMessage]
          }

          return newMessages
        })
      } catch (error) {
        console.error('Error calling AI:', error)
        // Remove thinking message on error
        setMessages((prev) => prev.filter((msg) => !msg.isThinking))
        toast({
          title: 'Error',
          description: 'Failed to get AI response. Please try again.',
          status: 'error',
          duration: 5000,
          isClosable: true,
        })
      } finally {
        setIsLoading(false)
      }
    }
  }

  return (
    <>
      <Tooltip label="Bankless Academy AI" hasArrow placement="left">
        <IconButton
          aria-label="Open chat"
          icon={<RiRobot2Line size={26} />}
          position="fixed"
          bottom={isSmallScreen ? '24' : '4'}
          right="4"
          size="lg"
          bg="linear-gradient(135.91deg, #B06FD8 29.97%, #597AEE 99.26%)"
          _hover={{
            bg: 'linear-gradient(132deg, #67407E 0%, #354374 100%)',
            border: '1px solid #B85FF1',
          }}
          borderRadius="full"
          boxShadow="lg"
          onClick={onOpen}
          zIndex="overlay"
        />
      </Tooltip>

      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        size="md"
        returnFocusOnClose={false}
      >
        <DrawerOverlay />
        <DrawerContent bg="#161515">
          <DrawerHeader
            borderBottomWidth="1px"
            display="flex"
            alignItems="center"
            justifyContent="space-between"
            pr="12" // Add space for the close button
            position="relative"
          >
            <Box position="relative" pr="2">
              Ask anything about crypto
              <Helper
                title="Ask anything about crypto"
                definition="The Bankless Academy AI assistant is here to help you learn about crypto. You can only ask crypto related questions. This tool is not a financial advisor. Do your own research before investing in crypto."
              />
            </Box>
            <Button
              size="sm"
              variant="ghost"
              color="gray.400"
              _hover={{ color: 'white', bg: 'whiteAlpha.200' }}
              onClick={handleClearHistory}
              leftIcon={<DeleteIcon />}
              iconSpacing={isSmallScreen ? 0 : 2}
            >
              {isSmallScreen ? '' : 'Clear History'}
            </Button>
            <DrawerCloseButton
              position="absolute"
              right="12px"
              top="50%"
              transform="translateY(-50%)"
            />
          </DrawerHeader>

          <DrawerBody p={0}>
            <VStack spacing={0} height="full">
              <Box
                flex="1"
                width="full"
                overflowY="auto"
                bg="#1A1A1A"
                ref={scrollContainerRef}
              >
                <NonSSRWrapper>
                  <MacScrollbar
                    skin="dark"
                    suppressScrollX={true}
                    style={{ maxHeight: '100%', paddingRight: '8px' }}
                  >
                    <VStack spacing={4} align="stretch" p={4}>
                      {messages.map((message) => {
                        const isSupportMessage =
                          message.text === DEFAULT_ANSWER ||
                          message.lessonName === TELEGRAM_CTA
                        return (
                          <HStack
                            key={message.id}
                            alignSelf={
                              message.sender === 'user'
                                ? 'flex-end'
                                : 'flex-start'
                            }
                            spacing={2}
                            opacity={message.isThinking ? 0.7 : 1}
                          >
                            {message.sender === 'ai' && (
                              <Avatar
                                size="sm"
                                icon={<RiRobot2Line size={20} />}
                                bg="#916ab8"
                              />
                            )}
                            <Box
                              bg={
                                message.sender === 'user'
                                  ? '#916ab8'
                                  : 'gray.100'
                              }
                              color={
                                message.sender === 'user' ? 'white' : 'black'
                              }
                              borderRadius="lg"
                              px={4}
                              py={2}
                              maxW="80%"
                            >
                              <Text>
                                {message.isThinking ? (
                                  <Box as="span" animation="pulse 1s infinite">
                                    Thinking...
                                  </Box>
                                ) : (
                                  message.text
                                )}
                              </Text>
                              {message.lessonName && message.lessonLink && (
                                <NextLink href={message.lessonLink} passHref>
                                  <Link
                                    display="block"
                                    color="#B85FF1"
                                    mt={2}
                                    _hover={{ textDecoration: 'none' }}
                                  >
                                    <VStack align="start" spacing={2}>
                                      <Text fontSize="sm">
                                        {isSupportMessage ? (
                                          <Text>{message.lessonName}</Text>
                                        ) : (
                                          <Text>
                                            📚 Learn more: {message.lessonName}
                                          </Text>
                                        )}
                                      </Text>
                                      {message.lessonImage && (
                                        <Image
                                          src={message.lessonImage}
                                          alt={message.lessonName}
                                          borderRadius="md"
                                          width="100%"
                                          height="auto"
                                          objectFit="cover"
                                        />
                                      )}
                                    </VStack>
                                  </Link>
                                </NextLink>
                              )}
                            </Box>
                            {message.sender === 'user' && (
                              <Avatar
                                size="sm"
                                src={avatar || DEFAULT_AVATAR}
                                name="You"
                                bg="gray.500"
                              />
                            )}
                          </HStack>
                        )
                      })}
                      <div ref={messagesEndRef} />
                    </VStack>
                  </MacScrollbar>
                </NonSSRWrapper>
              </Box>

              <HStack width="full" spacing={2} p={4}>
                <Input
                  placeholder="Type your message..."
                  value={newMessage}
                  onChange={(e) => setNewMessage(e.target.value)}
                  onKeyPress={(e) => {
                    if (e.key === 'Enter') {
                      handleSendMessage()
                    }
                  }}
                  _focus={{
                    borderColor: '#af6ed7',
                  }}
                  isDisabled={isLoading}
                />
                <Button
                  variant="primary"
                  onClick={handleSendMessage}
                  iconSpacing={0}
                  rightIcon={<ArrowUpIcon />}
                  isLoading={isLoading}
                  loadingText=""
                ></Button>
              </HStack>
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  )
}

export default ChatWidget
