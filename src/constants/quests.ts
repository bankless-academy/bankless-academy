import { QuestType } from 'entities/quest'

const QUESTS: QuestType[] = [
  {
    poapImageLink:
      'https://storage.googleapis.com/poapmedia/onboard-wallet-basic-2021-logo-1627395940468.png',
    learningActions:
      'Create and manage your own wallet<br>Connect your wallet to a web3 website',
    knowledgeRequirements: 'No prior knowledge needed.',
    poapEventId: 4652,
    duration: 10,
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
        title: '(1) Why do you need a wallet?',
        content:
          "<iframe src='https://www.youtube.com/embed/YVgfHZMFFFQ?feature=oembed'></iframe><p>(demo video) TODO: create a similar video ourself</p>",
      },
      {
        type: 'LEARN',
        title: '(2) What is a wallet? ',
        content:
          "<p>A simple definition of a wallet is an application or device used to interact with a blockchain.</p><p>When a wallet interacts with a blockchain, one can make purchases, transfer assets, interact with applications, and more!</p><iframe src='https://embed.lottiefiles.com/animation/70066'></iframe><p>Typically, we associate wallets with money storage. In crypto sphere a “wallet” is a metaphor, for technology that functions as a lock box, holding your access to the blockchain.</p>",
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
        title:
          '(3a) What are keys? (<span class="tooltip" definition="A public key is your address. It gives others a point of reference to send crypto assets to you." style="color:rgb(0, 120, 223, 1)">Public key</span> & <span class="tooltip" definition="A private key allows access to your wallet in order for you to send crypto assets to other address." style="color:rgb(255, 0, 26, 1)">Private key</span>)',
        content:
          '<p>Every wallet has a unique pair of keys. There is one <span class="tooltip" definition="A public key is your address. It gives others a point of reference to send crypto assets to you." style="color:rgb(0, 120, 223, 1)">public key</span> and there is one <span class="tooltip" definition="A private key allows access to your wallet in order for you to send crypto assets to other address." style="color:rgb(255, 0, 26, 1)">private key</span>. </p><img src=\'https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F020c645b-001c-42d6-bc94-f47fe4e91074%2F16_0.png?table=block&id=cc950ac3-b833-4bf0-bf5e-a64fe1201874\'>',
      },
      {
        type: 'LEARN',
        title:
          '(3b) What are keys? (<span class="tooltip" definition="A public key is your address. It gives others a point of reference to send crypto assets to you." style="color:rgb(0, 120, 223, 1)">Public key</span> & <span class="tooltip" definition="A private key allows access to your wallet in order for you to send crypto assets to other address." style="color:rgb(255, 0, 26, 1)">Private key</span>)',
        content:
          '<p>You can think of the <span class="tooltip" definition="A public key is your address. It gives others a point of reference to send crypto assets to you." style="color:rgb(0, 120, 223, 1)">public key</span> like your home address.</p><p>It\'s called public because anyone can see it.</p><p><span class="tooltip" definition="A public key is your address. It gives others a point of reference to send crypto assets to you." style="color:rgb(0, 120, 223, 1)">Public keys</span> allow others to identify you in order to send crypto assets to your address.</p>',
      },
      {
        type: 'LEARN',
        title:
          '(3c) What are keys? (<span class="tooltip" definition="A public key is your address. It gives others a point of reference to send crypto assets to you." style="color:rgb(0, 120, 223, 1)">Public key</span> & <span class="tooltip" definition="A private key allows access to your wallet in order for you to send crypto assets to other address." style="color:rgb(255, 0, 26, 1)">Private key</span>)',
        content:
          '<p>If your <span class="tooltip" definition="A public key is your address. It gives others a point of reference to send crypto assets to you." style="color:rgb(0, 120, 223, 1)">public key</span> is like your home address, then your <span class="tooltip" definition="A private key allows access to your wallet in order for you to send crypto assets to other address." style="color:rgb(255, 0, 26, 1)">private key</span> is like your house key.</p><p>It\'s called private because <em><strong>only you</strong></em> want access to it.</p><p><span class="tooltip" definition="A private key allows access to your wallet in order for you to send crypto assets to other address." style="color:rgb(255, 0, 26, 1)">Private keys</span> allow you access to your wallet in order for you to send crypto assets out to others.</p>',
      },
      {
        type: 'LEARN',
        title:
          '(3d) What are keys? (<span class="tooltip" definition="A public key is your address. It gives others a point of reference to send crypto assets to you." style="color:rgb(0, 120, 223, 1)">Public key</span> & <span class="tooltip" definition="A private key allows access to your wallet in order for you to send crypto assets to other address." style="color:rgb(255, 0, 26, 1)">Private key</span>)',
        content:
          '<p>When creating a wallet, <span class="tooltip" definition="A public key is your address. It gives others a point of reference to send crypto assets to you." style="color:rgb(0, 120, 223, 1)">public keys</span> and <span class="tooltip" definition="A private key allows access to your wallet in order for you to send crypto assets to other address." style="color:rgb(255, 0, 26, 1)">private keys</span> are automatically generated.</p><p>Remember <em><strong>each wallet</strong></em> has it own pair of keys and you can think of the <span class="tooltip" definition="A public key is your address. It gives others a point of reference to send crypto assets to you." style="color:rgb(0, 120, 223, 1)">public key</span> like your home address and your <span class="tooltip" definition="A private key allows access to your wallet in order for you to send crypto assets to other address." style="color:rgb(255, 0, 26, 1)">private key</span> is like your house key.</p>',
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
          id: 'wallet-basics-2',
        },
      },
      {
        type: 'LEARN',
        title: '(4a) Not your keys, not your crypto!',
        content:
          '<p>Recall that private keys let you access your <span class="tooltip" definition="A wallet is an application or device used to send and receive crypto assets." style="color:rgb(0, 135, 107, 1)">wallet</span> to send crypto. In almost all cases, you want to own and secure your wallet’s private key.</p><p>But not all wallets will let you do that. With a <span class="tooltip" definition="With a custodial wallet, another party controls the private keys, thus controlling access to your crypto assets." style="color:rgb(255, 0, 26, 1)">custodial wallet</span>, another party controls your private keys.</p><p>You’re trusting a third party to secure your funds and return them to you if you want to trade or send them somewhere else.</p><p>(Think of your account on Coinbase or Kraken wallet.)</p><img src=\'https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fabda02b7-850e-4f4b-9fcc-637330046e92%2F0_q_FQ4P0pA0PopIqx.png?table=block&id=ff0def71-b130-4854-a008-3b22ec448bc5\'>',
      },
      {
        type: 'LEARN',
        title: '(4b) Not your keys, not your crypto!',
        content:
          '<p>With a <span class="tooltip" definition="With a non-custodial wallet, you have sole control of your private keys, which in turn control your crypto assets." style="color:rgb(0, 135, 107, 1)">non-custodial wallet</span>, you have sole control of your private keys, which in turn control your crypto.</p><p>Remember, not your keys, not your crypto! That means that if you don’t control the keys of the wallet, you don’t control the crypto.</p><img src=\'https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F2ba92a8d-c83e-46ad-9807-f7f19c4bac4e%2Fproof-of-keys-bitcoin.png?table=block&id=c5c20539-c091-4f5e-84b6-e8335f6f846a\'>',
      },
      {
        type: 'QUIZ',
        title: 'I control my private keys with a custodial wallet',
        quiz: {
          rightAnswerNumber: 2,
          answer_1: 'True',
          answer_2: 'False',
          id: 'wallet-basics-3',
        },
      },
      {
        type: 'LEARN',
        title: '(5) Protect your keys, protect your crypto!',
        content:
          '<p>Since there is no third party involved in a <span class="tooltip" definition="With a non-custodial wallet, you have sole control of your private keys, which in turn control your crypto assets." style="color:rgb(0, 135, 107, 1)">non-custodial wallet</span>, you are solely responsible for your keys.</p><p>You must take your own precautions to protect your funds.</p><p>If you lose your private key, you can no longer access your wallet to spend, withdraw, or transfer your crypto. Your wallet is GONE FOREVER!!!</p><p>Therefore, it is imperative to save the private key in a secure location and on a durable material </p><p>(not paper).</p><img src=\'https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F559e242d-4fa2-4fe6-8bb5-06996c6326c2%2FCopy-of-9-security-Tips-Infographic-1_1-1-min.png?table=block&id=4e2fa103-b50a-41e6-b1fc-964e4d6a7bd4\'>',
      },
      {
        type: 'QUIZ',
        title:
          'I am solely responsible for my private keys with a non-custodial wallet',
        quiz: {
          rightAnswerNumber: 1,
          answer_1: 'True',
          answer_2: 'False',
          id: 'wallet-basics-4',
        },
      },
      {
        type: 'LEARN',
        title: '(6) How do I protect my keys?',
        content:
          '<h2>The 5 most effective ways to protect your keys:</h2><ol><li>Never share or reveal your private key to anyone.</li><li>Never save it online (such as OneDrive or Google Docs)</li><li>Write down your <span class="tooltip" definition="A recovery phrase is a list of 12 to 24 words which is used to generate your wallet\'s public key and private key." style="color:rgb(0, 120, 223, 1)">recovery phrase</span> and store it in a secure location (such as inside your safe or a bank’s safety deposit box).</li><li>Find a way to write <span class="tooltip" definition="A recovery phrase is a list of 12 to 24 words which is used to generate your wallet\'s public key and private key." style="color:rgb(0, 120, 223, 1)">recovery phrases</span> on durable material such as tungsten, aluminum engraving kit, mylar, or... (Paper could get destroyed easily in case of floods or fire.)</li></ol>',
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
          id: 'wallet-basics-5',
        },
      },
      {
        type: 'LEARN',
        title: '(7) What is a recovery phrase?',
        content:
          '<p>When you create a wallet, a recovery phrase is also created that is specific to that wallet.</p><p>It stores the information that can be used to recover your wallet and crypto if:</p><ul><li>your wallet fails unexpectedly or gets damaged;</li><li>you are unable to access it due to misplacement or theft;</li></ul><p>A recovery phrase is a list of 12 to 24 words and represents a single secret piece of data that is used to generate your wallet’s <span class="tooltip" definition="A public key is your address. It gives others a point of reference to send crypto assets to you." style="color:rgb(0, 120, 223, 1)">public key</span> and <span class="tooltip" definition="A private key allows access to your wallet in order for you to send crypto assets to other address." style="color:rgb(255, 0, 26, 1)">private key</span>.</p><p>This same recovery phrase can actually be used to access your wallet on different devices.</p><img src=\'https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fe57e2d52-a97e-42de-aeaf-e0b26a66e8ae%2F0_u4mBi5vxWeCTLwMP.png?table=block&id=c1ce45e2-d20d-4cd9-bde3-150e923e5d21\'>',
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
          id: 'wallet-basics-6',
        },
      },
      {
        type: 'LEARN',
        title: '(8) Types of non-custodial wallets',
        content:
          '<p>There are 2 major types of <span class="tooltip" definition="With a non-custodial wallet, you have sole control of your private keys, which in turn control your crypto assets." style="color:rgb(0, 135, 107, 1)">non-custodial wallets</span> : <span class="tooltip" definition="A type of non-custodial wallet that is perpetually connected to the internet." style="color:rgb(255, 0, 26, 1)">hot wallets</span> and <span class="tooltip" definition="A type of non-custodial wallet that is stored offline and does not require a perpetual internet connection." style="color:rgb(0, 120, 223, 1)">cold wallets</span></p><p>A <span class="tooltip" definition="A type of non-custodial wallet that is perpetually connected to the internet." style="color:rgb(255, 0, 26, 1)">hot wallet</span> (Online) Perpetually connected to the internet.</p><ul><li>PROS 👍: They are usually free, simple to set up, and easy to use.</li><li>CONS 👎: They are less secure due to internet connection.</li></ul><p>A <span class="tooltip" definition="A type of non-custodial wallet that is stored offline and does not require a perpetual internet connection." style="color:rgb(0, 120, 223, 1)">cold wallet</span> (Offline) is <strong>never</strong> connected to the internet.</p><ul><li>PROS 👍: They are more secure.</li><li>CONS 👎: They aren\'t free, sometimes cumbersome to use, and are not ideal for quick transactions.</li></ul><img src=\'https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fab788f0c-0b84-4101-ac1d-3728d5d82385%2FWhat-is-a-hardware-wallet-1.jpg?table=block&id=57d7c66a-31d5-4586-9828-1d6068963a85\'>',
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
        title: '(9) MetaMask Wallet',
        content:
          "<p>MetaMask is one of many non-custodial hot wallets</p><ul><li>It is a widely used wallet with over 5 million monthly active users so it is more likely to be compatible with your preferred DeFi apps.</li><li>A browser extension is available on Chrome, Brave, Edge, and Firefox internet browsers.</li><li>Also available as mobile app for Android and IOS users.</li></ul><img src='https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F46078cc2-f25a-458a-aaca-a59e5cb6ebc6%2FScreen_Shot_2021-08-21_at_15.28.09.jpg?table=block&id=205259fd-e6f7-4e6e-8fce-ade870c718b3'>",
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
        title: '(10) How to setup MetaMask',
        content:
          "<p>For convenience and ease of access throughout this course, you will need a MetaMask wallet. Next we will demonstrate how to set up a MetaMask wallet.</p><p>Download the browser extension from the official website: <a href='https://metamask.io/download'>https://metamask.io/download</a></p><iframe src='https://www.youtube.com/embed/pGO8WhDZlMo'></iframe>",
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
