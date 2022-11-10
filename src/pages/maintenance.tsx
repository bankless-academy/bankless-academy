import React from 'react'
import { GetStaticProps } from 'next'

import { MetaData } from 'components/Head'

const pageMeta: MetaData = {
  title: 'Maintenance',
}

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: { pageMeta },
  }
}

const Maintenance = (): JSX.Element => {
  return <>Maintenance in progress ...</>
}

export default Maintenance
