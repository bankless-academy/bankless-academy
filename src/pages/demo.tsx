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
                  // reset email
                  localStorage.removeItem('email')
                  // reset newsletter
                  localStorage.removeItem('newsletter')
                  // reset onboarding
                  localStorage.removeItem('onboarding')
                  // reset onboarding retry
                  localStorage.removeItem('onboarding-retry')
                  // reset referrer
                  localStorage.removeItem('referrer')
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
                  // localStorage.removeItem('quiz-bitcoin-basics-1')
                  // localStorage.removeItem('quiz-bitcoin-basics-2')
                  // localStorage.removeItem('quiz-bitcoin-basics-3')
                  // localStorage.removeItem('quiz-bitcoin-basics-4')
                  // localStorage.removeItem('quiz-bitcoin-basics-5')
                  // localStorage.removeItem('quiz-bitcoin-basics-6')
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
                  alert('Demo state is now activated ✅. ')
                }}
                mb={4}
                colorScheme="red"
              >
                Activate demo state
              </Button>
              <Box>
                Deletes email, newsletter subscription, referrer.
                <br />
                Resets state for Bitcoin Basics: slides + quests.
                <br />
                Resets state for Wallet Basics: slides + quizzes + quests.
                <br />
                Simulates no badge for Bitcoin Basics & Wallet Basics. Badges
                will appear again if you refresh the page or go to your Explorer
                profile.
                <br />
                Disables live badge detection.
                <br />
                Removes Human Passport stamps.
              </Box>
              <br />
              <br />
              <Button
                onClick={() => {
                  localStorage.removeItem('demo')
                  alert('Demo state is now disabled.')
                }}
                mb={4}
                colorScheme="green"
              >
                Disable demo state
              </Button>
              <Box>Activates back live badge detection.</Box>
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
