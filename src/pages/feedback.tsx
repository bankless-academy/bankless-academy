import React from 'react'
import { Box, Container } from '@chakra-ui/react'
import { GetStaticProps } from 'next'
import { useRouter } from 'next/router'

import { MetaData } from 'components/Head'

const pageMeta: MetaData = {
  title: 'Feedback',
}

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: { pageMeta },
  }
}

const Feedback = (): JSX.Element => {
  const router = useRouter()
  const { tally } = router.query

  const tallyId = tally || 'mRvNpm'

  return (
    <Container maxW="container.xl">
      <Box
        w="100%"
        height="1000px"
        borderRadius="12px"
        padding="4"
        backgroundColor="transparent"
      >
        <iframe
          src={`https://tally.so/embed/${tallyId}?hideTitle=0&alignLeft=1`}
          frameBorder="0"
          width="100%"
          height="100%"
        ></iframe>
      </Box>
    </Container>
  )
}

export default Feedback
