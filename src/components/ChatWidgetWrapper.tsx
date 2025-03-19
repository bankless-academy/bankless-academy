'use client'

import dynamic from 'next/dynamic'

// Dynamically import ChatWidget with SSR disabled
const ChatWidget = dynamic(() => import('./ChatWidget'), {
  ssr: false,
  loading: () => null,
})

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
