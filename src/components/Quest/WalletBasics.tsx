import React from 'react'
import { Button, Spinner, Box } from '@chakra-ui/react'
import { CheckIcon } from '@chakra-ui/icons'
import { useMediaQuery } from '@chakra-ui/react'

import { theme } from 'theme/index'

const WalletBasics = (
  account: string
): {
  isQuestCompleted: boolean
  questComponent: React.ReactElement
} => {
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
              leftIcon={account ? <CheckIcon /> : <Spinner speed="1s" />}
              color={account ? theme.colors.correct : 'orange'}
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
      </>
    ),
  }
}

export default WalletBasics
