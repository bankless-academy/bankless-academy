import React from 'react'
import { Box } from '@chakra-ui/react'
import { GetStaticProps } from 'next'
import { useAccount } from 'wagmi'

import { MetaData } from 'components/Head'
import { useSmallScreen } from 'hooks/index'
import { DOMAIN_PROD } from 'constants/index'
import { useRouter } from 'next/router'

const pageMeta: MetaData = {
  title: 'Feature Request',
  noindex: true,
}

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: { pageMeta },
  }
}

const FeatureRequest = (): JSX.Element => {
  const [isSmallScreen] = useSmallScreen()
  const router = useRouter()
  const { address } = useAccount()
  const { context } = router.query

  return (
    <Box height={isSmallScreen ? 'calc(100vh - 64px)' : 'calc(100vh - 73px)'}>
      <Box w="100%" h="100%" padding="0" backgroundColor="transparent">
        <iframe
          src={`https://tally.so/embed/mZRzWa?hideTitle=0&alignLeft=1&wallet=${address}&domain=${DOMAIN_PROD}&context=${encodeURIComponent(
            (context as string) || document?.referrer || 'no_context'
          )}`}
          frameBorder="0"
          width="100%"
          height="100%"
        ></iframe>
      </Box>
    </Box>
  )
}

export default FeatureRequest
