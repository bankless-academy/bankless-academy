import React from 'react'
import { Box } from '@chakra-ui/react'
import { GetStaticProps } from 'next'

import { MetaData } from 'components/Head'
import { useActiveWeb3React, useSmallScreen } from 'hooks/index'
import { DOMAIN_PROD } from 'constants/index'

const pageMeta: MetaData = {
  title: 'Feedback',
}

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: { pageMeta },
  }
}

const Feedback = (): JSX.Element => {
  const [isSmallScreen] = useSmallScreen()
  const { account } = useActiveWeb3React()

  return (
    <Box height={isSmallScreen ? 'calc(100vh - 64px)' : 'calc(100vh - 73px)'}>
      <Box w="100%" h="100%" padding="0" backgroundColor="transparent">
        <iframe
          src={`https://tally.so/embed/wAr8gz?hideTitle=0&alignLeft=1&wallet=${account}&domain=${DOMAIN_PROD}`}
          frameBorder="0"
          width="100%"
          height="100%"
        ></iframe>
      </Box>
    </Box>
  )
}

export default Feedback
