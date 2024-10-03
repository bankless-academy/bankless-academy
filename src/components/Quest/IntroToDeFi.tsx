import { useState } from 'react'
import { Button, Box, useToast } from '@chakra-ui/react'
import { CheckIcon, CloseIcon } from '@chakra-ui/icons'
import { signMessage } from '@wagmi/core'

import { track } from 'utils/index'
import { theme } from 'theme/index'
import { wagmiConfig } from 'utils/wagmi'
import { verifySignature } from 'utils/SignatureUtil'
import { useAccount } from 'wagmi'

const VERBS = ['Investing', 'Trading', 'Lending & Borrowing', 'Staking']

const IntroToDeFi = (
  account: string
): {
  isQuestCompleted: boolean
  questComponent: React.ReactElement
} => {
  const { chain } = useAccount()
  const [answer, setAnswer] = useState(
    localStorage.getItem('quest-intro-to-defi')
  )
  const [isSignatureVerified, setIsSignatureVerified] = useState(
    localStorage.getItem('quest-intro-to-defi')
      ? VERBS.includes(localStorage.getItem('quest-intro-to-defi'))
      : null
  )
  const toast = useToast()

  const sign = async () => {
    const message = `I want to learn more about ${answer}`

    try {
      toast.closeAll()
      toast({
        title: `Intro to DeFi quest`,
        description: `Open your wallet to sign a message.`,
        status: 'warning',
        duration: null,
      })
      const signature = await signMessage(wagmiConfig, {
        account: account as `0x${string}`,
        message,
      }).catch((error) => {
        console.error(error)
        toast.closeAll()
        let errorMessage = error?.message?.split('\n')[0]
        if (errorMessage.includes('switch chain'))
          errorMessage += ` Try changing the network to Ethereum manually from your wallet.`
        toast({
          title: `Intro to DeFi quest error`,
          description: `Error while signing the message: ${errorMessage}`,
          status: 'error',
          duration: 20000,
          isClosable: true,
        })
        setIsSignatureVerified(false)
      })
      if (!signature) return
      toast.closeAll()
      const verified = await verifySignature({
        address: account,
        message,
        signature,
        chainId: chain.id,
      })
      if (verified) {
        track('intro_to_defi_quest_answer', answer)
      }
      setIsSignatureVerified(verified)
      localStorage.setItem('quest-intro-to-defi', verified ? answer : 'false')
    } catch (error) {
      console.error(error)
      setIsSignatureVerified(false)
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
