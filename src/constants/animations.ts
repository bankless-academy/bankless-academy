export const ANIMATIONS = {
  bitcoin: {
    name: 'Bitcoin animation',
    description: 'Animation description',
    socialImageLink: null,
    steps: [
      '/animations/bitcoin/step-1.json',
      '/animations/bitcoin/step-2.json',
      '/animations/bitcoin/step-3.json',
      '/animations/bitcoin/step-4.json',
    ],
  },
  'validating-tx-with-ethereum-staking': {
    name: 'Ethereum Staking Animation',
    description: 'Validating transactions when staking with Ethereum.',
    socialImageLink: null,
    steps: [
      '/animations/validating-tx-with-ethereum-staking/step-1.json',
      '/animations/validating-tx-with-ethereum-staking/step-2.json',
      '/animations/validating-tx-with-ethereum-staking/step-3.json',
      '/animations/validating-tx-with-ethereum-staking/step-4.json',
      '/animations/validating-tx-with-ethereum-staking/step-5.json',
      '/animations/validating-tx-with-ethereum-staking/step-6.json',
      '/animations/validating-tx-with-ethereum-staking/step-7.json',
    ],
  },
  swap: {
    name: 'Swap Animation',
    description: 'Making a swap on a DEX',
    socialImageLink: null,
    steps: [
      '/animations/swap/step-1.json',
      '/animations/swap/step-2.json',
    ],
  },
  send: {
    name: 'Sending Animation',
    description: 'Sending a Payment',
    socialImageLink: null,
    steps: [
      '/animations/swap/step-1.json',
      '/animations/swap/step-1.json',
      '/animations/swap/step-2.json',
    ],
  },
}

export const ANIMATION_IDS = Object.keys(ANIMATIONS)
