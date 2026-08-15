// NOTE: these strings are translation KEYS, not translated text.
//
// They used to be written as `i18next.t('...')` at module scope, which
// evaluates ONCE at import time and freezes whatever language happened to be
// active then. Switching language afterwards never updated them, so a reader
// could see a Portuguese lesson with a German animation title, and only a hard
// refresh (which re-imports the module) appeared to fix it.
//
// Translate at RENDER time instead: `t(animation.name)` / `t(animation.type)`.
// Keeping the raw English here also makes `animation.type === 'Animation'` in
// Animation.tsx a reliable comparison; against a translated value it broke in
// every language that renders that word differently.
export const ANIMATIONS = {
  // Bitcoin Basics
  bitcoin: {
    name: 'Sending a Bitcoin Transaction',
    type: 'Animation',
    description: 'Animation description',
    socialImageLink: null,
    steps: [
      '/animations/bitcoin/step-1.json',
      '/animations/bitcoin/step-2.json',
      '/animations/bitcoin/step-3.json',
      '/animations/bitcoin/step-4.json',
    ],
  },
  // Staking on Ethereum
  'validating-tx-with-ethereum-staking': {
    name: 'Ethereum Proof-of-Stake consensus',
    type: 'Animation',
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
  // Ethereum Basics
  swap: {
    name: 'Using a dApp',
    type: 'Interactive Simulation',
    description: 'Making a swap on a DEX',
    socialImageLink: null,
    steps: [
      '/animations/swap/step-1.json',
      '/animations/swap/step-2.json',
      '/animations/swap/step-3.json',
      '/animations/swap/step-4.json',
      '/animations/swap/step-5.json',
      '/animations/swap/step-6.json',
    ],
  },
  send: {
    name: 'Sending a Payment',
    type: 'Interactive Simulation',
    description: 'Sending a Payment',
    socialImageLink: null,
    steps: [
      '/animations/send/step-1.json',
      '/animations/send/step-2.json',
      '/animations/send/step-3.json',
      '/animations/send/step-4.json',
      '/animations/send/step-5.json',
      '/animations/send/step-6.json',
    ],
  },
  ethereum: {
    name: 'How does sending a payment work on Ethereum?',
    type: 'Animation',
    description: 'How it Works',
    socialImageLink: null,
    steps: [
      '/animations/ethereum/step-1.json',
      '/animations/ethereum/step-2.json',
      '/animations/ethereum/step-3.json',
      '/animations/ethereum/step-4.json',
    ],
  },
}

export const ANIMATION_IDS = Object.keys(ANIMATIONS)
