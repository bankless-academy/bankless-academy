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
  <Box display="grid">
    <Box position="relative">
      <OgSocial />
    </Box>
    <Box position="relative" mt="700px">
      <OgSocial badgeImageLink="/images/wallet-basics/badge-75d8aa76.png" />
    </Box>
  </Box>
)

export default Og
