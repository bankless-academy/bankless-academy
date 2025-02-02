/* eslint-disable no-console */
// https://github.com/farcasterxyz/frames-v2-demo
// https://github.com/farcasterxyz/frames/tree/main/packages/frame-host
import { useState, useEffect, useRef } from 'react'
import type { FrameContext } from '@farcaster/frame-sdk'

const FRAME_ID = 'bankless-academy-frame'
const FIVE_SECONDS = 8000

interface FrameNotificationDetails {
  url: string
  token: string
}

interface FrameEndpoint {
  emit: (event: any) => void
  emitEthProvider: (event: string, params: any) => void
}

export default function FarcasterFrame() {
  const [frameUrl, setFrameUrl] = useState<string | null>(null)
  const [isInitialized, setIsInitialized] = useState(false)
  const [context, setContext] = useState<FrameContext | null>(null)
  const [notificationDetails, setNotificationDetails] =
    useState<FrameNotificationDetails | null>(null)
  const iframeRef = useRef<HTMLIFrameElement | null>(null)
  const containerRef = useRef<HTMLDivElement | null>(null)
  const endpointRef = useRef<FrameEndpoint | null>(null)

  const createEndpoint = (iframe: HTMLIFrameElement) => {
    if (!iframe.contentWindow) return null

    return {
      emit: (event) => {
        console.debug('frameEvent', event)
        iframe.contentWindow?.postMessage(
          {
            type: 'frameEvent',
            event,
          },
          '*'
        )
      },
      emitEthProvider: (event, params) => {
        console.debug('fc:emitEthProvider', event, params)
        iframe.contentWindow?.postMessage(
          {
            type: 'frameEthProviderEvent',
            event,
            params,
          },
          '*'
        )
      },
    }
  }

  const handleInit = () => {
    setIsInitialized(true)
  }

  const createIframe = async () => {
    return new Promise<void>((resolve, reject) => {
      const messageHandler = (event: MessageEvent) => {
        // Only accept messages from our iframe
        if (event.source === iframeRef.current?.contentWindow) {
          try {
            const data = event.data
            console.log('data', data)

            // Handle different message types
            if (data.type === 'frameEvent') {
              console.debug('Received frameEvent:', data.event)
            } else if (data.type === 'frameEthProviderEvent') {
              console.debug(
                'Received frameEthProviderEvent:',
                data.event,
                data.params
              )
            }

            if (data.context) {
              setContext(data.context)
              handleInit()
              window.removeEventListener('message', messageHandler)
              clearTimeout(timeoutId)
              resolve()
            }
          } catch (error) {
            console.error('Error processing message:', error)
          }
        }
      }

      const timeoutId = setTimeout(() => {
        window.removeEventListener('message', messageHandler)
        reject('Frame load timeout')
      }, FIVE_SECONDS)

      window.addEventListener('message', messageHandler)

      // Set the frame URL to trigger loading
      setFrameUrl('https://app.banklessacademy.com/?webapp=true')
    })
  }

  const removeIframe = () => {
    // First reset all states
    setIsInitialized(false)
    setFrameUrl(null)
    setContext(null)
    setNotificationDetails(null)
    endpointRef.current = null

    // Then safely remove the iframe
    if (iframeRef.current && containerRef.current) {
      try {
        const iframe = iframeRef.current
        if (iframe.parentNode === containerRef.current) {
          containerRef.current.removeChild(iframe)
        }
      } catch (error) {
        console.error('Error removing iframe:', error)
      }
    }

    // Clear the ref last
    iframeRef.current = null
  }

  const handleLoadFrame = async () => {
    try {
      // Reset states first
      setIsInitialized(false)
      setContext(null)
      setNotificationDetails(null)

      // Then create new iframe
      await createIframe()
    } catch (error) {
      console.error('Error loading frame:', error)
      setFrameUrl(null)
    }
  }

  // Handle iframe load event
  const handleIframeLoad = () => {
    if (iframeRef.current?.contentWindow) {
      // Create endpoint for communication
      endpointRef.current = createEndpoint(iframeRef.current)

      // Signal frame ready
      endpointRef.current?.emit({ type: 'frame_ready' })
    }
  }

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      removeIframe()
    }
  }, [])

  // Handle frame events
  useEffect(() => {
    const handleFrameAdded = ({
      notificationDetails,
    }: {
      notificationDetails?: FrameNotificationDetails
    }) => {
      if (notificationDetails) {
        setNotificationDetails(notificationDetails)
      }
    }

    window.addEventListener('frame_added', handleFrameAdded as any)

    return () => {
      window.removeEventListener('frame_added', handleFrameAdded as any)
    }
  }, [])

  return (
    <div className="p-4 flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-xl font-bold">Farcaster Frame v2 Client</h1>
      <button
        onClick={handleLoadFrame}
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
        disabled={isInitialized}
      >
        {isInitialized ? 'Frame Loaded' : 'Load Frame'}
      </button>
      <div
        ref={containerRef}
        style={{ width: '424px', height: '695px', position: 'relative' }}
      >
        {frameUrl && (
          <iframe
            ref={iframeRef}
            id={FRAME_ID}
            src={frameUrl}
            allow="microphone; camera; clipboard-write 'src'"
            sandbox="allow-forms allow-scripts allow-same-origin allow-popups"
            onLoad={handleIframeLoad}
            style={{
              width: '424px',
              height: '695px',
              opacity: 1,
              display: 'block',
              verticalAlign: 'middle',
              msOverflowStyle: 'none',
              scrollbarWidth: 'none',
              border: '0px solid rgb(229, 231, 235)',
              borderImage: 'none',
              boxSizing: 'border-box',
              color: 'rgb(255, 255, 255)',
              fontFamily: 'Inter, sans-serif',
              fontSize: '15px',
              fontWeight: 400,
              lineHeight: '22.5px',
              overflowX: 'clip',
              overflowY: 'clip',
              overflowClipMargin: 'content-box',
              pointerEvents: 'auto',
              tabSize: 4,
              textSizeAdjust: '100%',
              textUnderlineOffset: '2px',
              WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)',
              WebkitBorderImage: 'none',
              fontFeatureSettings: '"calt" 0',
              fontVariationSettings: 'normal',
            }}
          />
        )}
        {!frameUrl && (
          <p className="mt-4">Click the button to load the frame...</p>
        )}
      </div>
      {context && (
        <div className="mt-4 p-4 bg-white rounded shadow">
          <h2 className="text-lg font-bold mb-2">Frame Context</h2>
          <pre className="whitespace-pre-wrap">
            {JSON.stringify(context, null, 2)}
          </pre>
        </div>
      )}
      {notificationDetails && (
        <div className="mt-4 p-4 bg-white rounded shadow">
          <h2 className="text-lg font-bold mb-2">Notification Details</h2>
          <pre className="whitespace-pre-wrap">
            {JSON.stringify(notificationDetails, null, 2)}
          </pre>
        </div>
      )}
    </div>
  )
}
