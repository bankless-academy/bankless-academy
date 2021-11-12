import * as React from 'react'
import { useColorMode, Box, BoxProps } from '@chakra-ui/react'

// TODO: move this to theme if possible

const PageBackground: React.FC<BoxProps> = (props) => {
  const { colorMode } = useColorMode()

  return (
    <Box
      bg={
        colorMode === 'dark'
          ? 'radial-gradient(233.98% 233.98% at -6.23% -45.01%, #FA8583 0%, #473E5B 58.32%, #332B43 91.94%)'
          : 'aliceblue'
      }
      {...props}
    />
  )
}

export default PageBackground
