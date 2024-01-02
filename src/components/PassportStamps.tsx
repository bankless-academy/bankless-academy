import { Box, SimpleGrid, Image, Icon } from '@chakra-ui/react'
import styled from '@emotion/styled'
import { useTranslation } from 'react-i18next'

import { ALLOWED_ISSUER, STAMP_PROVIDERS } from 'constants/passport'
// import { Stamps } from 'entities/passport'
import { theme } from 'theme/index'
import { useSmallScreen } from 'hooks/index'

const CircleIcon = (props) => (
  <Icon viewBox="0 0 200 200" {...props}>
    <path
      fill="currentColor"
      d="M 100, 100 m -75, 0 a 75,75 0 1,0 150,0 a 75,75 0 1,0 -150,0"
    />
  </Icon>
)

const GitcoinGrid = styled(SimpleGrid)<{ issmallscreen?: string }>`
  > div:nth-last-child(-n
      + ${(props) => (props.issmallscreen === 'true' ? '1' : '2')}) {
    border-bottom: none;
  }
`

const PassportStamps = ({
  stamps,
  displayStamps,
}: {
  stamps?: any
  displayStamps?: boolean
}): React.ReactElement => {
  const { t } = useTranslation()
  const [isSmallScreen] = useSmallScreen()
  return (
    <>
      {displayStamps && (
        <GitcoinGrid
          columns={[1, 2]}
          spacingX="40px"
          spacingY="0"
          issmallscreen={isSmallScreen.toString()}
        >
          {Object.entries(STAMP_PROVIDERS).map(([key, provider]) => {
            const stamp = stamps ? stamps[key] : null
            const currentTimestamp = Date.now()
            const isStampExpired = !(
              Date.parse(stamp?.stamp?.expirationDate) > currentTimestamp
            )
            const isTrustedIssuer = stamp?.stamp?.issuer === ALLOWED_ISSUER
            return (
              <Box
                key={`stamp-${key}`}
                pb={8}
                borderBottom="1px solid #72757B"
                p="2"
                display="flex"
                alignItems="center"
              >
                <Box width="40px" display="flex" justifyContent="center">
                  <Image src={provider.icon} height="30px" />
                </Box>
                <Box m={2}>{`${provider.name}`}</Box>
                <Box flexGrow={1} textAlign="right">
                  {stamp ? (
                    isStampExpired ? (
                      <span style={{ color: theme.colors.incorrect }}>
                        {t('stamp expired')}
                      </span>
                    ) : isTrustedIssuer ? (
                      // OK
                      <CircleIcon color={theme.colors.correct} />
                    ) : (
                      <span style={{ color: theme.colors.incorrect }}>
                        {t('untrusted DID issuer')}
                      </span>
                    )
                  ) : stamp === null ? (
                    // No info yet
                    // <CircleIcon color={theme.colors.incorrect} />
                    <Box
                      border="1px solid white"
                      borderRadius="50%"
                      width="12px"
                      height="12px"
                      display="inline-block"
                    ></Box>
                  ) : (
                    // Not OK
                    <CircleIcon color={theme.colors.incorrect} />
                  )}
                </Box>
              </Box>
            )
          })}
        </GitcoinGrid>
      )}
    </>
  )
}

export default PassportStamps
