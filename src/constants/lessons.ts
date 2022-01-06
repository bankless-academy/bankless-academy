import { LessonType } from 'entities/lesson'

const LESSONS: LessonType[] = [
  {
    poapImageLink: 'https://app.banklessacademy.com/images/poap1.png',
    lessonImageLink: 'https://app.banklessacademy.com/images/banner1.jpg',
    learningActions:
      'Create and manage your own wallet<br>Connect your wallet to a web3 website',
    marketingDescription:
      'A crypto wallet is your passport to the world of DeFi. Learn the basics of how a wallet works and how to get started.',
    knowledgeRequirements: 'No prior knowledge needed.',
    poapEventId: 16394,
    duration: 15,
    learnings:
      'In this lesson you will learn the proper definition of a wallet, why you need a wallet, what "keys" are and how to protect them, and the important differences between "custodial" and "non-custodial".',
    difficulty: 'Easy',
    description: 'Learn how to create and manage a wallet securely.',
    name: 'Wallet Basics',
    notionId: '98405bd0f2b94bb2a3079eed504a011e',
    slug: 'wallet-basics',
    slides: [
      {
        type: 'LEARN',
        notionId: '0bf15ec24615455b9349774527410d81',
        title: 'Wallet Intro',
        content:
          '<div class="bloc2"><iframe allowfullscreen src=\'https://www.youtube.com/embed/AexoxTZEtOY?feature=oembed&rel=0\'></iframe></div>',
      },
      {
        type: 'LEARN',
        notionId: 'ccdc6c21f74e4993841b5eea9a2db029',
        title: 'Wallet Definition',
        content:
          '<div class="bloc1"><p>In the world of cryptocurrency, a wallet refers to an application or device you can use to interact with a <span class="tooltip" definition="A shared, unchangeable database or record of transactions.">blockchain</span>.</p><p>Your <span class="tooltip" definition="A wallet is an application or device used to send and receive crypto assets on the blockchain.">wallet</span> functions as a lock-box that secures your access to the blockchain.</p><p>When your wallet is connected to a blockchain, you can make purchases, transfer digital assets, interact with applications, and more!</p></div><div class="bloc2"><img src=\'https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F707ffa85-b517-4c35-8bae-be8125421b23%2Fcustodial_wallet_2.svg?table=block&id=acc5f0de-1b86-4f69-b3ae-6682f580ce95\'></div>',
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
            'An app or device used to interact with a blockchain',
          ],
          id: 'wallet-basics-1',
        },
      },
      {
        type: 'LEARN',
        notionId: 'f764c92b0620495981b32bd34dd1fc62',
        title: 'Recovery Phrase',
        content:
          '<div class="bloc1"><p>When you set up a new <span class="tooltip" definition="A wallet is an application or device used to send and receive crypto assets on the blockchain.">wallet</span>, the software generates a unique <span class="tooltip" definition="A recovery phrase is a list of 12 to 24 words which is used to generate your wallet\'s public key and private key.">recovery phrase</span> that is specific to that wallet account.</p><p>Also sometimes called a <em>seed phrase</em> or <em>secret recovery phras</em>e, your recovery phrase can be used to access your wallet and crypto assets if:</p><ul><li>Your wallet app or hardware fails unexpectedly or gets damaged.</li><li>You are unable to access it due to misplacement or theft.</li><li>You want to access your wallet account through the wallet app on a different computer or device.</li></ul><p>Most recovery phrases are a list of 12 to 24 words that represent a unique piece of data. That data is used to generate the <span class="tooltip" definition="A public key is your address. It gives others a point of reference to send crypto assets to you.">public key</span> and <span class="tooltip" definition="A private key allows access to your wallet in order for you to send crypto assets to other address.">private key</span> for your wallet.</p></div><div class="bloc2"><img src=\'https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fff2155a3-aa2f-4043-8509-7fc4b07ccd18%2Frecovery_phrase.svg?table=block&id=faaa0906-8278-4056-bfbb-dee4f24408e8\'></div>',
      },
      {
        type: 'QUIZ',
        notionId: '9d0454d30e60454397b0926523f7e73c',
        title: 'Knowledge Check',
        quiz: {
          question: 'What can you do with your recovery phrase?',
          rightAnswerNumber: 3,
          answers: [
            'Recover your wallet if lost, stolen, or damaged',
            'Access your wallet on multiple devices',
            'Both 1 & 2',
            'None of the above',
          ],
          id: 'wallet-basics-2',
        },
      },
      {
        type: 'LEARN',
        notionId: 'bf1bf37ca61845c5a4257cbaeff0e13c',
        title: 'Public Key',
        content:
          '<div class="bloc1"><p>You just learned how your <span class="tooltip" definition="A recovery phrase is a list of 12 to 24 words which is used to generate your wallet\'s public key and private key.">recovery phrase</span> relates to a <span class="tooltip" definition="A public key is your address. It gives others a point of reference to send crypto assets to you.">public key</span> and <span class="tooltip" definition="A private key allows access to your wallet in order for you to send crypto assets to other address.">private key</span>.</p><p>Note that a wallet can contain multiple accounts, and <em>each account</em> has a unique pair of public and private keys.</p><p>Think of a public key like your home address. It is public, anyone can see it, and it identifies the location to use to send crypto assets to you.</p></div><div class="bloc2"><img src=\'https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F0bcb5620-6fcc-4dbc-9c4c-69bcf494d13b%2FPublic_Key_force_file.svg?table=block&id=d4d34808-b088-4e5b-844c-dbbb8013d285\'></div>',
      },
      {
        type: 'LEARN',
        notionId: 'a6dab3c7c04949baa0c5448f57c91cfe',
        title: 'Private Key',
        content:
          '<div class="bloc1"><p>If your <span class="tooltip" definition="A public key is your address. It gives others a point of reference to send crypto assets to you.">public key</span> is like your home address, then your <span class="tooltip" definition="A private key allows access to your wallet in order for you to send crypto assets to other address.">private key</span> is like your house key.</p><p>It\'s called private because <em>only you</em> should have access to it.</p><p>The private key unlocks access to your wallet and your crypto assets, allowing you to send them to other wallet addresses.</p></div><div class="bloc2"><img src=\'https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F7b867956-3f8b-4bc1-a728-0e7d6e70cafa%2Fprivate_key.svg?table=block&id=e23d7b4a-34ed-4ee9-a383-af85c60c4c37\'></div>',
      },
      {
        type: 'QUIZ',
        notionId: '4997e321e0814dd2931dd21c664533d6',
        title: 'Knowledge Check',
        quiz: {
          question:
            'Your public key is like your _____ and your private key is like your _____',
          rightAnswerNumber: 2,
          answers: [
            'Routing Number / Account Number',
            'Home address / House key',
            'Address / Zip code',
            'Phone Number / Social Security Number',
          ],
          id: 'wallet-basics-3',
        },
      },
      {
        type: 'LEARN',
        notionId: 'a92f95a2da2a4429942b6aad2a260e1b',
        title: 'Custodial Wallet',
        content:
          '<div class="bloc1"><p>Since your <span class="tooltip" definition="A private key allows access to your wallet in order for you to send crypto assets to other address.">private key</span> unlocks access to your <span class="tooltip" definition="A wallet is an application or device used to send and receive crypto assets on the blockchain.">wallet</span>, keeping it private and secure is very important!</p><p>Not all wallets let you control your private key. With a <span class="tooltip" definition="With a custodial wallet, another party controls the private keys, thus controlling access to your crypto assets.">custodial wallet</span>, another party controls it. Accounts on Coinbase and Kraken are examples of custodial wallets that hold your private key.</p><p>This may be all some people need, but it requires you to trust these third parties to secure your crypto assets and give you access when you want to trade them or send them somewhere. Plus, your access to the world of <span class="tooltip" definition="An abbreviation for decentralized finance.">DeFi</span> applications will be limited. </p></div><div class="bloc2"><img src=\'https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F7c8647d0-dac9-44f8-a813-e09d8ba001ed%2FNot_Your_Key_Not_your_crypto_OK.svg?table=block&id=bc33c0b9-9de3-4d8c-a22b-4b7aaeb10126\'></div>',
      },
      {
        type: 'QUIZ',
        notionId: '39f830da64fb47608592eff742239223',
        title: 'Knowledge Check',
        quiz: {
          question: 'Do you control your private key with a custodial wallet?',
          rightAnswerNumber: 2,
          answers: ['Yes', 'No'],
          id: 'wallet-basics-4',
        },
      },
      {
        type: 'LEARN',
        notionId: 'a78db356b36c4bb19a85af61170b2471',
        title: 'Non-custodial Wallet',
        content:
          '<div class="bloc1"><p>Your passport to the exciting worlds of DeFi  and <span class="tooltip" definition="Refers to dApps that run on the blockchain and allow anyone to participate without monetizing their personal data.">Web3</span>—and the best way to safeguard your <span class="tooltip" definition="A private key allows access to your wallet in order for you to send crypto assets to other address.">private key</span> is a <span class="tooltip" definition="With a non-custodial wallet, you have sole control of your private keys, which in turn control your crypto assets.">non-custodial wallet</span>. </p><p>Remember: if you lose your private key, you will not be able to access your wallet to spend, withdraw, or transfer your crypto assets.</p><p>Fortunately, you <em>can</em> still recover your wallet with your <span class="tooltip" definition="A recovery phrase is a list of 12 to 24 words which is used to generate your wallet\'s public key and private key.">recovery phrase</span>. But if you lose that too, you will lose access to your wallet FOREVER!!!</p></div>',
      },
      {
        type: 'QUIZ',
        notionId: '4c2cc8a6d61247cc87007cfa636ea77f',
        title: 'Knowledge Check',
        quiz: {
          question:
            'Are you responsible for your private key with a non-custodial wallet?',
          rightAnswerNumber: 1,
          answers: ['Yes', 'No'],
          id: 'wallet-basics-5',
        },
      },
      {
        type: 'LEARN',
        notionId: '266abc84862f425bab294dc99dfddb04',
        title: 'Wallet Security',
        content:
          '<div class="bloc1"><h2>ALWAYS do this to protect your recovery phrase:</h2></div><div class="bloc2"><img src=\'https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fc658aedf-0ace-497e-a857-b379b88efd52%2FSecurity_Tips__ALWAYS.svg?table=block&id=1f8cea3a-7bb0-4dbe-b4ff-e32373c1266f\'></div>',
      },
      {
        type: 'LEARN',
        notionId: '2799e1af8e4b4d8f8648249b2fd37eb1',
        title: 'Wallet Security',
        content:
          '<div class="bloc1"><h2>NEVER do this to protect your recovery phrase:</h2></div><div class="bloc2"><img src=\'https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F6dc771a7-ece1-4877-a3d3-1c234c545931%2FSecurity_Tips___NEVER.svg?table=block&id=0f3a8900-f7bd-43dc-8160-f2f093f447a7\'></div>',
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
            'Write it on a durable material and store it in a safe place.',
          ],
          id: 'wallet-basics-6',
        },
      },
      {
        type: 'LEARN',
        notionId: '6c2cef180a894009807af59ed2d5f27c',
        title: 'Hot Wallet',
        content:
          '<div class="bloc1"><p>There are two major types of <span class="tooltip" definition="With a non-custodial wallet, you have sole control of your private keys, which in turn control your crypto assets.">non-custodial wallets</span>: software wallets (also called<span class="tooltip" definition="A type of non-custodial wallet that is perpetually connected to the internet.">hot wallets</span>) and hardware wallet (also called<span class="tooltip" definition="A type of non-custodial wallet that is stored offline and does not require a perpetual internet connection.">cold wallets</span>)</p><p>A software wallet is an app or browser extension that remains connected to the internet.</p><ul><li>PROS 👍: It is usually free, simple to set up, and easy to use.</li><li>CONS 👎: Because it is software connected to the internet, it\'s potentially a target for hackers.</li></ul></div><div class="bloc2"><img src=\'https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F825d5f16-2435-4b65-b925-64b174af3f57%2Fhot_wallet.svg?table=block&id=3ddcf559-bdcd-4979-8cf2-4d2b5f4f138e\'></div>',
      },
      {
        type: 'LEARN',
        notionId: '2db8d9f5695b4b46aa35bef2e17bcb75',
        title: 'Cold Wallet',
        content:
          '<div class="bloc1"><p>A <span class="tooltip" definition="A type of non-custodial wallet that is stored offline and does not require a perpetual internet connection.">cold wallet</span>, or hardware wallet, is only connected to the internet when you physically connect it to a computer or device.</p><ul><li>PROS 👍: It is more secure from threats like hacking.</li><li>CONS 👎: It is not free, not ideal for quick transactions, and can be cumbersome to use.</li></ul></div><div class="bloc2"><img src=\'https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Ff0e60c58-b9c3-4879-b59b-93c88c88e2d2%2Fcold_wallet.svg?table=block&id=26ae552f-617b-460f-8ff7-bd578a179427\'></div>',
      },
      {
        type: 'QUIZ',
        notionId: 'e331357c6b07425c8451d2a81c20f885',
        title: 'Knowledge Check',
        quiz: {
          question: 'Is a cold wallet more secure than a hot wallet?',
          rightAnswerNumber: 1,
          answers: ['Yes', 'No'],
          id: 'wallet-basics-7',
        },
      },
      {
        type: 'LEARN',
        notionId: '66d21ca797f44f02861545e2042582c8',
        title: 'MetaMask Wallet',
        content:
          '<div class="bloc1"><p>There are several non-custodial <span class="tooltip" definition="A type of non-custodial wallet that is perpetually connected to the internet.">hot wallets</span> available today. We will explore the popular MetaMask Wallet for the remainder of this lesson since:</p><ul><li>It is likely to be compatible with most <span class="tooltip" definition="An abbreviation for decentralized finance.">DeFi</span> apps.</li><li>It has a browser extension for Chrome, Brave, Edge, and Firefox internet browsers.</li><li>It is also available as a mobile app for Android and iOS users.</li></ul></div><div class="bloc2"><img src=\'https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Ff6b7c4b2-6598-4a09-99d9-bd714ce26034%2Fnon_custodial_wallet.svg?table=block&id=4bd53e76-1f7e-4694-bb83-8810441d2531\'></div>',
      },
      {
        type: 'QUIZ',
        notionId: 'e60c91b7bb054ea8b4e449ddf6f1042b',
        title: 'Knowledge Check',
        quiz: {
          question: 'Is MetaMask a custodial wallet?',
          rightAnswerNumber: 1,
          answers: ['No', 'Yes'],
          id: 'wallet-basics-8',
        },
      },
      {
        type: 'QUEST',
        title: 'Wallet Basics Quest',
        component: 'WalletBasics',
      },
      {
        type: 'POAP',
        title:
          'Collect your <span class="tooltip" definition="A POAP (Proof of Attendance Protocol) is a badge that keeps a reliable record of life experiences in your wallet, like for example successfully completing a lesson.">POAP</span>',
      },
    ],
  },
  {
    poapImageLink: 'https://app.banklessacademy.com/images/poap2.png',
    lessonImageLink: 'https://app.banklessacademy.com/images/banner2.jpg',
    learningActions:
      'Transfer crypto into your web3 wallet in order to be ready to interact with DeFi later',
    marketingDescription:
      'Move beyond centralized exchanges and discover the quickly expanding possibilities of decentralized finance.',
    knowledgeRequirements: 'Wallet Basics: how to manage a web3 wallet',
    poapEventId: 16394,
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
        notionId: '9c079b4441354613910b8d5a106a3c65',
        title: 'DeFi Defined',
        content:
          '<div class="bloc1"><p>DeFi—short for decentralized finance—refers to the fast-growing ecosystem of financial products, protocols, and applications that operate on public blockchain networks.</p><p>DeFi is rapidly transforming the world of finance with a range of new tools for using and benefiting from cryptocurrency assets. It offers opportunities to move beyond simply buying crypto on a centralized exchange to building a decentralized, bankless lifestyle.</p></div>',
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
            'Degenerate fishermen',
          ],
          id: 'intro-to-defi-1',
        },
      },
      {
        type: 'LEARN',
        notionId: '153a075b1a004f38a9c177486aa95395',
        title: 'What You Can Do With DeFi',
        content:
          '<div class="bloc1"><p>DeFi transactions are permissionless, and no third party controls or oversees them. These transactions are carried out by decentralized applications, known as <span class="tooltip" definition="Digital applications or programs that exist and run on a blockchain, and are outside the purview and control of a single authority.">DApps</span>, which operate on public blockchains.</p><p>DApps offer financial products that you would typically need a bank or financial services firm to get—but without the paperwork, approval processes, or service fees of the traditional finance world.</p></div><div class="bloc2"><img src=\'https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fe03cdd7d-cbf0-42ac-bb60-1237bcc12dea%2FWhat_You_Can_Do_with_DeFi.svg?table=block&id=d22db0ee-5f50-44d1-b24a-7fd39d89c824\'></div>',
      },
      {
        type: 'LEARN',
        notionId: '04719d0c432f43c4bfdd93e64a685a32',
        title: 'What You Can Do With DeFi',
        content:
          '<div class="bloc1"><p><span class="tooltip" definition="Digital applications or programs that exist and run on a blockchain, and are outside the purview and control of a single authority.">DApps</span> and <span class="tooltip" definition="An abbreviation for decentralized finance.">DeFi</span> platforms enable users to make an ever increasing number of financial transactions, 24/7, all over the world. We will explore five of these possibilities.</p><ul><li>Investing</li><li>Trading</li><li>Lending and borrowing</li><li>Earning yield</li><li>Staking</li></ul></div><div class="bloc2"><img src=\'https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F1bbead30-d7d5-4181-aceb-b74074210713%2FWhat_You_Can_Do_with_DeFi.svg?table=block&id=c881fce9-1aec-450b-b2b3-d9d12d6e0eac\'></div>',
      },
      {
        type: 'QUIZ',
        notionId: '3b77e3afde594c788122db7fe4afab6e',
        title: 'Knowledge Check',
        quiz: {
          question: 'What is a transaction you cannot do with DeFi?',
          rightAnswerNumber: 3,
          answers: [
            'Borrow money without paperwork',
            'Invest in cryptocurrency',
            'Use one wish to wish for more wishes',
            'Make financial transactions any time of day',
          ],
          id: 'intro-to-defi-2',
        },
      },
      {
        type: 'LEARN',
        notionId: '555dff92a9b34743b498f8a01de6ffa4',
        title: '<strong>Investing</strong>',
        content:
          '<div class="bloc1"><p>The most basic <span class="tooltip" definition="An abbreviation for decentralized finance.">DeFi</span> transaction is to purchase some cryptocurrency with the expectation that it will be worth more in the future.</p><p>HODL is a term used for keeping crypto assets for a long time. Depending on who you ask, the HODL meme either comes from a typo of HOLD or it stands for <strong>H</strong>old <strong>O</strong>n for <strong>D</strong>ear <strong>L</strong>ife.</p><p>DeFi simplifies buying and selling crypto whichever investing approach fits your needs.</p></div><div class="bloc2"><img src=\'https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F94ab8a68-a675-4243-960a-b8772072b783%2FInvesting.png?table=block&id=d9b82a1c-475c-43f7-a51d-f297c08eebed\'></div>',
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
            'All of the above',
          ],
          id: 'intro-to-defi-3',
        },
      },
      {
        type: 'LEARN',
        notionId: 'b1da9af463c24fd3a1fb8ce6a5b8dfaf',
        title: 'Trading',
        content:
          '<div class="bloc1"><p>A decentralized exchange (DEX) is a digital marketplace that simplifies trading one currency for another by bringing together buyers and sellers of crypto assets.</p><p>The platform shows the current exchange rate between different crypto tokens and coins.</p><p>The parties involved in a trade don’t need to know or trust each other. In fact, it may appear that you are trading with the DEX—however, in most cases it simply facilitates the trade between two <span class="tooltip" definition="A wallet is an application or device used to send and receive crypto assets on the blockchain.">wallet</span> addresses.</p></div><div class="bloc2"><img src=\'https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fd2808694-6a1c-43a5-bf63-4552f308e0c3%2FTrading.svg?table=block&id=ebf4ec26-06fc-4dd0-b0e4-c4ea7cb75a58\'></div>',
      },
      {
        type: 'LEARN',
        notionId: 'e45c2106904c48eb908746cb95494a17',
        title: 'Trading',
        content:
          '<div class="bloc1"><p>Once everyone confirms the terms of the trade with their wallets, smart contracts built into the protocol then execute the trade.</p><p>The record of the transaction is permanently recorded on the blockchain.</p></div><div class="bloc2"><img src=\'https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fd2808694-6a1c-43a5-bf63-4552f308e0c3%2FTrading.svg?table=block&id=dda6afc5-c94a-4ed7-8bed-534b0220d0c3\'></div>',
      },
      {
        type: 'LEARN',
        notionId: '0fe73546a6d646d4b4bd3610b9f0b575',
        title: 'Advanced Trading',
        content:
          '<div class="bloc1"><p>Some DEXes also offer advanced trading tools. These enable the kinds of trades and strategies used by day traders and other sophisticated investors in traditional financial markets.</p><p>They are topics for another course.</p></div><div class="bloc2"><img src=\'https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fd97962b2-3f8c-4af2-b4e2-251a23b1246c%2FAdvanced_Trading.svg?table=block&id=d540ee43-2965-4887-a9b7-fc0f0bcbc26d\'></div>',
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
            'None of the above',
          ],
          id: 'intro-to-defi-4',
        },
      },
      {
        type: 'LEARN',
        notionId: '929543eaa9b64ab9b14a6593e95fb9ef',
        title: '<strong>Lending & Borrowing</strong>',
        content:
          '<div class="bloc1"><p>There are DApps that enable people to lend and borrow crypto assets in a trustless environment.</p><p>Holders of cryptocurrency can use their coins or tokens as collateral to borrow other crypto.</p><p>Smart contracts that run on the blockchain ensure that if the borrower fails to repay their loan, their collateral will automatically be sold to pay for the debt.</p></div><div class="bloc2"><img src=\'https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F3f65365a-4bdb-4d6e-8974-5475563a9cbc%2FLend_Borrow.svg?table=block&id=4a1f4d18-88fb-4ed9-887b-b36f8f606a8b\'></div>',
      },
      {
        type: 'QUIZ',
        notionId: '062707cc00eb4fe9830d8f6535e50387',
        title: 'Knowledge Check',
        quiz: {
          question:
            'What happens to the borrower’s crypto-based collateral if they fail to repay the loan?',
          rightAnswerNumber: 3,
          answers: [
            'It gets seized by the government',
            'It gets put into an escrow account until the debt is paid',
            'It gets sold to pay for the debt',
            'Nothing—the loan is decentralized',
          ],
          id: 'intro-to-defi-5',
        },
      },
      {
        type: 'LEARN',
        notionId: '772e17d6104145f7969b47fd2e132e68',
        title: '<strong>Earning Yield</strong>',
        content:
          '<div class="bloc1"><p>There are a growing number of <span class="tooltip" definition="An abbreviation for decentralized finance.">DeFi</span> protocols and DApps that enable you to earn interest and other rewards for depositing your crypto into them.</p><p>You can deposit cryptocurrency into a pool of assets in exchange for a fixed or variable amount of interest.</p><p>Some DApps also reward depositors with additional tokens that have value. Together, interest and reward tokens deliver yield on what you deposited.</p></div><div class="bloc2"><img src=\'https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F1a781518-9bc5-4aa2-bc4d-c38c3751e449%2FEarning-Yield.png?table=block&id=c932b19d-b662-4d3c-961a-e1d4227d99fc\'></div>',
      },
      {
        type: 'QUIZ',
        notionId: '465a40fdbe24487695394ee1b4a4e97a',
        title: 'Knowledge Check',
        quiz: {
          question: 'How can you earn yield with crypto?',
          rightAnswerNumber: 3,
          answers: [
            'Earning interest by depositing into a DeFi protocol',
            'Earning rewards by depositing into a DeFi protocol',
            'Both A and B',
            'You can’t earn yield on crypto',
          ],
          id: 'intro-to-defi-6',
        },
      },
      {
        type: 'LEARN',
        notionId: '88ac3e93d3c849db8420b1700884030c',
        title: '<strong>Staking</strong>',
        content:
          '<div class="bloc1"><p>Some blockchains—including Ethereum in the near future—use a proof-of-stake (PoS) protocol for validating block transactions on the network.</p><p>With PoS, a node operator (miner) needs to stake (deposit) a significant amount of the network\'s native tokens in order to participate in earning rewards for validating. If they do a poor job or try to cheat, their stake will get slashed, costing them money.</p><p>Staking pools offer opportunities to lend node operators the crypto required for their stake. In exchange, the node operators share the rewards they earn by validating.</p></div><div class="bloc2"><img src=\'https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F7c67445c-65a6-4b66-a15c-f07abcc90c80%2FStacking.png?table=block&id=4e49ec8b-1770-4edf-958f-fa56e99777f4\'></div>',
      },
      {
        type: 'QUIZ',
        notionId: 'ae7f5581ae404a1a83e1542eeee9d945',
        title: 'Knowledge Check',
        quiz: {
          question:
            'What happens if a node validator makes mistakes or cheats?',
          rightAnswerNumber: 1,
          answers: [
            'Their stake is slashed',
            'Nothing—validating is decentralized',
            'A committee opens an investigation',
            'They must give a formal apology',
          ],
          id: 'intro-to-defi-7',
        },
      },
      {
        type: 'LEARN',
        notionId: '9b122d2d398a47428a41838e3bc9a521',
        title: '<strong>DeFi Downsides</strong>',
        content:
          '<div class="bloc1"><p>The opportunities of DeFi are not without risks and downsides, including:</p><p><strong>Hackers</strong></p><p>Where there is money and technology, there are people looking for ways to hack the system</p><p><strong>Smart contract risk</strong></p><p>DeFi runs on smart contracts. If there’s an error or loophole in the smart contract, someone can exploit it.</p><p><strong>No recourse</strong></p><p>Being decentralized also means there are no companies or government agencies that you can appeal to for help if something goes wrong.</p><h2>Knowledge and caution are important for your success in reaping the benefits of DeFi.</h2></div><div class="bloc2"><img src=\'https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Feaa60c7c-ec30-4e51-939d-803d86f70cba%2FDeFi_Downsides.jpeg?table=block&id=36a3cfd6-f11f-4215-8cdf-cd3e8923cfd7\'></div>',
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
            'There may be an error in the smart contract',
          ],
          id: 'intro-to-defi-8',
        },
      },
      {
        type: 'QUEST',
        title: 'Intro to DeFi Quest',
        component: 'IntroToDeFi',
      },
      {
        type: 'POAP',
        title:
          'Collect your <span class="tooltip" definition="A POAP (Proof of Attendance Protocol) is a badge that keeps a reliable record of life experiences in your wallet, like for example successfully completing a lesson.">POAP</span>',
      },
    ],
  },
]

export default LESSONS
