import { Box, Button, Image } from '@chakra-ui/react'

const OnrampButton = ({
  address,
  ...props
}: {
  address: string
  [key: string]: any
}) => {
  const handleOnClick = () => {
    // https://docs.cdp.coinbase.com/onramp/docs/api-onramp-initializing
    window.open(
      `https://pay.coinbase.com/buy/select-asset?appId=bf18c88d-495a-463b-b249-0b9d3656cf5e&destinationWallets=%5B%7B%22address%22%3A%22${address}%22%2C%22blockchains%22%3A%5B%22optimism%22%2C%22base%22%5D%2C%22assets%22%3A%5B%22ETH%22%5D%7D%5D&defaultNetwork=base&defaultExperience=send`,
      '_blank',
      'width=470,height=750'
    )
  }

  return (
    <Button
      as="a"
      cursor="pointer"
      onClick={handleOnClick}
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
