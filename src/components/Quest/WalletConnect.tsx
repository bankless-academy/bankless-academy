import React from 'react'
import { Box, Button, Spinner } from '@chakra-ui/react'
import { CheckIcon } from '@chakra-ui/icons'
import { useMediaQuery } from '@chakra-ui/react'

import { theme } from 'theme/index'

export const ConnectFirst = (
  isSmallScreen: boolean,
  account: string
): React.ReactElement => (
  <Box display={isSmallScreen ? 'block' : 'flex'}>
    <div className="bloc1">
      <Box display="flex" justifyContent="center" mt="8">
        <Button
          variant="outlined"
          leftIcon={account ? <CheckIcon /> : <Spinner speed="1s" />}
          color={account ? theme.colors.correct : 'orange'}
          cursor="default"
          boxShadow="none !important"
        >
          {account ? 'Wallet connected!' : 'Waiting to detect your wallet ...'}
        </Button>
      </Box>
      <p>
        {account ? null : (
          <>
            {`To finish this lesson, connect your
          wallet to this website.`}
            <br />
            {`To do this, click the "Connect wallet" button in the top-right
          corner.`}
            <br />
            {`If you don't have a wallet yet, follow the instructions in this video.`}
          </>
        )}
      </p>
    </div>
    {!account && (
      <div className="bloc2">
        <iframe
          src="https://www.youtube.com/embed/PjBY0pVFnQ8?rel=0"
          allowFullScreen
        ></iframe>
      </div>
    )}
  </Box>
)

const WalletConnect = (
  account: string
): {
  isQuestCompleted: boolean
  questComponent: React.ReactElement
} => {
  const [isSmallScreen] = useMediaQuery('(max-width: 800px)')

  return {
    isQuestCompleted: !!account,
    questComponent: ConnectFirst(isSmallScreen, account),
  }
}

export default WalletConnect
