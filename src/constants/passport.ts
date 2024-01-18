export const CERAMIC_PASSPORT = 'https://ceramic.passport-iam.gitcoin.co'

export const NUMBER_OF_STAMP_REQUIRED = 2

// issued by Gitcoin
export const ALLOWED_ISSUER =
  'did:key:z6MkghvGHLobLEdj1bgRLhS4LPGJAvbMA1tn2zcRyqmYU5LC'

// SOURCE: https://github.com/gitcoinco/passport/blob/main/platforms/src/Twitter/Providers-config.ts
export const STAMP_PROVIDERS = {
  Google: {
    icon: 'https://passport.gitcoin.co/assets/googleStampIcon.svg',
    name: 'Google',
    description: 'Google Authentication',
    oauth: `https://accounts.google.com/o/oauth2/v2/auth?redirect_uri=${process.env.NEXT_PUBLIC_GOOGLE_CALLBACK}&prompt=consent&response_type=code&client_id=${process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID}&scope=email+profile&access_type=offlineRANDOM_STATE`
  },
  Twitter: {
    icon: 'https://passport.gitcoin.co/assets/twitterStampIcon.svg',
    name: 'Twitter',
    description: 'Twitter name',
    oauth: `/api/stamps/twitter`
  },
  Facebook: {
    icon: 'https://passport.gitcoin.co/assets/facebookStampIcon.svg',
    name: 'Facebook',
    description: 'Facebook name',
  },
  Linkedin: {
    icon: 'https://passport.gitcoin.co/assets/linkedinStampIcon.svg',
    name: 'LinkedIn',
    description: 'LinkedIn name',
    oauth: `https://www.linkedin.com/oauth/v2/authorization?response_type=code&client_id=${process.env.NEXT_PUBLIC_LINKEDIN_CLIENT_ID}&redirect_uri=${process.env.NEXT_PUBLIC_LINKEDIN_CALLBACK}RANDOM_STATE&scope=openid%20profile`
  },
  Discord: {
    icon: 'https://passport.gitcoin.co/assets/discordStampIcon.svg',
    name: 'Discord',
    description: 'Discord name',
  },
  Ens: {
    icon: 'https://passport.gitcoin.co/assets/ensStampIcon.svg',
    name: 'ENS',
    description: 'ENS name',
  },
  Brightid: {
    icon: 'https://passport.gitcoin.co/assets/brightidStampIcon.svg',
    name: 'Bright ID',
    description: 'Bright ID',
  },
  Poh: {
    icon: 'https://passport.gitcoin.co/assets/pohStampIcon.svg',
    name: 'Proof of Humanity',
    description: 'Proof of Humanity',
  },
}

export const EMPTY_PASSPORT = {
  verified: false,
  fraud: null,
  validStampsCount: 0,
  stamps: null,
}

export const ALLOWED_PROVIDERS = Object.keys(STAMP_PROVIDERS)

export const MAX_STAMPS = ALLOWED_PROVIDERS?.length
