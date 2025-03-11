import { useState, useRef, useEffect } from 'react'
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
} from '@chakra-ui/react'
import { ChatIcon, ArrowForwardIcon } from '@chakra-ui/icons'
import { MacScrollbar } from 'mac-scrollbar'
import { HeadCircuit } from '@phosphor-icons/react'

import { useSmallScreen } from 'hooks'
import { DEFAULT_AVATAR } from 'constants/index'

interface Message {
  id: string
  text: string
  sender: 'user' | 'ai'
  timestamp: Date
}

export const ChatWidget = ({ avatar }: { avatar?: string }) => {
  const [, isSmallScreen] = useSmallScreen()
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: `gm! I'm the Bankless Academy assistant. How can I help you today?`,
      sender: 'ai',
      timestamp: new Date(),
    },
  ])
  const [newMessage, setNewMessage] = useState('')
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      const userMessage: Message = {
        id: Date.now().toString(),
        text: newMessage,
        sender: 'user',
        timestamp: new Date(),
      }
      setMessages([...messages, userMessage])
      setNewMessage('')

      // Simulate support response
      setTimeout(() => {
        const supportMessage: Message = {
          id: (Date.now() + 1).toString(),
          text: 'Thanks for your message! Our team will get back to you soon.',
          sender: 'ai',
          timestamp: new Date(),
        }
        setMessages((prev) => [...prev, supportMessage])
      }, 1000)
    }
  }

  return (
    <>
      <IconButton
        aria-label="Open chat"
        icon={<ChatIcon />}
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

      <Drawer isOpen={isOpen} placement="right" onClose={onClose} size="md">
        <DrawerOverlay />
        <DrawerContent bg="#161515">
          <DrawerCloseButton />
          <DrawerHeader borderBottomWidth="1px">
            Ask anything about crypto
          </DrawerHeader>

          <DrawerBody p={0}>
            <VStack spacing={0} height="full">
              <Box flex="1" width="full" overflowY="auto" bg="#1A1A1A">
                <MacScrollbar
                  skin="dark"
                  suppressScrollX={true}
                  style={{ maxHeight: '100%', paddingRight: '8px' }}
                >
                  <VStack spacing={4} align="stretch" p={4}>
                    {messages.map((message) => (
                      <HStack
                        key={message.id}
                        alignSelf={
                          message.sender === 'user' ? 'flex-end' : 'flex-start'
                        }
                        spacing={2}
                      >
                        {message.sender === 'ai' && (
                          <Avatar
                            size="sm"
                            icon={<HeadCircuit size={24} />}
                            bg="#916ab8"
                          />
                        )}
                        <Box
                          bg={
                            message.sender === 'user' ? '#916ab8' : 'gray.100'
                          }
                          color={message.sender === 'user' ? 'white' : 'black'}
                          borderRadius="lg"
                          px={4}
                          py={2}
                          maxW="80%"
                        >
                          <Text>{message.text}</Text>
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
                    ))}
                    <div ref={messagesEndRef} />
                  </VStack>
                </MacScrollbar>
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
                />
                <Button
                  variant="primary"
                  onClick={handleSendMessage}
                  rightIcon={<ArrowForwardIcon />}
                >
                  Send
                </Button>
              </HStack>
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  )
}

export default ChatWidget
