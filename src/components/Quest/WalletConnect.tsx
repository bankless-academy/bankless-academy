import React from 'react'
import { Box, Button, Spinner } from '@chakra-ui/react'
import { CheckIcon } from '@chakra-ui/icons'

import { theme } from 'theme/index'
import { useSmallScreen } from 'hooks/index'

export const ConnectFirst = (
  isSmallScreen: boolean,
  address: string
): React.ReactElement => (
  <Box display={isSmallScreen ? 'block' : 'flex'}>
    <div className="bloc1">
      <Box display="flex" justifyContent="center" mt="8">
        <Button
          variant="outlined"
          leftIcon={address ? <CheckIcon /> : <Spinner speed="1s" />}
          color={address ? theme.colors.correct : 'orange'}
          cursor="default"
          boxShadow="none !important"
        >
          {address ? 'Wallet connected!' : 'Waiting to detect your wallet ...'}
        </Button>
      </Box>
      <p>
        {address ? null : (
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
    {!address && (
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
  address: string
): {
  isQuestCompleted: boolean
  questComponent: React.ReactElement
} => {
  const [isSmallScreen] = useSmallScreen()

  return {
    isQuestCompleted: !!address,
    questComponent: ConnectFirst(isSmallScreen, address),
  }
}

export default WalletConnect
