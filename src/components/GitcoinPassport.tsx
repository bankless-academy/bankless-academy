import { Box, SimpleGrid, Image } from '@chakra-ui/react'

import { ALLOWED_ISSUER, STAMP_PROVIDERS } from 'constants/passport'
import { Stamps } from 'entities/passport'
import { OkIcon, KoIcon } from 'components/Passport'

const GitcoinPassport = ({
  stamps,
  displayStamps,
}: {
  stamps?: Stamps
  displayStamps?: boolean
}): React.ReactElement => (
  <>
    {displayStamps && (
      <SimpleGrid columns={[2, 3]} gap={6}>
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
              p="2"
              borderRadius="lg"
              display="flex"
              flexDirection="column"
              alignItems="center"
            >
              <Image src={provider.icon} height="30px" />
              <Box m={2}>{`${provider.name}`}</Box>
              {stamp ? (
                isStampExpired ? (
                  <span style={{ color: 'red' }}>stamp expired</span>
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
          )
        })}
      </SimpleGrid>
    )}
  </>
)

export default GitcoinPassport
