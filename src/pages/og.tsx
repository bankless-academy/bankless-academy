import React from 'react'
import { GetStaticProps } from 'next'

import { MetaData } from 'components/Head'
import OgProfile from 'components/OgProfile'
import { Box } from '@chakra-ui/react'

const pageMeta: MetaData = {
  description: 'OG',
}

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: { pageMeta },
  }
}

const Og = (): JSX.Element => (
  <Box position="relative">
    <OgProfile />
  </Box>
)

export default Og
