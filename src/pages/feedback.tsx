import React from 'react'
import { Box } from '@chakra-ui/react'
import { GetStaticProps } from 'next'
import { useRouter } from 'next/router'
import { useAccount } from 'wagmi'

import { MetaData } from 'components/Head'
import { useSmallScreen } from 'hooks/index'

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
  const router = useRouter()
  const { address } = useAccount()
  const { tally } = router.query

  const tallyId = tally || 'mRvNpm'

  return (
    <Box height={isSmallScreen ? 'calc(100vh - 64px)' : 'calc(100vh - 73px)'}>
      <Box w="100%" h="100%" padding="0" backgroundColor="transparent">
        <iframe
          src={`https://tally.so/embed/${tallyId}?hideTitle=0&alignLeft=1&wallet=${address}`}
          frameBorder="0"
          width="100%"
          height="100%"
        ></iframe>
      </Box>
    </Box>
  )
}

export default Feedback
