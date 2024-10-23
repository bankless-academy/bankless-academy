

export const ACHIEVEMENTS = {
  'gitcoin-donation': {
    label: 'Gitcoin',
    description: 'Gitcoin Donation',
    helper: 'Donating on Gitcoin since June 2023 (using Allo Protocol) increases your score by 3 points.',
    points: 3,
    image: '/images/gitcoin-donation.png',
    link: 'https://explorer.gitcoin.co/#/projects/0xa40bea19733bd9fad64d6c9807497041f379c12d93af17a6283e2761e20917ad?utm_source=app.banklessacademy.com&utm_medium=website&utm_campaign=explorer_profile'
  },
  'giveth-donation': {
    label: 'Giveth',
    description: 'Giveth Donation',
    helper: 'Donating on Giveth increases your score by 3 points.',
    points: 3,
    image: '/images/giveth-donation.png',
    link: 'https://giveth.io/project/bankless-academy?utm_source=app.banklessacademy.com&utm_medium=website&utm_campaign=explorer_profile'
  },
  'ens-name': {
    label: 'ENS Name',
    description: 'ENS Name',
    helper: 'Registering and setting an ENS primary name for your Ethereum address increases your score by 3 points.',
    points: 3,
    image: '/images/ens-name.png',
    link: 'https://app.ens.domains/?utm_source=app.banklessacademy.com&utm_medium=website&utm_campaign=explorer_profile'
  }
}

export const MAX_ACHIEVEMENT = Object.values(ACHIEVEMENTS).reduce((acc, achievement) => acc += achievement.points, 0)
