/* eslint-disable no-console */
import React from 'react'
import { Container } from '@chakra-ui/react'
import { GetStaticProps } from 'next'

import { MetaData } from 'components/Head'
import BitcoinBasics from 'components/Quest/BitcoinBasics'
import { Slide } from 'components/Lesson'

const pageMeta: MetaData = {
  title: 'Quest',
  noindex: true,
}

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: { pageMeta },
  }
}

const PassportPage = (): JSX.Element => {
  return (
    <Container maxW="container.xl">
      <Slide slidetype="QUEST" p={8} pt={4} pb={2} mt={6} minH="600px">
        <BitcoinBasics test={true} />
      </Slide>
    </Container>
  )
}

export default PassportPage
