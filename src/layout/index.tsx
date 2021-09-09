import React from 'react'
import { useMediaQuery } from '@chakra-ui/react'

// import Head from 'components/Head'
import { PageMetaProps } from 'components/Head'
import Nav from 'layout/Nav'
import PageBackground from 'layout/PageBackground'

const Layout = ({
  // pageMeta,
  children,
}: {
  pageMeta: PageMetaProps
  children: JSX.Element
}): React.ReactElement => {
  const [isMobile] = useMediaQuery('(max-width: 800px)')

  return (
    <PageBackground minH="100vh" paddingBottom={isMobile ? '64px' : ''}>
      {/* <Head {...pageMeta} /> */}
      <Nav />
      <main>{children}</main>
      {/* <Footer /> */}
    </PageBackground>
  )
}

export default Layout
