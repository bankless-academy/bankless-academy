import { useState } from 'react'
import { Button, Box, useToast } from '@chakra-ui/react'
import { CheckIcon } from '@chakra-ui/icons'

import { useActiveWeb3React } from 'hooks/index'
import switchNetwork from 'components/SwitchNetworkButton/switchNetwork'
import { track, verifySignature, getSignature } from 'utils'
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
  )
  const toast = useToast()

  const { library, chainId } = useActiveWeb3React()

  const signMessage = async () => {
    if (chainId !== 137) {
      const network = Object.values(NETWORKS).find(
        (network) => network.chainId === 137
      )
      toast.closeAll()
      if (!library.provider.isMetaMask) {
        toast({
          title: 'Wrong network',
          description: `Switch network to ${network.name} before signing this message.`,
          status: 'warning',
          duration: null,
        })
      }
      await switchNetwork(library.provider, 'matic')
    }
    const message = `I want to learn more about ${answer}`

    try {
      const signature = await getSignature(library, account, message)
      const verified = verifySignature(account, signature, message)
      if (verified) {
        track('intro_to_defi_quest_answer', answer)
      }
      setIsSignatureVerified(verified ? answer : 'false')
      localStorage.setItem('quest-intro-to-defi', verified ? answer : 'false')
    } catch (error) {
      console.error(error)
    }
  }

  return {
    isQuestCompleted: VERBS.includes(isSignatureVerified),
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
          onClick={signMessage}
          rightIcon={
            isSignatureVerified ? (
              <CheckIcon color={theme.colors.correct} />
            ) : null
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
