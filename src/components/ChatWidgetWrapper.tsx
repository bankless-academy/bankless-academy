'use client'

import { Suspense } from 'react'
import dynamic from 'next/dynamic'

// Dynamically import ChatWidget with SSR disabled and explicit module resolution
const ChatWidget = dynamic(
  () => import('./ChatWidget').then((mod) => mod.default),
  {
    ssr: false,
    loading: () => null,
  }
)

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

  return (
    <Suspense fallback={null}>
      <ChatWidget avatar={avatar} username={username} address={address} />
    </Suspense>
  )
} 
