import React from 'react'
import { Container } from '@chakra-ui/react'
import { GetStaticProps } from 'next'

import { MetaData } from 'components/Head'
import Passport from 'components/Passport'

const pageMeta: MetaData = {
  title: 'Passport',
}

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: { pageMeta },
  }
}

const PassportPage = (): JSX.Element => {
  return (
    <Container maxW="container.xl">
      <Passport displayStamps />
    </Container>
  )
}

export default PassportPage
