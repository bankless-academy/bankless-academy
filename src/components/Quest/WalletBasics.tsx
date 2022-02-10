import React from 'react'
import { Button, Spinner, Box } from '@chakra-ui/react'
import { Checks } from 'phosphor-react'
import { useMediaQuery } from '@chakra-ui/react'
import { useActiveWeb3React } from 'hooks'

const WalletBasics = (): {
  isQuestCompleted: boolean
  questComponent: React.ReactElement
} => {
  const { account } = useActiveWeb3React()
  const [isSmallScreen] = useMediaQuery('(max-width: 800px)')

  return {
    isQuestCompleted: !!account,
    questComponent: (
      <>
        <Box display={isSmallScreen ? 'block' : 'flex'}>
          <div className="bloc1">
            <h2>How to setup a MetaMask wallet</h2>
            <p>
              For convenience and ease of access throughout this lesson, you
              will need a MetaMask wallet. Next we will demonstrate how to set
              up a MetaMask wallet.
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
            <Button
              variant="outlined"
              leftIcon={account ? <Checks /> : <Spinner speed="1s" />}
              color={account ? 'rgb(68, 169, 145)' : 'orange'}
              cursor="default"
              boxShadow="none !important"
            >
              {account
                ? 'Congrats for connecting your wallet! 👏🙂'
                : 'Waiting to detect your wallet ...'}
            </Button>
          </div>
          <div className="bloc2">
            <iframe
              src="https://www.youtube.com/embed/PjBY0pVFnQ8?rel=0"
              allowFullScreen
            ></iframe>
          </div>
        </Box>
        <p>
          {account
            ? null
            : 'To validate this quest and finish this lesson, connect your wallet to this website. To do this, click the "Connect wallet" button in the top-right corner.'}
        </p>
      </>
    ),
  }
}

export default WalletBasics
