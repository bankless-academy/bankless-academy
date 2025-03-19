'use client'

import ChatWidget from 'components/ChatWidget'

interface ChatWidgetWrapperProps {
  avatar?: string
  isLessonOpen?: boolean
  address: string
  username?: string
}

export default function ChatWidgetWrapper({
  avatar,
  isLessonOpen,
  address,
  username,
}: ChatWidgetWrapperProps) {
  if (isLessonOpen) return null
  return <ChatWidget avatar={avatar} username={username} address={address} />
}
