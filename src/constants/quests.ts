import { QuestType } from 'entities/quest'

const QUESTS: QuestType[] = [
  {
    poapImageLink:
      'https://storage.googleapis.com/poapmedia/onboard-wallet-basic-2021-logo-1627395940468.png',
    learningActions:
      '- Create and manage your own wallet<br>- Connect your wallet to a web3 website',
    knowledgeRequirements: 'No prior knowledge needed.',
    poapEventId: 4652,
    duration: 10,
    learnings:
      '- What is a wallet?<br>- What are keys?<br>- Custodial vs non-custodial wallets<br>- Wallet Security',
    difficulty: 'Easy',
    description: 'Learn how to create and manage a wallet securely.',
    name: 'Wallet Basics',
    notionId: 'b302a5b32e0d443f87835a26b6a5af20',
    slug: 'wallet-basics',
    slides: [
      {
        type: 'LEARN',
        title: 'What is a wallet?',
        content:
          '<ul><li>A wallet is an app or device used for sending, receiving, and storing cryptocurrency.</li><li>Users have the option of using a custodial or noncustodial wallet when sending, receiving, or storing cryptocurrency.</li></ul>',
      },
      {
        type: 'LEARN',
        title: 'What are keys?',
        content:
          '<ul><li>Every wallet comes equipped with a public key and a private key and every pair of keys is unique and distinguishable from every other pair</li><li>A public key is your address, since it gives other users a point of access to send tokens to your wallet.</li><li>A private key is a sophisticated form of cryptography that allows you to access your cryptocurrency.</li><li>In simple terms, you can think of the pair just like an email account or a bank login; the public key is like your username or email address, and the private key is like your password.</li></ul>',
      },
      {
        type: 'QUIZ',
        title:
          'In simple terms, you can think of the public key as your _____, and the private key as you _____',
        quiz: {
          rightAnswerNumber: 2,
          answer_1: 'Routing Number / Account Number',
          answer_2: 'Username / Password',
          answer_3: 'Address / Zip code',
          answer_4: 'Phone Number / Social Security Number',
          id: 'wallet-basics-1',
        },
      },
      {
        type: 'LEARN',
        title: 'Not your keys, not your crypto!',
        content:
          "<ul><li>With a custodial wallet, another party controls your private keys. In other words, you’re trusting a third party to secure your funds and return them if you want to trade or send them somewhere else. (Think of your account on Coinbase, Kraken, or any other exchange)</li><li>With a non-custodial wallet, you have sole control of your private keys, which in turn control your cryptocurrency and prove the funds are yours. Remember, <strong>not your keys, not your crypto!</strong> That means that if you don't control the keys of the wallet, you don't control the cryptocurrency.</li></ul>",
      },
      {
        type: 'LEARN',
        title: 'Protect your keys, protect your crypto!',
        content:
          '<ul><li>While there is no need to trust a third party when using a non-custodial wallet, this also means that <strong>you are solely responsible for not losing your keys</strong>. That requires that you take your own precautions to protect your funds.</li><li>If you lose your private key, you can no longer access the wallet to spend, withdraw, or transfer your crypto. <strong>Therefore, it is imperative to save the</strong> <strong>private key in a secure location, and on a durable material</strong>.</li></ul>',
      },
      {
        type: 'LEARN',
        title: 'How do I protect my keys?',
        content:
          "<h2>The 4 most effective ways to protect your keys:</h2><ol><li><strong>Never</strong> share or reveal your private keys to anyone.</li><li><strong>Never</strong> save it online (such as OneDrive or Google Docs)</li><li>Write down your recovery phrase and <strong>store it in a secure location</strong> (such as inside your safe or a bank's safety deposit box).</li><li>We should find a way to write recovery phrases on indestructible material such as tungsten. Paper could get destroyed easily in case of floods or fire.</li></ol>",
      },
      {
        type: 'LEARN',
        title: 'What is a recovery phrase?',
        content:
          "<ul><li>When you create a wallet, you also create a recovery phrase that is specific to that wallet.</li><li>A recovery phrase is a list of 12 to 24 words and represents a single secret piece of data that is used to generate your wallet's public key and private key.</li><li>It stores the information that can be used to recover your wallet and crypto if/ when your wallet fails unexpectedly or gets damaged. Or if you are unable to access it due to misplacing or theft.</li><li>In simple terms, you can think of it just like the security question of your email account or bank login; the recovery phrase allows you to prove your identity and access your account on different devices.</li><li>This same recovery phrase can actually be used in different types of wallet.</li></ul>",
      },
      {
        type: 'QUIZ',
        title: 'I can use a recovery phrase to _____',
        quiz: {
          rightAnswerNumber: 3,
          answer_1: 'Recover my wallet if lost, stolen, or damaged',
          answer_2: 'Access my wallet on multiple devices',
          answer_3: 'Both [1] & [2]',
          answer_4: 'None of the above',
          id: 'wallet-basics-2',
        },
      },
      {
        type: 'LEARN',
        title: 'Types of non-custodial wallets',
        content:
          '<ul><li>The 2 major types of noncustodial wallets you can use are called hot wallets and cold wallets</li><li>A hot wallet is a storage device perpetually connected to the internet</li><li>A cold wallet lives offline. There is no perpetual internet connection.</li></ul>',
      },
      {
        type: 'QUIZ',
        title: 'I control my private keys with a custodial wallet?',
        quiz: {
          rightAnswerNumber: 2,
          answer_1: 'True',
          answer_2: 'False',
          id: 'wallet-basics-3',
        },
      },
      {
        type: 'LEARN',
        title: 'MetaMask Wallet',
        content:
          '<h2>Why use MetaMask:</h2><ul><li>A Web3 non-custodial wallet, enabling the usage of dApps</li><li>It is a widely used wallet with over 5 million monthly active users</li></ul><h2>Very convenient to use,</h2><ul><li>A browser extension is available on Chrome, Brave, Edge, and Firefox internet browsers.  </li><li>Mobile app available for Android and IOS users</li></ul>',
      },
      {
        type: 'LEARN',
        title: 'MetaMask Setup',
        content:
          "<ul><li>Go to <a href='http://metamask.io/download.html'>metamask.io/download.html</a> and select <strong>Browser</strong> / <strong>iOS</strong> / <em>or</em> <strong>Android</strong>, then click <strong>Download</strong>.</li><li>Click on fox icon in the top right corner of your screen to open the MetaMask browser extension</li><li>Click the <strong>Get Started</strong> button</li><li>Click the <strong>Create a Wallet</strong> button (If you already have a MetaMask wallet with a seed phrase aka recovery phrase you can select the <strong>Import wallet</strong> button to access your existing wallet)</li><li>Create a password and accept the Terms of Use</li><li>Write down and safely secure seed phrase. Remember this is the <strong>MOST IMPORTANT STEP</strong>! If you lose your seed phrase, you could lose access to your wallet forever!!</li><li>Once you reveal your secret words and click <strong>Next</strong>, MetaMask will ask you to confirm your seed phrase. (This is to ensure that you copied the correct seed phrase and can recover your wallet in the future if necessary)</li><li>MetaMask will ask to collect data. Click <strong>No Thanks</strong> to deny or <strong>I Agree</strong> to allow.</li><li>Click on <strong>Account 1</strong> to view your wallet address (aka your public key) This is what you will use to deposit ETH or any ERC-20 token from another non-custodial wallet or a custodial wallet</li></ul>",
      },
      {
        type: 'QUEST',
        title: 'Wallet Basics Quest',
        component: 'WalletBasics',
      },
      {
        type: 'POAP',
        title: 'Collect your POAP',
      },
    ],
  },
  {
    poapImageLink:
      'https://storage.googleapis.com/poapmedia/onboard-borrow-with-aave-2021-logo-1627580693589.png',
    learningActions:
      '- Connect your wallet to Aave<br>- Deposit collateral on Aave<br>- Take a loan against your collateral',
    knowledgeRequirements: 'Manage a web3 wallet.',
    poapEventId: 4783,
    duration: 15,
    learnings:
      '- How to use Aave<br>- How to take a loan without any intermediary',
    difficulty: 'Advanced',
    description: 'Learn how to borrow with Aave.',
    name: 'Borrow with Aave',
    notionId: '7953218bdc484f8bb066449fc58c3388',
    slug: 'borrow-with-aave',
    slides: [
      {
        type: 'LEARN',
        title: 'TODO',
        content: '<p>Add Aave content here ...</p>',
      },
      {
        type: 'QUEST',
        title: 'Borrow with Aave Quest',
        component: 'BorrowWithAave',
      },
      {
        type: 'POAP',
        title: 'Collect your POAP',
      },
    ],
  },
]

export default QUESTS
