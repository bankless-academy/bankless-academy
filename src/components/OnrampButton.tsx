/* eslint-disable no-console */
import { Box, Button, Image } from '@chakra-ui/react'
import { useState } from 'react'
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

  const handleOnClick = () => {
    setIsLoading(true)

    // Call window.open immediately to avoid mobile popup blocking
    const popup = window.open('', '_blank', 'width=470,height=750')

    if (!popup) {
      console.error('Popup blocked by browser')
      setIsLoading(false)
      return
    }

    // Show loading message in popup
    popup.document.write(
      '<html><body><div style="display:flex;justify-content:center;align-items:center;height:100vh;font-family:Arial,sans-serif;">Loading...</div></body></html>'
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
      })
      .finally(() => {
        setIsLoading(false)
      })
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
