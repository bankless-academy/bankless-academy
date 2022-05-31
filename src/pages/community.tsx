import React from 'react'
import { Box, Image, Button, Heading, Container, Link } from '@chakra-ui/react'
import NextLink from 'next/link'
import { GetStaticProps } from 'next'

import { MetaData } from 'components/Head'

const pageMeta: MetaData = {
  title: 'Community',
}

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: { pageMeta },
  }
}

const Community = (): JSX.Element => {
  return (
    <Container maxW="container.xl">
      <Box mt="16">
        <Heading py="8" as="h2" size="xl">
          {'Join our community on '}
          <Link target="_blank" href="https://gm.xyz/c/BanklessAcademy">
            gm.xyz
          </Link>
        </Heading>
        <Link target="_blank" href="https://gm.xyz/c/BanklessAcademy">
          <Image m="auto" mb="8" src="/images/gm/1_Bankless_Academy.jpg" />
        </Link>
        <Box m="auto" maxW="500px">
          <Link target="_blank" href="https://gm.xyz/c/BanklessAcademy">
            <Image mb="8" src="/images/gm/2_login.jpg" />
            <Image mb="8" src="/images/gm/3_sign.jpg" />
            <Image mb="8" src="/images/gm/4_eth.jpg" />
            <Image mb="8" src="/images/gm/5_join.jpg" />
            <Image mb="8" src="/images/gm/6_topics.jpg" />
          </Link>
        </Box>
      </Box>
      <Box py="16" textAlign="center">
        <NextLink href={`/lessons`}>
          <Button variant="primary" size="lg" style={{ padding: '0 23px' }}>
            Explore Lessons
          </Button>
        </NextLink>
      </Box>
    </Container>
  )
}

export default Community
