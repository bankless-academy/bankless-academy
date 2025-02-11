/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-unused-vars */
// https://github.com/farcasterxyz/frames-v2-demo
// https://github.com/farcasterxyz/frames/tree/main/packages/frame-host
import { useState, useEffect, useRef } from 'react'
import type { FrameHost } from '@farcaster/frame-host'
import { wagmiConfig } from 'utils/wagmi'
import { getWalletClient } from '@wagmi/core'
import { useAccount } from 'wagmi'

const FRAME_ID = 'bankless-academy-frame'
const DEBUG = true

interface EthereumProvider {
  request: (args: { method: string; params?: any[] }) => Promise<any>
  on: (event: string, listener: any) => any
  removeListener: (event: string, listener: any) => any
}

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
  const [showIframe, setShowIframe] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const iframeRef = useRef<HTMLIFrameElement>(null)
  const { address } = useAccount()

  useEffect(() => {
    if (!showIframe) return
    log('Initializing frame host...')

    const initFrame = async () => {
      if (!iframeRef.current) {
        log('No iframe ref found')
        return
      }

      const { exposeToIframe } = await import('@farcaster/frame-host')

      let client
      let provider
      try {
        if (wagmiConfig) {
          client = await getWalletClient(wagmiConfig)
          if (client) {
            provider = {
              request: async (args: { method: string; params: any[] }) => {
                return client.request({ ...args, params: args.params || [] })
              },
              on: (_event: string, _listener: any) => {
                log('Provider event listener added:', _event)
                return provider
              },
              removeListener: (_event: string, _listener: any) => {
                log('Provider event listener removed:', _event)
                return provider
              },
            }
          }
        }
      } catch (err: any) {
        const errorMessage = err?.message || 'Failed to initialize wallet'
        log('Wallet initialization error:', errorMessage)
        setError(errorMessage)
      }

      const announceProvider = (endpoint: any) => {
        if (!provider) {
          log('No provider available to announce')
          return
        }
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
        // context: {
        //   user: {
        //     fid: 8709,
        //   },
        // },
        eip6963RequestProvider: () => {
          if (!provider) {
            log('Provider requested but not available')
            return
          }
          log('Provider requested')
          announceProvider(endpoint)
        },
        ethProviderRequestV2: async (request: any) => {
          if (!provider) {
            return {
              error: {
                code: -32603,
                message: 'Wallet not available',
              },
            }
          }

          log('ETH request:', request.value.method, request.value)
          if (!request?.value?.method) {
            return {
              error: {
                code: -32602,
                message: 'Invalid request format',
              },
            }
          }

          try {
            const response = await provider.request({
              method: request.value.method,
              params: request.value.params || [],
            })
            log('ETH response:', response)
            return { result: response }
          } catch (error: any) {
            log('ETH error:', error)
            return {
              error: {
                code: error?.code || -32603,
                message: error?.message || 'Internal error',
                data: error?.data,
              },
            }
          }
        },
      }

      log('Creating endpoint...')
      const { endpoint } = exposeToIframe({
        iframe: iframeRef.current,
        sdk: frameHost as unknown as FrameHost,
        ethProvider: provider as any,
        frameOrigin: '*',
        debug: true,
      })
      log('Frame host initialized')

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
  }, [showIframe])

  const handleIframeLoad = () => {
    log('Iframe loaded')
  }

  const handleLoadClick = () => {
    setShowIframe(true)
  }

  return (
    <div style={{ position: 'relative', width: '424px', margin: '0 auto' }}>
      {!address ? (
        <div>Please connect your wallet first</div>
      ) : !showIframe ? (
        <button
          onClick={handleLoadClick}
          style={{
            padding: '10px 20px',
            fontSize: '16px',
            cursor: 'pointer',
            backgroundColor: '#0070f3',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            margin: '20px 0',
          }}
        >
          Load LessonFrame
        </button>
      ) : (
        <>
          <div style={{ display: isInitialized ? 'none' : 'block' }}>
            Loading...
          </div>
          {error && (
            <div style={{ color: 'red', marginBottom: '10px' }}>{error}</div>
          )}
          <iframe
            ref={iframeRef}
            id={FRAME_ID}
            src="https://app.banklessacademy.com/lessons/intro-to-defi?embed=true"
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
        </>
      )}
    </div>
  )
}
