import { Box, Button, Image } from '@chakra-ui/react'
import ExternalLink from './ExternalLink'

const BridgeButton = ({
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  address,
  ...props
}: {
  address: string
  [key: string]: any
}) => {
  return (
    <ExternalLink
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
          Bridge Token
        </Box>
      </Button>
    </ExternalLink>
  )
}

export default BridgeButton
