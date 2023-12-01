/* eslint-disable no-useless-escape */
import { LessonType } from 'entities/lesson'

const LESSONS: LessonType[] = [
  {
    badgeImageLink: '/images/wallet-basics/badge-2ec573fc.png',
    lessonImageLink: '/images/wallet-basics/lesson-5aa84b59.png',
    socialImageLink: '/images/wallet-basics/social-230cc260.jpg',
    learningActions: 'Create and manage your own wallet\nConnect your wallet to a web3 website',
    marketingDescription: 'A crypto wallet is essential gear for Web3 and DeFi. Get basic training on how a wallet works and how to get started.',
    badgeId: 1,
    duration: 15,
    learnings: '',
    difficulty: 'Easy',
    description: 'Create and securely manage your first crypto wallet. ',
    name: 'Wallet Basics',
    languages: [
      'it'
    ],
    lessonWriters: 'Ap0ll0517, Jordy',
    quest: 'WalletBasics',
    publicationStatus: 'publish',
    publicationDate: '2022-02-11',
    featuredOrderOnHomepage: null,
    isCommentsEnabled: false,
    endOfLessonRedirect: null,
    notionId: '98405bd0f2b94bb2a3079eed504a011e',
    englishName: 'Wallet Basics',
    slug: 'wallet-basics',
    imageLinks: [
      '/images/wallet-basics/wallet-intro-1d445d4b.png',
      '/images/wallet-basics/wallet-definition-5aa3b680.svg',
      '/images/wallet-basics/your-wallets-public-key-9784f47e.svg',
      '/images/wallet-basics/your-wallets-private-key-075ab481.svg',
      '/images/wallet-basics/recovery-phrase-fdb4cc6b.svg',
      '/images/wallet-basics/types-of-wallet-552ea259.png',
      '/images/wallet-basics/custodial-wallets-cda6e7c6.svg',
      '/images/wallet-basics/non-custodial-wallet-2ea3202d.svg',
      '/images/wallet-basics/hot-wallets-0a8332f6.svg',
      '/images/wallet-basics/cold-wallets-cd29cabe.svg',
      '/images/wallet-basics/wallet-security-9cc67e4c.png',
      '/images/wallet-basics/youre-ready-to-create-your-first-wallet-87cc5825.svg'
    ],
    slides: [
      {
        type: 'LEARN',
        notionId: '20458998d454411ab5117e14ad37bd04',
        title: 'Wallet Intro',
        content: '<div class="bloc1"><p><strong>Greetings!</strong></p><p>Welcome to Bankless Academy. We’re excited to guide you on your journey into <code>web3</code>. Every explorer of this space eventually needs to create a digital wallet.</p><p>Wallets are kind of like the accounts you’re used to in <code>web2</code>. You’ll use them to access web3 apps and sites, but there are also big differences that are important to understand. For example, they can hold cryptocurrency.</p><p>A properly set up wallet grants you access to incredible new possibilities while safeguarding your digital assets and online identity.</p><p>In this lesson, we’ll introduce you to wallets, wallet types, wallet security basics, and end with a video on how to set one up.</p><p>Let’s get started!</p></div><div class="bloc2"><img src=\'/images/wallet-basics/wallet-intro-1d445d4b.png\'></div>'
      },
      {
        type: 'LEARN',
        notionId: 'baf157b016ba48a890eb4cacb4b903e5',
        title: 'Wallet Definition',
        content: '<div class="bloc1"><p>What exactly is a wallet?</p><p>The short definition is: a computer program you use to interact with a <code>blockchain</code>.</p><p>When your <code>wallet</code> is connected to a blockchain, you can make purchases, send or receive <code>digital assets</code> like cryptocurrency, interact with web3 applications, and more.</p><p>Unlike regular user accounts you’re used to, a single wallet lets you access a large number of web3 apps. It’s like having one account for the entire internet.</p></div><div class="bloc2"><img src=\'/images/wallet-basics/wallet-definition-5aa3b680.svg\'></div>'
      },
      {
        type: 'LEARN',
        notionId: '0cb17f7b62904c0c97614698a957212c',
        title: 'Is creating a wallet difficult?',
        content: '<div class="bloc1"><p>It used to be difficult, but these days anyone can create a wallet quite easily.</p><p>Wallets are essentially computer programs. If you are comfortable with downloading and installing software on your computer (or apps on your phone), then you’ll have no trouble creating your first wallet.</p><p>The trickier part of managing a wallet involves keeping it secure — which we will dive into shortly!</p><p>Choosing your first wallet may also feel intimidating. We recommend starting with MetaMask as your wallet provider: their wallets are user friendly and have access to many popular blockchains. As you get more comfortable in the web3 space, you will likely explore other providers and create multiple wallets.</p></div>'
      },
      {
        type: 'QUIZ',
        notionId: 'a757c8ded6a848c681e08956cd469b9b',
        title: 'Knowledge Check',
        quiz: {
          question: 'What is a wallet?',
          rightAnswerNumber: 4,
          answers: [
            'A blockchain',
            'A cryptocurrency',
            'A digital collectible',
            'A blockchain account'
          ],
          feedback: [
            'ℹ️ Try again! Your wallet is hosted on a blockchain.',
            'ℹ️ Try again! Cryptocurrencies are something you hold in your wallet.',
            'ℹ️ Try again! Digital collectibles are something you hold in your wallet.',
            'ℹ️ Correct! Wallets are accounts used to interact with a blockchain.'
          ],
          id: 'wallet-basics-1'
        }
      },
      {
        type: 'LEARN',
        notionId: '620e2a25be154359a53fa22139ff6f51',
        title: 'Wallets & Password Recovery',
        content: '<div class="bloc1"><p><strong>Here is one of the most important things to understand about web3 wallets: today, there is no “password reset” or frequent password changes.</strong></p><p>Most of us are used to these features. If we forget a password, we click a button, do some things, and get a new password. Easy.</p><p>Not so with wallets. Because of how blockchains work, wallets are assigned a “name” and a complex “password” when they’re created (you do not choose them).</p><p>This name and password combination are impossible to change. Let’s learn a bit more about each.</p></div>'
      },
      {
        type: 'LEARN',
        notionId: '922336b82c304ce98a7956cb022efcbb',
        title: 'Your wallet’s public key',
        content: '<div class="bloc1"><p>A <code>public key</code> is basically your wallet’s name. Often, this looks like a jumble of random letters and numbers.</p><p>Example: <em>0xe1887fF140BfA9D3b45D0B2077b7471124acD242</em></p><p>It is possible to create easier to remember versions of this with some web3 services, but that’s a lesson for another time.</p><p>You can also think of a public key like the address of a post office box. It is public, anyone can see it, and it tells others where they can send you crypto assets — without revealing anything personal about you.</p><p>It is perfectly safe to share your <strong>public key</strong>.</p><p><strong>Note: </strong>sometimes a single wallet account can hold multiple public (and <code>private keys</code>). Kind of like having many post office boxes under one account.</p></div><div class="bloc2"><img src=\'/images/wallet-basics/your-wallets-public-key-9784f47e.svg\'></div>'
      },
      {
        type: 'LEARN',
        notionId: '8367fb0946674f41a59528dd11c4b034',
        title: 'Your wallet’s private key',
        content: '<div class="bloc1"><p>If the public key is like a post office box, then the <code>private key</code> is like the key to the box. It is the “password” to your funds and assets.</p><p>It almost always looks like a random jumble of letters and numbers.</p><p>I<strong>t is never safe to share this key — you could lose your wallet and everything in it.</strong></p><p>Most people recommend that you do not even save it digitally. Whoever has access to a private key has access to whatever is in the <code>wallet</code>.</p><p>This is more than just a password. You cannot reset it if you lose access to it.</p><p>Luckily, most <code>web3</code> applications and programs do not require you to painstakingly type a long, complicated string of characters every time you need to send funds or sign a blockchain transaction. The private key usually operates quietly in the background.</p></div><div class="bloc2"><img src=\'/images/wallet-basics/your-wallets-private-key-075ab481.svg\'></div>'
      },
      {
        type: 'QUIZ',
        notionId: '46cd01aeff8343d1ae0a6340e1f6b4c9',
        title: 'Knowledge Check',
        quiz: {
          question: 'Your public key is like your _____ and your private key is like your _____ .',
          rightAnswerNumber: 3,
          answers: [
            'Routing Number / Account Number',
            'Address / Zip code',
            'Post office box / Box key',
            'Phone Number / Passport Number'
          ],
          feedback: [
            'ℹ️ Try again! Your private key shouldn’t be shared with others.',
            'ℹ️ Try again! Your private key shouldn’t be shared with others.',
            'ℹ️ Correct! Your public key allows others to identify you, while your private key controls the assets within.',
            'ℹ️ Try again! These are examples of public & private information, but they don’t grant access to assets.'
          ],
          id: 'wallet-basics-2'
        }
      },
      {
        type: 'LEARN',
        notionId: '99c3226453d247e4a7c5150e00265156',
        title: 'Recovery Phrase',
        content: '<div class="bloc1"><p>When you set up a new wallet, the software generates a unique <code>recovery phrase</code>.</p><p>Also sometimes called a “seed phrase” or “secret recovery phrase”, this string of words can be used to access your wallet and crypto assets if:</p><ul><li>Your <code>wallet</code> app or device fails unexpectedly or is damaged.</li><li>You are unable to access it due to misplacement or theft.</li><li>You want to access your wallet account through the wallet app on a different computer or device.</li></ul><p>Most recovery phrases are a list of 12 to 24 words that represent a unique piece of data. That data is used to generate both the <code>public key</code> and <code>private key</code> for your wallet.</p><p>This does <strong>not </strong>change or reset the keys.</p><p>Your recovery phrase is essentially an easier to read version of your public/private key pair.</p><p><strong>Never share a recovery phrase.</strong></p></div><div class="bloc2"><img src=\'/images/wallet-basics/recovery-phrase-fdb4cc6b.svg\'></div>'
      },
      {
        type: 'QUIZ',
        notionId: '9d0454d30e60454397b0926523f7e73c',
        title: 'Knowledge Check',
        quiz: {
          question: 'Can you recover your wallet with a recovery phrase if your device gets damaged or lost?',
          rightAnswerNumber: 2,
          answers: [
            'No',
            'Yes'
          ],
          feedback: [
            'ℹ️ Try again!',
            'ℹ️ Correct! Recovery phrases grant access to your wallet, even on a multiple devices.'
          ],
          id: 'wallet-basics-3'
        }
      },
      {
        type: 'LEARN',
        notionId: 'bf1bf37ca61845c5a4257cbaeff0e13c',
        title: 'Types of Wallet',
        content: '<div class="bloc1"><p>Just as there are many types of computer software, there many types of wallet. Let’s look at the four main categories:</p><ul><li><strong>Custodial wallets:</strong> where a third party is responsible for your private keys.</li><li><strong>Self-custody (non-custodial) </strong><strong>wallets:</strong> where you are responsible for your private keys.</li></ul><p>There are two styles of <code>self-custody wallet</code>:</p><ul><li><strong>Hot wallets:</strong> software on your desktop or phone.</li><li><strong>Cold wallets:</strong> a piece of hardware (like a memory stick) you store somewhere safe.</li></ul><p>Each wallet solution serves a different use-case. Many advanced users have one of each!</p><p>Don’t worry, we’ll only be creating one wallet today.</p></div><div class="bloc2"><img src=\'/images/wallet-basics/types-of-wallet-552ea259.png\'></div>'
      },
      {
        type: 'LEARN',
        notionId: 'a92f95a2da2a4429942b6aad2a260e1b',
        title: 'Custodial Wallets',
        content: '<div class="bloc1"><p>Since your <code>private key</code> unlocks access to your <code>wallet</code>, keeping it private and secure is very important!</p><p><code>Custodial wallet</code> services include cryptocurrency exchanges such as Coinbase and Kraken. They are your wallet ‘custodian’ — they look after your private keys for you. You access their services like any other website (with an email login and resettable password).</p><p>This may be all some people need, but it requires you to trust these third parties to secure your crypto assets and give you access when you want to trade them or send them somewhere. Also, your access to some web3 applications may be limited.</p></div><div class="bloc2"><img src=\'/images/wallet-basics/custodial-wallets-cda6e7c6.svg\'></div>'
      },
      {
        type: 'QUIZ',
        notionId: '39f830da64fb47608592eff742239223',
        title: 'Knowledge Check',
        quiz: {
          question: 'Do you control your private key with a custodial wallet?',
          rightAnswerNumber: 2,
          answers: [
            'Yes',
            'No'
          ],
          feedback: [
            'ℹ️ Try again!',
            'ℹ️ Correct! Custodial wallets require trust in a third party (custodian) to control your private keys.'
          ],
          id: 'wallet-basics-4'
        }
      },
      {
        type: 'LEARN',
        notionId: 'a78db356b36c4bb19a85af61170b2471',
        title: 'Non-custodial Wallet',
        content: '<div class="bloc1"><p>A <code>self-custody wallet</code> (like MetaMask or Trezor) is when you fully control your <code>private key</code>. You have <strong>no custodian,</strong> and you alone are responsible for keeping your private key safe.</p><p>These wallets offer the widest range of access and freedom within the world of <code>web3</code>. You never have to worry about a third party freezing or mishandling your funds.</p><p>The tradeoff is in risk: if you lose access to your <code>recovery phrase</code>, or your private key is compromised, there is often very little you can do to restore access to the wallet.</p><p>Whichever route you choose, it pays to be familiar and comfortable with wallet security. We’ll give you some tips before you complete this lesson.</p></div><div class="bloc2"><img src=\'/images/wallet-basics/non-custodial-wallet-2ea3202d.svg\'></div>'
      },
      {
        type: 'QUIZ',
        notionId: '4c2cc8a6d61247cc87007cfa636ea77f',
        title: 'Knowledge Check',
        quiz: {
          question: 'Are you responsible for your private key with a self-custody wallet?',
          rightAnswerNumber: 1,
          answers: [
            'Yes',
            'No'
          ],
          feedback: [
            'ℹ️ Correct! With a self-custody wallet you are solely responsible for your private keys.',
            'ℹ️ Try again!'
          ],
          id: 'wallet-basics-5'
        }
      },
      {
        type: 'LEARN',
        notionId: '05e3abd313b640dab9b499d64bfc4823',
        title: 'Hot Wallets',
        content: '<div class="bloc1"><p>You will hear the terms “hot” and “cold wallet” quite a bit in web3.</p><p>A <code>hot wallet</code> is a wallet hosted via an online software program. MetaMask is a good example. These wallets are connected to the internet as long as your device is online, and are named ‘hot wallets’ for this ‘hot’ internet connection.</p><p>This is the style of wallet we will be creating today. They’re flexible, and great for beginners.</p></div><div class="bloc2"><img src=\'/images/wallet-basics/hot-wallets-0a8332f6.svg\'></div>'
      },
      {
        type: 'LEARN',
        notionId: 'f40f641af55246068e3169aaadbbffe6',
        title: 'Cold Wallets',
        content: '<div class="bloc1"><p>As you dive deeper into your web3 journey, you will come to know a landscape full of interesting tech trade-offs.</p><p><code>Cold wallets</code> grant higher security at the cost of convenience. A cold wallet uses software that lives on a separate hardware device (like a memory stick or external hard drive). You must physically connect the device to a computer for the wallet to be able to access the internet. Cold wallets are named after this ‘cold’ internet connection.</p><p>They are widely considered to be more secure than <code>hot wallets</code>, because your <code>private key</code> is stored offline — out of reach of digital attackers.</p><p>Ledger and Trezor are examples of <code>cold wallets</code>.</p></div><div class="bloc2"><img src=\'/images/wallet-basics/cold-wallets-cd29cabe.svg\'></div>'
      },
      {
        type: 'QUIZ',
        notionId: '7b837d841a234e1f9a32861f4608485e',
        title: 'Knowledge Check',
        quiz: {
          question: 'Which wallet type is considered to be more secure?',
          rightAnswerNumber: 4,
          answers: [
            'A hot wallet',
            'A custodial wallet',
            'A mobile wallet',
            'A cold wallet'
          ],
          feedback: [
            'ℹ️ Try again! A hot wallet has an active internet connection which makes it more susceptible to digital attack.',
            'ℹ️ Try again! The third party holding the private keys can get hacked or go bankrupt.',
            'ℹ️ Try again! A mobile wallet is more secure than a browser wallet, but it’s not the most secure type of wallet.',
            'ℹ️ Correct! Cold wallets aren’t actively connected to the internet, making them more attack-resistant.'
          ],
          id: 'wallet-basics-6'
        }
      },
      {
        type: 'LEARN',
        notionId: '2d397d2ffece4fa083a28bd99720e582',
        title: 'Wallet Security',
        content: '<div class="bloc1"><p>Regardless if your <code>self-custody wallet</code> is hot or cold, there are many smart security practices you should develop.</p><p>🖊️ Record your <code>recovery phrase</code> on a physical, durable material (such as laminated paper, or even steel) and store it somewhere very safe. Never share it or your <code>private key</code> with anyone. <strong>Remember, this is more than just a password.</strong></p><p>🔍 When interacting with a blockchain or sending funds, even small amounts, double check the details very carefully. Incorrect details cannot be changed after an interaction.</p><p>🔭 Spend time researching and gathering info on any <code>web3</code> application you plan to interact with before connecting your wallet or signing transactions with it.</p><p>💰 Use wallets with low amounts of funds to try new things and explore web3, and consider storing high value assets across multiple wallet accounts (i.e. avoid putting all your crypto eggs in one basket).</p></div><div class="bloc2"><img src=\'/images/wallet-basics/wallet-security-9cc67e4c.png\'></div>'
      },
      {
        type: 'QUIZ',
        notionId: '4e63e0e00af1489caf0c18b6f3ce706a',
        title: 'Knowledge Check',
        quiz: {
          question: 'What is the safest way to protect your recovery phrase?',
          rightAnswerNumber: 1,
          answers: [
            'Write it on a durable material and store it in a safe place.',
            'Save it on your computer and print it out.',
            'Take a screenshot and save it on your phone.',
            'Save it in your Dropbox account.'
          ],
          feedback: [
            'ℹ️ Correct! A safely stored physical backup with no digital traces is the only safe storage option.',
            'ℹ️ Try again! If your computer is hacked, you could lose all assets in your wallet. Printing also opens many attack opportunities.',
            'ℹ️ Try again! If your phone is hacked, you could lose all assets in your wallet.',
            'ℹ️ Try again! Use of password managers resulted in a large number of wallet hacks in 2023.'
          ],
          id: 'wallet-basics-7'
        }
      },
      {
        type: 'LEARN',
        notionId: 'e331357c6b07425c8451d2a81c20f885',
        title: 'You’re ready to create your first wallet!',
        content: '<div class="bloc1"><p>In fact, you’ll need one if you want to claim proof of completing this quest!</p><p>There are several self-custody <code>hot wallet</code> providers available today. We will explore the popular MetaMask wallet for the rest of this lesson as:</p><ul><li>it is likely to be compatible with most <code>DeFi</code> apps.</li><li>it has a browser extension for Chrome, Brave, Edge, and Firefox internet browsers.</li><li>it is also available as a mobile app for Android and iOS users.</li></ul><p>The end of the lesson is right around the corner, where we will share a short video to help you get set up with your MetaMask wallet.</p></div><div class="bloc2"><img src=\'/images/wallet-basics/youre-ready-to-create-your-first-wallet-87cc5825.svg\'></div>'
      },
      {
        type: 'QUIZ',
        notionId: 'f946d23d54ea48d2b8972305168b5791',
        title: 'Knowledge Check',
        quiz: {
          question: 'Is MetaMask a custodial wallet?',
          rightAnswerNumber: 2,
          answers: [
            'Yes',
            'No'
          ],
          feedback: [
            'ℹ️ Try again!',
            'ℹ️ Correct! MetaMask wallets are self-custody wallets controlled by you — and you alone.'
          ],
          id: 'wallet-basics-8'
        }
      },
      {
        type: 'QUEST',
        title: 'Wallet Basics Quest',
        component: 'WalletBasics'
      }
    ]
  },
  {
    badgeImageLink: '/images/blockchain-basics/badge-bc2fbcc0.png',
    lessonImageLink: '/images/blockchain-basics/lesson-abc431aa.png',
    socialImageLink: '/images/blockchain-basics/social-6f576805.jpg',
    learningActions: '',
    marketingDescription: 'Blockchains make cryptocurrency, DeFi, and Web3 possible. Discover how blockchain networks are built and how they work.',
    badgeId: 3,
    duration: 15,
    learnings: '',
    difficulty: 'Easy',
    description: 'Learn about the fundamental architecture of blockchain technology.',
    name: 'Blockchain Basics',
    languages: [
      'de',
      'es'
    ],
    quest: 'BlockchainBasics',
    publicationStatus: 'publish',
    publicationDate: '2022-06-30',
    featuredOrderOnHomepage: null,
    isCommentsEnabled: false,
    endOfLessonRedirect: null,
    notionId: '562dba7dbd3949b480be367a64821cdf',
    englishName: 'Blockchain Basics',
    slug: 'blockchain-basics',
    imageLinks: [
      '/images/blockchain-basics/introduction-6d0b6137.svg',
      '/images/blockchain-basics/blockchain-structure-346dae14.svg',
      '/images/blockchain-basics/examining-the-ledger-74e5f072.svg',
      '/images/blockchain-basics/transactions-on-the-ledger-f4f9d470.svg',
      '/images/blockchain-basics/block-anatomy-8ba3bea2.svg',
      '/images/blockchain-basics/inside-a-block-b11c74ce.svg',
      '/images/blockchain-basics/individual-transactions-2f6bf118.svg',
      '/images/blockchain-basics/user-addresses-e9456d37.svg'
    ],
    slides: [
      {
        type: 'LEARN',
        notionId: 'fa33ece84a63449a87487dbd42eac654',
        title: 'Introduction',
        content: '<div class="bloc1"><p><code>Blockchain</code> technology is a revolutionary way of storing and tracking data, while also making that data accessible to anyone. It is a way of organizing data in a single public list of all historical transactions that anyone can view but cannot edit. This public list of transactions is collectively known as the blockchain <code>ledger</code>.</p><p>After examining the layers of a blockchain, we will be using a blockchain tool called a <code>block explorer</code> to look into the specifics of the Ethereum blockchain structure; we will zoom in on the Ethereum blockchain to view the <strong>list</strong> of blocks, the <strong>transactions</strong> within those blocks, and the <strong>details</strong> of each individual transaction.</p></div><div class="bloc2"><img src=\'/images/blockchain-basics/introduction-6d0b6137.svg\'></div>'
      },
      {
        type: 'LEARN',
        notionId: '76f2f8016f44493eb57a3139cb515017',
        title: 'Blockchain Structure',
        content: '<div class="bloc1"><p>The term blockchain can be used as a noun — the Bitcoin blockchain — or as an adjective — blockchain technology. Either way, <code>blockchain</code> refers to the entire structure cryptocurrencies are built on.</p><p>Zooming in from the outside, there are 3 levels of structure in a blockchain:</p><ol><li>The overall <code>blockchain</code> is made up of blocks that are linked together in order</li><li><code>Blocks</code> are made up of groups of transactions put together </li><li><code>Transactions</code> are amounts of money sent between two <code>addresses</code> on the network</li></ol><p>This three-tiered structure comes together to create a cryptographic ledger - an unalterable history of all transactions performed on the network.</p></div><div class="bloc2"><img src=\'/images/blockchain-basics/blockchain-structure-346dae14.svg\'></div>'
      },
      {
        type: 'QUIZ',
        notionId: 'f98dfb3cfba44c0ba527d7a60df88aae',
        title: '✅ Knowledge Check',
        quiz: {
          question: 'What is a blockchain?',
          rightAnswerNumber: 4,
          answers: [
            'Organized groups of transactions called blocks',
            'A list of amounts of money sent between two addresses',
            'Blocks linked together in sequence',
            'All of the above'
          ],
          id: 'blockchain-basics-1'
        }
      },
      {
        type: 'LEARN',
        notionId: 'edad96fceca6484eb72f5b301f33dea2',
        title: 'Examining the Ledger',
        content: '<div class="bloc1"><p>In typical money systems, we trust third parties like banks to keep track of how much money each person has. But, to be truly Bankless, we want a system that doesn’t require us to trust one entity to manage the ledger.</p><p>The <code>ledger</code> is the list of ALL transactions ever made on a blockchain, and anyone can see it for <code>public</code> blockchains. Discrete groups of transactions from the ledger form the blocks that together make the blockchain.</p><p>When new transactions are added to the ledger, balances stored at each <code>address</code> get updated; past transactions cannot be altered. It’s like allowing everyone to look at everyone’s all-time bank account transaction history, at any given time, forever. </p></div><div class="bloc2"><img src=\'/images/blockchain-basics/examining-the-ledger-74e5f072.svg\'></div>'
      },
      {
        type: 'LEARN',
        notionId: '1af211fce04445b18b017c8ede82fe09',
        title: 'Transactions on the Ledger',
        content: '<div class="bloc1"><p>Let’s look at some example transactions:</p><ul><li>Alice sends 5 ETH to Bob</li><li>Bob sends 2 ETH to Charlie</li></ul><p>Individual transactions show the <em>change </em>in the amount of cryptocurrency for each address so the total result of all transactions IS the amount of cryptocurrency each address has.</p><hr><p>⇒ Alice has lost 5 ETH</p><p>⇒ Bob has gained 3 ETH total (received 5, sent 2)</p><p>⇒ Charlie has gained 2 ETH</p></div><div class="bloc2"><img src=\'/images/blockchain-basics/transactions-on-the-ledger-f4f9d470.svg\'></div>'
      },
      {
        type: 'QUIZ',
        notionId: '07e7cd73bf0b44af9cc46350430df624',
        title: '✅ Knowledge Check',
        quiz: {
          question: 'Which of the following statement(s) is/are true for public blockchain ledgers?',
          rightAnswerNumber: 4,
          answers: [
            'All transactions are public and past transactions are unchangeable',
            'The ledger tracks how much cryptocurrency each address currently has',
            'The ledger grows as new transactions are added to it',
            'All of the above'
          ],
          id: 'blockchain-basics-2'
        }
      },
      {
        type: 'LEARN',
        notionId: 'c344b7d4cf204ce1a627e1c3ea21d299',
        title: 'Decentralization',
        content: '<div class="bloc1"><p>Not only are transactions included on a <code>blockchain</code> ledger unchangeable, they are also shared and distributed amongst a large network of computers. To make sure that no single entity has the power to change the data, the blockchain ledger is stored on every device, called a <code>node</code>, on the network.</p><p>This shared data is what makes the blockchain ledger <code>decentralized</code>. No single authority or entity controls the data. Blockchains like Ethereum are also <code>public</code> because the ledger can be viewed by anyone. </p><p>We will see specifics of how new data is added and how we ensure everyone has a copy of the same data all the time in our upcoming Blockchain Theory lesson. For this lesson, just remember that the ledger data is shared by every computer running on the Ethereum network.</p></div>'
      },
      {
        type: 'QUIZ',
        notionId: '4073ac46370144d2919367efcef7ee37',
        title: '✅ Knowledge Check',
        quiz: {
          question: 'What makes a blockchain decentralized?',
          rightAnswerNumber: 3,
          answers: [
            'Only one entity can write to the blockchain',
            'It meets decentralization requirements set by the government',
            'No single authority or entity controls the ledger or access to the ledger data because it is distributed on a large network of computers',
            'The ledger is stored on a single secure server'
          ],
          id: 'blockchain-basics-3'
        }
      },
      {
        type: 'LEARN',
        notionId: '6d45c90a4b094caa8d1c8d2c71523284',
        title: 'Block Anatomy',
        content: '<div class="bloc1"><p>An important feature of blockchains is that past transaction data cannot be changed after it has been included in a block. This is because each block has a unique <code>block hash</code>, like a fingerprint, that is used to link the blocks together one after another. No one can change past transactions without changing that fingerprint and the fingerprint of EVERY block that follows it because each fingerprint depends on the previous one.</p><p>So each <code>block</code> is simply a group of transactions put together in one file along with that block’s <code>block hash</code>. The blocks are chained together because each one references the previous block’s unique fingerprint to form one connected block<strong><em>chain</em></strong>. </p></div><div class="bloc2"><img src=\'/images/blockchain-basics/block-anatomy-8ba3bea2.svg\'></div>'
      },
      {
        type: 'QUIZ',
        notionId: '47a59ed5d3814cbdb5806331b37d6766',
        title: '✅ Knowledge Check',
        quiz: {
          question: 'What is the purpose of a block hash?',
          rightAnswerNumber: 2,
          answers: [
            'To encrypt block data so no one can read it',
            'To link each block to the previous one and ensure past transaction data doesn’t change',
            'To ensure transactions are sent to the correct address',
            'To ensure the blockchain stays decentralized'
          ],
          id: 'blockchain-basics-4'
        }
      },
      {
        type: 'LEARN',
        notionId: '6f1cc1133e8e4b86b3579fb4d4eb4a1c',
        title: 'Inside a Block',
        content: '<div class="bloc1"><p>Remember, <code>block</code> data is just a group of transactions put together. Looking within a single block, we see a list of transactions and some data about who created the block. </p><p>From our example earlier when discussing the blockchain ledger, both of those transactions might be grouped within one block, or spread out into multiple blocks over time. But no matter what block they are included in, they are all added to the overall blockchain ledger eventually.</p><ul><li>Alice sends 5 ETH to Bob</li><li>Bob sends 2 ETH to Charlie</li></ul><p>Recall that each block must also reference the past block’s <code>block hash</code> to link the blockchain together.</p></div><div class="bloc2"><img src=\'/images/blockchain-basics/inside-a-block-b11c74ce.svg\'></div>'
      },
      {
        type: 'QUIZ',
        notionId: '311096618ecd451ba65677f2c3139823',
        title: '✅ Knowledge Check',
        quiz: {
          question: 'The following information is contained in a block:',
          rightAnswerNumber: 3,
          answers: [
            'All information contained in previous blocks, so the blockchain is always current',
            'Anything relevant to the blockchain as block size is unlimited',
            'Transaction data and a reference to the previous block',
            'All transaction data generated within a fixed timeframe'
          ],
          id: 'blockchain-basics-5'
        }
      },
      {
        type: 'LEARN',
        notionId: 'a9a1ce74d04c439f97249b2000964e5e',
        title: 'Individual Transactions',
        content: '<div class="bloc1"><p>The data on any blockchain is simply a list of <code>transactions</code>, records of currency moved between users. Each transaction must be signed by the sender’s <code>digital signature</code> to be valid. </p><p>This is what you do when you confirm a transaction with a wallet, you are signing with your digital signature to authorize a transaction. You can think of it as the digital equivalent of physically signing a check, receipt, or credit card transaction.</p><p>Transactions can be simple, like sending crypto assets, or more complex, such as swapping crypto assets or even deploying special code that executes when triggered, called <code>smart contracts</code>.</p><p>Finally, each transaction has a unique digital identifier, called its <code>transaction hash</code>, that no other transaction has. This makes it easy to refer to any single transaction later on and ensures that the details of that transaction can’t be changed afterward.</p></div><div class="bloc2"><img src=\'/images/blockchain-basics/individual-transactions-2f6bf118.svg\'></div>'
      },
      {
        type: 'QUIZ',
        notionId: 'a599d947c638409ca2073e914f11f7f9',
        title: '✅ Knowledge Check',
        quiz: {
          question: 'Data on a blockchain is simply a list of transactions grouped into blocks. Examples of such transactions might include:',
          rightAnswerNumber: 1,
          answers: [
            'Sending or receiving crypto assets',
            'Changing the size of the block',
            'Editing past blockchain data',
            'All of the above'
          ],
          id: 'blockchain-basics-6'
        }
      },
      {
        type: 'LEARN',
        notionId: 'b4f0ce31ff20480aa97dd69b2c7b091c',
        title: 'User Addresses',
        content: '<div class="bloc1"><p>An <code>address</code> is a public identifier that anyone can look up on the blockchain. Like an email address, anyone can send funds to it but only someone who controls the <code>private key</code> can unlock and use the funds at that address.</p><p>On Ethereum, an address always starts with <em>0x_________</em> and is 42 characters of numbers and letters derived from the <code>public key</code> of that address.</p><p>When looking at a single transaction in a block explorer, we can see the From: and To: addresses. This doesn’t tell us who the <em>people </em>are who control those addresses but allows any user to track the movement of cryptocurrency throughout the blockchain ledger.</p></div><div class="bloc2"><img src=\'/images/blockchain-basics/user-addresses-e9456d37.svg\'></div>'
      },
      {
        type: 'QUIZ',
        notionId: '5a6cfd2b2a9c4a059253b7f23ba3f74c',
        title: '✅ Knowledge Check',
        quiz: {
          question: 'What is true about blockchain addresses?',
          rightAnswerNumber: 4,
          answers: [
            'They are the public identifiers of different entities on a blockchain',
            'They always start with 0x on Ethereum',
            'Whoever controls the private key for an address can use the funds at that address',
            'All of the above'
          ],
          id: 'blockchain-basics-7'
        }
      },
      {
        type: 'QUEST',
        title: 'Blockchain Basics Quest',
        component: 'BlockchainBasics'
      }
    ]
  },
  {
    badgeImageLink: '/images/web3-security/badge-a9e9c1db.png',
    lessonImageLink: '/images/web3-security/lesson-043706c2.png',
    socialImageLink: '/images/web3-security/social-06e92458.jpg',
    learningActions: 'Avoid the scams in web3 and keep your assets safe.',
    marketingDescription: 'Protect yourself and your wallet from the most common scams in web3.',
    badgeId: 5,
    duration: 15,
    learnings: '',
    difficulty: 'Easy',
    description: 'Protect yourself and your wallet from the most common scams in web3.',
    name: 'Web3 Security',
    languages: [],
    quest: 'Web3Security',
    publicationStatus: 'publish',
    publicationDate: '2022-07-29',
    featuredOrderOnHomepage: null,
    isCommentsEnabled: false,
    endOfLessonRedirect: null,
    notionId: '7a5b9b7afe804e6984bf279301dfa1db',
    englishName: 'Web3 Security',
    slug: 'web3-security',
    imageLinks: [
      '/images/web3-security/money-in-web2-78779f3c.svg',
      '/images/web3-security/money-in-web3--832997fe.svg',
      '/images/web3-security/two-factor-authentication-75e29563.svg',
      '/images/web3-security/social-engineering-scams-5750ad84.svg',
      '/images/web3-security/social-media-safety-fbe97b9e.svg',
      '/images/web3-security/social-media-best-practices-0776e310.svg',
      '/images/web3-security/scam-tokens-cbab390e.svg',
      '/images/web3-security/hardware-wallets-191cacd1.svg',
      '/images/web3-security/wallet-strategies-857fd09c.svg'
    ],
    slides: [
      {
        type: 'LEARN',
        notionId: '50b5d9c9a7a34a2c82f6423f97e3e77d',
        title: 'Introduction',
        content: '<div class="bloc1"><p>Digital ownership is the new feature of web3. Using blockchains, cryptocurrencies, and NFTs, web3 gives ownership and power back to users. This online ownership of digital financial products is new for many, and that lack of experience gives opportunities for predatory people to scam and steal the assets of others. These scams work so well because most people aren’t aware of how they work. </p><p>But, it\'s not just web3 that suffers from scams, web2 services like email and social media are full of scams as well. In addition, many web3 tools are still tied to web2 services like bank accounts or centralized exchanges so protecting those is important too. So congratulations, Academy Explorer, on taking the time to arm yourself with the knowledge that will protect you as you venture out into <code>web3</code>!</p><p>This lesson will cover:</p><ul><li>Web2 & web3 security.</li><li>The most common ways people lose their funds and how to protect oneself from them.</li><li>A general strategy for wallet security.</li><li>How one can recover if they are the victim of a scam.</li></ul></div>'
      },
      {
        type: 'LEARN',
        notionId: '44450164401340659f6553fadd0230e4',
        title: 'Money in Web2',
        content: '<div class="bloc1"><p>In web2, the institutions hold money on behalf of people. A user must prove their identity to an institution in order to access and use their money. It’s the same as a bank account or a <code>centralized exchange</code> (CEX); one needs a login ID and a password.</p><p>For a scammer to gain access to your money, they need this ID + password combination. Because the institutions are charged with protecting your money, fraudulent transactions can be reversed - like a credit card transaction dispute.</p></div><div class="bloc2"><img src=\'/images/web3-security/money-in-web2-78779f3c.svg\'></div>'
      },
      {
        type: 'LEARN',
        notionId: 'c10187a8772f40faace2a77bd2f86940',
        title: 'Money in Web3 ',
        content: '<div class="bloc1"><p>In web3, money works differently. It’s more like a locked cash wallet; once money is spent, it’s gone. Only private keys control access to the wallet. So for a scammer to gain access they need the <code>seed phrase</code>, that special set of secret words, to access someone’s <code>private keys</code> and steal from their wallet. </p><p>It’s very important to protect seed phrases; people should <em><strong>never</strong></em> give their seed phrase to anyone for any reason. Also, never enter seed phrases digitally; digital photos, notes applications, and text files on your computer can all get compromised.</p></div><div class="bloc2"><img src=\'/images/web3-security/money-in-web3--832997fe.svg\'></div>'
      },
      {
        type: 'QUIZ',
        notionId: '6167969df08b4591b2945feaa47f1769',
        title: '✅ quiz',
        quiz: {
          question: 'Unlike in web2, in web3, scammers only need the seed phrase to steal everything in a wallet, including tokens and NFTs.',
          rightAnswerNumber: 1,
          answers: [
            'True',
            'False'
          ],
          id: 'web3-security-1'
        }
      },
      {
        type: 'LEARN',
        notionId: '704696e837db424088ae66bcb842e98b',
        title: 'Secure Seed Storage',
        content: '<div class="bloc1"><p>There are many methods for storing seed phrases securely, but a good start is to keep it on physical media (laminated paper or similar) and store it in a water- and fire-proof safe in your own home. <strong>Do not </strong>store a <code>seed phrase</code> as a photo or other digital methods - even in a password manager. </p><p>Bad places to store seed phrases include:</p><ul><li>In a filing cabinet</li><li>Digital notes application</li><li>At your workplace</li><li>Digital photo</li></ul><p>Wherever you store your seed phrase, you should ensure that only you have access to it and that it is protected from loss and destruction. You never know what might happen in the future!</p></div>'
      },
      {
        type: 'LEARN',
        notionId: '55c51a6c7e2946a1a098ced62d4f7180',
        title: 'Protect your Passwords',
        content: '<div class="bloc1"><p>Healthy password usage and management is an important piece of everyday internet exploration.</p><p>Passwords should be different for each and every web2 service used online. This includes services like email, centralized exchanges, and other service accounts. It’s problematic if someone manages to get the ID + password for one account, but it’s far worse if that combination unlocks all of your accounts!</p><p><code>Password manager</code> applications like 1password, LastPass, and BitWarden securely store and encrypt multiple passwords; they can even generate new high-security passwords and store them automatically. The user just has to remember a single master password. </p><p>Do <strong>not</strong> store a web3 <code>seed phrase</code> in a password manager; it takes just one password breach to obtain all of your web3 assets and there is no one to recover your assets for you.</p></div>'
      },
      {
        type: 'QUIZ',
        notionId: 'e5f3d6c5c2da4d2d8571608caa109ef7',
        title: '✅ quiz',
        quiz: {
          question: 'Why are password managers helpful?',
          rightAnswerNumber: 4,
          answers: [
            'People only have to remember their master password to use them.',
            'They generate and store strong, unique passwords.',
            'They encrypt passwords to keep them secure.',
            'All of the above'
          ],
          id: 'web3-security-2'
        }
      },
      {
        type: 'LEARN',
        notionId: '43fec0fae2ae42db8ed8780bbbd7f46a',
        title: 'Two Factor Authentication',
        content: '<div class="bloc1"><p><code>Two Factor Authentication</code>, also known as 2FA, is a secondary layer of web2 security.</p><p>Many people have had their web2 accounts hacked, or have had their money and credentials stolen despite having strong passwords. Web2 websites (and even <code>password managers</code>) often use a second layer of security 2FA as well. 2FA generates single-use codes sent to another device, in addition to the normal password, to enable website log-in. The other device could be a phone, a desktop computer, or even a small device you can attach to your keychain.</p><p>Phone (SMS) 2FA is better than no 2FA, but phone companies are vulnerable to scammers also. They can use <code>social engineering</code> to impersonate the account owner, bypass the company’s security checks, and gain access to the owner’s account - all without the real owner knowing. Authentication applications like Authy or Google Authenticator are more secure 2FA solutions.</p></div><div class="bloc2"><img src=\'/images/web3-security/two-factor-authentication-75e29563.svg\'></div>'
      },
      {
        type: 'QUIZ',
        notionId: '09b76e03da494739bc72eaee68f1e50c',
        title: '✅ quiz',
        quiz: {
          question: 'Why is two-factor authentication strongly recommended?',
          rightAnswerNumber: 2,
          answers: [
            'It’s impossible to hack an account when the user has 2FA enabled.',
            'It adds another layer of security to web2 accounts.',
            'It makes passwords stronger.',
            'All of the above'
          ],
          id: 'web3-security-3'
        }
      },
      {
        type: 'LEARN',
        notionId: 'ae2890ad87d94b49b1e85575da36c4ee',
        title: 'Social Engineering Scams',
        content: '<div class="bloc1"><p>In both web2 and web3, scammers use <code>phishing</code> tactics to trick people into giving up their passwords and seed phrases. Often they’ll pretend to be product support staff offering help, “Hello this is Metamask support”, or pretend to be an admin of a community, “New NFT mint, exclusive for our community”.</p><p>They use <code>social engineering</code> to pressure people. Examples include:</p><ul><li>“Time is running out!” - making you feel rushed.</li><li>“Congratulations you won our giveaway!” - making things feel exclusive.</li><li>”Get early access to our pre-mint!” - generating <code>FOMO</code> in the person being scammed.</li></ul></div><div class="bloc2"><img src=\'/images/web3-security/social-engineering-scams-5750ad84.svg\'></div>'
      },
      {
        type: 'LEARN',
        notionId: '87eb4de1d31d47299235691aa0dab08d',
        title: 'Fear Of Missing Out',
        content: '<div class="bloc1"><p><code>FOMO</code> stands for the ‘Fear Of Missing Out’, it’s the stressful feeling that you’re not going to get a great benefit or opportunity unless you do something <strong>right now</strong>.</p><p>The best defense against FOMO is to simply take a step back from your computer and take a break. People don’t think clearly when they’re stressed, that’s why FOMO is such an effective scamming tool. By stepping away from the situation, it becomes much easier to spot the scams for what they are.</p></div>'
      },
      {
        type: 'QUIZ',
        notionId: 'be6ab046c7b2408aae3afe725d0d1782',
        title: '✅ quiz',
        quiz: {
          question: 'How do scammers use social engineering?',
          rightAnswerNumber: 4,
          answers: [
            'Pretending to be an authority in a community.',
            'Pressuring people with short amounts of time.',
            'Offering giveaways or free NFTs to generate FOMO.',
            'All of the above'
          ],
          id: 'web3-security-4'
        }
      },
      {
        type: 'LEARN',
        notionId: 'c189bdd9b32e45b6bf5562cf6958357d',
        title: 'Social Media Safety',
        content: '<div class="bloc1"><p>Scammers love to engage with users in social media environments like Twitter and the Discord servers of cryptocurrency projects. They will typically try to move to or even start conversations via direct messaging to avoid being spotted by experienced community members. It’s generally safer to talk in public areas, until you’ve gained more experience in crypto-culture.</p><p>However, no matter where you are talking to others, you should <em><strong>never</strong></em> give your <code>seed phrase</code> to anyone for <strong>any reason</strong>. If anyone asks for your seed phrase or private key, they are a scammer. It’s that simple.</p></div>'
      },
      {
        type: 'LEARN',
        notionId: '276e9374da2e49428b3b4193dc692c86',
        title: 'Social Media Safety',
        content: '<div class="bloc1"><p>Social media <code>red flags</code>:</p><p>🚩 <strong>Language and grammar errors:</strong> They’re/their/there, etc.</p><p>🚩 <strong>FOMO:</strong> “Don’t miss out!”</p><p>🚩 <strong>Impersonation:</strong> an admin, support desk, Vitalik Buterin, Elon Musk, etc.</p><p>🚩 <strong>Guaranteed returns: </strong>Nothing is guaranteed in crypto.</p><p>🚩 <strong>Un</strong><strong>requested links and offers, </strong><em>especially in direct messages</em>.</p></div><div class="bloc2"><img src=\'/images/web3-security/social-media-safety-fbe97b9e.svg\'></div>'
      },
      {
        type: 'LEARN',
        notionId: '66a155651e4b4434a1f1d7c9f7e82e4c',
        title: 'Social Media Best Practices',
        content: '<div class="bloc1"><p>Practices for staying safe<strong>:</strong></p><p>✅ If they have to direct message you to sell their product, you probably don’t want it.</p><p>✅ Check the project follower and member count - though these do not guarantee project legitimacy, quality, or stability.</p><p>✅ Verify everything with an outside source, like another official project account.</p><p>✅ If you’re ever uncertain, check with reputable members from a community you trust - and ask in public. Our <a href=\'https://lenster.xyz/u/banklessacademy\'>Explorer Community</a> is a great place for questions like these.</p></div><div class="bloc2"><img src=\'/images/web3-security/social-media-best-practices-0776e310.svg\'></div>'
      },
      {
        type: 'LEARN',
        notionId: '61574044744645b6a4f7fe140539a7ab',
        title: 'Scam-tokens',
        content: '<div class="bloc1"><p>Besides social engineering, the second most common web3 attack is having <code>scam-tokens</code> sent to your web3 wallet. Scam-tokens are crypto tokens that scammers transfer to many wallets at once, in the hopes that someone will try to move or sell the tokens and trigger the malicious code hiding in the token’s smart contract.</p><p>Malicious contracts often require people to spend far more on a transaction than is necessary in order to sell these scam-tokens, and others can completely drain wallets; these scam-tokens could even be NFTs! If the problem isn’t with the smart contract itself, scam-tokens will often lure victims back to phishing websites where scammers try to trick victims into entering their <code>seed phrase</code> or other credentials.</p><p>The best thing to do when you receive random tokens is to not interact with them at all; leave them in your wallet and never transfer/sell them.</p></div><div class="bloc2"><img src=\'/images/web3-security/scam-tokens-cbab390e.svg\'></div>'
      },
      {
        type: 'QUIZ',
        notionId: '2cca9999b43449a89d9f3c991f655086',
        title: '✅ quiz',
        quiz: {
          question: 'Why is interacting with scam-tokens dangerous?',
          rightAnswerNumber: 4,
          answers: [
            'They could steal all of your ETH.',
            'They could steal other tokens from your wallet.',
            'They could lead to a phishing website where a scammer will try to get your seed phrase.',
            'All of the above'
          ],
          id: 'web3-security-5'
        }
      },
      {
        type: 'LEARN',
        notionId: '617b58e903f54546bf2e6e6cc598c8ed',
        title: 'Hardware Wallets',
        content: '<div class="bloc1"><p>If you remember from our <a href=\'https://app.banklessacademy.com/lessons/wallet-basics\'>Wallet Basics</a> lesson, a <code>hardware wallet</code> is only connected to the internet when you physically connect it to a computer or device that is connected to the internet. This makes your funds much safer as someone would have to physically steal your device and hack into it in order to find your <code>seed phrase</code>.</p><p>It is even possible to use your hardware wallet through many browser extension wallets, like MetaMask. By using this setup, you receive the convenience of a single wallet interface with the security of using a hardware wallet.</p><p>Ledger has <a href=\'https://www.ledger.com/academy/security/the-safest-way-to-use-metamask\'>written their own guide</a> on how to setup MetaMask for use with their hardware wallet device.</p></div><div class="bloc2"><img src=\'/images/web3-security/hardware-wallets-191cacd1.svg\'></div>'
      },
      {
        type: 'QUIZ',
        notionId: 'd6af501027e94afba6d7bca9306e17e1',
        title: '✅ Knowledge Check',
        quiz: {
          question: 'Is a hardware wallet more secure than a hot wallet?',
          rightAnswerNumber: 1,
          answers: [
            'Yes',
            'No'
          ],
          id: 'web3-security-6'
        }
      },
      {
        type: 'LEARN',
        notionId: '54e24ec782194af1bf5319f92143ecb8',
        title: 'Wallet Strategies',
        content: '<div class="bloc1"><p>After adding a hardware wallet to your setup, one of the best ways to secure your funds is to keep them spread between multiple <code>wallets</code>. Here is a compartmentalized strategy using three separate wallets:</p><ol><li><strong>Social Wallet:</strong> A wallet that serves as your web3 identity for logins — like for the <a href=\'https://app.banklessacademy.com/lessons/academy-community\'>Bankless Academy community</a> or web3 social media — use a <code>hardware wallet</code> for extra security.</li><li><strong>Trading Wallet:</strong> A <code>hot wallet</code> for trading and other activities involving funds that may need to be moved on short notice.</li><li><strong>HODL Wallet:</strong> A <code>hardware wallet</code> for the long-term <code>HODL</code> — these are funds intended to hold for a long time. It’s recommended to <em><strong>not </strong></em>use this wallet for interacting with smart contracts.</li></ol><p>👍 <strong>PROs:</strong> Separation ensures that scams only threaten funds in <em>that particular wallet</em> rather than <em>everything</em>.</p><p>👎 <strong>CONs:</strong> It’s more complicated to keep track of, but many wallet applications allow you to name your wallets.</p></div><div class="bloc2"><img src=\'/images/web3-security/wallet-strategies-857fd09c.svg\'></div>'
      },
      {
        type: 'QUIZ',
        notionId: 'b2fbfd1f92c744ffad23aaf8837283e6',
        title: '✅ Knowledge Check',
        quiz: {
          question: 'We recommend keeping your funds _______________ for higher security.',
          rightAnswerNumber: 3,
          answers: [
            'stored in multiple airdrops',
            'locked in multiple NFTs',
            'separated in multiple wallets',
            'liquid in multiple addresses'
          ],
          id: 'web3-security-7'
        }
      },
      {
        type: 'LEARN',
        notionId: 'ad51aaa76526457f80f74d4d898d4c01',
        title: 'Recovering from Web2 Scams',
        content: '<div class="bloc1"><p>Hopefully you have not already fallen victim to a scammer. If you have, there are some steps you should take to secure your accounts once more.</p><p>For a scam involving a web2 service, like Gmail or Discord, you should:</p><ul><li>Change your password on the affected account.</li><li>Where it’s available, use the “sign out everywhere else” button to kick the scammers off your account.</li><li>Enable <code>2FA</code> with an authenticator app.</li><li>Report the scam to the service involved.</li><li>Ensure your email account is also secure.</li><li>Discuss the scam with friends or trusted community members.</li></ul></div>'
      },
      {
        type: 'LEARN',
        notionId: '5ae46db5024b4193a9c2be75f9f6e5b4',
        title: 'Recovering from Web3 Scams',
        content: '<div class="bloc1"><p>Contracts must be given explicit permission to spend tokens on Ethereum. The token <code>allowance</code> is how much of that token you’ve given permission to be spent by a specific contract. Keeping allowances low reduces the risk to your assets by a potentially malicious application or hacker.</p><p>Web3 doesn’t have anyone in charge of protocols to report scammers to, but you can still take action:</p><ul><li>Immediately move any funds still in the compromised wallet to a different wallet address, <strong>make sure the new address has a different seed phrase.</strong></li><li>Review and revoke the token <code>allowances</code> you have given on your wallet with tools like <a href=\'https://etherscan.io/tokenapprovalchecker\'>etherscan.io/tokenapprovalchecker</a>. Note that revoking allowances will cost gas. OpenSea has a <a href=\'https://support.opensea.io/hc/en-us/articles/4416083190291-How-can-I-revoke-token-allowance-permissions-\'>support article</a> walkthrough.</li><li>Use a <code>hardware wallet</code> in the future.</li><li>Warn others by reporting the scam to the affected community.</li><li>Discuss the scam process with friends or trusted community members to see how you can protect yourself and others in the future.</li></ul></div>'
      },
      {
        type: 'QUEST',
        title: 'Web3 Security Quest',
        component: 'Web3Security'
      }
    ]
  },
  {
    badgeImageLink: '/images/layer-1-blockchains/badge-589925eb.png',
    lessonImageLink: '/images/layer-1-blockchains/lesson-25ab0a26.png',
    socialImageLink: '/images/layer-1-blockchains/social-49a15b49.jpg',
    learningActions: '',
    marketingDescription: 'Understand how Layer 1 blockchains work - and learn their limitations!',
    badgeId: 7,
    duration: 15,
    learnings: '',
    description: 'Understand how Layer 1 blockchains work - and learn their limitations!',
    name: 'Layer 1 Blockchains',
    languages: [],
    quest: 'Layer1Blockchains',
    publicationStatus: 'publish',
    publicationDate: '2022-12-14',
    featuredOrderOnHomepage: null,
    isCommentsEnabled: false,
    endOfLessonRedirect: null,
    notionId: '6e14e3cfc6a44087b3b3d15dd07d2fee',
    englishName: 'Layer 1 Blockchains',
    slug: 'layer-1-blockchains',
    imageLinks: [
      '/images/layer-1-blockchains/introduction-e0da8469.svg',
      '/images/layer-1-blockchains/blockchain-trilemma-31329f66.svg',
      '/images/layer-1-blockchains/security-and-consensus-5e1f03b6.svg',
      '/images/layer-1-blockchains/security-and-attacks-7d35acf6.svg',
      '/images/layer-1-blockchains/scalability-throughput-4b140ad0.svg',
      '/images/layer-1-blockchains/scalability-finality-161f7e2b.svg',
      '/images/layer-1-blockchains/decentralization-distributes-power-829f91a2.svg',
      '/images/layer-1-blockchains/is-it-decentralized-4b5bf857.svg',
      '/images/layer-1-blockchains/some-examples-523b9b96.svg',
      '/images/layer-1-blockchains/so-what-can-be-done-50592b46.svg',
      '/images/layer-1-blockchains/the-future-of-ethereum-2b64fd6b.svg'
    ],
    slides: [
      {
        type: 'LEARN',
        notionId: '21dbc915acd24c38896a0468daff30da',
        title: 'Introduction',
        content: '<div class="bloc1"><p>Problems emerge when more users want to use a <code>blockchain</code> network than it can handle. Large demand for <code>blockspace</code> can be temporary or can last as long as users continue to have a strong desire to use the blockchain. In times of high demand, Ethereum users can pay skyrocketing fees to still have their transactions processed quickly— ultimately pricing out users with less capital.</p><p>This lesson explores why Ethereum and other blockchains are subject to the <code>Blockchain Trilemma</code>, how the Trilemma is the root cause of the problems described above, and how the Trilemma affects Ethereum’s plans for serving the needs of all its users. We will look at the tradeoffs several blockchains have made concerning the Blockchain Trilemma, and what those tradeoffs mean for Academy Explorers.</p></div><div class="bloc2"><img src=\'/images/layer-1-blockchains/introduction-e0da8469.svg\'></div>'
      },
      {
        type: 'LEARN',
        notionId: '4dfda718520e4f5ea01dce2e8ee15529',
        title: 'Blockchain Trilemma',
        content: '<div class="bloc1"><p>As implied by the word <em><strong>tri</strong></em>lemma, there are three qualities of blockchains that compete with each other and prevent optimizing for all three at once. </p><p>These are: <code>Security</code>, <code>Scalability</code>, and <code>Decentralization</code>.</p><p>For a blockchain to serve as an unbiased foundation for a monetary system at a global scale, it should excel in all three aspects. A monetary system needs to be secure from fraud, safe from attacks by censors through decentralization, and scalable to meet the needs of over 8 billion humans in a global society.</p></div><div class="bloc2"><img src=\'/images/layer-1-blockchains/blockchain-trilemma-31329f66.svg\'></div>'
      },
      {
        type: 'QUIZ',
        notionId: '8a9d852b8f374a9d815917752850955e',
        title: '✅ TODO',
        quiz: {
          question: 'The Blockchain Trilemma describes the relationship between:',
          rightAnswerNumber: 3,
          answers: [
            'ethereum, bitcoin, and altcoins',
            'security, censorship, and fraud',
            'decentralization, scalabilty, and security',
            'money, humans, and blockchains'
          ],
          id: 'layer-1-blockchains-1'
        }
      },
      {
        type: 'LEARN',
        notionId: '1fc5863c44bb4437a21bc7cc7cb0cfdf',
        title: 'Security and Consensus',
        content: '<div class="bloc1"><p>Security is the most foundational requirement for a public blockchain. Computers within a network (such as a blockchain network) must agree on what transactions have truly happened to work together; this agreement is called <code>consensus</code>. A blockchain is secure if attackers cannot disrupt the network from agreeing on that truth. Consensus algorithms are designed to resist these attacks.</p><p>Chains like Bitcoin that use <code>Proof of Work</code> consensus prevent fraud by making their consensus algorithm highly competitive; each block producer races to solve a math problem. The first to do so wins the right to create the next block and receives the monetary <code>block reward</code> that comes with it. Fraud would require massive investments in computing power and energy, so an attacker would likely spend more than they’d gain. </p></div><div class="bloc2"><img src=\'/images/layer-1-blockchains/security-and-consensus-5e1f03b6.svg\'></div>'
      },
      {
        type: 'QUIZ',
        notionId: '9455d76687c34494949eb471628f7b56',
        title: '✅ Consensus',
        quiz: {
          question: 'Blockchain consensus for cryptocurrencies is:',
          rightAnswerNumber: 4,
          answers: [
            'The process where all blockchain nodes agree on what has happened on-chain',
            'Important for everyone in that chain’s ecosystem to prevent fraud',
            'Secured through economic incentives',
            'All of the above'
          ],
          id: 'layer-1-blockchains-2'
        }
      },
      {
        type: 'LEARN',
        notionId: 'd22518cb06b944acad0745a1121d39b5',
        title: 'Security and Attacks',
        content: '<div class="bloc1"><p>One potential form of attack on blockchain consensus is a <code>51% attack</code>; an attacker needs to have 51% or more of the consensus power on a network to commit fraud by creating falsified transactions. This means 51% of the computing power solving math problems in Proof of Work consensus and 51% of the <code>stake</code> in Proof of Stake consensus. Again, fraud would require a massive capital investment to acquire a stake in the network, which will be destroyed if found to be creating false transactions; an attacker would likely spend more than they’d gain.</p><p>In <code>Proof of Stake</code> consensus, the block producer isn’t chosen through competition but is randomly assigned instead. Like with Proof of Work, the consensus algorithm ensures that any single entity cannot regularly “win” the right to create a new <code>block</code>. </p></div><div class="bloc2"><img src=\'/images/layer-1-blockchains/security-and-attacks-7d35acf6.svg\'></div>'
      },
      {
        type: 'QUIZ',
        notionId: '6d17200e997843b6a90895ff4ebf11f2',
        title: '✅ 51% attacks',
        quiz: {
          question: 'The end-goal of a 51% attack is to:',
          rightAnswerNumber: 2,
          answers: [
            'Disrupt mining operations',
            'Commit fraud in blockchain systems',
            'Create a new cryptocurrency',
            'Eliminate the other 49%'
          ],
          id: 'layer-1-blockchains-3'
        }
      },
      {
        type: 'LEARN',
        notionId: '0bfdc60dd92149ee94b626e5c5b9c44d',
        title: 'Scalability - Throughput',
        content: '<div class="bloc1"><p><code>Scalability</code> refers to a blockchain’s ability to process many transactions quickly. Two parts determine a blockchain’s scalability: throughput and finality.</p><p>1) <code>Transaction throughput</code>: How many transactions a blockchain can process at once, usually measured in transactions per second (<code>TPS</code>).</p><p>Imagine many people waiting at a bus stop with more arriving every minute, they all want to travel. But there are only so many people that can travel by bus. To clear the bus stop of people faster, you’d have to use bigger busses (more people) or make the busses run more often (less time). It works the same way with trying to fit many transactions into the small amount of <code>block space</code> available for each block. You can see this visualization with live data at <a href=\'https://txstreet.com/v/eth-btc\'>https://txstreet.com/v/eth-btc</a>.</p></div><div class="bloc2"><img src=\'/images/layer-1-blockchains/scalability-throughput-4b140ad0.svg\'></div>'
      },
      {
        type: 'QUIZ',
        notionId: '796f016b847e4383bbeeba78736e620b',
        title: '✅ Transactions Per Second',
        quiz: {
          question: 'Which of the following is true for the bus stop analogy for blockchain transactions?',
          rightAnswerNumber: 4,
          answers: [
            'People (transactions) are grouped together into buses (blocks)',
            'There is a maximum limit on how many people (transactions) can fit into each bus (block)',
            'To process more people (transactions) you need faster, larger, and/or more buses (blocks)',
            'All of the above'
          ],
          id: 'layer-1-blockchains-4'
        }
      },
      {
        type: 'LEARN',
        notionId: 'cf8aeea9908e4dc7960f63ae71edcad4',
        title: 'Scalability - Finality',
        content: '<div class="bloc1"><p>The second aspect of blockchain scalability is:</p><p>2) <code>Finality</code>: When can we be reasonably sure a transaction won’t get changed or reversed?</p><p>Finality is typically measured in blocks — how many blocks have passed since the transaction was included in a block? The more blocks that get added to the chain afterward, the more sure we can be that the transaction is finalized and won’t get reverted. Remember, a secure blockchain consensus algorithm makes it very expensive to change past blocks, and the expense increases the farther back someone changes. We convert this block number to a finality time by multiplying the expected number of block confirmations by the blockchain’s TPS. For Ethereum, eight block confirmations times 15 <code>TPS</code> gives 2 minutes of finality time after confirmation. </p></div><div class="bloc2"><img src=\'/images/layer-1-blockchains/scalability-finality-161f7e2b.svg\'></div>'
      },
      {
        type: 'LEARN',
        notionId: '484d38249db74050a6a14cf584f44c15',
        title: 'Decentralization distributes power',
        content: '<div class="bloc1"><p><code>Decentralization</code> is the final basis of the blockchain trilemma — the process of transferring control and decision-making from a single entity to a distributed network of many. Decentralization is the fundamental principle that enables blockchains to be <code>permissionless</code> and <code>censorship-resistant</code>; anyone can use decentralized blockchains, and anyone can build software using them.</p><p>Centralized platforms like Facebook and Twitter can deactivate anyone’s account at any time. Many influential streamers on Twitch or Tiktok have found themselves removed from their platforms without cause. Even if social media users can reinstate their accounts, it can be long and painful process. Without decentralization, a blockchain <code>ledger</code> is just a financial spreadsheet on a bank computer; the bankers decide who gets to create an account with them. A <code>permissionless</code> network means authority is sufficiently decentralized; there is no way to remove a person or entity’s access.</p></div><div class="bloc2"><img src=\'/images/layer-1-blockchains/decentralization-distributes-power-829f91a2.svg\'></div>'
      },
      {
        type: 'QUIZ',
        notionId: '53dd5c9a8dfe468d8a1f3163bfce7230',
        title: '✅ Why decentralization?',
        quiz: {
          question: 'Which of these statements is NOT true for decentralization?',
          rightAnswerNumber: 3,
          answers: [
            'Decentralization makes blockchains censorship-resistant',
            'Decentralization makes blockchains permissionless',
            'Decentralization helps authoritarian powers to maintain control',
            'Anyone anywhere can use permissionless systems'
          ],
          id: 'layer-1-blockchains-5'
        }
      },
      {
        type: 'LEARN',
        notionId: '08840d13c2fe4acca833d5bd31ce7969',
        title: 'Is it decentralized?',
        content: '<div class="bloc1"><p>But whether something is decentralized isn’t just a yes or no answer. Are 10 controlling entities decentralized? How about 1000? One million? There isn’t a standard cutoff for something being sufficiently decentralized, so it makes sense to think of decentralization as a spectrum. Rather than the only choices being black and white, there are also many greys between them.</p><p>So we can say something is “more or less decentralized than something else” rather than “centralized or decentralized.” A high degree of decentralization is required for a neutral monetary system to resist state-level censorship. Newer blockchains often trade decentralization for scalability, but they leave themselves vulnerable to the same pressures from societies and governments that fully centralized platforms feel. They may end up engaging in the same censorship seen on centralized social media networks.</p></div><div class="bloc2"><img src=\'/images/layer-1-blockchains/is-it-decentralized-4b5bf857.svg\'></div>'
      },
      {
        type: 'QUIZ',
        notionId: 'd5e125d69d6f4cfe963af2ee0515594a',
        title: '✅ But is it Decentralized?',
        quiz: {
          question: 'Different blockchains use different amounts of decentralization. ',
          rightAnswerNumber: 1,
          answers: [
            'True',
            'False'
          ],
          id: 'layer-1-blockchains-6'
        }
      },
      {
        type: 'LEARN',
        notionId: 'fdfbd964272445d5981d88c7f4c78410',
        title: 'Some Examples',
        content: '<div class="bloc1"><p>Each blockchain has its own approach to the trilemma, and each has made tradeoffs to focus on its goals. Bitcoin and Ethereum prioritize security and decentralization over scalability, leading to long transaction <code>finality time</code> for Bitcoin and sky-high transaction fees for Ethereum. The demand to use <code>smart contracts</code> as a “decentralized world-finance computer”, especially for DeFi, has meant that many users making small transactions cannot afford Ethereum.</p><p>This high cost to use has provided an opening for <code>alternative Layer 1</code>’s like the Binance chain. Binance prioritized scalability over decentralization for higher <code>transaction throughput</code> and cheaper fees. Third-generation chains like Solana use novel methods to solve the trilemma, but all blockchains are still subject to these basic constraints. Each chain’s choice defines its ecosystem through the foundational effects that come from that choice.</p></div><div class="bloc2"><img src=\'/images/layer-1-blockchains/some-examples-523b9b96.svg\'></div>'
      },
      {
        type: 'LEARN',
        notionId: '997686d2404c4556a6841a0232705c8b',
        title: 'So what can be done?',
        content: '<div class="bloc1"><p>So if Ethereum has prioritized high security and decentralization, how can it scale to serve the needs of all users as the global financial network it aims to become? This is where the Ethereum roadmap can provide some answers: <code>Layer 2</code>s and blockchain <code>sharding</code>.</p><p><code>Layer 2</code>s are an early solution to increasing Ethereum scalability without compromising on the other two parts of the blockchain trilemma. They are an additional layer sitting on top of the main blockchain, relying on the main chain for security but allowing users to benefit from reduced fees and faster transactions. We will explore them in more detail in our Layer 2 lesson.</p><p><code>Sharding</code> splits the single blockchain into multiple chains that all run together in parallel, like adding more lanes to a road. It enables more transactions to be processed at once without sacrificing security or decentralization.</p></div><div class="bloc2"><img src=\'/images/layer-1-blockchains/so-what-can-be-done-50592b46.svg\'></div>'
      },
      {
        type: 'QUIZ',
        notionId: 'e1a2b41a64f9422c8082603459a28c0e',
        title: '✅ Layer 2s',
        quiz: {
          question: 'Layer 2s:',
          rightAnswerNumber: 2,
          answers: [
            'Provide their own security',
            'Increase scalability for the main blockchain',
            'Increase fees for users',
            'Increase finality time for users'
          ],
          id: 'layer-1-blockchains-7'
        }
      },
      {
        type: 'LEARN',
        notionId: '18c497caf1df4810afb1497884a26962',
        title: 'The future of Ethereum',
        content: '<div class="bloc1"><p>Previously known as the Ethereum 2.0 upgrade, the Ethereum network is evolving its scalability without sacrificing the other aspects of the trilemma. These changes include the merge to <code>Proof of Stake</code> consensus, Layer 2s going live, <code>sharding</code> of the main chain, and an overall reduction of energy usage. <strong>All of these changes together will mean a faster, more environmentally-friendly, and cheaper Ethereum while still maintaining security and decentralization as core tenets.</strong> The Ethereum Foundation has an excellent webpage on coming <a href=\'https://ethereum.org/en/upgrades/\'>upgrades to Ethereum</a>.</p><p>These things take time; meanwhile, many <code>Layer 2</code> protocols are building on top of Ethereum to help meet user demand in the short term without requiring updates to the Ethereum protocol itself. These Layer 2 protocols rely on Layer 1 Ethereum to provide decentralized security while they provide scalability; the diversity of Layer 2s makes a decentralized ecosystem! Ethereum scaling projects include protocols like Optimistic Ethereum, Polygon, and others.</p></div><div class="bloc2"><img src=\'/images/layer-1-blockchains/the-future-of-ethereum-2b64fd6b.svg\'></div>'
      },
      {
        type: 'QUIZ',
        notionId: '79e758e2b8da45468f9f3f11281e2c6c',
        title: '✅ Ethereum Future',
        quiz: {
          question: 'Ethereum upgrades include:',
          rightAnswerNumber: 4,
          answers: [
            'Using Layer 2s and sharding to increase scalability',
            'Maintaining decentralization and security as core principles',
            'Reducing energy consumption of the blockchain using Proof of Stake consensus',
            'All of the above'
          ],
          id: 'layer-1-blockchains-8'
        }
      },
      {
        type: 'LEARN',
        notionId: 'a229a575b61b4f0f84018a0346de4658',
        title: 'What does it mean for Explorers?',
        content: '<div class="bloc1"><p>Users need low fees to learn and explore the technology with low barriers to entry and low costs from mistakes, even more so at the beginning of their journey. The Ethereum blockchain is not ideal yet, but its values make it one of the best candidates for fulfilling the dream of a global financial computing system. Explorers can learn to interact and use Ethereum without paying massive fees; using Layer 2s allows Explorers to have the security and decentralization benefits of Ethereum combined with the higher scalability.</p><p>The next lesson will explain <code>Layer 2</code> solutions and how to get started. Onward explorers!</p></div>'
      },
      {
        type: 'QUEST',
        title: 'Layer 1 Blockchains Quest',
        component: 'Layer1Blockchains'
      }
    ]
  },
  {
    badgeImageLink: '/images/layer-2-blockchains/badge-487da00e.png',
    lessonImageLink: '/images/layer-2-blockchains/lesson-7b61eb81.png',
    lessonCollectedImageLink: '/images/layer-2-blockchains/datadisk-collected-3ceaf76b.png',
    lessonCollectibleGif: '/images/layer-2-blockchains/datadisk-gif-8924f6f7.gif',
    lessonCollectibleVideo: '/images/layer-2-blockchains/datadisk-video-32997438.webm',
    lessonCollectibleMintID: '64b810dda23ab034b49a1340',
    lessonCollectibleTokenAddress: '0x5ce61b80931Ea67565f0532965DDe5be2d41331d',
    socialImageLink: '/images/layer-2-blockchains/social-6c3ab78b.jpg',
    learningActions: '',
    marketingDescription: 'The Layer 2 revolution has begun. Discover how the Layer 2 ecosystem can boost your transaction speed & reduce gas fees.',
    badgeId: 8,
    collectibleId: 'D001',
    duration: 15,
    learnings: '',
    description: 'Join the Layer 2 ecosystem to boost your transaction speed & reduce fees.',
    name: 'Layer 2 Blockchains',
    languages: [],
    lessonWriters: 'HiroKennelly, Tetranome',
    quest: 'Layer2Blockchains',
    publicationStatus: 'publish',
    publicationDate: '2023-02-22',
    featuredOrderOnHomepage: 3,
    isCommentsEnabled: false,
    endOfLessonRedirect: null,
    sponsorName: 'Optimism',
    sponsorLogo: '/images/layer-2-blockchains/sponsor-c5d98695.png',
    hasCollectible: true,
    notionId: '340eb401ab824dea8f85aace1aaf69c1',
    englishName: 'Layer 2 Blockchains',
    slug: 'layer-2-blockchains',
    imageLinks: [
      '/images/layer-2-blockchains/introduction-0d584167.svg',
      '/images/layer-2-blockchains/payment-channels-5e29dfd3.svg',
      '/images/layer-2-blockchains/bridging-layer-1-and-layer-2-8268ff20.svg',
      '/images/layer-2-blockchains/sidechains-406fe8d1.svg',
      '/images/layer-2-blockchains/rollups-ea8672d0.svg',
      '/images/layer-2-blockchains/optimistic-rollups-75b31999.svg',
      '/images/layer-2-blockchains/zk-rollups-bc7c293e.svg',
      '/images/layer-2-blockchains/cross-chain-dapp-compatibility-eeb2b414.svg',
      '/images/layer-2-blockchains/start-your-layer-2-journey-with-optimism--7999722b.svg'
    ],
    slides: [
      {
        type: 'LEARN',
        notionId: 'f6fc99d03e0c4b5b993363554015e1a4',
        title: 'Introduction',
        content: '<div class="bloc1"><p>The desired operational state for any blockchain is to be as decentralized, secure, and scalable as possible. Building a blockchain that handles all three aspects well has proven to be a challenge, as yet unsolved. This challenge has been given a name: the <code>Blockchain Trilemma</code>. </p><p>Bitcoin and Ethereum are both fairly decentralized and secure, but they don’t scale well, as is evident from the high transaction fees and long transaction queues when the network is busy. To circumvent these issues, Explorers can make use of various technologies which drastically reduce transaction costs and increase transaction speed. These are collectively known as Layer 2 (L2) scaling solutions.</p><p>The Lightning Network is Bitcoin’s best-known scaling solution, and it relies on a technology called <code>payment channels</code> to scale payments between parties. Ethereum has plans to eventually ease the Blockchain Trilemma through the use of sharding technology, but for the immediate future the network is relying on various L2 solutions to improve scalability.<br></p></div><div class="bloc2"><img src=\'/images/layer-2-blockchains/introduction-0d584167.svg\'></div>'
      },
      {
        type: 'LEARN',
        notionId: 'dc574962da85412b812f13526ec34e4f',
        title: 'Payment Channels',
        content: '<div class="bloc1"><p>On the Bitcoin blockchain, the Lightning Network relies on bidirectional payment channels, which enables multiple parties to exchange BTC without transacting on the main chain.</p><p>The architecture enables parties to open payment channels amongst two or more users. Between the opening and closing of a channel, parties can shift funds among themselves. Each participant’s micro-ledger entry is updated after both users sign for the transaction — which requires both users to be online.<br>A channel can be closed at any time by either party broadcasting the most recent version of the micro-ledger to the blockchain.</p><p>Payment channels don’t support advanced <code>smart contract</code> interactions, only basic peer-to-peer transactions.</p></div><div class="bloc2"><img src=\'/images/layer-2-blockchains/payment-channels-5e29dfd3.svg\'></div>'
      },
      {
        type: 'QUIZ',
        notionId: 'c936d76401b8492ebc04e9faad4971df',
        title: '✅ Question',
        quiz: {
          question: 'You must be online to transact using the Bitcoin Lightning Network.',
          rightAnswerNumber: 1,
          answers: [
            'True',
            'False'
          ],
          id: 'layer-2-blockchains-1'
        }
      },
      {
        type: 'LEARN',
        notionId: 'ee7b95a6392f4a41b944d03d2fa967fa',
        title: 'Ethereum Scaling Solutions',
        content: '<div class="bloc1"><p>Ethereum developers have been working on Ethereum-native scaling solutions for nearly as long as that network has been live.</p><p>Most Ethereum community members argue that in order to be an “Ethereum scaling solution”, a project must address Ethereum’s <code>scalability</code> shortcomings without sacrificing <code>security</code> or <code>decentralization</code>. For users, the most practical needs are faster transactions and cheaper <code>gas</code> than Ethereum Mainnet. To compete, some scaling solutions are willing to make greater trade-offs on the Trilemma than others.</p><p>Ethereum is defined by its smart contract capabilities, so it is also important that its scaling solutions inherit this support. There’s no use having fast, cheap transactions if users can’t access their favorite <code>dApps</code> from a Layer 2.</p></div>'
      },
      {
        type: 'QUIZ',
        notionId: '9ae2b8d3eb6445eeb9ed7f9079e09127',
        title: '✅ Question',
        quiz: {
          question: 'Ethereum scaling solutions:',
          rightAnswerNumber: 3,
          answers: [
            'use payment channels to scale the network.',
            'can’t support smart contract interactions.',
            'should increase scalability without compromising on other trilemma attributes.',
            'allow faster transaction speeds at the cost of higher gas.'
          ],
          id: 'layer-2-blockchains-2'
        }
      },
      {
        type: 'LEARN',
        notionId: 'cd8cecba43b74bdd881a93394cd61423',
        title: 'Bridging Layer 1 and Layer 2',
        content: '<div class="bloc1"><p>As we learned in <a href=\'https://app.banklessacademy.com/lessons/blockchain-basics\'>Blockchain Basics</a>, blockchains are databases known as <code>ledgers</code>, that record a cryptographically secured, chronological list of transactions. L1 blockchains and L2 scaling solutions are each blockchains in their own right, with their own databases of addresses and data.</p><p>Infrastructure called <code>bridges</code> is used to transfer information between different blockchain databases. For example, if you think of the Ethereum Mainnet (or any other <code>L1</code> blockchain) as one island, and a different blockchain or your preferred scaling solution as another, a crypto bridge is the generic term for the networked highway connecting these two digital islands.</p><p>The technology is very complex, but from the end user perspective this process is as simple as choosing a destination.</p></div><div class="bloc2"><img src=\'/images/layer-2-blockchains/bridging-layer-1-and-layer-2-8268ff20.svg\'></div>'
      },
      {
        type: 'LEARN',
        notionId: '826947a620bd4c64a9d3eb370bb81f4a',
        title: 'Sidechains',
        content: '<div class="bloc1"><p>A <code>sidechain</code> is a separate blockchain that runs independently to Ethereum — but is connected to Ethereum Mainnet by a <code>bridge</code> that maintains a two-way peg. This means that to migrate native tokens to the sidechain, you have to lock them in a bridge contract on Ethereum Mainnet, so that the balance on the sidechain never exceeds the collateral locked on Mainnet. Such bridges extend the security of Ethereum to capital on the sidechain, while allowing them to validate and process their own transactions.</p><p>Sidechains are still subject to the Blockchain Trilemma. Their lower <code>gas</code> fees and increased transaction speed can be attributed to a smaller but more powerful validator set — meaning they trade some decentralization and security for scalability.</p><p>Sidechains, like Polygon PoS, regularly publish snapshots to the L1, saving a moment-in-time status of their ledger. Snapshots enable sidechains to roll the chain state back to a previous snapshot in the case of on-chain fraud or error.</p></div><div class="bloc2"><img src=\'/images/layer-2-blockchains/sidechains-406fe8d1.svg\'></div>'
      },
      {
        type: 'QUIZ',
        notionId: 'a890d0f6e44040269eade42746f0022b',
        title: '✅ Question',
        quiz: {
          question: 'Sidechains:',
          rightAnswerNumber: 4,
          answers: [
            'hold collateral on Mainnet.',
            'have cheaper gas fees than Mainnet.',
            'have greater centralization risks than Mainnet.',
            'All the above.'
          ],
          id: 'layer-2-blockchains-3'
        }
      },
      {
        type: 'LEARN',
        notionId: '4d0a5e9e3904406eaf455f8c0066762e',
        title: 'Rollups',
        content: '<div class="bloc1"><p>Layer 2 protocols that use Rollup technology maintain closer alignment with the security level of Ethereum Mainnet. </p><p>Like sidechains, Rollups permit on-chain transactions to execute away from Ethereum Mainnet. These transactions are then ‘rolled up’ into a single transaction before being sent to Ethereum.</p><p>In order for the Rollup to prove itself secure enough to process transactions on behalf of Mainnet, it must provide “convincing evidence” that the transactions in each submitted batch are secure and valid. This evidence is included in the transaction rollup and verified by the bridge contract on Ethereum Mainnet.</p><p>There are currently two Rollup methods that can provide this evidence: <code>Optimistic Rollups</code>, and <code>ZK Rollups</code>. Let’s take a closer look at these two processes.</p></div><div class="bloc2"><img src=\'/images/layer-2-blockchains/rollups-ea8672d0.svg\'></div>'
      },
      {
        type: 'LEARN',
        notionId: '6a447dba0cef441dab05c1985c4d4588',
        title: 'Optimistic Rollups',
        content: '<div class="bloc1"><p>L2 protocols like Optimism, Base and Arbitrum, all use <code>Optimistic Rollups</code> as their scaling solution architecture. Optimistic Rollups are so-called because the information in the Rollup batch is considered to be valid unless proven otherwise — an optimistic assumption is made.</p><p>To mitigate against any abuse of this technique, there is typically a multi-day delay once a user requests to move funds off of the L2 back to Mainnet. During this time, bridge validators can publish a <code>fraud proof</code> seeking to cancel the withdrawal. This fraud-proof mechanism is similar to the banking industry’s clearance processes, but is decentralized.</p><p>Note: Third-party bridging services, like Across and Hop, help users bridge funds in mere minutes rather than days, but these solutions come with an increased risk of attack compared to protocol-native bridges due to differing fraud-proof processes.</p></div><div class="bloc2"><img src=\'/images/layer-2-blockchains/optimistic-rollups-75b31999.svg\'></div>'
      },
      {
        type: 'QUIZ',
        notionId: '057bb41223514659805e95984d08e127',
        title: '✅ Question',
        quiz: {
          question: 'With Optimistic Rollups, transactions are considered valid until proven otherwise.',
          rightAnswerNumber: 1,
          answers: [
            'True',
            'False'
          ],
          id: 'layer-2-blockchains-4'
        }
      },
      {
        type: 'LEARN',
        notionId: '4c62c5a8d4714ccdbafde4519a4f08b6',
        title: 'ZK Rollups',
        content: '<div class="bloc1"><p><code>ZK Rollups</code> are a type of Rollup that relies on Zero-Knowledge technology. Unlike <code>Optimistic Rollups</code>, ZK Rollups confirm the legitimacy of the batched transactions almost immediately, without reliance on certain users to look for evidence of fraud. Instead, these Rollups confirm transactions using complex, computation-heavy mathematical models.</p><p>The major upside to ZK Rollups is the <code>settlement time</code>, also known as <code>transaction finality</code>. Rather than a multi-day settlement period, ZK Rollups enable users to access their funds in under an hour. User privacy is also improved because only the mathematical proof is stored on Mainnet.</p><p>There are some major protocols using ZK Rollup technology to build their Ethereum scaling solutions, including zkSync, StarkNet, and Aztec. It’s still early in terms of development, but has great future potential.</p></div><div class="bloc2"><img src=\'/images/layer-2-blockchains/zk-rollups-bc7c293e.svg\'></div>'
      },
      {
        type: 'QUIZ',
        notionId: 'b32175e73bf0438d99d8556f323b00c3',
        title: '✅ Question',
        quiz: {
          question: 'Compared to Optimistic Rollups, ZK Rollups:',
          rightAnswerNumber: 2,
          answers: [
            'post more user data to Mainnet.',
            'offer greater privacy and enable faster transaction finality on Mainnet.',
            'perform fewer computations to finalize a transaction.'
          ],
          id: 'layer-2-blockchains-5'
        }
      },
      {
        type: 'LEARN',
        notionId: '520c360570574151a8aaa301f66624f1',
        title: 'Cross-chain dApp Compatibility',
        content: '<div class="bloc1"><p>When comparing <code>Optimistic Rollups</code> and <code>ZK Rollups</code>, the main focus for most users is withdrawal times. However, since these withdrawal-lag issues can be resolved by third-party bridges, it shouldn’t be a major consideration when deciding which scaling solution to explore.</p><p>Many Optimistic Rollups are “EVM equivalent”, meaning the L2 natively supports any dApp that can run on the <code>Ethereum Virtual Machine</code> (EVM). EVM equivalence enables deployment of any smart contracts previously deployed on Mainnet - thus allowing L2 users to access their favorite dApps.</p><p>Sidechains and ZK Rollups are not yet fully EVM equivalent. For now this limits the dApp ecosystems of such networks, but also allows for greater experimentation and discovery of new ways to layer dApp experiences on top of Ethereum.</p></div><div class="bloc2"><img src=\'/images/layer-2-blockchains/cross-chain-dapp-compatibility-eeb2b414.svg\'></div>'
      },
      {
        type: 'QUIZ',
        notionId: '1825171859534afd90daf79776933e1d',
        title: '✅ Question',
        quiz: {
          question: 'EVM equivalent scaling solutions are able to easily reuse smart contracts deployed on Mainnet.',
          rightAnswerNumber: 1,
          answers: [
            'True',
            'False'
          ],
          id: 'layer-2-blockchains-6'
        }
      },
      {
        type: 'LEARN',
        notionId: '70caebdf521049a4961568846014eedb',
        title: 'Lesson Recap',
        content: '<div class="bloc1"><p>L1 blockchains like Bitcoin and Ethereum are currently constrained by the <code>Blockchain Trilemma</code>. <code>Payment channels</code> on the Bitcoin network, or sidechains and Rollups on Ethereum, help these networks to scale and ease the Trilemma.</p><p><code>Bridges</code> connect L1 blockchains with <code>sidechains</code> and <code>Rollups</code>, and the way in which the bridge contract functions influences the properties of the connected network.</p><p>Sidechain funds inherit the <code>security</code> of Ethereum via a two-way peg, but the network validates and processes its own transactions. These chains have a small but powerful validator set that allows them to increase transaction speed and lower gas fees, at the cost of decentralization.</p><p>Rollups, like sidechains, also validate and process their own transactions, but their bridge contract requires them to provide “convincing evidence” of transaction validity before the data is considered valid. This allows them to uphold a level of <code>security</code> and <code>decentralization</code> in alignment with Ethereum values. There are two methods for providing this “convincing evidence”: Optimistic Rollups and ZK Rollups. <code>Optimistic Rollups</code> maintain a multi-day delay before settling their transaction rollups on Mainnet, during which time bridge validators detect and report fraud. <code>ZK Rollups</code> provide mathematical assurance of transaction legitimacy, thanks to <code>Zero-Knowledge</code> technology.</p><p>Presently, Optimistic Rollups offer the greatest level of smart contract compatibility with Ethereum Mainnet, enabling dApps from Ethereum Mainnet to easily deploy on their networks. Many believe ZK Rollups will become the scaling solution of the future, thanks to their high levels of privacy and security.</p></div>'
      },
      {
        type: 'LEARN',
        notionId: 'd76fda63e7aa4d339dc66c7f273b7d8f',
        title: 'Start Your Layer 2 Journey With Optimism 🙂',
        content: '<div class="bloc1"><p>We believe that Optimism, an EVM-equivalent Optimistic Rollup, is a great L2 for Explorers to begin with. Using dApps on Optimism will feel similar to using L1 dApps, just cheaper and faster — and it uses ETH as gas. Your upcoming quest will serve as the first step in your Optimism journey!</p><p>This improved functionality isn’t the only reason Optimism is a great scaling solution for Bankless Explorers. The ecosystem is highly influenced by Ethereum values, with a portion of its transaction fees used to <a href=\'https://optimism.mirror.xyz/wqk1Yeyn2OhV9paDzbRXvQ0m0JYDu2npbSkMClwk1rY\'>retroactively fund public good projects</a> adding value to the ecosystem. It’s like a digital country that regularly and transparently funds on-chain infrastructure, such as free education from Bankless Academy, for everyone.</p><p>Optimism is not simply a platform that relies on the Optimistic Rollup. The network is a metaphor for the power of blockchain technology to solve existing problems and to show us new ways of transacting and living together. And that should make us all optimistic. 🙂</p></div><div class="bloc2"><img src=\'/images/layer-2-blockchains/start-your-layer-2-journey-with-optimism--7999722b.svg\'></div>'
      },
      {
        type: 'QUEST',
        title: 'Layer 2 Blockchains Quest',
        component: 'Layer2Blockchains'
      }
    ]
  },
  {
    badgeImageLink: null,
    lessonImageLink: '/images/funding-a-wallet-on-layer-2/lesson-2aaa40f9.png',
    socialImageLink: '/images/funding-a-wallet-on-layer-2/social-f6aca8f1.png',
    learningActions: '',
    marketingDescription: 'Learn how to fund your wallet on L2 via CEXs, third-party onramps, and bridges.',
    badgeId: null,
    collectibleId: 'H001',
    duration: 5,
    learnings: '',
    description: 'Learn how to fund your wallet on L2 via CEXs, third-party onramps, and bridges.',
    name: 'Funding a Wallet on Layer 2',
    languages: [],
    lessonWriters: 'HiroKennelly',
    publicationStatus: 'publish',
    publicationDate: '2023-02-22',
    featuredOrderOnHomepage: null,
    isCommentsEnabled: false,
    endOfLessonRedirect: null,
    mirrorLink: 'https://mirror.xyz/banklessacademy.eth/zLajMWXQC44H4uQOXK5j9ROZhuC3xwgoddLtAQQo0k0',
    mirrorNFTAddress: '0x235f3dfe5106f137d8b137c1b7fa115076e8b476',
    areMirrorNFTAllCollected: true,
    sponsorName: 'Optimism',
    sponsorLogo: '/images/funding-a-wallet-on-layer-2/sponsor-4e75be5e.png',
    isArticle: true,
    notionId: '549533d73275476d905dc2c34c4c2b5c',
    englishName: 'Funding a Wallet on Layer 2',
    slug: 'funding-a-wallet-on-layer-2',
    articleContent: '## Key Takeaways\n\n> * There are a number of ways to fund your wallet on an Ethereum scaling solution like Optimism, Arbitrum, or Polygon.\n>\n> * Centralized exchanges often provide a direct Layer 2 onramp.\n>\n> * Third-party payment apps enable users to fund a wallet on Layer 2 from a bank account or a debit or credit card.\n>\n> * Protocol bridges let users send funds from Ethereum Mainnet to Layer 2.\n\nIf you’re new to crypto, all the talk about the importance of `Layer 2` (or L2) must seem a bit odd, confusing really. In contrast to [Layer 1](https://app.banklessacademy.com/lessons/layer-1-blockchains), which often refers to [Ethereum Mainnet](https://ethereum.org/), Layer 2 is a term for a specific type of Ethereum scaling solution that enables users to inherit the security of Ethereum but enjoy low transaction fees and fast `block` inclusion times. If you’ve ever heard of [Optimism](https://www.optimism.io/), [Arbitrum](https://arbitrum.io/), or [Polygon](https://polygon.technology/) (which is really a side chain, but let’s not worry about that here), those are Layer 2 scaling solutions.\n\nWhen the Ethereum network is busy, it can cost the equivalent of 80 USD in transaction fees — known as `gwei` or gas — to swap tokens, and much more to mint NFTs or provide `liquidity` to a `decentralized exchange` (DEX) on Mainnet. When network activity is low, most transactions on Ethereum Mainnet still cost a few dollars, and it takes an [FTX-level debacle](https://www.investopedia.com/ftx-exchange-5200842) or a [beyond-hyped NFT drop](https://dappradar.com/blog/yuga-labs-600m-otherside-nft-land-sale-records-highest-gas-fees-ever-on-ethereum) to really spike transaction fees.\n\nBecause transactions on Layer 2 confirm quickly and are inexpensive to execute, many of the most innovative protocols are building on L2s. Unless you’ve been in the ecosystem for a while, however, it’s not intuitive to know how to start using Layer 2s. But there is a clear place to begin your journey into Ethereum scaling solutions: funding your `wallet` on Layer 2.\n\nThere are three main ways to fund an L2 wallet: moving your crypto from a `centralized exchange` straight to a Layer 2 network, using a third-party crypto payment service to fund an L2 wallet, or sending your digital assets from Mainnet to L2 via a bridging protocol.\n\n> Please note, you’ll need to have a cryptocurrency wallet, like [MetaMask](https://metamask.io/) or [Tally Ho](https://tallyho.org/), and an Ethereum wallet `address` to proceed. If you haven’t yet created a `non-custodial wallet`, please [take this lesson first](https://app.banklessacademy.com/lessons/wallet-basics)!\n>\n> After you have a non-custodial Ethereum wallet address, you’ll be ready to continue on your crypto journey.\n\n## Funding From CEXs\n\nFunding your wallet directly from a centralized exchange (CEX) is perhaps the simplest way to move digital assets to an L2, particularly if you already hold cryptocurrency on the exchange. Most major CEXs offer users this option, although it isn’t always clear to the user.\n\nOn [Coinbase](https://www.coinbase.com/), for example, users can send their funds directly to Optimism or Polygon in just a few steps:\n\n1\. Go to [Coinbase](https://www.coinbase.com/).\n\n2\. [Purchase](https://help.coinbase.com/en/coinbase/trading-and-funding/buying-selling-or-converting-crypto/how-do-i-buy-digital-currency) or hold ETH on Coinbase.\n\n3\. Select ‘Send & Receive’, located at the top of the website.\n\n![](/images/funding-a-wallet-on-layer-2/image-06c6d84b.png)\n\n4\. Enter the amount in fiat or ETH you wish to send (you can toggle between fiat and crypto to the right of the amount), select ‘Pay with’ and choose Ethereum, and in the ‘To’ field, enter the wallet address where the funds will be sent. Select ‘Continue’.\n\n![](/images/funding-a-wallet-on-layer-2/image-11e1d7f9.png)\n\n5\. On the next screen, select ‘Network’ and change the network from Ethereum to Optimism.\n\n![](/images/funding-a-wallet-on-layer-2/image-c8d4dd72.png)\n\n6\. Review, and if accurate, select ‘Send Now’.\n\n![](/images/funding-a-wallet-on-layer-2/image-9598ee73.png)\n\nMost major exchanges offer users the ability to send their crypto directly to an L2. [Binance](https://www.binance.com/) supports Optimism and Arbitrum, for example. On whatever centralized exchange you convert fiat to crypto, check to see whether it offers support for direct-to-L2 services. Pro Tip: Use [Blockscan](https://blockscan.com/exchanges) to find the exchange compatible with your preferred L2.\n\n## Third-Party Onramps\n\nAnother simple way to fund your L2 wallet is to take advantage of direct-to-L2 services offered by many third-party crypto payment companies. [MoonPay](https://www.moonpay.com/), [Ramp](https://ramp.network/buy/), and [Transak](https://global.transak.com/) are three of the most popular options to fund crypto wallets without having to use a centralized exchange.\n\nLike most exchanges, these third-party onramps will require you to provide Know-Your-Customer information. However, once you get past those basic hurdles, these payment options are an easy way to buy crypto across the ecosystem and transfer it to Layer 2.\n\nFor MoonPay, the steps are:\n\n1\. Go to [MoonPay](https://www.moonpay.com/).\n\n2\. Select ‘Buy crypto’, located at the top or middle of the website.\n\n![](/images/funding-a-wallet-on-layer-2/image-4f0d6a11.png)\n\n3\. Enter the amount of fiat you wish to send and the proper denomination.\n\n![](/images/funding-a-wallet-on-layer-2/image-386958ca.png)\n\n4\. Select a digital asset, in this case ETH. Type in “ETH\'“ and you will see different networks on which you can purchase ETH (you may need to scroll down); choose the Layer 2 you want to use. Click ‘Continue’.\n\n![](/images/funding-a-wallet-on-layer-2/image-fe6487dc.png)\n\n5\. Next, you will be prompted to enter personal verification and payment data.\n\n6\. Once complete, enter your Ethereum wallet address. You’ll be asked to make sure the wallet is safe to use.\n\n![](/images/funding-a-wallet-on-layer-2/image-138ee98b.png)\n\n7\. Complete, confirm the information is correct, and select ‘Pay’.\n\n![](/images/funding-a-wallet-on-layer-2/image-99952ff9.png)\n\nAs with CEXs, most major third-party payment onramps provide direct-to-L2 functionality. Take advantage of these innovations to save on transaction fees and increase the range of your `blockchain` explorations.\n\n## Funding Via Bridges\n\nIf you already have funds on Ethereum Mainnet, by far the easiest way to get your crypto on to L2 is to use a bridging protocol. Bridges are the name we’ve given to protocols designed to help us move our funds around the cryptoverse, and there are a number of bridges designed to move crypto from Ethereum Mainnet to Layer 2s.\n\n### Native Bridges\n\nNative bridges are those designed by the Layer 2 protocols themselves. For true Layer 2 scaling solutions like Arbitrum and Optimism, it takes about 30 minutes to move funds onto L2, but one week to move that crypto back over to Mainnet. The [Arbitrum Bridge](https://bridge.arbitrum.io/) and the [Optimism Bridge](https://app.optimism.io/bridge/) both take longer to transfer assets and settle transactions because of the way the scaling solution is designed.\n\n### Third-Party Bridges\n\nBecause no one likes to wait, a number of third-party bridging services exist to help us move our funds instantly to and from L2s. Among the most popular options are [Hop Protocol](https://app.hop.exchange/) and [Across Protocol](https://across.to/bridge), but you can use [Bungee](https://bungee.exchange/) to compare bridging fees across a number of protocols. To use Across, for example, all you need to do is:\n\n1\. Go to the [Across Protocol](https://across.to/bridge) bridge and connect your wallet.\n\n2\. To bridge funds to L2, select Ethereum under ‘From’.\n\n![](/images/funding-a-wallet-on-layer-2/image-0f4e1bde.png)\n\n3\. Choose your asset and the amount you wish to bridge (Pro Tip: only bridge a blockchain’s native `coin`, in this case ETH).\n\n![](/images/funding-a-wallet-on-layer-2/image-659f509f.png)\n\n4\. Next, select your L2 solution in ‘To’.\n\n![](https://mirror.xyz/\_next/image?url=https%3A%2F%2Fimages.mirror-media.xyz%2Fpublication-images%2FMnz8fWPFIGGQp25RA6FKt.png&w=3840&q=90)\n\n5\. Review the transaction, and if all looks correct, select ‘Send’.\n\n![](/images/funding-a-wallet-on-layer-2/image-8d84ca0b.png)\n\nMoving funds from Mainnet to L2 is really that simple, and nearly all bridges work the same way. Select a blockchain to send funds from and your destination, pick an asset and amount, and across the blockchain crevice you go. Pro Tip: As with sending from a CEX, you can use [Blockscan](https://blockscan.com/bridges) to find a compatible bridge for your L2 destination.\n\n## The Road to L2\n\nLayer 2s offer users of all experience levels the opportunity to experiment with decentralized finance in a way that is often prohibitive on Mainnet. Because it costs mere pennies to transact on these networks (you can compare costs [here](https://l2fees.info/)), it’s a great place to become familiar with the basic building blocks of decentralized finance, such as swaps, `liquidity pools`, or yield farms.\n\nUsing a CEX or a bridge to move funds to L2 is a necessary step in your journey from crypto novice to crypto competency. Remember, to see your funds displayed in your wallet, you may need to add the network in your wallet settings, which can be done at [Chainlist](https://chainlist.org/). If you just want to check that the funds made it safely to your L2 wallet, you can also check Etherscan (click on the ‘b’ for ‘Blockscan’ to the right of your wallet address to see L2 transactions) or go to a DEX, like [Uniswap](https://app.uniswap.org/), and select the L2 network and the asset to see your balance.\n\nAs you scale up your skills, you’ll need to figure out how to scale down your transaction fees. Learning how to fund an L2 wallet is the first step, but the next steps on your crypto journey are up to you. Welcome, explorer, a new world awaits.\n\n\n---\n\nLet’s get moving, Layer 2 Ethereum awaits! We hope you’ve enjoyed this entry in the Explorer’s Handbook: ‘Funding a Wallet on Layer 2’.\n\nDon’t forget to collect this entry if you want to own a copy for easy reference on your travels, or to support future content at Bankless Academy. Safe travels, Explorer!\n\n\n***\n\n**Author**\n\n**[Hiro Kennelly](https://twitter.com/HiroKennelly)** is a writer, editor, and coordinator at BanklessDAO and the Editor-in-Chief at Good Morning News. He is also helping to build a grants-focused organization at DAOpunks.\n\n**Editor**\n\n**[Trewkat](https://twitter.com/trewkat)** is a writer and editor at BanklessDAO. She’s interested in learning as much as possible about crypto and NFTs, with a particular focus on how best to communicate this knowledge to others.\n\n**Patron**\n\nThis article was funded by **[Optimism](https://www.optimism.io/)**.',
    imageLinks: [
      '/images/funding-a-wallet-on-layer-2/image-06c6d84b.png',
      '/images/funding-a-wallet-on-layer-2/image-11e1d7f9.png',
      '/images/funding-a-wallet-on-layer-2/image-c8d4dd72.png',
      '/images/funding-a-wallet-on-layer-2/image-9598ee73.png',
      '/images/funding-a-wallet-on-layer-2/image-4f0d6a11.png',
      '/images/funding-a-wallet-on-layer-2/image-386958ca.png',
      '/images/funding-a-wallet-on-layer-2/image-fe6487dc.png',
      '/images/funding-a-wallet-on-layer-2/image-138ee98b.png',
      '/images/funding-a-wallet-on-layer-2/image-99952ff9.png',
      '/images/funding-a-wallet-on-layer-2/image-0f4e1bde.png',
      '/images/funding-a-wallet-on-layer-2/image-659f509f.png',
      '/images/funding-a-wallet-on-layer-2/image-8d84ca0b.png'
    ]
  },
  {
    badgeImageLink: '/images/intro-to-defi/badge-b4dab2d4.png',
    lessonImageLink: '/images/intro-to-defi/lesson-97291c9d.png',
    socialImageLink: '/images/intro-to-defi/social-ee8d95a4.jpg',
    learningActions: 'Transfer crypto into your web3 wallet in order to be ready to interact with DeFi later',
    marketingDescription: 'Move beyond centralized exchanges and start exploring the ever-expanding possibilities of decentralized finance.',
    badgeId: 2,
    duration: 10,
    learnings: '',
    difficulty: 'Easy',
    description: 'Understand the basics of decentralized finance.',
    name: 'Intro to DeFi',
    languages: [],
    quest: 'IntroToDeFi',
    publicationStatus: 'publish',
    publicationDate: '2022-02-11',
    featuredOrderOnHomepage: null,
    isCommentsEnabled: false,
    endOfLessonRedirect: null,
    notionId: 'fdbf6e4c2ad648c6b815137d0e05eb90',
    englishName: 'Intro to DeFi',
    slug: 'intro-to-defi',
    imageLinks: [
      '/images/intro-to-defi/defi-defined-46782447.svg',
      '/images/intro-to-defi/earning-yield-c5f123f8.svg',
      '/images/intro-to-defi/what-you-can-do-with-defi-9b17cf2e.svg',
      '/images/intro-to-defi/investing-d99a6d1f.svg',
      '/images/intro-to-defi/trading-8cd72977.svg',
      '/images/intro-to-defi/lending-borrowing-4fb1c7c3.svg',
      '/images/intro-to-defi/staking-b4b4319d.svg',
      '/images/intro-to-defi/defi-downsides-51dd6225.svg',
      '/images/intro-to-defi/defi-downsides-3a6ce496.svg',
      '/images/intro-to-defi/defi-downsides-83a9391f.svg'
    ],
    slides: [
      {
        type: 'LEARN',
        notionId: 'abdb330ec2194271a729128226eadb2d',
        title: 'DeFi Defined',
        content: '<div class="bloc1"><p>DeFi—short for <code>decentralized</code> finance—refers to the fast-growing ecosystem of financial products, protocols, and applications that operate on public <code>blockchain</code> networks.</p><p>DeFi is rapidly transforming the world of finance with a range of new tools for putting crypto assets to work. It offers opportunities beyond simply buying crypto on a centralized exchange. It allows anyone and everyone to build a decentralized, Bankless lifestyle.</p></div><div class="bloc2"><img src=\'/images/intro-to-defi/defi-defined-46782447.svg\'></div>'
      },
      {
        type: 'LEARN',
        notionId: '5d93d188e0274acbb22cc32e433c3b67',
        title: 'Why DeFi?',
        content: '<div class="bloc1"><p>DeFi gives anyone with an internet connection access to sophisticated financial tools: Trading, Options, Lending and Borrowing.</p><p>DeFi offers these tools to users transparently and openly. Anyone can look at the code and verify that the contract does what it says it does, unlike what banks do with your money behind closed doors.</p><p>There are no middlemen to intermediate or take a cut of your transactions.</p></div>'
      },
      {
        type: 'QUIZ',
        notionId: '920b875598a34fa59affe46e58ed4e58',
        title: 'Knowledge Check',
        quiz: {
          question: 'What does DeFi stand for? ',
          rightAnswerNumber: 2,
          answers: [
            'Derivative fiction',
            'Decentralized finance',
            'Deregulation field',
            'Degenerate fishermen'
          ],
          id: 'intro-to-defi-1'
        }
      },
      {
        type: 'LEARN',
        notionId: '772e17d6104145f7969b47fd2e132e68',
        title: 'Earning Yield',
        content: '<div class="bloc1"><p>There are a growing number of <code>DeFi</code> protocols that enable you to earn interest and other rewards by using your crypto assets. You can have access to financial products that you would typically need a bank or financial services firm to get—but without the paperwork, middleman, approval process, and other hassles of the traditional finance world.</p><p>By removing the middleman, you also remove any service fees, dues, and commissions you would typically pay in the traditional finance world. With DeFi, you get to keep all the rewards, or yield earned from your assets. This is why DeFi is popular. </p></div><div class="bloc2"><img src=\'/images/intro-to-defi/earning-yield-c5f123f8.svg\'></div>'
      },
      {
        type: 'QUIZ',
        notionId: '465a40fdbe24487695394ee1b4a4e97a',
        title: 'Knowledge Check',
        quiz: {
          question: 'How can you earn yield with crypto?',
          rightAnswerNumber: 3,
          answers: [
            '[A] Earning interest by depositing into a DeFi protocol',
            '[B] Earning rewards by depositing into a DeFi protocol',
            '[C] Both A and B',
            '[D] You can’t earn yield on crypto'
          ],
          id: 'intro-to-defi-2'
        }
      },
      {
        type: 'LEARN',
        notionId: '153a075b1a004f38a9c177486aa95395',
        title: 'What You Can Do With DeFi',
        content: '<div class="bloc1"><p><code>DeFi</code> transactions are <code>permissionless</code>. This refers to a public <code>blockchain</code> that anyone can use to buy, sell, or trade assets. No third party controls or oversees activity. These transactions are carried out by decentralized applications, known as DApps. </p><p><code>DApps</code> and DeFi platforms enable users to make more and more types of financial transactions, 24/7, all over the world. We will introduce four of the most common opportunities used to earn yield in DeFi - investing, trading, lending and borrowing, and staking.</p></div><div class="bloc2"><img src=\'/images/intro-to-defi/what-you-can-do-with-defi-9b17cf2e.svg\'></div>'
      },
      {
        type: 'QUIZ',
        notionId: '3b77e3afde594c788122db7fe4afab6e',
        title: 'Knowledge Check',
        quiz: {
          question: 'Fill in the blank: DeFi transactions are ____.',
          rightAnswerNumber: 3,
          answers: [
            'Free',
            'Controlled',
            'Permissionless',
            'Centralized'
          ],
          id: 'intro-to-defi-3'
        }
      },
      {
        type: 'LEARN',
        notionId: '555dff92a9b34743b498f8a01de6ffa4',
        title: 'Investing',
        content: '<div class="bloc1"><p>The most common <code>DeFi</code> transaction is to purchase some cryptocurrency with the expectation that it will be worth more in the future. This is known as investing.</p><p>HODL is a term used for keeping crypto assets for a long time. Depending on who you ask, the HODL meme either comes from a typo of HOLD or it stands for <strong>H</strong>old <strong>O</strong>n for <strong>D</strong>ear <strong>L</strong>ife.</p><p>DeFi allows early access to coins and tokens to find and invest in, before they are listed on centralized exchanges (CEX).</p></div><div class="bloc2"><img src=\'/images/intro-to-defi/investing-d99a6d1f.svg\'></div>'
      },
      {
        type: 'QUIZ',
        notionId: '6dc82def6bab41e2b54efa5a62f941b7',
        title: 'Knowledge Check',
        quiz: {
          question: 'What does HODL mean?',
          rightAnswerNumber: 4,
          answers: [
            'It’s a misspelling of HOLD',
            'Hold On for Dear Life',
            'Keeping crypto for a long time',
            'All of the above'
          ],
          id: 'intro-to-defi-4'
        }
      },
      {
        type: 'LEARN',
        notionId: 'b1da9af463c24fd3a1fb8ce6a5b8dfaf',
        title: 'Trading',
        content: '<div class="bloc1"><p>A decentralized exchange (DEX) shows current exchange rates between different crypto tokens and coins and serves as a digital marketplace that facilitates trading one currency for another by bringing together buyers and sellers. </p><p>The parties involved in a DEX trade don’t need to know or trust each other. In fact, it may appear that you are trading with the DEX. However, in most cases, the DEX creates <code>liquidity pools</code> that facilitate the trade between two traders’ <code>wallets</code> in a <code>permissionless</code> fashion.</p></div><div class="bloc2"><img src=\'/images/intro-to-defi/trading-8cd72977.svg\'></div>'
      },
      {
        type: 'LEARN',
        notionId: '4e1e78e61bc240f0836346fcabb49f54',
        title: 'So What?',
        content: '<div class="bloc1"><p>Anyone can trade and participate in markets regardless of your net asset worth. Anyone can enter or exit a position via on-chain protocols.</p></div>'
      },
      {
        type: 'QUIZ',
        notionId: '1d627556f09143b18edefdf87e059db6',
        title: 'Knowledge Check',
        quiz: {
          question: 'What is a DEX?',
          rightAnswerNumber: 1,
          answers: [
            'A decentralized exchange',
            'A digital electric xylophone',
            'A crypto index fund',
            'None of the above'
          ],
          id: 'intro-to-defi-5'
        }
      },
      {
        type: 'LEARN',
        notionId: '929543eaa9b64ab9b14a6593e95fb9ef',
        title: 'Lending & Borrowing',
        content: '<div class="bloc1"><p>DeFi lending and borrowing offers loans without the need for a bank or intermediary institution. Instead, lending is done on a <code>peer-to-peer</code> level. That means transactions are between two parties and does not require a middleman or controlling entity.</p><p>There are <code>DApps</code> that enable anyone to lend and borrow crypto assets. Similar to traditional loans, a lender will earn interest on the loan and the borrower will need to pay the principal of the loan plus interest.</p></div><div class="bloc2"><img src=\'/images/intro-to-defi/lending-borrowing-4fb1c7c3.svg\'></div>'
      },
      {
        type: 'QUIZ',
        notionId: '062707cc00eb4fe9830d8f6535e50387',
        title: 'Knowledge Check',
        quiz: {
          question: 'Fill in the blank: DeFi lending is done on a _____ level.',
          rightAnswerNumber: 2,
          answers: [
            'income to debt',
            'peer-to-peer',
            'banks to customers',
            'income to interest'
          ],
          id: 'intro-to-defi-6'
        }
      },
      {
        type: 'LEARN',
        notionId: '88ac3e93d3c849db8420b1700884030c',
        title: 'Staking',
        content: '<div class="bloc1"><p>DeFi staking is similar to lending, however it\'s a special type of lending. Instead of lending your crypto to another user on a <code>peer-to-peer</code> basis, you lend your crypto to a network or protocol. In exchange for helping secure the network or protocol, you earn rewards.</p><p>Centralized exchanges also offer staking. However, like their trading pairs, the staking opportunities and rewards are limited. With DeFi, there are many more staking possibilities than there are with centralized exchanges. </p></div><div class="bloc2"><img src=\'/images/intro-to-defi/staking-b4b4319d.svg\'></div>'
      },
      {
        type: 'QUIZ',
        notionId: 'ae7f5581ae404a1a83e1542eeee9d945',
        title: 'Knowledge Check',
        quiz: {
          question: 'Lending your crypto to a protocol is an example of?',
          rightAnswerNumber: 2,
          answers: [
            'Trading',
            'Staking',
            'Borrowing',
            'HODLing'
          ],
          id: 'intro-to-defi-7'
        }
      },
      {
        type: 'LEARN',
        notionId: '9b122d2d398a47428a41838e3bc9a521',
        title: 'DeFi Downsides',
        content: '<div class="bloc-ab"><div class="bloc-a"><img src=\'/images/intro-to-defi/defi-downsides-51dd6225.svg\'></div><div class="bloc-b"><p><strong>Hackers</strong></p><p>Where there is money and technology, there are people looking for ways to hack the system and take advantage of poor security measures.</p></div></div><div class="bloc-ab"><div class="bloc-a"><img src=\'/images/intro-to-defi/defi-downsides-3a6ce496.svg\'></div><div class="bloc-b"><p><strong>Risk</strong></p><p>DeFi, like blockchain technology, runs on code. If there’s an error or loophole in the code, it can be exploited.</p></div></div><div class="bloc-ab"><div class="bloc-a"><img src=\'/images/intro-to-defi/defi-downsides-83a9391f.svg\'></div><div class="bloc-b"><p><strong>No recourse</strong></p><p>Being decentralized also means there are no companies or government agencies that you can appeal to for help if something goes wrong.</p></div></div>'
      },
      {
        type: 'QUIZ',
        notionId: '4b5bd41ee29942ea8cfc577f2e495baa',
        title: 'Knowledge Check',
        quiz: {
          question: 'What is a risk in DeFi?',
          rightAnswerNumber: 4,
          answers: [
            'There are no risks',
            'The bank might turn down your loan',
            'Bad weather could shut down the exchange',
            'There may be an error in the code'
          ],
          id: 'intro-to-defi-8'
        }
      },
      {
        type: 'QUEST',
        title: 'Intro to DeFi Quest',
        component: 'IntroToDeFi'
      }
    ]
  },
  {
    badgeImageLink: null,
    lessonImageLink: '/images/understanding-stablecoins/lesson-2aaa40f9.png',
    socialImageLink: '/images/understanding-stablecoins/social-f6aca8f1.png',
    learningActions: '',
    marketingDescription: 'Use dollars, euros, and more on the blockchain.',
    badgeId: null,
    collectibleId: 'H003',
    duration: 5,
    learnings: '',
    description: 'Use dollars, euros, and more on the blockchain.',
    name: 'Understanding Stablecoins',
    languages: [],
    lessonWriters: 'Tetranome',
    publicationStatus: 'publish',
    publicationDate: '2023-08-16',
    featuredOrderOnHomepage: null,
    isCommentsEnabled: false,
    endOfLessonRedirect: null,
    mirrorLink: 'https://mirror.xyz/banklessacademy.eth/qc15y-_wur6as8ZRuPOwzpuvZ7NNV7EF2cI3Yb6Jy1w',
    mirrorNFTAddress: '0x58da595fec45ca61cc68883869885e378caf0231',
    areMirrorNFTAllCollected: false,
    isArticle: true,
    notionId: '80271dde47144db0b587c9ce7f867cd7',
    englishName: 'Understanding Stablecoins',
    slug: 'understanding-stablecoins',
    articleContent: '## Key Takeaways\n\n> * Stablecoins are the blockchain equivalent of fiat currency, like the dollar or euro.\n>\n> * Stablecoins are `ERC-20` tokens: they allow DeFi users to quickly move between fiat value, and crypto value, while staying on the blockchain.\n>\n> * There are several categories of stablecoin, each with their own trade-offs and risk profile.\n>\n> * Stablecoins can generate more annual interest than holding fiat in a traditional bank.\n\n## Why Hold Stablecoins?\n\nStablecoins have become a cornerstone of the DeFi ecosystem, reaching over $140 billion USD in supply value at their 2022 peak. Stablecoins settled over $7 trillion in transaction value that year — that’s \~0.3% of global USD settlement in 2022.\n\n![](/images/understanding-stablecoins/image-0c080b13.png)\n\nHere’s why they’re in demand:\n\n* **Stability:** Holding stablecoins in your self-custody wallet is like holding fiat currency, but on the blockchain. When holding a stablecoin like Circle’s U.S. dollar (USDC), you can expect it to maintain 1:1 value with the U.S. dollar while the prices of assets like ether and bitcoin fluctuate.\n\n* **Flexibility:** Because this pegged value exists as an ERC-20 token on the blockchain, it’s easy to move between fiat value and crypto value.\n\n* **Access:** Stablecoins provide access to a range of decentralized financial services, like permissionless borrowing or lending to earn interest.\n\n* **Security:** Cryptography makes it extremely difficult for attackers to capture or forge transactions.\n\nThe way a stablecoin maintains a 1:1 equivalence, or `peg`, to its fiat counterpart is its most important property. Just as fiat currency is only worth the fundamentals that underlie it, a stablecoin peg mechanism dictates the value of your holdings.\n\n## Stablecoin Categories\n\nThere are three common strategies for a stablecoin to maintain its price peg:\n\n* 💵 **Fiat-backed:** 1:1 collateralized by real-world fiat reserves.\n\n* 🔗 **Crypto-collateralized:** overcollateralized by crypto deposits into DeFi protocols.\n\n* 🔃 **Algorithmic:** fixed supply/demand algorithms that maintain price stability.\n\n### 1\. Fiat-backed Stablecoins\n\nFiat-backed stablecoins maintain value by issuing a fixed token supply matched by real-world currency reserves. Their on-chain price is maintained via supply/demand economics: few people want to pay more than one real-world dollar for a dollar of on-chain value, so they simply take their trade elsewhere. To meet increased demand, the stablecoin issuer locks up additional fiat and increases the token supply by the same amount.\n\nNotable fiat-backed stablecoins include Tether (USDT) and Circle (USDC).\n\nConsiderations:\n\n* **Collateral Audits:** Holders need assurance that their stablecoin tokens are matched one-to-one by fiat reserves. Ideally the provider is open to regular audits by independent parties. USDT has historically made it difficult to know the total value of their locked assets. USDC regularly undergoes independent audits, increasing certainty that their reserves equal their token issuance.\n\n* **Censorship Risk:** With both USDC and USDT subject to government investigation, these tokens’ `smart contracts` include a freeze function whereby a user’s on-chain holdings can be locked in cases of disagreeable activity. This freeze function also applies to tokens held in `non-custodial wallets`.\n\nThe high degree of centralization in the fiat-backed stablecoin sector leaves great room for improvement in holding fiat-pegged value in a crypto-native way.\n\n### 2\. Crypto-collateralized Stablecoins\n\nCrypto-collateralized stablecoins are a more transparent, decentralized option — and these qualities help eliminate certain risks. They maintain a fiat peg through crypto asset reserves. As crypto market volatility influences the total value of these reserves, these stablecoins are overcollateralized — sometimes up to 200%! All collateralized assets are viewable on chain, giving users 24/7 access to the real composition of their stablecoins.\n\nThe most notable example in this category is MakerDAO’s Dai (DAI).\n\n![DAI collateralization breakdown (June 2023) Source: https://makerburn.com/#/rundown](/images/understanding-stablecoins/image-573e657a.png)\n\nConsiderations:\n\n* **Collateral Valuation:** A stablecoin’s reserves typically consist of crypto, other stablecoins, and even other asset classes. For example, DAI is backed by BTC, ETH, stablecoins, real world assets, and several other minor components. To mitigate the risks of this diverse range of assets, DAI is overcollateralized (at the time of writing). Even if the ETH price was to crash by 20%, DAI would still have [enough collateral](https://daistats.com/) to cover their token. However, further price volatility across its range of assets could begin to erode the peg.\n\n* `Counterparty Risk`: Reliance on multiple asset classes means there’s a higher chance one of the assets will experience difficulty and affect the value of your holdings. However, you only have fractional exposure to the impact of each individual risk.\n\n* **Governance Risk:** This type of stablecoin and its treasury are managed by a decentralized group of governance voters. This means there are risks of human error, or possible governance capture.\n\n### 3\. Algorithmic Stablecoins\n\nThese tokens maintain their peg by automatically balancing their own supply. An onchain algorithm reduces the number of tokens in circulation when the market price falls below the peg, and injects new tokens when the market price surpasses the peg. Both the balancing algorithm and the stablecoin\'s smart contracts are public, meaning anyone can clone and improve, or audit the existing system.\n\nAs algorithmic stablecoins have the fewest external dependencies, and no administration or governance demands, they almost entirely eliminate counterparty risk. This makes them the most decentralized and self-custody-ready stablecoin option.\n\nNotable examples include Liquity (LUSD) and Frax (FRAX).\n\n![](/images/understanding-stablecoins/image-4f6e4c7f.png)\n\nConsiderations:\n\n* **Dynamic Holdings:** With the balancing algorithm adjusting token supply, your number of tokens held will fluctuate with supply adjustments. The total value of your token holdings remains constant — you aren’t losing or gaining any value — but this aspect can be confusing for new users.\n\n* **Highly Technical:** You need to understand the technology to build confidence and risk/reward awareness.\n\n* **Emergent Tech Risk:** With algorithmic stablecoins being so new, unknown smart contract risks could be present. Only use algorithmic stablecoins with several smart contract audits, performed by top-level auditors.\n\n## Choosing a Stablecoin\n\nWhat is the best stablecoin to hold? As with everything DeFi, the answer to that question depends on your **needs**, **values**, and **risk tolerance**.\n\nHere’s a quick refresher on each category:\n\n* 💵 **Fiat-backed:** The traditional approach — the closest you’ll come to holding fiat on chain.\n\n  * Values: Conventionality, institutional trust.\n\n  * Risks: Opaque collateral backing, ability for provider to freeze funds.\n\n* 🔗 **Crypto-collateralized:** A balanced, crypto-native approach, spreading collateral risk across multiple asset classes.\n\n  * Values: Diversification, transparency, progression.\n\n  * Risks: Crypto market volatility, dependence on other assets.\n\n* 🔃 **Algorithmic:** The decentralized — but experimental — option that minimizes counterparty risk.\n\n  * Values: Self-sovereignty, transparency, progression.\n\n  * Higher risk of smart contract bugs.\n\nAs always, the best way to learn about something is to try it. You might even decide to hold a variety of stablecoins.\n\nAnd remember, not all stablecoins in each category are created equal! Do your own research before interacting with any new token.\n\n\n---\n\nWe hope you’ve enjoyed this entry in the Explorer’s Handbook: ‘The Stablecoin Guide’.\n\nDon’t forget to collect this entry if you want to own a copy for easy reference on your travels, or to support future content at Bankless Academy. Safe travels, Explorer!\n\n\n---\n\n## Frequently Asked Questions\n\n### What are the most popular stablecoins?\n\nLooking at the leading stablecoins by `market cap` gives an idea of the current market preference, but this isn’t guidance on how you should position yourself, or how safe that position would be.\n\nHere’s a realtime list of top stablecoins by market cap: <https://defillama.com/stablecoins>\n\nCryptocurrency users often refer to the ‘Lindy Effect’ when choosing investment options. This concept says that the longer something has existed, the more we can expect it will continue to exist. Ten years of cryptocurrency history have shown this to only be true on occasion.\n\n### Where can I buy stablecoins?\n\nCentralized Exchanges (CEXs) offer popular fiat-backed stablecoins (and typically their own branded stablecoin), other types of stablecoin are often missing.\n\nVisit a Decentralized Exchange (DEX), or use a direct wallet on-ramp service like ‘MetaMask Buy’, to acquire crypto-collateralized and algorithmic tokens. Check out our lesson on [Decentralized Exchanges](https://app.banklessacademy.com/lessons/decentralized-exchanges) to learn more about peer-2-peer marketplaces.\n\n### How can I earn interest on stablecoins?\n\nSome CEXs offer yield by just holding stablecoins on their platform, funded by a share of platform profits to incentivize platform use.\n\nYou can also earn interest in DeFi, with trustless lending and borrowing platforms. These platforms connect lenders and borrowers, managing risk through onchain collateral and smart contracts. Stablecoin lenders can earn annual returns far higher than available in the traditional banking sector — but where there’s reward, there’s risk!\n\nThe lending and borrowing topic deserves its own Bankless Academy entry. If you’re already interested in learning more you can research platforms like [Aave.com](https://aave.com/) and [Curve.fi](https://curve.fi/).\n\n### What happens if a stablecoin loses its peg?\n\nThe price of any stablecoin can shift slightly (usually around the +/- 2% mark) in peak network hours. This effect is usually temporary, with prices quickly stabilized by traders taking advantage of arbitrage opportunities.\n\nHowever, there are cases where a stablecoin loses its peg beyond safe, temporary ranges. This effect isn’t necessarily permanent (USDC, March 2023) — but it can be (Terra, May 2022).\n\nSome fiat-backed stablecoin issuers, like USDC, offer 1:1 redemption from their stablecoin to regular fiat through their website. Whether this remains true during times of crisis is another story.\n\n\n---\n\n**Author**\n\n**[Tetranome](https://twitter.com/tetranome)** is the Project Champion at Bankless Academy, focusing on user experience, UI, design, and platform curriculum.\n\n**Editor**\n\n**[Trewkat](https://twitter.com/trewkat)** is a writer and editor at BanklessDAO. She’s interested in learning about crypto and NFTs, with a particular focus on how best to communicate this knowledge to others.\n\n**Patron**\n\nThis unsponsored article is part of your free Bankless Academy education. Collect the article to support future content!',
    imageLinks: [
      '/images/understanding-stablecoins/image-0c080b13.png',
      '/images/understanding-stablecoins/image-573e657a.png',
      '/images/understanding-stablecoins/image-4f6e4c7f.png'
    ]
  },
  {
    badgeImageLink: '/images/decentralized-exchanges/badge-e0d343c2.png',
    lessonImageLink: '/images/decentralized-exchanges/lesson-c38f385d.png',
    socialImageLink: '/images/decentralized-exchanges/social-6f0157d2.jpg',
    learningActions: '',
    marketingDescription: 'DEXs and AMMs have changed the landscape of traditional market trading. It’s time to understand why, and how you can use this technology to your own advantage.',
    badgeId: 9,
    duration: 15,
    learnings: '',
    description: 'Discover how smart-contract exchanges enable permissionless token swaps!',
    name: 'Decentralized Exchanges',
    languages: [],
    lessonWriters: 'Tetranome',
    quest: 'DecentralizedExchanges',
    publicationStatus: 'publish',
    publicationDate: '2023-06-22',
    featuredOrderOnHomepage: null,
    isCommentsEnabled: false,
    endOfLessonRedirect: null,
    sponsorName: 'Velodrome',
    sponsorLogo: '/images/decentralized-exchanges/sponsor-1dc859d3.png',
    nftGating: 'https://opensea.io/assets/matic/0x60576a64851c5b42e8c57e3e4a5cf3cf4eeb2ed6/15463',
    nftGatingRequirements: 'Complete and claim your ‘Layer 2 Blockchains’ lesson badge first.',
    nftGatingImageLink: '/images/decentralized-exchanges/nft-266ad1d2.png',
    nftGatingLink: 'https://app.banklessacademy.com/lessons/layer-2-blockchains',
    nftGatingCTA: 'View Lesson',
    notionId: '0ff0ff5bde6c43f99f7710352069163e',
    englishName: 'Decentralized Exchanges',
    slug: 'decentralized-exchanges',
    imageLinks: [
      '/images/decentralized-exchanges/what-is-a-decentralized-exchange-8ce458f2.svg',
      '/images/decentralized-exchanges/centralized-and-decentralized-exchanges-ad25050a.svg',
      '/images/decentralized-exchanges/decentralized-applications-ee3321de.svg',
      '/images/decentralized-exchanges/decentralized-applications-continued-c1a4b467.svg',
      '/images/decentralized-exchanges/automated-market-makers-018428cb.svg',
      '/images/decentralized-exchanges/token-swaps-f1c9f932.svg',
      '/images/decentralized-exchanges/token-swaps-continued-0af4afc8.svg',
      '/images/decentralized-exchanges/what-is-liquidity-99bb4930.svg',
      '/images/decentralized-exchanges/liquidity-providers-cd2b7547.svg',
      '/images/decentralized-exchanges/dex-best-practices-4a9ebcd4.svg'
    ],
    slides: [
      {
        type: 'LEARN',
        notionId: '2b28e263cbad4a7e848d90254ff8f523',
        title: 'What is a Decentralized Exchange?',
        content: '<div class="bloc1"><p>Decentralized Exchanges (DEXs) are on-chain marketplaces that enable Explorers to securely exchange cryptocurrency with other users while maintaining self-custody of their wallet funds. These peer-to-peer trades are facilitated using publicly accessible smart contracts that connect users with large communal vaults of tokens. These vaults are called <code>liquidity pools</code>. DEXs can be found on almost any blockchain, and are present on Ethereum Layer 1 and 2.</p><p>Exchanging tokens is an essential part of using <code>DeFi</code>. In DeFi you’ll find a greater range of token variety and utility than on any other type of exchange. Some users buy tokens to access on-chain products and services. Others purchase tokens as an investment. Some tokens grant holders voting power used to determine project direction — much like holding shares in a traditional corporation! Regardless of your motivation, you’ll be visiting DEXs on a regular basis in DeFi.</p><p>Let\'s learn how they work and how they can best serve you.</p></div><div class="bloc2"><img src=\'/images/decentralized-exchanges/what-is-a-decentralized-exchange-8ce458f2.svg\'></div>'
      },
      {
        type: 'LEARN',
        notionId: 'f84de8f77ba64d95ae97b0b5bab8f65c',
        title: 'Centralized and Decentralized Exchanges',
        content: '<div class="bloc1"><p>Let’s cover the differences between the technology used for a Centralized Exchange (like Coinbase, Binance, Kraken) and that of a Decentralized Exchange (like Uniswap, PancakeSwap).</p><p>Centralized Exchanges (<code>CEXs</code>) allow users to trade and invest in cryptocurrency, without engaging in the blockchain ecosystem itself. As your account is registered on the CEX, your private keys and funds are in their custody — you are subject to their management, rules, and business model risks.</p><p>Decentralized Exchanges (<code>DEXs</code>) enable users to trade cryptocurrency entirely in self-custody — the original intended purpose of blockchains. The peer-to-peer model allows you to act as both the consumer and the provider, accessing financial opportunities previously available only to the financial class. The blockchain system is both transparent and censorship-resistant, creating equal opportunity while protecting users from hackers, the state, or any participant seeking to gain an unfair advantage.</p></div><div class="bloc2"><img src=\'/images/decentralized-exchanges/centralized-and-decentralized-exchanges-ad25050a.svg\'></div>'
      },
      {
        type: 'QUIZ',
        notionId: '884e65522a3e49b6b762409b061fe0a3',
        title: '✅ Knowledge Check',
        quiz: {
          question: 'Which of the following is true regarding cryptocurrency exchanges?',
          rightAnswerNumber: 3,
          answers: [
            'There is no team behind a DEX.',
            'The only way you can lose funds on a CEX is due to a bad trade.',
            'DEXs allow you to trade while maintaining self-custody, while CEXs do not.'
          ],
          feedback: [
            'ℹ️ DEXs still have development teams, but their influence on the project is limited.',
            'ℹ️ Even CEXs have their risks. In 2022, the FTX exchange collapsed, with almost all users losing their deposits.',
            'ℹ️ Unless explicitly stated otherwise, a CEX owns your private keys.'
          ],
          id: 'decentralized-exchanges-1'
        }
      },
      {
        type: 'LEARN',
        notionId: '26dde0f86cc6443b91e1e09d8fdda42d',
        title: 'Decentralized Applications',
        content: '<div class="bloc1"><p>DEXs are a type of <code>dApp</code> — a decentralized application running on a blockchain. For an internet application to be considered ‘decentralized’ it must indiscriminately allow anyone to use it, process their interactions without need for another person, and be written in publicly transparent code.</p><p>dApp services are facilitated using smart contracts, lines of code that take a user’s on-chain action and return a predictable on-chain response. The Ethereum Foundation compares smart contracts to vending machines, where the user inputs the number corresponding to the item they’d like to receive, plus the appropriate amount of money, and they receive an expected output (their snack) without the need for another human to facilitate the transaction.</p><p>DEX smart contracts handle a variety of commands, like token swapping, voting, or adding and removing <code>liquidity</code>.</p></div><div class="bloc2"><img src=\'/images/decentralized-exchanges/decentralized-applications-ee3321de.svg\'></div>'
      },
      {
        type: 'LEARN',
        notionId: '8e1ac68e66064904941b5475b9f5899c',
        title: 'Decentralized Applications (continued)',
        content: '<div class="bloc1"><p>DEXs follow the same logic as the vending machine: they take a user’s input token and output the desired token. Other dApp examples include:</p><p>🎟️ <strong>Voting dApps:</strong> allocating a user’s vote to a specified entity.</p><p>📦 <strong>Bridge dApps:</strong> transferring a user’s cryptocurrency from one blockchain network to another.</p><p>🤝 <strong>Lending/Borrowing dApps:</strong> granting loans to users who meet specified requirements.</p><p>Smart contracts are accounts on Ethereum — they have an address and balance, performing automated actions when prompted by a transfer and command. A DEX is a programmed Ethereum account with several available functions.</p><p><code>dApps</code> will typically use a website as a visual interface to help users interact with the underlying smart contracts. If the website is down, you can still access the smart contract with some experience!</p></div><div class="bloc2"><img src=\'/images/decentralized-exchanges/decentralized-applications-continued-c1a4b467.svg\'></div>'
      },
      {
        type: 'QUIZ',
        notionId: '67e487c5630e429f87a7c7e0367fe025',
        title: '✅ Knowledge Check',
        quiz: {
          question: 'Which of the below properties are needed for a smart contract to be considered decentralized?',
          rightAnswerNumber: 4,
          answers: [
            'Permissionless: open access to all users.',
            'Autonomous: user interactions do not need an intermediary.',
            'Transparent: the smart contract code is publicly available.',
            'All of the above.'
          ],
          feedback: [
            'ℹ️ This is a quality of a dApp, but it isn’t the only one.',
            'ℹ️ This is a quality of a dApp, but it isn’t the only one.',
            'ℹ️ This is a quality of a dApp, but it isn’t the only one.',
            'ℹ️ Ethereum dApps are respected for their capacity to be permissionless, autonomous, and transparent.'
          ],
          id: 'decentralized-exchanges-2'
        }
      },
      {
        type: 'LEARN',
        notionId: '4b647b69cd37476a9ced01d73a721e2c',
        title: 'Automated Market Makers',
        content: '<div class="bloc1"><p>In traditional markets and <code>CEXs</code>, your custodian uses an order book: a database filled with buy and sell offers. The CEX connects your trade offer with another person’s. You are usually charged a base/scaling commission on your trade, and you’re also left wondering if the undisclosed matching method found you the best possible deal.</p><p><code>DEXs</code> use ‘Automated Market Maker’ (<code>AMM</code>) technology, a matchmaking system that makes the best trade based on a public algorithm. As this algorithm is open-source, anyone can understand, clone, and improve it — leading to healthy competition, constant innovation, and better trades for everyone.</p><p>AMMs route user trades through <code>liquidity pools</code>, rather than directly matching user bids and asks. These communal token vaults accumulate and dispense tokens according to user interactions, providing a more transparent and fair trade as compared to order book technology.</p></div><div class="bloc2"><img src=\'/images/decentralized-exchanges/automated-market-makers-018428cb.svg\'></div>'
      },
      {
        type: 'QUIZ',
        notionId: '764b929ce95f44c29dc94decf5cf3492',
        title: '✅ Knowledge Check',
        quiz: {
          question: 'What is the benefit of using AMMs to complete trades as compared to a traditional order book?',
          rightAnswerNumber: 3,
          answers: [
            'The AMM trade is faster than an order book trade.',
            'AMMs connect you directly to the other user.',
            'You can detect and prevent other parties creating one-sided trades.'
          ],
          feedback: [
            'ℹ️ When we include network confirmation time, this isn’t necessarily true.',
            'ℹ️ AMMs route user trades through communal token vaults, called liquidity pools, rather than directly between users.',
            'ℹ️ The transparent nature of AMMs means that its a lot harder for platforms to hide malicious actions — or for users to be malicious at all!'
          ],
          id: 'decentralized-exchanges-3'
        }
      },
      {
        type: 'LEARN',
        notionId: '0e5bf65edb464d629a38b8c4e1cb7d83',
        title: 'Token Swaps',
        content: '<div class="bloc1"><p>Cryptocurrency trades on the blockchain are called <code>token swaps</code>. These smart contract interactions are the conversion from one cryptocurrency to another, using AMM <code>liquidity pools</code>. By forming a <code>trade route</code>, a pathway through the appropriate liquidity pools, a DEX smart contract exchanges your input token for your desired output token. As liquidity pools often consist of only two tokens, and because there aren’t always liquidity pools for every <code>token pair</code>, trade routes may run through more than one liquidity pool to fulfil your swap.</p><p>In order for a smart contract to access our wallet, we grant it permission to withdraw funds up to a specified (or unlimited) amount. These <code>token allowances</code> enable trusted smart contracts to carry out our transactions without sharing our wallet private key. Granting permissions has a gas fee, so the permission is left open for future interactions with your wallet. This is one of the reasons why it is safer to use one wallet for trading, while reserving a separate wallet for holding. We’ll monitor and revoke token allowances in future content!</p></div><div class="bloc2"><img src=\'/images/decentralized-exchanges/token-swaps-f1c9f932.svg\'></div>'
      },
      {
        type: 'LEARN',
        notionId: 'e9366611b00c4f30915c5b38007b844b',
        title: 'Token Swaps (continued)',
        content: '<div class="bloc1"><p>Let’s take a look at an example swap to understand the permission and exchange process. The example is a swap between USDC to OP on Velodrome — a large DEX on the Optimism network. This trade is often routed through two pools, as the USDC/OP <code>liquidity pool</code> isn’t as cost-efficient:</p><ol><li>First, you grant the appropriate Velodrome smart contract the permission to make USDC withdrawals from your wallet.</li><li>You submit your swap transaction request to Velodrome.</li><li>The transaction is accepted: Velodrome withdraws the specified amount of USDC from your wallet, into the USDC/ETH liquidity pool. The equivalent amount of ETH exits this first liquidity pool and is transferred to the ETH/OP liquidity pool. Lastly, OP is transferred from the second liquidity pool to your wallet address.</li></ol><p>The swap transaction is complete. Your USDC tokens have been swapped for OP, via ETH!</p></div><div class="bloc2"><img src=\'/images/decentralized-exchanges/token-swaps-continued-0af4afc8.svg\'></div>'
      },
      {
        type: 'QUIZ',
        notionId: '25fd54f0f113464393f873a43b1d6cf5',
        title: '✅ Knowledge Check',
        quiz: {
          question: 'AMMs can route a trade through multiple liquidity pools, all in a single transaction.',
          rightAnswerNumber: 1,
          answers: [
            'True',
            'False'
          ],
          feedback: [
            'ℹ️ Correct! You might pay a higher network fee, but the actions are bundled into one transaction.',
            'ℹ️ Incorrect, check the previous slide to understand why.'
          ],
          id: 'decentralized-exchanges-4'
        }
      },
      {
        type: 'LEARN',
        notionId: 'fc6312a87afe4437aeb06f7ccf56010a',
        title: 'What is Liquidity?',
        content: '<div class="bloc1"><p>Liquidity in the crypto space refers to a marketplace’s ability to facilitate digital asset buys and sells at fair prices. When liquidity is high, prices are more stable; when liquidity is low, prices are more volatile. As users are generally attracted to fairer prices, <code>DEXs</code> aim to have high liquidity across all of their liquidity pools.</p><p>High liquidity means there is a high quantity of tokens in the liquidity pool — generally a 50/50 valuation split of the two tokens users are trading in and out of the pool. For example, a USDC/ETH pool facilitates all trades between this <code>token pair</code> on the host platform.<br>When there are more tokens, users making trades through the pool have less impact on the 50/50 asset balance, which helps prices remain stable. The amount by which any trade throws off this balance is known as <code>price impact</code>.</p><p>As an Explorer, you want the lowest price impact on your trades as possible, in order to receive the best deal! That means you want high, balanced liquidity.</p></div><div class="bloc2"><img src=\'/images/decentralized-exchanges/what-is-liquidity-99bb4930.svg\'></div>'
      },
      {
        type: 'LEARN',
        notionId: '704eb8d4d1ae47008a944f3edfb7ba54',
        title: 'Liquidity Providers',
        content: '<div class="bloc1"><p>Optimizing for high <code>liquidity</code> is integral to the success of a DEX — but because there’s only so much liquidity in the cryptocurrency ecosystem, each DEX is in competition to capture as much liquidity as possible. So where does this liquidity come from?</p><p>In a decentralized ecosystem, DeFi citizens are incentivized to provide liquidity to a given pool to raise the TVL (total value locked) on a platform. Fees gathered from users making trades through the pool are distributed to the LPs (liquidity providers) based on the amount of liquidity provided. You heard that right: by lending your tokens to a DEX liquidity pool, you can generate passive income.</p><p>There are a variety of considerations when becoming an <code>LP</code>, and we’ll cover this in future content. For now, know that the large APRs (annual percentage rates) displayed across DEX liquidity pools aren’t guaranteed, and there can be losses.</p></div><div class="bloc2"><img src=\'/images/decentralized-exchanges/liquidity-providers-cd2b7547.svg\'></div>'
      },
      {
        type: 'QUIZ',
        notionId: '673b5a7b0f3448a0b0e0ae8db5b91956',
        title: '✅ Knowledge Check',
        quiz: {
          question: 'Finish the statement: “When liquidity is __________.”',
          rightAnswerNumber: 3,
          answers: [
            'high, volatility is high.',
            'low, volatility is low.',
            'low, volatility is high.'
          ],
          feedback: [
            'ℹ️ Incorrect, try again.',
            'ℹ️ Incorrect, try again.',
            'ℹ️ Right! Liquidity and volatility are generally inversely-correlated.'
          ],
          id: 'decentralized-exchanges-5'
        }
      },
      {
        type: 'QUIZ',
        notionId: 'ad1cd32bec194feba4d8ceaed89e3a6b',
        title: '✅ Knowledge Check',
        quiz: {
          question: 'How do DEXs incentivize users to provide liquidity?',
          rightAnswerNumber: 2,
          answers: [
            'Insurance for trade losses.',
            'A share of platform fees and/or bonus tokens.',
            'Access to private liquidity pools.',
            'All of the above.'
          ],
          feedback: [
            'ℹ️ Neither CEXs or DEXs protect you from losses on a bad investment.',
            'ℹ️ The fees charged to use the DEX are often split across various platform stakeholders — including LPs. Some platforms even grant additional bonuses.',
            'ℹ️ There are no private liquidity pools, low traffic would likely not provide adequate returns.',
            'ℹ️ There’s only one correct answer here, can you figure out which one it is?'
          ],
          id: 'decentralized-exchanges-6'
        }
      },
      {
        type: 'LEARN',
        notionId: '9cda0f8b0fac4fb98b5bebf8c0a46420',
        title: 'Platform Fees',
        content: '<div class="bloc1"><p>Both CEXs and DEXs usually charge fees for the services they provide. While the automation of DEX and AMM technology has reduced the cost for exchanging cryptocurrency, interacting with the blockchain is not free of charge. Let’s take a look at five common costs to consider when deciding which platform to use.</p><p>🏷️ <strong>Platform fees:</strong> Approximately 0.5% commission on each trade for most CEXs, and 0.05% for most DEXs. These can fluctuate.</p><p>🌐 <strong>Network fees:</strong> Blockchains charge gas fees on top of the dApp transaction. You can minimize these costs by using the network during low periods of activity. Etherscan.io has a real-time estimate tool for various Ethereum Mainnet actions here: <a href=\'https://etherscan.io/gastracker\'>Etherscan.io</a> (for DEXs, refer to the ‘Swap’ action). On Layer 2s, fees are far cheaper: <a href=\'https://l2fees.info/\'>l2fees.info</a></p><p>📦 <strong>Bridge fees:</strong> Both CEXs and the blockchain will charge a flat rate for transferring cryptocurrency from one blockchain network to another. For CEXs, refer to their on-site information. For the blockchain, check out the ‘Deposit’ action on <a href=\'https://etherscan.io/gastracker\'>Etherscan.io</a>.</p><p>💹 <strong>Exchange rates:</strong> When buying cryptocurrency directly with fiat on a CEX or DEX, be wary of exchange rates that don’t reflect the market rate.</p><p>🧊 <strong>Slippage:</strong> As prices change so quickly in this space, DEXs leave room for fluctuations on a swap — this is called <code>slippage</code>. This percentage value is customizable, with most dApps recommending 0.5-2%. You may lose up to the slippage value on a trade to have it executed, but if your slippage range is too low the trade might be rejected.</p><p>As you can see, there are many factors to consider when comparing exchange fees. It’s always best to do your own research before making a trade to make sure the platform\'s advantages and disadvantages are understood.</p></div>'
      },
      {
        type: 'LEARN',
        notionId: 'b6998b02735c41e69527772a6f044b69',
        title: 'DEX Advantages',
        content: '<div class="bloc1"><p>We’ve covered a lot of theory in this lesson, but you might still be wondering if DEXs are for you. Generally speaking, you are probably going to benefit from Decentralized Exchanges if:</p><ul><li>🔑 You want to retain custody over your digital assets.</li><li>🔒 You want to secure your assets on the blockchain, avoiding CEX collapses.</li><li>⌛ You want 24/7 access to the cryptocurrency market.</li><li>👛 You want access to a wider range of cryptocurrencies.</li><li>🤑 You are interested in providing liquidity.</li><li>🛂 You don’t want to register and <code>KYC</code> on every platform you interact with.</li><li>⚔️ You seek the additional risks and rewards of exploring Decentralized Finance.</li></ul><p>With that said, almost every DeFi user has an account on a Centralized Exchange. This is because CEXs have easy on/off ramp features to the traditional banking world; you can easily get money from your bank account onto the blockchain and vice-versa. <a href=\'https://twitter.com/RyanSAdams\'>Ryan Sean Adams</a> compares this to using a public bathroom: <em>“You go in, you do your business, you get out.”</em></p><p>This is great because it means you can start with a CEX account and slowly transition to DeFi as you become more confident in navigation.</p></div>'
      },
      {
        type: 'LEARN',
        notionId: 'fc884de5c7a9449bba95d6fdec8b87ca',
        title: 'DEX Risks',
        content: '<div class="bloc1"><p>Using a DEX also comes with risk. Here are a few of the most impactful:</p><p>🐞 <strong>Smart contract risk: </strong>While audits reduce the chances of smart contract bugs, they still exist. In a rare, worst-case scenario, you could lose up to your trade amount to a bug. Only interact with trusted, heavily audited smart contracts.</p><p>💰 <strong>Self-custody risk:</strong> Sole responsibility for your private keys means you could lose an entire wallet to theft, scams, or a misplaced seed phrase. This is why it is important to mitigate risk with a multi-wallet strategy, and to always keep a copy of your seed phrases backed up in a secure, real-world location.</p><p>🥪 <strong>Sandwich attacks: </strong>Setting your swap slippage high increases the likelihood of trade frontrunners coordinating <code>sandwich attacks</code> against you. In a sandwich attack, you could lose up to your slippage amount on a trade. We’ll cover how to protect yourself from this style of attack in future content.</p><p>With these advantages and risks considered, a CEX might be a better fit for you if:</p><ul><li>🎓 You’re still early in your cryptocurrency journey, working to understand the risks and rewards.</li><li>⚖️ Your trade frequency and volume are small, making blockchain fees an unrealistic cost.</li><li>🏰 You’d prefer to trust an exchange to watch your funds, rather than being responsible for them.</li></ul><p>Some users take a hybrid approach to lower their overall risk, using a CEX to buy and sell their cryptocurrency, while storing it on the blockchain itself.</p></div>'
      },
      {
        type: 'QUIZ',
        notionId: '7823339d33a34081aaf96d345196bc01',
        title: '✅ Knowledge Check',
        quiz: {
          question: 'Why would you use a Decentralized Exchange over a Centralized Exchange?',
          rightAnswerNumber: 4,
          answers: [
            'You want to access tokens not listed on a Centralized Exchange.',
            'You want to retain full custody over the exchanged funds.',
            'You’d like to access tools and opportunities not traditionally available to you.',
            'All of the above.'
          ],
          feedback: [
            'ℹ️ This is a quality of a DEX, but it isn’t the only one.',
            'ℹ️ This is a quality of a DEX, but it isn’t the only one.',
            'ℹ️ This is a quality of a DEX, but it isn’t the only one.',
            'ℹ️ Right! DEXs offer all of these benefits over CEXs.'
          ],
          id: 'decentralized-exchanges-7'
        }
      },
      {
        type: 'LEARN',
        notionId: '92dc36b6f9fc46a3a3a44dc12e24d242',
        title: 'Choosing a DEX',
        content: '<div class="bloc1"><p>There are many Decentralized Exchanges in DeFi, and some are better than others. Consider these five key factors when deciding on which DEX to use:</p><p>🥇 <strong>Legitimacy:</strong> Is the entity well known for its trustworthiness, quality, and longevity?</p><p>⛲ <strong>Liquidity:</strong> Is the liquidity pool <code>TVL</code> high enough to minimize price impact?</p><p>🖱️ <strong>Ease of use:</strong> Is the user interface easy to interact with?</p><p>🔐 <strong>Security:</strong> Have the smart contracts been audited by multiple auditors?</p><p>🎁 <strong>Rewards and Features:</strong> Are there loyalty rewards for using the exchange or providing liquidity? Can you vote in governance?</p><p>Notable names that score highly in these areas include Uniswap, Curve, Velodrome, and Balancer. You can easily move from one DEX to another until you find a few favorites! For the lesson quest, we’re going to use Velodrome — the number one DEX by TVL on Optimism. It’s well known, easy to use, has the deepest liquidity on the network, and because it’s on L2 the fees are far more reasonable!</p></div>'
      },
      {
        type: 'LEARN',
        notionId: '220fd799170c4f67935f5253a8443ed5',
        title: 'DEX Best Practices',
        content: '<div class="bloc1"><p>Before you interact with a dApp, there are some best practices you should follow to keep your funds safe:</p><p>👩‍💻 Always verify the link to a dApp by checking the official project Twitter (gold check mark) or a trusted third party, and bookmark it once you’ve validated it. A variety of DeFi scams begin with a fake link — even on popular search engines.</p><p>🔓 When prompted to grant on-chain <code>token allowances</code> to a smart contract, limit the allowance to your trade amount to prevent future access to your funds.</p><p>♟️ Don’t interact with dApps via your HODL wallet. It’s better to use a separate wallet just for dApps in case anything goes wrong. Check out our <a href=\'https://app.banklessacademy.com/lessons/web3-security\'>Web3 Security lesson</a> for more information on wallet strategies, and how to stay safe in web3.</p><p>Now you’re ready to interact with a Decentralized Exchange!</p></div><div class="bloc2"><img src=\'/images/decentralized-exchanges/dex-best-practices-4a9ebcd4.svg\'></div>'
      },
      {
        type: 'QUIZ',
        notionId: '395bb0ab09724e97a379e95ffce1313b',
        title: '✅ Knowledge Check',
        quiz: {
          question: 'How can you be sure you’ve chosen a reputable DEX?',
          rightAnswerNumber: 1,
          answers: [
            'By independently checking its online reputation and only following URLs provided by a trusted party.',
            'By performing a small test interaction when using the platform for the first time.',
            'Both of the above.'
          ],
          feedback: [
            'ℹ️ Right, only interacting with trustworthy URLs is a good layer of protection.',
            'ℹ️ A single interaction with a bad smart contract can drain your entire wallet.',
            'ℹ️ Incorrect. A single interaction with a bad smart contract can drain your entire wallet.'
          ],
          id: 'decentralized-exchanges-8'
        }
      },
      {
        type: 'QUEST',
        title: 'Decentralized Exchanges Quest',
        component: 'DecentralizedExchanges'
      }
    ]
  },
  {
    badgeImageLink: null,
    lessonImageLink: '/images/swapping-on-a-decentralized-exchange/lesson-8afa4858.png',
    socialImageLink: '/images/swapping-on-a-decentralized-exchange/social-a88087fb.png',
    learningActions: '',
    marketingDescription: 'Begin your journey into DeFi with this Decentralized Exchange walkthrough.',
    badgeId: null,
    collectibleId: 'H002',
    duration: 5,
    learnings: '',
    description: 'Begin your journey into DeFi with this Decentralized Exchange walkthrough.',
    name: 'Swapping on a Decentralized Exchange',
    languages: [],
    lessonWriters: 'Tetranome',
    publicationStatus: 'publish',
    publicationDate: '2023-06-22',
    featuredOrderOnHomepage: null,
    isCommentsEnabled: false,
    endOfLessonRedirect: null,
    mirrorLink: 'https://mirror.xyz/banklessacademy.eth/g6Z7yuteSaJmhxVeVWwKtcZ2zttC33_9Enw23MbxKyk',
    mirrorNFTAddress: '0xdedebfc6893d5e7e87db8a1a88667d2bb746c231',
    areMirrorNFTAllCollected: false,
    sponsorName: 'Velodrome',
    sponsorLogo: '/images/swapping-on-a-decentralized-exchange/sponsor-90c6c9a6.png',
    isArticle: true,
    notionId: '926fb19ef46747dbb6b58abd82af92c4',
    englishName: 'Swapping on a Decentralized Exchange',
    slug: 'swapping-on-a-decentralized-exchange',
    articleContent: '## Key Takeaways\n\n> * Decentralized Exchanges are a type of dApp that facilitate self-custody token swaps.\n>\n> * There is some practical knowledge required for confidently interacting with a DEX.\n>\n> * We can use block explorers to inspect our on-chain transactions.\n\nThe Decentralized Exchange (DEX) is the most commonly used application in the world of `Decentralized Finance` (DeFi) — and for good reason! DEXs enable automated swapping of one cryptocurrency token for another, without need for a mediator. Unlike Centralized Exchanges (CEXs), this type of swap also enables users to swap while retaining full ownership of their assets.\n\nAutonomy, and permissionless protocols, are backbone features of DeFi. They empower DeFi users with true ownership over their digital assets, and open access to fundamental blockchain services 24/7. Anyone with an internet connection can access DeFi, regardless of their personal background, beliefs, or geographical location.\n\nIn this handbook entry, we will cover how to use your self-custody wallet to interact with a DEX, with the goal of swapping one token for another. You can learn more about the mechanics, qualities, and risk profile of this technology, and how it compares to CEXs, in our lesson on [Decentralized Exchanges](https://app.banklessacademy.com/lessons/decentralized-exchanges).\n\n## Choosing a DEX\n\nSelecting an affordable and safe platform is the first step in performing a token swap. In this walkthrough we will be using Velodrome, the most popular DEX on the Optimism network (at time of writing). As you become more confident in blockchain navigation, you’ll learn how to evaluate other exchanges and find the best fit for your needs. Our [Decentralized Exchanges](https://app.banklessacademy.com/lessons/decentralized-exchanges) lesson includes a comprehensive list of qualities to look out for.\n\n![](/images/swapping-on-a-decentralized-exchange/image-a5b39b1d.png)\n\nDEXs are a great start to your web3 journey because most dApps follow a user interface layout similar to DEXs, and use similar interactions with your self-custody wallet.\n\nLet’s begin our token swap.\n\n## Performing a Token Swap\n\n**1\. Load the dApp:**\n\nOpen [Velodrome](https://app.velodrome.finance/swap?from=eth&to=0x4200000000000000000000000000000000000042) in a new browser tab.\n\n**2\. Connect your wallet:**\n\nUse the standard ‘Connect’ button typically located in the top right corner of any dApp.\n\nIf you are on desktop, connect with your browser wallet.\n\nIf you are on mobile, you will be prompted to use WalletConnect — the web3 standard for connecting mobile wallets to dApps.\n\n![](/images/swapping-on-a-decentralized-exchange/image-1d7c44d3.png)\n\n**3\. Approve the connection:**\n\nSelect ‘Connect’ in your wallet application to confirm the site connection. This allows the dApp to see your wallet address and token balances. You haven’t granted any other permissions yet.\n\n![](/images/swapping-on-a-decentralized-exchange/image-6ecdef56.png)\n\n**4\. Check and sign the terms of service (if you accept):**\n\nMany dApps will ask you to sign a message to confirm you have read their terms and conditions. Signing messages doesn’t cost gas, and doesn’t store any information on the blockchain. If you agree with the terms, you can sign the message.\n\n![](/images/swapping-on-a-decentralized-exchange/image-e3f7c7e8.png)\n\n**5\. Switch to the right network:**\n\nFor this walkthrough, make sure your wallet is set to the Optimism network.\n\n![](/images/swapping-on-a-decentralized-exchange/image-8d15c6f6.png)\n\n**6\. Customize your swap:**\n\nIt’s time to select your desired input and output tokens. In this example, we will be swapping ETH for OP — but you can swap whatever tokens you like!\n\n![](/images/swapping-on-a-decentralized-exchange/image-7b117655.png)\n\n**7\. Approve token permissions:**\n\nYou will be prompted to set and approve permission for Velodrome to access your wallet funds. We recommend limiting this to your trade size to limit future interactions with your tokens. (Stay tuned for future content on token permissions!)\n\n**8\. Confirm the transaction:**\n\nOnce you’re happy with your swap quote and settings, you can begin the swap. This step includes confirming on the dApp, and again in your wallet.\n\n![](/images/swapping-on-a-decentralized-exchange/image-89f87156.png)\n\n**9\. Check your balance:**\n\nYour transaction should take around 40 seconds to confirm, after which you will see your new token balance in your wallet. If your token type is not displayed, make sure you’ve imported the token addresses.\n\n*Optimism token contract address: 0x4200000000000000000000000000000000000042*\n\n![](/images/swapping-on-a-decentralized-exchange/image-c8b8abcc.png)\n\n**10\. Fetch your transaction hash:**\n\nTo complete the quest for our [Decentralized Exchanges](https://app.banklessacademy.com/lessons/decentralized-exchanges) lesson, you’ll need the ***transaction hash of the swap*** (not to be confused with the hash from your token permission transaction, or your wallet address). A block explorer link will usually appear on the DEX interface, letting you view the confirmed transaction details.. If you missed it, or it’s missing, you’ll find another link in your wallet activity log — tied directly to your trade.\n\n![](/images/swapping-on-a-decentralized-exchange/image-bcfdf0ee.png)\n\n\n---\n\nIt’s time to explore the world of decentralized trading! We hope you’ve enjoyed this entry in the Explorer’s Handbook: ‘Swapping on a Decentralized Exchange’.\n\nDon’t forget to collect this entry if you want to own a copy for easy reference on your travels, or to support future content at Bankless Academy. Safe travels, Explorer!\n\n\n---\n\n## Frequently Asked Questions\n\n### Why does my price quote change a few times every minute?\n\nPrice quotes are typically calculated at the time you enter your desired swap into the DEX interface. As time goes by, other users are making swaps and affecting token supply on the exchange. The DEX will regularly refresh your quote to stay up to date.\n\n### How long does it take for a token swap to execute?\n\nThe answer depends on a variety of factors, primarily the block speed of the blockchain and how much you underpay or overpay the gas fee. DEX transactions submitted to Ethereum Mainnet typically take between 15 seconds and a couple of minutes to be confirmed. Layer 2 transactions are usually faster!\n\n### Why did my transaction fail?\n\nThere are a number of reasons why a transaction could fail: insufficient funds to pay gas, gas limit set too low, or slippage set too low. The best way to begin troubleshooting is to look for User Interface error messages. You can also view your transaction on a block explorer, like [Etherscan](https://optimistic.etherscan.io/), to check if there are any on-chain error messages. We’ll cover more troubleshooting specifics in future content!\n\n### Can I change or remove token permissions?\n\nGranting token permissions to a smart contract can leave our wallet vulnerable to unwanted future interactions, in the case of a smart contract hack. It is possible to change or remove token permissions using apps like [Revoke.cash](https://revoke.cash/). As adjusting permissions costs gas, this precaution can quickly become expensive. This is one of the reasons why many users store their digital assets in one wallet (cold wallet), while interacting with dApps on another (trading wallet). Users transfer assets between them only as necessary.\n\n### Why is the token I\'m looking for not available to swap?\n\nIf your token isn’t listed by default, you’ll have to paste the token contract address into the list. To find the token contract address, check <https://www.coingecko.com/> or the official project website.\n\n**Note:** Token addresses can change for a given token on different networks. For example the [USDC contract on Mainnet](https://etherscan.io/token/0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48) is different than the [USDC contract on Optimism](https://optimistic.etherscan.io/token/0x7f5c764cbc14f9669b88837ca1490cca17c31607). Always verify token addresses before swapping!\n\n\n---\n\n**Author**\n\n**[Tetranome](https://twitter.com/tetranome)** is the Project Champion at Bankless Academy, focusing on user experience, UI, design, and platform curriculum.\n\n**Editor**\n\n**[Trewkat](https://twitter.com/trewkat)** is a writer and editor at BanklessDAO. She’s interested in learning as much as possible about crypto and NFTs, with a particular focus on how best to communicate this knowledge to others.\n\n**Patron**\n\nThis unsponsored article is part of your free Bankless Academy education. Collect the article to support future content!',
    imageLinks: [
      '/images/swapping-on-a-decentralized-exchange/image-a5b39b1d.png',
      '/images/swapping-on-a-decentralized-exchange/image-1d7c44d3.png',
      '/images/swapping-on-a-decentralized-exchange/image-6ecdef56.png',
      '/images/swapping-on-a-decentralized-exchange/image-e3f7c7e8.png',
      '/images/swapping-on-a-decentralized-exchange/image-8d15c6f6.png',
      '/images/swapping-on-a-decentralized-exchange/image-7b117655.png',
      '/images/swapping-on-a-decentralized-exchange/image-89f87156.png',
      '/images/swapping-on-a-decentralized-exchange/image-c8b8abcc.png',
      '/images/swapping-on-a-decentralized-exchange/image-bcfdf0ee.png'
    ]
  },
  {
    badgeImageLink: null,
    lessonImageLink: '/images/managing-token-allowances/lesson-2aaa40f9.png',
    socialImageLink: '/images/managing-token-allowances/social-f6aca8f1.png',
    learningActions: '',
    marketingDescription: 'Protect your wallet from unwanted smart contract interactions.',
    badgeId: null,
    collectibleId: 'H004',
    duration: 5,
    learnings: '',
    description: 'Protect your wallet from unwanted smart contract interactions.',
    name: 'Managing Token Allowances',
    languages: [],
    lessonWriters: 'Marcus, Tetranome',
    publicationStatus: 'publish',
    publicationDate: '2023-08-30',
    featuredOrderOnHomepage: null,
    isCommentsEnabled: false,
    endOfLessonRedirect: null,
    mirrorLink: 'https://mirror.xyz/banklessacademy.eth/25cFAg4NR8wImRBa4hsYM8cHrzdD5oGa27EYbwRIw2U',
    mirrorNFTAddress: '0x0ae1cfd5f84bde987b255e822463a17705ad9ba9',
    areMirrorNFTAllCollected: false,
    sponsorName: 'Revoke.cash',
    sponsorLogo: '/images/managing-token-allowances/sponsor-e0918b81.png',
    isArticle: true,
    notionId: 'f62923507cc04de58ad229242a3b8e8b',
    englishName: 'Managing Token Allowances',
    slug: 'managing-token-allowances',
    articleContent: '## Key Takeaways\n\n> * Token allowances refer to permissions granted to `smart contracts` to spend tokens from a wallet without further approval.\n>\n> * They can be exploited by malicious actors if the user is not aware permissions are in place.\n>\n> * Tools like Revoke.cash allow users to easily to inspect and revoke token allowances.\n\n## Introduction\n\nDeFi grants users control over their assets, including their `private keys`, offering unprecedented sovereignty and authority over their funds. However, with great power comes greater responsibility, requiring users to take full charge of the safety and management of their assets.\n\nThere are four common categories of scams that DeFi users should be aware of:\n\n* **Seed Phrase Compromise:** Attackers attempt to deceive users into revealing their seed phrases, which would give them unauthorized access to funds. With your seed phrase, an attacker can drain all your funds and continue doing so if you deposit additional funds into the wallet. Unfortunately, there is no way to recover from this situation, and the only solution is to create a completely new wallet with a new `seed phrase`.\n\n* **Direct ETH Transfers:** Scammers can conceal ETH transfers by either requesting an “eth_sign” signature or disguising it as a function call, such as “Security Update.” Falling for this scam means you won’t be able to recover your funds, but you can still safely use your wallet for other transactions.\n\n* **NFT Marketplace Listings:** Be cautious of fake listings and malicious contracts that exploit the allowances you grant to marketplaces like OpenSea. Scammers may trick you into signing an `offchain` message that lists your approved `NFTs` for sale, with no actual token transaction taking place.\n\n* **Token Allowances:** Attackers may manipulate permissions to gain access to more funds than initially approved. “Approvals” are on-chain transactions that grant access to your tokens or NFTs. “Permits” offer the same access but only require an off-chain signature.\n\n  As smart contracts gain popularity, `token allowances` become necessary to enable trusted contracts to execute transactions without exposing private keys. Token allowances allow dApps to automatically move tokens in your wallet on your behalf. While this convenience boosts efficiency, it also exposes users to potential attack vectors through scams and unauthorized access.\n\nIn this article, we’ll discuss ‘Token Allowances’ and introduce a community tool built to help manage your permissions.\n\n## Token Allowances: Understanding, Managing, and Ensuring Safety\n\nToken allowances are permissions given in advance to smart contracts to spend tokens from a wallet. They serve a crucial role in facilitating transactions without requiring explicit permission every time for direct asset transfers from the wallet. When misused, however, token allowances can become an attack vector for the unsuspecting. To address this risk, it’s important that DeFi users exercise caution, educate themselves on the security landscape, and understand how token allowances actually work.\n\nThere are two steps involved when granting permissions to a third-party contract:\n\n1. Wallet permission: When connecting your wallet to a dApp, you grant its smart contract permission to access your wallet’s `public key`, view your balances, and monitor your wallet activity.\n\n2. Token approval: Once you’ve granted this access to your wallet, you then approve your tokens to be moved on your behalf in order to complete transactions.\n\nBy proactively managing token allowances, users can ensure that no contract withdraws more than the initially specified amount from their wallet. Luckily, there are community tools built to help give DeFi users confidence and peace of mind.\n\n## Walkthrough: Using Revoke.cash\n\n[Revoke.cash](https://revoke.cash/) empowers users to easily manage their token allowances through a simple website that helps inspect and monitor allowances given to different dApps. Let’s walkthrough how you can use this powerful community tool to help you safeguard your assets and take back control of your wallet.\n\n**1\. Connect your wallet**:\n\nTo begin the process of revoking your token allowances, head to [Revoke.cash](http://revoke.cash/) and click on “Connect Wallet” located in the top-right corner. Alternatively, you can manually enter your wallet public address in the search bar. Once the loading is complete, you’ll see a list of all your token approvals on that network.\n\n![](/images/managing-token-allowances/image-f95ea594.png)\n\n**2\. Inspect your allowances**:\n\nOnce you have connected your wallet, you can inspect your existing approvals. You can sort, filter, or search for specific approvals based on the authorized spender address. Sorting by “Newest to Oldest” is particularly useful if you suspect a malicious approval recently. Use the network selection, sorting, and filtering options provided to gain an overview of token allowances you have granted across various networks.\n\n![](/images/managing-token-allowances/image-f3b00f4a.png)\n\n**3\. Revoke undesired allowances:**\n\nOnce you identify the approvals you want to revoke, simply click the “Revoke” button next to each of them. Optionally, you can update the approval to a different amount by clicking the pencil icon next to the approved amount if you still require the approval in the future but wish to reduce your risk.\n\n![](/images/managing-token-allowances/image-138cb12e.png)\n\nIt might be in your best interest to to revoke or adjust a token allowance if:\n\n1. A recently deployed smart contract is exploited and creates a vulnerability in a `decentralized exchange` you regularly use.\n\n   Earlier this year, popular `DEX` SushiSwap suffered a similar exploit, when \~$3.5M was stolen from users. Affected users remained at risk if they hadn’t revoked their token allowance.\n\n2. A malicious governance proposal updates several contracts with the intent of draining users’ funds.\n\n   More than $2.5M in assets were compromised when Atlantis Loans, a `DeFi` protocol on a BNB chain, executed a governance proposal that targeted several contracts. Users who managed their approval limit mitigated the risk of their wallets being fully drained by the malicious proposal.\n\n\n---\n\nIt’s time to strengthen our wallet defenses! We hope you’ve enjoyed this entry in the Explorer’s Handbook: ‘Managing Token Allowances’.\n\nDon’t forget to collect this entry if you want to own a copy for easy reference on your travels, or to support future content at Bankless Academy. Safe travels, Explorer!\n\n\n---\n\n## FAQ\n\n### When should I use Revoke.cash?\n\nUse Revoke.cash periodically, especially during periods when you are not actively using a dApp, particularly for NFT marketplaces. Limiting approvals lessens the risk of funds loss due to hacks, exploits, or phishing scams. By sorting your approvals to show the most recent, you can identify the suspicious approvals and revoke them promptly, mitigating further damage.\n\n### Does disconnecting my wallet protect me from approval exploits?\n\nDisconnecting your wallet from a dApp does not protect you from exploits, approvals or otherwise. The token approvals you previously granted remain active even after disconnecting, because they are stored onchain.\n\n### How can I avoid token allowance exploits and similar risks?\n\nA proactive approach to token allowances includes:\n\n* granting allowances only to trusted dApps.\n\n* periodically reviewing token allowances.\n\n* removing unnecessary or suspicious allowances.\n\n* staying informed about dApps’ security updates.\n\nConsider using third-party tools like the Revoke.cash [browser extension](https://revoke.cash/extension) — it acts as a proactive measure against potential threats. The extension warns you if you are about to sign something potentially harmful, protecting you from phishing scams or other malicious activities.\n\n### Can I recover funds with Revoke.cash?\n\nUnfortunately, Revoke.cash cannot recover stolen funds. It serves as a preventive tool to reduce the likelihood of becoming a victim of approval exploits. However, revoking the approvals used to steal your funds can prevent further theft.\n\n### Why does my wallet keep getting drained each time I top it up?\n\nYour wallet may contain a “sweeper bot,” a script that monitors and acts on transactions from a compromised wallet. When it detects such transactions, the bot initiates a new transaction before the original one completes, allowing it to rapidly transfer any new deposits out. If your wallet has such a “sweeper bot” stealing incoming ETH, it means your seed phrase is compromised. Revoking approvals won’t improve your wallet’s security. The best course of action is to abandon the compromised wallet and create a new one.\n\n\n---\n\n**Author**\n\n**[Marcus](https://twitter.com/estmcmxci)** publishes the ENS DAO Newsletter. He researches how surplus revenue generated from protocol fees can subsidize application layer development and other open source infrastructure.\n\n**Editors**\n\n**[Tetranome](https://twitter.com/Tetranome)** is the Project Champion at Bankless Academy, focusing on user experience, interface, design, and content.\n\n**[Trewkat](https://twitter.com/trewkat)** is a writer and editor at BanklessDAO. She’s interested in learning about crypto and NFTs, with a particular focus on how best to communicate this knowledge to others.\n\n**Patron**\n\nThis unsponsored article is part of your free Bankless Academy education. Collect the article to support future content!',
    imageLinks: [
      '/images/managing-token-allowances/image-f95ea594.png',
      '/images/managing-token-allowances/image-f3b00f4a.png',
      '/images/managing-token-allowances/image-138cb12e.png'
    ]
  },
  {
    badgeImageLink: '/images/dex-aggregators/badge-86a40201.png',
    lessonImageLink: '/images/dex-aggregators/lesson-5a587f32.png',
    socialImageLink: '/images/dex-aggregators/social-ba40b51c.jpg',
    learningActions: '',
    marketingDescription: 'Dive into DEX Aggregators, liquidity, and the DeFi exchange landscape.',
    badgeId: 6,
    duration: 15,
    learnings: '',
    description: 'Dive into DEX Aggregators, liquidity, and the DeFi exchange landscape.',
    name: 'DEX Aggregators',
    languages: [],
    lessonWriters: 'iSpeakNerd',
    quest: 'DEXAggregators',
    publicationStatus: 'publish',
    publicationDate: '2022-10-13',
    featuredOrderOnHomepage: null,
    isCommentsEnabled: false,
    endOfLessonRedirect: null,
    sponsorName: '1inch',
    sponsorLogo: '/images/dex-aggregators/sponsor-3dbce3d6.png',
    notionId: '42578b8813114832b8930cf59f6125af',
    englishName: 'DEX Aggregators',
    slug: 'dex-aggregators',
    imageLinks: [
      '/images/dex-aggregators/introduction-ba453b68.svg',
      '/images/dex-aggregators/an-example-of-how-liquidity-impacts-prices-915b3d84.svg',
      '/images/dex-aggregators/shortcomings-of-traditional-dexs-thin-liquidity-c9e0b695.svg',
      '/images/dex-aggregators/recombining-liquidity-with-dex-aggregators-f01777dd.svg',
      '/images/dex-aggregators/how-gas-cost-is-calculated-on-ethereum-c34efe86.svg',
      '/images/dex-aggregators/how-aggregators-reduce-gas-costs-for-users-28d6f207.svg',
      '/images/dex-aggregators/meta-aggregators-100793fd.svg',
      '/images/dex-aggregators/avoiding-sandwich-attacks-75f6ae82.svg',
      '/images/dex-aggregators/more-protection-from-sandwiches-otc-trades-04ef66c9.svg'
    ],
    slides: [
      {
        type: 'LEARN',
        notionId: 'cc07e9a8a87744daa6548a95ae696fd2',
        title: 'Introduction',
        content: '<div class="bloc1"><p><code>Decentralized Exchanges</code> (DEXs) eliminate the costs of intermediaries and save Explorers money when trading assets. </p><p>But did you know, Explorer, that there’s more ways to save with DeFi technology? Using <code>DEX aggregators</code>, you can scan all possible trades on various DEX platforms simultaneously and execute the best trade route — all in one action. They help you get the best deal when doing a token <code>swap</code>. Just like airline flight aggregators help you find the cheapest flight, DEX aggregators help you maximize the value of your trade.</p><p>This lesson will show:</p><ol><li>How DEXs split liquidity and how that can result in reduced trading rates.</li><li>How DEX aggregators enable users to view and use multiple DEXs through one interface.</li><li>Multiple ways a single aggregator interface can save Explorers time and money.</li></ol></div><div class="bloc2"><img src=\'/images/dex-aggregators/introduction-ba453b68.svg\'></div>'
      },
      {
        type: 'LEARN',
        notionId: '0e59fd1b9b7943a3a70a44abc9e921c1',
        title: 'How Liquidity Affects Prices',
        content: '<div class="bloc1"><p>The amount of any token that is available to trade on a single market is called a token’s <code>liquidity</code>. The amount of liquidity available strongly influences the <code>price impact</code> when making trades in DeFi; a large price impact means the trade will cost more, and a low price impact will cost less. Most people prefer to trade in markets with higher liquidity to reduce their price impact. </p><p>You can think of it like a swimming pool; the more water (liquidity) there is, the smaller the <em>change </em>in the water level (price impact) when someone jumps in or leaves. The size of that ‘someone’ (the trade) also affects the <em>change</em> in the water level (price impact).</p></div>'
      },
      {
        type: 'LEARN',
        notionId: '8ea31e80fcfc49d3a88ad09d03341c9c',
        title: 'An Example of How Liquidity Impacts Prices',
        content: '<div class="bloc1"><p>Let’s look at an example. </p><p>The BanklessDAO token (BANK) has a liquidity amount of ~30 million BANK on Uniswap, but only ~4.5 million BANK on SushiSwap. Uniswap has over 6x the BANK liquidity of SushiSwap.</p><p>If an Explorer was to purchase 10,000 BANK from each pool, they would find that the <code>price impact</code> of their trade would result in a higher trade price in the SushiSwap pool — because their trade has pulled a larger percentage of the pool’s total liquidity.</p></div><div class="bloc2"><img src=\'/images/dex-aggregators/an-example-of-how-liquidity-impacts-prices-915b3d84.svg\'></div>'
      },
      {
        type: 'QUIZ',
        notionId: 'c60d776bd01247b79e037003d737f924',
        title: '✅ Question',
        quiz: {
          question: 'Fill in the blanks: To find the best price, people will want to trade in markets with ________ liquidity to have ________ price impact on their trades.',
          rightAnswerNumber: 2,
          answers: [
            'good, maximum',
            'high, low',
            'low, good',
            'thin, large'
          ],
          id: 'dex-aggregators-1'
        }
      },
      {
        type: 'LEARN',
        notionId: 'b97afba7b0f44b709f57d6e85ce13cc2',
        title: 'Shortcomings of Traditional DEXs: Thin Liquidity',
        content: '<div class="bloc1"><p>DeFi continues to grow, but a problem is emerging for users: As more DEXs launch, the total amount of any individual token gets spread out. This is known as thin liquidity.</p><p>Remember the swimming pool: if the available water (<code>liquidity</code>) is split between multiple pools, the amount of water will be “thinner” in each pool compared to the total in the single original pool.</p><p>In 2020, Uniswap held much of the DEX liquidity to trade in DeFi. When SushiSwap launched the following month, it attracted over $1B worth of liquidity into its DEX from Uniswap, reducing total liquidity on Uniswap. This was just the start. Since then, more and more DEXs have entered the DeFi ecosystem, progressively thinning the liquidity of each pool.</p><p>Thus, any trade has a larger <code>price impact</code> than when Uniswap held most of the ecosystem’s total liquidity. As more DEXs launch, it costs Explorers more to trade on any single DEX without new innovations.</p></div><div class="bloc2"><img src=\'/images/dex-aggregators/shortcomings-of-traditional-dexs-thin-liquidity-c9e0b695.svg\'></div>'
      },
      {
        type: 'QUIZ',
        notionId: 'd9969ae7f6c247a097f7b7d419b6c119',
        title: '✅ Question',
        quiz: {
          question: 'Which two factors determine the price impact of a DEX trade?',
          rightAnswerNumber: 3,
          answers: [
            'The choice of DEX is used to make the trade and size of the trade',
            'Which token is chosen to trade and which DEX is used to make the trade',
            'The size of the trade and amount of liquidity available',
            'The amount of liquidity available and which token is chosen to trade'
          ],
          id: 'dex-aggregators-2'
        }
      },
      {
        type: 'LEARN',
        notionId: 'c06177fa9ee3428c80a9295a8a09a9f2',
        title: 'Recombining Liquidity With DEX Aggregators',
        content: '<div class="bloc1"><p>Large amounts of <code>liquidity</code> are needed to reduce price impact and save you money. DEX aggregators allow users to run trades through multiple DEXs at once and reduce the price impact; a big trade from an Explorer’s wallet gets broken down into multiple small trades across multiple DEXs.</p><p>DEX aggregators can even route trades through an <code>intermediary token</code> , or more than one, if that gets a better result for users — like the way a flight aggregator might suggest an extra stop at another airport if it’s cheaper for the passenger. This discovery of the optimal <code>trade route</code> is done by sophisticated algorithms searching through all possible paths to find the cheapest trade route at that moment.</p></div><div class="bloc2"><img src=\'/images/dex-aggregators/recombining-liquidity-with-dex-aggregators-f01777dd.svg\'></div>'
      },
      {
        type: 'QUIZ',
        notionId: '063815f2667146a2921df5c4c3ca1663',
        title: '✅ Question',
        quiz: {
          question: 'Trade routing in DEX aggregators means:',
          rightAnswerNumber: 4,
          answers: [
            'Trades are routed according to liquidity arrangements with specific DEXs',
            'Trades are always routed through multiple DEXs',
            'Trades are routed through a user’s favorite DEX only',
            'Trades can be routed through multiple DEXs and intermediary tokens'
          ],
          id: 'dex-aggregators-3'
        }
      },
      {
        type: 'LEARN',
        notionId: '1c2f4199a9254d18897593b371ca4d9e',
        title: 'How Gas Cost Is Calculated on Ethereum',
        content: '<div class="bloc1"><p>Let’s refresh how gas is calculated before we go on to see how the optimizations DEX aggregators make can reduce network fees for users.</p><p>Just like gas for a car, <code>gas</code> is the fuel for running blockchain code on Ethereum. The farther you travel, the more gas your car uses. Likewise, the more computations you do, the more gas your code requires. Gas price is measured in very small amounts of Ether called <code>gwei</code>, like cents to a dollar. 1 gwei is 1 billionth of an ether (1 gwei = 0.00000001 ETH). </p><p>Total gas cost is based on how much gas your transaction uses and the unit price of gas at the time of use. The formula for calculating the price of a transaction is as follows:<br><em>Amount of gas used * Gas price = Total gas cost</em></p><p>As an example, let’s say gas costs are at 22 gwei per gas unit and the transaction uses 120-thousand units:<br><em>120,000 * 22 gwei = 2,640,000 gwei </em><em><strong>or</strong></em><em> 0.00264 ETH</em></p></div><div class="bloc2"><img src=\'/images/dex-aggregators/how-gas-cost-is-calculated-on-ethereum-c34efe86.svg\'></div>'
      },
      {
        type: 'LEARN',
        notionId: '7196f021bcc541929d68b9bd0c018ac3',
        title: 'How Aggregators Reduce Gas Costs for Users',
        content: '<div class="bloc1"><p>Trade splitting would result in more transaction fees from the extra on-chain activity, except that advanced aggregators plan for transaction fees and include them in their calculations of the trade route. They simulate trades off chain, including <code>gas</code> costs, to find <code>trade routes</code> that leave Explorers with the most value at the end of the interaction.</p><p>Some aggregators go even further: they may refund some of the network transaction fees from using their protocol. 1inch currently offers rebates in their token for a portion of gas costs from trading through their <code>dApp</code> on Ethereum mainnet.</p></div><div class="bloc2"><img src=\'/images/dex-aggregators/how-aggregators-reduce-gas-costs-for-users-28d6f207.svg\'></div>'
      },
      {
        type: 'QUIZ',
        notionId: '2cf155ee9e3a4d4fb0a9c78f888d2373',
        title: '✅ Question',
        quiz: {
          question: 'Which of the following is NOT a way DEX aggregators try to reduce transaction costs for users?',
          rightAnswerNumber: 2,
          answers: [
            'Simulate transactions off-chain prior to trade execution',
            'Ask DEXs to lower network fees for their users',
            'Account for gas cost in trade routing',
            'Token rebates on gas costs'
          ],
          id: 'dex-aggregators-4'
        }
      },
      {
        type: 'LEARN',
        notionId: '19eb7c5516fd4da383c48661d21e34a1',
        title: 'Meta-Aggregators',
        content: '<div class="bloc1"><p>There are even meta-aggregators of DEX aggregators! These platforms search through all competing DEX aggregators and serve price quotes to users. An example of this is the in-app swap function in the MetaMask wallet. This feature is actually a meta-aggregator that relies on DEX aggregators like 1inch to function.</p><p>Note: While convenient, <code>meta-aggregator</code> services can add extra costs on top of network transaction fees, increasing the overall cost for users. Explorers: make sure that your trades don’t end up more expensive than you intended. </p></div><div class="bloc2"><img src=\'/images/dex-aggregators/meta-aggregators-100793fd.svg\'></div>'
      },
      {
        type: 'QUIZ',
        notionId: '7abcec930d924ca997d5f4221fae9ad6',
        title: '✅ Question',
        quiz: {
          question: 'Meta-aggregators cross-reference multiple DEX aggregators to find the best prices for their users.',
          rightAnswerNumber: 1,
          answers: [
            'True',
            'False'
          ],
          id: 'dex-aggregators-5'
        }
      },
      {
        type: 'LEARN',
        notionId: '44acd0c428aa49e8880b26f1ffffd0b0',
        title: 'Avoiding Sandwich Attacks',
        content: '<div class="bloc1"><p>Users swapping directly through <code>DEXs</code> can lose value up to the limit of their <code>slippage tolerance</code> due to price changes coordinated by block producers — these kinds of losses are called <code>sandwich attacks</code>. Did you know that sandwich attacks led users to a total loss of $235,000,000 during 2021? Explorers can protect themselves by keeping a low slippage tolerance when swapping tokens.</p><p>Fortunately, because of the recombined liquidity offered by DEX aggregators, the price impact of a trade is reduced. Explorers can keep their slippage tolerance low while saving more with DEX aggregators, as opposed to trading directly on a DEX.</p></div><div class="bloc2"><img src=\'/images/dex-aggregators/avoiding-sandwich-attacks-75f6ae82.svg\'></div>'
      },
      {
        type: 'QUIZ',
        notionId: '9864a66638a3473ca13f8ee2dc8c4b1f',
        title: '✅ Question',
        quiz: {
          question: 'To protect yourself, you should keep your slippage tolerance:',
          rightAnswerNumber: 1,
          answers: [
            'low',
            'high'
          ],
          id: 'dex-aggregators-6'
        }
      },
      {
        type: 'LEARN',
        notionId: 'b1756984326242d4ad5e4ab2cbe2eb32',
        title: 'More Protection From Sandwiches: OTC Trades',
        content: '<div class="bloc1"><p>Some aggregators like 1inch even offer specialized <code>OTC</code> (<code>Over The Counter</code>) services that provide total protection against sandwich attacks. These optional services enable direct trading with other users, rather than facilitating trades through DeFi <code>liquidity pools</code>. Anyone can engage in <code>OTC</code> trades to fully remove the threat of sandwich attacks — providing another great way for Explorers to save.</p><p>CoWSwap is a Meta-Aggregator that also offers sandwich-resistant services, enabled by default, to ensure trades are 100% protected against sandwich attacks.</p></div><div class="bloc2"><img src=\'/images/dex-aggregators/more-protection-from-sandwiches-otc-trades-04ef66c9.svg\'></div>'
      },
      {
        type: 'QUIZ',
        notionId: '18f1f2c0e7b84cfbafe1b26e139f0c25',
        title: '✅ Question',
        quiz: {
          question: 'Many DEX aggregators offer which tool(s) to save their users money?',
          rightAnswerNumber: 4,
          answers: [
            'Routing trades through aggregated liquidity from multiple DEXs to reduce price impact.',
            'OTC trades that fully protect against sandwich attacks.',
            'Account for gas cost when building the best trade routes.',
            'All of the above'
          ],
          id: 'dex-aggregators-7'
        }
      },
      {
        type: 'QUEST',
        title: 'DEX Aggregators Quest',
        component: 'DEXAggregators'
      }
    ]
  },
  {
    badgeImageLink: null,
    lessonImageLink: '/images/understanding-ethereum-token-standards/lesson-2aaa40f9.png',
    socialImageLink: '/images/understanding-ethereum-token-standards/social-f6aca8f1.png',
    learningActions: '',
    marketingDescription: 'Learn how Ethereum’s asset templates support both traditional and emerging asset classes.',
    badgeId: null,
    collectibleId: 'H006',
    duration: 10,
    learnings: '',
    description: 'Learn how Ethereum’s asset templates support both traditional and emerging asset classes.',
    name: 'Understanding Ethereum Token Standards',
    languages: [],
    lessonWriters: 'Musharef, Tetranome',
    publicationStatus: 'publish',
    publicationDate: '2023-11-08',
    featuredOrderOnHomepage: 1,
    isCommentsEnabled: false,
    endOfLessonRedirect: null,
    mirrorLink: 'https://mirror.xyz/banklessacademy.eth/qxBzms3mPBCZ8XCk2HMmyTm7IWe70wiFFn5J0BSvYiM',
    mirrorNFTAddress: '0xb9Eef5b84D862e45e6C425574BE23b11CA9211f3',
    areMirrorNFTAllCollected: false,
    isArticle: true,
    notionId: '7d0e0614983e47e8acd86cc186793dc9',
    englishName: 'Understanding Ethereum Token Standards',
    slug: 'understanding-ethereum-token-standards',
    articleContent: '## **Key Takeaways**\n\n> * Ethereum `token` standards are predefined rules and functions used for deploying tokens on Ethereum.\n>\n> * The most popular Ethereum token standards are `ERC-20`, `ERC-721`, and `ERC-1155`.\n>\n> * Each standard enables different levels of `fungibility`, allowing creation of both common and unique onchain assets.\n>\n> * Token standards enable token interoperability across the Ethereum ecosystem, making it very easy for dApps to integrate new tokens, and for you to have access to them!\n\n## What are Ethereum Token Standards?\n\nEthereum hosts tens of thousands of different crypto tokens, each with different properties and use cases. How can the network ensure seamless token support across its dApp ecosystem, without developers having to spend hours integrating each token? How can users of these tokens understand their key properties without scrolling through hours of documentation?\n\nEnter token standards!\n\nThese templates and rulesets support token `interoperability` across the Ethereum ecosystem. This means that dApps only need to support a few common token standards rather than thousands of individual tokens. For Explorers like yourself, this means that you can look at a token’s founding standard and understand its basic abilities across Ethereum.\n\nToken standards dictate:\n\n* How a token’s smart contract should be coded.\n\n* The use cases a token can have within the Ethereum ecosystem.\n\nCurrently, Ethereum has three commonly used token standards:\n\n![](/images/understanding-ethereum-token-standards/image-eb8638eb.png)\n\n1. **ERC-20** — A standard for easily exchangeable (or fungible) tokens.\n\n   e.g. USDC and UNI tokens.\n\n2. **ERC-721** — A standard for unique (or non-fungible) tokens, known as `NFTs`.\n\n   e.g. CryptoPunk and Bored Ape NFTs.\n\n3. **ERC-1155** — A standard used for both fungible and non-fungible tokens in the same contract.\n\n   e.g. Items inside a web3 video game.\n\nNow, you are probably wondering: “What exactly is fungibility?”\n\nLet’s take a look at this concept from traditional economics to understand its importance in the Ethereum ecosystem.\n\n## Fungibility vs. Non-Fungibility.\n\n**‘Fungibility’** is a property of an economic asset or good, indicating two key features:\n\n* When the asset is traded, its units are interchangeable without any alteration in value.\n\n  ($1 USD can be exchanged for another $1 USD, or four 25¢ coins, or twenty 5¢ coins.)\n\n* When the asset is divided, the smaller fractions maintain its fundamental characteristics.\n\n  ($1 USD, split into four 25¢ coins, still functions as a store of value or is used for making purchases.)\n\nExamples of fungible assets include oil, fiat currency, government bonds, and company shares. These non-unique assets can be easily exchanged and divided.\n\n![](/images/understanding-ethereum-token-standards/image-8e5e9468.png)\n\nConversely, **‘non-fungibility’** indicates:\n\n* The asset has unique properties which make it distinguishable from its counterparts, giving it a unique value.\n\n  (A canvas painting by Van Gogh is priced differently to one by an emerging modern artist, because of the appearance, rarity, level of skill, and reputation behind the paintings.)\n\n* The act of division affects its fundamental characteristics.\n\n  (A painting cut into four pieces has sections that do not resemble one another, and each section may be valued differently. The initial intention of the painting is also gone.)\n\nSome examples of non-fungible assets are real estate, artwork, digital identities, and certifications. These assets are more difficult to exchange and divide because of their unique properties.\n\n![](/images/understanding-ethereum-token-standards/image-ebe8683a.png)\n\nIf you’re ever confused about fungibility, just ask yourself: “How easy is it to exchange and divide?” If it’s difficult, it’s likely non-fungible!\n\nEthereum aims to become “the settlement layer for the world economy”. Fungible and non-fungible asset functionality opens opportunities for traditional asset classes to be represented onchain — and for new ones to be created!\n\n## Standards & Token Functions\n\nWhen deploying a new token contract on Ethereum, the asset creator will select from one of the existing token standards. This grants it initial properties — called functions — such as the total supply of the asset, whether or not it can be transferred to another wallet, and what information it can hold.\n\n![](/images/understanding-ethereum-token-standards/image-242de5f5.png)\n\nFor example, ERC-20 uses functions like these:\n\n**1\. totalSupply:** Defines the total supply of an ERC-20 token.\n\nThe total supply of a token informs important qualities like its value and distribution.\n\n**2\. balanceOf:** Checks the token balance of a specified address.\n\nThis helps services and platforms check your wallet’s balance before executing your requested transaction.\n\n**3\. transfer:** Transfers tokens from your address to other addresses.\n\nEvery time you send a crypto token from your wallet to another wallet, you’re using the transfer function.\n\n**4\. approve:** Allows an address (usually a smart contract) to automatically transact on behalf of your wallet up to a specified amount.\n\nUsing this function, you can approve a platform or service to automatically use a defined portion of your funds and execute transactions.\n\n**5\. allowance:** Used to get the amount that a spender can transact from a wallet.\n\nA platform may use this function to check the total amount you’ve approved it to use and if it can execute the transaction without you signing it manually.\n\nStandardizing the token creation process enables `composability` in the Ethereum ecosystem. For instance, a developer building a [decentralized exchange (DEX)](https://app.banklessacademy.com/lessons/decentralized-exchanges) can add support for any token following the ERC-20 standard because they will all behave in a similar way. They will not need to  build in individual support for each listed token.\n\nSimilarly, someone building an NFT marketplace just needs to make the platform compliant with ERC-721 and ERC-1155 standards to support all NFTs created on Ethereum.\n\nNow that we understand token standards, fungibility, and functions, let’s take a look at the use cases for the three primary standards on Ethereum.\n\n### ERC-20: Fungible Tokens\n\n![](/images/understanding-ethereum-token-standards/image-4708764e.png)\n\n[ERC-20](https://eips.ethereum.org/EIPS/eip-20) is a token standard that defines the rules for creating fungible token contracts.\n\nERC-20 tokens can be anything from a `memecoin` to a mode of payment in a decentralized marketplace. In most cases, they’ll fit into one of these four categories:\n\n**1\. Utility token:** Serves a specific use case within an app/platform ecosystem.\n\nExample: Filecoin (FIL) is used to reward storage providers who validate and add new blocks to their data storage network.\n\n**2\. Governance token:** Offers holders voting rights in governance decisions of a platform.\n\nExample: Ethereum Name Service (ENS) holders can vote in proposals to update the domain registry protocol.\n\n**3\. Stablecoin:** Designed to maintain a stable value, usually equal to the U.S. dollar.\n\nExamples: Tether (USDT), USDCoin (USDC), DAI (DAI).\n\n**4\. Security token:** Represents ownership in an underlying asset, like stocks of a company.\n\nExamples: Blockchain Capital (BCAP)\n\nA single token could fall into more than one category. For example, a governance token can also have certain utility within a platform.\n\nYou can easily [buy ERC-20 tokens on a DEX](https://app.banklessacademy.com/lessons/how-to-swap-on-a-decentralized-exchange) like Uniswap or a `centralized exchange` like Binance or Coinbase.\n\n### ERC-721: Non-fungible Tokens\n\n![](/images/understanding-ethereum-token-standards/image-aa1af1d5.png)\n\n[ERC-721](https://eips.ethereum.org/EIPS/eip-721) is a standard that defines the rules for Ethereum users to create or use non-fungible tokens. It ensures that each NFT created is provably unique.\n\nWhat are some use cases of ERC-721 tokens?\n\n**1\. Ownership of assets:** ERC-721 tokens are widely used to represent the ownership of unique digital and real-world assets. For example, this Explorer’s Handbook entry has 100 individually numbered versions available — not just to read, but to own — like a book on your digital bookshelf. (You can `mint` and own it by hitting the gold ‘Collect Entry’ button at the top). Bankless Academy’s ‘Datadisk Collectibles’ work in the same way.\n\n**2\. Subscriptions and memberships:** Creators, artists, clubs, and companies are already using NFTs for subscriptions, event tickets, and memberships. The provable uniqueness of NFTs ensures that each of the fixed supply is tied to an individual user.\n\n**3\. Loyalty rewards:** Starbucks launched a loyalty program called Odyssey where its members can complete quests to obtain NFTs that they can redeem for digital and real-world rewards. Many other brands are offering NFTs as a loyalty reward that users can choose to redeem or sell whenever they want.\n\n**4\. Identity and Certifications:** ERC-721 tokens can be used to create tamper-proof identities and certifications. When your digital identity or certificates are ERC-721 tokens, it is easy for you to prove your ownership and nearly impossible for anyone to forge your documents and misuse them.\n\nTo get an ERC-721 token, create an account on an NFT marketplace like [OpenSea](https://opensea.io/) or [Blur](https://blur.io/) and purchase any listed NFT. Make sure you take our [Web3 Security](https://app.banklessacademy.com/lessons/web3-security) lesson to protect yourself from marketplace scams.\n\n### ERC-1155: Fungible & Non-fungible Tokens\n\n![](/images/understanding-ethereum-token-standards/image-d804ad2f.png)\n\nOften referred to as a `multi-token standard`, [ERC-1155](https://eips.ethereum.org/EIPS/eip-1155) merges the concepts of ERC-20 and ERC-721 and lets builders write contracts that can support both fungible and non-fungible tokens. This doesn’t make a major difference to the user experience but can help to optimize platform features. An example would be deploying both a fungible in-game currency and non-fungible in-game assets under a single contract.\n\nThis standard also allows the creation of semi-fungible tokens — tokens that are fungible and non-fungible in specific circumstances. For example, in a trading card collection, all cards that have the same rarity might be fungible (interchangeable) whereas cards with differing rarity levels might be non-fungible (non-interchangeable).\n\nERC-1155 also enables batch transactions to send multiple token types at once, potentially reducing the `gas` cost for users.\n\n\n---\n\nWe commend you for making it through this lengthy entry in the Explorer’s Handbook: ‘Understanding Token Standards’.\n\nDon’t forget to collect this entry if you want to own a copy for easy reference on your travels, or to support future content at Bankless Academy. Safe travels, Explorer!\n\n\n---\n\n## Ethereum Token Standard FAQ\n\n### How are Ethereum token standards created?\n\nToken standards are proposed and published on Ethereum through a proposal process called Ethereum Improvement Proposals (EIPs). Once a proposal is passed, it becomes a standard and is called an Ethereum Request for Comment (ERC). The serial number of the EIP is then appended to complete the standard name, e.g. ERC-20 or ERC-721.\n\n### Does ether (ETH) follow a token standard?\n\nNo. In fact, ETH is known as a ‘coin’ not a ‘token’, meaning it has its own [blockchain](https://app.banklessacademy.com/lessons/blockchain-basics).\n\n### Can anyone launch a token?\n\nYes. Ethereum is a permissionless ecosystem and anyone can launch a fungible or non-fungible token. However, you will need technical know-how or access to no-code tools.\n\n### If two tokens have the same name, how do I know which is the official token?\n\nTo identify the original token, you should check the contract address that’s used to publish the tokens you want to use and reference it against official project documentation. This way you’ll ensure that you do not interact with a malicious token contract that could drain your wallet.\n\n### Are there other token standards on Ethereum apart from ERC-20, 721, and 1155?\n\nYes, there are other token standards on Ethereum that are not in use or have very niche use cases. Some examples include [ERC-223](https://eips.ethereum.org/EIPS/eip-223), [ERC-1462](https://eips.ethereum.org/EIPS/eip-1462), [ERC-1948](https://eips.ethereum.org/EIPS/eip-1948), and [ERC-4626](https://eips.ethereum.org/EIPS/eip-4626).\n\n\n---\n\n**Authors**\n\n**[Musharraf](https://x.com/musharrafff)** is the co-founder of Unhashed. He helps web3 projects with content strategy and execution.\n\n**[Tetranome](https://twitter.com/Tetranome)** is the Project Champion at Bankless Academy, focusing on user experience, interface, design, and content.\n\n**Editors**\n\n**[Trewkat](https://twitter.com/trewkat)** is a writer and editor at BanklessDAO. She’s interested in learning about crypto and NFTs, with a particular focus on how best to communicate this knowledge to others.\n\n**Patron**\n\nThis unsponsored article is part of your free Bankless Academy education. Collect the article to support future content!',
    imageLinks: [
      '/images/understanding-ethereum-token-standards/image-eb8638eb.png',
      '/images/understanding-ethereum-token-standards/image-8e5e9468.png',
      '/images/understanding-ethereum-token-standards/image-ebe8683a.png',
      '/images/understanding-ethereum-token-standards/image-242de5f5.png',
      '/images/understanding-ethereum-token-standards/image-4708764e.png',
      '/images/understanding-ethereum-token-standards/image-aa1af1d5.png',
      '/images/understanding-ethereum-token-standards/image-d804ad2f.png'
    ]
  },
  {
    badgeImageLink: '/images/optimism-governance/badge-1448ebc2.png',
    lessonImageLink: '/images/optimism-governance/lesson-a120c424.png',
    socialImageLink: '/images/optimism-governance/social-f6cda7d9.jpg',
    learningActions: '',
    marketingDescription: 'Become a governing member of Optimism and help decide the network\'s future.',
    badgeId: 10,
    duration: 20,
    learnings: '',
    description: 'Become a governing member of Optimism and help decide the network\'s future.',
    name: 'Optimism Governance',
    languages: [
      'cn',
      'de',
      'es',
      'fr',
      'jp'
    ],
    lessonWriters: 'Tetranome',
    quest: 'OptimismGovernance',
    publicationStatus: 'publish',
    publicationDate: '2023-09-07',
    featuredOrderOnHomepage: 2,
    isCommentsEnabled: false,
    endOfLessonRedirect: null,
    sponsorName: 'Optimism',
    sponsorLogo: '/images/optimism-governance/sponsor-c3c045f3.png',
    notionId: '7b9c38ffdf164099ad3bc19d22484f1c',
    englishName: 'Optimism Governance',
    slug: 'optimism-governance',
    imageLinks: [
      '/images/optimism-governance/old-problems-new-tools-df0ceb84.svg',
      '/images/optimism-governance/network-governance-1f940de4.svg',
      '/images/optimism-governance/the-optimism-network-3e75a5a7.svg',
      '/images/optimism-governance/progressive-decentralization-e6e00611.svg',
      '/images/optimism-governance/a-new-economy-cd0a0ca1.svg',
      '/images/optimism-governance/incentivizing-public-goods-78035b95.svg',
      '/images/optimism-governance/ethers-phoenix-f63f460c.svg',
      '/images/optimism-governance/introducing-the-governing-houses-bdcf1e8f.svg',
      '/images/optimism-governance/the-token-house-7d73ce82.svg',
      '/images/optimism-governance/a-note-on-token-distribution-cb74efa7.svg',
      '/images/optimism-governance/the-citizens-house-aa93f52c.svg',
      '/images/optimism-governance/governance-seasons-4ebc291c.svg',
      '/images/optimism-governance/shaping-an-optimistic-future-a5e03d45.svg'
    ],
    slides: [
      {
        type: 'LEARN',
        notionId: '294b4adc1d4244a2adbcca6793f15bb6',
        title: 'Old Problems, New Tools',
        content: '<div class="bloc1"><p>Modern technology has drastically changed the way in which humans view and interact with each other. On the world stage, and in a borderless cyberspace, we need new coordination models in order to coexist and thrive as a global tribe.</p><p>The vision of <code>DAO</code> technology is to streamline problem-solving and debate between a large number of collaborators — whether on the internet, in your local community, or on an international scale. This is done by:</p><ul><li>Incentivizing participants to share a common mission.</li><li>Innovative voting, <code>delegation</code>, and <code>veto</code> mechanics.</li><li>Using blockchain technology to decrease the potential for human error or hijacking.</li></ul></div><div class="bloc2"><img src=\'/images/optimism-governance/old-problems-new-tools-df0ceb84.svg\'></div>'
      },
      {
        type: 'LEARN',
        notionId: '303f183f27b147abbb1e964bd5468fbe',
        title: 'Network Governance',
        content: '<div class="bloc1"><p>Like any traditional nation-state with resources and participants, a DAO uses a governance process to steer the deployment of its resources and achievement of its mission. It’s like a town hall, but <code>asynchronous</code>, global, and partially mediated by code.</p><p>📜 <strong>Proposal:</strong> It begins with a governance proposal and community discussion. The proposal is updated based on public feedback. Anyone can submit a proposal, or critique one. This is the ‘decentralized’ part of ‘<code>DAO</code>’.</p><p>🗳️ <strong>Vote:</strong> The proposal moves to a vote — hosted via the transparent, censorship-resistant process of <code>onchain governance</code>. There is zero human facilitation between vote open and close; It is all mediated by code. This is the ‘autonomous’ part of ‘<code>DAO</code>’ — a quality envisioned to eventually cover the entire governance process.</p><p>🛠️ <strong>Implementation:</strong> The approved proposal is applied to the network, by various incentivized developers if necessary.</p></div><div class="bloc2"><img src=\'/images/optimism-governance/network-governance-1f940de4.svg\'></div>'
      },
      {
        type: 'QUIZ',
        notionId: '0c36d5b26fb74ac4838392c18bd884f7',
        title: '✅ Knowledge Check',
        quiz: {
          question: 'How can onchain governance help to solve interhuman debate?',
          rightAnswerNumber: 4,
          answers: [
            'Automation',
            'Transparency',
            'Censorship-resistance',
            'All of the above'
          ],
          feedback: [
            'ℹ️ This is true, but it isn’t the only answer.',
            'ℹ️ This is true, but it isn’t the only answer.',
            'ℹ️ This is true, but it isn’t the only answer.',
            'ℹ️ Correct! Onchain governance protects the voting process through multiple means.'
          ],
          id: 'optimism-governance-1'
        }
      },
      {
        type: 'LEARN',
        notionId: 'f7ca353f75f142fabf75986d54d9423d',
        title: 'The Optimism Network',
        content: '<div class="bloc1"><p><code>DAOs</code> like the Optimism Collective are at the frontier of exploring such coordination systems.</p><p>In this lesson, we will explore how Optimism is pioneering the DAO vision. We will learn about their mission, and how they’re building new coordination frameworks for humanity.</p><p>Our quest will focus on claiming our first voting rights, so we’ll be ready to help build the future of Ethereum and human coordination!</p></div><div class="bloc2"><img src=\'/images/optimism-governance/the-optimism-network-3e75a5a7.svg\'></div>'
      },
      {
        type: 'LEARN',
        notionId: 'a3b50457cfec4f56ba8416403ebfb35e',
        title: 'The Optimistic Vision',
        content: '<div class="bloc1"><p>Optimism is on a mission: to scale Ethereum by building a <code>Layer 2</code> network. It’s part of the Ethereum ecosystem, but with lower fees and faster transactions — while maintaining Ethereum’s high standard of security. Here are the defining properties:</p><p>🏕️ <strong>Public Goods:</strong> Great emphasis on funding and building onchain <code>public goods</code>. A public good is something that benefits everyone in a community, while one person\'s use of it doesn\'t reduce its availability for others. Your free education at Bankless Academy has been made possible through Optimism’s support of public goods!</p><p>🧑‍🤝‍🧑 <strong>Community Governance:</strong> The network is lead by its community.</p><p>🏠 <strong>Free Market:</strong> Launched as an extension of not just Ethereum <code>blockspace</code>, but of Ethereum principles. It aims to scale the permissionless, open-source, censorship-resistant marketplace of Ethereum.</p><p>Optimism aims to become a “district of cyberspace” that directly provides for — and is governed by — its citizens!</p></div>'
      },
      {
        type: 'QUIZ',
        notionId: '8a79a75d6b394b388eef7099620f2123',
        title: '✅ Knowledge Check',
        quiz: {
          question: 'Which of the following is NOT a public good?',
          rightAnswerNumber: 4,
          answers: [
            'Education',
            'The Internet',
            'Ethereum',
            'A Centralized Exchange'
          ],
          feedback: [
            'ℹ️ Education can benefit everyone, and one person’s use doesn’t reduce its availability.',
            'ℹ️ The internet can benefit everyone, and one person’s use doesn’t reduce its availability.',
            'ℹ️ Ethereum can benefit everyone, and — with Layer 2s — one person’s use doesn’t reduce its availability.',
            'ℹ️ Correct. While CEXs provide community benefits, they are private businesses.'
          ],
          id: 'optimism-governance-2'
        }
      },
      {
        type: 'LEARN',
        notionId: 'e5156a8e89684860bfd9a0d4adaf57d4',
        title: 'Progressive Decentralization',
        content: '<div class="bloc1"><p>Many great blockchain projects begin with a centralized group. This gives the project crucial focus in building and spending, but a <code>DAO</code> needs<strong> more than promises of decentralization</strong>. On Optimism, the founders, network, and community are thought of as follows:</p><ul><li>🏦 <strong>Optimism Foundation:</strong> The network founders. They kickstart the ecosystem, provide initial resources, and act as community steward, before eventually dissolving.</li><li>🌐 <strong>Optimism Network:</strong> The autonomous code on the blockchain — the smart contracts and processing of user input.</li><li>👬 <strong>Optimism Collective:</strong> The governing community; a diverse set of global participants. They are responsible for the long term ownership and management of the ecosystem. The term ‘DAO’ covers both the Collective and the Network.</li></ul><p>Legal checks and balances, such as the Collective’s ability to remove members of the Foundation, ensure slow <strong>transfer of network ownership to the community</strong>.</p></div><div class="bloc2"><img src=\'/images/optimism-governance/progressive-decentralization-e6e00611.svg\'></div>'
      },
      {
        type: 'QUIZ',
        notionId: 'c4212b5217b14096915d4128ff9e2864',
        title: '✅ Knowledge Check',
        quiz: {
          question: 'True or false? The Optimism Foundation will continue to guide the Optimism Collective over the network’s lifetime.',
          rightAnswerNumber: 2,
          answers: [
            'True',
            'False'
          ],
          feedback: [
            'ℹ️ Try again!',
            'ℹ️ Correct! The Foundation will eventually dissolve, and the Collective will continue the mission.'
          ],
          id: 'optimism-governance-3'
        }
      },
      {
        type: 'LEARN',
        notionId: 'c1ee570de27a49b58466df08e2637fab',
        title: 'A New Economy',
        content: '<div class="bloc1"><p>At the center of the Optimism <code>L2</code> economy is the <strong>‘Optimistic Flywheel’</strong>. This economic cycle generates revenue, network growth, and progress towards Optimism’s mission.</p><ol><li>Users and <code>dApps</code> demand network <code>blockspace</code>.</li><li>The network generates revenue via transaction fees.</li><li>A portion of these taxes are awarded to builders providing impactful public goods infrastructure.</li><li>Network users gain access to free resources and services, increasing the value of OP blockspace.</li></ol><p>With more valuable onchain infrastructure, demand for Optimism blockspace increases, and the cycle continues!</p></div><div class="bloc2"><img src=\'/images/optimism-governance/a-new-economy-cd0a0ca1.svg\'></div>'
      },
      {
        type: 'LEARN',
        notionId: 'd8361c4c3fd0403b9cc93a8eaee7a02d',
        title: 'Incentivizing Public Goods',
        content: '<div class="bloc1"><p>As you can see, <code>public goods</code> infrastructure is at the heart of Optimism. Yet selecting projects worthy of funding isn’t simple.</p><p>Here, Optimism takes an ‘<strong>Impact = Profit</strong>’ approach. Impact, however, is difficult to anticipate. Rather than making predictions, the funding body periodically looks over existing projects and assigns retroactive funding based on historic performance.</p><p>As Vitalik Buterin said,<br><em>“It’s easier to agree on what was useful than what will be useful.”</em></p><p>This distribution model is known as <strong>‘Retroactive Public Goods Funding’</strong>, or <strong>‘RetroPGF’</strong>. This funding mechanism incentivizes optimistic thinkers to build public goods that are of service to humanity. It liberates us from the value-extraction mindset of traditional capitalist economies.</p></div><div class="bloc2"><img src=\'/images/optimism-governance/incentivizing-public-goods-78035b95.svg\'></div>'
      },
      {
        type: 'LEARN',
        notionId: '9222dff9c1e04dd88b551b73ef70bd01',
        title: 'Ether’s Phoenix',
        content: '<div class="bloc1"><p>Optimism calls this effect <strong>‘Ether’s Phoenix’</strong>: an <em>“angel reaching backwards in time, rewarding those who summon it.”</em></p><p><em>“It is an algorithm that rewards the early cooperators who created conditions for public goods funding to prosper. It is a future where early investment in public goods is recognized. It is also a mindset: that optimism prevails, that better systems are possible, and that humankind will be rewarded for its cooperative revolution.”</em></p><p>— The Optimism Foundation</p></div><div class="bloc2"><img src=\'/images/optimism-governance/ethers-phoenix-f63f460c.svg\'></div>'
      },
      {
        type: 'QUIZ',
        notionId: '7d28449187374097a114d81829897f24',
        title: '✅ Knowledge Check',
        quiz: {
          question: 'How is Optimism incentivizing community-focused economics?',
          rightAnswerNumber: 3,
          answers: [
            'By rewarding all Optimism projects with retroactive funding.',
            'By providing a free market, but on the blockchain.',
            'By systemically funding business models that improve the lives of all network users.',
            'All of the above.'
          ],
          feedback: [
            'ℹ️ Try again! Rewarding all projects regardless of their mission is not Optimism’s approach.',
            'ℹ️ Try again! Use of blockchain technology alone doesn’t effect economic models.',
            'ℹ️ Correct! The network allocates a portion of transaction fees towards funding public goods.',
            'ℹ️ Try again! Only one of these is true.'
          ],
          id: 'optimism-governance-4'
        }
      },
      {
        type: 'LEARN',
        notionId: '6eb5a8e674ea4cd0b66eafe123fe33bf',
        title: 'Introducing the Governing Houses',
        content: '<div class="bloc1"><p>There are two houses that make up the Optimism Collective, each with independent and shared responsibilities in running the network.</p><p><strong>The Token House</strong> is responsible for managing network upgrades, incentives, and treasury. Its stakeholder structure incentivizes growth of the network economy, and generates stakeholder value. The house is also responsible for preserving decentralization — preventing capture of the network economy.</p><p><strong>The Citizens’ House</strong> allocates <code>RetroPGF</code> resources to community projects, according to the ‘Impact = Profit’ ethos, and helps decide the parameters of citizenship. The house is incentivized to improve network quality of life, by funding public goods that improve the value of citizenship!</p><p>Both houses maintain network balance through their duties, voting mechanics, and <code>veto</code> abilities. Let’s take a closer look.</p></div><div class="bloc2"><img src=\'/images/optimism-governance/introducing-the-governing-houses-bdcf1e8f.svg\'></div>'
      },
      {
        type: 'QUIZ',
        notionId: '8e07f95287444964888f89decf11c7c5',
        title: '✅ Knowledge Check',
        quiz: {
          question: 'How does the Citizens’ House differ from the Token House?',
          rightAnswerNumber: 2,
          answers: [
            'The Citizens’ House is the only house with veto abilities.',
            'The Citizens’ House allocates RetroPGF rewards.',
            'The Citizens’ House leads network decentralization.',
            'All of the above.'
          ],
          feedback: [
            'ℹ️ Try again! Both houses have veto powers.',
            'ℹ️ Correct! The Citizens’ House allocates public goods funding.',
            'ℹ️ Try again! Both houses maintain decentralization.',
            'ℹ️ Try again!'
          ],
          id: 'optimism-governance-5'
        }
      },
      {
        type: 'LEARN',
        notionId: '89ede93a609c44749d160eb02118dd2d',
        title: 'The Token House',
        content: '<div class="bloc1"><p>The Token House maintains the economy and defenses of the Optimism Network.</p><p>Duties include:</p><ul><li>⚒️ Review and approval of <strong>upgrades to network mechanics</strong>.</li><li>⛓️ Selection of network <code>block producers</code>.</li><li>📈 <strong>Allocation of revenue, </strong>using collected transaction fees to fuel network growth. </li></ul><p>To protect the network, the Citizens’ House has the right to <code>veto</code> any proposal under the above categories.</p><p>The Token House also has the ability to veto any proposal submitted by the Citizens’ House, or the Optimism Foundation, which is seen to be reducing rights of token holders.</p></div><div class="bloc2"><img src=\'/images/optimism-governance/the-token-house-7d73ce82.svg\'></div>'
      },
      {
        type: 'LEARN',
        notionId: 'f52d961f173846d99f66f081abf7ca94',
        title: 'Token House: Joining, Voting, Delegating',
        content: '<div class="bloc1"><p>📝 <strong>Joining:</strong> the Token House is done via purchasing and holding OP tokens. These are <code>ERC-20</code> tokens, and are therefore transferrable; They can be bought and sold on <code>CEXs</code>, Optimism <code>DEXs</code>, or sent between friends. OP tokens are not available on other networks.</p><p>🗳️ <strong>Voting:</strong> Voting power scales based on how many tokens are held.</p><p>The Token House follows <a href=\'https://community.optimism.io/docs/governance/token-house-history/\'>a five week voting cycle</a>:</p><ul><li>Week 1-3: Proposal submission, review, and feedback.</li><li>Week 4-5: Voting.</li></ul><p>📢 <strong>Delegating: </strong>Many users prefer to <code>delegate</code> their voting power to other token holders who they feel best represent the community’s interests. This is a great way to have an impact on the ecosystem without having to read every proposal that enters voting. Delegation does not affect token ownership — delegated OP tokens stay in your wallet.</p><p>Anyone can become a Token House delegate on Optimism, representing a group of friends, a community, or even a university’s blockchain club! Active delegates are often rewarded by the community.</p></div>'
      },
      {
        type: 'LEARN',
        notionId: '59421e43c5ef45c593a59ac74df413f6',
        title: 'A Note on Token Distribution…',
        content: '<div class="bloc1"><p>Network governance is only as democratic as its initial <code>token distribution</code>. We should always ask “who received voting power in the first place?” and “how much did they receive?”. </p><p>Check out the <a href=\'https://community.optimism.io/docs/governance/allocations/#allocations-at-a-glance\'>OP distribution plan</a> to see how the Optimism Foundation has allocated initial governance power, in service of balanced stakeholder representation.</p></div><div class="bloc2"><img src=\'/images/optimism-governance/a-note-on-token-distribution-cb74efa7.svg\'></div>'
      },
      {
        type: 'QUIZ',
        notionId: '06711dccc4c74d469b261f3f4508dac9',
        title: '✅ Knowledge Check',
        quiz: {
          question: 'How does the Token House protect the network from attack?',
          rightAnswerNumber: 4,
          answers: [
            'By selecting a diverse set of network block producers.',
            'By vetoing Optimism Foundation proposals seen to be reducing token holder rights.',
            'By carefully reviewing network upgrade proposals.',
            'All of the above.'
          ],
          feedback: [
            'ℹ️ This is true, but it isn’t the only answer.',
            'ℹ️ This is true, but it isn’t the only answer.',
            'ℹ️ This is true, but it isn’t the only answer.',
            'ℹ️ Correct! The Token House has a diverse set of responsibilities in protecting the network.'
          ],
          id: 'optimism-governance-6'
        }
      },
      {
        type: 'LEARN',
        notionId: '53f830416d224fada656ede4663bf238',
        title: 'The Citizens’ House',
        content: '<div class="bloc1"><p>The Citizens’ House conducts the growth of public infrastructure on the Optimism Network. It’s primary focus is managing Retroactive Public Goods Funding.</p><p>Duties include:</p><ul><li>🎯 <strong>Defining RetroPGF metrics and impact criteria</strong> for measuring project performance.</li><li>🔍 <strong>Research and allocation of RetroPGF</strong> to community projects which meet the guidelines.</li><li>👬 <strong>Selection of new citizens</strong> to help govern the Citizens’ House, and balance Token House perspective. The Token House has veto rights for this type of proposal.</li></ul><p>The Citizens’ House also ensures that Token House proposals are mission-aligned, using <code>veto</code> mechanics to waive unaligned changes to the network.</p></div><div class="bloc2"><img src=\'/images/optimism-governance/the-citizens-house-aa93f52c.svg\'></div>'
      },
      {
        type: 'LEARN',
        notionId: 'a16c3f8e9ef744bea542ceaee53d56f5',
        title: 'Citizens’ House: Joining, Voting, Delegating',
        content: '<div class="bloc1"><p>📝 <strong>Joining:</strong> The Citizens’ House currently adds members by invitation, to slowly scale and refine its processes. Membership is marked by holding a ‘Citizen Badge’.</p><p>The specifics of invitations change seasonally based on experimentation by the Optimism Foundation:</p><ul><li>Current Citizens may be granted an additional invitation, to be shared with someone they see as a great addition to the network.</li><li>Previous RetroPGF recipients have been granted the opportunity to select one community member for Citizen status.</li><li>The Optimism Foundation has issued Citizenship to project builders using the network.</li></ul><p>As the scaling methods are refined, growth will be automated via <code>onchain governance</code>.</p><p>🗳️ <strong>Voting:</strong> Each Citizen has a single vote. Their voting power cannot be transferred or delegated. This protects against gathering of House power under a small number of Citizens.</p><p>At present, RetroPGF distribution occurs roughly twice per year.</p></div>'
      },
      {
        type: 'QUIZ',
        notionId: '21573d5324144844afbef73f1f449656',
        title: '✅ Knowledge Check',
        quiz: {
          question: 'How does the Citizens’ House protect the network from attack?',
          rightAnswerNumber: 3,
          answers: [
            'By expanding the number of Citizens’ House members.',
            'By vetoing unaligned Token House proposals.',
            'Both of the above.'
          ],
          feedback: [
            'ℹ️ This is true, but it isn’t the only answer.',
            'ℹ️ This is true, but it isn’t the only answer.',
            'ℹ️ Correct! This house diversifies its own perspective, and balances Token House perspective.'
          ],
          id: 'optimism-governance-7'
        }
      },
      {
        type: 'LEARN',
        notionId: '0e4faf342a6e4d3e92dbdd745260c4ee',
        title: 'Governance Seasons',
        content: '<div class="bloc1"><p>Optimism takes <strong>an iterative approach to governance</strong>, using a calendar structure referred to as ‘Seasons’. </p><p>By moving between periods of active governance and reflection, participants gain firsthand experience followed by digestion and discussion of current governance practices. The model is then improved by the Optimism Foundation, and the next season begins.</p><p>On Optimism a season lasts roughly three months, followed by a reflection period of similar length.</p><p>These thoughtful feedback loops, built throughout Optimism’s systems, are incredibly important for building governance best practices in <code>DAO</code> communities.</p></div><div class="bloc2"><img src=\'/images/optimism-governance/governance-seasons-4ebc291c.svg\'></div>'
      },
      {
        type: 'LEARN',
        notionId: '85b015b76e6547e89e96f80539500cf6',
        title: 'Now… Think Even Bigger!',
        content: '<div class="bloc1"><p>We’re almost ready to govern on Optimism 🔴. There’s one last thing to mention.</p><p>The Optimistic Vision doesn’t stop at a single <code>L2</code> blockchain. As result of the ability to <code>fork</code> a blockchain, this is a cloneable governance experiment. This technology is built to be scaled across multiple L2s — and even into real world governance scenarios. Optimism calls this <strong>‘The Superchain’</strong>.</p><p>Coinbase, a prominent <code>CEX</code>, has already forked and started contributing to this <code>open source</code> initiative, through the Base 🔵 L2 blockchain. This collaborative pooling of development resources increases infrastructure evolution, while funneling L2 transaction fees towards Optimism’s ‘Impact = Profit’ ethos.</p><p>RetroPGF rewards now include profits from Base 🔵 transaction fees — which means more funding for <code>public goods</code>!</p></div>'
      },
      {
        type: 'LEARN',
        notionId: '172e6effe6c1431883423ccb1c792cce',
        title: 'Shaping an Optimistic Future',
        content: '<div class="bloc1"><p>History has always been paved by the optimists of humanity — those that dared to think big, and act to achieve their vision.</p><p>By getting involved in innovative communities, using <code>trustless</code> and fair governance systems, we are trailblazing the future of human coordination. We are building a world where humanity can thrive in local, global, and online systems. It’s time to start our Optimism governance journey.</p><p>Today’s quest is <strong>to join the Token House and </strong><code>delegate</code><strong> our OP tokens</strong>.</p><p>While the Citizens’ House develops its onboarding procedures, we can begin our Citizen journey by participating in conversation on the <a href=\'https://gov.optimism.io/\'>Optimism community</a> forums.</p></div><div class="bloc2"><img src=\'/images/optimism-governance/shaping-an-optimistic-future-a5e03d45.svg\'></div>'
      },
      {
        type: 'QUEST',
        title: 'Optimism Governance Quest',
        component: 'OptimismGovernance'
      }
    ]
  },
  {
    badgeImageLink: null,
    lessonImageLink: '/images/delegating-on-optimism/lesson-c7de529d.png',
    socialImageLink: '/images/delegating-on-optimism/social-627dbddb.png',
    learningActions: '',
    marketingDescription: 'Grant your OP voting power to people closely following governance.',
    badgeId: null,
    collectibleId: 'H005',
    duration: null,
    learnings: '',
    description: 'Grant your OP voting power to people closely following governance.',
    name: 'Delegating on Optimism',
    languages: [
      'cn',
      'de',
      'es',
      'fr',
      'jp'
    ],
    lessonWriters: 'Tetranome',
    publicationStatus: 'publish',
    publicationDate: '2023-09-07',
    featuredOrderOnHomepage: null,
    isCommentsEnabled: false,
    endOfLessonRedirect: null,
    mirrorLink: 'https://mirror.xyz/banklessacademy.eth/INead5MxCJbHMVb9lDDSzs3VA1DCAU9SCc4AIdhC58k',
    mirrorNFTAddress: '0xa22ed08b4ed3a34ce5c1802748ed8b294f3ec926',
    areMirrorNFTAllCollected: false,
    sponsorName: 'Optimism',
    sponsorLogo: '/images/delegating-on-optimism/sponsor-0dd2870b.png',
    isArticle: true,
    notionId: 'df539538fc644069a413207a35ba444c',
    englishName: 'Delegating on Optimism',
    slug: 'delegating-on-optimism',
    articleContent: '## Key Takeaways\n\n> * Delegation is a voting mechanic that allows a representative — called a ‘Delegate’ — to make votes on another person’s behalf.\n>\n> * Optimism handles voting and delegation via their ‘Optimism Agora’ `dApp`.\n>\n> * You will maintain self-custody over delegated OP tokens, able to transfer or sell at any time.\n\n## Introduction\n\nDelegation is an onchain voting mechanic that allows a community member to temporarily grant their governance voting power to a community representative. This process allows a user to contribute to `network governance`, without having to actively monitor every proposed action or change in the ecosystem.\n\nOn Optimism, governance power is represented by holding OP tokens in a self-custody wallet. OP tokens do not leave your self-custody wallet during delegation. You can transfer or sell them at any time, but your Delegate will only receive the voting power held in your wallet. You can change your community Delegate at any time.\n\nOn Optimism we use a voting dApp called ‘Agora’ to look through eligible Delegates, perform delegation, and monitor proposals. Let’s take a closer look.\n\n## Prerequisites\n\nIf you want to hold voting power, you’ll need to purchase OP tokens. You can continue without completing these two steps if you simply want to set up delegation.\n\n**1\. Buy ETH on the Optimism Network.**\n\nYou can find a step-by-step guide in our Explorer’s Handbook entry, [‘How to fund a Wallet on Layer 2’](https://app.banklessacademy.com/lessons/how-to-fund-a-wallet-on-layer-2).\n\n**2\. Swap your ETH to OP tokens on the Optimism Network, using a** `DEX`.\n\nCheck out our Explorer’s Handbook entry on [‘How to Swap on a Decentralized Exchange’](https://app.banklessacademy.com/lessons/how-to-swap-on-a-decentralized-exchange) for a step-by-step guide on using a DEX to buy OP tokens.\n\n## Delegating on Optimism Agora\n\n**1\. Open the Optimism Agora dApp: <https://vote.optimism.io/>**\n\n![](/images/delegating-on-optimism/image-ce643a81.png)\n\n**2\. Connect your wallet.**\n\n![](/images/delegating-on-optimism/image-9ec06fe9.png)\n\n**3\. Scroll down, and choose your favorite Delegate.**\n\nBy clicking on a delegate, you will find a short statement, their vote history, and influence measurements. Take your time to find a representative that aligns with your vision for Optimism.\n\n![](/images/delegating-on-optimism/image-6443ae02.png)\n\n**4\. Hit the ‘delegate’ button, and approve the transaction in your wallet.**\n\nNo OP tokens will leave your wallet throughout this process. There is a small gas fee, charged in ETH.\n\n![](/images/delegating-on-optimism/image-245809cd.png)\n\n\n---\n\nIt’s time to explore better voting systems. We hope you’ve enjoyed this entry in the Explorer’s Handbook: ‘Delegating on Optimism’.\n\nDon’t forget to collect this entry if you want to own a copy for easy reference on your travels, or to support future content at Bankless Academy. Safe travels, Explorer!\n\n\n---\n\n## Frequently Asked Questions\n\n### How many tokens do I need to delegate?\n\nYou can begin delegating while holding any amount of OP tokens — even zero! As you increase or decrease your OP holdings, your delegated voting power will be updated. You don’t have to redelegate every time you make changes to your OP holdings.\n\n### How do I choose the right delegate?\n\nIt comes down to your personal values, and your vision for how you want to see Optimism grow. Take some time to scroll through the Delegate profiles and see what resonates with you.\n\n### Can I become a Delegate?\n\nYou can! Check out the [‘How to be a delegate’](https://community.optimism.io/docs/governance/delegate/) guide, hosted on Optimism Docs.\n\nNote: this won’t count for the [‘Optimism Governance’](https://app.banklessacademy.com/lessons/optimism-governance) lesson quest at Bankless Academy.\n\n### Do I need to delegate to vote?\n\nYou can skip delegation and represent yourself by tracking votes under the ‘Proposals’ tab on Optimism Agora.\n\nNote: this also won’t count for the [‘Optimism Governance’](https://app.banklessacademy.com/lessons/optimism-governance) lesson quest at Bankless Academy, but you can do so once you’ve collected your badge!\n\n\n---\n\n**Author**\n\n[Tetranome](https://twitter.com/Tetranome) is the Project Champion at Bankless Academy, focusing on user experience, interface, design, and content.\n\n**Patron**\n\nThis article was funded by [Optimism](https://www.optimism.io/).',
    imageLinks: [
      '/images/delegating-on-optimism/image-ce643a81.png',
      '/images/delegating-on-optimism/image-9ec06fe9.png',
      '/images/delegating-on-optimism/image-6443ae02.png',
      '/images/delegating-on-optimism/image-245809cd.png'
    ]
  }
]

export default LESSONS
