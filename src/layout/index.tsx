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

import Head from 'components/Head'
import { PageMetaProps } from 'components/Head'
import Nav from 'layout/Nav'
import PageBackground from 'layout/PageBackground'

const Layout = ({
  pageMeta,
  children,
}: {
  pageMeta: PageMetaProps
  children: JSX.Element
}): React.ReactElement => {
  const [isMobile] = useMediaQuery('(max-width: 800px)')
  const [password, setPassword] = useState(localStorage.getItem(`password`))

  return (
    <PageBackground minH="100vh" paddingBottom={isMobile ? '64px' : ''}>
      {typeof password === 'string' && password.toLowerCase() === 'dao' ? (
        <>
          <Head {...pageMeta} />
          <Nav />
          <main>{children}</main>
          {/* <Footer /> */}
        </>
      ) : (
        <>
          <Center bg="tomato" h="100vh">
            <Box
              borderWidth="1px"
              borderRadius="12px"
              bg="white"
              maxWidth="600px"
              width="100%"
              p="20px"
            >
              <InputGroup size="lg" width="100%">
                <InputLeftAddon>Password: </InputLeftAddon>
                <Input
                  type="text"
                  placeholder="🏅 Bankless Academy &gt; 👉academy-start-here"
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
    </PageBackground>
  )
}

export default Layout
