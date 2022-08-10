import React, { useEffect, useState } from 'react'
import { Container, Box, SimpleGrid, Text, Icon, Image } from '@chakra-ui/react'
import { GetStaticProps } from 'next'
import { PassportReader } from '@gitcoinco/passport-sdk-reader'
import { Passport, Stamp } from '@gitcoinco/passport-sdk-types'
import { X, CircleWavyCheck } from 'phosphor-react'

import { useActiveWeb3React } from 'hooks'
import { MetaData } from 'components/Head'

const pageMeta: MetaData = {
  title: 'Passport',
}

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: { pageMeta },
  }
}

// TODO: move to config file
export const CERAMIC_PASSPORT = 'https://ceramic.passport-iam.gitcoin.co'

export const NUMBER_OF_STAMP_REQUIRED = 3

// Gitcoin
export const ALLOWED_ISSUER =
  'did:key:z6MkghvGHLobLEdj1bgRLhS4LPGJAvbMA1tn2zcRyqmYU5LC'

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

const reader = new PassportReader(CERAMIC_PASSPORT, '1')

export const getValidStamps = (passport: Passport): Stamp[] => {
  // const currentTimestamp = 1665401965000
  const currentTimestamp = Date.now()
  return passport.stamps.filter(
    (stamp) =>
      stamp.credential.issuer === ALLOWED_ISSUER &&
      Date.parse(stamp.credential.expirationDate) > currentTimestamp
  )
}

const OkIcon = <Icon as={CircleWavyCheck} color="green" display="inline" />
const KoIcon = <Icon as={X} color="red" display="inline" />

const PassportPage = (): JSX.Element => {
  const [stamps, setStamps] = useState({})
  const [validStamps, setValidStamps] = useState(null)
  const { account } = useActiveWeb3React()

  useEffect(() => {
    async function getData() {
      const passport: Passport = await reader.getPassport(account)
      // console.log('passport', passport)
      const stamps = {}
      for (const stamp of passport.stamps) {
        stamps[stamp.provider] = stamp
      }
      setValidStamps(getValidStamps(passport))
      // console.log('stamps', stamps)
      setStamps(stamps)
    }
    if (account) getData()
    else {
      setValidStamps(null)
      setStamps({})
    }
  }, [account])

  const explorerStatus = validStamps
    ? validStamps.length >= NUMBER_OF_STAMP_REQUIRED
    : null

  return (
    <Container maxW="container.xl">
      <Box py={12}>
        <Text fontSize="2xl">
          {'Explorer 👨‍🚀 status: '}
          {!account && '⚠️ Connect your wallet first'}
          {explorerStatus === true
            ? OkIcon
            : explorerStatus === false && (
                <>
                  {KoIcon}
                  {validStamps.length < NUMBER_OF_STAMP_REQUIRED &&
                    ` (missing ${
                      NUMBER_OF_STAMP_REQUIRED - validStamps.length
                    } stamps)`}
                </>
              )}
        </Text>
      </Box>
      <Box>
        <Text fontSize="2xl" mb={8}>
          {` Stamps: ${
            validStamps?.length || '-'
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
    </Container>
  )
}

export default PassportPage
