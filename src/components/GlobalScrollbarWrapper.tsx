import { useEffect, useState } from 'react'
import dynamic from 'next/dynamic'

const MacScrollbar = dynamic(
  () => import('mac-scrollbar').then((mod) => ({ default: mod.MacScrollbar })),
  { 
    ssr: false,
    loading: () => null
  }
)

interface GlobalScrollbarWrapperProps {
  isMobile: boolean
  isTelegramWebApp: boolean
  children: React.ReactNode
}

const GlobalScrollbarWrapper = ({ isMobile, isTelegramWebApp, children }: GlobalScrollbarWrapperProps) => {
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  if (!isClient || isMobile || isTelegramWebApp) {
    return <>{children}</>
  }

  return (
    <MacScrollbar skin="dark" style={{ height: '100vh', width: '100vw' }}>
      {children}
    </MacScrollbar>
  )
}

export default GlobalScrollbarWrapper 
