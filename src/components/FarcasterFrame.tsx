/* eslint-disable no-console */
// https://github.com/farcasterxyz/frames-v2-demo
// https://github.com/farcasterxyz/frames/tree/main/packages/frame-host
import { useState, useEffect, useRef } from 'react'
import type { FrameHost } from '@farcaster/frame-host'

const FRAME_ID = 'bankless-academy-frame'
const DEBUG = true

interface FrameMessage {
  id: string
  type: 'APPLY' | 'GET'
  path: string[]
  argumentList?: any[]
}

// declare global {
//   interface Window {
//     ethereum: any
//   }
// }

const log = (...args: any[]) => {
  if (DEBUG) {
    console.log('[Frame]', ...args)
  }
}

const logMessage = (msg: FrameMessage) => {
  if (!DEBUG) return

  const logParts = [`Message Type: ${msg.type}`]
  if (msg.path?.length) {
    logParts.push(`Path: ${msg.path.join('.')}`)
  }
  if (msg.argumentList?.length) {
    logParts.push('Arguments:', JSON.stringify(msg.argumentList, null, 2))
  }
  log(...logParts)

  if (msg.type === 'APPLY') {
    switch (msg.path[0]) {
      case 'eip6963RequestProvider':
        log('Provider request received')
        break
      case 'ethProviderRequestV2': {
        const request = msg.argumentList?.[0]
        if (request?.value?.method) {
          log('ETH request:', request.value.method, request.value)
        }
        break
      }
      default:
        log('Unknown APPLY path:', msg.path[0])
    }
  } else if (msg.type === 'GET') {
    log('GET request for:', msg.path[0])
  }
}

// const createEthProvider = async () => {
//   try {
//     const frameSdk = await import('@farcaster/frame-sdk')
//     const sdk = frameSdk.default
//     if (!sdk?.wallet?.ethProvider) {
//       log('No ethereum provider found')
//       return null
//     }

//     log('Creating ethereum provider wrapper')
//     return sdk.wallet.ethProvider
//   } catch (error) {
//     console.error('Failed to load Frame SDK:', error)
//     return null
//   }
// }

export default function FarcasterFrame() {
  const [isInitialized, setIsInitialized] = useState(false)
  const iframeRef = useRef<HTMLIFrameElement>(null)
  // const [ethProvider, setEthProvider] = useState<any>(null)

  useEffect(() => {
    log('Initializing frame host...')

    const initFrame = async () => {
      if (!iframeRef.current) {
        log('No iframe ref found')
        return
      }

      const { exposeToIframe } = await import('@farcaster/frame-host')

      // const provider = await createEthProvider()
      // setEthProvider(provider)

      const announceProvider = (endpoint: any) => {
        log('Announcing provider...')
        endpoint.emit({
          event: 'eip6963:announceProvider',
          info: {
            name: 'Bankless Academy Frame',
            icon: '/favicon.ico',
            rdns: 'com.banklessacademy.frame',
            uuid: '1395b549-854c-48c4-96af-5a58012196e5',
          },
        })
        log('Provider announced')
      }

      const frameHost = {
        ready: (options: any) => {
          log('Frame ready called with options:', options)
          setIsInitialized(true)
        },
        context: {
          user: {
            fid: 8709,
          },
        },
        eip6963RequestProvider: () => {
          log('Provider requested')
          announceProvider(endpoint)
        },
        ethProviderRequestV2: async (request: any) => {
          log('ETH request:', request.value.method, request.value)
          if (request.value.method === 'eth_requestAccounts') {
            if (!window.ethereum) {
              throw new Error('No Ethereum provider available')
            }
            // eslint-disable-next-line no-useless-catch
            try {
              const accounts = await (window.ethereum as any).request({
                method: request.value.method,
                params: request.value.params,
              })
              return accounts
            } catch (error) {
              console.error('Error requesting accounts:', error)
              throw error
            }
          }
          throw new Error('Method not supported')
        },
      }

      log('Creating endpoint...')
      const { endpoint } = exposeToIframe({
        iframe: iframeRef.current,
        sdk: frameHost as unknown as FrameHost,
        ethProvider: window.ethereum as any,
        frameOrigin: window.location.origin,
        debug: true,
      })
      log('Frame host initialized')

      // Add message event listener for debugging
      const handleMessage = (event: MessageEvent) => {
        if (event.source === iframeRef.current?.contentWindow) {
          logMessage(event.data as FrameMessage)
        }
      }
      window.addEventListener('message', handleMessage)

      return () => {
        window.removeEventListener('message', handleMessage)
      }
    }

    const cleanupPromise = initFrame()
    return () => {
      cleanupPromise?.then((cleanup) => cleanup?.())
      if (iframeRef.current) {
        iframeRef.current.remove()
      }
    }
  }, [])

  const handleIframeLoad = () => {
    log('Iframe loaded')
    setIsInitialized(true)
  }

  return (
    <div style={{ position: 'relative', width: '424px', margin: '0 auto' }}>
      <div style={{ display: isInitialized ? 'none' : 'block' }}>
        Loading...
      </div>
      <iframe
        ref={iframeRef}
        id={FRAME_ID}
        // src="https://app.banklessacademy.com/?webapp=true"
        src="https://frames-v2.vercel.app/"
        height={695}
        width={424}
        style={{
          border: 'none',
          opacity: isInitialized ? 1 : 0.5,
          transition: 'opacity 0.3s ease',
        }}
        allow="microphone; camera; clipboard-write 'src'"
        sandbox="allow-forms allow-scripts allow-same-origin allow-popups"
        onLoad={handleIframeLoad}
      />
    </div>
  )
}
