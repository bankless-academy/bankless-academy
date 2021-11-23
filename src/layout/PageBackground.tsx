import * as React from 'react'
import { Box, BoxProps } from '@chakra-ui/react'

// TODO: move this to theme if possible

const PageBackground: React.FC<BoxProps> = (props) => {
  return (
    <Box
      bg={
        'radial-gradient(233.98% 233.98% at -6.23% -45.01%, #473E5B 0%, #332B43 91.94%)'
      }
      {...props}
    />
  )
}

export default PageBackground
