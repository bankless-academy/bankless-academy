import React from 'react'
import { GetStaticProps } from 'next'

import { MetaData } from 'components/Head'
import HomePage from 'pages/index'

const pageMeta: MetaData = {
  title: 'AI assistant',
  description:
    'The Bankless Academy AI assistant is here to help you learn about crypto.',
  canonical: '/',
}

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: { pageMeta },
  }
}

const AI = (): JSX.Element => {
  return (
    <>
      <HomePage />
    </>
  )
}

export default AI
