import { LessonType } from 'entities/lesson'

const LESSONS: LessonType[] = [
  {
    poapImageLink: '/lesson/wallet-basics/poap-75d8aa76.png',
    lessonImageLink: '/lesson/wallet-basics/lesson-5aa84b59.png',
    socialImageLink: '/lesson/wallet-basics/social-230cc260.jpg',
    learningActions: 'Create and manage your own wallet\nConnect your wallet to a web3 website',
    marketingDescription: 'A crypto wallet is essential gear for Web3 and DeFi. Get basic training on how a wallet works and how to get started.',
    poapEventId: 26971,
    duration: 15,
    learnings: 'Find out what digital wallets are, what they allow you to do, and how to set up and protect your wallet as you get out and explore Web3.',
    difficulty: 'Easy',
    description: 'Learn how to create and manage a wallet securely.',
    name: 'Wallet Basics',
    quest: 'WalletBasics',
    publicationStatus: 'publish',
    isFeaturedOnHomepage: true,
    isCommentsEnabled: false,
    endOfLessonRedirect: '/lessons/academy-community',
    endOfLessonText: 'To continue to our Bonus Lesson about the Bankless Academy Community, click Next.',
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
        title: 'End of lesson'
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
    duration: 10,
    learnings: 'Learn what decentralized finance means and discover the game-changing possibilities that new blockchain-powered applications introduce to the world.',
    difficulty: 'Easy',
    description: 'Understand the basics of decentralized finance.',
    name: 'Intro to DeFi',
    quest: 'IntroToDeFi',
    publicationStatus: 'publish',
    isFeaturedOnHomepage: true,
    isCommentsEnabled: false,
    endOfLessonRedirect: 'https://tally.so/r/mRvNpm',
    endOfLessonText: 'To give feedback about the App, click Next.',
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
        content: '<div class="bloc1"><p>DeFi—short for <span class="tooltip" definition="No single authority or entity controls the data">decentralized</span> finance—refers to the fast-growing ecosystem of financial products, protocols, and applications that operate on public <span class="tooltip" definition="A shared, unchangeable database, or ledger, of recorded transactions.">blockchain</span> networks.</p><p>DeFi is rapidly transforming the world of finance with a range of new tools for putting crypto assets to work. It offers opportunities beyond simply buying crypto on a centralized exchange. It allows anyone and everyone to build a decentralized, bankless lifestyle.</p></div><div class="bloc2"><img src=\'/lesson/intro-to-defi/defi-defined-46782447.svg\'></div>'
      },
      {
        type: 'QUIZ',
        notionId: '5d93d188e0274acbb22cc32e433c3b67',
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
        content: '<div class="bloc1"><p><span class="tooltip" definition="An abbreviation for decentralized finance.">DeFi</span> transactions are <span class="tooltip" definition="Refers to a public blockchain that anyone can use to buy, sell, or trade assets.">permissionless</span>. This refers to a public <span class="tooltip" definition="A shared, unchangeable database, or ledger, of recorded transactions.">blockchain</span> that anyone can use to buy, sell, or trade assets. No third party controls or oversees activity. These transactions are carried out by decentralized applications, known as DApps. </p><p><span class="tooltip" definition="Digital applications or programs that exist and run on a blockchain, and are outside the purview and control of a single authority.">DApps</span> and DeFi platforms enable users to make an ever increasing number of financial transactions, 24/7, all over the world. We will introduce four of the most common opportunities used to earn yield in DeFi - investing, trading, lending and borrowing, and staking.</p></div><div class="bloc2"><img src=\'/lesson/intro-to-defi/what-you-can-do-with-defi-9b17cf2e.svg\'></div>'
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
        notionId: '6eebe3d8e3494c59ae2bd46cd5925869',
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
        content: '<div class="bloc1"><p>A decentralized exchange (DEX) shows current exchange rates between different crypto tokens and coins and serves as a digital marketplace that facilitates trading one currency for another by bringing together buyers and sellers. </p><p>The parties involved in a DEX trade don’t need to know or trust each other. In fact, it may appear that you are trading with the DEX. However, in most cases, the DEX simply facilitates the trade between two traders’ wallets in a <span class="tooltip" definition="Refers to a public blockchain that anyone can use to buy, sell, or trade assets.">permissionless</span> fashion.</p></div><div class="bloc2"><img src=\'/lesson/intro-to-defi/trading-8cd72977.svg\'></div>'
      },
      {
        type: 'QUIZ',
        notionId: '4e1e78e61bc240f0836346fcabb49f54',
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
        title: 'End of lesson'
      }
    ]
  },
  {
    poapImageLink: '/lesson/academy-community/poap-4fce19ff.png',
    lessonImageLink: '/lesson/academy-community/lesson-755fe7a3.png',
    socialImageLink: '/lesson/academy-community/social-1f64464b.jpg',
    learningActions: '',
    marketingDescription: 'Join the Academy Explorer Community on gm.xyz',
    poapEventId: null,
    duration: 10,
    learnings: '',
    difficulty: 'Easy',
    description: 'Join the Academy Explorer Community on gm.xyz',
    name: 'Academy Community',
    quest: 'AcademyCommunity',
    publicationStatus: 'hidden',
    isFeaturedOnHomepage: false,
    isCommentsEnabled: false,
    endOfLessonRedirect: null,
    endOfLessonText: undefined,
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
        content: '<div class="bloc1"><p>👋 New to the space? Meet with other fellow <strong>Explorers </strong>and share knowledge.</p><p>📖 Been here for a while? <strong>Become a mentor </strong>and gain recognition by teaching others.</p><p>Let’s <strong>learn together</strong>.</p><p>💬 <strong>General:</strong> Meet with other fellow <strong>Explorers </strong>and share knowledge.</p><p>🎙️ A<strong>sk-me-anything: </strong>Participate in our <strong>AMAs with industry specialists.</strong></p><p>💾 <strong>Library:</strong> Level up your <strong>knowledge </strong>about all-things web3 in the library.</p><p>🌟 <strong>Announcements:</strong> Stay up to date with important community announcements.</p></div>'
      },
      {
        type: 'QUEST',
        title: 'Academy Community Quest',
        component: 'AcademyCommunity'
      },
      {
        type: 'END',
        title: 'End of lesson'
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
    duration: 15,
    learnings: 'Take a closer look at the concepts and technology that make blockchains work and gain a clearer understanding of what makes them revolutionary. ',
    difficulty: 'Easy',
    description: 'Learn about the fundamental architecture of blockchain technology',
    name: 'Blockchain Basics',
    quest: 'BlockchainBasics',
    publicationStatus: 'publish',
    isFeaturedOnHomepage: true,
    isCommentsEnabled: false,
    endOfLessonRedirect: 'https://tally.so/r/3jaxrR',
    endOfLessonText: 'To give feedback about this lesson, click Next.',
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
        content: '<div class="bloc1"><p>Not only are transactions included on a <span class="tooltip" definition="A shared, unchangeable database, or ledger, of recorded transactions.">blockchain</span> ledger unchangeable, they are also shared and distributed amongst a large network of computers. To make sure that no single entity has the power to change the data, the blockchain ledger is stored on every device, called a node, on the network.</p><p>This shared data is what makes the blockchain ledger <span class="tooltip" definition="No single authority or entity controls the data">decentralized</span>. No single authority or entity controls the data. Blockchains like Ethereum are also <span class="tooltip" definition="Public blockchains allow anyone to view the blockchain ledger">public</span> because the ledger can be viewed by anyone. </p><p>We will see specifics of how new data is added and how we ensure everyone has a copy of the same data all the time in our upcoming Blockchain Theory lesson. For this lesson, just remember that the ledger data is shared by every computer running on the Ethereum network.</p></div>'
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
        title: 'End of lesson'
      }
    ]
  },
  {
    poapImageLink: '/lesson/web3-security/poap-369c812e.png',
    lessonImageLink: '/lesson/web3-security/lesson-c6aaf6fa.png',
    socialImageLink: '/lesson/web3-security/social-bf0e7fc3.jpg',
    learningActions: 'Avoid the scams in web3 and keep your assets safe.',
    marketingDescription: '',
    poapEventId: null,
    duration: 15,
    learnings: 'How the most common scams in web3 work and how to stay safe from them. ',
    difficulty: 'Easy',
    description: '',
    name: 'Web3 Security',
    quest: 'Web3Security',
    publicationStatus: 'hidden',
    isFeaturedOnHomepage: false,
    isCommentsEnabled: true,
    endOfLessonRedirect: null,
    endOfLessonText: undefined,
    notionId: '7a5b9b7afe804e6984bf279301dfa1db',
    slug: 'web3-security',
    imageLinks: [
      '/lesson/web3-security/social-media-safety-1-b0335438.png',
      '/lesson/web3-security/social-media-safety-2-88a744a4.png',
      '/lesson/web3-security/social-media-safety-2-67041f41.png'
    ],
    slides: [
      {
        type: 'LEARN',
        notionId: '50b5d9c9a7a34a2c82f6423f97e3e77d',
        title: '<strong>Introduction</strong>',
        content: '<div class="bloc1"><p>Web3 … [is] the vision of a new, better internet. At its core, Web3 uses blockchains, cryptocurrencies, and NFTs to give power back to the users in the form of ownership. … ‘<strong>Web1 was read-only, Web2 is read-write, Web3 will be read-write-own.</strong>’<br>- Ethereum.org</p><p>This online ownership of digital financial products is new for many, and that lack of experience gives opportunities for predatory people to scam and steal the assets of others. These scams work so well because most people aren’t aware of how they work. So congratulations, Academy Explorer, on taking the time to arm yourself with the knowledge that will protect you as you venture out into <span class="tooltip" definition="Refers to applications that run on the blockchain and allow anyone to participate without monetizing their personal data.">web3</span>!</p><p>This lesson will cover:</p><ul><li>web2 & web3 security,</li><li>the most common ways people lose their funds and how to protect oneself from them,</li><li>a general strategy for wallet security,</li><li>how one can recover if they are the victim of a scam.</li></ul></div>'
      },
      {
        type: 'LEARN',
        notionId: '44450164401340659f6553fadd0230e4',
        title: 'How does money work online?',
        content: '<div class="bloc1"><p>In web2, the institutions hold money on behalf of the people. A user must prove their identity to an institution in order to access and use their money. It’s the same as a bank account; one needs a login ID and a password. For a scammer to gain access to your money, they need this ID + password combination. Because the institutions are charged with protecting your money, fraudulent transactions can be reversed - like a credit card transaction dispute.</p><p>In web3, money works differently. It’s more like a locked cash wallet; once money is spent, it’s gone. Only private keys control access to the wallet, so for a scammer to gain access they need the <span class="tooltip" definition="Group of random words generated by a wallet on setup, they act as the master key to ALL accounts controlled by that wallet. NEVER SHARE YOUR SEED PHRASE WITH ANYONE FOR ANY REASON.">seed phrase</span>, that special set of secret words, to access someone’s <span class="tooltip" definition="A private key allows access to your wallet in order for you to send crypto assets to other address.">private keys</span> and steal from their wallet. </p><p>It’s very important to protect your seed phrase; people should <em><strong>never</strong></em> give their seed phrase to anyone for any reason. Also, you should never enter seed phrases somewhere they could become compromised, such as a camera app, a notes application, or even a password manager.</p></div>'
      },
      {
        type: 'QUIZ',
        notionId: 'f76ebdeaad9045198cefcf257902fb65',
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
        notionId: '55c51a6c7e2946a1a098ced62d4f7180',
        title: 'Protect your Passwords',
        content: '<div class="bloc1"><p>Password usage and management is important in both web2 and web3, because many web2.5 websites still use passwords to grant user access. It’s also important to distinguish how we should treat our seed phrase in comparison to our passwords, because there are indeed differences in best practices.</p><p>Passwords should be different for each and every web2 service people use online. This includes services like email, centralized exchanges, and other service accounts. It’s a problem if someone manages to get the ID + password for one account, but it’s far worse if that combination unlocks all of your accounts! Managing many different passwords takes coordination, but using a tool such as a password manager will help you keep track whilst keeping your secure.</p><p>Applications like 1password, LastPass, and BitWarden encrypt and store passwords securely; they can even generate new high-security passwords and store them automatically. The user just has to remember a single master password - which through this technology is more secure because password managers typically employ Two Factor Authentication.</p><p>Remember, in web2 a password is just one part of security, but in web3 the seed phrase is <strong>everything. </strong>Do <strong>not</strong> store a web3 <span class="tooltip" definition="Group of random words generated by a wallet on setup, they act as the master key to ALL accounts controlled by that wallet. NEVER SHARE YOUR SEED PHRASE WITH ANYONE FOR ANY REASON.">seed phrase</span> in a password manager - if you do, it takes just one password breach to obtain all of your web3 assets.</p></div>'
      },
      {
        type: 'QUIZ',
        notionId: 'e5f3d6c5c2da4d2d8571608caa109ef7',
        title: '✅ quiz',
        quiz: {
          question: 'Why are password managers helpful?',
          rightAnswerNumber: 5,
          answers: [
            'People only have to remember their master password to use them',
            'They generate and store strong, unique passwords',
            'They encrypt passwords to keep them secure',
            'They use Two Factor Authentication',
            'All of the above'
          ],
          id: 'web3-security-2'
        }
      },
      {
        type: 'LEARN',
        notionId: '704696e837db424088ae66bcb842e98b',
        title: 'Two Factor Authentication',
        content: '<div class="bloc1"><p>Two Factor Authentication, also known as 2FA, is a secondary layer of web2 security you have likely come across in your traditional browsing.</p><p>Many people have had their web2 accounts hacked or scammed out of money or credentials despite having strong passwords. It’s worth mentioning that it is now common for web2 websites to use a second layer of security two-factor authentication as well. 2FA uses single-use codes generated by another device in addition to the normal password for security. The other device could be a phone application, a desktop application, or even a physical security device.</p><p>Phone (SMS) 2FA is better than no 2FA, but phone companies are vulnerable to scammers using <span class="tooltip" definition="Manipulating someone into sharing sensitive or confidential information such as passwords or seed phrases">social engineering</span> as well; an account can be hacked via phone companies through no fault of the user. It’s much better to use authentication applications like Authy or Google Authenticator for 2FA.</p></div>'
      },
      {
        type: 'QUIZ',
        notionId: '09b76e03da494739bc72eaee68f1e50c',
        title: '✅ quiz',
        quiz: {
          question: 'Why is two-factor authentication strongly recommended?',
          rightAnswerNumber: 2,
          answers: [
            'It’s impossible to hack an account when the user has 2FA enabled',
            'It adds another layer of security to web2 accounts',
            'It makes passwords stronger',
            'All of the above'
          ],
          id: 'web3-security-3'
        }
      },
      {
        type: 'LEARN',
        notionId: 'ae2890ad87d94b49b1e85575da36c4ee',
        title: 'Social Engineering Scams',
        content: '<div class="bloc1"><p>In both web2 and web3, scammers use <span class="tooltip" definition="A type of social engineering attack where the attacker poses as a trusted person or organization to trick victims into sharing sensitive information or sending them money">phishing</span> tactics to trick people into giving up their passwords and seed phrases. Often they’ll pretend to be support staff for a product offering help, “Hello this is Metamask support”, or pretend to be an admin of a community, “New NFT mint, exclusive for our community”.</p><p>They use <span class="tooltip" definition="Manipulating someone into sharing sensitive or confidential information such as passwords or seed phrases">social engineering</span> to pressure people, “time is running out!”, make things feel exclusive, “Congratulations you won our giveaway!”, and generate <span class="tooltip" definition="Fear Of Missing Out. Anxiety or apprehension about missing out on or not getting things">FOMO</span> in the person being scammed ”early access to our pre-mint!”. <span class="tooltip" definition="Fear Of Missing Out. Anxiety or apprehension about missing out on or not getting things">FOMO</span> stands for the Fear Of Missing Out; it’s the stressful feeling that you’re not going to get a great benefit or opportunity unless you do something <strong>right now</strong>!</p><p>The best defense against FOMO is to simply step away and take a breather… seriously! Humans don’t think as clearly when stressed, that’s why FOMO is effective. Step away from the situation, calm down, and then it’s much easier to spot the scams for what they are.</p></div>'
      },
      {
        type: 'QUIZ',
        notionId: 'be6ab046c7b2408aae3afe725d0d1782',
        title: '✅ quiz',
        quiz: {
          question: 'How do scammers use social engineering?',
          rightAnswerNumber: 4,
          answers: [
            'Pretending to be an authority in a community',
            'Pressuring people with short amounts of time',
            'Offering giveaways or free NFTs to generate FOMO',
            'All of the above'
          ],
          id: 'web3-security-4'
        }
      },
      {
        type: 'LEARN',
        notionId: 'c189bdd9b32e45b6bf5562cf6958357d',
        title: 'Social Media Safety 1',
        content: '<div class="bloc1"><p>Social media like crypto Twitter and community Discord servers of crypto projects are full of scammers. They will always try to move to or start conversations in DMs to avoid being spotted by experienced community members. Real community members know it’s safer and more useful to talk in public areas!</p><p>No matter where you are talking to others, you should <em><strong>never</strong></em> give your <span class="tooltip" definition="Group of random words generated by a wallet on setup, they act as the master key to ALL accounts controlled by that wallet. NEVER SHARE YOUR SEED PHRASE WITH ANYONE FOR ANY REASON.">seed phrase</span> to anyone for any reason. If anyone asks for your seed phrase or private key, they are a scammer!</p></div><div class="bloc2"><img src=\'/lesson/web3-security/social-media-safety-1-b0335438.png\'></div>'
      },
      {
        type: 'LEARN',
        notionId: '276e9374da2e49428b3b4193dc692c86',
        title: 'Social Media Safety 2',
        content: '<div class="bloc-ab"><div class="bloc-a"><img src=\'/lesson/web3-security/social-media-safety-2-88a744a4.png\'></div><div class="bloc-b"><p><strong>Here are some red flags to watch for with social media:</strong></p><p>🚩 Language and grammar errors (typos, they’re/their/there, etc.)</p><p>🚩 FOMO generation (don’t miss out!)</p><p>🚩 Impersonation of authority or celebrity (admin, support, Vitalik, Elon Musk, etc.)</p><p>🚩 “Guaranteed profits/mints/return”</p><p>🚩 Unasked-for links and offers (especially in DMs)</p></div></div><div class="bloc-ab"><div class="bloc-a"><img src=\'/lesson/web3-security/social-media-safety-2-67041f41.png\'></div><div class="bloc-b"><p><strong>Best Practices to keep in mind:</strong></p><ul><li>Teams & admin will <em><strong>never </strong></em>DM NFT mint/sale details</li><li>Typos = scam alert ⚠</li><li>FOMO = scam alert ⚠</li><li>VERIFY EVERYTHING with an outside source, like the official project Twitter account</li><li>Check with other known community members</li></ul></div></div>'
      },
      {
        type: 'LEARN',
        notionId: '61574044744645b6a4f7fe140539a7ab',
        title: 'Scam-tokens and Scam-drops',
        content: '<div class="bloc1"><p>Besides social engineering, the second most common attack is getting sent a bunch of scam-tokens. These are tokens that scammers send to many people at once in the hopes that someone will try to move or sell the tokens and trigger the malicious code hiding in the token’s smart contract.</p><p>Malicious contracts often require people to spend far more ETH than is necessary in order to sell these scam-tokens, and others can completely drain wallets; these scam-tokens could even be NFTs! If the problem isn’t with the smart contract itself, scam-tokens will often lure victims back to phishing websites where scammers try to trick victims to enter their <span class="tooltip" definition="Group of random words generated by a wallet on setup, they act as the master key to ALL accounts controlled by that wallet. NEVER SHARE YOUR SEED PHRASE WITH ANYONE FOR ANY REASON.">seed phrase</span> or other credentials.</p><p>The best thing to do when you receive random tokens is to not interact with them at all; leave them alone and never touch them.</p></div>'
      },
      {
        type: 'QUIZ',
        notionId: 'e8969df508c34cd9bd481cdbd54cc3b9',
        title: '✅ quiz',
        quiz: {
          question: 'Why is interacting with scam-tokens dangerous?',
          rightAnswerNumber: 4,
          answers: [
            'They could steal other tokens from your wallet',
            'They could steal all of your ETH',
            'They could lead to a phishing website where a scammer will try to get your seed phrase',
            'All of the above'
          ],
          id: 'web3-security-5'
        }
      },
      {
        type: 'LEARN',
        notionId: '617b58e903f54546bf2e6e6cc598c8ed',
        title: 'Hardware Wallets',
        content: '<div class="bloc1"><p>If you remember from our <a href=\'https://app.banklessacademy.com/lessons/wallet-basics\'>Wallet Basics</a> lesson, a <span class="tooltip" definition="A type of non-custodial wallet that stores private keys offline in a physical hardware device.">hardware wallet</span> is only connected to the internet when you physically connect it to a computer or device that is connected to the internet. This makes your funds much safer as someone would have to physically steal your device to get your <span class="tooltip" definition="Group of random words generated by a wallet on setup, they act as the master key to ALL accounts controlled by that wallet. NEVER SHARE YOUR SEED PHRASE WITH ANYONE FOR ANY REASON.">seed phrase</span>.</p><p>It is even possible to use your hardware wallet through the MetaMask application. You get the convenience of a single wallet interface with the security of using a hardware wallet! </p><p>Ledger has <a href=\'https://www.ledger.com/academy/security/the-safest-way-to-use-metamask\'>written their own guide</a> on how to setup MetaMask for use with their device.</p></div>'
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
        title: 'Wallet Security Strategies',
        content: '<div class="bloc1"><p>After getting a hardware wallet, one of the best things to secure funds is to keep them spread between multiple wallets. In general, we recommend using at least 3 wallets to keep funds separate.</p><ol><li>A wallet that serves as your web3 identity for logins — like for the <a href=\'https://gm.xyz/c/BanklessAcademy\'>Bankless Academy community</a>.</li><li>A <span class="tooltip" definition="A type of non-custodial wallet that is perpetually connected to the internet.">hot wallet</span> for trading and other activities involving funds that may need to be moved on short notice.</li><li>A <span class="tooltip" definition="A type of non-custodial wallet that stores private keys offline in a physical hardware device.">hardware wallet</span> for the long-term <span class="tooltip" definition="Hold On for Dear Life. Crypto slang for not selling crypto no matter what the market conditions are">HODL</span> — these are funds intended to hold for a long time. It’s recommended to <em><strong>not </strong></em>use this wallet for interacting with smart contracts.</li></ol><p>PRO 👍: Separation ensures that scams only threaten funds in <em>that particular wallet</em> rather than <em>everything</em>. </p><p>CON 👎: It’s more complicated to keep track of, but keeping a list of what each wallet address’ purpose is can help.</p></div>'
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
        title: 'Recovering from a scam in Web2',
        content: '<div class="bloc1"><p>Hopefully you have not already fallen victim to a scammer, but if you have there are some steps you should take to secure your accounts once again. </p><p>For a scam involving a web2 service, like Gmail or Discord, you should:</p><ul><li>Change your password on the affected account</li><li>When it’s available, use the “sign out everywhere else” button to kick the scammers off your account</li><li>Enable 2FA with an authenticator app</li><li>Report the scam to the service involved</li><li>Talk to a trusted friend or loved one about how you were affected</li></ul></div>'
      },
      {
        type: 'LEARN',
        notionId: '5ae46db5024b4193a9c2be75f9f6e5b4',
        title: 'Recovering from a scam in Web3',
        content: '<div class="bloc1"><p>To spend tokens on Ethereum a contract must be given explicit permission. The token <span class="tooltip" definition="Allows an entity, usually a smart contract, the right to use a specified amount of your tokens in a transaction">allowance</span> is how much of that token you’ve given permission to be spent; keep allowances low to stay secure. </p><p>Scams in web3 don’t have anyone in charge of protocols to report the scammers to, but you can still take action:</p><ul><li>Move any funds still in the compromised wallet to a different wallet address,<strong> making sure the new address has a different seed phrase</strong></li><li>Review and revoke the token allowances you have given on your wallet with tools like <a href=\'https://etherscan.io/tokenapprovalchecker\'>etherscan.io</a> (note: revoking allowances will cost gas)</li><li>Use a <span class="tooltip" definition="A type of non-custodial wallet that stores private keys offline in a physical hardware device.">hardware wallet</span> in the future</li><li>Warn others by reporting the scam to the affected community</li><li>Talk to a trusted friend or loved one about how you were affected</li></ul></div>'
      },
      {
        type: 'QUEST',
        title: 'Web3 Security Quest',
        component: 'Web3Security'
      },
      {
        type: 'END',
        title: 'End of lesson'
      }
    ]
  }
]

export default LESSONS
