import { Button } from '@chakra-ui/react'

const OnrampButton = ({
  address,
  ...props
}: {
  address: string
  [key: string]: any
}) => {
  const handleOnClick = () => {
    window.open(
      `https://pay.coinbase.com/buy/select-asset?appId=bf18c88d-495a-463b-b249-0b9d3656cf5e&destinationWallets=%5B%7B%22address%22%3A%22${address}%22%2C%22blockchains%22%3A%5B%22optimism%22%2C%22base%22%5D%2C%22assets%22%3A%5B%5D%7D%5D&partnerUserId=0xe1887fF140BfA9D3b45D0B2077b7471124acD242&defaultNetwork=base&defaultExperience=send`,
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
      {...props}
    >
      Onramp via Coinbase
    </Button>
  )
}

export default OnrampButton
