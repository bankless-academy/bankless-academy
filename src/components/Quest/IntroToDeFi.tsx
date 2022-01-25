import { useState } from 'react'
import { Button, Box } from '@chakra-ui/react'
import { useActiveWeb3React } from 'hooks'
import { isMobile } from 'react-device-detect'

import switchNetwork from 'components/SwitchNetworkButton/switchNetwork'
import { track, verifySignature } from 'utils'

const VERBS = ['Investing', 'Trading', 'Lending & Borrowing', 'Staking']

const IntroToDeFi = (): {
  isQuestCompleted: boolean
  questComponent: React.ReactElement
} => {
  const [answer, setAnswer] = useState(null)
  const [isSignatureVerified, setIsSignatureVerified] = useState(false)

  const { library, account, chainId } = useActiveWeb3React()
  const walletAddress = account

  const signMessage = async () => {
    if (isSignatureVerified) return
    const message = `I want to learn more about ${answer}`
    library
      .getSigner(walletAddress)
      .signMessage(message)
      .then((signature: any) => {
        const verified = verifySignature(walletAddress, signature, message)
        if (verified) {
          track('intro_to_defi_quest_answer', answer)
        }
        setIsSignatureVerified(verified)
      })
      .catch((error: any) => {
        console.error(error)
      })
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
          * signing with your mobile wallet only works if you open this website
          directly inside&nbsp;
          <strong>MetaMask&apos;s browser</strong>
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
      {isMobile && (
        <p>
          * network switching with your mobile wallet only works if you open
          this website directly inside&nbsp;
          <strong>MetaMask&apos;s browser</strong>
        </p>
      )}
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
        {walletAddress ? (
          chainId === 1 ? (
            signatureButton()
          ) : (
            networkSwitchButton()
          )
        ) : (
          <h2>
            ⚠️ Connect your wallet first (&quot;Connect wallet&quot; button in
            the top-right corner)
          </h2>
        )}
      </>
    ),
  }
}

export default IntroToDeFi
