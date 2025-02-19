import React from 'react'
import { Box, Button, Spinner } from '@chakra-ui/react'
import { CheckIcon } from '@chakra-ui/icons'
import { isDesktop } from 'react-device-detect'

import { theme } from 'theme/index'
import { useSmallScreen } from 'hooks/index'
import ExternalLink from 'components/ExternalLink'

export const ConnectFirst = (
  isSmallScreen: boolean,
  address: string
): React.ReactElement => (
  <Box display={isSmallScreen ? 'block' : 'flex'}>
    <div className="bloc1" style={{ alignSelf: 'center' }}>
      <Box fontSize="20px" fontWeight="bold" m="4">
        {`You'll need a crypto wallet for this quest.`}
      </Box>
      <Box display="flex" justifyContent="normal" mt="4">
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
      <Box m="4">
        {address ? null : (
          <>
            <Box fontSize="20px" fontWeight="bold">
              {`If you don't have one, let's set one up!`}
            </Box>
            <Box mt="2">
              {`Our onchain quests and rewards only work with a wallet connected.`}
            </Box>
            <Box mt="2">
              {`Wallets are like blockchain accounts. You'll need one to interact with blockchain apps, or to buy, hold and send cryptocurrency.`}
            </Box>
            <Box mt="2">
              {`Follow this quick instructional video to create your first wallet with Zerion: `}
              <ExternalLink href="https://bankless.ac/zerion">
                zerion.io
              </ExternalLink>
            </Box>
          </>
        )}
      </Box>
    </div>
    {!address && (
      <div className="bloc2">
        <iframe
          width="100%"
          src={
            isDesktop
              ? 'https://www.youtube-nocookie.com/embed/czL_qQ39AH0'
              : 'https://www.youtube-nocookie.com/embed/SFbo9QsO2t4'
          }
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
