export const CERAMIC_PASSPORT = 'https://ceramic.passport-iam.gitcoin.co'

export const NUMBER_OF_STAMP_REQUIRED = 2

// issued by Gitcoin
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
    name: 'ENS',
    description: 'ENS name',
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

export const EMPTY_PASSPORT = {
  verified: false,
  fraud: null,
  validStampsCount: 0,
  stamps: null,
}
