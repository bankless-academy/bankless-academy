import React from 'react'
import { GetStaticProps } from 'next'

import { MetaData } from 'components/Head'
import OgSocial from 'components/OgSocial'
import { Box } from '@chakra-ui/react'
import OgOnchainSummerChallenge from 'components/OgOnchainSummerChallenge'

const pageMeta: MetaData = {
  description: 'OG',
  noindex: true,
}

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: { pageMeta },
  }
}

const Og = (): JSX.Element => (
  <Box display="grid">
    <Box position="relative">
      <OgOnchainSummerChallenge time={'00:31:42'} />
    </Box>
    <Box position="relative" mt="700px">
      <OgSocial
        stats={{
          badges: 10,
          handbooks: ['H001'],
          datadisks: ['D001'],
          donations: ['GR11', 'GR12'],
          valid_stamps: ['Google', 'Facebook'],
        }}
      />
    </Box>
    <Box position="relative" mt="1400px">
      <OgSocial badgeImageLink="https://app.banklessacademy.com/images/wallet-basics/badge-d89b2df3.png" />
    </Box>
  </Box>
)

export default Og
