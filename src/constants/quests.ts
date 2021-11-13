import { QuestType } from 'entities/quest'

const QUESTS: QuestType[] = [
  {
    poapImageLink:
      'https://storage.googleapis.com/poapmedia/bankless-academy-wallet-basic-2021-logo-1630062990990.png',
    learningActions:
      'Create and manage your own wallet<br>Connect your wallet to a web3 website',
    knowledgeRequirements: 'No prior knowledge needed.',
    poapEventId: 6454,
    duration: 15,
    learnings:
      'Why do you need a wallet?<br>What is a wallet?<br>What are keys?<br>How do I protect your keys?<br>Wallet Security<br>Custodial vs non-custodial wallets',
    difficulty: 'Easy',
    description: 'Learn how to create and manage a wallet securely.',
    name: 'Wallet Basics',
    notionId: '98405bd0f2b94bb2a3079eed504a011e',
    slug: 'wallet-basics',
    slides: [
      {
        type: 'LEARN',
        title: 'Why do you need a wallet?',
        content:
          '<div class="bloc2"><iframe src=\'https://www.youtube.com/embed/YVgfHZMFFFQ?feature=oembed\'></iframe><p>TODO: create a similar video ourself</p></div>',
      },
      {
        type: 'LEARN',
        title: 'What is a wallet? ',
        content:
          '<div class="bloc1"><p>Typically, we associate wallets with money storage. In crypto sphere a “wallet” is a metaphor, for technology that functions as a lock box, holding your access to the <span class="tooltip" definition="A peer to peer (P2P) network of computers instead of a single computer." style="color:rgba(128, 128, 128, 1)">blockchain</span>.</p><p>A simple definition of a wallet is an application or device used to interact with a blockchain.</p><p>When a wallet interacts with a blockchain, one can make purchases, transfer assets, interact with applications, and more!</p></div><div class="bloc2"><iframe src=\'https://embed.lottiefiles.com/animation/70066\'></iframe></div>',
      },
      {
        type: 'QUIZ',
        title: 'What is a wallet?',
        quiz: {
          rightAnswerNumber: 4,
          answer_1: 'A device equipped with RFID technology',
          answer_2: 'A bi-fold device',
          answer_3: 'An account that protects my assets',
          answer_4: 'An app or device used to interact with a blockchain.',
          id: 'wallet-basics-1',
        },
      },
      {
        type: 'LEARN',
        title: 'What is a recovery phrase?',
        content:
          '<div class="bloc1"><p>When you create a <span class="tooltip" definition="A wallet is an application or device used to send and receive crypto assets on the blockchain." style="color:rgba(128, 128, 128, 1)">wallet</span>, a <span class="tooltip" definition="A recovery phrase is a list of 12 to 24 words which is used to generate your wallet\'s public key and private key." style="color:rgba(128, 128, 128, 1)">recovery phrase</span> is also created that is specific to that wallet.</p><p>It stores the information that can be used to recover your wallet and crypto if:</p><ul><li>your wallet fails unexpectedly or gets damaged;</li><li>you are unable to access it due to misplacement or theft;</li></ul><p>Most recovery phrases are a list of 12 to 24 words. They represent a single secret piece of data that is used to generate pairs of <span class="tooltip" definition="A public key is your address. It gives others a point of reference to send crypto assets to you." style="color:rgba(0, 120, 223, 1)">public keys</span> and <span class="tooltip" definition="A private key allows access to your wallet in order for you to send crypto assets to other address." style="color:rgba(255, 0, 26, 1)">private keys</span> for your wallet.</p><p>This same <span class="tooltip" definition="A recovery phrase is a list of 12 to 24 words which is used to generate your wallet\'s public key and private key." style="color:rgba(128, 128, 128, 1)">recovery phrase</span> can actually be used to access your wallet on different devices.</p><ul><li>Your recovery phrase can also be called a seed phrase or a secret recovery phrase</li></ul></div><div class="bloc2"><img src=\'https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fe57e2d52-a97e-42de-aeaf-e0b26a66e8ae%2F0_u4mBi5vxWeCTLwMP.png?table=block&id=c1ce45e2-d20d-4cd9-bde3-150e923e5d21\'></div>',
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
        title: 'What are keys?',
        content:
          '<div class="bloc1"><p>A wallet can have multiple accounts and each account has a unique pair of keys. There is a <span class="tooltip" definition="A public key is your address. It gives others a point of reference to send crypto assets to you." style="color:rgba(0, 120, 223, 1)">public key</span> and a <span class="tooltip" definition="A private key allows access to your wallet in order for you to send crypto assets to other address." style="color:rgba(255, 0, 26, 1)">private key</span> for each account.</p></div><div class="bloc2"><img src=\'https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F020c645b-001c-42d6-bc94-f47fe4e91074%2F16_0.png?table=block&id=cc950ac3-b833-4bf0-bf5e-a64fe1201874\'></div>',
      },
      {
        type: 'LEARN',
        title: 'What are keys?',
        content:
          '<div class="bloc1"><p>You can think of the <span class="tooltip" definition="A public key is your address. It gives others a point of reference to send crypto assets to you." style="color:rgba(0, 120, 223, 1)">public key</span> like your home address.</p><p>It\'s called public because anyone can see it.</p><p>Public keys allow others to identify you in order to send crypto assets to your address.</p></div>',
      },
      {
        type: 'LEARN',
        title: 'What are keys?',
        content:
          '<div class="bloc1"><p>If your <span class="tooltip" definition="A public key is your address. It gives others a point of reference to send crypto assets to you." style="color:rgba(0, 120, 223, 1)">public key</span> is like your home address, then your <span class="tooltip" definition="A private key allows access to your wallet in order for you to send crypto assets to other address." style="color:rgba(255, 0, 26, 1)">private key</span> is like your house key.</p><p>It\'s called private because <em><strong>only you</strong></em> want access to it.</p><p>Private keys allow you access to your wallet in order for you to send crypto assets out to others.</p></div>',
      },
      {
        type: 'LEARN',
        title: 'What are keys?',
        content:
          '<div class="bloc1"><p>When creating a wallet, <span class="tooltip" definition="A public key is your address. It gives others a point of reference to send crypto assets to you." style="color:rgba(0, 120, 223, 1)">public keys</span> and <span class="tooltip" definition="A private key allows access to your wallet in order for you to send crypto assets to other address." style="color:rgba(255, 0, 26, 1)">private keys</span> are automatically generated.</p><p>Remember <em><strong>each account</strong></em> has its own pair of keys and you can think of the public key like your home address and your private key is like your house key.</p></div>',
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
        type: 'LEARN',
        title: 'Not your keys, not your crypto!',
        content:
          '<div class="bloc1"><p>Recall that private keys let you access your <span class="tooltip" definition="A wallet is an application or device used to send and receive crypto assets on the blockchain." style="color:rgba(128, 128, 128, 1)">wallet</span> to send crypto. In almost all cases, you want to own and secure your wallet’s private key.</p><p>But not all wallets will let you do that. With a <span class="tooltip" definition="With a custodial wallet, another party controls the private keys, thus controlling access to your crypto assets." style="color:rgba(255, 0, 26, 1)">custodial wallet</span>, another party controls your private keys.</p><p>You’re trusting a third party to secure your funds and return them to you if you want to trade or send them somewhere else.</p><p>Think of your account on Coinbase Exchange or Kraken Exchange are examples of custodial wallets.</p></div><div class="bloc2"><img src=\'https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fabda02b7-850e-4f4b-9fcc-637330046e92%2F0_q_FQ4P0pA0PopIqx.png?table=block&id=ff0def71-b130-4854-a008-3b22ec448bc5\'></div>',
      },
      {
        type: 'LEARN',
        title: 'Not your keys, not your crypto!',
        content:
          '<div class="bloc1"><p>With a <span class="tooltip" definition="With a non-custodial wallet, you have sole control of your private keys, which in turn control your crypto assets." style="color:rgba(0, 135, 107, 1)">non-custodial wallet</span>, you have sole control of your private keys, which in turn control your crypto.</p><p>Remember, not your keys, not your crypto! That means that if you don’t control the keys of the wallet, you don’t control the crypto.</p></div><div class="bloc2"><img src=\'https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F2ba92a8d-c83e-46ad-9807-f7f19c4bac4e%2Fproof-of-keys-bitcoin.png?table=block&id=c5c20539-c091-4f5e-84b6-e8335f6f846a\'></div>',
      },
      {
        type: 'QUIZ',
        title: 'I control my private keys with a custodial wallet',
        quiz: {
          rightAnswerNumber: 2,
          answer_1: 'True',
          answer_2: 'False',
          id: 'wallet-basics-4',
        },
      },
      {
        type: 'LEARN',
        title: 'Protect your keys, protect your crypto!',
        content:
          '<div class="bloc1"><p>Since there is no third party involved in a <span class="tooltip" definition="With a non-custodial wallet, you have sole control of your private keys, which in turn control your crypto assets." style="color:rgba(0, 135, 107, 1)">non-custodial wallet</span>, you are solely responsible for your keys.</p><p>You must take your own precautions to protect your funds.</p><p>If you lose your <span class="tooltip" definition="A private key allows access to your wallet in order for you to send crypto assets to other address." style="color:rgba(255, 0, 26, 1)">private key</span>, you can no longer access your wallet to spend, withdraw, or transfer your crypto. Your wallet is GONE FOREVER!!!</p><p>Therefore, it is imperative to save the private key in a secure location and on a durable material </p></div><div class="bloc2"><img src=\'https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F559e242d-4fa2-4fe6-8bb5-06996c6326c2%2FCopy-of-9-security-Tips-Infographic-1_1-1-min.png?table=block&id=4e2fa103-b50a-41e6-b1fc-964e4d6a7bd4\'></div>',
      },
      {
        type: 'QUIZ',
        title:
          'I am solely responsible for my private keys with a non-custodial wallet',
        quiz: {
          rightAnswerNumber: 1,
          answer_1: 'True',
          answer_2: 'False',
          id: 'wallet-basics-5',
        },
      },
      {
        type: 'LEARN',
        title: 'How do I protect my crypto?',
        content:
          '<div class="bloc1"><h2>The 5 most effective ways to protect your keys and recovery phrase:</h2></div><div class="bloc2"><img src=\'https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F3388312b-548e-49b4-be1c-ca48431aab9b%2Fwww.notion.so_bankless_Wallet-Basics-98405bd0f2b94bb2a3079eed504a011e.png?table=block&id=9010df5a-966e-45e2-9b41-3c6cd6729a38\'></div>',
      },
      {
        type: 'QUIZ',
        title:
          'Which of this method is <strong>the safest way</strong> to store your private keys?',
        quiz: {
          rightAnswerNumber: 4,
          answer_1: 'Save it on my computer and print it on piece of paper.',
          answer_2:
            'Take a screenshot or a picture of the private key on my phone.',
          answer_3:
            'Save it in my Dropbox account or any similar cloud service.',
          answer_4:
            'Write it on a piece of paper or durable material and store it in a safe place.',
          id: 'wallet-basics-6',
        },
      },
      {
        type: 'LEARN',
        title: 'Types of non-custodial wallets',
        content:
          '<div class="bloc1"><p>There are 2 major types of <span class="tooltip" definition="With a non-custodial wallet, you have sole control of your private keys, which in turn control your crypto assets." style="color:rgba(0, 135, 107, 1)">non-custodial wallets</span> : <span class="tooltip" definition="A type of non-custodial wallet that is perpetually connected to the internet." style="color:rgba(255, 0, 26, 1)">hot wallets</span> and <span class="tooltip" definition="A type of non-custodial wallet that is stored offline and does not require a perpetual internet connection." style="color:rgba(0, 120, 223, 1)">cold wallets</span></p><p>A <span class="tooltip" definition="A type of non-custodial wallet that is perpetually connected to the internet." style="color:rgba(255, 0, 26, 1)">hot wallet</span>Perpetually connected to the internet.</p><ul><li>PROS 👍: They are usually free, simple to set up, and easy to use.</li><li>CONS 👎: They are less secure due to internet connection.</li></ul><p>A <span class="tooltip" definition="A type of non-custodial wallet that is stored offline and does not require a perpetual internet connection." style="color:rgba(0, 120, 223, 1)">cold wallet</span>is <strong>never</strong> connected to the internet.</p><ul><li>PROS 👍: They are more secure.</li><li>CONS 👎: They aren\'t free, sometimes cumbersome to use, and are not ideal for quick transactions.</li></ul></div><div class="bloc2"><img src=\'https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fab788f0c-0b84-4101-ac1d-3728d5d82385%2FWhat-is-a-hardware-wallet-1.jpg?table=block&id=57d7c66a-31d5-4586-9828-1d6068963a85\'></div>',
      },
      {
        type: 'QUIZ',
        title: 'A cold wallet is more secure than a hot wallet',
        quiz: {
          rightAnswerNumber: 1,
          answer_1: 'True',
          answer_2: 'False',
          id: 'wallet-basics-7',
        },
      },
      {
        type: 'LEARN',
        title: 'MetaMask Wallet',
        content:
          '<div class="bloc1"><p>MetaMask is one of many non-custodial hot wallets</p><ul><li>It is a widely used wallet with over 5 million monthly active users so it is more likely to be compatible with your preferred <span class="tooltip" definition="An abbreviation for decentralized finance, defi is a system by which financial products become available on a public decentralized blockchain network" style="color:rgba(128, 128, 128, 1)">DeFi</span> apps.</li><li>A browser extension is available on Chrome, Brave, Edge, and Firefox internet browsers.</li><li>Also available as mobile app for Android and IOS users.</li></ul></div><div class="bloc2"><img src=\'https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F46078cc2-f25a-458a-aaca-a59e5cb6ebc6%2FScreen_Shot_2021-08-21_at_15.28.09.jpg?table=block&id=205259fd-e6f7-4e6e-8fce-ade870c718b3\'></div>',
      },
      {
        type: 'QUIZ',
        title: 'MetaMask is a custodial wallet',
        quiz: {
          rightAnswerNumber: 2,
          answer_1: 'True',
          answer_2: 'False',
          id: 'wallet-basics-8',
        },
      },
      {
        type: 'LEARN',
        title: 'How to setup a MetaMask wallet',
        content:
          '<div class="bloc1"><p>For convenience and ease of access throughout this course, you will need a MetaMask wallet. Next we will demonstrate how to set up a MetaMask wallet.</p><p>Download the browser extension from the official website: <a href=\'https://metamask.io/download\'>https://metamask.io/download</a></p></div><div class="bloc2"><iframe src=\'https://www.youtube.com/embed/pGO8WhDZlMo\'></iframe><p>TODO: move this as the quest</p></div>',
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
      'https://storage.googleapis.com/poapmedia/bankless-academy-intro-to-defi-2021-logo-1630063060767.png',
    learningActions:
      'Transfer crypto into your web3 wallet in order to be ready to interact with DeFi later',
    knowledgeRequirements: 'Wallet Basics: how to manage a web3 wallet',
    poapEventId: 6455,
    duration: 10,
    learnings:
      'What is Defi?<br>How DeFi works<br>The DeFi stack<br>The security layer<br>What are the possibilities with DeFi',
    difficulty: 'Easy',
    description: 'Understand the basics of Decentralized Finance',
    name: 'Intro to DeFi',
    notionId: 'fdbf6e4c2ad648c6b815137d0e05eb90',
    slug: 'intro-to-defi',
    slides: [
      {
        type: 'LEARN',
        title: 'What is DeFi?',
        content:
          '<div class="bloc1"><ul><li>DeFi is an abbreviation for decentralized finance. It is a system by which financial products become available on a public decentralized blockchain network.</li><li>The nature of decentralization utilizes peer-to-peer transactions, enabling anyone to use DeFi permissionlessly. No one is excluded from participating due to age, gender, location, nationality, income level, religion, race, etc.</li><li>Peer-to-peer transaction are conducted directly between 2 parties, rather than using middlemen like exchanges, banks, or brokerages.</li><li>The skill cube is our map of the DeFi ecosystem. The objective: to maximize crypto wealth and go bankless.</li></ul></div><div class="bloc2"><img src=\'https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F719d145c-f19f-4a0c-b643-a8ee9215a17e%2Fskill_cube.png?table=block&id=876afc7c-44ae-40c4-ac71-b76dacfa6334\'></div>',
      },
      {
        type: 'QUIZ',
        title: '<strong>What is DeFi?</strong>',
        quiz: {
          rightAnswerNumber: 2,
          answer_1: '[A] A decentralized blockchain of financial products',
          answer_2: 'Both A and B',
          answer_3: '[B] Acronym for decentralized finance',
          answer_4: 'None of the above',
          id: 'intro-to-defi-1',
        },
      },
      {
        type: 'LEARN',
        title: 'How Defi works',
        content:
          '<div class="bloc1"><ul><li><span class="tooltip" definition="An abbreviation for decentralized finance, defi is a system by which financial products become available on a public decentralized blockchain network" style="color:rgba(128, 128, 128, 1)">DeFi</span> revolves around decentralized applications, also known as <span class="tooltip" definition="Digital applications or programs that exist and run on a blockchain, and are outside the purview and control of a single authority." style="color:rgba(128, 128, 128, 1)">DApps</span></li><li>DApps are digital applications or programs that exist and run on a blockchain.<span class=\'color-yellow\'> </span>They are outside the purview and control of a single authority.</li><li><span class="tooltip" definition="Digital applications or programs that exist and run on a blockchain, and are outside the purview and control of a single authority." style="color:rgba(128, 128, 128, 1)">DApps</span> are typically accessed through a <span class="tooltip" definition="Refers to dApps that run on the blockchain and allow anyone to participate without monetizing their personal data." style="color:rgba(128, 128, 128, 1)">Web3</span> enabled browser extension or application, such as MetaMask</li><li>Web3 refers to <span class="tooltip" definition="Digital applications or programs that exist and run on a blockchain, and are outside the purview and control of a single authority." style="color:rgba(128, 128, 128, 1)">DApps</span> that run on the blockchain and allow anyone to participate without monetizing their personal data.</li></ul></div><div class="bloc2"><img src=\'https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F62e0a78b-f5fa-44a3-aaf0-ea8dfe7108a5%2FUntitled.png?table=block&id=50814057-6c60-4cdc-94fb-276f2c648e87\'></div>',
      },
      {
        type: 'QUIZ',
        title: '<strong>What is a common way to engage with DApps?</strong> ',
        quiz: {
          rightAnswerNumber: 1,
          answer_1: 'MetaMask',
          answer_2: 'Apple Pay',
          answer_3: 'Cash App',
          answer_4: 'PayPal',
          id: 'intro-to-defi-2',
        },
      },
      {
        type: 'LEARN',
        title: 'What can you do with DeFi',
        content:
          '<div class="bloc1"><ul><li>The skill cube contains all the money verbs. </li><li>Money Verbs are the things you can do in legacy finance, but more efficiently in DeFi because there is no middleman. </li><li>Instead of paying the middleman, you can pay yourself! </li></ul></div><div class="bloc2"><img src=\'https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F0670f557-ad79-4d1c-ad80-8bd70ff5af6e%2Fhttps___bucketeer-e05bbc84-baa3-437e-9518-adb32be77984.s3.amazonaws.com_public_images_84b02006-3141-4b62-b1e9-009739064efb_896x690.png?table=block&id=c38a341a-3f8d-41a8-9332-7fe46427e4b0\'></div>',
      },
      {
        type: 'QUIZ',
        title: '<strong>Why is DeFi more efficient?</strong>',
        quiz: {
          rightAnswerNumber: 1,
          answer_1: 'because there is no middleman',
          answer_2: 'because there is a middleman',
          answer_3: 'lower brokerage fees',
          answer_4: 'all of the above',
          id: 'intro-to-defi-3',
        },
      },
      {
        type: 'QUIZ',
        title: '<strong>Which of these are not money verbs?</strong> ',
        quiz: {
          rightAnswerNumber: 2,
          answer_1: 'stake',
          answer_2: 'profit',
          answer_3: 'spend',
          answer_4: 'bet',
          id: 'intro-to-defi-4',
        },
      },
      {
        type: 'LEARN',
        title: 'What can you do with DeFi - Hold',
        content:
          '<div class="bloc1"><ul><li>Crypto prices are highly volatile, they go up and down. </li><li><strong>HODL</strong> is an acronym for <strong>H</strong>old <strong>O</strong>n for <strong>D</strong>ear <strong>L</strong>ife</li><li>The HODL mentality is the idea of retaining assets even through short to medium term price fluctuations. By holding long term, the HODLer experiences more price appreciation. </li></ul></div><div class="bloc2"><img src=\'https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fc025c790-c443-4f1e-8822-7b84d4056e7c%2FScreen_Shot_2021-08-27_at_13.33.32.jpg?table=block&id=f55a7a41-7fd2-4424-bbee-ee28cac9e17c\'></div>',
      },
      {
        type: 'QUIZ',
        title: '<strong>What does hodl stand for?</strong>',
        quiz: {
          rightAnswerNumber: 3,
          answer_1: 'have your oppressive dreams linger',
          answer_2: "hold on and don't lose",
          answer_3: 'hold on for dear life',
          answer_4: 'have outstanding debt liable',
          id: 'intro-to-defi-5',
        },
      },
      {
        type: 'LEARN',
        title: 'What can you do with DeFi - Lend/Borrow',
        content:
          '<div class="bloc1"><ul><li>In DeFi, anyone can borrow and anyone can become a lender.</li><li>DeFi lending and borrowing offers loans without the need for a bank or intermediary institution. Instead, lending is done on a peer-to-peer level.</li><li>Similar to traditional loans, a lender will earn interest on the loan and the borrower will need to pay the principal of the loan plus interest within a set amount of time.</li><li>Peer-to-peer loans means that long-term investors can earn interest from the loan and it enables users to access loans at lower rates with DeFi than if they went through exchanges or through traditional loans.</li></ul></div><div class="bloc2"><img src=\'https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fe76d6096-70a3-47b9-a0f8-a3dc644829b5%2FLending02.png?table=block&id=10a7dbff-1dbd-4b88-ae00-680b7ee69809\'></div>',
      },
      {
        type: 'QUIZ',
        title:
          '<strong>Which of these are </strong><strong><em>not</em></strong><strong> an example of DeFi lending?</strong>',
        quiz: {
          rightAnswerNumber: 3,
          answer_1: 'protocols to people',
          answer_2: 'peer-to-peer ',
          answer_3: 'banks to customers ',
          answer_4: 'people to protocols',
          id: 'intro-to-defi-6',
        },
      },
      {
        type: 'LEARN',
        title: 'What can you do with DeFi: Stake',
        content:
          '<div class="bloc1"><ul><li>Staking in Defi is similar to lending, however it\'s a special type of lending.</li><li>Instead of lending your crypto to another user on a peer-to-peer basis, you can lend your crypto to a network or protocol to help bolster its ability to process transactions.</li><li>In exchange for helping secure the network or protocol, you can earn rewards by staking.</li></ul></div><div class="bloc2"><img src=\'https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F2c8cb40e-82dd-4629-943a-5e2d790fd580%2Fstaking.png?table=block&id=e56f800c-bce5-49e3-b6aa-9ad554675f8b\'></div>',
      },
      {
        type: 'QUIZ',
        title:
          '<strong>Lending your crypto to a protocol to help bolster its ability to process transactions is an example of?</strong>',
        quiz: {
          rightAnswerNumber: 2,
          answer_1: 'Trading',
          answer_2: 'Staking',
          answer_3: 'Borrowing',
          answer_4: 'Lending',
          id: 'intro-to-defi-7',
        },
      },
      {
        type: 'LEARN',
        title: 'What can you do with DeFi: Spend',
        content:
          '<div class="bloc1"><ul><li>You can use your crypto in exchange for goods or services. Be aware that when you spend your crypto, you\'re transferring ownership and you are no longer exposed to price movement. </li><li>For example, in May 2010 a man paid 10,000 BTC, valued at $41, for 2 pizzas. In September 2021, that same 10,000 BTC was valued at $430M. </li><li>If the man would have HODL his BTC, he could have bought many more pizzas with $430M </li></ul></div>',
      },
      {
        type: 'QUIZ',
        title:
          'Can you<strong> use crypto in exchange for goods and services?</strong>',
        quiz: {
          rightAnswerNumber: 1,
          answer_1: 'True',
          answer_2: 'False',
          id: 'intro-to-defi-8',
        },
      },
      {
        type: 'LEARN',
        title: 'What can you do with DeFi: Invest',
        content:
          '<div class="bloc1"><ul><li>Equal opportunity does not exist in traditional finance. Investors may be limited due to time constraints, income levels, voting power, etc.</li><li>In DeFi, there are no preferred or common shareholders. Everyone has the same right to vote in governance.</li><li>Anyone can purchase any asset, you don\'t need a specified income level to purchase assets.</li><li>You can also invest anytime, anywhere in DeFi. You are not limited to trading during restricted hours or location</li></ul></div><div class="bloc2"><img src=\'https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F05db2fa5-888a-40e1-94e9-51bbcf2c3e38%2FUntitled.png?table=block&id=369a71a0-1e96-4420-91c2-d8eeaf0f8b4a\'></div>',
      },
      {
        type: 'QUIZ',
        title:
          '<strong>Which of these is true for investing with DeFi</strong><strong>?</strong>',
        quiz: {
          rightAnswerNumber: 1,
          answer_1: 'DeFi is open around the clock year round ',
          answer_2: 'You need to be an accredited investor to invest in DeFi',
          answer_3:
            'You can use your crypto in exchange for goods and services',
          answer_4: 'None of the above ',
          id: 'intro-to-defi-9',
        },
      },
      {
        type: 'LEARN',
        title: 'What can you do with DeFi: Earn',
        content:
          '<div class="bloc1"><ul><li>Earning in defi is when you<strong> </strong>do something of value in exchange for crypto rewards</li><li>The best thing is <strong>no upfront capital required</strong> for some earning actions</li><li>Examples include completing tasks for projects or participating in contests </li><li>You can claim a bounty and complete open tasks from DAOs and other projects</li></ul></div><div class="bloc2"><img src=\'https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Ffe922264-39e1-4d8a-851c-4831f179bdb5%2FDefi_Earn.png?table=block&id=da3fa7c1-cd72-4c13-9e80-240e8afb6bb0\'></div>',
      },
      {
        type: 'QUIZ',
        title:
          'Which of these action<strong> can you do to earn in DeFi</strong><strong>?</strong>',
        quiz: {
          rightAnswerNumber: 2,
          answer_1: 'Buying coins that use DeFi technology',
          answer_2: 'Completing tasks for projects',
          answer_3: 'Using your crypto in exchange for goods and services',
          answer_4: 'Trading bonds',
          id: 'intro-to-defi-10',
        },
      },
      {
        type: 'LEARN',
        title: 'What can you do with DeFi: Trade',
        content:
          '<div class="bloc1"><ul><li>DeFi lets you trade any asset in a peer-to-peer environment. There is no middleman and you don\'t need permission.</li><li>Trading cryptocurrency is also available on centralized exchanges. However, because they own your private keys, there\'s a greater risk of stolen funds, frozen accounts, and/or censored transactions. </li><li>Trading in DeFi is permissionless and available 24/7 globally with no restrictions for any reason including name, age, gender, location, race, religion, or anything. DeFi is completely open and free for anybody to use. </li></ul></div><div class="bloc2"><img src=\'https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F5af70635-303d-4322-9c4d-4d310631885b%2FScreenshot_from_2021-09-22_11-52-39.png?table=block&id=353ab56d-6820-4b10-a830-58c73a88d905\'></div>',
      },
      {
        type: 'QUIZ',
        title:
          '<strong>Crypto can only be traded during market hours? </strong>',
        quiz: {
          rightAnswerNumber: 1,
          answer_1: 'False ',
          answer_2: 'True',
          id: 'intro-to-defi-11',
        },
      },
      {
        type: 'LEARN',
        title: '<strong>Bet—</strong>risk and earn money by making a bet',
        content:
          '<div class="bloc1"><ul><li>A Bet is a Trade in a Cornered Market/ Traditionally in the dominant culture, betting is monopolized in a Cornered Market</li><li>In a Cornered Market like a casino, there is a predetermined risk of loss in favor of the middle man</li><li>In DeFi, when the middle man influence is reduced or removed risk of loss can be more fairly distributed or mitigated completely</li><li>Game Theory is used in DeFi to test and experiment with Community Owned and Governed Sports betting, Prediction Markets, and Lotteries.</li></ul></div><div class="bloc2"><img src=\'https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F71445ccc-c6d8-4ab7-966c-6dedc554e50c%2FScreenshot_from_2021-09-27_11-15-44.png?table=block&id=9efb6e85-f7de-40e7-aa00-5321150e9d74\'></div>',
      },
      {
        type: 'QUIZ',
        title:
          '<strong>What happens when the middle man influence is reduced or removed?</strong>',
        quiz: {
          rightAnswerNumber: 1,
          answer_1: 'None of the above',
          answer_2:
            'Risk of loss can be more fairly distributed or mitigated completely',
          answer_3:
            'There is a predetermined risk of loss in favor of the middle man',
          answer_4: "You'll lose money",
          id: 'intro-to-defi-12',
        },
      },
      {
        type: 'QUEST',
        title: 'Intro to DeFi Quest',
        component: 'IntroToDeFi',
      },
      {
        type: 'POAP',
        title: 'Collect your POAP',
      },
    ],
  },
]

export default QUESTS
