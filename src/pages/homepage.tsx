import React from 'react'
import { GetStaticProps } from 'next'

import { PageMetaProps } from 'components/HeadMetadata'

const pageMeta: PageMetaProps = {
  title: 'Home',
}

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: { pageMeta },
  }
}

const Page = (): JSX.Element => {
  return (
    <>
      <h1>Home page</h1>
    </>
  )
}

export default Page
