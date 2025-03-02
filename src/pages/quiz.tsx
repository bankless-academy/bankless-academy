/* eslint-disable no-console */
import React from 'react'
import { Container } from '@chakra-ui/react'
import { GetStaticProps } from 'next'

import { MetaData } from 'components/Head'
import CryptoArchetypeQuiz from 'components/CryptoArchetypeQuiz'

const pageMeta: MetaData = {
  title: 'Crypto Archetype Quiz',
  noindex: true,
}

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: { pageMeta },
  }
}

const QuizPage = (): JSX.Element => {
  return (
    <Container maxW="container.xl">
      <CryptoArchetypeQuiz />
    </Container>
  )
}

export default QuizPage
