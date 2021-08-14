import { QuestType } from 'entities/quest'

const QUESTS: QuestType[] = [
  {
    poapImageLink:
      'https://storage.googleapis.com/poapmedia/onboard-wallet-basic-2021-logo-1627395940468.png',
    learningActions:
      'Create and manage your own wallet<br>Connect your wallet to a web3 website',
    knowledgeRequirements: 'No prior knowledge needed.',
    poapEventId: 4652,
    duration: 10,
    learnings:
      'What is a wallet?<br>What are keys?<br>Custodial vs non-custodial wallets<br>Wallet Security',
    difficulty: 'Easy',
    description: 'Learn how to create and manage a wallet securely.',
    name: 'Wallet Basics',
    notionId: '98405bd0f2b94bb2a3079eed504a011e',
    slug: 'wallet-basics',
    slides: [
      {
        type: 'LEARN',
        title: 'What is a wallet?',
        content:
          "<p>A wallet is an app or device used for sending, receiving, and spending cryptocurrency.</p><iframe src='https://embed.lottiefiles.com/animation/70066'></iframe><p>Wallets can be used to send, receive, and spend funds. Contextually, this can be to make retail purchases, transfer money, interact with applications built on the blockchain, and more.</p><img src='https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fabda02b7-850e-4f4b-9fcc-637330046e92%2F0_q_FQ4P0pA0PopIqx.png?table=block&id=ff0def71-b130-4854-a008-3b22ec448bc5'>",
      },
      {
        type: 'QUIZ',
        title: 'What is a wallet?',
        quiz: {
          rightAnswerNumber: 4,
          answer_1: 'A device equipped with RFID technology',
          answer_2: 'A bi-fold device',
          answer_3: 'An account that protects my assets',
          answer_4:
            'An app or device used to send, receive, or spend crypto currency',
          id: 'wallet-basics-1',
        },
      },
      {
        type: 'QUIZ',
        title: 'I can only receive crypto with a wallet',
        quiz: {
          rightAnswerNumber: 2,
          answer_1: 'True',
          answer_2: 'False',
          id: 'wallet-basics-2',
        },
      },
      {
        type: 'LEARN',
        title: 'What are keys?',
        content:
          "<ul><li>Every wallet comes equipped with a unique pair of keys. One is public and the other is private. In simple terms, the public key is like your home address, and the private key is like the key to unlock your house. </li><li>Public keys allow others to identify you to send crypto to your address. Private keys allows access to your wallet to send crypto.</li><li>When creating a wallet, private keys are automatically generated. This private key number is then put through a complex mathematical algorithm to generate your public key.</li><li>Your public key can be derived from your private key, but your private key can <em>never</em> be derived from your public key.</li></ul><img src='https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F020c645b-001c-42d6-bc94-f47fe4e91074%2F16_0.png?table=block&id=cc950ac3-b833-4bf0-bf5e-a64fe1201874'>",
      },
      {
        type: 'QUIZ',
        title:
          'In simple terms, you can think of the public key as your _____, and the private key as your _____',
        quiz: {
          rightAnswerNumber: 2,
          answer_1: 'Routing Number / Account Number',
          answer_2: 'Home address / House key',
          answer_3: 'Address / Zip code',
          answer_4: 'Phone Number / Social Security Number',
          id: 'wallet-basics-3',
        },
      },
      {
        type: 'QUIZ',
        title:
          'A private key is your public address since it gives other users a point of access to send tokens to your wallet',
        quiz: {
          rightAnswerNumber: 2,
          answer_1: 'True',
          answer_2: 'False',
          id: 'wallet-basics-4',
        },
      },
      {
        type: 'QUIZ',
        title: 'Every wallet comes equipped with a ____ and a private key',
        quiz: {
          rightAnswerNumber: 4,
          answer_1: 'Routing Number',
          answer_2: 'Account Trustee',
          answer_3: 'Account Key',
          answer_4: 'Public Key',
          id: 'wallet-basics-5',
        },
      },
      {
        type: 'LEARN',
        title: 'Not your keys, not your crypto!',
        content:
          "<ul><li>Recall that private keys let you access your wallet to send cryptocurrencies. In almost all cases, you want to own your wallet’s private key. But not all wallets will let you do that.</li><li>With a custodial wallet, another party controls your private keys. In other words, you’re trusting a third party to secure your funds and return them if you want to trade or send them somewhere else. (Think of your account on Coinbase, Kraken, or any other exchange)</li><li>With a non-custodial wallet, you have sole control of your private keys, which in turn control your cryptocurrency and prove the funds are yours. Remember, <strong>not your keys, not your crypto!</strong> That means that if you don't control the keys of the wallet, you don't control the cryptocurrency.</li></ul><img src='https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F2ba92a8d-c83e-46ad-9807-f7f19c4bac4e%2Fproof-of-keys-bitcoin.png?table=block&id=c5c20539-c091-4f5e-84b6-e8335f6f846a'>",
      },
      {
        type: 'QUIZ',
        title: 'With a custodial wallet, another party controls your ___',
        quiz: {
          rightAnswerNumber: 3,
          answer_1: 'Public Keys',
          answer_2: 'House Keys',
          answer_3: 'Private Keys',
          answer_4: 'Account Keys',
          id: 'wallet-basics-6',
        },
      },
      {
        type: 'QUIZ',
        title: 'Not your keys, not your ___',
        quiz: {
          rightAnswerNumber: 1,
          answer_1: 'Crypto',
          answer_2: 'House',
          answer_3: 'Car',
          answer_4: 'Account',
          id: 'wallet-basics-7',
        },
      },
      {
        type: 'QUIZ',
        title: 'I control my private keys with a custodial wallet',
        quiz: {
          rightAnswerNumber: 2,
          answer_1: 'True',
          answer_2: 'False',
          id: 'wallet-basics-8',
        },
      },
      {
        type: 'LEARN',
        title: 'Protect your keys, protect your crypto!',
        content:
          "<ul><li>While there is no need to trust a third party when using a non-custodial wallet, this also means that <strong>you are solely responsible for not losing your keys</strong>. That requires that you take your own precautions to protect your funds.</li><li>If you lose your private key, you can no longer access the wallet to spend, withdraw, or transfer your crypto. <strong>Therefore, it is imperative to save the</strong> <strong>private key in a secure location, and on a durable material</strong>.</li></ul><img src='https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F559e242d-4fa2-4fe6-8bb5-06996c6326c2%2FCopy-of-9-security-Tips-Infographic-1_1-1-min.png?table=block&id=4e2fa103-b50a-41e6-b1fc-964e4d6a7bd4'>",
      },
      {
        type: 'QUIZ',
        title:
          'There is no need to trust a third party with a non custodial wallet',
        quiz: {
          rightAnswerNumber: 1,
          answer_1: 'True',
          answer_2: 'False',
          id: 'wallet-basics-9',
        },
      },
      {
        type: 'QUIZ',
        title:
          'I am solely responsible for my private keys with a custodial wallet',
        quiz: {
          rightAnswerNumber: 2,
          answer_1: 'True',
          answer_2: 'False',
          id: 'wallet-basics-10',
        },
      },
      {
        type: 'QUIZ',
        title:
          'When using a ___, you are solely responsible for not losing your keys. ',
        quiz: {
          rightAnswerNumber: 1,
          answer_1: 'Non custodial wallet',
          answer_2: 'Recovery phrase',
          answer_3: 'Custodial wallet',
          answer_4: 'None of the above',
          id: 'wallet-basics-11',
        },
      },
      {
        type: 'LEARN',
        title: 'How do I protect my keys?',
        content:
          "<h2>The 5 most effective ways to protect your keys:</h2><ol><li><strong>Never</strong> share or reveal your private keys to anyone.</li><li><strong>Never</strong> save it online (such as OneDrive or Google Docs)</li><li>Write down your recovery phrase and <strong>store it in a secure location</strong> (such as inside your safe or a bank's safety deposit box).</li><li>We should find a way to write recovery phrases on indestructible material such as tungsten. Paper could get destroyed easily in case of floods or fire.</li><li>Include your private key in your will.</li></ol>",
      },
      {
        type: 'QUIZ',
        title: 'Never reveal or share your private keys with anyone',
        quiz: {
          rightAnswerNumber: 1,
          answer_1: 'True',
          answer_2: 'False',
          id: 'wallet-basics-12',
        },
      },
      {
        type: 'QUIZ',
        title:
          'Which storage method should you avoid when storing your private keys?',
        quiz: {
          rightAnswerNumber: 1,
          answer_1: 'Save it online or on your computer',
          answer_2: 'Keep it in your personal safe',
          answer_3: 'Store it in a safety deposit box at a bank',
          answer_4: 'All of the above',
          id: 'wallet-basics-13',
        },
      },
      {
        type: 'QUIZ',
        title:
          'Which of these methods is safest for storing your private keys?',
        quiz: {
          rightAnswerNumber: 4,
          answer_1: 'Keep it in your wallet',
          answer_2: 'Save it online or on your computer',
          answer_3: 'Give it to your mom',
          answer_4: 'Store it in your personal safe ',
          id: 'wallet-basics-14',
        },
      },
      {
        type: 'QUIZ',
        title:
          'Saving my private key on my computer or my phone is a safe protection tactic',
        quiz: {
          rightAnswerNumber: 2,
          answer_1: 'True',
          answer_2: 'False',
          id: 'wallet-basics-15',
        },
      },
      {
        type: 'LEARN',
        title: 'What is a recovery phrase?',
        content:
          "<ul><li>When you create a wallet, a recovery phrase is also created that is specific to that wallet.</li><li>It stores the information that can be used to recover your wallet and crypto if/ when your wallet fails unexpectedly or gets damaged. Or if you are unable to access it due to misplacing or theft.</li><li>A recovery phrase is a list of 12 to 24 words and represents a single secret piece of data that is used to generate your wallet's public key and private key.</li><li>This same recovery phrase can actually be used to access your wallet on different devices.</li></ul>",
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
          id: 'wallet-basics-16',
        },
      },
      {
        type: 'QUIZ',
        title:
          'I can use my recovery phrase to access my wallet on different devices',
        quiz: {
          rightAnswerNumber: 1,
          answer_1: 'True',
          answer_2: 'False',
          id: 'wallet-basics-17',
        },
      },
      {
        type: 'QUIZ',
        title: 'What is a recovery phrase?',
        quiz: {
          rightAnswerNumber: 2,
          answer_1:
            'A code word or phrase that only you and a few select people know',
          answer_2:
            "A list of 12 to 24 words, and represents a single secret piece of data that is used to generate your wallet's public key and private key",
          answer_3: 'An account that protects my assets',
          answer_4: 'A device used to store, send, or receive crypto currency',
          id: 'wallet-basics-18',
        },
      },
      {
        type: 'QUIZ',
        title: 'Private keys and recovery phrases are the same thing',
        quiz: {
          rightAnswerNumber: 2,
          answer_1: 'True',
          answer_2: 'False',
          id: 'wallet-basics-19',
        },
      },
      {
        type: 'LEARN',
        title: 'Types of non-custodial wallets',
        content:
          "<p>The 2 major types of noncustodial wallets you can use are called hot wallets and cold wallets</p><p>A <strong>hot wallet</strong> is a storage device perpetually connected to the internet</p><ul><li>PROS: They are usually free, simple to set up, and easy to use</li><li>CONS: They are less secure due to internet connection</li></ul><p>A <strong>cold wallet</strong> lives offline. There is no perpetual internet connection.</p><ul><li>PROS: They are more secure</li><li>CONS: They aren't free, and sometimes cumbersome to use, not ideal for quick transactions</li></ul><img src='https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fab788f0c-0b84-4101-ac1d-3728d5d82385%2FWhat-is-a-hardware-wallet-1.jpg?table=block&id=63284f76-97b2-4f9d-a1b5-436f6db0691c'>",
      },
      {
        type: 'QUIZ',
        title: 'The 2 major types of noncustodial wallets are',
        quiz: {
          rightAnswerNumber: 3,
          answer_1: 'Public Keys and private keys',
          answer_2: 'Custodial and noncustodial wallets',
          answer_3: 'Hot and cold wallets',
          answer_4: 'None of the above',
          id: 'wallet-basics-20',
        },
      },
      {
        type: 'QUIZ',
        title: 'Cold wallets are free, and simple to set up, and easy to use',
        quiz: {
          rightAnswerNumber: 2,
          answer_1: 'True',
          answer_2: 'False',
          id: 'wallet-basics-21',
        },
      },
      {
        type: 'QUIZ',
        title: 'A cold wallet is more secure than a hot wallet',
        quiz: {
          rightAnswerNumber: 1,
          answer_1: 'True',
          answer_2: 'False',
          id: 'wallet-basics-22',
        },
      },
      {
        type: 'LEARN',
        title: 'MetaMask Wallet',
        content:
          "<h2>Why use MetaMask:</h2><ul><li>A Web3 non-custodial wallet, enabling the usage of dApps (We'll cover Web3 and dApps more in a later course)</li><li>It is a widely used wallet with over 5 million monthly active users</li></ul><h2>Very convenient to use,</h2><ul><li>A browser extension is available on Chrome, Brave, Edge, and Firefox internet browsers.  </li><li>Mobile app available for Android and IOS users</li></ul>",
      },
      {
        type: 'QUIZ',
        title: 'MetaMask wallet is a custodial wallet',
        quiz: {
          rightAnswerNumber: 2,
          answer_1: 'True',
          answer_2: 'False',
          id: 'wallet-basics-23',
        },
      },
      {
        type: 'LEARN',
        title: 'MetaMask Setup',
        content:
          "<p>Step-by-step tutorial on how to setup MetaMask (just an example)</p><iframe src='https://www.youtube.com/embed/WAStJtjYI_c?feature=oembed'></iframe>",
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
      'Connect your wallet to Aave<br>Deposit collateral on Aave<br>Take a loan against your collateral',
    knowledgeRequirements: 'Manage a web3 wallet.',
    poapEventId: 4783,
    duration: 15,
    learnings: 'How to use Aave<br>How to take a loan without any intermediary',
    difficulty: 'Advanced',
    description: 'Learn how to borrow with Aave.',
    name: 'Borrow with Aave',
    notionId: 'cbbc874193874f9e8ced11034b2aecad',
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
