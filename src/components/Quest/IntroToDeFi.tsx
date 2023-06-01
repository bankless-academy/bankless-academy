import { useState } from 'react'
import { Button, Box, useToast } from '@chakra-ui/react'
import { CheckIcon, CloseIcon } from '@chakra-ui/icons'
import { useNetwork, useAccount } from 'wagmi'
import { switchNetwork, signMessage } from '@wagmi/core'

import { track, verifySignature } from 'utils'
import { NETWORKS } from 'constants/networks'
import { theme } from 'theme/index'

const VERBS = ['Investing', 'Trading', 'Lending & Borrowing', 'Staking']

const IntroToDeFi = (
  account: string
): {
  isQuestCompleted: boolean
  questComponent: React.ReactElement
} => {
  const [answer, setAnswer] = useState(
    localStorage.getItem('quest-intro-to-defi')
  )
  const [isSignatureVerified, setIsSignatureVerified] = useState(
    localStorage.getItem('quest-intro-to-defi')
      ? VERBS.includes(localStorage.getItem('quest-intro-to-defi'))
      : null
  )
  const toast = useToast()

  const { chain } = useNetwork()
  const { connector } = useAccount()

  const sign = async () => {
    if (![1, 10, 137].includes(chain?.id)) {
      const network = Object.values(NETWORKS).find(
        (network) => network.chainId === 1
      )
      toast.closeAll()
      if (connector?.name !== 'MetaMask') {
        toast({
          title: 'Wrong network',
          description: `Switch network to ${network.name} before signing this message.`,
          status: 'warning',
          duration: null,
          isClosable: true,
        })
      }
      try {
        await switchNetwork({ chainId: 1 })
      } catch (error) {
        console.error(console.error)
      }
    }
    const message = `I want to learn more about ${answer}`

    try {
      const signature = await signMessage({ message })
      const verified = verifySignature(account, signature, message)
      if (verified) {
        track('intro_to_defi_quest_answer', answer)
      }
      setIsSignatureVerified(verified)
      localStorage.setItem('quest-intro-to-defi', verified ? answer : 'false')
    } catch (error) {
      console.error(error)
    }
  }

  return {
    isQuestCompleted: isSignatureVerified,
    questComponent: (
      <>
        <h2>What are you most interested to learn to do with DeFi?</h2>
        <Box textAlign="center" pb="5">
          {VERBS.map((verb, key) => (
            <Button
              mr="3"
              mb="3"
              key={key}
              onClick={() => setAnswer(verb)}
              backgroundColor={answer === verb ? '#44A991' : ''}
              _hover={{ bg: answer === verb ? '#54cfb3' : '#4d4d4d' }}
            >
              {verb}
            </Button>
          ))}
        </Box>
        <Button
          colorScheme={isSignatureVerified ? theme.colors.correct : 'red'}
          onClick={sign}
          rightIcon={
            isSignatureVerified === null ? null : isSignatureVerified ===
              true ? (
              <CheckIcon color={theme.colors.correct} />
            ) : (
              <CloseIcon color={theme.colors.incorrect} />
            )
          }
          variant={isSignatureVerified ? 'secondary' : 'primary'}
          isDisabled={!answer}
        >
          {isSignatureVerified
            ? 'Signature verified'
            : answer
            ? 'Sign your answer'
            : 'Select your answer'}
        </Button>
      </>
    ),
  }
}

export default IntroToDeFi
