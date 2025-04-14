/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-unused-vars */
// https://github.com/farcasterxyz/frames-v2-demo
// https://github.com/farcasterxyz/frames/tree/main/packages/frame-host
import { useState, useEffect, useRef } from 'react'
import type { FrameHost } from '@farcaster/frame-host'
import { wagmiConfig } from 'utils/wagmi'
import { getWalletClient } from '@wagmi/core'
import { useAccount } from 'wagmi'
import { Box, Text, Flex, Spinner } from '@chakra-ui/react'

const FRAME_ID = 'bankless-academy-frame'
const DEBUG = true
const LOADING_TIMEOUT_MS = 2000 // 2 seconds timeout for loading state

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

interface FarcasterFrameProps {
  frameUrl?: string
  onClose?: () => void
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

export default function MiniApp({
  frameUrl = '',
  onClose,
}: FarcasterFrameProps) {
  const [isInitialized, setIsInitialized] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const iframeRef = useRef<HTMLIFrameElement>(null)
  const cleanupRef = useRef<(() => void) | null>(null)
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)
  const { address } = useAccount()

  useEffect(() => {
    if (!address || !frameUrl) return

    let isCurrentFrame = true
    log('Initializing frame host...')
    setIsLoading(true)

    // Set a timeout to force the loading state to end after 3 seconds
    timeoutRef.current = setTimeout(() => {
      if (isCurrentFrame) {
        log('Loading timeout reached, forcing initialization')
        setIsLoading(false)
        setIsInitialized(true)
      }
    }, LOADING_TIMEOUT_MS)

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
                if (!isCurrentFrame) return null
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
        if (!isCurrentFrame) return
        const errorMessage = err?.message || 'Failed to initialize wallet'
        log('Wallet initialization error:', errorMessage)
        setError(errorMessage)
      }

      if (!isCurrentFrame) return

      const handleMessage = (event: MessageEvent) => {
        if (!isCurrentFrame) return
        if (event.source === iframeRef.current?.contentWindow) {
          logMessage(event.data as FrameMessage)
        }
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

      window.addEventListener('message', handleMessage)

      const { endpoint } = exposeToIframe({
        iframe: iframeRef.current,
        sdk: {
          ready: (options: any) => {
            if (!isCurrentFrame) return
            log('Frame ready called with options:', options)
            setIsInitialized(true)
            setIsLoading(false)
          },
          eip6963RequestProvider: () => {
            if (!isCurrentFrame || !provider) return
            log('Provider requested')
            if (endpoint) announceProvider(endpoint)
          },
          ethProviderRequestV2: async (request: any) => {
            if (!isCurrentFrame || !provider) {
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
        } as unknown as FrameHost,
        ethProvider: provider as any,
        frameOrigin: '*',
        debug: true,
      })

      cleanupRef.current = () => {
        isCurrentFrame = false
        window.removeEventListener('message', handleMessage)
        if (iframeRef.current) {
          iframeRef.current.remove()
        }
        setIsInitialized(false)
        setIsLoading(false)
        setError(null)
      }
    }

    initFrame()

    return () => {
      if (cleanupRef.current) {
        cleanupRef.current()
      }
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }
    }
  }, [address, frameUrl])

  const handleIframeLoad = () => {
    log('Iframe loaded')
  }

  return (
    <Box position="relative" width="424px" maxWidth="100vw" margin="0 auto">
      {!address ? (
        <Text>Please connect your wallet first</Text>
      ) : (
        <>
          {isLoading && (
            <Flex
              position="absolute"
              top="-100px"
              left="0"
              right="0"
              justify="center"
              align="center"
              height="100px"
            >
              <Spinner size="md" color="blue.500" />
            </Flex>
          )}
          {error && (
            <Text color="red.500" marginBottom="10px">
              {error}
            </Text>
          )}
          <iframe
            ref={iframeRef}
            id={FRAME_ID}
            src={frameUrl}
            height={695}
            width={424}
            style={{
              border: 'none',
              opacity: isInitialized ? 1 : 0.5,
              transition: 'opacity 0.3s ease',
              maxWidth: '100vw',
            }}
            allow="microphone; camera; clipboard-write 'src'"
            sandbox="allow-forms allow-scripts allow-same-origin allow-popups"
            onLoad={handleIframeLoad}
          />
        </>
      )}
    </Box>
  )
}
