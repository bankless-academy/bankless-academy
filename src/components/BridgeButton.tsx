import { Box, Button, Image } from '@chakra-ui/react'
import ExternalLink from './ExternalLink'
import { t } from 'i18next'

const BridgeButton = ({
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  address,
  ...props
}: {
  address: string
  [key: string]: any
}) => {
  return (
    // OnrampButton renders <Button as="a">, so it IS the flex/block item and
    // sizes with its container. This one nests a Button inside an anchor, which
    // is inline by default, so the anchor took the layout and the button stayed
    // shrink-to-fit — the caller's `w="100%"` resolved against a shrink-to-fit
    // box and did nothing. Block anchor + full-width button makes the two
    // components behave identically wherever they are used together.
    <ExternalLink
      display="block"
      href={`https://app.zerion.io/bridge?inputChain=base&outputChain=optimism`}
      // href={`https://app.zerion.io/bridge?inputChain=base&outputChain=optimism&addWallet=${address}`}
    >
      <Button
        cursor="pointer"
        borderRadius="3xl"
        // bg="#2461ED"
        bg="#0052FF"
        _hover={{
          // bg: '#1e51c8',
          bg: '#0043d3',
          color: 'white !important',
        }}
        color="white !important"
        leftIcon={<Image h="24px" src={'/images/bridge.svg'} />}
        w="100%"
        {...props}
      >
        <Box whiteSpace="nowrap">{t('Bridge')}</Box>
      </Button>
    </ExternalLink>
  )
}

export default BridgeButton
