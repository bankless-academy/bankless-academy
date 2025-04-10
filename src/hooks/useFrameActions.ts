import { useCallback } from 'react'
import { useFrame } from 'components/providers/FrameProvider'

export function useFrameActions() {
  const { context, sdk } = useFrame()

  const openUrl = useCallback((url: string) => {
    if (typeof window !== 'undefined' && sdk?.actions?.openUrl) {
      sdk.actions.openUrl(url)
    }
  }, [sdk])

  const close = useCallback(() => {
    if (typeof window !== 'undefined' && sdk?.actions?.close) {
      sdk.actions.close()
    }
  }, [sdk])

  const ready = useCallback(() => {
    if (typeof window !== 'undefined' && sdk?.actions?.ready) {
      sdk.actions.ready()
    }
  }, [sdk])

  const composeCast = useCallback((text: string, link: string) => {
    if (typeof window !== 'undefined') {
      sdk.actions.composeCast({
        text,
        embeds: [
          link
        ],
      })
    }
  }, [sdk])

  return {
    context,
    openUrl,
    close,
    ready,
    composeCast,
  }
} 
