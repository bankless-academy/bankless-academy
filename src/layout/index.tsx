import React from 'react'
import { useState } from 'react'
import {
  useMediaQuery,
  Box,
  Center,
  InputGroup,
  InputLeftAddon,
  Input,
} from '@chakra-ui/react'

import Nav from 'layout/Nav'

const Layout = ({
  children,
  isLesson,
}: {
  children: JSX.Element
  isLesson: boolean
}): React.ReactElement => {
  const [isSmallScreen] = useMediaQuery('(max-width: 800px)')
  const [password, setPassword] = useState(localStorage.getItem(`password`))
  const passwordClean = ('' + password)
    .toLowerCase()
    .replaceAll(' ', '')
    .replaceAll('!', '')
  const PASSWORDS = ['dao', 'gobankless', 'gobankless🤫']
  // TODO: clean password protection 🙈
  const isPasswordCorrect = true || PASSWORDS.includes(passwordClean)

  return (
    <Box
      minH="100vh"
      paddingBottom={isSmallScreen && isLesson ? '81px' : '0'}
      bgColor="#161515"
      overflowX="hidden"
    >
      {isPasswordCorrect ? (
        <>
          <Nav />
          <main>{children}</main>
          {/* <Footer /> */}
        </>
      ) : (
        <>
          <Center bgGradient="linear(to-l, #2f1e3a, #1c2444)" h="100vh">
            <Box
              borderWidth="1px"
              borderRadius="12px"
              maxWidth="600px"
              width="100%"
              p="20px"
            >
              <InputGroup size="lg" width="100%">
                <InputLeftAddon>Password: </InputLeftAddon>
                <Input
                  type="text"
                  placeholder="in 👉academy-start-here"
                  value={password}
                  onChange={(e): void => {
                    setPassword(e.target.value)
                    localStorage.setItem(`password`, e.target.value)
                  }}
                />
              </InputGroup>
            </Box>
          </Center>
        </>
      )}
    </Box>
  )
}

export default Layout
