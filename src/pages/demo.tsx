import React from 'react'
import { GetStaticProps } from 'next'
import { Container, Box, Button } from '@chakra-ui/react'

import { MetaData } from 'components/Head'
import { useAccount } from 'wagmi'
import { api } from 'utils/index'

const pageMeta: MetaData = {
  title: 'Bankless Academy Demo',
  canonical: '/demo',
  noindex: true,
}

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: { pageMeta },
  }
}

const Demo = (): JSX.Element => {
  const { address } = useAccount()
  return (
    <>
      <Container maxW="container.xl">
        <Box mt={8}>
          {address ? (
            <Box>
              <Button
                onClick={async () => {
                  // reset my stamps
                  await api('/api/passport', {
                    address,
                    reset: 'true',
                  })
                  localStorage.removeItem('passport')
                  // add demo state
                  localStorage.setItem('demo', 'true')
                  // reset state for Wallet Basics
                  localStorage.removeItem('wallet-basics')
                  localStorage.removeItem('isBadgeMinted-1')
                  localStorage.removeItem('quiz-wallet-basics-1')
                  localStorage.removeItem('quiz-wallet-basics-2')
                  localStorage.removeItem('quiz-wallet-basics-3')
                  localStorage.removeItem('quiz-wallet-basics-4')
                  localStorage.removeItem('quiz-wallet-basics-5')
                  localStorage.removeItem('quiz-wallet-basics-6')
                  localStorage.removeItem('quiz-wallet-basics-7')
                  localStorage.removeItem('quiz-wallet-basics-8')
                  // reset state for Bitcoin Basics
                  localStorage.removeItem('bitcoin-basics')
                  localStorage.removeItem('isBadgeMinted-12')
                  localStorage.removeItem('quiz-bitcoin-basics-1')
                  localStorage.removeItem('quiz-bitcoin-basics-2')
                  localStorage.removeItem('quiz-bitcoin-basics-3')
                  localStorage.removeItem('quiz-bitcoin-basics-4')
                  localStorage.removeItem('quiz-bitcoin-basics-5')
                  localStorage.removeItem('quiz-bitcoin-basics-6')
                  localStorage.removeItem('quest-bitcoin-basics')
                  localStorage.removeItem('animation-bitcoin')
                  // remove
                  localStorage.setItem(
                    'badgesMinted',
                    JSON.stringify(
                      JSON.parse(
                        localStorage.getItem('badgesMinted') || '[]'
                      ).filter((badgeId) => badgeId !== 1 && badgeId !== 12)
                    )
                  )
                  alert(
                    'Demo state is now activated ✅. Badge demo state will be lost if you refresh the page or go to your profile page.'
                  )
                }}
                mb={4}
                colorScheme="red"
              >
                Reset demo state for Bitcoin Basics & Wallet Basics + remove
                Gitcoin Passport stamps
              </Button>
              <br />
              <br />
              <Button
                onClick={() => {
                  localStorage.removeItem('demo')
                  alert('Demo state is now disabled.')
                }}
                mb={4}
                colorScheme="red"
              >
                Disable demo hack
              </Button>
            </Box>
          ) : (
            <>Connect your wallet first</>
          )}
        </Box>
      </Container>
    </>
  )
}

export default Demo
