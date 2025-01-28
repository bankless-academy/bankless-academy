
export const ACHIEVEMENTS = {
  'gitcoin-donation': {
    label: 'Gitcoin',
    description: 'Gitcoin Donation',
    helper: 'Donating on Gitcoin since June 2023 (using Allo Protocol) increases your score by 3 points.',
    points: 3,
    image: '/images/gitcoin-donation.png',
    link: 'https://bankless.ac/gitcoin'
  },
  'giveth-donation': {
    label: 'Giveth',
    description: 'Giveth Donation',
    helper: 'Donating on Giveth increases your score by 3 points.',
    points: 3,
    image: '/images/giveth-donation.png',
    link: 'https://bankless.ac/giveth'
  },
  'octant-donation': {
    label: 'Octant',
    description: 'Octant Donation',
    helper: 'Donating on Octant increases your score by 3 points.',
    points: 3,
    image: '/images/octant-donation.png',
    link: 'https://bankless.ac/octant'
  },
  'ens-name': {
    label: 'ENS Name',
    description: 'ENS Name',
    helper: 'Registering and setting an primary ENS Name for your Ethereum address increases your score by 3 points.',
    points: 3,
    image: '/images/ens-name.png',
    link: 'https://app.ens.domains/?utm_source=app.banklessacademy.com&utm_medium=website&utm_campaign=explorer_profile'
  }
}

export const MAX_ACHIEVEMENT = Object.values(ACHIEVEMENTS).reduce((acc, achievement) => acc += achievement.points, 0)
