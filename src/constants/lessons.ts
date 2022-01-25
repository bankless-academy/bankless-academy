import { LessonType } from 'entities/lesson'

const LESSONS: LessonType[] = [
  {
    poapImageLink: 'https://app.banklessacademy.com/images/poap1.png',
    lessonImageLink: 'https://app.banklessacademy.com/images/banner1.jpg',
    learningActions: 'Create and manage your own wallet<br>Connect your wallet to a web3 website',
    marketingDescription: 'A crypto wallet is your passport to the world of DeFi. Learn the basics of how a wallet works and how to get started.',
    knowledgeRequirements: 'No prior knowledge needed.',
    poapEventId: 16394,
    duration: 15,
    learnings: 'In this lesson, you will learn what digital wallets are, what they allow you to do, and how to set up and protect your wallet to confidently get started on your bankless journey.',
    difficulty: 'Easy',
    description: 'Learn how to create and manage a wallet securely.',
    name: 'Wallet Basics',
    notionId: '98405bd0f2b94bb2a3079eed504a011e',
    slug: 'wallet-basics',
    quest: 'WalletBasics',
    slides: [
      {
        type: 'LEARN',
        notionId: '0bf15ec24615455b9349774527410d81',
        title: 'Wallet Intro',
        content: '<div class="bloc2"><iframe allowfullscreen src=\'https://www.youtube.com/embed/uQSerN6mEc4?feature=oembed&rel=0\'></iframe></div>'
      },
      {
        type: 'LEARN',
        notionId: 'ffe1c97eabe14834ae37ca851640d5aa',
        title: 'Wallet Definition',
        content: '<div class="bloc1"><p>In the world of cryptocurrency, a wallet refers to an application or device you can use to interact with a <span class="tooltip" definition="A shared, unchangeable database or record of transactions.">blockchain</span>.</p><p>Your <span class="tooltip" definition="A wallet is an application or device used to send and receive crypto assets on the blockchain.">wallet</span> functions as a lock-box that secures your access to the blockchain.</p><p>When your wallet is connected to a blockchain, you can make purchases, transfer digital assets, interact with applications, and more!</p></div><div class="bloc2"><img src=\'https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F707ffa85-b517-4c35-8bae-be8125421b23%2Fcustodial_wallet_2.svg?table=block&id=acc5f0de-1b86-4f69-b3ae-6682f580ce95\'></div>'
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
        content: '<div class="bloc1"><p>When you set up a new <span class="tooltip" definition="A wallet is an application or device used to send and receive crypto assets on the blockchain.">wallet</span>, the software generates a unique <span class="tooltip" definition="A recovery phrase is a list of 12 to 24 words which is used to generate your wallet\'s public key and private key.">recovery phrase</span> that is specific to that wallet account.</p><p>Also sometimes called a <em>seed phrase</em> or <em>secret recovery phras</em>e, your recovery phrase can be used to access your wallet and crypto assets if:</p><ul><li>Your wallet app or hardware fails unexpectedly or gets damaged.</li><li>You are unable to access it due to misplacement or theft.</li><li>You want to access your wallet account through the wallet app on a different computer or device.</li></ul><p>Most recovery phrases are a list of 12 to 24 words that represent a unique piece of data. That data is used to generate the <span class="tooltip" definition="A public key is your address. It gives others a point of reference to send crypto assets to you.">public key</span> and <span class="tooltip" definition="A private key allows access to your wallet in order for you to send crypto assets to other address.">private key</span> for your wallet.</p></div><div class="bloc2"><img src=\'https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fff2155a3-aa2f-4043-8509-7fc4b07ccd18%2Frecovery_phrase.svg?table=block&id=faaa0906-8278-4056-bfbb-dee4f24408e8\'></div>'
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
        content: '<div class="bloc1"><p>You just learned how your <span class="tooltip" definition="A recovery phrase is a list of 12 to 24 words which is used to generate your wallet\'s public key and private key.">recovery phrase</span> relates to a <span class="tooltip" definition="A public key is your address. It gives others a point of reference to send crypto assets to you.">public key</span> and <span class="tooltip" definition="A private key allows access to your wallet in order for you to send crypto assets to other address.">private key</span>.</p><p>Note that a wallet can contain multiple accounts, and <em>each account</em> has a unique pair of public and private keys.</p><p>Think of a public key like your home address. It is public, anyone can see it, and it identifies the location to use to send crypto assets to you.</p></div><div class="bloc2"><img src=\'https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F0bcb5620-6fcc-4dbc-9c4c-69bcf494d13b%2FPublic_Key_force_file.svg?table=block&id=d4d34808-b088-4e5b-844c-dbbb8013d285\'></div>'
      },
      {
        type: 'LEARN',
        notionId: 'a6dab3c7c04949baa0c5448f57c91cfe',
        title: 'Private Key',
        content: '<div class="bloc1"><p>If your <span class="tooltip" definition="A public key is your address. It gives others a point of reference to send crypto assets to you.">public key</span> is like your home address, then your <span class="tooltip" definition="A private key allows access to your wallet in order for you to send crypto assets to other address.">private key</span> is like your house key.</p><p>It\'s called private because <em>only you</em> should have access to it.</p><p>The private key unlocks access to your wallet and your crypto assets, allowing you to send them to other wallet addresses.</p></div><div class="bloc2"><img src=\'https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F7b867956-3f8b-4bc1-a728-0e7d6e70cafa%2Fprivate_key.svg?table=block&id=e23d7b4a-34ed-4ee9-a383-af85c60c4c37\'></div>'
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
        content: '<div class="bloc1"><p>Since your <span class="tooltip" definition="A private key allows access to your wallet in order for you to send crypto assets to other address.">private key</span> unlocks access to your <span class="tooltip" definition="A wallet is an application or device used to send and receive crypto assets on the blockchain.">wallet</span>, keeping it private and secure is very important!</p><p>Not all wallets let you control your private key. With a <span class="tooltip" definition="With a custodial wallet, another party controls the private keys, thus controlling access to your crypto assets.">custodial wallet</span>, another party controls it. Accounts on Coinbase and Kraken are examples of custodial wallets that hold your private key.</p><p>This may be all some people need, but it requires you to trust these third parties to secure your crypto assets and give you access when you want to trade them or send them somewhere. Plus, your access to the world of <span class="tooltip" definition="An abbreviation for decentralized finance.">DeFi</span> applications will be limited. </p></div><div class="bloc2"><img src=\'https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F7c8647d0-dac9-44f8-a813-e09d8ba001ed%2FNot_Your_Key_Not_your_crypto_OK.svg?table=block&id=bc33c0b9-9de3-4d8c-a22b-4b7aaeb10126\'></div>'
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
        content: '<div class="bloc1"><p>Your passport to the exciting worlds of DeFi  and <span class="tooltip" definition="Refers to dApps that run on the blockchain and allow anyone to participate without monetizing their personal data.">Web3</span>—and the best way to safeguard your <span class="tooltip" definition="A private key allows access to your wallet in order for you to send crypto assets to other address.">private key</span> is a <span class="tooltip" definition="With a non-custodial wallet, you have sole control of your private keys, which in turn control your crypto assets.">non-custodial wallet</span>. </p><p>Remember: if you lose your private key, you will not be able to access your wallet to spend, withdraw, or transfer your crypto assets.</p><p>Fortunately, you <em>can</em> still recover your wallet with your <span class="tooltip" definition="A recovery phrase is a list of 12 to 24 words which is used to generate your wallet\'s public key and private key.">recovery phrase</span>. But if you lose that too, you will lose access to your wallet FOREVER!!!</p></div>'
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
        content: '<div class="bloc-ab"><div class="bloc-a"><img src="https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fc658aedf-0ace-497e-a857-b379b88efd52%2FSecurity_Tips__ALWAYS.svg?table=block&id=1f8cea3a-7bb0-4dbe-b4ff-e32373c1266f"></div><div class="bloc-b"><h2>ALWAYS do this to protect your recovery phrase</h2></div></div><div class="bloc-ab"><div class="bloc-a"><img src="https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F6dc771a7-ece1-4877-a3d3-1c234c545931%2FSecurity_Tips___NEVER.svg?table=block&id=0f3a8900-f7bd-43dc-8160-f2f093f447a7"></div><div class="bloc-b"><h2>NEVER do this to protect your recovery phrase</h2></div></div>'
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
        content: '<div class="bloc1"><p>There are two major types of <span class="tooltip" definition="With a non-custodial wallet, you have sole control of your private keys, which in turn control your crypto assets.">non-custodial wallets</span>: software wallets (also called <span class="tooltip" definition="A type of non-custodial wallet that is perpetually connected to the internet.">hot wallets</span>) and hardware wallets (also called <span class="tooltip" definition="A type of non-custodial wallet that is stored offline and does not require a perpetual internet connection.">cold wallets</span>)</p><p>A software wallet is an app or browser extension that remains connected to the internet.</p><ul><li>PROS 👍: It is usually free, simple to set up, and easy to use.</li><li>CONS 👎: Because it is software connected to the internet, it\'s potentially a target for hackers.</li></ul></div><div class="bloc2"><img src=\'https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F825d5f16-2435-4b65-b925-64b174af3f57%2Fhot_wallet.svg?table=block&id=3ddcf559-bdcd-4979-8cf2-4d2b5f4f138e\'></div>'
      },
      {
        type: 'LEARN',
        notionId: '2db8d9f5695b4b46aa35bef2e17bcb75',
        title: 'Cold Wallet',
        content: '<div class="bloc1"><p>A <span class="tooltip" definition="A type of non-custodial wallet that is stored offline and does not require a perpetual internet connection.">cold wallet</span>, or hardware wallet, is only connected to the internet when you physically connect it to a computer or device.</p><ul><li>PROS 👍: It is more secure from threats like hacking.</li><li>CONS 👎: It is not free, not ideal for quick transactions, and can be cumbersome to use.</li></ul></div><div class="bloc2"><img src=\'https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Ff0e60c58-b9c3-4879-b59b-93c88c88e2d2%2Fcold_wallet.svg?table=block&id=26ae552f-617b-460f-8ff7-bd578a179427\'></div>'
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
        content: '<div class="bloc1"><p>There are several non-custodial <span class="tooltip" definition="A type of non-custodial wallet that is perpetually connected to the internet.">hot wallets</span> available today. We will explore the popular MetaMask Wallet for the remainder of this lesson since:</p><ul><li>It is likely to be compatible with most <span class="tooltip" definition="An abbreviation for decentralized finance.">DeFi</span> apps.</li><li>It has a browser extension for Chrome, Brave, Edge, and Firefox internet browsers.</li><li>It is also available as a mobile app for Android and iOS users.</li></ul></div><div class="bloc2"><img src=\'https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Ff6b7c4b2-6598-4a09-99d9-bd714ce26034%2Fnon_custodial_wallet.svg?table=block&id=4bd53e76-1f7e-4694-bb83-8810441d2531\'></div>'
      },
      {
        type: 'QUIZ',
        notionId: 'e60c91b7bb054ea8b4e449ddf6f1042b',
        title: 'Knowledge Check',
        quiz: {
          question: 'Is MetaMask a custodial wallet?',
          rightAnswerNumber: 1,
          answers: [
            'No',
            'Yes'
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
    poapImageLink: 'https://app.banklessacademy.com/images/poap2.png',
    lessonImageLink: 'https://app.banklessacademy.com/images/banner2.jpg',
    learningActions: 'Transfer crypto into your web3 wallet in order to be ready to interact with DeFi later',
    marketingDescription: 'Move beyond centralized exchanges and discover the quickly expanding possibilities of Decentralized Finance.',
    knowledgeRequirements: 'Wallet Basics: how to manage a web3 wallet',
    poapEventId: 21670,
    duration: 10,
    learnings: 'Learn what decentralized finance means and the game-changing possibilities that new blockchain-powered applications are introducing to the world.',
    difficulty: 'Easy',
    description: 'Understand the basics of Decentralized Finance',
    name: 'Intro to DeFi',
    notionId: 'fdbf6e4c2ad648c6b815137d0e05eb90',
    slug: 'intro-to-defi',
    quest: 'IntroToDeFi',
    slides: [
      {
        type: 'LEARN',
        notionId: '9c079b4441354613910b8d5a106a3c65',
        title: 'DeFi Defined',
        content: '<div class="bloc1"><p>DeFi—short for decentralized finance—refers to the fast-growing ecosystem of financial products, protocols, and applications that operate on public blockchain networks.</p><p>DeFi is rapidly transforming the world of finance with a range of new tools for putting crypto assets to work. It offers opportunities beyond simply buying crypto on a centralized exchange. It allows anyone and everyone to build a decentralized, bankless lifestyle.</p></div><div class="bloc2"><img src=\'https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fa87de5fa-f760-4d52-aaa7-029fb026e70f%2FWhat_you_can_do_with_DeFi_half_page.svg?table=block&id=c27fdefb-4620-49f9-818a-335de2d92829\'></div>'
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
        content: '<div class="bloc1"><p>There are a growing number of <span class="tooltip" definition="An abbreviation for decentralized finance.">DeFi</span> protocols that enable you to earn interest and other rewards by using your crypto assets. You can have access to financial products that you would typically need a bank or financial services firm to get—but without the paperwork, middleman, approval process, and other hassles of the traditional finance world.</p><p>By removing the middleman, you also remove any service fees, dues, and commissions you would typically pay in the traditional finance world. With DeFi, you get to keep all the rewards, or yield, earned from your assets. This is why DeFi is popular. </p></div><div class="bloc2"><img src=\'https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F2d3b0ce8-ebd1-45ff-aabf-0fc1cb7e0d2c%2FEarning_Yield.svg?table=block&id=79e89f9b-54b5-40e8-898e-513f125f7ff5\'></div>'
      },
      {
        type: 'QUIZ',
        notionId: '465a40fdbe24487695394ee1b4a4e97a',
        title: 'Knowledge Check',
        quiz: {
          question: 'How can you earn yield with crypto?',
          rightAnswerNumber: 4,
          answers: [
            '[A] Earning interest by depositing into a DeFi protocol',
            '[B] Earning rewards by depositing into a DeFi protocol',
            '[C] You can’t earn yield on crypto',
            '[D] Both A and B'
          ],
          id: 'intro-to-defi-2'
        }
      },
      {
        type: 'LEARN',
        notionId: '153a075b1a004f38a9c177486aa95395',
        title: 'What You Can Do With DeFi',
        content: '<div class="bloc1"><p><span class="tooltip" definition="An abbreviation for decentralized finance.">DeFi</span> transactions are permissionless. This refers to a public blockchain that anyone can use to buy, sell, or trade assets. No third party controls or oversees activity. These transactions are carried out by decentralized applications, known as DApps. </p><p>DApps and DeFi platforms enable users to make an ever increasing number of financial transactions, 24/7, all over the world. We will introduce four of the most common opportunities used to earn yield in DeFi - investing, trading, lending and borrowing, and staking.</p></div><div class="bloc2"><img src=\'https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fe4f70323-d72a-46c5-b67d-bcc1de55bd8e%2FWhat_you_can_do_with_DeFi.svg?table=block&id=fcedf040-108b-4f7a-9c7b-44bcdf7e4b67\'></div>'
      },
      {
        type: 'QUIZ',
        notionId: '3b77e3afde594c788122db7fe4afab6e',
        title: 'Knowledge Check',
        quiz: {
          question: 'DeFi transactions are ____?',
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
        content: '<div class="bloc1"><p>The most common <span class="tooltip" definition="An abbreviation for decentralized finance.">DeFi</span> transaction is to purchase some cryptocurrency with the expectation that it will be worth more in the future. This is known as investing.</p><p>HODL is a term used for keeping crypto assets for a long time. Depending on who you ask, the HODL meme either comes from a typo of HOLD or it stands for <strong>H</strong>old <strong>O</strong>n for <strong>D</strong>ear <strong>L</strong>ife.</p><p>DeFi allows early access to coins and tokens to find and invest in, before they are listed on centralized exchanges. (CEX)</p></div><div class="bloc2"><img src=\'https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fe52d42d6-c758-4f33-9f56-62e3d1c58297%2FInvesting.svg?table=block&id=c9b9b519-5598-4888-b53f-bb36fa01ed25\'></div>'
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
        content: '<div class="bloc1"><p>A decentralized exchange (DEX) allows DeFi users to bypass the traditional know your customer (KYC) procedures enforced by a centralized exchange (CEX) such as Coinbase, Binance, or Kraken. It also allows trades between pairs before they are offered by a CEX.</p><p>The parties involved in a DEX trade don’t need to know or trust each other. In fact, it may appear that you are trading with the DEX. However, in most cases, the DEX simply facilitates the trade between two traders’ wallets in a <span class="tooltip" definition="Refers to a public blockchain that anyone can use to buy, sell, or trade assets.">permissionless</span> fashion.</p></div><div class="bloc2"><img src=\'https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fd2808694-6a1c-43a5-bf63-4552f308e0c3%2FTrading.svg?table=block&id=ebf4ec26-06fc-4dd0-b0e4-c4ea7cb75a58\'></div>'
      },
      {
        type: 'LEARN',
        notionId: '0fe73546a6d646d4b4bd3610b9f0b575',
        title: 'Advanced Trading',
        content: '<div class="bloc1"><p>A DEX shows current exchange rates between different crypto tokens and coins and serves as a digital marketplace that facilitates trading one currency for another by bringing together buyers and sellers. </p><p>Some DEXes also offer advanced trading tools. These enable specific trading strategies used by day traders and other sophisticated investors in traditional financial markets. </p></div><div class="bloc2"><img src=\'https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fd97962b2-3f8c-4af2-b4e2-251a23b1246c%2FAdvanced_Trading.svg?table=block&id=d540ee43-2965-4887-a9b7-fc0f0bcbc26d\'></div>'
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
        content: '<div class="bloc1"><p>DeFi lending and borrowing offers loans without the need for a bank or intermediary institution. Instead, lending is done on a peer-to-peer level. That means transactions are between two parties and does not require a middleman or controlling entity.</p><p>There are <span class="tooltip" definition="Digital applications or programs that exist and run on a blockchain, and are outside the purview and control of a single authority.">DApps</span> that enable anyone to lend and borrow crypto assets. Similar to traditional loans, a lender will earn interest on the loan and the borrower will need to pay the principal of the loan plus interest.</p></div><div class="bloc2"><img src=\'https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F3f65365a-4bdb-4d6e-8974-5475563a9cbc%2FLend_Borrow.svg?table=block&id=4a1f4d18-88fb-4ed9-887b-b36f8f606a8b\'></div>'
      },
      {
        type: 'QUIZ',
        notionId: '062707cc00eb4fe9830d8f6535e50387',
        title: 'Knowledge Check',
        quiz: {
          question: 'DeFi lending is done on a _____ level.',
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
        content: '<div class="bloc1"><p>DeFi staking is similar to lending, however it\'s a special type of lending. Instead of lending your crypto to another user on a <span class="tooltip" definition="A transaction between two parties that does not require a middleman or controlling entity.">peer-to-peer</span> basis, you lend your crypto to a network or protocol. In exchange for helping secure the network or protocol, you earn rewards.</p><p>Centralized exchanges also offer staking. However, like their trading pairs, the staking opportunities and rewards are limited. With DeFi, there are many more staking possibilities than there are with centralized exchanges. </p></div><div class="bloc2"><img src=\'https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Ffdb9781a-a46c-4bfd-8999-5002bc8c286c%2FDeFi_Staking_Slide_8.0_V9.svg?table=block&id=650b312b-37f6-4c16-8553-b598bdbcb0bb\'></div>'
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
        content: '<div class="bloc-ab"><div class="bloc-a"><img src="https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F8fdafb79-2ed8-4e4a-a4eb-3bd47ce0ab47%2Fdd1.png?table=block&id=38d10cb5-7d02-433d-88c7-710c2221f5c8"></div><div class="bloc-b"><p><strong>Hackers</strong></p><p>Where there is money and technology, there are people looking for ways to hack the system and take advantage of poor security measures.</p></div></div><div class="bloc-ab"><div class="bloc-a"><img src="https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F25651e5d-6b2b-4a58-8e90-0eab1fbd39e9%2Fdd2.png?table=block&id=6b088f38-d513-4885-a56c-7d9f0a2ac93e"></div><div class="bloc-b"><p><strong>Risk</strong></p><p>DeFi, like blockchain technology, runs on code. If there’s an error or loophole in the code, it can be exploited.</p></div></div><div class="bloc-ab"><div class="bloc-a"><img src="https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F7006afa0-d521-4cfe-ab73-effb98b96404%2Fdd3.png?table=block&id=d53b22a2-0c8d-4fc8-a6a7-17776273318d"></div><div class="bloc-b"><p><strong>No recourse</strong></p><p>Being decentralized also means there are no companies or government agencies that you can appeal to for help if something goes wrong.</p></div></div>'
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
            'There may be an error in the smart contract'
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
