import { QuestType } from 'entities/quest'

const QUESTS: QuestType[] = [
  {
    poapImageLink:
      'https://bankless-academy-git-dktheme-banklessdao.vercel.app/images/poap1.png',
    questImageLink:
      'https://bankless-academy-git-dktheme-banklessdao.vercel.app/images/banner1.jpg',
    learningActions:
      'Create and manage your own wallet<br>Connect your wallet to a web3 website',
    knowledgeRequirements: 'No prior knowledge needed.',
    poapEventId: 6454,
    duration: 15,
    learnings:
      'In this course you will learn the proper definition of a wallet, why you need a wallet, what "keys" are and how to protect them, and the important differences between "custodial" and "non-custodial".',
    difficulty: 'Easy',
    description: 'Learn how to create and manage a wallet securely.',
    name: 'Wallet Basics',
    notionId: '98405bd0f2b94bb2a3079eed504a011e',
    slug: 'wallet-basics',
    slides: [
      {
        type: 'LEARN',
        title: 'Crypto Wallet Basics',
        content:
          '<div class="bloc2"><iframe allowfullscreen src=\'https://www.youtube.com/embed/AexoxTZEtOY?feature=oembed&rel=0\'></iframe></div>',
      },
      {
        type: 'LEARN',
        title: 'What is a wallet?',
        content:
          '<div class="bloc1"><p>In the world of cryptocurrency, a wallet refers to an application or device you can use to interact with a <span class="tooltip" definition="An immutable, unchangeable database or record of transactions that can be verified by users.">blockchain</span>. </p><p>Your wallet functions as a sort of lockbox that secures your access to the blockchain.</p><p>When your wallet is connected to a blockchain, you can make purchases, transfer digital assets, interact with applications, and more!</p></div><div class="bloc2"><img src=\'https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F6fc3b563-b8c8-4976-bd11-f47724937083%2Fcustodial_wallet.svg?table=block&id=5f30bb67-48c1-4a2d-ba2d-a006128d5f58\'></div>',
      },
      {
        type: 'QUIZ',
        title: 'What is a wallet?',
        quiz: {
          rightAnswerNumber: 4,
          answers: [
            'A device equipped with RFID technology',
            'A velcro bi-fold device',
            'An account that protects my assets',
            'An app or device used to interact with a blockchain.',
          ],
          id: 'wallet-basics-1',
        },
      },
      {
        type: 'LEARN',
        title: 'What is a recovery phrase?',
        content:
          '<div class="bloc1"><p>When you set up a new <span class="tooltip" definition="A wallet is an application or device used to send and receive crypto assets on the blockchain.">wallet</span>, the software generates a unique <span class="tooltip" definition="A recovery phrase is a list of 12 to 24 words which is used to generate your wallet\'s public key and private key.">recovery phrase</span> that\'s specific to that wallet account. </p><p>Most recovery phrases are a list of 12 to 24 words that represent a unique piece of data. That data is used to generate the <span class="tooltip" definition="A public key is your address. It gives others a point of reference to send crypto assets to you.">public key</span> and <span class="tooltip" definition="A private key allows access to your wallet in order for you to send crypto assets to other address.">private key</span> for your wallet.</p><p>Also sometimes called a <em>seed phrase</em> or <em>secret recovery phras</em>e, your recovery phrase can be used to access your wallet and crypto if:</p><ul><li>Your wallet app or hardware fails unexpectedly or gets damaged.</li><li>You are unable to access it due to misplacement or theft.</li><li>You want to access your wallet account through the wallet app on a different computer or device.</li></ul></div><div class="bloc2"><img src=\'https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fff2155a3-aa2f-4043-8509-7fc4b07ccd18%2Frecovery_phrase.svg?table=block&id=faaa0906-8278-4056-bfbb-dee4f24408e8\'></div>',
      },
      {
        type: 'QUIZ',
        title: 'You can use a recovery phrase to _____',
        quiz: {
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
        title: 'Public keys',
        content:
          '<div class="bloc1"><p>You just learned how your <span class="tooltip" definition="A recovery phrase is a list of 12 to 24 words which is used to generate your wallet\'s public key and private key.">recovery phrase</span> relates to a <span class="tooltip" definition="A public key is your address. It gives others a point of reference to send crypto assets to you.">public key</span> and <span class="tooltip" definition="A private key allows access to your wallet in order for you to send crypto assets to other address.">private key</span>.</p><p>Note that a wallet can contain multiple accounts, and <em>each account</em> has a unique pair of public and private keys.</p><p>Think of a <span class="tooltip" definition="A public key is your address. It gives others a point of reference to send crypto assets to you.">public key</span> like your home address. It\'s public, anyone can see it, and it identifies the location to use to send crypto assets to you.</p></div><div class="bloc2"><img src=\'https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F0bcb5620-6fcc-4dbc-9c4c-69bcf494d13b%2FPublic_Key_force_file.svg?table=block&id=d4d34808-b088-4e5b-844c-dbbb8013d285\'></div>',
      },
      {
        type: 'LEARN',
        title: 'Private keys',
        content:
          '<div class="bloc1"><p>If your <span class="tooltip" definition="A public key is your address. It gives others a point of reference to send crypto assets to you.">public key</span> is like your home address, then your <span class="tooltip" definition="A private key allows access to your wallet in order for you to send crypto assets to other address.">private key</span> is like your house key.</p><p>It\'s called private because <em>only you</em> should have access to it.</p><p>The private key unlocks access to your wallet and your crypto assets, allowing you to send them to other wallet addresses.</p></div><div class="bloc2"><img src=\'https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F7b867956-3f8b-4bc1-a728-0e7d6e70cafa%2Fprivate_key.svg?table=block&id=e23d7b4a-34ed-4ee9-a383-af85c60c4c37\'></div>',
      },
      {
        type: 'QUIZ',
        title:
          'In simple terms, your public key is like your _____, and your private key is like your _____.',
        quiz: {
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
        title: 'Not your keys, not your crypto!',
        content:
          '<div class="bloc1"><p>Since your <span class="tooltip" definition="A private key allows access to your wallet in order for you to send crypto assets to other address.">private key</span> unlocks access to your <span class="tooltip" definition="A wallet is an application or device used to send and receive crypto assets on the blockchain.">wallet</span>, keeping it private and secure is very important!</p><p>However, not all wallets allow you do that. With a <span class="tooltip" definition="With a custodial wallet, another party controls the private keys, thus controlling access to your crypto assets.">custodial wallet</span>, another party controls your private keys. Accounts on Coinbase and Kraken are examples of custodial wallets that hold your private keys.</p><p>This requires you to trust these third parties to secure your crypto assets and give you access when you want to trade them or send them somewhere.</p></div><div class="bloc2"><img src=\'https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F6d6920c5-3fa5-44c4-95be-b8a9cb0807ba%2FNot_Your_Key_Not_your_crypto.svg?table=block&id=c142b010-b0a1-4903-b5df-c200598fd074\'></div>',
      },
      {
        type: 'QUIZ',
        title: 'You control your private keys with a custodial wallet',
        quiz: {
          rightAnswerNumber: 2,
          answers: ['True', 'False'],
          id: 'wallet-basics-4',
        },
      },
      {
        type: 'LEARN',
        title: 'Protect your keys, protect your crypto!',
        content:
          '<div class="bloc1"><p>The best way to maintain sole, private control of your keys and crypto is with a <span class="tooltip" definition="With a non-custodial wallet, you have sole control of your private keys, which in turn control your crypto assets.">non-custodial wallet</span>. But always remember, you are also solely <em>responsible</em> for your keys.</p><p>If you lose your <span class="tooltip" definition="A private key allows access to your wallet in order for you to send crypto assets to other address.">private key</span>, you won\'t be able to access your wallet to spend, withdraw, or transfer your crypto assets. </p><p>Fortunately, you <em>can</em> still recover your keys with your <span class="tooltip" definition="A recovery phrase is a list of 12 to 24 words which is used to generate your wallet\'s public key and private key.">recovery phrase</span>. <br><br>But if you lose both your private key and recovery phrase, your access to your wallet will be GONE FOREVER!!!</p></div><div class="bloc2"><img src=\'https://www.notion.so/image/https%3A%2F%2Flink.assetfile.io%2F3y5ZCuWBR7opWCNto3Zs5t.png?table=block&id=39872d33-6230-46b8-892e-7d119453352b\'></div>',
      },
      {
        type: 'QUIZ',
        title:
          'You are solely responsible for your private keys with a non-custodial wallet',
        quiz: {
          rightAnswerNumber: 1,
          answers: ['True', 'False'],
          id: 'wallet-basics-5',
        },
      },
      {
        type: 'LEARN',
        title: 'Protecting your crypto',
        content:
          '<div class="bloc1"><h2>Five rules for protecting your keys and recovery phrase:</h2><ol><li>Never share or reveal your private key or recovery phrase to anyone.</li><li>Never save them online</li><li>Never take a screenshot of your keys or recovery phrase on your phone or computer</li><li>Write them down and transfer the information to more durable material</li><li>Store them in a safe and private place</li></ol></div><div class="bloc2"><img src=\'https://www.notion.so/image/https%3A%2F%2Flink.assetfile.io%2F3YEf2Z1kokkGGNlWlPtUTl.png?table=block&id=2dc9f51c-4e80-4c41-af95-bb48b32bba8b\'></div>',
      },
      {
        type: 'QUIZ',
        title:
          'T<strong>he safest way</strong> to store your private keys is to:',
        quiz: {
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
        title: 'Non-custodial wallets: Hot wallets',
        content:
          '<div class="bloc1"><p>There are two major types of non-custodial wallets: <span class="tooltip" definition="A type of non-custodial wallet that is perpetually connected to the internet.">hot wallets</span> and <span class="tooltip" definition="A type of non-custodial wallet that is stored offline and does not require a perpetual internet connection.">cold wallets</span></p><p>A <span class="tooltip" definition="A type of non-custodial wallet that is perpetually connected to the internet.">hot wallet</span>remains connected to the internet.</p><ul><li>PROS 👍: They are usually free, simple to set up, and easy to use.</li><li>CONS 👎: They are potentially less secure because of their internet connection.</li></ul></div><div class="bloc2"><img src=\'https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F825d5f16-2435-4b65-b925-64b174af3f57%2Fhot_wallet.svg?table=block&id=3ddcf559-bdcd-4979-8cf2-4d2b5f4f138e\'></div>',
      },
      {
        type: 'LEARN',
        title: 'Non-custodial wallets: Cold wallets',
        content:
          '<div class="bloc1"><p>A <span class="tooltip" definition="A type of non-custodial wallet that is stored offline and does not require a perpetual internet connection.">cold wallet</span>, or hardware wallet, is only connected to the internet when you physically connect it to a computer or device.</p><ul><li>PROS 👍: They are more secure from threats like hacking.</li><li>CONS 👎: They aren\'t free, can be cumbersome to use, and are not ideal for quick transactions.</li></ul></div><div class="bloc2"><img src=\'https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Ff0e60c58-b9c3-4879-b59b-93c88c88e2d2%2Fcold_wallet.svg?table=block&id=26ae552f-617b-460f-8ff7-bd578a179427\'></div>',
      },
      {
        type: 'QUIZ',
        title: 'A cold wallet is more secure than a hot wallet',
        quiz: {
          rightAnswerNumber: 1,
          answers: ['True', 'False'],
          id: 'wallet-basics-7',
        },
      },
      {
        type: 'LEARN',
        title: 'MetaMask Wallet',
        content:
          '<div class="bloc1"><p>There are several non-custodial <span class="tooltip" definition="A type of non-custodial wallet that is perpetually connected to the internet.">hot wallets</span> available today. We\'ll explore the popular MetaMask Wallet for the remainder of this course since:</p><ul><li>It\'s likely to be compatible with most <span class="tooltip" definition="An abbreviation for decentralized finance.">DeFi</span> apps.</li><li>It has a browser extension for Chrome, Brave, Edge, and Firefox internet browsers.</li><li>Also available as a mobile app for Android and IOS users.</li></ul></div><div class="bloc2"><img src=\'https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Ff6b7c4b2-6598-4a09-99d9-bd714ce26034%2Fnon_custodial_wallet.svg?table=block&id=4bd53e76-1f7e-4694-bb83-8810441d2531\'></div>',
      },
      {
        type: 'QUIZ',
        title: 'MetaMask is a custodial wallet',
        quiz: {
          rightAnswerNumber: 2,
          answers: ['True', 'False'],
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
