import { Box, Image as ChakraImage } from '@chakra-ui/react'

const NFT = ({ nftLink }: { nftLink: string }): React.ReactElement => (
  <Box>
    {nftLink?.includes('.mp4') ? (
      <video autoPlay loop playsInline muted>
        <source src={nftLink} type="video/mp4"></source>
      </video>
    ) : (
      <ChakraImage m="auto" my="19px" src={nftLink} height="250px" />
    )}
  </Box>
)

export default NFT
