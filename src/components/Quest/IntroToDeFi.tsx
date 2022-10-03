import { useState } from 'react'
import { Button, Box, Link } from '@chakra-ui/react'
import { isMobile } from 'react-device-detect'

import { useActiveWeb3React } from 'hooks'
import switchNetwork from 'components/SwitchNetworkButton/switchNetwork'
import { track, verifySignature, getSignature } from 'utils'

const VERBS = ['Investing', 'Trading', 'Lending & Borrowing', 'Staking']

const IntroToDeFi = (
  account: string
): {
  isQuestCompleted: boolean
  questComponent: React.ReactElement
} => {
  const [answer, setAnswer] = useState(null)
  const [isSignatureVerified, setIsSignatureVerified] = useState(false)

  const { library, chainId } = useActiveWeb3React()

  const hostname = window?.location.hostname

  const signMessage = async () => {
    if (isSignatureVerified) return
    const message = `I want to learn more about ${answer}`

    try {
      const signature = await getSignature(library, account, message)
      const verified = verifySignature(account, signature, message)
      if (verified) {
        track('intro_to_defi_quest_answer', answer)
      }
      setIsSignatureVerified(verified)
    } catch (error) {
      console.error(error)
    }
  }

  const signatureButton = () => (
    <>
      <Button
        colorScheme={isSignatureVerified ? 'green' : 'red'}
        onClick={signMessage}
        variant="primary"
        isDisabled={!answer}
      >
        {isSignatureVerified
          ? 'Signature verified'
          : answer
          ? 'Sign your answer'
          : 'Select your answer'}
      </Button>
      {isMobile && (
        <p>
          * if you have trouble signing on mobile, we recommend to open this
          website directly inside&nbsp;
          <Link href={`https://metamask.app.link/dapp/${hostname}`} color="red">
            MetaMask&apos;s browser
          </Link>
        </p>
      )}
    </>
  )

  const networkSwitchButton = () => (
    <>
      <Button
        colorScheme={isSignatureVerified ? 'green' : 'red'}
        onClick={() => switchNetwork('mainnet')}
      >
        Switch Network to {'"Ethereum"'}
      </Button>
    </>
  )

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
        {chainId === 1 ? signatureButton() : networkSwitchButton()}
      </>
    ),
  }
}

export default IntroToDeFi
