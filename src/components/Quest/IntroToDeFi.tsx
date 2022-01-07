import { useState } from 'react'
import { Button, Box } from '@chakra-ui/react'
import { useActiveWeb3React } from 'hooks'
import { isMobile } from 'react-device-detect'
import * as ethUtil from 'ethereumjs-util'

import switchNetwork from 'components/SwitchNetworkButton/switchNetwork'
import { track } from 'utils'

// TODO: move to utils
function hashPersonalMessage(msg: string): string {
  const buffer = Buffer.from(msg)
  const result = ethUtil.hashPersonalMessage(buffer)
  const hash = ethUtil.bufferToHex(result)
  return hash
}
function recoverPublicKey(sig: string, hash: string): string {
  const sigParams = ethUtil.fromRpcSig(sig)
  const hashBuffer = Buffer.from(hash.replace('0x', ''), 'hex')
  const result = ethUtil.ecrecover(
    hashBuffer,
    sigParams.v,
    sigParams.r,
    sigParams.s
  )
  const signer = ethUtil.bufferToHex(ethUtil.publicToAddress(result))
  return signer
}
function recoverPersonalSignature(sig: string, msg: string): string {
  const hash = hashPersonalMessage(msg)
  const signer = recoverPublicKey(sig, hash)
  return signer
}

const VERBS = [
  'Hodl',
  'Lend',
  'Borrow',
  'Stake',
  'Invest',
  'Spend',
  'Earn',
  'Trade',
  'Bet',
]

const IntroToDeFi = (): {
  isQuestCompleted: boolean
  questComponent: React.ReactElement
} => {
  const [answer, setAnswer] = useState(null)
  const [isSignatureVerified, setIsSignatureVerified] = useState(false)

  const { library, account, chainId } = useActiveWeb3React()

  const testSignPersonalMessage = async () => {
    if (isSignatureVerified) return
    const message = `I want to learn how to ${answer}`
    library
      .getSigner(account)
      .signMessage(message)
      .then((signature: any) => {
        // verify signature
        const signer = recoverPersonalSignature(signature, message)
        const verified = signer.toLowerCase() === account.toLowerCase()
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
        onClick={testSignPersonalMessage}
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
        {account ? (
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
