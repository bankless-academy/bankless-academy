'use client'

import { createContext, useContext, useEffect, useState } from 'react'
import sdk, { type FrameContext } from '@farcaster/frame-sdk'

interface FrameContextValue {
  context: FrameContext | undefined
  isSDKLoaded: boolean
}

const FrameContext = createContext<FrameContextValue | undefined>(undefined)

interface FrameProviderProps {
  children: React.ReactNode
}

export function FrameProvider({ children }: FrameProviderProps) {
  const [isSDKLoaded, setIsSDKLoaded] = useState(false)
  const [context, setContext] = useState<FrameContext>()

  useEffect(() => {
    const load = async () => {
      setContext(await sdk.context)
      sdk.actions.ready()
    }
    if (sdk && !isSDKLoaded) {
      setIsSDKLoaded(true)
      load()
    }
  }, [isSDKLoaded])

  if (!isSDKLoaded) {
    return <div>Loading...</div>
  }

  return (
    <FrameContext.Provider value={{ context, isSDKLoaded }}>
      {children}
    </FrameContext.Provider>
  )
}

export function useFrame() {
  const context = useContext(FrameContext)
  if (context === undefined) {
    throw new Error('useFrame must be used within a FrameProvider')
  }
  return context
}
