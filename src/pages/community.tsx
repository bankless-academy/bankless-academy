import React from 'react'
import { Box, Image, Button, Heading, Container, Link } from '@chakra-ui/react'
import NextLink from 'next/link'
import { GetStaticProps } from 'next'
import styled from '@emotion/styled'

import { MetaData } from 'components/Head'

const pageMeta: MetaData = {
  title: 'Community',
}

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: { pageMeta },
  }
}

const StyledBox = styled(Box)`
  img {
    border-radius: 10px;
    margin-left: auto;
    margin-right: auto;
    width: 100%;
  }
`

const Community = (): JSX.Element => {
  return (
    <Container maxW="container.xl">
      <StyledBox>
        <Box mt="16">
          <Heading py="8" as="h1" size="xl">
            {'Join our community on '}
            <Link target="_blank" href="https://gm.xyz/c/BanklessAcademy">
              gm.xyz/c/BanklessAcademy
            </Link>
          </Heading>
          <Heading py="8" as="h2" size="md">
            {
              'Sign in by using the "Sign In With Ethereum" button on the top-right corner.'
            }
          </Heading>
          <Link target="_blank" href="https://gm.xyz/c/BanklessAcademy">
            <Image m="auto" mb="8" src="/images/gm/1_Bankless_Academy.jpg" />
          </Link>
          <Box m="auto">
            <Heading py="8" as="h2" size="md">
              {'Login with Metamask or another wallet.'}
            </Heading>
            <Image maxW="500px" mb="8" src="/images/gm/2_login.jpg" />
            <Heading py="8" as="h2" size="md">
              {"Sign with your wallet (doesn't cost anything)."}
            </Heading>
            <Image maxW="500px" mb="8" src="/images/gm/3_sign.jpg" />
            <Heading py="8" as="h2" size="md">
              {'Make sure your wallet contains at least 0.001 ETH.'}
            </Heading>
            <Image maxW="500px" mb="8" src="/images/gm/4_eth.jpg" />
            <Heading py="8" as="h2" size="md">
              {'Join the Bankless Academy community.'}
            </Heading>
            <Image maxW="500px" mb="8" src="/images/gm/5_join.jpg" />
            <Heading py="8" as="h2" size="md">
              {
                'Explore our different topics and feel free to ask questions or help others:'
              }
            </Heading>
            <Image maxW="500px" mb="8" src="/images/gm/6_topics.jpg" />
          </Box>
        </Box>
        <Box py="16" textAlign="center">
          <NextLink href={`/lessons`}>
            <Button variant="primary" size="lg" style={{ padding: '0 23px' }}>
              Back to Lessons
            </Button>
          </NextLink>
        </Box>
      </StyledBox>
    </Container>
  )
}

export default Community
