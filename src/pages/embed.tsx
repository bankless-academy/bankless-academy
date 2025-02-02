import React from 'react'
import { GetStaticProps } from 'next'
import { MetaData } from 'components/Head'
import FarcasterFrame from 'components/FarcasterFrame'

const pageMeta: MetaData = {
  description: 'Bankless Academy Farcaster Frame',
  canonical: '/',
}

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: { pageMeta },
  }
}

const Embed = (): JSX.Element => {
  return (
    <>
      <FarcasterFrame />
    </>
  )
}

export default Embed
