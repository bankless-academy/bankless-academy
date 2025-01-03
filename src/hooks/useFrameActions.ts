import { useCallback } from 'react'
import sdk from '@farcaster/frame-sdk'
import { useFrame } from 'components/providers/FrameProvider'

export function useFrameActions() {
  const { context } = useFrame()

  const openUrl = useCallback((url: string) => {
    sdk.actions.openUrl(url)
  }, [])

  const close = useCallback(() => {
    sdk.actions.close()
  }, [])

  const ready = useCallback(() => {
    sdk.actions.ready()
  }, [])

  return {
    context,
    openUrl,
    close,
    ready,
  }
} 
