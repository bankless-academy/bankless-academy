import React from 'react'
import {
  ChakraProvider,
  extendTheme,
  withDefaultColorScheme,
  localStorageManager,
} from '@chakra-ui/react'

import core from 'theme/core'
import components from 'theme/components'

// TODO LATER: uncomment force light mode
localStorageManager.set('light')

export const theme = extendTheme(
  {
    ...core,
    ...components,
    styles: {
      // global: {
      //   'html, body': {
      //     fontFamily: 'calling-code',
      //     fontSize: 'md',
      //     color: 'whiteAlpha.900',
      //   },
      //   a: {
      //     _hover: { textDecoration: 'none' },
      //   },
      // },
    },
    config: {
      // TODO LATER: uncomment
      // useSystemColorMode: localStorageManager.get() ? false : true,
    },
  },
  withDefaultColorScheme({ colorScheme: 'red' })
)

interface ThemeProviderProps {
  children?: React.ReactNode
}

const ThemeProvider: React.FC<ThemeProviderProps> = ({
  children,
}: ThemeProviderProps) => (
  <ChakraProvider theme={theme}>{children}</ChakraProvider>
)

export default ThemeProvider
