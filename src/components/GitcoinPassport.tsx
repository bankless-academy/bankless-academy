import { Box, SimpleGrid, Text, Image } from '@chakra-ui/react'
import {
  NUMBER_OF_STAMP_REQUIRED,
  ALLOWED_ISSUER,
  OkIcon,
  getNumberOfValidStamps,
  Stamps,
} from 'pages/passport'

// https://github.com/gitcoinco/passport/blob/main/app/config/providers.ts
export const STAMP_PROVIDERS = {
  Google: {
    icon: 'https://passport.gitcoin.co/assets/googleStampIcon.svg',
    name: 'Google',
    description: 'Google Authentication',
  },
  Ens: {
    icon: 'https://passport.gitcoin.co/assets/ensStampIcon.svg',
    name: 'Ens',
    description: 'Ens name',
  },
  Poh: {
    icon: 'https://passport.gitcoin.co/assets/pohStampIcon.svg',
    name: 'POH',
    description: 'Proof of Humanity',
  },
  Twitter: {
    icon: 'https://passport.gitcoin.co/assets/twitterStampIcon.svg',
    name: 'Twitter',
    description: 'Twitter name',
  },
  POAP: {
    icon: 'https://passport.gitcoin.co/assets/poapStampIcon.svg',
    name: 'POAP',
    description: 'POAP Verification',
  },
  Facebook: {
    icon: 'https://passport.gitcoin.co/assets/facebookStampIcon.svg',
    name: 'Facebook',
    description: 'Facebook name',
  },
  Brightid: {
    icon: 'https://passport.gitcoin.co/assets/brightidStampIcon.svg',
    name: 'Bright ID',
    description: 'Bright ID',
  },
  Github: {
    icon: 'https://passport.gitcoin.co/assets/githubLogoLight.svg',
    name: 'Github',
    description: 'Github name',
  },
  Linkedin: {
    icon: 'https://passport.gitcoin.co/assets/linkedinStampIcon.svg',
    name: 'Linkedin',
    description: 'Linkedin name',
  },
  Discord: {
    icon: 'https://passport.gitcoin.co/assets/discordStampIcon.svg',
    name: 'Discord',
    description: 'Discord name',
  },
}

const GitcoinPassport = ({
  stamps,
}: {
  stamps: Stamps
}): React.ReactElement => {
  const numberOfValidStamps = getNumberOfValidStamps(stamps)
  return (
    <>
      <Box>
        <Text fontSize="2xl" mb={8}>
          {` Stamps: ${
            numberOfValidStamps || '-'
          } (${NUMBER_OF_STAMP_REQUIRED} required)`}
        </Text>
      </Box>
      <SimpleGrid columns={{ sm: 1, md: 2, lg: 3 }} gap={6}>
        {Object.entries(STAMP_PROVIDERS).map(([key, provider]) => {
          const stamp = stamps[key] || null
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
    </>
  )
}

export default GitcoinPassport
