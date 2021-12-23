import { QuestType } from 'entities/quest'

const QUESTS: QuestType[] = [
  {
    poapImageLink: 'https://app.banklessacademy.com/images/poap1.png',
    questImageLink: 'https://app.banklessacademy.com/images/banner1.jpg',
    learningActions:
      'Create and manage your own wallet<br>Connect your wallet to a web3 website',
    knowledgeRequirements: 'No prior knowledge needed.',
    poapEventId: 16394,
    duration: 15,
    learnings:
      'In this course you will learn the proper definition of a wallet, why you need a wallet, what "keys" are and how to protect them, and the important differences between "custodial" and "non-custodial".',
    difficulty: 'Easy',
    description: 'Learn how to create and manage a wallet securely.',
    name: 'Wallet Basics',
    notionId: 'b4c50b50856d489ea2bb7c28e8724cf2',
    slug: 'wallet-basics',
    slides: [
      {
        type: 'LEARN',
        notionId: 'c0980b4a33fd48a7a029f95b82825149',
        title: 'Wallet Intro',
        content:
          '<div class="bloc2"><iframe allowfullscreen src=\'https://www.youtube.com/embed/AexoxTZEtOY?feature=oembed&rel=0\'></iframe></div>',
      },
      {
        type: 'LEARN',
        notionId: 'be2dff79a9e84c078da1e745cf4d0d05',
        title: 'Wallet Definition',
        content:
          '<div class="bloc1"><p>In the world of cryptocurrency, a wallet refers to an application or device you can use to interact with a <span class="tooltip" definition="A shared, unchangeable database or record of transactions.">blockchain</span>.</p><p>Your <span class="tooltip" definition="A wallet is an application or device used to send and receive crypto assets on the blockchain.">wallet</span> functions as a lock-box that secures your access to the blockchain.</p><p>When your wallet is connected to a blockchain, you can make purchases, transfer digital assets, interact with applications, and more!</p></div><div class="bloc2"><img src=\'https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F707ffa85-b517-4c35-8bae-be8125421b23%2Fcustodial_wallet_2.svg?table=block&id=3e456fc2-4618-4f87-83dd-15303bd9693e\'></div>',
      },
      {
        type: 'QUIZ',
        notionId: '1210fbe06b9a471081605c2a1d787b59',
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
        notionId: 'c659cfd0cd0a489dbc7e7ddcb797fca9',
        title: 'Recovery Phrase',
        content:
          '<div class="bloc1"><p>When you set up a new <span class="tooltip" definition="A wallet is an application or device used to send and receive crypto assets on the blockchain.">wallet</span>, the software generates a unique <span class="tooltip" definition="A recovery phrase is a list of 12 to 24 words which is used to generate your wallet\'s public key and private key.">recovery phrase</span> that is specific to that wallet account.</p><p>Also sometimes called a <em>seed phrase</em> or <em>secret recovery phras</em>e, your recovery phrase can be used to access your wallet and crypto assets if:</p><ul><li>Your wallet app or hardware fails unexpectedly or gets damaged.</li><li>You are unable to access it due to misplacement or theft.</li><li>You want to access your wallet account through the wallet app on a different computer or device.</li></ul><p>Most recovery phrases are a list of 12 to 24 words that represent a unique piece of data. That data is used to generate the <span class="tooltip" definition="A public key is your address. It gives others a point of reference to send crypto assets to you.">public key</span> and <span class="tooltip" definition="A private key allows access to your wallet in order for you to send crypto assets to other address.">private key</span> for your wallet.</p></div><div class="bloc2"><img src=\'https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fff2155a3-aa2f-4043-8509-7fc4b07ccd18%2Frecovery_phrase.svg?table=block&id=8cd1f9ae-b050-4404-a6a2-f48c2822ba91\'></div>',
      },
      {
        type: 'QUIZ',
        notionId: 'd50983c46a5e4915b1abbfd87078bce8',
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
        notionId: 'd45b6b84092841a8ae171602a4c4949d',
        title: 'Public Key',
        content:
          '<div class="bloc1"><p>You just learned how your <span class="tooltip" definition="A recovery phrase is a list of 12 to 24 words which is used to generate your wallet\'s public key and private key.">recovery phrase</span> relates to a <span class="tooltip" definition="A public key is your address. It gives others a point of reference to send crypto assets to you.">public key</span> and <span class="tooltip" definition="A private key allows access to your wallet in order for you to send crypto assets to other address.">private key</span>.</p><p>Note that a wallet can contain multiple accounts, and <em>each account</em> has a unique pair of public and private keys.</p><p>Think of a public key like your home address. It is public, anyone can see it, and it identifies the location to use to send crypto assets to you.</p></div><div class="bloc2"><img src=\'https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F0bcb5620-6fcc-4dbc-9c4c-69bcf494d13b%2FPublic_Key_force_file.svg?table=block&id=d7b93a95-6d50-43e1-9078-6512ceff1cbf\'></div>',
      },
      {
        type: 'LEARN',
        notionId: '4463c74c58be4cb1a10f04fa7340a865',
        title: 'Private Key',
        content:
          '<div class="bloc1"><p>If your <span class="tooltip" definition="A public key is your address. It gives others a point of reference to send crypto assets to you.">public key</span> is like your home address, then your <span class="tooltip" definition="A private key allows access to your wallet in order for you to send crypto assets to other address.">private key</span> is like your house key.</p><p>It\'s called private because <em>only you</em> should have access to it.</p><p>The private key unlocks access to your wallet and your crypto assets, allowing you to send them to other wallet addresses.</p></div><div class="bloc2"><img src=\'https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F7b867956-3f8b-4bc1-a728-0e7d6e70cafa%2Fprivate_key.svg?table=block&id=7cfd22eb-3dc6-4d16-8286-c141881b8de4\'></div>',
      },
      {
        type: 'QUIZ',
        notionId: '7e731113045f4aeea96ec8394ffd41b4',
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
        notionId: 'ed8f6f862b934160bcb8827615df9160',
        title: 'Custodial Wallet',
        content:
          '<div class="bloc1"><p>Since your <span class="tooltip" definition="A private key allows access to your wallet in order for you to send crypto assets to other address.">private key</span> unlocks access to your <span class="tooltip" definition="A wallet is an application or device used to send and receive crypto assets on the blockchain.">wallet</span>, keeping it private and secure is very important!</p><p>Not all wallets let you control your private key. With a <span class="tooltip" definition="With a custodial wallet, another party controls the private keys, thus controlling access to your crypto assets.">custodial wallet</span>, another party controls it. Accounts on Coinbase and Kraken are examples of custodial wallets that hold your private key.</p><p>This may be all some people need, but it requires you to trust these third parties to secure your crypto assets and give you access when you want to trade them or send them somewhere. Plus, your access to the world of <span class="tooltip" definition="An abbreviation for decentralized finance.">DeFi</span> applications will be limited. </p></div><div class="bloc2"><img src=\'https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F7c8647d0-dac9-44f8-a813-e09d8ba001ed%2FNot_Your_Key_Not_your_crypto_OK.svg?table=block&id=b99bdcc3-a9af-4051-872b-28d7cf77283a\'></div>',
      },
      {
        type: 'QUIZ',
        notionId: '9b5306ab433a4cb3abb5d5b3afde2f96',
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
        notionId: '95d0d27f0c824f63a59efe074da3f42f',
        title: 'Non-custodial Wallet',
        content:
          '<div class="bloc1"><p>Your passport to the exciting worlds of DeFi  and <span class="tooltip" definition="Refers to dApps that run on the blockchain and allow anyone to participate without monetizing their personal data.">Web3</span>—and the best way to safeguard your <span class="tooltip" definition="A private key allows access to your wallet in order for you to send crypto assets to other address.">private key</span> is a <span class="tooltip" definition="With a non-custodial wallet, you have sole control of your private keys, which in turn control your crypto assets.">non-custodial wallet</span>. </p><p>Remember: if you lose your private key, you will not be able to access your wallet to spend, withdraw, or transfer your crypto assets.</p><p>Fortunately, you <em>can</em> still recover your wallet with your <span class="tooltip" definition="A recovery phrase is a list of 12 to 24 words which is used to generate your wallet\'s public key and private key.">recovery phrase</span>. But if you lose that too, you will lose access to your wallet FOREVER!!!</p></div>',
      },
      {
        type: 'QUIZ',
        notionId: '16d6397c411844ed93a76d2b4c9093b2',
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
        notionId: '7c1645df8c9b42a8a5f611546344ac56',
        title: 'Wallet Security',
        content:
          '<div class="bloc1"><h2>ALWAYS do this to protect your recovery phrase:</h2></div><div class="bloc2"><img src=\'https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fc658aedf-0ace-497e-a857-b379b88efd52%2FSecurity_Tips__ALWAYS.svg?table=block&id=9a735064-a2d5-4099-88da-9b266ce6d3d3\'></div>',
      },
      {
        type: 'LEARN',
        notionId: 'd63757ad92da4b25833cc8600bb16235',
        title: 'Wallet Security',
        content:
          '<div class="bloc1"><h2>NEVER do this to protect your recovery phrase:</h2></div><div class="bloc2"><img src=\'https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F6dc771a7-ece1-4877-a3d3-1c234c545931%2FSecurity_Tips___NEVER.svg?table=block&id=dc3a6f3f-e014-4370-9b2d-f543ae7fa3b9\'></div>',
      },
      {
        type: 'QUIZ',
        notionId: '7ed670dc38dd464d8a4b0922b132932e',
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
        notionId: '4d99dbe57c1b4a8ab7732531d8ff1976',
        title: 'Hot Wallet',
        content:
          '<div class="bloc1"><p>There are two major types of <span class="tooltip" definition="With a non-custodial wallet, you have sole control of your private keys, which in turn control your crypto assets.">non-custodial wallets</span>: software wallets (also called<span class="tooltip" definition="A type of non-custodial wallet that is perpetually connected to the internet.">hot wallets</span>) and hardware wallet (also called<span class="tooltip" definition="A type of non-custodial wallet that is stored offline and does not require a perpetual internet connection.">cold wallets</span>)</p><p>A software wallet is an app or browser extension that remains connected to the internet.</p><ul><li>PROS 👍: It is usually free, simple to set up, and easy to use.</li><li>CONS 👎: Because it is software connected to the internet, it\'s potentially a target for hackers.</li></ul></div><div class="bloc2"><img src=\'https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F825d5f16-2435-4b65-b925-64b174af3f57%2Fhot_wallet.svg?table=block&id=d434207c-6c2a-4290-94d9-8304b7ce218c\'></div>',
      },
      {
        type: 'LEARN',
        notionId: 'a22d2a147605480fbae6fd694cc93fdd',
        title: 'Cold Wallet',
        content:
          '<div class="bloc1"><p>A <span class="tooltip" definition="A type of non-custodial wallet that is stored offline and does not require a perpetual internet connection.">cold wallet</span>, or hardware wallet, is only connected to the internet when you physically connect it to a computer or device.</p><ul><li>PROS 👍: It is more secure from threats like hacking.</li><li>CONS 👎: It is not free, not ideal for quick transactions, and can be cumbersome to use.</li></ul></div><div class="bloc2"><img src=\'https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Ff0e60c58-b9c3-4879-b59b-93c88c88e2d2%2Fcold_wallet.svg?table=block&id=c0c22060-93a5-499e-91d0-71b2c6b6cb73\'></div>',
      },
      {
        type: 'QUIZ',
        notionId: '196d226dab2347598048a2ca66939644',
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
        notionId: '6f1e8c83d2724004ae2791973e877fdf',
        title: 'MetaMask Wallet',
        content:
          '<div class="bloc1"><p>There are several non-custodial <span class="tooltip" definition="A type of non-custodial wallet that is perpetually connected to the internet.">hot wallets</span> available today. We will explore the popular MetaMask Wallet for the remainder of this course since:</p><ul><li>It is likely to be compatible with most <span class="tooltip" definition="An abbreviation for decentralized finance.">DeFi</span> apps.</li><li>It has a browser extension for Chrome, Brave, Edge, and Firefox internet browsers.</li><li>It is also available as a mobile app for Android and iOS users.</li></ul></div><div class="bloc2"><img src=\'https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Ff6b7c4b2-6598-4a09-99d9-bd714ce26034%2Fnon_custodial_wallet.svg?table=block&id=930f869e-3930-4122-b5ab-f6db5dd1227e\'></div>',
      },
      {
        type: 'QUIZ',
        notionId: '31287365a6cc432da9e79771032a092a',
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
]

export default QUESTS
