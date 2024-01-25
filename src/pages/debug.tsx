import React from 'react'
import { Box, Container, Tooltip, Button } from '@chakra-ui/react'
import { GetStaticProps } from 'next'

import { MetaData } from 'components/Head'

const pageMeta: MetaData = {
  title: 'Debug',
  noindex: true,
}

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: { pageMeta },
  }
}

const Feedback = (): JSX.Element => {
  return (
    <Container maxW="container.xl">
      <Box mt={8}>
        <Tooltip
          hasArrow
          placement="right"
          label="If you have trouble with POAPs, click this button to reset the local app state"
        >
          <Button
            onClick={() => {
              localStorage.removeItem('poap-wallet-basics')
              localStorage.removeItem('poap-intro-to-defi')
              window.location.reload()
            }}
            mb={4}
            colorScheme="red"
          >
            Reset POAP
          </Button>
        </Tooltip>
      </Box>
    </Container>
  )
}

export default Feedback
