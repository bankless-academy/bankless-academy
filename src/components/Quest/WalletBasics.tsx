import React from 'react'
import { Button, Spinner } from '@chakra-ui/react'
import { Checks } from 'phosphor-react'
import { useActiveWeb3React } from 'hooks'

const WalletBasics = (): {
  isQuestCompleted: boolean
  questComponent: React.ReactElement
} => {
  const { account } = useActiveWeb3React()

  return {
    isQuestCompleted: !!account,
    questComponent: (
      <>
        <div>
          <h2>How to setup a MetaMask wallet</h2>
          <p>
            For convenience and ease of access throughout this lesson, you will
            need a MetaMask wallet. Next we will demonstrate how to set up a
            MetaMask wallet.
          </p>
          <p>
            Download the browser extension from the official website:&nbsp;
            <a
              href="https://metamask.io/download"
              target="_blank"
              rel="noreferrer"
            >
              https://metamask.io/download
            </a>
          </p>
        </div>
        <iframe
          src="https://www.youtube.com/embed/yr-SmVQAiTM?rel=0"
          allowFullScreen
        ></iframe>
        <Button
          variant="outlined"
          leftIcon={account ? <Checks /> : <Spinner speed="1s" />}
          color={account ? 'rgb(68, 169, 145)' : 'orange'}
          cursor="default"
          boxShadow="none !important"
        >
          {account
            ? 'Congrats for connecting your wallet! 👏🙂'
            : 'Waiting for you to connect your wallet'}
        </Button>
      </>
    ),
  }
}

export default WalletBasics
