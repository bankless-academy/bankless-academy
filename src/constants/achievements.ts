

export const ACHIEVEMENTS = {
  'Gitcoin': {
    description: 'Gitcoin Donation',
    points: 3,
    image: '/images/gitcoin-donation.png',
    link: 'https://explorer.gitcoin.co/#/projects/0xa40bea19733bd9fad64d6c9807497041f379c12d93af17a6283e2761e20917ad?utm_source=app.banklessacademy.com&utm_medium=website&utm_campaign=explorer_profile'
  },
  'Giveth': {
    description: 'Giveth Donation',
    points: 3,
    image: '/images/giveth-donation.png',
    link: 'https://giveth.io/project/bankless-academy?utm_source=app.banklessacademy.com&utm_medium=website&utm_campaign=explorer_profile'
  }
}

export const MAX_ACHIEVEMENT = Object.values(ACHIEVEMENTS).reduce((acc, achievement) => acc += achievement.points, 0)
