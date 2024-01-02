import React from 'react'
import { Box } from '@chakra-ui/react'
import { GetStaticProps } from 'next'
import { useAccount } from 'wagmi'

import { MetaData } from 'components/Head'
import { useSmallScreen } from 'hooks/index'
import { DOMAIN_PROD } from 'constants/index'

const pageMeta: MetaData = {
  title: 'Report an Issue',
}

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: { pageMeta },
  }
}

const ReportAnIssue = (): JSX.Element => {
  const [isSmallScreen] = useSmallScreen()
  const { address } = useAccount()

  return (
    <Box height={isSmallScreen ? 'calc(100vh - 64px)' : 'calc(100vh - 73px)'}>
      <Box w="100%" h="100%" padding="0" backgroundColor="transparent">
        <iframe
          src={`https://tally.so/embed/wAr8gz?hideTitle=0&alignLeft=1&wallet=${address}&domain=${DOMAIN_PROD}`}
          frameBorder="0"
          width="100%"
          height="100%"
        ></iframe>
      </Box>
    </Box>
  )
}

export default ReportAnIssue
