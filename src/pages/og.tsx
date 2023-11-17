import React from 'react'
import { GetStaticProps } from 'next'

import { MetaData } from 'components/Head'
import OgSocial from 'components/OgSocial'
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
    <OgSocial />
  </Box>
)

export default Og
