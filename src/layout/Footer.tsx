import React from 'react'
import { Box } from '@chakra-ui/react'
import { useTranslation } from 'react-i18next'

import ExternalLink from 'components/ExternalLink'
import { PROJECT_NAME, IS_WHITELABEL } from 'constants/index'
import { useSmallScreen } from 'hooks/index'

const Footer: React.FC = () => {
  const { t } = useTranslation()
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
              {t('powered by')}&nbsp;
              <ExternalLink href="https://whitelabel.banklessacademy.com/?utm_source=BanklessAcademyWhiteLabel&utm_medium=website&utm_campaign=WhiteLabel">
                Bankless Academy
              </ExternalLink>
            </Box>
          </>
        ) : (
          <>
            <ExternalLink display="flex" href="https://bankless.ac/twitter">
              {t('Twitter')}
            </ExternalLink>
            <span>&nbsp;|&nbsp;</span>
            <ExternalLink href="https://bankless.ac/community">
              {t('Community')}
            </ExternalLink>
            <span>&nbsp;|&nbsp;</span>
            <ExternalLink href="/faq">{t('FAQ')}</ExternalLink>
          </>
        )}
      </Box>
    </footer>
  )
}

export default Footer
