export const CERAMIC_PASSPORT = 'https://ceramic.passport-iam.gitcoin.co'

export const NUMBER_OF_STAMP_REQUIRED = 2

// issued by Gitcoin
export const ALLOWED_ISSUER =
  'did:key:z6MkghvGHLobLEdj1bgRLhS4LPGJAvbMA1tn2zcRyqmYU5LC'

// SOURCE: https://github.com/gitcoinco/passport/blob/main/platforms/src/Twitter/Providers-config.ts
export const STAMP_PLATFORMS = {
  google: {
    icon: 'https://passport.gitcoin.co/assets/googleStampIcon.svg',
    name: 'Google',
    description: 'Google Authentication',
    // page
    oauth: `https://accounts.google.com/o/oauth2/v2/auth?redirect_uri=${process.env.NEXT_PUBLIC_STAMP_CALLBACK}/google&prompt=consent&response_type=code&client_id=${process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID}&scope=email+profile&access_type=offline&state=REPLACE_ADDRESS`,
    provider: 'Google'
  },
  twitter: {
    icon: 'https://passport.gitcoin.co/assets/twitterStampIcon.svg',
    name: 'Twitter',
    description: 'Twitter name',
    // page
    oauth: `/api/stamps/twitter?address=REPLACE_ADDRESS`,
    provider: 'twitterAccountAgeGte#180'
  },
  facebook: {
    icon: 'https://passport.gitcoin.co/assets/facebookStampIcon.svg',
    name: 'Facebook',
    // js
    description: 'Facebook name',
    provider: 'Facebook'
  },
  linkedin: {
    icon: 'https://passport.gitcoin.co/assets/linkedinStampIcon.svg',
    name: 'LinkedIn',
    description: 'LinkedIn name',
    // page
    oauth: `https://www.linkedin.com/oauth/v2/authorization?response_type=code&client_id=${process.env.NEXT_PUBLIC_LINKEDIN_CLIENT_ID}&redirect_uri=${process.env.NEXT_PUBLIC_STAMP_CALLBACK}/linkedin&state=REPLACE_ADDRESS&scope=openid%20profile`,
    provider: 'Linkedin'
  },
  discord: {
    icon: 'https://passport.gitcoin.co/assets/discordStampIcon.svg',
    name: 'Discord',
    description: 'Discord name',
    // page
    oauth: `https://discord.com/api/oauth2/authorize?response_type=code&scope=identify&client_id=${process.env.NEXT_PUBLIC_DISCORD_CLIENT_ID}&state=REPLACE_ADDRESS&redirect_uri=${process.env.NEXT_PUBLIC_STAMP_CALLBACK}/discord`,
    provider: 'Discord'
  },
  ens: {
    icon: 'https://passport.gitcoin.co/assets/ensStampIcon.svg',
    name: 'ENS',
    description: 'ENS name',
    // transparent JS
    oauth: `/api/stamps/callback/ens?json=true&address=REPLACE_ADDRESS`,
    provider: 'Ens'
  },
  brightid: {
    icon: 'https://passport.gitcoin.co/assets/brightidStampIcon.svg',
    name: 'Bright ID',
    description: 'Bright ID',
    // page
    oauth: `/brightid.html?callback=${process.env.NEXT_PUBLIC_STAMP_CALLBACK}/brightid?address=REPLACE_ADDRESS&userDid=did:pkh:eip155:1:REPLACE_ADDRESS`,
    provider: 'Brightid'
  },
  poh: {
    icon: 'https://passport.gitcoin.co/assets/pohStampIcon.svg',
    name: 'Proof of Humanity',
    description: 'Proof of Humanity',
    // transparent JS
    oauth: `/api/stamps/callback/poh?json=true&address=REPLACE_ADDRESS`,
    provider: 'Poh'
  },
}

export const EMPTY_PASSPORT = {
  verified: false,
  fraud: null,
  validStampsCount: 0,
  stamps: null,
}

export const ALLOWED_PLATFORMS = Object.keys(STAMP_PLATFORMS)
export const ALLOWED_PROVIDERS = Object.keys(STAMP_PLATFORMS).map(platform => STAMP_PLATFORMS[platform].provider)

export const MAX_STAMPS = ALLOWED_PLATFORMS?.length
