import { Box, SimpleGrid, Text, Image } from '@chakra-ui/react'

import { ALLOWED_ISSUER, STAMP_PROVIDERS } from 'constants/passport'
import { getNumberOfValidStamps } from 'utils/passport'
import { Stamps } from 'entities/passport'
import { OkIcon } from 'components/Passport'

const GitcoinPassport = ({
  stamps,
  displayStamps,
}: {
  stamps?: Stamps
  displayStamps?: boolean
}): React.ReactElement => {
  const numberOfValidStamps = getNumberOfValidStamps(stamps)
  return (
    <>
      <Box>
        <Text fontSize="2xl" mb={8}>
          {`Number of valid stamps in your wallet: ${
            numberOfValidStamps === null ? '-' : numberOfValidStamps
          }`}
        </Text>
      </Box>
      {displayStamps && (
        <SimpleGrid columns={{ sm: 1, md: 2, lg: 3 }} gap={6}>
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
                border="1px solid #72757B"
                p="8"
                borderRadius="lg"
                display="flex"
                flexDirection="column"
                alignItems="center"
              >
                <Image src={provider.icon} width="40px" />
                <Box m={8}>{`${provider.name} - ${provider.description}`}</Box>
                {stamp
                  ? isStampExpired
                    ? 'stamp expired'
                    : isTrustedIssuer
                    ? OkIcon
                    : 'Untrusted DID issuer'
                  : '--'}
              </Box>
            )
          })}
        </SimpleGrid>
      )}
    </>
  )
}

export default GitcoinPassport
