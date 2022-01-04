import { LessonType } from 'entities/lesson'

const LESSONS: LessonType[] = [
  {
    poapImageLink: 'https://app.banklessacademy.com/images/poap1.png',
    lessonImageLink: 'https://app.banklessacademy.com/images/banner1.jpg',
    learningActions:
      'Create and manage your own wallet<br>Connect your wallet to a web3 website',
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
        notionId: '5d548984b1534378bb716fdc14989f43',
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
        title: 'Collect your POAP',
      },
    ],
  },
  {
    poapImageLink: 'https://app.banklessacademy.com/images/poap1.png',
    lessonImageLink: 'https://app.banklessacademy.com/images/banner1.jpg',
    learningActions:
      'Transfer crypto into your web3 wallet in order to be ready to interact with DeFi later',
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
        notionId: '7a682ac28e4c4046a0292cf22640e45b',
        title: 'What is DeFi?',
        content:
          '<div class="bloc1"><ul><li>DeFi is an abbreviation for decentralized finance. It is a system by which financial products become available on a public decentralized <span class="tooltip" definition="A shared, unchangeable database or record of transactions.">blockchain</span> network.</li><li>The nature of decentralization utilizes peer-to-peer transactions, enabling anyone to use DeFi permissionlessly. No one is excluded from participating due to age, gender, location, nationality, income level, religion, race, etc.</li><li>Peer-to-peer transaction are conducted directly between 2 parties, rather than using middlemen like exchanges, banks, or brokerages.</li><li>The skill cube is our map of the DeFi ecosystem. The objective: to maximize crypto wealth and go bankless.</li></ul></div><div class="bloc2"><img src=\'https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F719d145c-f19f-4a0c-b643-a8ee9215a17e%2Fskill_cube.png?table=block&id=876afc7c-44ae-40c4-ac71-b76dacfa6334\'></div>',
      },
      {
        type: 'QUIZ',
        notionId: 'c50bb8b2fa5849599eaf08d3856609b6',
        title: 'Knowledge Check',
        quiz: {
          question: 'What is DeFi?',
          rightAnswerNumber: 2,
          answers: [
            '[A] A decentralized blockchain of financial products',
            'Both A and B',
            '[B] Acronym for decentralized finance',
            'None of the above',
          ],
          id: 'intro-to-defi-1',
        },
      },
      {
        type: 'LEARN',
        notionId: '63e86e851a9e4e2ea2384973e0f88413',
        title: 'How Defi works',
        content:
          '<div class="bloc1"><ul><li><span class="tooltip" definition="An abbreviation for decentralized finance.">DeFi</span> revolves around decentralized applications, also known as <span class="tooltip" definition="Digital applications or programs that exist and run on a blockchain, and are outside the purview and control of a single authority.">DApps</span></li><li>DApps are digital applications or programs that exist and run on a <span class="tooltip" definition="A shared, unchangeable database or record of transactions.">blockchain</span>.<span class=\'color-yellow\'> </span>They are outside the purview and control of a single authority.</li><li>DApps are typically accessed through a <span class="tooltip" definition="Refers to dApps that run on the blockchain and allow anyone to participate without monetizing their personal data.">Web3</span> enabled browser extension or application, such as MetaMask</li><li>Web3 refers to DApps that run on the blockchain and allow anyone to participate without monetizing their personal data.</li></ul></div><div class="bloc2"><img src=\'https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F62e0a78b-f5fa-44a3-aaf0-ea8dfe7108a5%2FUntitled.png?table=block&id=50814057-6c60-4cdc-94fb-276f2c648e87\'></div>',
      },
      {
        type: 'QUIZ',
        notionId: '880816dada204d6d97bc73b2a60fcbe8',
        title: 'Knowledge Check',
        quiz: {
          question: 'What is a common way to engage with DApps?',
          rightAnswerNumber: 1,
          answers: ['MetaMask', 'Apple Pay', 'Cash App', 'PayPal'],
          id: 'intro-to-defi-2',
        },
      },
      {
        type: 'LEARN',
        notionId: '529871783584424987b809dca3c7375b',
        title: 'What can you do with DeFi',
        content:
          '<div class="bloc1"><ul><li>The skill cube contains all the money verbs. </li><li>Money Verbs are the things you can do in legacy finance, but more efficiently in <span class="tooltip" definition="An abbreviation for decentralized finance.">DeFi</span> because there is no middleman. </li><li>Instead of paying the middleman, you can pay yourself! </li></ul></div><div class="bloc2"><img src=\'https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F0670f557-ad79-4d1c-ad80-8bd70ff5af6e%2Fhttps___bucketeer-e05bbc84-baa3-437e-9518-adb32be77984.s3.amazonaws.com_public_images_84b02006-3141-4b62-b1e9-009739064efb_896x690.png?table=block&id=c38a341a-3f8d-41a8-9332-7fe46427e4b0\'></div>',
      },
      {
        type: 'QUIZ',
        notionId: '07088c4e57114e41a7057c026d3b4fb7',
        title: 'Knowledge Check',
        quiz: {
          question: 'Why is DeFi more efficient?',
          rightAnswerNumber: 1,
          answers: [
            'because there is no middleman',
            'because there is a middleman',
            'lower brokerage fees',
            'all of the above',
          ],
          id: 'intro-to-defi-3',
        },
      },
      {
        type: 'QUIZ',
        notionId: '49deed96613f467480e57c448c5afb32',
        title: 'Knowledge Check',
        quiz: {
          question: 'Which of these are not money verbs?',
          rightAnswerNumber: 2,
          answers: ['stake', 'profit', 'spend', 'bet'],
          id: 'intro-to-defi-4',
        },
      },
      {
        type: 'LEARN',
        notionId: 'a75c5be3cfe14c2cbeb7efc66d580675',
        title: 'What can you do with DeFi - HODL',
        content:
          '<div class="bloc1"><ul><li><strong>HODL</strong> is an acronym for <strong>H</strong>old <strong>O</strong>n for <strong>D</strong>ear <strong>L</strong>ife</li><li>Crypto prices are highly volatile, they go up and down. </li><li>The HODL mentality is the idea of retaining assets even through short to medium term price fluctuations. By holding long term, the HODLer experiences more price appreciation. </li></ul></div><div class="bloc2"><img src=\'https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fc025c790-c443-4f1e-8822-7b84d4056e7c%2FScreen_Shot_2021-08-27_at_13.33.32.jpg?table=block&id=f55a7a41-7fd2-4424-bbee-ee28cac9e17c\'></div>',
      },
      {
        type: 'QUIZ',
        notionId: 'ae2dee8eb23148dbb5bcc8d35f9ae75c',
        title: 'Knowledge Check',
        quiz: {
          question: 'What does HODL stand for?',
          rightAnswerNumber: 3,
          answers: [
            'have your oppressive dreams linger',
            "hold on and don't lose",
            'hold on for dear life',
            'have outstanding debt liable',
          ],
          id: 'intro-to-defi-5',
        },
      },
      {
        type: 'LEARN',
        notionId: '7bec76e281aa4d17809843017fd61a32',
        title: 'What can you do with DeFi - Lend/Borrow',
        content:
          '<div class="bloc1"><ul><li>In DeFi, anyone can borrow and anyone can become a <span class="tooltip" definition="Deposits assets to earn interest">lender</span>.</li><li>DeFi lending and borrowing offers loans without the need for a bank or intermediary institution. Instead, lending is done on a <span class="tooltip" definition="A transaction between two parties that does not require a middleman or controlling entity.">peer-to-peer</span> level.</li><li>Similar to traditional loans, a lender will earn interest on the loan and the <span class="tooltip" definition="Willing to pay interest to lenders in order to borrow assets">borrower</span> will need to pay the principal of the loan plus interest within a set amount of time.</li><li>Peer-to-peer loans means that long-term investors can earn interest from the loan and it enables users to access loans at lower rates with DeFi than if they went through exchanges or through traditional loans.</li></ul></div><div class="bloc2"><img src=\'https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fe76d6096-70a3-47b9-a0f8-a3dc644829b5%2FLending02.png?table=block&id=10a7dbff-1dbd-4b88-ae00-680b7ee69809\'></div>',
      },
      {
        type: 'QUIZ',
        notionId: '5ebfe2415e514ba3b39082dbd9ca7ddc',
        title: 'Knowledge Check',
        quiz: {
          question:
            'Which of these are <em><strong>not</strong></em> an example of DeFi lending?',
          rightAnswerNumber: 3,
          answers: [
            'protocols to people',
            'peer-to-peer ',
            'banks to customers ',
            'people to protocols',
          ],
          id: 'intro-to-defi-6',
        },
      },
      {
        type: 'LEARN',
        notionId: 'b8e95bfd37634c7b9ba9538eda71a5cf',
        title: 'What can you do with DeFi: Stake',
        content:
          '<div class="bloc1"><ul><li><span class="tooltip" definition="The temporary commitment of a portion of your crypto into a smart contract for a specified amount of time in exchange for earning interest ("rewards")">Staking</span> in Defi is similar to lending, however it\'s a special type of lending.</li><li>Instead of lending your crypto to another user on a <span class="tooltip" definition="A transaction between two parties that does not require a middleman or controlling entity.">peer-to-peer</span> basis, you can lend your crypto to a network or protocol to help bolster its ability to process transactions.</li><li>In exchange for helping secure the network or protocol, you can earn rewards by <span class="tooltip" definition="The temporary commitment of a portion of your crypto into a smart contract for a specified amount of time in exchange for earning interest ("rewards")">staking</span>.</li></ul></div><div class="bloc2"><img src=\'https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F2c8cb40e-82dd-4629-943a-5e2d790fd580%2Fstaking.png?table=block&id=e56f800c-bce5-49e3-b6aa-9ad554675f8b\'></div>',
      },
      {
        type: 'QUIZ',
        notionId: '1873edad1c294e3ea1de37bdee5c9f73',
        title: 'Knowledge Check',
        quiz: {
          question:
            'Lending your crypto to a protocol to help bolster its ability to process transactions is an example of?',
          rightAnswerNumber: 2,
          answers: ['Trading', 'Staking', 'Borrowing', 'Lending'],
          id: 'intro-to-defi-7',
        },
      },
      {
        type: 'LEARN',
        notionId: '3e33a65318d8473e900f6836e6b56440',
        title: 'What can you do with DeFi: Spend',
        content:
          '<div class="bloc1"><ul><li>You can use your crypto in exchange for goods and services. </li><li>Some protocols are marketplaces which allow you to purchase clothing items, while other protocols allow users to buy NFTs with crypto.</li><li>There is no limit to what you can purchase with crypto. You can purchase groceries, clothes, games, collectibles, precious metals, real estate, and more!</li></ul></div>',
      },
      {
        type: 'QUIZ',
        notionId: '65ab45a683a041e59f128aabeff9a2df',
        title: 'Knowledge Check',
        quiz: {
          question: 'Can you use crypto in exchange for goods and services?',
          rightAnswerNumber: 1,
          answers: ['True', 'False'],
          id: 'intro-to-defi-8',
        },
      },
      {
        type: 'LEARN',
        notionId: '2df563fca1314fb987add05ef19267dc',
        title: 'What can you do with DeFi: Invest',
        content:
          '<div class="bloc1"><ul><li>Equal opportunity does not exist in traditional finance. Investors may be limited due to time constraints, income levels, voting power, etc.</li><li>In DeFi, there are no preferred or common shareholders. Everyone has the same right to vote in governance.</li><li>Anyone can purchase any asset, you don\'t need a specified income level to purchase assets.</li><li>You can also invest anytime, anywhere in DeFi. You are not limited to trading during restricted hours or location</li></ul></div><div class="bloc2"><img src=\'https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F05db2fa5-888a-40e1-94e9-51bbcf2c3e38%2FUntitled.png?table=block&id=369a71a0-1e96-4420-91c2-d8eeaf0f8b4a\'></div>',
      },
      {
        type: 'QUIZ',
        notionId: 'f9363d0146984e41ba5e7dd2ee5a1051',
        title: 'Knowledge Check',
        quiz: {
          question: 'Which of these is true for investing with DeFi?',
          rightAnswerNumber: 1,
          answers: [
            'DeFi is open around the clock year round ',
            'You need to be an accredited investor to invest in DeFi',
            'You can use your crypto in exchange for goods and services',
            'None of the above ',
          ],
          id: 'intro-to-defi-9',
        },
      },
      {
        type: 'LEARN',
        notionId: '3a8349a7a9824ce69260acedb6e53416',
        title: 'What can you do with DeFi: Earn',
        content:
          '<div class="bloc1"><ul><li>Earning in defi is when you<strong> </strong>do something of value in exchange for crypto rewards</li><li>The best thing is <strong>no upfront capital required</strong> for some earning actions</li><li>Examples include completing tasks for projects or participating in contests </li><li>You can claim a bounty and complete open tasks from DAOs and other projects</li></ul></div><div class="bloc2"><img src=\'https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Ffe922264-39e1-4d8a-851c-4831f179bdb5%2FDefi_Earn.png?table=block&id=da3fa7c1-cd72-4c13-9e80-240e8afb6bb0\'></div>',
      },
      {
        type: 'QUIZ',
        notionId: 'b3884385404c4e119184bcfc0b3128bb',
        title: 'Knowledge Check',
        quiz: {
          question: 'Which of these action can you do to earn in DeFi?',
          rightAnswerNumber: 2,
          answers: [
            'Buying coins that use DeFi technology',
            'Completing tasks for projects',
            'Using your crypto in exchange for goods and services',
            'Trading bonds',
          ],
          id: 'intro-to-defi-10',
        },
      },
      {
        type: 'LEARN',
        notionId: '907f4bdbe3b9499091afdaca6177d9bd',
        title: 'What can you do with DeFi: Trade',
        content:
          '<div class="bloc1"><ul><li>DeFi lets you trade any asset in a peer-to-peer environment. There is no middleman and you don\'t need permission.</li><li>Trading cryptocurrency is also available on centralized exchanges. However, because they own your private keys, there\'s a greater risk of stolen funds, frozen accounts, and/or censored transactions. </li><li>Trading in DeFi is permissionless and available 24/7 globally with no restrictions for any reason including name, age, gender, location, race, religion, or anything. DeFi is completely open and free for anybody to use. </li></ul></div><div class="bloc2"><img src=\'https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F5af70635-303d-4322-9c4d-4d310631885b%2FScreenshot_from_2021-09-22_11-52-39.png?table=block&id=353ab56d-6820-4b10-a830-58c73a88d905\'></div>',
      },
      {
        type: 'QUIZ',
        notionId: 'e8c5c6af32534277a3e333e8a554af99',
        title: 'Knowledge Check',
        quiz: {
          question: 'Can crypto only be traded during market hours?',
          rightAnswerNumber: 1,
          answers: ['No ', 'Yes'],
          id: 'intro-to-defi-11',
        },
      },
      {
        type: 'LEARN',
        notionId: 'bbebe50af69d497cb135b79f07bed281',
        title:
          '<strong>Bet—</strong>risk and earn money by making a bet (shorting/longing included)',
        content:
          '<div class="bloc1"><ul><li>A Bet is a Trade in a Cornered Market/ Traditionally in the dominant culture, betting is monopolized in a Cornered Market</li><li>In a Cornered Market like a casino, there is a predetermined risk of loss in favor of the middle man</li><li>In DeFi, when the middle man influence is reduced or removed risk of loss can be more fairly distributed or mitigated completely</li><li>Game Theory is used in DeFi to test and experiment with Community Owned and Governed Sports betting, Prediction Markets, and Lotteries.</li></ul></div><div class="bloc2"><img src=\'https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F71445ccc-c6d8-4ab7-966c-6dedc554e50c%2FScreenshot_from_2021-09-27_11-15-44.png?table=block&id=9efb6e85-f7de-40e7-aa00-5321150e9d74\'></div>',
      },
      {
        type: 'QUIZ',
        notionId: '3d674e10bd084400ac9d6baacf12929c',
        title: 'Knowledge Check',
        quiz: {
          question:
            'What happens when the middle man influence is reduced or removed?',
          rightAnswerNumber: 2,
          answers: [
            'None of the above',
            'Risk of loss can be more fairly distributed or mitigated completely',
            'There is a predetermined risk of loss in favor of the middle man',
            "You'll lose money",
          ],
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
  {
    poapImageLink: 'https://app.banklessacademy.com/images/poap1.png',
    lessonImageLink: 'https://app.banklessacademy.com/images/banner1.jpg',
    learningActions: undefined,
    knowledgeRequirements: 'No prior knowledge needed',
    poapEventId: 16394,
    duration: 15,
    learnings: undefined,
    difficulty: 'Easy',
    description:
      'Learn about the fundamental mechanics with blockchain technology',
    name: 'Blockchain Fundamentals',
    notionId: '562dba7dbd3949b480be367a64821cdf',
    slug: 'blockchain-fundamentals',
    slides: [
      {
        type: 'LEARN',
        notionId: '75a90b0c62ff4f638074809b097c08f6',
        title: 'Introduction',
        content:
          '<div class="bloc1"><p><span class="tooltip" definition="A shared, unchangeable database or record of transactions.">Blockchain</span> technology is a revolutionary way of storing and tracking data, but also making it accessible to anyone.</p><p>Although the word is singular, there are many different blockchains and all of them function differently. </p><p>Although popular blockchains such as Bitcoin (BTC) or Ethereum (ETH) function differently, they share a fundamental method for storing and tracking data.</p></div>',
      },
      {
        type: 'LEARN',
        notionId: '50dbddf305a844f19e09a0bcca2dd188',
        title: 'Block',
        content:
          '<div class="bloc1"><p>Data is organized and grouped together form a block. A <span class="tooltip" definition="A container that holds data on the blockchain.">block</span> is a container that holds data. </p><p>The structure in which data is stored varies depending on the blockchain. Remember, there are many different blockchains. </p><p>Each <span class="tooltip" definition="A container that holds data on the blockchain.">block</span> has a specific storage limit and holds a set amount of transaction data. Once the limit is reached, new data is grouped into a new block. </p><p>These blocks are arranged in chronological order, each linked to the previous one. You can imagine a straight line of blocks one after the other.</p></div><div class="bloc2"><img src=\'https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Ffc30577c-590c-4e6c-a0f2-1ab15199d060%2FUntitled.png?table=block&id=9738df19-bb41-4446-851f-d3181a68693a\'></div>',
      },
      {
        type: 'LEARN',
        notionId: '73f3c7d58e4341c6ab0df70d7555aebe',
        title: 'Chain',
        content:
          '<div class="bloc1"><p>The link between blocks is referred to as a chain. The <span class="tooltip" definition="Binds blocks of data together to form a database which cannot be altered or changed.">chain</span> binds blocks of data together to form a database which cannot be altered or changed.</p><p>If data needs to be modified, it is simply added to a new block with a chain to the old block containing the original data.</p><p>The methodology of chaining one block to the next in chronological order is a non destructive way to track data changes over time - hence the term <span class="tooltip" definition="A shared, unchangeable database or record of transactions.">blockchain</span>.</p></div><div class="bloc2"><img src=\'https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F7acc71df-e03e-4192-8609-f61fc8631a4c%2FUntitled.png?table=block&id=88708290-f4e3-4417-98e2-6421c277f3ef\'></div>',
      },
      {
        type: 'LEARN',
        notionId: '00557f2db7c3473b8b218e73e875799d',
        title: 'Decentralized',
        content:
          '<div class="bloc1"><p>Not only is data included on a <span class="tooltip" definition="A shared, unchangeable database or record of transactions.">blockchain</span> unchangeable, it is shared and distributed amongst a large network of computers. Each device on the network has the same data and no one device can change it.</p><p>This makes the blockchain decentralized. As no single authority or entity controls the data and it can be readily accessed by anyone. </p><p>You can also trust the data included in each block. The decentralized nature of blockchains reduces the opportunity to tamper with data. </p></div>',
      },
      {
        type: 'LEARN',
        notionId: '829dd3b2351e4eb188256573db8be2cb',
        title: 'Hash',
        content:
          '<div class="bloc1"><p>Data included on the <span class="tooltip" definition="A shared, unchangeable database or record of transactions.">blockchain</span> is difficult to tamper with because each piece of data has its own hash, or digital fingerprint of information.</p><p>Using encrypted information, a complex mathematical algorithm produces a unique alphanumeric <span class="tooltip" definition="A digital fingerprint for information.">hash</span>. This is important because the encrypted formula only has one unique solution, or hash, and is almost impossible to reverse engineer.</p><p>When viewing information on a blockchain, you can be sure that it is genuine and proven to be true and valid.</p></div><div class="bloc2"><img src=\'https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F65920402-004b-41e4-b902-6df2c8c13dcf%2FUntitled.png?table=block&id=55e508b0-38e5-41c0-9fea-f67dc68da243\'></div>',
      },
      {
        type: 'LEARN',
        notionId: '98b195e7ba4343a79e146abeae09439d',
        title: 'Transaction',
        content:
          '<div class="bloc1"><p>The data on any <span class="tooltip" definition="A shared, unchangeable database or record of transactions.">blockchain</span> is simply a list of transactions. A transaction is a record of an event. A <span class="tooltip" definition="A record of an event.">transaction</span> can vary from simple contract signatures or exchange events such as sending and receiving crypto assets.</p><p>Transactions are the most crucial aspect of the blockchain system. Recall that every piece of data, or transaction, has its own unique <span class="tooltip" definition="A digital fingerprint for information.">hash</span> produced by using a complex mathematical algorithm to solve an encrypted formula.</p><p>Blockchain technology is designed to guarantee that transactions can be created, transmitted through the network, verified, and eventually added to the global database known as the the blockchain.</p></div>',
      },
      {
        type: 'LEARN',
        notionId: 'e5ba019d8ac54af0907ec04f689c945a',
        title: 'Consensus',
        content:
          '<div class="bloc1"><p>Be mindful of the fact that blockchains function differently. They share the same fundamental principles, but possess key differences. One of those differences is in the way valid data is included on the blockchain.</p><p>Since the blockchain is decentralized, valid data is only included after it has achieved consensus by the shared, distributed network. You will have the opportunity to learn more about the different consensus mechanisms in a later lesson.</p><p>Regardless of method, blocks of data are verified through a consensus of several devices, each independently synchronizing data processed on each block, without the need of a central authority. </p></div><div class="bloc2"><img src=\'https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F4f856aaa-8658-42c0-a3b3-07b8d9a94217%2FUntitled.png?table=block&id=781ab658-66d1-447b-9c3a-135b37f1735e\'></div>',
      },
      {
        type: 'LEARN',
        notionId: 'dd964f2a655445c595c8095e494d5214',
        title: 'Epoch',
        content:
          '<div class="bloc1"><p>Another difference is that each <span class="tooltip" definition="A shared, unchangeable database or record of transactions.">blockchain</span> has its own <span class="tooltip" definition="The time taken for a specific number of blocks to be included on any particular blockchain.">epoch</span>. An epoch is the length of time for a specific number of blocks to be included on any particular blockchain.</p><p>Some epochs are used to specify when certain events will occur on a blockchain such as reward disbursements.</p><p>Every blockchain network has a different way of ascertaining its epoch.</p></div>',
      },
      {
        type: 'LEARN',
        notionId: '1b8292e044584b7fa72a285bb6e0643c',
        title: 'Crypto assets',
        content:
          '<div class="bloc1"><p>Crypto assets differ with each <span class="tooltip" definition="A shared, unchangeable database or record of transactions.">blockchain</span> as well. The two most popular forms of crypto assets on each blockchain are coins and tokens. The key difference is that coins have their own blockchain network and infrastructure, whereas tokens rely on the blockchain to host them.</p><p>Coins are essentially digital versions of money. Most blockchains have a native asset used as a form of currency to facilitate transactions on the network. For example, Bitcoin uses BTC to facilitate transactions and Ethereum uses ETH.</p><p><span class="tooltip" definition="Units that can stand for assets or deeds that are built on an existing blockchain.">Tokens</span> are digital assets that are built inside an existing blockchain. They can be programmed to represent different assets and act in different ways, but fundamentally are designed to be tradable and transferable.</p></div>',
      },
      {
        type: 'QUEST',
        title: 'Blockchain Fundamentals Quest',
        component: 'BlockchainFundamentals',
      },
      {
        type: 'POAP',
        title: 'Collect your POAP',
      },
    ],
  },
]

export default LESSONS
