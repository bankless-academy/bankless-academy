import { Box, SimpleGrid, Image, useMediaQuery, Icon } from '@chakra-ui/react'
import styled from '@emotion/styled'

import { ALLOWED_ISSUER, STAMP_PROVIDERS } from 'constants/passport'
import { Stamps } from 'entities/passport'
import { theme } from 'theme/index'

const CircleIcon = (props) => (
  <Icon viewBox="0 0 200 200" {...props}>
    <path
      fill="currentColor"
      d="M 100, 100 m -75, 0 a 75,75 0 1,0 150,0 a 75,75 0 1,0 -150,0"
    />
  </Icon>
)

const OkIcon = <CircleIcon color={theme.colors.correct} />
const KoIcon = <CircleIcon color={theme.colors.incorrect} />

const GitcoinGrid = styled(SimpleGrid)<{ issmallscreen?: string }>`
  > div:nth-last-child(-n
      + ${(props) => (props.issmallscreen === 'true' ? '1' : '2')}) {
    border-bottom: none;
  }
`

const GitcoinPassport = ({
  stamps,
  displayStamps,
}: {
  stamps?: Stamps
  displayStamps?: boolean
}): React.ReactElement => {
  const [isSmallScreen] = useMediaQuery('(max-width: 800px)')
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
              Date.parse(stamp?.credential?.expirationDate) > currentTimestamp
            )
            const isTrustedIssuer = stamp?.credential?.issuer === ALLOWED_ISSUER
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
                        stamp expired
                      </span>
                    ) : isTrustedIssuer ? (
                      OkIcon
                    ) : (
                      'Untrusted DID issuer'
                    )
                  ) : stamp === null ? (
                    '--'
                  ) : (
                    KoIcon
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

export default GitcoinPassport
