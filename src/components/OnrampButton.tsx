import { Box, Button } from '@chakra-ui/react'
import { ArrowCircleDown } from '@phosphor-icons/react'
import { t } from 'i18next'

// Funds a wallet via Meld. A Coinbase Onramp implementation used to live here
// as 150 lines of commented-out code; it was removed 2026-09-12 along with the
// unauthenticated /api/coinbase/session-token endpoint it depended on.
interface OnrampButtonProps {
  address: string
  [key: string]: any
}

const OnrampButton = ({ address, ...props }: OnrampButtonProps) => {
  const meldUrl = `https://meldcrypto.com/?destinationCurrencyCode=ETH_BASE&walletAddress=${address}&network=8453&sourceAmount=10`

  return (
    <Button
      as="a"
      href={meldUrl}
      target="_blank"
      rel="noopener noreferrer"
      cursor="pointer"
      borderRadius="3xl"
      bg="#0052FF"
      _hover={{
        bg: '#0043d3',
        color: 'white !important',
      }}
      color="white !important"
      leftIcon={<ArrowCircleDown height="24px" width="24px" weight="bold" />}
      {...props}
    >
      <Box whiteSpace="nowrap">{t('Add funds')}</Box>
    </Button>
  )
}

export default OnrampButton
