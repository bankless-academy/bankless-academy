import { LessonType } from 'entities/lesson'

const LESSONS: LessonType[] = [
  {
    poapImageLink: 'https://app.banklessacademy.com/images/wallet-basics-poap.png',
    lessonImageLink: 'https://app.banklessacademy.com/images/wallet-basics-lesson.png',
    socialImageLink: 'https://app.banklessacademy.com/images/wallet-basics-social.jpg',
    learningActions: 'Create and manage your own wallet<br>Connect your wallet to a web3 website',
    marketingDescription: 'A crypto wallet is essential gear for Web3 and DeFi. Get basic training on how a wallet works and how to get started.',
    knowledgeRequirements: 'No prior knowledge needed.',
    poapEventId: 26971,
    duration: 15,
    learnings: 'Find out what digital wallets are, what they allow you to do, and how to set up and protect your wallet as you get out and explore Web3.',
    difficulty: 'Easy',
    description: 'Learn how to create and manage a wallet securely.',
    name: 'Wallet Basics',
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
    quest: 'WalletBasics',
    slides: [
      {
        type: 'LEARN',
        notionId: '0bf15ec24615455b9349774527410d81',
        title: 'Wallet Intro',
        content: '<div class="bloc1"><p><strong>Greetings!</strong></p><p>Welcome to Bankless Academy. We’re excited to guide you on your journey into <span class="tooltip" definition="Refers to applications that run on the blockchain and allow anyone to participate without monetizing their personal data.">Web3</span>. To get started, you will need some essential equipment: a digital wallet.</p><p>A digital wallet is your passport to exploring the various worlds of Web3. This tool grants you access to incredible new possibilities while safeguarding your assets and identity.</p><p>In this lesson, we’ll introduce you to digital wallets, how they work, and how to set yours up to safely embark on your Web3 journey.</p><p>Once you’ve completed the lesson and have your wallet connected, you’ll also earn your first digital badge—known as a <span class="tooltip" definition="A POAP (Proof of Attendance Protocol) is a badge that keeps a reliable record of life experiences in your wallet, like for example successfully completing a lesson.">POAP</span>—as proof of your achievement in the Bankless Academy.</p><p>Let’s get started!</p></div><div class="bloc2"><img src=\'/lesson/wallet-basics/wallet-intro-7b45d75e.png\'></div>'
      },
      {
        type: 'LEARN',
        notionId: 'baf157b016ba48a890eb4cacb4b903e5',
        title: 'Wallet Definition',
        content: '<div class="bloc1"><p>In the world of cryptocurrency, a wallet refers to an application or device you can use to interact with a <span class="tooltip" definition="A shared, unchangeable database or record of transactions.">blockchain</span>.</p><p>Your <span class="tooltip" definition="A wallet is an application or device used to send and receive crypto assets on the blockchain.">wallet</span> functions as a lock-box that secures your access to the blockchain.</p><p>When your wallet is connected to a blockchain, you can make purchases, transfer digital assets, interact with applications, and more!</p></div><div class="bloc2"><img src=\'/lesson/wallet-basics/wallet-definition-4b8ae050.png\'></div>'
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
        type: 'POAP',
        title: 'Collect your <span class="tooltip" definition="A POAP (Proof of Attendance Protocol) is a badge that keeps a reliable record of life experiences in your wallet, like for example successfully completing a lesson.">POAP</span>'
      }
    ]
  },
  {
    poapImageLink: 'https://app.banklessacademy.com/images/intro-to-defi-poap.png',
    lessonImageLink: 'https://app.banklessacademy.com/images/intro-to-defi-lesson.png',
    socialImageLink: 'https://app.banklessacademy.com/images/intro-to-defi-social.jpg',
    learningActions: 'Transfer crypto into your web3 wallet in order to be ready to interact with DeFi later',
    marketingDescription: 'Move beyond centralized exchanges and start exploring the ever-expanding possibilities of decentralized finance.',
    knowledgeRequirements: 'Wallet Basics: how to manage a web3 wallet',
    poapEventId: 26972,
    duration: 10,
    learnings: 'Learn what decentralized finance means and discover the game-changing possibilities that new blockchain-powered applications introduce to the world.',
    difficulty: 'Easy',
    description: 'Understand the basics of decentralized finance.',
    name: 'Intro to DeFi',
    notionId: 'fdbf6e4c2ad648c6b815137d0e05eb90',
    slug: 'intro-to-defi',
    imageLinks: [
      '/lesson/intro-to-defi/defi-defined-46782447.svg',
      '/lesson/intro-to-defi/earning-yield-a4934a1c.png',
      '/lesson/intro-to-defi/what-you-can-do-with-defi-9b17cf2e.svg',
      '/lesson/intro-to-defi/investing-b3033379.svg',
      '/lesson/intro-to-defi/trading-e7663854.svg',
      '/lesson/intro-to-defi/lending-borrowing-2ee7b1f6.svg',
      '/lesson/intro-to-defi/staking-4cebb268.svg',
      '/lesson/intro-to-defi/defi-downsides-1be9f1bd.png',
      '/lesson/intro-to-defi/defi-downsides-fe07ede5.svg',
      '/lesson/intro-to-defi/defi-downsides-75123493.svg'
    ],
    quest: 'IntroToDeFi',
    slides: [
      {
        type: 'LEARN',
        notionId: '9c079b4441354613910b8d5a106a3c65',
        title: 'DeFi Defined',
        content: '<div class="bloc1"><p>DeFi—short for decentralized finance—refers to the fast-growing ecosystem of financial products, protocols, and applications that operate on public <span class="tooltip" definition="A shared, unchangeable database or record of transactions.">blockchain</span> networks.</p><p>DeFi is rapidly transforming the world of finance with a range of new tools for putting crypto assets to work. It offers opportunities beyond simply buying crypto on a centralized exchange. It allows anyone and everyone to build a decentralized, bankless lifestyle.</p></div><div class="bloc2"><img src=\'/lesson/intro-to-defi/defi-defined-46782447.svg\'></div>'
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
        content: '<div class="bloc1"><p>There are a growing number of <span class="tooltip" definition="An abbreviation for decentralized finance.">DeFi</span> protocols that enable you to earn interest and other rewards by using your crypto assets. You can have access to financial products that you would typically need a bank or financial services firm to get—but without the paperwork, middleman, approval process, and other hassles of the traditional finance world.</p><p>By removing the middleman, you also remove any service fees, dues, and commissions you would typically pay in the traditional finance world. With DeFi, you get to keep all the rewards, or yield earned from your assets. This is why DeFi is popular. </p></div><div class="bloc2"><img src=\'/lesson/intro-to-defi/earning-yield-a4934a1c.png\'></div>'
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
        content: '<div class="bloc1"><p><span class="tooltip" definition="An abbreviation for decentralized finance.">DeFi</span> transactions are <span class="tooltip" definition="Refers to a public blockchain that anyone can use to buy, sell, or trade assets.">permissionless</span>. This refers to a public <span class="tooltip" definition="A shared, unchangeable database or record of transactions.">blockchain</span> that anyone can use to buy, sell, or trade assets. No third party controls or oversees activity. These transactions are carried out by decentralized applications, known as DApps. </p><p><span class="tooltip" definition="Digital applications or programs that exist and run on a blockchain, and are outside the purview and control of a single authority.">DApps</span> and DeFi platforms enable users to make an ever increasing number of financial transactions, 24/7, all over the world. We will introduce four of the most common opportunities used to earn yield in DeFi - investing, trading, lending and borrowing, and staking.</p></div><div class="bloc2"><img src=\'/lesson/intro-to-defi/what-you-can-do-with-defi-9b17cf2e.svg\'></div>'
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
        content: '<div class="bloc1"><p>The most common <span class="tooltip" definition="An abbreviation for decentralized finance.">DeFi</span> transaction is to purchase some cryptocurrency with the expectation that it will be worth more in the future. This is known as investing.</p><p>HODL is a term used for keeping crypto assets for a long time. Depending on who you ask, the HODL meme either comes from a typo of HOLD or it stands for <strong>H</strong>old <strong>O</strong>n for <strong>D</strong>ear <strong>L</strong>ife.</p><p>DeFi allows early access to coins and tokens to find and invest in, before they are listed on centralized exchanges (CEX).</p></div><div class="bloc2"><img src=\'/lesson/intro-to-defi/investing-b3033379.svg\'></div>'
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
        content: '<div class="bloc1"><p>A decentralized exchange (DEX) shows current exchange rates between different crypto tokens and coins and serves as a digital marketplace that facilitates trading one currency for another by bringing together buyers and sellers. </p><p>The parties involved in a DEX trade don’t need to know or trust each other. In fact, it may appear that you are trading with the DEX. However, in most cases, the DEX simply facilitates the trade between two traders’ wallets in a <span class="tooltip" definition="Refers to a public blockchain that anyone can use to buy, sell, or trade assets.">permissionless</span> fashion.</p></div><div class="bloc2"><img src=\'/lesson/intro-to-defi/trading-e7663854.svg\'></div>'
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
        content: '<div class="bloc1"><p>DeFi lending and borrowing offers loans without the need for a bank or intermediary institution. Instead, lending is done on a <span class="tooltip" definition="A transaction between two parties that does not require a middleman or controlling entity.">peer-to-peer</span> level. That means transactions are between two parties and does not require a middleman or controlling entity.</p><p>There are <span class="tooltip" definition="Digital applications or programs that exist and run on a blockchain, and are outside the purview and control of a single authority.">DApps</span> that enable anyone to lend and borrow crypto assets. Similar to traditional loans, a lender will earn interest on the loan and the borrower will need to pay the principal of the loan plus interest.</p></div><div class="bloc2"><img src=\'/lesson/intro-to-defi/lending-borrowing-2ee7b1f6.svg\'></div>'
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
        content: '<div class="bloc1"><p>DeFi staking is similar to lending, however it\'s a special type of lending. Instead of lending your crypto to another user on a <span class="tooltip" definition="A transaction between two parties that does not require a middleman or controlling entity.">peer-to-peer</span> basis, you lend your crypto to a network or protocol. In exchange for helping secure the network or protocol, you earn rewards.</p><p>Centralized exchanges also offer staking. However, like their trading pairs, the staking opportunities and rewards are limited. With DeFi, there are many more staking possibilities than there are with centralized exchanges. </p></div><div class="bloc2"><img src=\'/lesson/intro-to-defi/staking-4cebb268.svg\'></div>'
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
        content: '<div class="bloc-ab"><div class="bloc-a"><img src=\'/lesson/intro-to-defi/defi-downsides-1be9f1bd.png\'></div><div class="bloc-b"><p><strong>Hackers</strong></p><p>Where there is money and technology, there are people looking for ways to hack the system and take advantage of poor security measures.</p></div></div><div class="bloc-ab"><div class="bloc-a"><img src=\'/lesson/intro-to-defi/defi-downsides-fe07ede5.svg\'></div><div class="bloc-b"><p><strong>Risk</strong></p><p>DeFi, like blockchain technology, runs on code. If there’s an error or loophole in the code, it can be exploited.</p></div></div><div class="bloc-ab"><div class="bloc-a"><img src=\'/lesson/intro-to-defi/defi-downsides-75123493.svg\'></div><div class="bloc-b"><p><strong>No recourse</strong></p><p>Being decentralized also means there are no companies or government agencies that you can appeal to for help if something goes wrong.</p></div></div>'
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
        type: 'POAP',
        title: 'Collect your <span class="tooltip" definition="A POAP (Proof of Attendance Protocol) is a badge that keeps a reliable record of life experiences in your wallet, like for example successfully completing a lesson.">POAP</span>'
      }
    ]
  }
]

export default LESSONS
