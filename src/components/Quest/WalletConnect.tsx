import React from 'react'
import { Button, Spinner } from '@chakra-ui/react'
import { Checks } from 'phosphor-react'

import { useActiveWeb3React } from 'hooks'

const WalletConnect = (): {
  isQuestCompleted: boolean
  questComponent: React.ReactElement
} => {
  const { account } = useActiveWeb3React()

  return {
    isQuestCompleted: !!account,
    questComponent: (
      <>
        <Button
          variant="outlined"
          leftIcon={account ? <Checks /> : <Spinner speed="1s" />}
          color={account ? 'rgb(68, 169, 145)' : 'orange'}
          cursor="default"
          boxShadow="none !important"
        >
          {account
            ? 'Thank you for connecting your wallet!'
            : 'Waiting to detect your wallet ...'}
        </Button>
        <p>
          {account
            ? null
            : 'To validate this quest and finish this lesson, connect your wallet to this website. To do this, click the "Connect wallet" button in the top-right corner.'}
        </p>
      </>
    ),
  }
}

export default WalletConnect
