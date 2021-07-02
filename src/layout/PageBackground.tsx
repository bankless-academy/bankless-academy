import * as React from 'react'
import { useColorMode, Box, BoxProps } from '@chakra-ui/react'

// TODO: move this to theme if possible

const PageBackground: React.FC<BoxProps> = (props) => {
  const { colorMode } = useColorMode()

  return <Box bg={colorMode === 'dark' ? 'black' : 'aliceblue'} {...props} />
}

export default PageBackground
