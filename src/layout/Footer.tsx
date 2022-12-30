import React from 'react'
import { Box } from '@chakra-ui/react'

import ExternalLink from 'components/ExternalLink'
import { PROJECT_NAME, IS_WHITELABEL } from 'constants/index'
import { useSmallScreen } from 'hooks/index'

const Footer: React.FC = () => {
  const [isSmallScreen] = useSmallScreen()
  return (
    <footer>
      <Box
        display={IS_WHITELABEL && isSmallScreen ? 'block' : 'flex'}
        justifyContent={IS_WHITELABEL ? 'center' : 'space-around'}
        w="100%"
        maxW="800px"
        mx="auto"
        mt="16"
      >
        {IS_WHITELABEL ? (
          <>
            <Box textAlign="center">{PROJECT_NAME}</Box>
            <Box textAlign="center">
              <span hidden={isSmallScreen}>&nbsp;|&nbsp;</span>
              powered by&nbsp;
              <ExternalLink href="https://whitelabel.banklessacademy.com/?utm_source=BanklessAcademyWhiteLabel&utm_medium=website&utm_campaign=WhiteLabel">
                Bankless Academy
              </ExternalLink>
            </Box>
          </>
        ) : (
          <>
            <ExternalLink
              display="flex"
              href="https://twitter.com/BanklessAcademy"
            >
              Twitter
            </ExternalLink>
            <span>&nbsp;|&nbsp;</span>
            <ExternalLink href="https://gm.xyz/c/BanklessAcademy">
              Community
            </ExternalLink>
            <span>&nbsp;|&nbsp;</span>
            <ExternalLink href="/faq">FAQ</ExternalLink>
          </>
        )}
      </Box>
    </footer>
  )
}

export default Footer
