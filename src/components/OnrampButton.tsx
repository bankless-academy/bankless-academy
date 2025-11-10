/* eslint-disable no-console */
import { Box, Button, Image, useToast } from '@chakra-ui/react'
import { useState } from 'react'
import { useAccount } from 'wagmi'
import { signMessage } from '@wagmi/core'
import { wagmiConfig } from 'utils/wagmi'
import { verifySignature } from 'utils/SignatureUtil'
import {
  generateSessionToken,
  formatAddressesForToken,
} from '../utils/coinbase'

interface OnrampButtonProps {
  address: string
  defaultNetwork?: string
  defaultExperience?: 'send' | 'buy'
  [key: string]: any
}

const OnrampButton = ({
  address,
  defaultNetwork = 'base',
  defaultExperience = 'send',
  ...props
}: OnrampButtonProps) => {
  const [isLoading, setIsLoading] = useState(false)
  const toast = useToast()
  const { chain } = useAccount()

  const handleOnClick = async () => {
    setIsLoading(true)

    // Open popup immediately on click event to avoid browser popup blocking
    const popup = window.open('', '_blank', 'width=470,height=750')

    if (!popup) {
      console.error('Popup blocked by browser')
      toast({
        title: 'Popup blocked',
        description:
          'Please allow popups for this site to use Coinbase Onramp.',
        status: 'error',
        duration: 5000,
        isClosable: true,
      })
      setIsLoading(false)
      return
    }

    // Show loading message in popup while waiting for signature
    popup.document.write(
      '<html><body><div style="display:flex;justify-content:center;align-items:center;height:100vh;font-family:Arial,sans-serif;">Please sign the message in your wallet...</div></body></html>'
    )

    try {
      // Create unique message with wallet address and timestamp
      // This prevents replay attacks and proves wallet ownership
      const timestamp = new Date().toISOString()
      const uniqueMessage = `Coinbase Onramp Authentication

I am verifying ownership of this wallet to access Coinbase Onramp.

Wallet Address: ${address}
Timestamp: ${timestamp}

This signature proves I own this wallet without exposing my private key.`

      // Request wallet signature
      toast.closeAll()
      toast({
        title: 'Coinbase Onramp',
        description: 'Open your wallet to sign a message.',
        status: 'warning',
        duration: null,
      })

      const signature = await signMessage(wagmiConfig, {
        account: address as `0x${string}`,
        message: uniqueMessage,
      }).catch((error) => {
        console.error(error)
        toast.closeAll()
        let errorMessage = error?.message?.split('\n')[0]
        if (errorMessage.includes('switch chain'))
          errorMessage +=
            ' Try changing the network to Ethereum manually from your wallet.'
        toast({
          title: 'Coinbase Onramp error',
          description: `Error while signing the message: ${errorMessage}`,
          status: 'error',
          duration: 20000,
          isClosable: true,
        })
        return null
      })

      if (!signature) {
        popup.close()
        setIsLoading(false)
        return
      }

      // Verify signature cryptographically
      const verified = await verifySignature({
        address,
        message: uniqueMessage,
        signature,
        chainId: chain?.id,
      })

      if (!verified) {
        popup.close()
        toast.closeAll()
        toast({
          title: 'Coinbase Onramp error',
          description: 'Signature verification failed. Please try again.',
          status: 'error',
          duration: 5000,
          isClosable: true,
        })
        setIsLoading(false)
        return
      }

      console.log('Wallet signature verified successfully at:', timestamp)
      toast.closeAll()

      // Update popup with loading state for session token generation
      popup.document.write(
        '<html><body><div style="display:flex;justify-content:center;align-items:center;height:100vh;font-family:Arial,sans-serif;">Loading Coinbase Onramp...</div></body></html>'
      )

      // Generate session token asynchronously
      generateSessionToken({
        addresses: formatAddressesForToken(address, [
          defaultNetwork,
          'ethereum',
          'optimism',
        ]),
        assets: ['ETH', 'USDC'],
      })
        .then((sessionToken) => {
          if (!sessionToken) {
            throw new Error('Failed to generate session token')
          }

          // Build URL with latest Coinbase Onramp API parameters
          // https://docs.cdp.coinbase.com/onramp-&-offramp/onramp-apis/generating-onramp-url
          const baseUrl = 'https://pay.coinbase.com/buy/select-asset'

          const params = new URLSearchParams()

          // Required parameters
          params.append('sessionToken', sessionToken)

          // Optional parameters
          if (defaultNetwork) {
            params.append('defaultNetwork', defaultNetwork)
          }

          if (defaultExperience) {
            params.append('defaultExperience', defaultExperience)
          }

          const url = `${baseUrl}?${params.toString()}`

          console.log('url', url)

          // Navigate the popup to the final URL
          popup.location.href = url
        })
        .catch((error) => {
          console.error('Failed to open Coinbase Onramp:', error)
          // Show error message in popup
          popup.document.write(
            '<html><body><div style="display:flex;justify-content:center;align-items:center;height:100vh;font-family:Arial,sans-serif;color:red;">Error loading Coinbase Onramp. Please try again.</div></body></html>'
          )
          setTimeout(() => popup.close(), 3000)
        })
        .finally(() => {
          setIsLoading(false)
        })
    } catch (error) {
      console.error('Unexpected error:', error)
      popup.close()
      toast.closeAll()
      toast({
        title: 'Coinbase Onramp error',
        description: 'An unexpected error occurred. Please try again.',
        status: 'error',
        duration: 5000,
        isClosable: true,
      })
      setIsLoading(false)
    }
  }

  return (
    <Button
      as="a"
      cursor="pointer"
      onClick={handleOnClick}
      isLoading={isLoading}
      loadingText="Loading..."
      borderRadius="3xl"
      bg="#0052FF"
      _hover={{
        bg: '#0043d3',
        color: 'white !important',
      }}
      color="white !important"
      leftIcon={<Image h="20px" src={'/images/coinbase-logo.svg'} />}
      {...props}
    >
      <Box
        minW={
          props.w === '100%' && props.size === 'lg'
            ? '180px'
            : props.w === '100%'
            ? '150px'
            : 'unset'
        }
      >
        Onramp via Coinbase
      </Box>
    </Button>
  )
}

export default OnrampButton
