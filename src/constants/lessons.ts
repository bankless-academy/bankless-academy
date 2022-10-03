import { LessonType } from 'entities/lesson'

const LESSONS: LessonType[] = [
  {
    poapImageLink: '/lesson/wallet-basics/poap-75d8aa76.png',
    lessonImageLink: '/lesson/wallet-basics/lesson-5aa84b59.png',
    socialImageLink: '/lesson/wallet-basics/social-230cc260.jpg',
    learningActions: 'Create and manage your own wallet\nConnect your wallet to a web3 website',
    marketingDescription: 'A crypto wallet is essential gear for Web3 and DeFi. Get basic training on how a wallet works and how to get started.',
    poapEventId: 26971,
    kudosId: 659,
    duration: 15,
    learnings: '',
    difficulty: 'Easy',
    description: 'Learn how to create and manage a wallet securely.',
    name: 'Wallet Basics',
    quest: 'WalletBasics',
    publicationStatus: 'publish',
    isFeaturedOnHomepage: false,
    isCommentsEnabled: false,
    endOfLessonRedirect: null,
    endOfLessonText: undefined,
    communityDiscussionLink: 'https://gm.xyz/c/BanklessAcademy?communityName=BanklessAcademy&sortBy=new&topicUuid=977d14c9-f368-4047-b058-5f97884125d5',
    notionId: '98405bd0f2b94bb2a3079eed504a011e',
    slug: 'wallet-basics',
    imageLinks: [
      '/lesson/wallet-basics/wallet-intro-7b45d75e.png',
      '/lesson/wallet-basics/wallet-definition-4b8ae050.png',
      '/lesson/wallet-basics/recovery-phrase-eaf7036b.png',
      '/lesson/wallet-basics/public-key-70326f14.png',
      '/lesson/wallet-basics/private-key-43290e53.png',
      '/lesson/wallet-basics/custodial-wallet-c3a7cb80.png',
      '/lesson/wallet-basics/non-custodial-wallet-a37460f1.png',
      '/lesson/wallet-basics/hot-wallet-6117f51c.png',
      '/lesson/wallet-basics/cold-wallet-3bd67115.png',
      '/lesson/wallet-basics/metamask-wallet-a057e5b9.png'
    ],
    slides: [
      {
        type: 'LEARN',
        notionId: '0bf15ec24615455b9349774527410d81',
        title: 'Wallet Intro',
        content: '<div class="bloc1"><p><strong>Greetings!</strong></p><p>Welcome to Bankless Academy. We’re excited to guide you on your journey into <span class="tooltip" definition="Refers to applications that run on the blockchain and allow anyone to participate without monetizing their personal data.">Web3</span>. To get started, you will need some essential equipment: a digital wallet.</p><p>A digital wallet is your passport to exploring the various worlds of Web3. This tool grants you access to incredible new possibilities while safeguarding your assets and identity.</p><p>In this lesson, we’ll introduce you to digital wallets, how they work, and how to set yours up to safely embark on your Web3 journey.</p><p>Let’s get started!</p></div><div class="bloc2"><img src=\'/lesson/wallet-basics/wallet-intro-7b45d75e.png\'></div>'
      },
      {
        type: 'LEARN',
        notionId: 'baf157b016ba48a890eb4cacb4b903e5',
        title: 'Wallet Definition',
        content: '<div class="bloc1"><p>In the world of cryptocurrency, a wallet refers to an application or device you can use to interact with a <span class="tooltip" definition="A shared, unchangeable database, or ledger, of recorded transactions.">blockchain</span>.</p><p>Your <span class="tooltip" definition="A wallet is an application or device used to send and receive crypto assets on the blockchain.">wallet</span> functions as a lock-box that secures your access to the blockchain.</p><p>When your wallet is connected to a blockchain, you can make purchases, transfer digital assets, interact with applications, and more!</p></div><div class="bloc2"><img src=\'/lesson/wallet-basics/wallet-definition-4b8ae050.png\'></div>'
      },
      {
        type: 'QUIZ',
        notionId: '100f6d3d7cd542889814cf17733e9960',
        title: 'Knowledge Check',
        quiz: {
          question: 'What is a wallet?',
          rightAnswerNumber: 4,
          answers: [
            'A device equipped with RFID technology',
            'A velcro bi-fold device',
            'An account that protects my assets',
            'An app or device used to interact with a blockchain'
          ],
          id: 'wallet-basics-1'
        }
      },
      {
        type: 'LEARN',
        notionId: 'f764c92b0620495981b32bd34dd1fc62',
        title: 'Recovery Phrase',
        content: '<div class="bloc1"><p>When you set up a new <span class="tooltip" definition="A wallet is an application or device used to send and receive crypto assets on the blockchain.">wallet</span>, the software generates a unique <span class="tooltip" definition="A recovery phrase is a list of 12 to 24 words which is used to generate your wallet\'s public key and private key.">recovery phrase</span> that is specific to that wallet account.</p><p>Also sometimes called a <em>seed phrase</em> or <em>secret recovery phrase</em>, your recovery phrase can be used to access your wallet and crypto assets if:</p><ul><li>Your wallet app or hardware fails unexpectedly or gets damaged.</li><li>You are unable to access it due to misplacement or theft.</li><li>You want to access your wallet account through the wallet app on a different computer or device.</li></ul><p>Most recovery phrases are a list of 12 to 24 words that represent a unique piece of data. That data is used to generate the <span class="tooltip" definition="A public key is your address. It gives others a point of reference to send crypto assets to you.">public key</span> and <span class="tooltip" definition="A private key allows access to your wallet in order for you to send crypto assets to other address.">private key</span> for your wallet.</p></div><div class="bloc2"><img src=\'/lesson/wallet-basics/recovery-phrase-eaf7036b.png\'></div>'
      },
      {
        type: 'QUIZ',
        notionId: '9d0454d30e60454397b0926523f7e73c',
        title: 'Knowledge Check',
        quiz: {
          question: 'What can you do with your recovery phrase?',
          rightAnswerNumber: 3,
          answers: [
            '[A] Recover your wallet if lost, stolen, or damaged',
            '[B] Access your wallet on multiple devices',
            '[C] Both A & B',
            '[D] None of the above'
          ],
          id: 'wallet-basics-2'
        }
      },
      {
        type: 'LEARN',
        notionId: 'bf1bf37ca61845c5a4257cbaeff0e13c',
        title: 'Public Key',
        content: '<div class="bloc1"><p>You just learned how your <span class="tooltip" definition="A recovery phrase is a list of 12 to 24 words which is used to generate your wallet\'s public key and private key.">recovery phrase</span> relates to a <span class="tooltip" definition="A public key is your address. It gives others a point of reference to send crypto assets to you.">public key</span> and <span class="tooltip" definition="A private key allows access to your wallet in order for you to send crypto assets to other address.">private key</span>.</p><p>Note that a wallet can contain multiple accounts, and <em>each account</em> has a unique pair of public and private keys.</p><p>Think of a public key like your home address. It is public, anyone can see it, and it identifies the location to use to send crypto assets to you.</p></div><div class="bloc2"><img src=\'/lesson/wallet-basics/public-key-70326f14.png\'></div>'
      },
      {
        type: 'LEARN',
        notionId: 'a6dab3c7c04949baa0c5448f57c91cfe',
        title: 'Private Key',
        content: '<div class="bloc1"><p>If your <span class="tooltip" definition="A public key is your address. It gives others a point of reference to send crypto assets to you.">public key</span> is like your home address, then your <span class="tooltip" definition="A private key allows access to your wallet in order for you to send crypto assets to other address.">private key</span> is like your house key.</p><p>It\'s called private because <em>only you</em> should have access to it.</p><p>The private key unlocks access to your wallet and your crypto assets, allowing you to send them to other wallet addresses.</p></div><div class="bloc2"><img src=\'/lesson/wallet-basics/private-key-43290e53.png\'></div>'
      },
      {
        type: 'QUIZ',
        notionId: '4997e321e0814dd2931dd21c664533d6',
        title: 'Knowledge Check',
        quiz: {
          question: 'Your public key is like your _____ and your private key is like your _____',
          rightAnswerNumber: 2,
          answers: [
            'Routing Number / Account Number',
            'Home address / House key',
            'Address / Zip code',
            'Phone Number / Social Security Number'
          ],
          id: 'wallet-basics-3'
        }
      },
      {
        type: 'LEARN',
        notionId: 'a92f95a2da2a4429942b6aad2a260e1b',
        title: 'Custodial Wallet',
        content: '<div class="bloc1"><p>Since your <span class="tooltip" definition="A private key allows access to your wallet in order for you to send crypto assets to other address.">private key</span> unlocks access to your <span class="tooltip" definition="A wallet is an application or device used to send and receive crypto assets on the blockchain.">wallet</span>, keeping it private and secure is very important!</p><p>Not all wallets let you control your private key. With a <span class="tooltip" definition="With a custodial wallet, another party controls the private keys, thus controlling access to your crypto assets.">custodial wallet</span>, another party controls it. Accounts on Coinbase and Kraken are examples of custodial wallets that hold your private key.</p><p>This may be all some people need, but it requires you to trust these third parties to secure your crypto assets and give you access when you want to trade them or send them somewhere. Plus, your access to the world of <span class="tooltip" definition="An abbreviation for decentralized finance.">DeFi</span> applications will be limited. </p></div><div class="bloc2"><img src=\'/lesson/wallet-basics/custodial-wallet-c3a7cb80.png\'></div>'
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
          id: 'wallet-basics-4'
        }
      },
      {
        type: 'LEARN',
        notionId: 'a78db356b36c4bb19a85af61170b2471',
        title: 'Non-custodial Wallet',
        content: '<div class="bloc1"><p>Your passport to the exciting worlds of <span class="tooltip" definition="An abbreviation for decentralized finance.">DeFi</span> and <span class="tooltip" definition="Refers to applications that run on the blockchain and allow anyone to participate without monetizing their personal data.">Web3</span>—and the best way to safeguard your <span class="tooltip" definition="A private key allows access to your wallet in order for you to send crypto assets to other address.">private key</span> is a <span class="tooltip" definition="With a non-custodial wallet, you have sole control of your private keys, which in turn control your crypto assets.">non-custodial wallet</span>. </p><p>Remember: if you lose your private key, you will not be able to access your wallet to spend, withdraw, or transfer your crypto assets.</p><p>Fortunately, you <em>can</em> still recover your wallet with your <span class="tooltip" definition="A recovery phrase is a list of 12 to 24 words which is used to generate your wallet\'s public key and private key.">recovery phrase</span>. But if you lose that too, you will lose access to your wallet FOREVER!!!</p></div><div class="bloc2"><img src=\'/lesson/wallet-basics/non-custodial-wallet-a37460f1.png\'></div>'
      },
      {
        type: 'QUIZ',
        notionId: '4c2cc8a6d61247cc87007cfa636ea77f',
        title: 'Knowledge Check',
        quiz: {
          question: 'Are you responsible for your private key with a non-custodial wallet?',
          rightAnswerNumber: 1,
          answers: [
            'Yes',
            'No'
          ],
          id: 'wallet-basics-5'
        }
      },
      {
        type: 'LEARN',
        notionId: '266abc84862f425bab294dc99dfddb04',
        title: 'Wallet Security',
        content: '<div class="bloc1"><h2>ALWAYS do this to protect your recovery phrase:</h2><p>✅ write it down</p><p>✅ use a durable material</p><p>✅ store it in a safe place</p><h2>NEVER do this to protect your recovery phrase:</h2><p>🛑 save your recovery in an online drive</p><p>🛑 screenshot your private key</p><p>🛑 reveal your recovery key to anyone</p></div>'
      },
      {
        type: 'QUIZ',
        notionId: '8356a2b7d25c420fb4171ee574f7d748',
        title: 'Knowledge Check',
        quiz: {
          question: 'What is the safest way to protect your recovery phrase?',
          rightAnswerNumber: 4,
          answers: [
            'Save it on your computer and print it out.',
            'Take a screenshot and save it on your phone.',
            'Save it in your Dropbox account.',
            'Write it on a durable material and store it in a safe place.'
          ],
          id: 'wallet-basics-6'
        }
      },
      {
        type: 'LEARN',
        notionId: '6c2cef180a894009807af59ed2d5f27c',
        title: 'Hot Wallet',
        content: '<div class="bloc1"><p>There are two major types of <span class="tooltip" definition="With a non-custodial wallet, you have sole control of your private keys, which in turn control your crypto assets.">non-custodial wallets</span>: software wallets (also called <span class="tooltip" definition="A type of non-custodial wallet that is perpetually connected to the internet.">hot wallets</span>) and hardware wallets (also called <span class="tooltip" definition="A type of non-custodial wallet that is stored offline and does not require a perpetual internet connection.">cold wallets</span>)</p><p>A software wallet is an app or browser extension that remains connected to the internet.</p><ul><li>PROS 👍: It is usually free, simple to set up, and easy to use.</li><li>CONS 👎: Because it is software connected to the internet, it\'s potentially a target for hackers.</li></ul></div><div class="bloc2"><img src=\'/lesson/wallet-basics/hot-wallet-6117f51c.png\'></div>'
      },
      {
        type: 'LEARN',
        notionId: '2db8d9f5695b4b46aa35bef2e17bcb75',
        title: 'Cold Wallet',
        content: '<div class="bloc1"><p>A <span class="tooltip" definition="A type of non-custodial wallet that is stored offline and does not require a perpetual internet connection.">cold wallet</span>, or hardware wallet, is only connected to the internet when you physically connect it to a computer or device.</p><ul><li>PROS 👍: It is more secure from threats like hacking.</li><li>CONS 👎: It is not free, not ideal for quick transactions, and can be cumbersome to use.</li></ul></div><div class="bloc2"><img src=\'/lesson/wallet-basics/cold-wallet-3bd67115.png\'></div>'
      },
      {
        type: 'QUIZ',
        notionId: 'e331357c6b07425c8451d2a81c20f885',
        title: 'Knowledge Check',
        quiz: {
          question: 'Is a cold wallet more secure than a hot wallet?',
          rightAnswerNumber: 1,
          answers: [
            'Yes',
            'No'
          ],
          id: 'wallet-basics-7'
        }
      },
      {
        type: 'LEARN',
        notionId: '66d21ca797f44f02861545e2042582c8',
        title: 'MetaMask Wallet',
        content: '<div class="bloc1"><p>There are several non-custodial <span class="tooltip" definition="A type of non-custodial wallet that is perpetually connected to the internet.">hot wallets</span> available today. We will explore the popular MetaMask Wallet for the remainder of this lesson since:</p><ul><li>It is likely to be compatible with most <span class="tooltip" definition="An abbreviation for decentralized finance.">DeFi</span> apps.</li><li>It has a browser extension for Chrome, Brave, Edge, and Firefox internet browsers.</li><li>It is also available as a mobile app for Android and iOS users.</li></ul></div><div class="bloc2"><img src=\'/lesson/wallet-basics/metamask-wallet-a057e5b9.png\'></div>'
      },
      {
        type: 'QUIZ',
        notionId: 'e60c91b7bb054ea8b4e449ddf6f1042b',
        title: 'Knowledge Check',
        quiz: {
          question: 'Is MetaMask a custodial wallet?',
          rightAnswerNumber: 2,
          answers: [
            'Yes',
            'No'
          ],
          id: 'wallet-basics-8'
        }
      },
      {
        type: 'QUEST',
        title: 'Wallet Basics Quest',
        component: 'WalletBasics'
      },
      {
        type: 'END',
        title: 'Lesson Reward'
      }
    ]
  },
  {
    poapImageLink: '/lesson/intro-to-defi/poap-b4dab2d4.png',
    lessonImageLink: '/lesson/intro-to-defi/lesson-97291c9d.png',
    socialImageLink: '/lesson/intro-to-defi/social-ee8d95a4.jpg',
    learningActions: 'Transfer crypto into your web3 wallet in order to be ready to interact with DeFi later',
    marketingDescription: 'Move beyond centralized exchanges and start exploring the ever-expanding possibilities of decentralized finance.',
    poapEventId: 26972,
    kudosId: 660,
    duration: 10,
    learnings: '',
    difficulty: 'Easy',
    description: 'Understand the basics of decentralized finance.',
    name: 'Intro to DeFi',
    quest: 'IntroToDeFi',
    publicationStatus: 'publish',
    isFeaturedOnHomepage: false,
    isCommentsEnabled: false,
    endOfLessonRedirect: null,
    endOfLessonText: undefined,
    communityDiscussionLink: 'https://gm.xyz/c/BanklessAcademy?communityName=BanklessAcademy&sortBy=new&topicUuid=1ee6aa7e-8174-464c-b13c-69faef819b3e',
    notionId: 'fdbf6e4c2ad648c6b815137d0e05eb90',
    slug: 'intro-to-defi',
    imageLinks: [
      '/lesson/intro-to-defi/defi-defined-46782447.svg',
      '/lesson/intro-to-defi/earning-yield-c5f123f8.svg',
      '/lesson/intro-to-defi/what-you-can-do-with-defi-9b17cf2e.svg',
      '/lesson/intro-to-defi/investing-d99a6d1f.svg',
      '/lesson/intro-to-defi/trading-8cd72977.svg',
      '/lesson/intro-to-defi/lending-borrowing-4fb1c7c3.svg',
      '/lesson/intro-to-defi/staking-b4b4319d.svg',
      '/lesson/intro-to-defi/defi-downsides-51dd6225.svg',
      '/lesson/intro-to-defi/defi-downsides-3a6ce496.svg',
      '/lesson/intro-to-defi/defi-downsides-83a9391f.svg'
    ],
    slides: [
      {
        type: 'LEARN',
        notionId: '9c079b4441354613910b8d5a106a3c65',
        title: 'DeFi Defined',
        content: '<div class="bloc1"><p>DeFi—short for <span class="tooltip" definition="No single authority or entity controls the data.">decentralized</span> finance—refers to the fast-growing ecosystem of financial products, protocols, and applications that operate on public <span class="tooltip" definition="A shared, unchangeable database, or ledger, of recorded transactions.">blockchain</span> networks.</p><p>DeFi is rapidly transforming the world of finance with a range of new tools for putting crypto assets to work. It offers opportunities beyond simply buying crypto on a centralized exchange. It allows anyone and everyone to build a decentralized, bankless lifestyle.</p></div><div class="bloc2"><img src=\'/lesson/intro-to-defi/defi-defined-46782447.svg\'></div>'
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
        title: '<strong>Earning Yield</strong>',
        content: '<div class="bloc1"><p>There are a growing number of <span class="tooltip" definition="An abbreviation for decentralized finance.">DeFi</span> protocols that enable you to earn interest and other rewards by using your crypto assets. You can have access to financial products that you would typically need a bank or financial services firm to get—but without the paperwork, middleman, approval process, and other hassles of the traditional finance world.</p><p>By removing the middleman, you also remove any service fees, dues, and commissions you would typically pay in the traditional finance world. With DeFi, you get to keep all the rewards, or yield earned from your assets. This is why DeFi is popular. </p></div><div class="bloc2"><img src=\'/lesson/intro-to-defi/earning-yield-c5f123f8.svg\'></div>'
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
        content: '<div class="bloc1"><p><span class="tooltip" definition="An abbreviation for decentralized finance.">DeFi</span> transactions are <span class="tooltip" definition="Refers to a public blockchain that anyone can use to buy, sell, or trade assets.">permissionless</span>. This refers to a public <span class="tooltip" definition="A shared, unchangeable database, or ledger, of recorded transactions.">blockchain</span> that anyone can use to buy, sell, or trade assets. No third party controls or oversees activity. These transactions are carried out by decentralized applications, known as DApps. </p><p><span class="tooltip" definition="Digital applications or programs that exist and run on a blockchain, and are outside the purview and control of a single authority.">DApps</span> and DeFi platforms enable users to make more and more types of financial transactions, 24/7, all over the world. We will introduce four of the most common opportunities used to earn yield in DeFi - investing, trading, lending and borrowing, and staking.</p></div><div class="bloc2"><img src=\'/lesson/intro-to-defi/what-you-can-do-with-defi-9b17cf2e.svg\'></div>'
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
        title: '<strong>Investing</strong>',
        content: '<div class="bloc1"><p>The most common <span class="tooltip" definition="An abbreviation for decentralized finance.">DeFi</span> transaction is to purchase some cryptocurrency with the expectation that it will be worth more in the future. This is known as investing.</p><p>HODL is a term used for keeping crypto assets for a long time. Depending on who you ask, the HODL meme either comes from a typo of HOLD or it stands for <strong>H</strong>old <strong>O</strong>n for <strong>D</strong>ear <strong>L</strong>ife.</p><p>DeFi allows early access to coins and tokens to find and invest in, before they are listed on centralized exchanges (CEX).</p></div><div class="bloc2"><img src=\'/lesson/intro-to-defi/investing-d99a6d1f.svg\'></div>'
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
        content: '<div class="bloc1"><p>A decentralized exchange (DEX) shows current exchange rates between different crypto tokens and coins and serves as a digital marketplace that facilitates trading one currency for another by bringing together buyers and sellers. </p><p>The parties involved in a DEX trade don’t need to know or trust each other. In fact, it may appear that you are trading with the DEX. However, in most cases, the DEX simply facilitates the trade between two traders’ <span class="tooltip" definition="A wallet is an application or device used to send and receive crypto assets on the blockchain.">wallets</span> in a <span class="tooltip" definition="Refers to a public blockchain that anyone can use to buy, sell, or trade assets.">permissionless</span> fashion.</p></div><div class="bloc2"><img src=\'/lesson/intro-to-defi/trading-8cd72977.svg\'></div>'
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
        title: '<strong>Lending & Borrowing</strong>',
        content: '<div class="bloc1"><p>DeFi lending and borrowing offers loans without the need for a bank or intermediary institution. Instead, lending is done on a <span class="tooltip" definition="A transaction between two parties that does not require a middleman or controlling entity.">peer-to-peer</span> level. That means transactions are between two parties and does not require a middleman or controlling entity.</p><p>There are <span class="tooltip" definition="Digital applications or programs that exist and run on a blockchain, and are outside the purview and control of a single authority.">DApps</span> that enable anyone to lend and borrow crypto assets. Similar to traditional loans, a lender will earn interest on the loan and the borrower will need to pay the principal of the loan plus interest.</p></div><div class="bloc2"><img src=\'/lesson/intro-to-defi/lending-borrowing-4fb1c7c3.svg\'></div>'
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
        title: '<strong>Staking</strong>',
        content: '<div class="bloc1"><p>DeFi staking is similar to lending, however it\'s a special type of lending. Instead of lending your crypto to another user on a <span class="tooltip" definition="A transaction between two parties that does not require a middleman or controlling entity.">peer-to-peer</span> basis, you lend your crypto to a network or protocol. In exchange for helping secure the network or protocol, you earn rewards.</p><p>Centralized exchanges also offer staking. However, like their trading pairs, the staking opportunities and rewards are limited. With DeFi, there are many more staking possibilities than there are with centralized exchanges. </p></div><div class="bloc2"><img src=\'/lesson/intro-to-defi/staking-b4b4319d.svg\'></div>'
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
        title: '<strong>DeFi Downsides</strong>',
        content: '<div class="bloc-ab"><div class="bloc-a"><img src=\'/lesson/intro-to-defi/defi-downsides-51dd6225.svg\'></div><div class="bloc-b"><p><strong>Hackers</strong></p><p>Where there is money and technology, there are people looking for ways to hack the system and take advantage of poor security measures.</p></div></div><div class="bloc-ab"><div class="bloc-a"><img src=\'/lesson/intro-to-defi/defi-downsides-3a6ce496.svg\'></div><div class="bloc-b"><p><strong>Risk</strong></p><p>DeFi, like blockchain technology, runs on code. If there’s an error or loophole in the code, it can be exploited.</p></div></div><div class="bloc-ab"><div class="bloc-a"><img src=\'/lesson/intro-to-defi/defi-downsides-83a9391f.svg\'></div><div class="bloc-b"><p><strong>No recourse</strong></p><p>Being decentralized also means there are no companies or government agencies that you can appeal to for help if something goes wrong.</p></div></div>'
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
      },
      {
        type: 'END',
        title: 'Lesson Reward'
      }
    ]
  },
  {
    poapImageLink: '/lesson/blockchain-basics/poap-b0048cdb.png',
    lessonImageLink: '/lesson/blockchain-basics/lesson-c84db284.png',
    socialImageLink: '/lesson/blockchain-basics/social-07ea2639.jpg',
    learningActions: '',
    marketingDescription: 'Blockchains make cryptocurrency, DeFi, and Web3 possible. Discover how blockchain networks are built and how they work.',
    poapEventId: null,
    kudosId: 651,
    duration: 15,
    learnings: '',
    difficulty: 'Easy',
    description: 'Learn about the fundamental architecture of blockchain technology.',
    name: 'Blockchain Basics',
    quest: 'BlockchainBasics',
    publicationStatus: 'publish',
    isFeaturedOnHomepage: true,
    isCommentsEnabled: false,
    endOfLessonRedirect: null,
    endOfLessonText: undefined,
    communityDiscussionLink: 'https://gm.xyz/c/BanklessAcademy?communityName=BanklessAcademy&sortBy=new&topicUuid=b46a6fa7-1bf8-4f1e-8db3-a725fe98cac9',
    notionId: '562dba7dbd3949b480be367a64821cdf',
    slug: 'blockchain-basics',
    imageLinks: [
      '/lesson/blockchain-basics/introduction-6d0b6137.svg',
      '/lesson/blockchain-basics/blockchain-structure-346dae14.svg',
      '/lesson/blockchain-basics/examining-the-ledger-82fd9762.svg',
      '/lesson/blockchain-basics/transactions-on-the-ledger-f4f9d470.svg',
      '/lesson/blockchain-basics/block-anatomy-8ba3bea2.svg',
      '/lesson/blockchain-basics/inside-a-block-b11c74ce.svg',
      '/lesson/blockchain-basics/individual-transactions-2f6bf118.svg',
      '/lesson/blockchain-basics/user-addresses-e9456d37.svg'
    ],
    slides: [
      {
        type: 'LEARN',
        notionId: '2541f10fa3264827ac57b1cf863254fb',
        title: '<strong>I</strong><strong>ntroduction</strong>',
        content: '<div class="bloc1"><p><span class="tooltip" definition="A shared, unchangeable database, or ledger, of recorded transactions.">Blockchain</span> technology is a revolutionary way of storing and tracking data, while also making that data accessible to anyone. It is a way of organizing data in a single public list of all historical transactions that anyone can view but cannot edit. This public list of transactions is collectively known as the blockchain <span class="tooltip" definition="The record of all transactions that have ever occurred.">ledger</span>.</p><p>After examining the layers of a blockchain, we will be using a blockchain tool called a <span class="tooltip" definition="Search and exploration tool for blockchain data">block explorer</span> to look into the specifics of the Ethereum blockchain structure; we will zoom in on the Ethereum blockchain to view the <strong>list</strong> of blocks, the <strong>transactions</strong> within those blocks, and the <strong>details</strong> of each individual transaction.</p></div><div class="bloc2"><img src=\'/lesson/blockchain-basics/introduction-6d0b6137.svg\'></div>'
      },
      {
        type: 'LEARN',
        notionId: '76f2f8016f44493eb57a3139cb515017',
        title: 'Blockchain Structure',
        content: '<div class="bloc1"><p>The term blockchain can be used as a noun — the Bitcoin blockchain — or as an adjective — blockchain technology. Either way, <span class="tooltip" definition="A shared, unchangeable database, or ledger, of recorded transactions.">blockchain</span> refers to the entire structure cryptocurrencies are built on.</p><p>Zooming in from the outside, there are 3 levels of structure in a blockchain:</p><ol><li>The overall <span class="tooltip" definition="A shared, unchangeable database, or ledger, of recorded transactions.">blockchain</span> is made up of blocks that are linked together in order</li><li>Blocks are made up of groups of transactions put together </li><li>Transactions are amounts of money sent between two addresses on the network</li></ol><p>This three-tiered structure comes together to create a cryptographic ledger - an unalterable history of all transactions performed on the network.</p></div><div class="bloc2"><img src=\'/lesson/blockchain-basics/blockchain-structure-346dae14.svg\'></div>'
      },
      {
        type: 'QUIZ',
        notionId: 'f98dfb3cfba44c0ba527d7a60df88aae',
        title: '✅ quiz',
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
        content: '<div class="bloc1"><p>In typical money systems, we trust third parties like banks to keep track of how much money each person has. But, to be truly Bankless, we want a system that doesn’t require us to trust one entity to manage the ledger.</p><p>The <span class="tooltip" definition="The record of all transactions that have ever occurred.">ledger</span> is the list of ALL transactions ever made on a blockchain, and anyone can see it for <span class="tooltip" definition="Public blockchains allow anyone to view the blockchain ledger">public</span> blockchains. Discrete groups of transactions from the ledger form the blocks that together make the blockchain.</p><p>When new transactions are added to the ledger, balances stored at each <span class="tooltip" definition="Unique public identifier for an entity on a blockchain">address</span> get updated; past transactions cannot be altered. It’s like allowing everyone to look at everyone’s all-time bank account transaction history, at any given time, forever. </p></div><div class="bloc2"><img src=\'/lesson/blockchain-basics/examining-the-ledger-82fd9762.svg\'></div>'
      },
      {
        type: 'LEARN',
        notionId: '1af211fce04445b18b017c8ede82fe09',
        title: 'Transactions on the Ledger',
        content: '<div class="bloc1"><p>Let’s look at some example transactions:</p><ul><li>Alice sends 5 ETH to Bob</li><li>Bob sends 2 ETH to Charlie</li></ul><p>Individual transactions show the <em>change </em>in the amount of cryptocurrency for each address so the total result of all transactions IS the amount of cryptocurrency each address has.</p><hr><p>⇒ Alice has lost 5 ETH</p><p>⇒ Bob has gained 3 ETH total (received 5, sent 2)</p><p>⇒ Charlie has gained 2 ETH</p></div><div class="bloc2"><img src=\'/lesson/blockchain-basics/transactions-on-the-ledger-f4f9d470.svg\'></div>'
      },
      {
        type: 'QUIZ',
        notionId: '07e7cd73bf0b44af9cc46350430df624',
        title: '✅ quiz',
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
        content: '<div class="bloc1"><p>Not only are transactions included on a <span class="tooltip" definition="A shared, unchangeable database, or ledger, of recorded transactions.">blockchain</span> ledger unchangeable, they are also shared and distributed amongst a large network of computers. To make sure that no single entity has the power to change the data, the blockchain ledger is stored on every device, called a node, on the network.</p><p>This shared data is what makes the blockchain ledger <span class="tooltip" definition="No single authority or entity controls the data.">decentralized</span>. No single authority or entity controls the data. Blockchains like Ethereum are also <span class="tooltip" definition="Public blockchains allow anyone to view the blockchain ledger">public</span> because the ledger can be viewed by anyone. </p><p>We will see specifics of how new data is added and how we ensure everyone has a copy of the same data all the time in our upcoming Blockchain Theory lesson. For this lesson, just remember that the ledger data is shared by every computer running on the Ethereum network.</p></div>'
      },
      {
        type: 'QUIZ',
        notionId: '4073ac46370144d2919367efcef7ee37',
        title: '✅ quiz',
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
        content: '<div class="bloc1"><p>An important feature of blockchains is that past transaction data cannot be changed after it has been included in a block. This is because each block has a unique <span class="tooltip" definition="The unique identifier for each block file. Each new block refers to the block hash of the previous block to form the single-file connected blockchain.">block hash</span>, like a fingerprint, that is used to link the blocks together one after another. No one can change past transactions without changing that fingerprint and the fingerprint of EVERY block that follows it because each fingerprint depends on the previous one.</p><p>So each <span class="tooltip" definition="A group of transactions on the blockchain.">block</span> is simply a group of transactions put together in one file along with that block’s <span class="tooltip" definition="The unique identifier for each block file. Each new block refers to the block hash of the previous block to form the single-file connected blockchain.">block hash</span>. The blocks are chained together because each one references the previous block’s unique fingerprint to form one connected block<strong><em>chain</em></strong>. </p></div><div class="bloc2"><img src=\'/lesson/blockchain-basics/block-anatomy-8ba3bea2.svg\'></div>'
      },
      {
        type: 'QUIZ',
        notionId: '47a59ed5d3814cbdb5806331b37d6766',
        title: '✅ quiz',
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
        content: '<div class="bloc1"><p>Remember, <span class="tooltip" definition="A group of transactions on the blockchain.">block</span> data is just a group of transactions put together. Looking within a single block, we see a list of transactions and some data about who created the block. </p><p>From our example earlier when discussing the blockchain ledger, both of those transactions might be grouped within one block, or spread out into multiple blocks over time. But no matter what block they are included in, they are all added to the overall blockchain ledger eventually.</p><ul><li>Alice sends 5 ETH to Bob</li><li>Bob sends 2 ETH to Charlie</li></ul><p>Recall that each block must also reference the past block’s <span class="tooltip" definition="The unique identifier for each block file. Each new block refers to the block hash of the previous block to form the single-file connected blockchain.">block hash</span> to link the blockchain together.</p></div><div class="bloc2"><img src=\'/lesson/blockchain-basics/inside-a-block-b11c74ce.svg\'></div>'
      },
      {
        type: 'QUIZ',
        notionId: '311096618ecd451ba65677f2c3139823',
        title: '✅ quiz',
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
        content: '<div class="bloc1"><p>The data on any blockchain is simply a list of transactions, records of currency moved between users. Each transaction must be signed by the sender’s <span class="tooltip" definition="The unique identifier for each user that serves the function of personal stamps or physical signatures in the digital space.">digital signature</span> to be valid. </p><p>This is what you do when you confirm a transaction with a wallet, you are signing with your digital signature to authorize a transaction. You can think of it as the digital equivalent of physically signing a check, receipt, or credit card transaction.</p><p>Transactions can be simple, like sending crypto assets, or more complex, such as swapping crypto assets or even deploying special code that executes when triggered, called smart contracts.</p><p>Finally, each transaction has a unique digital identifier, called its <span class="tooltip" definition="The unique identifier for each transaction; it is derived from the transaction data, the digital signature of the transaction sender, and a one-time use number to avoid duplicate transactions.">transaction hash</span>, that no other transaction has. This makes it easy to refer to any single transaction later on and ensures that the details of that transaction can’t be changed afterward.</p></div><div class="bloc2"><img src=\'/lesson/blockchain-basics/individual-transactions-2f6bf118.svg\'></div>'
      },
      {
        type: 'QUIZ',
        notionId: 'a599d947c638409ca2073e914f11f7f9',
        title: '✅ quiz',
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
        content: '<div class="bloc1"><p>An <span class="tooltip" definition="Unique public identifier for an entity on a blockchain">address</span> is a public identifier that anyone can look up on the blockchain. Like an email address, anyone can send funds to it but only someone who controls the <span class="tooltip" definition="A private key allows access to your wallet in order for you to send crypto assets to other address.">private key</span> can unlock and use the funds at that address.</p><p>On Ethereum, an address always starts with <em>0x_________</em> and is 42 characters of numbers and letters derived from the <span class="tooltip" definition="A public key is your address. It gives others a point of reference to send crypto assets to you.">public key</span> of that address.</p><p>When looking at a single transaction in a block explorer, we can see the From: and To: addresses. This doesn’t tell us who the <em>people </em>are who control those addresses but allows any user to track the movement of cryptocurrency throughout the blockchain ledger.</p></div><div class="bloc2"><img src=\'/lesson/blockchain-basics/user-addresses-e9456d37.svg\'></div>'
      },
      {
        type: 'QUIZ',
        notionId: '5a6cfd2b2a9c4a059253b7f23ba3f74c',
        title: '✅ quiz',
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
      },
      {
        type: 'END',
        title: 'Lesson Reward'
      }
    ]
  },
  {
    poapImageLink: '/lesson/academy-community/poap-4fce19ff.png',
    lessonImageLink: '/lesson/academy-community/lesson-755fe7a3.png',
    socialImageLink: '/lesson/academy-community/social-1f64464b.jpg',
    learningActions: '',
    marketingDescription: 'Join the Academy Explorer Community on gm.xyz.',
    poapEventId: null,
    kudosId: 662,
    duration: 10,
    learnings: '',
    difficulty: 'Easy',
    description: 'Join the Academy Explorer Community on gm.xyz.',
    name: 'Academy Community',
    quest: 'AcademyCommunity',
    publicationStatus: 'publish',
    isFeaturedOnHomepage: true,
    isCommentsEnabled: false,
    endOfLessonRedirect: null,
    endOfLessonText: undefined,
    communityDiscussionLink: 'https://gm.xyz/c/BanklessAcademy?communityName=BanklessAcademy&sortBy=new&topicUuid=6cda4b4c-5300-4e1e-9a12-a14eecd59ebf',
    notionId: '44b8a4937fcd43fa8e12400cb75885a1',
    slug: 'academy-community',
    imageLinks: [],
    slides: [
      {
        type: 'LEARN',
        notionId: 'e398fcd0d14b45f1be30f709019faa50',
        title: 'You’re one step away, Explorer.',
        content: '<div class="bloc1"><p>Now that you have your digital wallet, let’s use it to join the Academy Community.</p><p>Wallets don’t only serve the purpose of keeping your digital assets, but also as a means of decentralized verification. </p><p>Thanks to its web3 native nature - wallet login, token-holder roles, and more! - we’ve chosen <a href=\'https://gm.xyz/?utm_source=BanklessAcademy&utm_medium=website&utm_campaign=GM-lesson\'>gm.xyz</a> as our community home. To participate in the conversation, you must sign in with your wallet. We can walk you through it in our video at the end of the lesson.</p><p>Ready to start your community journey? Let’s go Explorer!</p></div>'
      },
      {
        type: 'LEARN',
        notionId: 'd88acd5ee49c4fa88e9dc1c4fc136e80',
        title: 'Why join Bankless Academy?',
        content: '<div class="bloc1"><p>👋 New to the space? <strong>Meet with fellow Explorers </strong>and share knowledge.</p><p>📖 Been here for a while? <strong>Become a mentor </strong>and gain recognition by teaching others.</p><p>Let’s learn together.</p><p>💬 <strong>General:</strong> Exchange knowledge, tips, and explorers’ stories.</p><p>🎙️ A<strong>sk-me-anything: </strong>Participate in our <strong>AMAs with industry specialists.</strong></p><p>💾 <strong>Library:</strong> Level up your understanding of web3 with our curated resources.</p><p>🌟 <strong>Announcements:</strong> Stay up to date with important community announcements.</p></div>'
      },
      {
        type: 'QUEST',
        title: 'Academy Community Quest',
        component: 'AcademyCommunity'
      },
      {
        type: 'END',
        title: 'Lesson Reward'
      }
    ]
  },
  {
    poapImageLink: '/lesson/web3-security/poap-d2f0df26.png',
    lessonImageLink: '/lesson/web3-security/lesson-09017125.png',
    socialImageLink: '/lesson/web3-security/social-795f9c67.jpg',
    learningActions: 'Avoid the scams in web3 and keep your assets safe.',
    marketingDescription: 'Learn how to stay safe from the most common scams in web3.',
    poapEventId: null,
    kudosId: 663,
    duration: 15,
    learnings: '',
    difficulty: 'Easy',
    description: 'Learn how to stay safe from the most common scams in web3.',
    name: 'Web3 Security',
    quest: 'Web3Security',
    publicationStatus: 'publish',
    isFeaturedOnHomepage: true,
    isCommentsEnabled: false,
    endOfLessonRedirect: null,
    endOfLessonText: undefined,
    communityDiscussionLink: 'https://gm.xyz/c/BanklessAcademy?communityName=BanklessAcademy&sortBy=new&topicUuid=c5866aeb-f37d-41a0-995f-46223a9cc729',
    notionId: '7a5b9b7afe804e6984bf279301dfa1db',
    slug: 'web3-security',
    imageLinks: [
      '/lesson/web3-security/money-in-web2-0faeb54f.svg',
      '/lesson/web3-security/money-in-web3--28d5af95.svg',
      '/lesson/web3-security/two-factor-authentication-e91b624a.svg',
      '/lesson/web3-security/social-engineering-scams-07dbba27.svg',
      '/lesson/web3-security/social-media-safety-f4f4e1fb.svg',
      '/lesson/web3-security/social-media-best-practices-34122b30.svg',
      '/lesson/web3-security/scam-tokens-2fddadcc.svg',
      '/lesson/web3-security/hardware-wallets-1ab4665d.svg',
      '/lesson/web3-security/wallet-strategies-e2d78fc5.svg'
    ],
    slides: [
      {
        type: 'LEARN',
        notionId: '50b5d9c9a7a34a2c82f6423f97e3e77d',
        title: '<strong>Introduction</strong>',
        content: '<div class="bloc1"><p>Digital ownership is the new feature of web3. Using blockchains, cryptocurrencies, and NFTs, web3 gives ownership and power back to users. This online ownership of digital financial products is new for many, and that lack of experience gives opportunities for predatory people to scam and steal the assets of others. These scams work so well because most people aren’t aware of how they work. </p><p>But, it\'s not just web3 that suffers from scams, web2 services like email and social media are full of scams as well. In addition, many web3 tools are still tied to web2 services like bank accounts or centralized exchanges so protecting those is important too. So congratulations, Academy Explorer, on taking the time to arm yourself with the knowledge that will protect you as you venture out into <span class="tooltip" definition="Refers to applications that run on the blockchain and allow anyone to participate without monetizing their personal data.">web3</span>!</p><p>This lesson will cover:</p><ul><li>Web2 & web3 security.</li><li>The most common ways people lose their funds and how to protect oneself from them.</li><li>A general strategy for wallet security.</li><li>How one can recover if they are the victim of a scam.</li></ul></div>'
      },
      {
        type: 'LEARN',
        notionId: '44450164401340659f6553fadd0230e4',
        title: 'Money in Web2',
        content: '<div class="bloc1"><p>In web2, the institutions hold money on behalf of people. A user must prove their identity to an institution in order to access and use their money. It’s the same as a bank account or a <span class="tooltip" definition="(CEX) Platform that coordinates cryptocurrency trading for a fee, similar to a stock exchange">centralized exchange</span> (CEX); one needs a login ID and a password.</p><p>For a scammer to gain access to your money, they need this ID + password combination. Because the institutions are charged with protecting your money, fraudulent transactions can be reversed - like a credit card transaction dispute.</p></div><div class="bloc2"><img src=\'/lesson/web3-security/money-in-web2-0faeb54f.svg\'></div>'
      },
      {
        type: 'LEARN',
        notionId: 'c10187a8772f40faace2a77bd2f86940',
        title: 'Money in Web3 ',
        content: '<div class="bloc1"><p>In web3, money works differently. It’s more like a locked cash wallet; once money is spent, it’s gone. Only private keys control access to the wallet. So for a scammer to gain access they need the <span class="tooltip" definition="Group of random words generated by a wallet on setup, they act as the master key to ALL accounts controlled by that wallet. NEVER SHARE YOUR SEED PHRASE WITH ANYONE FOR ANY REASON.">seed phrase</span>, that special set of secret words, to access someone’s <span class="tooltip" definition="A private key allows access to your wallet in order for you to send crypto assets to other address.">private keys</span> and steal from their wallet. </p><p>It’s very important to protect seed phrases; people should <em><strong>never</strong></em> give their seed phrase to anyone for any reason. Also, never enter seed phrases digitally; digital photos, notes applications, and text files on your computer can all get compromised.</p></div><div class="bloc2"><img src=\'/lesson/web3-security/money-in-web3--28d5af95.svg\'></div>'
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
        content: '<div class="bloc1"><p>There are many methods for storing seed phrases securely, but a good start is to keep it on physical media (laminated paper or similar) and store it in a water- and fire-proof safe in your own home. <strong>Do not </strong>store a <span class="tooltip" definition="Group of random words generated by a wallet on setup, they act as the master key to ALL accounts controlled by that wallet. NEVER SHARE YOUR SEED PHRASE WITH ANYONE FOR ANY REASON.">seed phrase</span> as a photo or other digital methods - even in a password manager. </p><p>Bad places to store seed phrases include:</p><ul><li>In a filing cabinet</li><li>Digital notes application</li><li>At your workplace</li><li>Digital photo</li></ul><p>Wherever you store your seed phrase, you should ensure that only you have access to it and that it is protected from loss and destruction. You never know what might happen in the future!</p></div>'
      },
      {
        type: 'LEARN',
        notionId: '55c51a6c7e2946a1a098ced62d4f7180',
        title: 'Protect your Passwords',
        content: '<div class="bloc1"><p>Healthy password usage and management is an important piece of everyday internet exploration.</p><p>Passwords should be different for each and every web2 service used online. This includes services like email, centralized exchanges, and other service accounts. It’s problematic if someone manages to get the ID + password for one account, but it’s far worse if that combination unlocks all of your accounts!</p><p>Password manager applications like 1password, LastPass, and BitWarden securely store and encrypt multiple passwords; they can even generate new high-security passwords and store them automatically. The user just has to remember a single master password. </p><p>Do <strong>not</strong> store a web3 <span class="tooltip" definition="Group of random words generated by a wallet on setup, they act as the master key to ALL accounts controlled by that wallet. NEVER SHARE YOUR SEED PHRASE WITH ANYONE FOR ANY REASON.">seed phrase</span> in a password manager; it takes just one password breach to obtain all of your web3 assets and there is no one to recover your assets for you.</p></div>'
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
        content: '<div class="bloc1"><p>Two Factor Authentication, also known as 2FA, is a secondary layer of web2 security.</p><p>Many people have had their web2 accounts hacked, or have had their money and credentials stolen despite having strong passwords. Web2 websites (and even password managers) often use a second layer of security 2FA as well. 2FA generates single-use codes sent to another device, in addition to the normal password, to enable website log-in. The other device could be a phone, a desktop computer, or even a small device you can attach to your keychain.</p><p>Phone (SMS) 2FA is better than no 2FA, but phone companies are vulnerable to scammers also. They can use <span class="tooltip" definition="Manipulating someone into sharing sensitive or confidential information such as passwords or seed phrases">social engineering</span> to impersonate the account owner, bypass the company’s security checks, and gain access to the owner’s account - all without the real owner knowing. Authentication applications like Authy or Google Authenticator are more secure 2FA solutions.</p></div><div class="bloc2"><img src=\'/lesson/web3-security/two-factor-authentication-e91b624a.svg\'></div>'
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
        content: '<div class="bloc1"><p>In both web2 and web3, scammers use <span class="tooltip" definition="A type of social engineering attack where the attacker poses as a trusted person or organization to trick victims into sharing sensitive information or sending them money">phishing</span> tactics to trick people into giving up their passwords and seed phrases. Often they’ll pretend to be product support staff offering help, “Hello this is Metamask support”, or pretend to be an admin of a community, “New NFT mint, exclusive for our community”.</p><p>They use <span class="tooltip" definition="Manipulating someone into sharing sensitive or confidential information such as passwords or seed phrases">social engineering</span> to pressure people. Examples include:</p><ul><li>“Time is running out!” - making you feel rushed.</li><li>“Congratulations you won our giveaway!” - making things feel exclusive.</li><li>”Get early access to our pre-mint!” - generating <span class="tooltip" definition="Fear Of Missing Out. Anxiety or apprehension about missing out on or not getting things">FOMO</span> in the person being scammed.</li></ul></div><div class="bloc2"><img src=\'/lesson/web3-security/social-engineering-scams-07dbba27.svg\'></div>'
      },
      {
        type: 'LEARN',
        notionId: '87eb4de1d31d47299235691aa0dab08d',
        title: 'Fear Of Missing Out',
        content: '<div class="bloc1"><p><span class="tooltip" definition="Fear Of Missing Out. Anxiety or apprehension about missing out on or not getting things">FOMO</span> stands for the ‘Fear Of Missing Out’, it’s the stressful feeling that you’re not going to get a great benefit or opportunity unless you do something <strong>right now</strong>.</p><p>The best defense against FOMO is to simply take a step back from your computer and take a break. People don’t think clearly when they’re stressed, that’s why FOMO is such an effective scamming tool. By stepping away from the situation, it becomes much easier to spot the scams for what they are.</p></div>'
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
        content: '<div class="bloc1"><p>Scammers love to engage with users in social media environments like Twitter and the Discord servers of cryptocurrency projects. They will typically try to move to or even start conversations via direct messaging to avoid being spotted by experienced community members. It’s generally safer to talk in public areas, until you’ve gained more experience in crypto-culture.</p><p>However, no matter where you are talking to others, you should <em><strong>never</strong></em> give your <span class="tooltip" definition="Group of random words generated by a wallet on setup, they act as the master key to ALL accounts controlled by that wallet. NEVER SHARE YOUR SEED PHRASE WITH ANYONE FOR ANY REASON.">seed phrase</span> to anyone for <strong>any reason</strong>. If anyone asks for your seed phrase or private key, they are a scammer. It’s that simple.</p></div>'
      },
      {
        type: 'LEARN',
        notionId: '276e9374da2e49428b3b4193dc692c86',
        title: 'Social Media Safety',
        content: '<div class="bloc1"><p>Social media red flags:</p><p>🚩 <strong>Language and grammar errors:</strong> They’re/their/there, etc.</p><p>🚩 <strong>FOMO:</strong> “Don’t miss out!”</p><p>🚩 <strong>Impersonation:</strong> an admin, support desk, Vitalik Buterin, Elon Musk, etc.</p><p>🚩 <strong>Guaranteed returns: </strong>Nothing is guaranteed in crypto.</p><p>🚩 <strong>Un</strong><strong>requested links and offers, </strong><em>especially in direct messages</em>.</p></div><div class="bloc2"><img src=\'/lesson/web3-security/social-media-safety-f4f4e1fb.svg\'></div>'
      },
      {
        type: 'LEARN',
        notionId: '66a155651e4b4434a1f1d7c9f7e82e4c',
        title: 'Social Media Best Practices',
        content: '<div class="bloc1"><p>Practices for staying safe<strong>:</strong></p><p>✅ If they have to direct message you to sell their product, you probably don’t want it.</p><p>✅ Check the project follower and member count - though these do not guarantee project legitimacy, quality, or stability.</p><p>✅ Verify everything with an outside source, like another official project account.</p><p>✅ If you’re ever uncertain, check with reputable members from a community you trust - and ask in public. Our <a href=\'https://gm.xyz/c/BanklessAcademy\'>Explorer Community</a> is a great place for questions like these.</p></div><div class="bloc2"><img src=\'/lesson/web3-security/social-media-best-practices-34122b30.svg\'></div>'
      },
      {
        type: 'LEARN',
        notionId: '61574044744645b6a4f7fe140539a7ab',
        title: 'Scam-tokens',
        content: '<div class="bloc1"><p>Besides social engineering, the second most common web3 attack is having scam-tokens sent to your web3 wallet. Scam-tokens are crypto tokens that scammers transfer to many wallets at once, in the hopes that someone will try to move or sell the tokens and trigger the malicious code hiding in the token’s smart contract.</p><p>Malicious contracts often require people to spend far more on a transaction than is necessary in order to sell these scam-tokens, and others can completely drain wallets; these scam-tokens could even be NFTs! If the problem isn’t with the smart contract itself, scam-tokens will often lure victims back to phishing websites where scammers try to trick victims into entering their <span class="tooltip" definition="Group of random words generated by a wallet on setup, they act as the master key to ALL accounts controlled by that wallet. NEVER SHARE YOUR SEED PHRASE WITH ANYONE FOR ANY REASON.">seed phrase</span> or other credentials.</p><p>The best thing to do when you receive random tokens is to not interact with them at all; leave them in your wallet and never transfer/sell them.</p></div><div class="bloc2"><img src=\'/lesson/web3-security/scam-tokens-2fddadcc.svg\'></div>'
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
        content: '<div class="bloc1"><p>If you remember from our <a href=\'https://app.banklessacademy.com/lessons/wallet-basics\'>Wallet Basics</a> lesson, a <span class="tooltip" definition="A type of non-custodial wallet that stores private keys offline in a physical hardware device.">hardware wallet</span> is only connected to the internet when you physically connect it to a computer or device that is connected to the internet. This makes your funds much safer as someone would have to physically steal your device and hack into it in order to find your <span class="tooltip" definition="Group of random words generated by a wallet on setup, they act as the master key to ALL accounts controlled by that wallet. NEVER SHARE YOUR SEED PHRASE WITH ANYONE FOR ANY REASON.">seed phrase</span>.</p><p>It is even possible to use your hardware wallet through many browser extension wallets, like MetaMask. By using this setup, you receive the convenience of a single wallet interface with the security of using a hardware wallet.</p><p>Ledger has <a href=\'https://www.ledger.com/academy/security/the-safest-way-to-use-metamask\'>written their own guide</a> on how to setup MetaMask for use with their hardware wallet device.</p></div><div class="bloc2"><img src=\'/lesson/web3-security/hardware-wallets-1ab4665d.svg\'></div>'
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
        content: '<div class="bloc1"><p>After adding a hardware wallet to your setup, one of the best ways to secure your funds is to keep them spread between multiple <span class="tooltip" definition="A wallet is an application or device used to send and receive crypto assets on the blockchain.">wallets</span>. Here is a compartmentalized strategy using three separate wallets:</p><ol><li><strong>Social Wallet:</strong> A wallet that serves as your web3 identity for logins — like for the <a href=\'https://app.banklessacademy.com/lessons/academy-community\'>Bankless Academy community</a> or web3 social media — use a <span class="tooltip" definition="A type of non-custodial wallet that stores private keys offline in a physical hardware device.">hardware wallet</span> for extra security.</li><li><strong>Trading Wallet:</strong> A <span class="tooltip" definition="A type of non-custodial wallet that is perpetually connected to the internet.">hot wallet</span> for trading and other activities involving funds that may need to be moved on short notice.</li><li><strong>HODL Wallet:</strong> A <span class="tooltip" definition="A type of non-custodial wallet that stores private keys offline in a physical hardware device.">hardware wallet</span> for the long-term <span class="tooltip" definition="Hold On for Dear Life. Crypto slang for not selling crypto no matter what the market conditions are">HODL</span> — these are funds intended to hold for a long time. It’s recommended to <em><strong>not </strong></em>use this wallet for interacting with smart contracts.</li></ol><p>👍 <strong>PROs:</strong> Separation ensures that scams only threaten funds in <em>that particular wallet</em> rather than <em>everything</em>.</p><p>👎 <strong>CONs:</strong> It’s more complicated to keep track of, but many wallet applications allow you to name your wallets.</p></div><div class="bloc2"><img src=\'/lesson/web3-security/wallet-strategies-e2d78fc5.svg\'></div>'
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
        content: '<div class="bloc1"><p>Hopefully you have not already fallen victim to a scammer. If you have, there are some steps you should take to secure your accounts once more.</p><p>For a scam involving a web2 service, like Gmail or Discord, you should:</p><ul><li>Change your password on the affected account.</li><li>Where it’s available, use the “sign out everywhere else” button to kick the scammers off your account.</li><li>Enable 2FA with an authenticator app.</li><li>Report the scam to the service involved.</li><li>Ensure your email account is also secure.</li><li>Discuss the scam with friends or trusted community members.</li></ul></div>'
      },
      {
        type: 'LEARN',
        notionId: '5ae46db5024b4193a9c2be75f9f6e5b4',
        title: 'Recovering from Web3 Scams',
        content: '<div class="bloc1"><p>Contracts must be given explicit permission to spend tokens on Ethereum. The token <span class="tooltip" definition="Allows an entity, usually a smart contract, the right to use a specified amount of your tokens in a transaction">allowance</span> is how much of that token you’ve given permission to be spent by a specific contract. Keeping allowances low reduces the risk to your assets by a potentially malicious application or hacker.</p><p>Web3 doesn’t have anyone in charge of protocols to report scammers to, but you can still take action:</p><ul><li>Immediately move any funds still in the compromised wallet to a different wallet address, <strong>make sure the new address has a different seed phrase.</strong></li><li>Review and revoke the token allowances you have given on your wallet with tools like <a href=\'https://etherscan.io/tokenapprovalchecker\'>etherscan.io/tokenapprovalchecker</a>. Note that revoking allowances will cost gas. OpenSea has a <a href=\'https://support.opensea.io/hc/en-us/articles/4416083190291-How-can-I-revoke-token-allowance-permissions-\'>support article</a> walkthrough.</li><li>Use a <span class="tooltip" definition="A type of non-custodial wallet that stores private keys offline in a physical hardware device.">hardware wallet</span> in the future.</li><li>Warn others by reporting the scam to the affected community.</li><li>Discuss the scam process with friends or trusted community members to see how you can protect yourself and others in the future.</li></ul></div>'
      },
      {
        type: 'QUEST',
        title: 'Web3 Security Quest',
        component: 'Web3Security'
      },
      {
        type: 'END',
        title: 'Lesson Reward'
      }
    ]
  },
  {
    poapImageLink: '/lesson/blockchains-layer-1/poap-28a03b13.png',
    lessonImageLink: '/lesson/blockchains-layer-1/lesson-670d86ca.png',
    socialImageLink: '/lesson/blockchains-layer-1/social-9e12aa4e.png',
    learningActions: '',
    marketingDescription: 'Understand the Layer 1 blockchains basics and their limitations.',
    poapEventId: null,
    kudosId: null,
    duration: 15,
    learnings: '',
    difficulty: undefined,
    description: 'Understand the Layer 1 blockchains basics and their limitations.',
    name: 'Blockchains Layer 1',
    quest: 'BlockchainsLayer1',
    publicationStatus: 'hidden',
    isFeaturedOnHomepage: false,
    isCommentsEnabled: false,
    endOfLessonRedirect: null,
    endOfLessonText: undefined,
    communityDiscussionLink: null,
    notionId: '6e14e3cfc6a44087b3b3d15dd07d2fee',
    slug: 'blockchains-layer-1',
    imageLinks: [
      '/lesson/blockchains-layer-1/blockchain-trilemma-112547fd.png',
      '/lesson/blockchains-layer-1/security-and-attacks-614e91b8.jpg',
      '/lesson/blockchains-layer-1/scalability-throughput-ef6f434d.png',
      '/lesson/blockchains-layer-1/is-it-decentralized-9c900798.png',
      '/lesson/blockchains-layer-1/some-examples-e0e8eb7c.png',
      '/lesson/blockchains-layer-1/so-what-can-be-done-5aed7436.png',
      '/lesson/blockchains-layer-1/the-future-of-ethereum-ca844a29.png'
    ],
    slides: [
      {
        type: 'LEARN',
        notionId: 'c39a3e32b41c474394eed2485e5f6096',
        title: '<strong>Introduction</strong>',
        content: '<div class="bloc1"><p>Problems emerge when more users want to use a blockchain network than it can handle. Large demand for <span class="tooltip" definition="Blockspace is amount of space on a blockchain that can be used to store information and run code. The amount of “space” within one (or a series of) block(s).">blockspace</span> can be temporary or can last as long as users continue to have a strong desire to use the blockchain. In order to still have their transactions processed quickly, Ethereum users can pay skyrocketing fees in times of high demand — pricing out users with less capital and opening opportunities for other blockchains.</p><p>This lesson explores why Ethereum and other blockchains are subject to the Blockchain Trilemma, how the Trilemma is the root cause of the problems described above, and how the Trilemma affects Ethereum’s plans for serving the needs of all their users. We will look at the tradeoffs several blockchains have made with respect to the Blockchain Trilemma, and what those tradeoffs mean for Academy Explorers.</p></div>'
      },
      {
        type: 'LEARN',
        notionId: '4dfda718520e4f5ea01dce2e8ee15529',
        title: 'Blockchain Trilemma',
        content: '<div class="bloc1"><p>As implied by the word <em><strong>tri</strong></em>lemma, there are three qualities of blockchains that compete with each other and prevent optimizing for all three at once.</p><p>These are: <span class="tooltip" definition="Ability of a blockchain to withstand hacking attempts, code exploits, and economic exploits among other attacks, and continue to function as normal. ">Security</span>, <span class="tooltip" definition="A blockchain’s capability to handle a growing amount of work, transactions, and usage with minimal disruption for users.">Scalability</span>, and <span class="tooltip" definition="Principle that no single authority or entity should control the blockchain data.">Decentralization</span>.</p><p>In order for a blockchain to serve as an unbiased foundation for a monetary system at a global scale, it must have a high amount of all three aspects. A monetary system needs to be secure from fraud, safe from attacks by censors through decentralization, and scalable to meet the needs of over 7 billion humans in a global society.</p></div><div class="bloc2"><img src=\'/lesson/blockchains-layer-1/blockchain-trilemma-112547fd.png\'></div>'
      },
      {
        type: 'QUIZ',
        notionId: '8a9d852b8f374a9d815917752850955e',
        title: '✅ TODO',
        quiz: {
          question: 'Question?',
          rightAnswerNumber: 1,
          answers: [
            'answer 1',
            'answer 2'
          ],
          id: 'blockchains-layer-1-1'
        }
      },
      {
        type: 'LEARN',
        notionId: '1fc5863c44bb4437a21bc7cc7cb0cfdf',
        title: 'Security and Consensus',
        content: '<div class="bloc1"><p>Security is the most foundational requirement for a public blockchain. Computers within a network (such as a blockchain network) all must agree on what transactions have truly happened in order to work together, this agreement is called <span class="tooltip" definition="Methods used to achieve agreement, trust, and security across a decentralized computer network like blockchains.">consensus</span>. A blockchain is secure if attackers cannot disrupt the network from agreeing on that truth in practice. Consensus algorithms are designed to prevent attacks through different methods.</p><p>Chains like Bitcoin that use Proof of Work consensus prevent fraud by making their consensus algorithm highly competitive; each block producer is racing to solve a math problem and the first to do so wins the right to create the next block and the monetary block reward that comes with it. Fraud would require massive investments in computing power and energy, an attacker would likely spend more than they’d gain. </p></div>'
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
            'Secured through economic incentives ',
            'All of the above'
          ],
          id: 'blockchains-layer-1-2'
        }
      },
      {
        type: 'LEARN',
        notionId: 'd22518cb06b944acad0745a1121d39b5',
        title: 'Security and Attacks',
        content: '<div class="bloc1"><p>Attacks on blockchain consensus is called a 51% attack, because an attacker needs to have 51% or more of the consensus power on a network to commit fraud by creating false blocks. This means 51% of the computing power solving math problems in Proof of Work consensus, and 51% of the stake in Proof of Stake consensus. Again, fraud would require a massive investment in capital to acquire stake in the network, which will be destroyed if found to be creating false blocks; an attacker would likely spend more than they’d gain.</p><p>In Proof of Stake consensus the block producer isn’t chosen through competition, but is randomly assigned instead. Just like with Proof of Work, the consensus algorithm ensures any single entity cannot regularly “win” the right to create a new <span class="tooltip" definition="A group of transactions on the blockchain.">block</span>. </p></div><div class="bloc2"><img src=\'/lesson/blockchains-layer-1/security-and-attacks-614e91b8.jpg\'></div>'
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
          id: 'blockchains-layer-1-3'
        }
      },
      {
        type: 'LEARN',
        notionId: '0bfdc60dd92149ee94b626e5c5b9c44d',
        title: 'Scalability - Throughput',
        content: '<div class="bloc1"><p><span class="tooltip" definition="A blockchain’s capability to handle a growing amount of work, transactions, and usage with minimal disruption for users.">Scalability</span> refers to a blockchain’s ability to process many transactions quickly. There are two parts that determine a blockchain’s scalability.</p><p>1) Transaction throughput: How many transactions a blockchain can process at once, usually measured in transactions per second (<span class="tooltip" definition="Transactions Per Second. The number of transactions per second processed by a blockchain.">TPS</span>)</p><p>Imagine many people waiting at a bus stop and they all want to travel, they want to ride the bus all at the same time. Every minute, there are only so many people that can travel via bus. To clear the bus stop of people faster, you’d have to use bigger busses (more people) or make the busses run more often (less time). It works the same way with trying to fit many transactions into the small amount of block space that’s available for each block. You can see this visualization with live data at <a href=\'https://txstreet.com/v/eth-btc\'>https://txstreet.com/v/eth-btc</a>.</p></div><div class="bloc2"><img src=\'/lesson/blockchains-layer-1/scalability-throughput-ef6f434d.png\'></div>'
      },
      {
        type: 'QUIZ',
        notionId: '796f016b847e4383bbeeba78736e620b',
        title: '✅ TPS',
        quiz: {
          question: 'How is the bus stop analogy NOT accurate for blockchain transactions?',
          rightAnswerNumber: 1,
          answers: [
            'Buses (blocks) are always the same size',
            'People (transactions) are grouped together into buses (blocks)',
            'There is a maximum limit of how many people (transactions) can fit into each bus (block)'
          ],
          id: 'blockchains-layer-1-4'
        }
      },
      {
        type: 'LEARN',
        notionId: 'cf8aeea9908e4dc7960f63ae71edcad4',
        title: 'Scalability - Finality',
        content: '<div class="bloc1"><p>The second aspect to blockchain scalability is:</p><p>2) Finality: When can we be reasonably sure a transaction won’t get changed or reversed?</p><p>Finality is typically measured in blocks — how many blocks have passed since the transaction was included in a block? The more blocks that get added to the chain afterwards, the more sure we can be that the transaction is finalized. Remember, a secure blockchain consensus algorithm makes it very expensive to change past blocks, and the expense increases the farther back someone changes. We can convert this block number (around 8 for Ethereum) to a finality time by multiplying the number of block confirmations by the blockchains TPS. 8 block confirmations times 15 <span class="tooltip" definition="Transactions Per Second. The number of transactions per second processed by a blockchain.">TPS</span> gives 2 minutes finality time after confirmation.</p></div>'
      },
      {
        type: 'LEARN',
        notionId: '484d38249db74050a6a14cf584f44c15',
        title: 'Decentralization distributes power',
        content: '<div class="bloc1"><p><span class="tooltip" definition="Principle that no single authority or entity should control the blockchain data.">Decentralization</span> is the final basis of the blockchain trilemma — the process of transferring control and decision-making from a single entity to a distributed network of many. Decentralization is the fundamental principle that enables blockchains to be <span class="tooltip" definition="Refers to a public blockchain that anyone can use to buy, sell, or trade assets.">permissionless</span> and censorship-resistant; anyone can use decentralized blockchains, and anyone can build software using them.</p><p>Platforms like Facebook and Twitter can deactivate anyone’s account at any time. Many large streamers on Twitch or Tiktok have found themselves removed from their platforms without cause. Even if social media users can get their accounts reinstated, it can be a long and painful process. If authority in a network is sufficiently decentralized, then there is no way for a person to get removed, these networks are <span class="tooltip" definition="Refers to a public blockchain that anyone can use to buy, sell, or trade assets.">permissionless</span>.</p><p>Without decentralization, a blockchain ledger is just a financial spreadsheet on a bank computer; the bankers decide who gets to create an account with them and if the bank has its assets seized by a malicious government, customers have no recourse. Citizens around the world have had their assets in banks seized; Venezuela, Mexico, and Russia have all had banks nationalized by government throughout history.</p></div>'
      },
      {
        type: 'QUIZ',
        notionId: '53dd5c9a8dfe468d8a1f3163bfce7230',
        title: '✅ Why decentralization?',
        quiz: {
          question: 'Which of these statements is NOT true for decentralization?',
          rightAnswerNumber: 3,
          answers: [
            'Decentralization makes blockchains censorship-resistant ',
            'Decentralization makes blockchains permissionless',
            'Decentralization helps authoritarian powers to maintain control',
            'Anyone, anywhere can use permissionless systems '
          ],
          id: 'blockchains-layer-1-5'
        }
      },
      {
        type: 'LEARN',
        notionId: '08840d13c2fe4acca833d5bd31ce7969',
        title: 'Is it decentralized?',
        content: '<div class="bloc1"><p>But whether something is decentralized or not isn’t just a yes or no answer. Is 10 controlling entities decentralized? How about 1000? One million? There isn’t a standard cutoff for something being sufficiently decentralized, so it makes sense to think of decentralization as a spectrum. Rather than the only choices being black and white, there is also a multitude of greys in between them.</p><p>So we can say something is more or less decentralized than something else, but not when something “is decentralized”. For a neutral monetary system to be resistant to state-level censorship, a high degree of decentralization is required. Newer blockchains often trade decentralization for scalability, but they leave themselves vulnerable to the same pressures from societies and governments fully centralized platforms feel and will likely begin to engage in the same censorship seen on Facebook and similar networks.</p></div><div class="bloc2"><img src=\'/lesson/blockchains-layer-1/is-it-decentralized-9c900798.png\'></div>'
      },
      {
        type: 'QUIZ',
        notionId: 'd5e125d69d6f4cfe963af2ee0515594a',
        title: '✅ But is it Decentralized?',
        quiz: {
          question: 'Different amounts of decentralization are used by different blockchains. ',
          rightAnswerNumber: 1,
          answers: [
            'True',
            'False'
          ],
          id: 'blockchains-layer-1-6'
        }
      },
      {
        type: 'LEARN',
        notionId: 'fdfbd964272445d5981d88c7f4c78410',
        title: 'Some Examples',
        content: '<div class="bloc1"><p>Each blockchain has its own approach to the trilemma, and each has made tradeoffs to focus on its goals. Bitcoin and Ethereum prioritize security and decentralization over scalability, leading to long transaction <span class="tooltip" definition="How long it takes until it is safe to trust that a transaction is final and accepted.">finality time</span> for Bitcoin and sky-high transaction fees for Ethereum. The demand to use smart contracts as a “decentralized world finance computer”, especially for DeFi, has meant many users making small transactions cannot afford to use Ethereum.</p><p>This high cost to use has provided an opening for alternative Layer 1’s like Binance chain. Binance prioritized scalability over decentralization for higher transaction throughput and cheaper fees, bringing many users away from Ethereum. Third generation chains like Solana, Hedera, Cosmos, and others use novel methods to try to solve the trilemma, but all blockchains are still subject to these basic constraints. In fact, each chain’s choice defines its ecosystem through the substantial effects that come from that choice.</p></div><div class="bloc2"><img src=\'/lesson/blockchains-layer-1/some-examples-e0e8eb7c.png\'></div>'
      },
      {
        type: 'LEARN',
        notionId: '997686d2404c4556a6841a0232705c8b',
        title: 'So what can be done?',
        content: '<div class="bloc1"><p>So if Ethereum has prioritized high security and decentralization, how can it scale to serve the needs of all users as the global financial network it aims to become? This is where the Ethereum roadmap can provide some answers: Layer 2s and blockchain sharding.</p><p>Layer 2s are an early solution to increasing Ethereum scalability without compromising on the other two parts of the blockchain trilemma. They are an additional layer sitting on top of the main blockchain, relying on the main chain for security but allowing users to benefit from reduced fees and faster transactions. We will explore them more in detail in our Layer 2 lesson.</p><p>Sharding basically splits the single blockchain into multiple chains that all run together in parallel, like adding more lanes to a road. It enables more transactions to be processed at once without sacrificing security or decentralization. Sharding is not a new technology, many non-blockchain applications use sharding to increase scalability, but it is new for blockchains. It’s very complicated to add sharding to a blockchain like Ethereum <em>while it is running</em>; it’s an area of active research and it will take some time until that transition is ready. </p></div><div class="bloc2"><img src=\'/lesson/blockchains-layer-1/so-what-can-be-done-5aed7436.png\'></div>'
      },
      {
        type: 'QUIZ',
        notionId: 'e1a2b41a64f9422c8082603459a28c0e',
        title: '✅ Layer 2s',
        quiz: {
          question: 'Blockchain Layer 2s are:',
          rightAnswerNumber: 4,
          answers: [
            'Reliant on the main chain to provide security and decentralization',
            'An abstraction on top of the main chain to increase scalability',
            '100% decentralized',
            'A and B only'
          ],
          id: 'blockchains-layer-1-7'
        }
      },
      {
        type: 'LEARN',
        notionId: '18c497caf1df4810afb1497884a26962',
        title: 'The future of Ethereum',
        content: '<div class="bloc1"><p>Previously known as the Ethereum 2.0 upgrade, the Ethereum network is evolving scalability without sacrificing the other aspects of the trilemma. These changes include the merge to Proof of Stake consensus, Layer 2s going live, sharding of the main chain, and an overall reduction of energy usage. <strong>All of these changes together will mean a faster, more environmentally-friendly, and cheaper Ethereum while still maintaining security and decentralization as core tenets.</strong> The Ethereum Foundation has an excellent webpage on coming <a href=\'https://ethereum.org/en/upgrades/\'>upgrades to Ethereum</a>.</p><p>These things take time, meanwhile, many Layer 2 protocols are building on top of Ethereum to help meet user demand in the short term without requiring updates to the Ethereum protocol itself. These Layer 2 protocols rely on baselayer Ethereum to provide decentralized security while they provide the scalability, and the diversity of Layer 2s is inherently decentralized! Ethereum scaling projects include protocols like Optimistic Ethereum, Polygon, Arbitrum, zkSync, and others.</p></div><div class="bloc2"><img src=\'/lesson/blockchains-layer-1/the-future-of-ethereum-ca844a29.png\'></div>'
      },
      {
        type: 'QUIZ',
        notionId: '79e758e2b8da45468f9f3f11281e2c6c',
        title: '✅ Ethereum Future',
        quiz: {
          question: 'The future of Ethereum involves:',
          rightAnswerNumber: 4,
          answers: [
            'Using Layer 2s and sharding to increase scalability',
            'Maintaining decentralization and security as core principles',
            'Reducing energy consumption of the blockchain using Proof of Stake consensus',
            'All of the above'
          ],
          id: 'blockchains-layer-1-8'
        }
      },
      {
        type: 'LEARN',
        notionId: 'a229a575b61b4f0f84018a0346de4658',
        title: 'What does it mean for Explorers?',
        content: '<div class="bloc1"><p>Even more so at the beginning of your journey, users need low fees to learn and explore the technology with low barriers to entry and low costs from mistakes. The Ethereum blockchain is not that in its current state, but it is one of the best candidates for fulfilling the dream of a global financial computing system. Explorers should learn to interact and use Ethereum without paying massive fees; using Layer 2s allows Explorers to have the security and decentralization benefits of Ethereum combined with the higher scalability.</p><p>The next lesson will explain Layer 2 solutions and how to get started with them. Onward explorers!</p></div>'
      },
      {
        type: 'QUEST',
        title: 'Blockchains Layer 1 Quest',
        component: 'BlockchainsLayer1'
      },
      {
        type: 'END',
        title: 'End of lesson'
      }
    ]
  },
  {
    poapImageLink: '/lesson/dex-aggregators/poap-a82f8a55.mp4',
    lessonImageLink: '/lesson/dex-aggregators/lesson-68757615.png',
    socialImageLink: '/lesson/dex-aggregators/social-00850afd.png',
    learningActions: '',
    marketingDescription: 'Learn and level up on DEX Aggregators, Liquidity, and Trade-Offs.',
    poapEventId: null,
    kudosId: null,
    duration: 15,
    learnings: '',
    difficulty: undefined,
    description: 'Learn and level up on DEX Aggregators, Liquidity, and Trade-Offs.',
    name: 'DEX Aggregators',
    quest: 'DEXAggregators',
    publicationStatus: 'hidden',
    isFeaturedOnHomepage: false,
    isCommentsEnabled: true,
    endOfLessonRedirect: 'https://tally.so/r/mODMpA',
    endOfLessonText: 'To give feedback about this lesson, click Next.',
    communityDiscussionLink: null,
    notionId: '42578b8813114832b8930cf59f6125af',
    slug: 'dex-aggregators',
    imageLinks: [
      '/lesson/dex-aggregators/introduction-fb1290e2.png',
      '/lesson/dex-aggregators/an-example-of-how-liquidity-impacts-prices-563cd643.png',
      '/lesson/dex-aggregators/shortcomings-of-traditional-dexs-thin-liquidity-622113fd.png',
      '/lesson/dex-aggregators/recombining-liquidity-with-dex-aggregators-02fcc407.png',
      '/lesson/dex-aggregators/how-gas-cost-is-calculated-on-ethereum-6f3863a0.png',
      '/lesson/dex-aggregators/how-aggregators-reduce-gas-costs-for-users-dcc55923.png',
      '/lesson/dex-aggregators/avoiding-sandwich-attacks-467c02e4.png',
      '/lesson/dex-aggregators/more-protection-from-sandwiches-otc-trades-75cc18b6.png'
    ],
    slides: [
      {
        type: 'LEARN',
        notionId: 'fdab9a0b1c7b457a9110f88dbac53d71',
        title: '<strong>Introduction</strong>',
        content: '<div class="bloc1"><p><span class="tooltip" definition="(DEX) protocol that facilitates exchange without requiring trusted intermediaries">Decentralized Exchange</span>s (DEXs) eliminate the costs of intermediaries and save Explorers money when trading assets. </p><p>But did you know, Explorer, that there’s more ways to save with DeFi technology? Using DEX aggregators, you can scan all possible trades on various DEX platforms simultaneously and execute the best trade route — all in one action. They help you get the best deal when doing a token <span class="tooltip" definition="A trade from one token to another">swap</span>. Just like airline flight aggregators help you find the cheapest flight, DEX aggregators help you maximize the value of your trade.</p><p>This lesson will show:</p><ol><li>How DEXs split liquidity and how that can result in reduced trading rates.</li><li>How DEX aggregators enable users to view and use multiple DEXs through one interface.</li><li>Multiple ways a single aggregator interface can save Explorers time and money.</li></ol></div><div class="bloc2"><img src=\'/lesson/dex-aggregators/introduction-fb1290e2.png\'></div>'
      },
      {
        type: 'LEARN',
        notionId: '0e59fd1b9b7943a3a70a44abc9e921c1',
        title: 'How Liquidity Affects Prices',
        content: '<div class="bloc1"><p>The amount of any token that is available to trade on a single market is called a token’s <span class="tooltip" definition="How much of a token is available for trading">liquidity</span>. The amount of liquidity available strongly influences the <span class="tooltip" definition="The amount prices on a DEX change due to trades">price impact</span> when making trades in DeFi; a large price impact means the trade will cost more, and a low price impact will cost less. Most people prefer to trade in markets with higher liquidity to reduce their price impact. </p><p>You can think of it like a swimming pool; the more water (liquidity) there is, the smaller the <em>change </em>in the water level (price impact) when someone jumps in or leaves. The size of that ‘someone’ (the trade) also affects the <em>change</em> in the water level (price impact).</p></div>'
      },
      {
        type: 'LEARN',
        notionId: '8ea31e80fcfc49d3a88ad09d03341c9c',
        title: 'An Example of How Liquidity Impacts Prices',
        content: '<div class="bloc1"><p>Let’s look at an example. </p><p>The BanklessDAO token (BANK) has a liquidity amount of ~30 million BANK on Uniswap, but only ~4.5 million BANK on SushiSwap. Uniswap has over 6x the BANK liquidity of SushiSwap.</p><p>If an Explorer was to purchase 10,000 BANK from each pool, they would find that the <span class="tooltip" definition="The amount prices on a DEX change due to trades">price impact</span> of their trade would result in a higher trade price in the SushiSwap pool — because their trade has pulled a larger percentage of the pool’s total liquidity.</p></div><div class="bloc2"><img src=\'/lesson/dex-aggregators/an-example-of-how-liquidity-impacts-prices-563cd643.png\'></div>'
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
        content: '<div class="bloc1"><p>DeFi continues to grow, but a problem is emerging for users: As more DEXs launch, the total amount of any individual token gets spread out. This is known as thin liquidity.</p><p>Remember the swimming pool: if the available water (<span class="tooltip" definition="How much of a token is available for trading">liquidity</span>) is split between multiple pools, the amount of water will be “thinner” in each pool compared to the total in the single original pool.</p><p>In 2020, Uniswap held much of the DEX liquidity to trade in DeFi. When SushiSwap launched the following month, it attracted over $1B worth of liquidity into its DEX from Uniswap, reducing total liquidity on Uniswap. This was just the start. Since then, more and more DEXs have entered the DeFi ecosystem, progressively thinning the liquidity of each pool.</p><p>The result is that today, any trade has a larger <span class="tooltip" definition="The amount prices on a DEX change due to trades">price impact</span> than when Uniswap held most of the ecosystem’s total liquidity. As more DEXs launch, it costs Explorers more to trade on any single DEX.</p></div><div class="bloc2"><img src=\'/lesson/dex-aggregators/shortcomings-of-traditional-dexs-thin-liquidity-622113fd.png\'></div>'
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
        content: '<div class="bloc1"><p>Large amounts of <span class="tooltip" definition="How much of a token is available for trading">liquidity</span> are needed to reduce price impact and save you money. DEX aggregators allow users to run trades through multiple DEXs at once and reduce the price impact; a big trade from an Explorer’s wallet gets broken down into multiple small trades across multiple DEXs.</p><p>DEX aggregators can even route trades through an <span class="tooltip" definition="A token that is part of the middle of a trade route, not the starting or ending token">intermediary token</span> , or more than one, if that gets a better result for users — like the way a flight aggregator might suggest an extra stop at another airport if it’s cheaper for the passenger. This discovery of the optimal trade route is done by sophisticated algorithms searching through all possible paths to find the cheapest trade route at that moment.</p></div><div class="bloc2"><img src=\'/lesson/dex-aggregators/recombining-liquidity-with-dex-aggregators-02fcc407.png\'></div>'
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
        content: '<div class="bloc1"><p>Let’s refresh how gas is calculated before we go on to see how the optimizations DEX aggregators make can reduce network fees for users.</p><p>Just like gas for a car, <span class="tooltip" definition="Transaction fees for blockchain networks">gas</span> is the fuel for running blockchain code on Ethereum. The farther you travel, the more gas your car uses. Likewise, the more computations you do, the more gas your code requires. Gas price is usually measured in very small amounts of ether, like cents to a dollar. For example: <br>1 <span class="tooltip" definition="A unit used on Ethereum blockchain, equivalent to 0.000000001 ETH (one billionth), used commonly to describe gas prices">gwei</span> is 1 billionth of an ether (1 gwei = 0.00000001 ETH).</p><p>The total gas cost is based on how much gas your transaction uses and the unit price of gas at the time of use.</p><p>The formula for calculating the price of a transaction is as follows:</p><p>As an example, let’s say gas costs are at 22 gwei per gas unit and the transaction uses 120 thousand units.</p></div><div class="bloc2"><img src=\'/lesson/dex-aggregators/how-gas-cost-is-calculated-on-ethereum-6f3863a0.png\'></div>'
      },
      {
        type: 'LEARN',
        notionId: '7196f021bcc541929d68b9bd0c018ac3',
        title: 'How Aggregators Reduce Gas Costs for Users',
        content: '<div class="bloc1"><p>Trade splitting would result in more transaction fees from the extra on-chain activity, except that advanced aggregators plan for transaction fees and include them in their calculations of the trade route. They simulate trades off chain, including <span class="tooltip" definition="Transaction fees for blockchain networks">gas</span> costs, to find <span class="tooltip" definition="What is the path taken from starting token to ending token in a trade">trade routes</span> that leave Explorers with the most value at the end of the interaction.</p><p>Some aggregators go even further: they may refund some of the network transaction fees from using their protocol. 1inch currently offers rebates in their token for a portion of gas costs from trading through their <span class="tooltip" definition="A decentralized app that connects to decentralized networks and protocols"><span class="tooltip" definition="Digital applications or programs that exist and run on a blockchain, and are outside the purview and control of a single authority.">dapp</span></span> on Ethereum mainnet.</p></div><div class="bloc2"><img src=\'/lesson/dex-aggregators/how-aggregators-reduce-gas-costs-for-users-dcc55923.png\'></div>'
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
        content: '<div class="bloc1"><p>There are even meta-aggregators of DEX aggregators! These platforms search through all competing DEX aggregators and serve price quotes to users. An example of this is the in-app swap function in the MetaMask wallet. This feature is actually a meta-aggregator that relies on DEX aggregators like 1inch to function.</p><p>Note: While convenient, <span class="tooltip" definition="A tool that brings together other aggregators into an extra overview layer">meta-aggregator</span> services can add extra costs on top of network transaction fees, increasing the overall cost for users. Explorers: make sure that your trades don’t end up more expensive than you intended. </p></div>'
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
        content: '<div class="bloc1"><p>Users swapping directly through DEXs can lose value up to the limit of their <span class="tooltip" definition="How much can prices change before your trade executes">slippage tolerance</span> due to price changes coordinated by block producers — these kinds of losses are called sandwich attacks. Did you know that sandwich attacks led users to a total loss of $235,000,000 during 2021? Explorers can protect themselves by keeping a low slippage tolerance when swapping tokens.</p><p>Fortunately, because of the recombined liquidity offered by DEX aggregators, the price impact of a trade is reduced. Explorers can keep their slippage tolerance low while saving more with DEX aggregators, as opposed to trading directly on a DEX.</p></div><div class="bloc2"><img src=\'/lesson/dex-aggregators/avoiding-sandwich-attacks-467c02e4.png\'></div>'
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
        content: '<div class="bloc1"><p>Some aggregators like 1inch even offer specialized OTC (<span class="tooltip" definition="Trades made directly with private entities">Over The Counter</span>) services that provide total protection against sandwich attacks. These optional services enable direct trading with other users, rather than facilitating trades through DeFi liquidity pools. Anyone can engage in OTC trades to fully remove the threat of sandwich attacks — providing another great way for Explorers to save.</p><p>CoWSwap is a Meta-Aggregator that also offers sandwich-resistant services, enabled by default, to ensure trades are 100% protected against sandwich attacks.</p></div><div class="bloc2"><img src=\'/lesson/dex-aggregators/more-protection-from-sandwiches-otc-trades-75cc18b6.png\'></div>'
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
      },
      {
        type: 'END',
        title: 'End of lesson'
      }
    ]
  }
]

export default LESSONS
