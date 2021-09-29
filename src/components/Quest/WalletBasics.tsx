import React, { useState } from 'react'
import { Button, Image } from '@chakra-ui/react'
import { useActiveWeb3React } from 'hooks'
import * as ethUtil from 'ethereumjs-util'
import { useMediaQuery } from '@chakra-ui/react'

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

const WalletBasics = (): {
  isQuestCompleted: boolean
  questComponent: React.ReactElement
} => {
  const [isSignatureVerified, setIsSignatureVerified] = useState(false)
  const [isSmallScreen] = useMediaQuery('(max-width: 800px)')

  const { library, account } = useActiveWeb3React()

  const testSignPersonalMessage = async () => {
    if (isSignatureVerified) return
    const message = 'Hello BANKLESS!'
    library
      .getSigner(account)
      .signMessage(message)
      .then((signature: any) => {
        // verify signature
        const signer = recoverPersonalSignature(signature, message)
        const verified = signer.toLowerCase() === account.toLowerCase()
        setIsSignatureVerified(verified)
      })
      .catch((error: any) => {
        console.error(error)
      })
  }
  return {
    isQuestCompleted: isSignatureVerified,
    questComponent: (
      <>
        <Image src="/images/TODO-tx-sign.jpg" />
        {account ? (
          <>
            <Button
              colorScheme={isSignatureVerified ? 'green' : 'red'}
              onClick={testSignPersonalMessage}
            >
              {isSignatureVerified
                ? 'Signature verified'
                : 'Sign a message with your wallet'}
            </Button>
            {isSmallScreen && (
              <p>
                * signing with your mobile wallet only works if you open this
                website directly inside&nbsp;
                <strong>MetaMask&apos;s browser</strong>
              </p>
            )}
          </>
        ) : (
          <h2>⚠️ Connect your wallet first!</h2>
        )}
      </>
    ),
  }
}

export default WalletBasics
