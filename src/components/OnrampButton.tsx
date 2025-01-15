import { Button, Image } from '@chakra-ui/react'

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
      `https://pay.coinbase.com/buy/select-asset?appId=f4210163-1e8b-4cc8-ad4a-45aab3d2a471&destinationWallets=%5B%7B%22address%22%3A%22${address}%22%2C%22blockchains%22%3A%5B%22optimism%22%2C%22base%22%5D%2C%22assets%22%3A%5B%22ETH%22%5D%7D%5D&defaultNetwork=base&defaultExperience=send`,
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
      Onramp via Coinbase
    </Button>
  )
}

export default OnrampButton
