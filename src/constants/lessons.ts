/* eslint-disable no-useless-escape */
import { LessonType } from 'entities/lesson'

const LESSONS: LessonType[] = [
  {
    kudosImageLink: '/lesson/wallet-basics/kudos-75d8aa76.png',
    lessonImageLink: '/lesson/wallet-basics/lesson-5aa84b59.png',
    socialImageLink: '/lesson/wallet-basics/social-230cc260.jpg',
    learningActions: 'Create and manage your own wallet\nConnect your wallet to a web3 website',
    marketingDescription: 'A crypto wallet is essential gear for Web3 and DeFi. Get basic training on how a wallet works and how to get started.',
    kudosId: 2561,
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
        content: '<div class="bloc1"><p><strong>Greetings!</strong></p><p>Welcome to Bankless Academy. We’re excited to guide you on your journey into <code>Web3</code>. To get started, you will need some essential equipment: a digital wallet.</p><p>A digital wallet is your passport to exploring the various worlds of Web3. This tool grants you access to incredible new possibilities while safeguarding your assets and identity.</p><p>In this lesson, we’ll introduce you to digital wallets, how they work, and how to set yours up to safely embark on your Web3 journey.</p><p>Let’s get started!</p></div><div class="bloc2"><img src=\'/lesson/wallet-basics/wallet-intro-7b45d75e.png\'></div>'
      },
      {
        type: 'LEARN',
        notionId: 'baf157b016ba48a890eb4cacb4b903e5',
        title: 'Wallet Definition',
        content: '<div class="bloc1"><p>In the world of cryptocurrency, a wallet refers to an application or device you can use to interact with a <code>blockchain</code>.</p><p>Your <code>wallet</code> functions as a lock-box that secures your access to the blockchain.</p><p>When your wallet is connected to a blockchain, you can make purchases, transfer digital assets, interact with applications, and more!</p></div><div class="bloc2"><img src=\'/lesson/wallet-basics/wallet-definition-4b8ae050.png\'></div>'
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
        content: '<div class="bloc1"><p>When you set up a new <code>wallet</code>, the software generates a unique <code>recovery phrase</code> that is specific to that wallet account.</p><p>Also sometimes called a <em>seed phrase</em> or <em>secret recovery phrase</em>, your recovery phrase can be used to access your wallet and crypto assets if:</p><ul><li>Your wallet app or hardware fails unexpectedly or gets damaged.</li><li>You are unable to access it due to misplacement or theft.</li><li>You want to access your wallet account through the wallet app on a different computer or device.</li></ul><p>Most recovery phrases are a list of 12 to 24 words that represent a unique piece of data. That data is used to generate the <code>public key</code> and <code>private key</code> for your wallet.</p></div><div class="bloc2"><img src=\'/lesson/wallet-basics/recovery-phrase-eaf7036b.png\'></div>'
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
        content: '<div class="bloc1"><p>You just learned how your <code>recovery phrase</code> relates to a <code>public key</code> and <code>private key</code>.</p><p>Note that a wallet can contain multiple accounts, and <em>each account</em> has a unique pair of public and private keys.</p><p>Think of a public key like your home address. It is public, anyone can see it, and it identifies the location to use to send crypto assets to you.</p></div><div class="bloc2"><img src=\'/lesson/wallet-basics/public-key-70326f14.png\'></div>'
      },
      {
        type: 'LEARN',
        notionId: 'a6dab3c7c04949baa0c5448f57c91cfe',
        title: 'Private Key',
        content: '<div class="bloc1"><p>If your <code>public key</code> is like your home address, then your <code>private key</code> is like your house key.</p><p>It\'s called private because <em>only you</em> should have access to it.</p><p>The private key unlocks access to your wallet and your crypto assets, allowing you to send them to other wallet addresses.</p></div><div class="bloc2"><img src=\'/lesson/wallet-basics/private-key-43290e53.png\'></div>'
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
        content: '<div class="bloc1"><p>Since your <code>private key</code> unlocks access to your <code>wallet</code>, keeping it private and secure is very important!</p><p>Not all wallets let you control your private key. With a <code>custodial wallet</code>, another party controls it. Accounts on Coinbase and Kraken are examples of custodial wallets that hold your private key.</p><p>This may be all some people need, but it requires you to trust these third parties to secure your crypto assets and give you access when you want to trade them or send them somewhere. Plus, your access to the world of <code>DeFi</code> applications will be limited. </p></div><div class="bloc2"><img src=\'/lesson/wallet-basics/custodial-wallet-c3a7cb80.png\'></div>'
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
        content: '<div class="bloc1"><p>Your passport to the exciting worlds of <code>DeFi</code> and <code>Web3</code>—and the best way to safeguard your <code>private key</code> is a <code>non-custodial wallet</code>. </p><p>Remember: if you lose your private key, you will not be able to access your wallet to spend, withdraw, or transfer your crypto assets.</p><p>Fortunately, you <em>can</em> still recover your wallet with your <code>recovery phrase</code>. But if you lose that too, you will lose access to your wallet FOREVER!!!</p></div><div class="bloc2"><img src=\'/lesson/wallet-basics/non-custodial-wallet-a37460f1.png\'></div>'
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
        content: '<div class="bloc1"><p>There are two major types of <code>non-custodial wallets</code>: software wallets (also called <code>hot wallets</code>) and hardware wallets (also called <code>cold wallets</code>)</p><p>A software wallet is an app or browser extension that remains connected to the internet.</p><ul><li>PROS 👍: It is usually free, simple to set up, and easy to use.</li><li>CONS 👎: Because it is software connected to the internet, it\'s potentially a target for hackers.</li></ul></div><div class="bloc2"><img src=\'/lesson/wallet-basics/hot-wallet-6117f51c.png\'></div>'
      },
      {
        type: 'LEARN',
        notionId: '2db8d9f5695b4b46aa35bef2e17bcb75',
        title: 'Cold Wallet',
        content: '<div class="bloc1"><p>A <code>cold wallet</code>, or hardware wallet, is only connected to the internet when you physically connect it to a computer or device.</p><ul><li>PROS 👍: It is more secure from threats like hacking.</li><li>CONS 👎: It is not free, not ideal for quick transactions, and can be cumbersome to use.</li></ul></div><div class="bloc2"><img src=\'/lesson/wallet-basics/cold-wallet-3bd67115.png\'></div>'
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
        content: '<div class="bloc1"><p>There are several <code>non-custodial</code> <code>hot wallets</code> available today. We will explore the popular MetaMask Wallet for the remainder of this lesson since:</p><ul><li>It is likely to be compatible with most <code>DeFi</code> apps.</li><li>It has a browser extension for Chrome, Brave, Edge, and Firefox internet browsers.</li><li>It is also available as a mobile app for Android and iOS users.</li></ul></div><div class="bloc2"><img src=\'/lesson/wallet-basics/metamask-wallet-a057e5b9.png\'></div>'
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
    kudosImageLink: '/lesson/blockchain-basics/kudos-b0048cdb.png',
    lessonImageLink: '/lesson/blockchain-basics/lesson-c84db284.png',
    socialImageLink: '/lesson/blockchain-basics/social-07ea2639.jpg',
    learningActions: '',
    marketingDescription: 'Blockchains make cryptocurrency, DeFi, and Web3 possible. Discover how blockchain networks are built and how they work.',
    kudosId: 2563,
    duration: 15,
    learnings: '',
    difficulty: 'Easy',
    description: 'Learn about the fundamental architecture of blockchain technology.',
    name: 'Blockchain Basics',
    quest: 'BlockchainBasics',
    publicationStatus: 'publish',
    isFeaturedOnHomepage: false,
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
        content: '<div class="bloc1"><p><code>Blockchain</code> technology is a revolutionary way of storing and tracking data, while also making that data accessible to anyone. It is a way of organizing data in a single public list of all historical transactions that anyone can view but cannot edit. This public list of transactions is collectively known as the blockchain <code>ledger</code>.</p><p>After examining the layers of a blockchain, we will be using a blockchain tool called a <code>block explorer</code> to look into the specifics of the Ethereum blockchain structure; we will zoom in on the Ethereum blockchain to view the <strong>list</strong> of blocks, the <strong>transactions</strong> within those blocks, and the <strong>details</strong> of each individual transaction.</p></div><div class="bloc2"><img src=\'/lesson/blockchain-basics/introduction-6d0b6137.svg\'></div>'
      },
      {
        type: 'LEARN',
        notionId: '76f2f8016f44493eb57a3139cb515017',
        title: 'Blockchain Structure',
        content: '<div class="bloc1"><p>The term blockchain can be used as a noun — the Bitcoin blockchain — or as an adjective — blockchain technology. Either way, <code>blockchain</code> refers to the entire structure cryptocurrencies are built on.</p><p>Zooming in from the outside, there are 3 levels of structure in a blockchain:</p><ol><li>The overall <code>blockchain</code> is made up of blocks that are linked together in order</li><li><code>Blocks</code> are made up of groups of transactions put together </li><li><code>Transactions</code> are amounts of money sent between two <code>addresses</code> on the network</li></ol><p>This three-tiered structure comes together to create a cryptographic ledger - an unalterable history of all transactions performed on the network.</p></div><div class="bloc2"><img src=\'/lesson/blockchain-basics/blockchain-structure-346dae14.svg\'></div>'
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
        content: '<div class="bloc1"><p>In typical money systems, we trust third parties like banks to keep track of how much money each person has. But, to be truly Bankless, we want a system that doesn’t require us to trust one entity to manage the ledger.</p><p>The <code>ledger</code> is the list of ALL transactions ever made on a blockchain, and anyone can see it for <code>public</code> blockchains. Discrete groups of transactions from the ledger form the blocks that together make the blockchain.</p><p>When new transactions are added to the ledger, balances stored at each <code>address</code> get updated; past transactions cannot be altered. It’s like allowing everyone to look at everyone’s all-time bank account transaction history, at any given time, forever. </p></div><div class="bloc2"><img src=\'/lesson/blockchain-basics/examining-the-ledger-82fd9762.svg\'></div>'
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
        content: '<div class="bloc1"><p>Not only are transactions included on a <code>blockchain</code> ledger unchangeable, they are also shared and distributed amongst a large network of computers. To make sure that no single entity has the power to change the data, the blockchain ledger is stored on every device, called a <code>node</code>, on the network.</p><p>This shared data is what makes the blockchain ledger <code>decentralized</code>. No single authority or entity controls the data. Blockchains like Ethereum are also <code>public</code> because the ledger can be viewed by anyone. </p><p>We will see specifics of how new data is added and how we ensure everyone has a copy of the same data all the time in our upcoming Blockchain Theory lesson. For this lesson, just remember that the ledger data is shared by every computer running on the Ethereum network.</p></div>'
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
        content: '<div class="bloc1"><p>An important feature of blockchains is that past transaction data cannot be changed after it has been included in a block. This is because each block has a unique <code>block hash</code>, like a fingerprint, that is used to link the blocks together one after another. No one can change past transactions without changing that fingerprint and the fingerprint of EVERY block that follows it because each fingerprint depends on the previous one.</p><p>So each <code>block</code> is simply a group of transactions put together in one file along with that block’s <code>block hash</code>. The blocks are chained together because each one references the previous block’s unique fingerprint to form one connected block<strong><em>chain</em></strong>. </p></div><div class="bloc2"><img src=\'/lesson/blockchain-basics/block-anatomy-8ba3bea2.svg\'></div>'
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
        content: '<div class="bloc1"><p>Remember, <code>block</code> data is just a group of transactions put together. Looking within a single block, we see a list of transactions and some data about who created the block. </p><p>From our example earlier when discussing the blockchain ledger, both of those transactions might be grouped within one block, or spread out into multiple blocks over time. But no matter what block they are included in, they are all added to the overall blockchain ledger eventually.</p><ul><li>Alice sends 5 ETH to Bob</li><li>Bob sends 2 ETH to Charlie</li></ul><p>Recall that each block must also reference the past block’s <code>block hash</code> to link the blockchain together.</p></div><div class="bloc2"><img src=\'/lesson/blockchain-basics/inside-a-block-b11c74ce.svg\'></div>'
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
        content: '<div class="bloc1"><p>The data on any blockchain is simply a list of <code>transactions</code>, records of currency moved between users. Each transaction must be signed by the sender’s <code>digital signature</code> to be valid. </p><p>This is what you do when you confirm a transaction with a wallet, you are signing with your digital signature to authorize a transaction. You can think of it as the digital equivalent of physically signing a check, receipt, or credit card transaction.</p><p>Transactions can be simple, like sending crypto assets, or more complex, such as swapping crypto assets or even deploying special code that executes when triggered, called <code>smart contracts</code>.</p><p>Finally, each transaction has a unique digital identifier, called its <code>transaction hash</code>, that no other transaction has. This makes it easy to refer to any single transaction later on and ensures that the details of that transaction can’t be changed afterward.</p></div><div class="bloc2"><img src=\'/lesson/blockchain-basics/individual-transactions-2f6bf118.svg\'></div>'
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
        content: '<div class="bloc1"><p>An <code>address</code> is a public identifier that anyone can look up on the blockchain. Like an email address, anyone can send funds to it but only someone who controls the <code>private key</code> can unlock and use the funds at that address.</p><p>On Ethereum, an address always starts with <em>0x_________</em> and is 42 characters of numbers and letters derived from the <code>public key</code> of that address.</p><p>When looking at a single transaction in a block explorer, we can see the From: and To: addresses. This doesn’t tell us who the <em>people </em>are who control those addresses but allows any user to track the movement of cryptocurrency throughout the blockchain ledger.</p></div><div class="bloc2"><img src=\'/lesson/blockchain-basics/user-addresses-e9456d37.svg\'></div>'
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
    kudosImageLink: '/lesson/web3-security/kudos-d2f0df26.png',
    lessonImageLink: '/lesson/web3-security/lesson-09017125.png',
    socialImageLink: '/lesson/web3-security/social-795f9c67.jpg',
    learningActions: 'Avoid the scams in web3 and keep your assets safe.',
    marketingDescription: 'Learn how to stay safe from the most common scams in web3.',
    kudosId: 2565,
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
        content: '<div class="bloc1"><p>Digital ownership is the new feature of web3. Using blockchains, cryptocurrencies, and NFTs, web3 gives ownership and power back to users. This online ownership of digital financial products is new for many, and that lack of experience gives opportunities for predatory people to scam and steal the assets of others. These scams work so well because most people aren’t aware of how they work. </p><p>But, it\'s not just web3 that suffers from scams, web2 services like email and social media are full of scams as well. In addition, many web3 tools are still tied to web2 services like bank accounts or centralized exchanges so protecting those is important too. So congratulations, Academy Explorer, on taking the time to arm yourself with the knowledge that will protect you as you venture out into <code>web3</code>!</p><p>This lesson will cover:</p><ul><li>Web2 & web3 security.</li><li>The most common ways people lose their funds and how to protect oneself from them.</li><li>A general strategy for wallet security.</li><li>How one can recover if they are the victim of a scam.</li></ul></div>'
      },
      {
        type: 'LEARN',
        notionId: '44450164401340659f6553fadd0230e4',
        title: 'Money in Web2',
        content: '<div class="bloc1"><p>In web2, the institutions hold money on behalf of people. A user must prove their identity to an institution in order to access and use their money. It’s the same as a bank account or a <code>centralized exchange</code> (CEX); one needs a login ID and a password.</p><p>For a scammer to gain access to your money, they need this ID + password combination. Because the institutions are charged with protecting your money, fraudulent transactions can be reversed - like a credit card transaction dispute.</p></div><div class="bloc2"><img src=\'/lesson/web3-security/money-in-web2-0faeb54f.svg\'></div>'
      },
      {
        type: 'LEARN',
        notionId: 'c10187a8772f40faace2a77bd2f86940',
        title: 'Money in Web3 ',
        content: '<div class="bloc1"><p>In web3, money works differently. It’s more like a locked cash wallet; once money is spent, it’s gone. Only private keys control access to the wallet. So for a scammer to gain access they need the <code>seed phrase</code>, that special set of secret words, to access someone’s <code>private keys</code> and steal from their wallet. </p><p>It’s very important to protect seed phrases; people should <em><strong>never</strong></em> give their seed phrase to anyone for any reason. Also, never enter seed phrases digitally; digital photos, notes applications, and text files on your computer can all get compromised.</p></div><div class="bloc2"><img src=\'/lesson/web3-security/money-in-web3--28d5af95.svg\'></div>'
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
        content: '<div class="bloc1"><p>There are many methods for storing seed phrases securely, but a good start is to keep it on physical media (laminated paper or similar) and store it in a water- and fire-proof safe in your own home. <strong>Do not </strong>store a <code>seed phrase</code> as a photo or other digital methods - even in a password manager. </p><p>Bad places to store seed phrases include:</p><ul><li>In a filing cabinet</li><li>Digital notes application</li><li>At your workplace</li><li>Digital photo</li></ul><p>Wherever you store your seed phrase, you should ensure that only you have access to it and that it is protected from loss and destruction. You never know what might happen in the future!</p></div>'
      },
      {
        type: 'LEARN',
        notionId: '55c51a6c7e2946a1a098ced62d4f7180',
        title: 'Protect your Passwords',
        content: '<div class="bloc1"><p>Healthy password usage and management is an important piece of everyday internet exploration.</p><p>Passwords should be different for each and every web2 service used online. This includes services like email, centralized exchanges, and other service accounts. It’s problematic if someone manages to get the ID + password for one account, but it’s far worse if that combination unlocks all of your accounts!</p><p><code>Password manager</code> applications like 1password, LastPass, and BitWarden securely store and encrypt multiple passwords; they can even generate new high-security passwords and store them automatically. The user just has to remember a single master password. </p><p>Do <strong>not</strong> store a web3 <code>seed phrase</code> in a password manager; it takes just one password breach to obtain all of your web3 assets and there is no one to recover your assets for you.</p></div>'
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
        content: '<div class="bloc1"><p><code>Two Factor Authentication</code>, also known as 2FA, is a secondary layer of web2 security.</p><p>Many people have had their web2 accounts hacked, or have had their money and credentials stolen despite having strong passwords. Web2 websites (and even <code>password managers</code>) often use a second layer of security 2FA as well. 2FA generates single-use codes sent to another device, in addition to the normal password, to enable website log-in. The other device could be a phone, a desktop computer, or even a small device you can attach to your keychain.</p><p>Phone (SMS) 2FA is better than no 2FA, but phone companies are vulnerable to scammers also. They can use <code>social engineering</code> to impersonate the account owner, bypass the company’s security checks, and gain access to the owner’s account - all without the real owner knowing. Authentication applications like Authy or Google Authenticator are more secure 2FA solutions.</p></div><div class="bloc2"><img src=\'/lesson/web3-security/two-factor-authentication-e91b624a.svg\'></div>'
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
        content: '<div class="bloc1"><p>In both web2 and web3, scammers use <code>phishing</code> tactics to trick people into giving up their passwords and seed phrases. Often they’ll pretend to be product support staff offering help, “Hello this is Metamask support”, or pretend to be an admin of a community, “New NFT mint, exclusive for our community”.</p><p>They use <code>social engineering</code> to pressure people. Examples include:</p><ul><li>“Time is running out!” - making you feel rushed.</li><li>“Congratulations you won our giveaway!” - making things feel exclusive.</li><li>”Get early access to our pre-mint!” - generating <code>FOMO</code> in the person being scammed.</li></ul></div><div class="bloc2"><img src=\'/lesson/web3-security/social-engineering-scams-07dbba27.svg\'></div>'
      },
      {
        type: 'LEARN',
        notionId: '87eb4de1d31d47299235691aa0dab08d',
        title: 'Fear Of Missing Out',
        content: '<div class="bloc1"><p><code>FOMO</code> stands for the ‘Fear Of Missing Out’, it’s the stressful feeling that you’re not going to get a great benefit or opportunity unless you do something <strong>right now</strong>.</p><p>The best defense against FOMO is to simply take a step back from your computer and take a break. People don’t think clearly when they’re stressed, that’s why FOMO is such an effective scamming tool. By stepping away from the situation, it becomes much easier to spot the scams for what they are.</p></div>'
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
        content: '<div class="bloc1"><p>Scammers love to engage with users in social media environments like Twitter and the Discord servers of cryptocurrency projects. They will typically try to move to or even start conversations via direct messaging to avoid being spotted by experienced community members. It’s generally safer to talk in public areas, until you’ve gained more experience in crypto-culture.</p><p>However, no matter where you are talking to others, you should <em><strong>never</strong></em> give your <code>seed phrase</code> to anyone for <strong>any reason</strong>. If anyone asks for your seed phrase or private key, they are a scammer. It’s that simple.</p></div>'
      },
      {
        type: 'LEARN',
        notionId: '276e9374da2e49428b3b4193dc692c86',
        title: 'Social Media Safety',
        content: '<div class="bloc1"><p>Social media <code>red flags</code>:</p><p>🚩 <strong>Language and grammar errors:</strong> They’re/their/there, etc.</p><p>🚩 <strong>FOMO:</strong> “Don’t miss out!”</p><p>🚩 <strong>Impersonation:</strong> an admin, support desk, Vitalik Buterin, Elon Musk, etc.</p><p>🚩 <strong>Guaranteed returns: </strong>Nothing is guaranteed in crypto.</p><p>🚩 <strong>Un</strong><strong>requested links and offers, </strong><em>especially in direct messages</em>.</p></div><div class="bloc2"><img src=\'/lesson/web3-security/social-media-safety-f4f4e1fb.svg\'></div>'
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
        content: '<div class="bloc1"><p>Besides social engineering, the second most common web3 attack is having <code>scam-tokens</code> sent to your web3 wallet. Scam-tokens are crypto tokens that scammers transfer to many wallets at once, in the hopes that someone will try to move or sell the tokens and trigger the malicious code hiding in the token’s smart contract.</p><p>Malicious contracts often require people to spend far more on a transaction than is necessary in order to sell these scam-tokens, and others can completely drain wallets; these scam-tokens could even be NFTs! If the problem isn’t with the smart contract itself, scam-tokens will often lure victims back to phishing websites where scammers try to trick victims into entering their <code>seed phrase</code> or other credentials.</p><p>The best thing to do when you receive random tokens is to not interact with them at all; leave them in your wallet and never transfer/sell them.</p></div><div class="bloc2"><img src=\'/lesson/web3-security/scam-tokens-2fddadcc.svg\'></div>'
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
        content: '<div class="bloc1"><p>If you remember from our <a href=\'https://app.banklessacademy.com/lessons/wallet-basics\'>Wallet Basics</a> lesson, a <code>hardware wallet</code> is only connected to the internet when you physically connect it to a computer or device that is connected to the internet. This makes your funds much safer as someone would have to physically steal your device and hack into it in order to find your <code>seed phrase</code>.</p><p>It is even possible to use your hardware wallet through many browser extension wallets, like MetaMask. By using this setup, you receive the convenience of a single wallet interface with the security of using a hardware wallet.</p><p>Ledger has <a href=\'https://www.ledger.com/academy/security/the-safest-way-to-use-metamask\'>written their own guide</a> on how to setup MetaMask for use with their hardware wallet device.</p></div><div class="bloc2"><img src=\'/lesson/web3-security/hardware-wallets-1ab4665d.svg\'></div>'
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
        content: '<div class="bloc1"><p>After adding a hardware wallet to your setup, one of the best ways to secure your funds is to keep them spread between multiple <code>wallets</code>. Here is a compartmentalized strategy using three separate wallets:</p><ol><li><strong>Social Wallet:</strong> A wallet that serves as your web3 identity for logins — like for the <a href=\'https://app.banklessacademy.com/lessons/academy-community\'>Bankless Academy community</a> or web3 social media — use a <code>hardware wallet</code> for extra security.</li><li><strong>Trading Wallet:</strong> A <code>hot wallet</code> for trading and other activities involving funds that may need to be moved on short notice.</li><li><strong>HODL Wallet:</strong> A <code>hardware wallet</code> for the long-term <code>HODL</code> — these are funds intended to hold for a long time. It’s recommended to <em><strong>not </strong></em>use this wallet for interacting with smart contracts.</li></ol><p>👍 <strong>PROs:</strong> Separation ensures that scams only threaten funds in <em>that particular wallet</em> rather than <em>everything</em>.</p><p>👎 <strong>CONs:</strong> It’s more complicated to keep track of, but many wallet applications allow you to name your wallets.</p></div><div class="bloc2"><img src=\'/lesson/web3-security/wallet-strategies-e2d78fc5.svg\'></div>'
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
        content: '<div class="bloc1"><p>Hopefully you have not already fallen victim to a scammer. If you have, there are some steps you should take to secure your accounts once more.</p><p>For a scam involving a web2 service, like Gmail or Discord, you should:</p><ul><li>Change your password on the affected account.</li><li>Where it’s available, use the “sign out everywhere else” button to kick the scammers off your account.</li><li>Enable <code>2FA</code> with an authenticator app.</li><li>Report the scam to the service involved.</li><li>Ensure your email account is also secure.</li><li>Discuss the scam with friends or trusted community members.</li></ul></div>'
      },
      {
        type: 'LEARN',
        notionId: '5ae46db5024b4193a9c2be75f9f6e5b4',
        title: 'Recovering from Web3 Scams',
        content: '<div class="bloc1"><p>Contracts must be given explicit permission to spend tokens on Ethereum. The token <code>allowance</code> is how much of that token you’ve given permission to be spent by a specific contract. Keeping allowances low reduces the risk to your assets by a potentially malicious application or hacker.</p><p>Web3 doesn’t have anyone in charge of protocols to report scammers to, but you can still take action:</p><ul><li>Immediately move any funds still in the compromised wallet to a different wallet address, <strong>make sure the new address has a different seed phrase.</strong></li><li>Review and revoke the token <code>allowances</code> you have given on your wallet with tools like <a href=\'https://etherscan.io/tokenapprovalchecker\'>etherscan.io/tokenapprovalchecker</a>. Note that revoking allowances will cost gas. OpenSea has a <a href=\'https://support.opensea.io/hc/en-us/articles/4416083190291-How-can-I-revoke-token-allowance-permissions-\'>support article</a> walkthrough.</li><li>Use a <code>hardware wallet</code> in the future.</li><li>Warn others by reporting the scam to the affected community.</li><li>Discuss the scam process with friends or trusted community members to see how you can protect yourself and others in the future.</li></ul></div>'
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
    kudosImageLink: '/lesson/academy-community/kudos-4fce19ff.png',
    lessonImageLink: '/lesson/academy-community/lesson-755fe7a3.png',
    socialImageLink: '/lesson/academy-community/social-1f64464b.jpg',
    learningActions: '',
    marketingDescription: 'Join the Academy Explorer Community on gm.xyz.',
    kudosId: 2564,
    duration: 10,
    learnings: '',
    difficulty: 'Easy',
    description: 'Join the Academy Explorer Community on gm.xyz.',
    name: 'Academy Community',
    quest: 'AcademyCommunity',
    publicationStatus: 'publish',
    isFeaturedOnHomepage: false,
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
    kudosImageLink: '/lesson/layer-1-blockchains/kudos-66fa6447.png',
    lessonImageLink: '/lesson/layer-1-blockchains/lesson-dcff6ea3.png',
    socialImageLink: '/lesson/layer-1-blockchains/social-db62f5f0.jpg',
    learningActions: '',
    marketingDescription: 'Understand how Layer 1 blockchains work - and their limitations!',
    kudosId: 14611,
    duration: 15,
    learnings: '',
    difficulty: undefined,
    description: 'Understand how Layer 1 blockchains work - and their limitations!',
    name: 'Layer 1 Blockchains',
    quest: 'Layer1Blockchains',
    publicationStatus: 'publish',
    isFeaturedOnHomepage: true,
    isCommentsEnabled: false,
    endOfLessonRedirect: 'https://tally.so/r/wdbKjy',
    endOfLessonText: 'To give feedback about this lesson, click Next.',
    communityDiscussionLink: 'https://gm.xyz/c/BanklessAcademy?communityName=BanklessAcademy&sortBy=new&topicUuid=cd3e1630-72a6-40c4-ac26-ce5809e19af6',
    notionId: '6e14e3cfc6a44087b3b3d15dd07d2fee',
    slug: 'layer-1-blockchains',
    imageLinks: [
      '/lesson/layer-1-blockchains/introduction-e0da8469.svg',
      '/lesson/layer-1-blockchains/blockchain-trilemma-31329f66.svg',
      '/lesson/layer-1-blockchains/security-and-consensus-5e1f03b6.svg',
      '/lesson/layer-1-blockchains/security-and-attacks-7d35acf6.svg',
      '/lesson/layer-1-blockchains/scalability-throughput-4b140ad0.svg',
      '/lesson/layer-1-blockchains/scalability-finality-161f7e2b.svg',
      '/lesson/layer-1-blockchains/decentralization-distributes-power-829f91a2.svg',
      '/lesson/layer-1-blockchains/is-it-decentralized-4b5bf857.svg',
      '/lesson/layer-1-blockchains/some-examples-523b9b96.svg',
      '/lesson/layer-1-blockchains/so-what-can-be-done-50592b46.svg',
      '/lesson/layer-1-blockchains/the-future-of-ethereum-2b64fd6b.svg'
    ],
    slides: [
      {
        type: 'LEARN',
        notionId: 'c39a3e32b41c474394eed2485e5f6096',
        title: '<strong>Introduction</strong>',
        content: '<div class="bloc1"><p>Problems emerge when more users want to use a <code>blockchain</code> network than it can handle. Large demand for <code>blockspace</code> can be temporary or can last as long as users continue to have a strong desire to use the blockchain. In times of high demand, Ethereum users can pay skyrocketing fees to still have their transactions processed quickly— ultimately pricing out users with less capital.</p><p>This lesson explores why Ethereum and other blockchains are subject to the <code>Blockchain Trilemma</code>, how the Trilemma is the root cause of the problems described above, and how the Trilemma affects Ethereum’s plans for serving the needs of all its users. We will look at the tradeoffs several blockchains have made concerning the Blockchain Trilemma, and what those tradeoffs mean for Academy Explorers.</p></div><div class="bloc2"><img src=\'/lesson/layer-1-blockchains/introduction-e0da8469.svg\'></div>'
      },
      {
        type: 'LEARN',
        notionId: '4dfda718520e4f5ea01dce2e8ee15529',
        title: 'Blockchain Trilemma',
        content: '<div class="bloc1"><p>As implied by the word <em><strong>tri</strong></em>lemma, there are three qualities of blockchains that compete with each other and prevent optimizing for all three at once. </p><p>These are: <code>Security</code>, <code>Scalability</code>, and <code>Decentralization</code>.</p><p>For a blockchain to serve as an unbiased foundation for a monetary system at a global scale, it should excel in all three aspects. A monetary system needs to be secure from fraud, safe from attacks by censors through decentralization, and scalable to meet the needs of over 8 billion humans in a global society.</p></div><div class="bloc2"><img src=\'/lesson/layer-1-blockchains/blockchain-trilemma-31329f66.svg\'></div>'
      },
      {
        type: 'QUIZ',
        notionId: '8a9d852b8f374a9d815917752850955e',
        title: '✅ TODO',
        quiz: {
          question: 'The Blockchain Trilemma describes the relationship between:',
          rightAnswerNumber: 3,
          answers: [
            'ethereum, bitcoin, and altcoins',
            'security, censorship, and fraud',
            'decentralization, scalabilty, and security',
            'money, humans, and blockchains'
          ],
          id: 'layer-1-blockchains-1'
        }
      },
      {
        type: 'LEARN',
        notionId: '1fc5863c44bb4437a21bc7cc7cb0cfdf',
        title: 'Security and Consensus',
        content: '<div class="bloc1"><p>Security is the most foundational requirement for a public blockchain. Computers within a network (such as a blockchain network) must agree on what transactions have truly happened to work together; this agreement is called <code>consensus</code>. A blockchain is secure if attackers cannot disrupt the network from agreeing on that truth. Consensus algorithms are designed to resist these attacks.</p><p>Chains like Bitcoin that use <code>Proof of Work</code> consensus prevent fraud by making their consensus algorithm highly competitive; each block producer races to solve a math problem. The first to do so wins the right to create the next block and receives the monetary <code>block reward</code> that comes with it. Fraud would require massive investments in computing power and energy, so an attacker would likely spend more than they’d gain. </p></div><div class="bloc2"><img src=\'/lesson/layer-1-blockchains/security-and-consensus-5e1f03b6.svg\'></div>'
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
            'Secured through economic incentives',
            'All of the above'
          ],
          id: 'layer-1-blockchains-2'
        }
      },
      {
        type: 'LEARN',
        notionId: 'd22518cb06b944acad0745a1121d39b5',
        title: 'Security and Attacks',
        content: '<div class="bloc1"><p>One potential form of attack on blockchain consensus is a <code>51% attack</code>; an attacker needs to have 51% or more of the consensus power on a network to commit fraud by creating falsified transactions. This means 51% of the computing power solving math problems in Proof of Work consensus and 51% of the <code>stake</code> in Proof of Stake consensus. Again, fraud would require a massive capital investment to acquire a stake in the network, which will be destroyed if found to be creating false transactions; an attacker would likely spend more than they’d gain.</p><p>In <code>Proof of Stake</code> consensus, the block producer isn’t chosen through competition but is randomly assigned instead. Like with Proof of Work, the consensus algorithm ensures that any single entity cannot regularly “win” the right to create a new <code>block</code>. </p></div><div class="bloc2"><img src=\'/lesson/layer-1-blockchains/security-and-attacks-7d35acf6.svg\'></div>'
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
          id: 'layer-1-blockchains-3'
        }
      },
      {
        type: 'LEARN',
        notionId: '0bfdc60dd92149ee94b626e5c5b9c44d',
        title: 'Scalability - Throughput',
        content: '<div class="bloc1"><p><code>Scalability</code> refers to a blockchain’s ability to process many transactions quickly. Two parts determine a blockchain’s scalability: throughput and finality.</p><p>1) <code>Transaction throughput</code>: How many transactions a blockchain can process at once, usually measured in transactions per second (<code>TPS</code>).</p><p>Imagine many people waiting at a bus stop with more arriving every minute, they all want to travel. But there are only so many people that can travel by bus. To clear the bus stop of people faster, you’d have to use bigger busses (more people) or make the busses run more often (less time). It works the same way with trying to fit many transactions into the small amount of <code>block space</code> available for each block. You can see this visualization with live data at <a href=\'https://txstreet.com/v/eth-btc\'>https://txstreet.com/v/eth-btc</a>.</p></div><div class="bloc2"><img src=\'/lesson/layer-1-blockchains/scalability-throughput-4b140ad0.svg\'></div>'
      },
      {
        type: 'QUIZ',
        notionId: '796f016b847e4383bbeeba78736e620b',
        title: '✅ Transactions Per Second',
        quiz: {
          question: 'Which of the following is true for the bus stop analogy for blockchain transactions?',
          rightAnswerNumber: 4,
          answers: [
            'People (transactions) are grouped together into buses (blocks)',
            'There is a maximum limit on how many people (transactions) can fit into each bus (block)',
            'To process more people (transactions) you need faster, larger, and/or more buses (blocks)',
            'All of the above'
          ],
          id: 'layer-1-blockchains-4'
        }
      },
      {
        type: 'LEARN',
        notionId: 'cf8aeea9908e4dc7960f63ae71edcad4',
        title: 'Scalability - Finality',
        content: '<div class="bloc1"><p>The second aspect of blockchain scalability is:</p><p>2) <code>Finality</code>: When can we be reasonably sure a transaction won’t get changed or reversed?</p><p>Finality is typically measured in blocks — how many blocks have passed since the transaction was included in a block? The more blocks that get added to the chain afterward, the more sure we can be that the transaction is finalized and won’t get reverted. Remember, a secure blockchain consensus algorithm makes it very expensive to change past blocks, and the expense increases the farther back someone changes. We convert this block number to a finality time by multiplying the expected number of block confirmations by the blockchain’s TPS. For Ethereum, eight block confirmations times 15 <code>TPS</code> gives 2 minutes of finality time after confirmation. </p></div><div class="bloc2"><img src=\'/lesson/layer-1-blockchains/scalability-finality-161f7e2b.svg\'></div>'
      },
      {
        type: 'LEARN',
        notionId: '484d38249db74050a6a14cf584f44c15',
        title: 'Decentralization distributes power',
        content: '<div class="bloc1"><p><code>Decentralization</code> is the final basis of the blockchain trilemma — the process of transferring control and decision-making from a single entity to a distributed network of many. Decentralization is the fundamental principle that enables blockchains to be <code>permissionless</code> and <code>censorship-resistant</code>; anyone can use decentralized blockchains, and anyone can build software using them.</p><p>Centralized platforms like Facebook and Twitter can deactivate anyone’s account at any time. Many influential streamers on Twitch or Tiktok have found themselves removed from their platforms without cause. Even if social media users can reinstate their accounts, it can be long and painful process. Without decentralization, a blockchain <code>ledger</code> is just a financial spreadsheet on a bank computer; the bankers decide who gets to create an account with them. A <code>permissionless</code> network means authority is sufficiently decentralized; there is no way to remove a person or entity’s access.</p></div><div class="bloc2"><img src=\'/lesson/layer-1-blockchains/decentralization-distributes-power-829f91a2.svg\'></div>'
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
            'Anyone anywhere can use permissionless systems '
          ],
          id: 'layer-1-blockchains-5'
        }
      },
      {
        type: 'LEARN',
        notionId: '08840d13c2fe4acca833d5bd31ce7969',
        title: 'Is it decentralized?',
        content: '<div class="bloc1"><p>But whether something is decentralized isn’t just a yes or no answer. Are 10 controlling entities decentralized? How about 1000? One million? There isn’t a standard cutoff for something being sufficiently decentralized, so it makes sense to think of decentralization as a spectrum. Rather than the only choices being black and white, there are also many greys between them.</p><p>So we can say something is “more or less decentralized than something else” rather than “centralized or decentralized.” A high degree of decentralization is required for a neutral monetary system to resist state-level censorship. Newer blockchains often trade decentralization for scalability, but they leave themselves vulnerable to the same pressures from societies and governments that fully centralized platforms feel. They may end up engaging in the same censorship seen on centralized social media networks.</p></div><div class="bloc2"><img src=\'/lesson/layer-1-blockchains/is-it-decentralized-4b5bf857.svg\'></div>'
      },
      {
        type: 'QUIZ',
        notionId: 'd5e125d69d6f4cfe963af2ee0515594a',
        title: '✅ But is it Decentralized?',
        quiz: {
          question: 'Different blockchains use different amounts of decentralization. ',
          rightAnswerNumber: 1,
          answers: [
            'True',
            'False'
          ],
          id: 'layer-1-blockchains-6'
        }
      },
      {
        type: 'LEARN',
        notionId: 'fdfbd964272445d5981d88c7f4c78410',
        title: 'Some Examples',
        content: '<div class="bloc1"><p>Each blockchain has its own approach to the trilemma, and each has made tradeoffs to focus on its goals. Bitcoin and Ethereum prioritize security and decentralization over scalability, leading to long transaction <code>finality time</code> for Bitcoin and sky-high transaction fees for Ethereum. The demand to use <code>smart contracts</code> as a “decentralized world-finance computer”, especially for DeFi, has meant that many users making small transactions cannot afford Ethereum.</p><p>This high cost to use has provided an opening for <code>alternative Layer 1</code>’s like the Binance chain. Binance prioritized scalability over decentralization for higher <code>transaction throughput</code> and cheaper fees. Third-generation chains like Solana use novel methods to solve the trilemma, but all blockchains are still subject to these basic constraints. Each chain’s choice defines its ecosystem through the foundational effects that come from that choice.</p></div><div class="bloc2"><img src=\'/lesson/layer-1-blockchains/some-examples-523b9b96.svg\'></div>'
      },
      {
        type: 'LEARN',
        notionId: '997686d2404c4556a6841a0232705c8b',
        title: 'So what can be done?',
        content: '<div class="bloc1"><p>So if Ethereum has prioritized high security and decentralization, how can it scale to serve the needs of all users as the global financial network it aims to become? This is where the Ethereum roadmap can provide some answers: <code>Layer 2</code>s and blockchain <code>sharding</code>.</p><p><code>Layer 2</code>s are an early solution to increasing Ethereum scalability without compromising on the other two parts of the blockchain trilemma. They are an additional layer sitting on top of the main blockchain, relying on the main chain for security but allowing users to benefit from reduced fees and faster transactions. We will explore them in more detail in our Layer 2 lesson.</p><p><code>Sharding</code> splits the single blockchain into multiple chains that all run together in parallel, like adding more lanes to a road. It enables more transactions to be processed at once without sacrificing security or decentralization.</p></div><div class="bloc2"><img src=\'/lesson/layer-1-blockchains/so-what-can-be-done-50592b46.svg\'></div>'
      },
      {
        type: 'QUIZ',
        notionId: 'e1a2b41a64f9422c8082603459a28c0e',
        title: '✅ Layer 2s',
        quiz: {
          question: 'Layer 2s:',
          rightAnswerNumber: 2,
          answers: [
            'Provide their own security',
            'Increase scalability for the main blockchain',
            'Increase fees for users',
            'Increase finality time for users'
          ],
          id: 'layer-1-blockchains-7'
        }
      },
      {
        type: 'LEARN',
        notionId: '18c497caf1df4810afb1497884a26962',
        title: 'The future of Ethereum',
        content: '<div class="bloc1"><p>Previously known as the Ethereum 2.0 upgrade, the Ethereum network is evolving its scalability without sacrificing the other aspects of the trilemma. These changes include the merge to <code>Proof of Stake</code> consensus, Layer 2s going live, <code>sharding</code> of the main chain, and an overall reduction of energy usage. <strong>All of these changes together will mean a faster, more environmentally-friendly, and cheaper Ethereum while still maintaining security and decentralization as core tenets.</strong> The Ethereum Foundation has an excellent webpage on coming <a href=\'https://ethereum.org/en/upgrades/\'>upgrades to Ethereum</a>.</p><p>These things take time; meanwhile, many <code>Layer 2</code> protocols are building on top of Ethereum to help meet user demand in the short term without requiring updates to the Ethereum protocol itself. These Layer 2 protocols rely on Layer 1 Ethereum to provide decentralized security while they provide scalability; the diversity of Layer 2s makes a decentralized ecosystem! Ethereum scaling projects include protocols like Optimistic Ethereum, Polygon, and others.</p></div><div class="bloc2"><img src=\'/lesson/layer-1-blockchains/the-future-of-ethereum-2b64fd6b.svg\'></div>'
      },
      {
        type: 'QUIZ',
        notionId: '79e758e2b8da45468f9f3f11281e2c6c',
        title: '✅ Ethereum Future',
        quiz: {
          question: 'Ethereum upgrades include:',
          rightAnswerNumber: 4,
          answers: [
            'Using Layer 2s and sharding to increase scalability',
            'Maintaining decentralization and security as core principles',
            'Reducing energy consumption of the blockchain using Proof of Stake consensus',
            'All of the above'
          ],
          id: 'layer-1-blockchains-8'
        }
      },
      {
        type: 'LEARN',
        notionId: 'a229a575b61b4f0f84018a0346de4658',
        title: 'What does it mean for Explorers?',
        content: '<div class="bloc1"><p>Users need low fees to learn and explore the technology with low barriers to entry and low costs from mistakes, even more so at the beginning of their journey. The Ethereum blockchain is not ideal yet, but its values make it one of the best candidates for fulfilling the dream of a global financial computing system. Explorers can learn to interact and use Ethereum without paying massive fees; using Layer 2s allows Explorers to have the security and decentralization benefits of Ethereum combined with the higher scalability.</p><p>The next lesson will explain <code>Layer 2</code> solutions and how to get started. Onward explorers!</p></div>'
      },
      {
        type: 'QUEST',
        title: 'Layer 1 Blockchains Quest',
        component: 'Layer1Blockchains'
      },
      {
        type: 'END',
        title: 'Lesson Reward'
      }
    ]
  },
  {
    kudosImageLink: '/lesson/intro-to-defi/kudos-b4dab2d4.png',
    lessonImageLink: '/lesson/intro-to-defi/lesson-97291c9d.png',
    socialImageLink: '/lesson/intro-to-defi/social-ee8d95a4.jpg',
    learningActions: 'Transfer crypto into your web3 wallet in order to be ready to interact with DeFi later',
    marketingDescription: 'Move beyond centralized exchanges and start exploring the ever-expanding possibilities of decentralized finance.',
    kudosId: 2562,
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
        notionId: 'abdb330ec2194271a729128226eadb2d',
        title: 'DeFi Defined',
        content: '<div class="bloc1"><p>DeFi—short for <code>decentralized</code> finance—refers to the fast-growing ecosystem of financial products, protocols, and applications that operate on public <code>blockchain</code> networks.</p><p>DeFi is rapidly transforming the world of finance with a range of new tools for putting crypto assets to work. It offers opportunities beyond simply buying crypto on a centralized exchange. It allows anyone and everyone to build a decentralized, Bankless lifestyle.</p></div><div class="bloc2"><img src=\'/lesson/intro-to-defi/defi-defined-46782447.svg\'></div>'
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
        content: '<div class="bloc1"><p>There are a growing number of <code>DeFi</code> protocols that enable you to earn interest and other rewards by using your crypto assets. You can have access to financial products that you would typically need a bank or financial services firm to get—but without the paperwork, middleman, approval process, and other hassles of the traditional finance world.</p><p>By removing the middleman, you also remove any service fees, dues, and commissions you would typically pay in the traditional finance world. With DeFi, you get to keep all the rewards, or yield earned from your assets. This is why DeFi is popular. </p></div><div class="bloc2"><img src=\'/lesson/intro-to-defi/earning-yield-c5f123f8.svg\'></div>'
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
        content: '<div class="bloc1"><p><code>DeFi</code> transactions are <code>permissionless</code>. This refers to a public <code>blockchain</code> that anyone can use to buy, sell, or trade assets. No third party controls or oversees activity. These transactions are carried out by decentralized applications, known as DApps. </p><p><code>DApps</code> and DeFi platforms enable users to make more and more types of financial transactions, 24/7, all over the world. We will introduce four of the most common opportunities used to earn yield in DeFi - investing, trading, lending and borrowing, and staking.</p></div><div class="bloc2"><img src=\'/lesson/intro-to-defi/what-you-can-do-with-defi-9b17cf2e.svg\'></div>'
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
        content: '<div class="bloc1"><p>The most common <code>DeFi</code> transaction is to purchase some cryptocurrency with the expectation that it will be worth more in the future. This is known as investing.</p><p>HODL is a term used for keeping crypto assets for a long time. Depending on who you ask, the HODL meme either comes from a typo of HOLD or it stands for <strong>H</strong>old <strong>O</strong>n for <strong>D</strong>ear <strong>L</strong>ife.</p><p>DeFi allows early access to coins and tokens to find and invest in, before they are listed on centralized exchanges (CEX).</p></div><div class="bloc2"><img src=\'/lesson/intro-to-defi/investing-d99a6d1f.svg\'></div>'
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
        content: '<div class="bloc1"><p>A decentralized exchange (DEX) shows current exchange rates between different crypto tokens and coins and serves as a digital marketplace that facilitates trading one currency for another by bringing together buyers and sellers. </p><p>The parties involved in a DEX trade don’t need to know or trust each other. In fact, it may appear that you are trading with the DEX. However, in most cases, the DEX creates <code>liquidity pools</code> that facilitate the trade between two traders’ <code>wallets</code> in a <code>permissionless</code> fashion.</p></div><div class="bloc2"><img src=\'/lesson/intro-to-defi/trading-8cd72977.svg\'></div>'
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
        content: '<div class="bloc1"><p>DeFi lending and borrowing offers loans without the need for a bank or intermediary institution. Instead, lending is done on a <code>peer-to-peer</code> level. That means transactions are between two parties and does not require a middleman or controlling entity.</p><p>There are <code>DApps</code> that enable anyone to lend and borrow crypto assets. Similar to traditional loans, a lender will earn interest on the loan and the borrower will need to pay the principal of the loan plus interest.</p></div><div class="bloc2"><img src=\'/lesson/intro-to-defi/lending-borrowing-4fb1c7c3.svg\'></div>'
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
        content: '<div class="bloc1"><p>DeFi staking is similar to lending, however it\'s a special type of lending. Instead of lending your crypto to another user on a <code>peer-to-peer</code> basis, you lend your crypto to a network or protocol. In exchange for helping secure the network or protocol, you earn rewards.</p><p>Centralized exchanges also offer staking. However, like their trading pairs, the staking opportunities and rewards are limited. With DeFi, there are many more staking possibilities than there are with centralized exchanges. </p></div><div class="bloc2"><img src=\'/lesson/intro-to-defi/staking-b4b4319d.svg\'></div>'
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
    kudosImageLink: '/lesson/dex-aggregators/kudos-ddb9db8b.png',
    lessonImageLink: '/lesson/dex-aggregators/lesson-39d1fc1c.png',
    socialImageLink: '/lesson/dex-aggregators/social-2724db28.jpg',
    learningActions: '',
    marketingDescription: 'Dive into DEX Aggregators, liquidity, and the DeFi exchange landscape.',
    kudosId: 2608,
    duration: 15,
    learnings: '',
    difficulty: undefined,
    description: 'Dive into DEX Aggregators, liquidity, and the DeFi exchange landscape.',
    name: 'DEX Aggregators',
    quest: 'DEXAggregators',
    publicationStatus: 'publish',
    isFeaturedOnHomepage: true,
    isCommentsEnabled: false,
    endOfLessonRedirect: null,
    endOfLessonText: undefined,
    communityDiscussionLink: 'https://gm.xyz/c/BanklessAcademy?communityName=BanklessAcademy&sortBy=new&topicUuid=671cc928-93d6-4c9a-9718-28ed3d56af7c',
    notionId: '42578b8813114832b8930cf59f6125af',
    slug: 'dex-aggregators',
    imageLinks: [
      '/lesson/dex-aggregators/introduction-ba453b68.svg',
      '/lesson/dex-aggregators/an-example-of-how-liquidity-impacts-prices-915b3d84.svg',
      '/lesson/dex-aggregators/shortcomings-of-traditional-dexs-thin-liquidity-c9e0b695.svg',
      '/lesson/dex-aggregators/recombining-liquidity-with-dex-aggregators-f01777dd.svg',
      '/lesson/dex-aggregators/how-gas-cost-is-calculated-on-ethereum-c34efe86.svg',
      '/lesson/dex-aggregators/how-aggregators-reduce-gas-costs-for-users-28d6f207.svg',
      '/lesson/dex-aggregators/meta-aggregators-100793fd.svg',
      '/lesson/dex-aggregators/avoiding-sandwich-attacks-75f6ae82.svg',
      '/lesson/dex-aggregators/more-protection-from-sandwiches-otc-trades-04ef66c9.svg'
    ],
    slides: [
      {
        type: 'LEARN',
        notionId: 'fdab9a0b1c7b457a9110f88dbac53d71',
        title: '<strong>Introduction</strong>',
        content: '<div class="bloc1"><p><code>Decentralized Exchange</code>s (DEXs) eliminate the costs of intermediaries and save Explorers money when trading assets. </p><p>But did you know, Explorer, that there’s more ways to save with DeFi technology? Using <code>DEX aggregators</code>, you can scan all possible trades on various DEX platforms simultaneously and execute the best trade route — all in one action. They help you get the best deal when doing a token <code>swap</code>. Just like airline flight aggregators help you find the cheapest flight, DEX aggregators help you maximize the value of your trade.</p><p>This lesson will show:</p><ol><li>How DEXs split liquidity and how that can result in reduced trading rates.</li><li>How DEX aggregators enable users to view and use multiple DEXs through one interface.</li><li>Multiple ways a single aggregator interface can save Explorers time and money.</li></ol></div><div class="bloc2"><img src=\'/lesson/dex-aggregators/introduction-ba453b68.svg\'></div>'
      },
      {
        type: 'LEARN',
        notionId: '0e59fd1b9b7943a3a70a44abc9e921c1',
        title: 'How Liquidity Affects Prices',
        content: '<div class="bloc1"><p>The amount of any token that is available to trade on a single market is called a token’s <code>liquidity</code>. The amount of liquidity available strongly influences the <code>price impact</code> when making trades in DeFi; a large price impact means the trade will cost more, and a low price impact will cost less. Most people prefer to trade in markets with higher liquidity to reduce their price impact. </p><p>You can think of it like a swimming pool; the more water (liquidity) there is, the smaller the <em>change </em>in the water level (price impact) when someone jumps in or leaves. The size of that ‘someone’ (the trade) also affects the <em>change</em> in the water level (price impact).</p></div>'
      },
      {
        type: 'LEARN',
        notionId: '8ea31e80fcfc49d3a88ad09d03341c9c',
        title: 'An Example of How Liquidity Impacts Prices',
        content: '<div class="bloc1"><p>Let’s look at an example. </p><p>The BanklessDAO token (BANK) has a liquidity amount of ~30 million BANK on Uniswap, but only ~4.5 million BANK on SushiSwap. Uniswap has over 6x the BANK liquidity of SushiSwap.</p><p>If an Explorer was to purchase 10,000 BANK from each pool, they would find that the <code>price impact</code> of their trade would result in a higher trade price in the SushiSwap pool — because their trade has pulled a larger percentage of the pool’s total liquidity.</p></div><div class="bloc2"><img src=\'/lesson/dex-aggregators/an-example-of-how-liquidity-impacts-prices-915b3d84.svg\'></div>'
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
        content: '<div class="bloc1"><p>DeFi continues to grow, but a problem is emerging for users: As more DEXs launch, the total amount of any individual token gets spread out. This is known as thin liquidity.</p><p>Remember the swimming pool: if the available water (<code>liquidity</code>) is split between multiple pools, the amount of water will be “thinner” in each pool compared to the total in the single original pool.</p><p>In 2020, Uniswap held much of the DEX liquidity to trade in DeFi. When SushiSwap launched the following month, it attracted over $1B worth of liquidity into its DEX from Uniswap, reducing total liquidity on Uniswap. This was just the start. Since then, more and more DEXs have entered the DeFi ecosystem, progressively thinning the liquidity of each pool.</p><p>Thus, any trade has a larger <code>price impact</code> than when Uniswap held most of the ecosystem’s total liquidity. As more DEXs launch, it costs Explorers more to trade on any single DEX without new innovations.</p></div><div class="bloc2"><img src=\'/lesson/dex-aggregators/shortcomings-of-traditional-dexs-thin-liquidity-c9e0b695.svg\'></div>'
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
        content: '<div class="bloc1"><p>Large amounts of <code>liquidity</code> are needed to reduce price impact and save you money. DEX aggregators allow users to run trades through multiple DEXs at once and reduce the price impact; a big trade from an Explorer’s wallet gets broken down into multiple small trades across multiple DEXs.</p><p>DEX aggregators can even route trades through an <code>intermediary token</code> , or more than one, if that gets a better result for users — like the way a flight aggregator might suggest an extra stop at another airport if it’s cheaper for the passenger. This discovery of the optimal <code>trade route</code> is done by sophisticated algorithms searching through all possible paths to find the cheapest trade route at that moment.</p></div><div class="bloc2"><img src=\'/lesson/dex-aggregators/recombining-liquidity-with-dex-aggregators-f01777dd.svg\'></div>'
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
        content: '<div class="bloc1"><p>Let’s refresh how gas is calculated before we go on to see how the optimizations DEX aggregators make can reduce network fees for users.</p><p>Just like gas for a car, <code>gas</code> is the fuel for running blockchain code on Ethereum. The farther you travel, the more gas your car uses. Likewise, the more computations you do, the more gas your code requires. Gas price is measured in very small amounts of Ether called <code>gwei</code>, like cents to a dollar. 1 gwei is 1 billionth of an ether (1 gwei = 0.00000001 ETH). </p><p>Total gas cost is based on how much gas your transaction uses and the unit price of gas at the time of use. The formula for calculating the price of a transaction is as follows:<br><em>Amount of gas used * Gas price = Total gas cost</em></p><p>As an example, let’s say gas costs are at 22 gwei per gas unit and the transaction uses 120-thousand units:<br><em>120,000 * 22 gwei = 2,640,000 gwei </em><em><strong>or</strong></em><em> 0.00264 ETH</em></p></div><div class="bloc2"><img src=\'/lesson/dex-aggregators/how-gas-cost-is-calculated-on-ethereum-c34efe86.svg\'></div>'
      },
      {
        type: 'LEARN',
        notionId: '7196f021bcc541929d68b9bd0c018ac3',
        title: 'How Aggregators Reduce Gas Costs for Users',
        content: '<div class="bloc1"><p>Trade splitting would result in more transaction fees from the extra on-chain activity, except that advanced aggregators plan for transaction fees and include them in their calculations of the trade route. They simulate trades off chain, including <code>gas</code> costs, to find <code>trade routes</code> that leave Explorers with the most value at the end of the interaction.</p><p>Some aggregators go even further: they may refund some of the network transaction fees from using their protocol. 1inch currently offers rebates in their token for a portion of gas costs from trading through their <code>dapp</code> on Ethereum mainnet.</p></div><div class="bloc2"><img src=\'/lesson/dex-aggregators/how-aggregators-reduce-gas-costs-for-users-28d6f207.svg\'></div>'
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
        content: '<div class="bloc1"><p>There are even meta-aggregators of DEX aggregators! These platforms search through all competing DEX aggregators and serve price quotes to users. An example of this is the in-app swap function in the MetaMask wallet. This feature is actually a meta-aggregator that relies on DEX aggregators like 1inch to function.</p><p>Note: While convenient, <code>meta-aggregator</code> services can add extra costs on top of network transaction fees, increasing the overall cost for users. Explorers: make sure that your trades don’t end up more expensive than you intended. </p></div><div class="bloc2"><img src=\'/lesson/dex-aggregators/meta-aggregators-100793fd.svg\'></div>'
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
        content: '<div class="bloc1"><p>Users swapping directly through <code>DEXs</code> can lose value up to the limit of their <code>slippage tolerance</code> due to price changes coordinated by block producers — these kinds of losses are called <code>sandwich attacks</code>. Did you know that sandwich attacks led users to a total loss of $235,000,000 during 2021? Explorers can protect themselves by keeping a low slippage tolerance when swapping tokens.</p><p>Fortunately, because of the recombined liquidity offered by DEX aggregators, the price impact of a trade is reduced. Explorers can keep their slippage tolerance low while saving more with DEX aggregators, as opposed to trading directly on a DEX.</p></div><div class="bloc2"><img src=\'/lesson/dex-aggregators/avoiding-sandwich-attacks-75f6ae82.svg\'></div>'
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
        content: '<div class="bloc1"><p>Some aggregators like 1inch even offer specialized <code>OTC</code> (<code>Over The Counter</code>) services that provide total protection against sandwich attacks. These optional services enable direct trading with other users, rather than facilitating trades through DeFi <code>liquidity pools</code>. Anyone can engage in <code>OTC</code> trades to fully remove the threat of sandwich attacks — providing another great way for Explorers to save.</p><p>CoWSwap is a Meta-Aggregator that also offers sandwich-resistant services, enabled by default, to ensure trades are 100% protected against sandwich attacks.</p></div><div class="bloc2"><img src=\'/lesson/dex-aggregators/more-protection-from-sandwiches-otc-trades-04ef66c9.svg\'></div>'
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
        title: 'Lesson Reward'
      }
    ]
  },
  {
    kudosImageLink: '/lesson/kudos-testing/kudos-5e4cda70.png',
    lessonImageLink: '/lesson/kudos-testing/lesson-03a3e86a.png',
    socialImageLink: '/lesson/kudos-testing/social-17fed266.png',
    learningActions: '',
    marketingDescription: 'For testing purposes only',
    kudosId: 14067,
    duration: null,
    learnings: '',
    difficulty: undefined,
    description: 'For testing purposes only',
    name: 'Kudos testing',
    quest: 'KudosTesting',
    publicationStatus: 'hidden',
    isFeaturedOnHomepage: false,
    isCommentsEnabled: false,
    endOfLessonRedirect: null,
    endOfLessonText: undefined,
    communityDiscussionLink: null,
    notionId: '7bc2bf9be4ac4e9181782f996a2a6060',
    slug: 'kudos-testing',
    imageLinks: [],
    slides: [
      {
        type: 'LEARN',
        notionId: '5ddb04aea91d4f18859eaef4f862da42',
        title: 'Test',
        content: '<div class="bloc1"><p>slide content</p></div>'
      },
      {
        type: 'QUEST',
        title: 'Kudos testing Quest',
        component: 'KudosTesting'
      },
      {
        type: 'END',
        title: 'Lesson Reward'
      }
    ]
  },
  {
    kudosImageLink: null,
    lessonImageLink: '/lesson/optimism-powers-cryptos-newest-collective/lesson-20e3b007.png',
    socialImageLink: '/lesson/optimism-powers-cryptos-newest-collective/social-d009d909.png',
    learningActions: '',
    marketingDescription: 'Hidden micro lesson demo.',
    kudosId: null,
    duration: null,
    learnings: '',
    difficulty: undefined,
    description: 'Hidden micro lesson demo.',
    name: 'Optimism Powers Crypto’s Newest Collective',
    publicationStatus: 'hidden',
    isFeaturedOnHomepage: false,
    isCommentsEnabled: false,
    endOfLessonRedirect: null,
    endOfLessonText: undefined,
    communityDiscussionLink: null,
    mirrorLink: 'https://mirror.xyz/hirokennelly.eth/qBCcZC-cOGqzVNHbT8IIqG8bslt1yOMo8Gb-ixbScDE',
    isArticle: true,
    notionId: '549533d73275476d905dc2c34c4c2b5c',
    slug: 'optimism-powers-cryptos-newest-collective',
    articleContent: '## The OP Token and Non-Transferrable NFTs Work to Build A New Digital Democracy\n\nCrypto Twitter lit up in April when [Optimistic Ethereum](https://www.optimism.io/) (Optimism) announced that it was ready to [tokenize](https://banklesspublishing.com/towards-better-token-distribution/) its community and create a decentralized autonomous organization called the Optimism Collective.\n\n![Twitter](https://miro.medium.com/max/1400/1\*axtcHfE8r7sb3WqJTUvj3g.png)\n\nAnd then, this happened:\n\n![Twitter](https://miro.medium.com/max/1400/1\*Q_zYeoH3G1rQAg6VvDHRdw.png)\n\nThere has been talk of [Layer 2 Summer](https://newsletter.banklesshq.com/p/layer-2-summer-weekly-recap?s=r) for over a year (and [#L222](https://twitter.com/hashtag/L222?src=hashtag_click) has been trending since last year). Layer 2 (L2) is a term for a specific type of Ethereum [scaling solution](https://ethereum.org/en/developers/docs/scaling/) that allows users to inherit the security of Ethereum but transact with cheap fees and fast inclusion times. Optimism relies on [Optimistic rollup](https://ethereum.org/en/developers/docs/scaling/optimistic-rollups/) technology to scale Ethereum. As the name implies, the scaling solution literally involves optimism, in this case that the transactions are [legitimate](https://docs.ethhub.io/ethereum-roadmap/layer-2-scaling/optimistic_rollups/).\n\nBut this optimism extends beyond the technology. Optimism holds special appeal for those of us aware that its founders are aligned with Ethereum’s ethos of permissionless building, progressive decentralization, and [public goods funding](https://medium.com/ethereum-optimism/retroactive-public-goods-funding-33c9b7d00f0c), the idea that together we can create a more vibrant, sustainable, and beautiful world.\n\nIn the structural design of the Optimism Collective, we see this optimistic spirit at work. The Collective will be divided into two governing bodies: one for token holders to focus on short-term incentives, and one for those focused on long-term retroactive public goods funding. In the medium term, an executive body is tasked with guiding the Collective as it gets its governance legs.\n\nExploring the nuances of the Optimism Collective’s structure reveals a governance and token design that encodes the belief that together we can build better things even though our incentives are not always aligned, even though our specific goals may be different. Optimistic Ethereum encapsulates the spirit of this new epoch. Optimism isn’t just a scaling technology; it’s also the fundamental subatomic force that binds all of Web3.\n\n## The Optimistic Path\n\nOn March 23, 2022, Optimism published a short but powerful blog post — [Ether’s Phoenix](https://medium.com/ethereum-optimism/ethers-phoenix-18fb7d7304bb) — about building infrastructure to support public goods funding. It posits that public goods-focused building is “a mindset: that optimism prevails, that better systems are possible, and that humankind will be rewarded for its cooperative revolution”. Shortly thereafter, a [follow-up post](https://optimism.mirror.xyz/Fdpds7l4yE2VDpLN4AZQUCjpBYdoPrIHw6a4uzUepmw) told their story. Optimism started as a “small group of ETH obsessives, maniacally scribbling on whiteboards”, to a short time later, developing the [Optimistic Rollup](https://medium.com/plasma-group/ethereum-smart-contracts-in-l2-optimistic-rollup-2c1cef2ec537).\n\n![](https://miro.medium.com/max/1400/0\*jBawZFSgIuxyEFjm.png)\n\nAs the team [raised significant funding](https://medium.com/ethereum-optimism/money-long-team-strong-8526c6943fd7) to scale their own operations, they [wrote](https://optimism.mirror.xyz/Fdpds7l4yE2VDpLN4AZQUCjpBYdoPrIHw6a4uzUepmw) that Optimism was “nearing the end of a chapter and the beginning of the next — one driven by community ownership and governance”. A week later, the news was so hot that even Arbitrum did a quote tweet trying to get in on some of the action:\n\n![Twitter](https://miro.medium.com/max/1400/1\*ZUQ_N4wDyuwA8YBQKWVyUw.png)\n\n## A New Model of Optimistic Governance\n\nOn April 26, 2022, a new model of democratic governance was born. As a [decentralized autonomous organization](https://banklesspublishing.com/beginnings-of-the-indaostrial-revolution/), the Optimism Collective resonates with the soul of Ethereum: the idea that the technology we build and the systems we create to incentivize behavior can create an abundant, sustainable, and techno-optimist future. [Calling itself](https://www.optimism.io/vision) a “new model of digital democratic governance optimized to drive rapid and sustained growth of a decentralized ecosystem”, the governance model is designed to empower a community to build and benefit from a robust public goods funding model.\n\n> This model is centered around the axiom of impact=profit and the conviction that funding public goods can be profitable.\n\nThe Optimism Collective [defines](https://www.optimism.io/vision) the impact=profit axiom as “…the principle that positive impact to the collective should be rewarded with profit to the individual”. In other words, people and projects should be [retroactively funded](https://medium.com/ethereum-optimism/retroactive-public-goods-funding-33c9b7d00f0c) for contributing to the public good. As Vitalik Buterin [writes](https://medium.com/ethereum-optimism/retroactive-public-goods-funding-33c9b7d00f0c), “The core principle behind the concept of retroactive public goods funding is simple: it’s easier to agree on what was useful than what will be useful”.\n\nWhen designing the governance framework, the Optimism team decided to go [bicameral](https://en.wikipedia.org/wiki/Bicameralism), erecting two different governmental bodies to make up the Collective. The Token House, governed through tokenization, will begin to take shape now that [Airdrop #1](https://optimism.mirror.xyz/qvd0WfuLKnePm1Gxb9dpGchPf5uDz5NSMEFdgirDS4c) has occurred. The Citizens’ House will come later and be governed by holders of [soulbound](https://papers.ssrn.com/sol3/papers.cfm?abstract_id=4105763) [NFTs](https://banklesspublishing.com/the-101-on-nfts-a-briefing/). Each House will be tasked with aligning incentives and values in pursuit of the [Optimistic Vision](https://www.optimism.io/vision).\n\n![](https://miro.medium.com/max/1400/0\*MmSoE5kpslTWqvXr.png)\n\nAlong with the bicameral structure, the Optimism Foundation was created to help guide the Houses as the community discovers how to govern the Optimism Collective. Initially, the Foundation and the Collective will have to learn how to govern together. As the Collective finds its groove, the Foundation will relinquish its governance responsibilities to the Collective and slowly dissolve in an act of decentralized sacrifice.\n\n## The Founding Documents\n\nThe founding documents of the Optimism Collective are the [Working Constitution of the Optimism Collective](https://gov.optimism.io/t/working-constitution-of-the-optimism-collective/55) and the [OPerating Manual v.0.1](https://gov.optimism.io/t/operating-manual-of-the-optimism-collective-v0-1/592). The Working Constitution embodies the soul of the Collective and informs its operations. The Manual and all further iterations must stay true to the principles as laid down in the Working Constitution.\n\n## Working Constitution\n\nThe Working Constitution embodies the spirit of the Collective and creates a flexible framework that supports a sustainable and fair model for democratic governance. It enshrines the Collective’s experimental governance mandate and clearly states that it will self-destruct within four years of adoption as it cedes its authority to the permanent [Bedrock Constitution](https://gov.optimism.io/t/working-constitution-of-the-optimism-collective/55). The Working Constitution also mandates the eventual creation of the Citizens’ House to provide checks and balances to the Token House, and it cements the Foundation’s role in helping to guide the Collective. This Working Constitution is a living document that will continue to evolve as governance successes and failures inform the Collective.\n\n## OPerating Manual v0.1\n\nThe initial OPerating Manual enacts the principles enshrined in the Working Constitution, providing the operating guidelines and governance procedures for the Token House. The Manual will be updated with the launch of the Citizens’ House. As an experimental and iterative organization, the Collective will ensure the Manual will be regularly revised as the governance model becomes clearer and more refined.\n\n## The Optimism Foundation\n\nAccording to the [Working Constitution](https://gov.optimism.io/t/working-constitution-of-the-optimism-collective/55), the Optimism Foundation is a “Cayman Islands organization responsible for guiding the growth and development of the Optimism Collective”. Upon formation, the Foundation has certain enumerated powers and responsibilities as defined in the [Working Constitution](https://gov.optimism.io/t/working-constitution-of-the-optimism-collective/55). The Foundation will act as the benevolent matriarch, helping to steer the wider Collective of community members, builders, and citizens, until it too decentralizes into Web3’s subatomic optimistic force.\n\n## The Collective Blueprints\n\nThe Optimism Collective will ultimately be governed by two bodies: the Token House and the Citizens’ House. Although each House will have separate responsibilities and areas of focus, they will share responsibility for granting ‘citizenships’ in the Citizens’ House and defining the network parameters for the Optimism protocol. Until the Citizens’ House is fully formed many of its responsibilities will rest with the Foundation.\n\n![](https://miro.medium.com/max/1400/0\*86H0mSxi0fPDSbie.png)\n\n## The Token House\n\nThe Token House is made up of holders of the OP token, the Optimism Collective’s governance token. OP holders will submit, deliberate, and vote on proposals affecting project incentives, protocol upgrades, disbursement of treasury funds, and network parameters. They also will grant citizenship to the Citizens’ House, once formed. Members may either vote directly or delegate their voting power to a third party.\n\nGovernance will be primarily coordinated through the [Optimism Forum](https://gov.optimism.io/) and [Snapshot](https://snapshot.org/#/opcollective.eth), the off-chain voting platform. Initially, proposals will be tightly regulated and overseen by the Foundation. Certain proposals, such as those encompassing treasury appropriation or rights protections (changes to the founding documents), may only be initiated by the Foundation. Unlike many protocols, most proposals can be submitted straight to Snapshot for voting.\n\nTo minimize voter fatigue and increase participation, voting on proposals will occur at set intervals. Governance proposals must meet quorum (the minimum number of OP votes required for a proposal to be enacted based upon the total OP supply) and overcome an approval threshold, which is the minimum number of votes required to be cast in favor of a proposal. Initial quorum will be set at 10% of the total supply, while approval threshold requirements vary [depending on the proposal type](https://community.optimism.io/docs/governance/gov-01/#_2-voting).\n\nThe Foundation will ensure that only proposals meeting quorum and approval thresholds are considered for implementation. For proposals that meet voting requirements, the Foundation “will [determine](https://community.optimism.io/docs/governance/gov-01/#implementation-and-administration) whether the proposal is safe, secure, consistent with the purposes of the Foundation and the Collective, and capable of being implemented in a legally compliant manner”. If so, the Foundation will work towards proposal implementation; if not, it may be sent back to the Collective for modifications or resubmission, or a proposal may be implemented subject to certain guardrails.\n\n## The Citizens’ House\n\nIf the Token House is for the plutocrats (Optimism’s term!), then the Citizens’ House is for the people. The primary purpose of the Citizens’ House is to determine how to allocate network revenue and its initial OP token supply to retroactively fund public goods. The Token House is meant to incentivize for the short-term; the Citizens’ House will be built to sustain the Optimism Collective’s long-term [vision](https://www.optimism.io/vision), anchored in the impact=profit maxim.\n\nIn the spirit of optimistic experimentation, membership in the Citizens’ House will be granted via [soulbound](https://papers.ssrn.com/sol3/papers.cfm?abstract_id=4105763) non-transferable tokens, known as Citizenship NFTs — recipients can’t sell, transfer, or otherwise move these out of their wallet address. Yet soulbound NFTs aren’t without controversy:\n\n![Twitter](https://miro.medium.com/max/1400/1\*7jQ0D_zP8pTkIXDEc6FHhw.png)\n\nThat aside, it’s clearly a way to decouple economic incentives from governance, which is a strong check on the Token House. The Citizens’ House, described by Optimism as the identity-first layer of the Collective, will require a new Operating Manual, v0.2, but this experiment in citizen-based governance is expected to commence once the Foundation, in consultation with the Token House, determines the mechanism for granting Citizenship NFTs.\n\n> *The Token House and Citizens’ House form a marriage of two parties whose incentives do not cleanly map, but who must work together, believe in the vision, and behave optimistically. Optimism doesn’t just bind us when we have the same motivations; it’s a force that steers us towards a collective vision for how we want to live.*\n\n## OP Token Allocation\n\n![](https://miro.medium.com/max/1400/0\*Cyso2LkqAtKHSbOO.png)\n\nThe Token House will be made up of OP holders, and the disbursement method for the tokens has been under discussion throughout the cryptoverse, largely focusing on the mechanics of [Airdrop #1](https://optimism.mirror.xyz/qvd0WfuLKnePm1Gxb9dpGchPf5uDz5NSMEFdgirDS4c). Airdrop #1’s allocation parameters reward active Optimism and Ethereum users who are helping the larger ecosystem grow, but it’s also worth examining the general allocation to get a sense of what Optimism is working to accomplish.\n\nThe OP token allocation is broken up into five distinct categories of recipients:\n\n![](https://miro.medium.com/max/1400/0\*kDSRCVAWOVbuIeTw.png)\n\nThirty-six percent of total token supply will be allocated to core contributors and sugar xaddies — those people and entities who have enabled Optimism to reach this point. This type of retroactive allocation is typical in the ecosystem, and recognizes the importance of compensating past work. These allocations will be subject to a lockup period.\n\nAt the outset, there will be an initial total supply of just over 4 billion OP tokens, which will inflate at a rate of 2% per year. Sixty-four percent of the total token supply will be allocated to the community of users and projects through airdrops, ecosystem incentives and development, and retroactive public goods funding. A rough approximation of the unlocked OP token supply is below.\n\n![](https://miro.medium.com/max/1400/0\*_oqCkhOt9VmTYoyT.png)\n\nAs the graphic makes clear, Optimism expects to release their total token supply over a four-year period, but its main focus will continue to be on proactively funding its ecosystem’s growth and retroactively funding public goods. All of this began with [Airdrop #1](https://optimism.mirror.xyz/qvd0WfuLKnePm1Gxb9dpGchPf5uDz5NSMEFdgirDS4c).\n\n## Airdrops\n\nThe announcement of Airdrop #1 was a watershed moment for the Ethereum ecosystem as it helped many to understand the core ethos of Ethereum, expounded by Vitalik and scoped by Optimism. Airdrop #1 allocated 5% of the total initial token supply to nearly 250,000 [eligible](https://app.optimism.io/governance) addresses. These users were rewarded for both their use of Optimism and their general support of the Ethereum ecosystem. Ecosystem participants were also allocated OP tokens for voting in DAO-wide Snapshots, being a multisig signer, contributing to Gitcoin Grants on L1, and bridging to other L1s or L2s. Early users of Optimism who met at least four of the six criteria for the airdrop had their allocation boosted.\n\nWith an additional 14% allocated to future undefined airdrops, there’s never been a better time to get involved in the Optimism and Ethereum ecosystems. Join a DAO and vote on Snapshot, take on the responsibility that comes with being on a multisig, or donate to Gitcoin Grants to help fund our ecosystem. Or maybe buy a [Pooly](https://mint.pooltogether.com/#about) to support PoolTogether’s efforts to fight back against a [malicious lawsuit](https://www.wsj.com/articles/crypto-savings-lawsuit-puts-principles-of-defi-to-the-test-11642069806). We don’t know the parameters of the future airdrops, but likely the best way to get in on future airdrops is to join the [Optimism Collective Discord](https://discord.gg/optimism) and get involved in shaping the future of protocol governance and public goods funding.\n\n## Proactive Ecosystem and Retroactive Public Goods Funding\n\nWhile rewarding early contributors, investors, and ecosystem participants is important, nothing says public goods like proactive rewards for builders helping to grow the Optimism ecosystem or retroactive funding for goods.\n\n## Ecosystem Fund\n\nThe Ecosystem Fund is the corollary to the retroactive public goods funding with which we are familiar. Proactive funding seeks to incentivize builders to work within the ecosystem in the future.\n\n![](https://miro.medium.com/max/1400/0\*MY6w5VgYChxxTA7n.png)\n\nTwenty-five percent of the total token supply will be devoted to building the Optimism Collective ecosystem. This will be split among the Optimism Collective, ecosystem partners as determined by the Foundation, a seed fund for early-stage projects, and future proactive allocations.\n\nThe Ecosystem Fund will not get any additional funding following its initial OP token allocation. By the time funds have been spent and support and building are underway, the team is optimistic it can shift the funding to private investors who will be rewarded through the retroactive funding model.\n\n## Retroactive Public Goods Funding\n\nOptimism has been retroactively funding public goods for much of its recent history, announcing [last July](https://medium.com/ethereum-optimism/retroactive-public-goods-funding-33c9b7d00f0c) that all revenue generated from block sequencing would be dedicated to such funding. To date, over [1 million USD](https://vitalik.ca/general/2021/11/16/retro1.html) in retroactive funding has been granted.\n\nIn addition to revenue derived from block sequencing, Optimism is allocating 20% of the initial OP token supply to retroactive public goods funding. This retro funding is expected to occur quarterly, with an eye on ensuring that the community and companies that make up the Collective are fairly rewarded based upon their impact.\n\nTo understand the full power of the Collective, to truly realize its potential for large-scale impact as a protocol that is also a public goods funding factory, we have to get into protocol economics: the ‘OP’ in ‘Optimism’.\n\n## Protocol Economics\n\nUsers interacting with the protocol create transaction fees that would fund public goods even without the OP token. But the OP token is the fuel that will ignite the Optimism Collective into a public goods funding powerhouse, building flywheels capable of creating large-scale and lasting change.\n\nBelieving that robust public goods enable an abundant ecosystem, the Collective seeks to generate value through a virtuous tokenomics cycle that is elegantly simple:\n\n![](https://miro.medium.com/max/1400/0\*QQWw2AjmoKnPpH9c.png)\n\nSequencer fees generated through the protocol are the source of sustainable revenue that will enable OP’s economy to bloom into a flourishing ecosystem. Like our friends at Tally Ho! who are building a [community-owned Web3 wallet](https://banklesspublishing.com/tallys-community-owned-crypto-wallet-web3-public-good/), the Optimism Collective has hard-wired public goods into its ethos and its product, turning the protocol into a public good.\n\nThe [first round](https://community.optimism.io/docs/governance/economics/#revenue-is-distributed-to-public-goods) of retroactive grants for public goods largely focused on tools and infrastructure within the broader Ethereum ecosystem, which will pay dividends for future builders and users. This flywheel of public goods funding is what we get when we incentivize participants to work with new models of social and economic coordination with a focus on building a robust ecosystem.\n\n## Collectively Optimistic\n\nWe have choices about the way we spend our time in Web3. Determining the methods by which we transact within our ecosystem must align with the overall vision and ethos of how we engage with this wide-open playground. There are many scaling solutions available to help us live a cost-effective life on chain, but there’s only one Optimism Collective.\n\nPowered by the protocol, the Collective is evolving into a fully incentivized community capable of bringing sustainable funding to those who are sowing the early seeds for a rich and vibrant ecosystem. The Collective is tasked with supporting the gardeners tilling the soil, providing it with nutrients, and tending to the shoots as they slowly grow and spread into a lush, interdependent canopy.\n\nNow is a great time to become more OPtimistic. [Check to see](https://app.optimism.io/announcement) if you can claim some OP tokens. Get involved in their [Discord](https://discord.gg/optimism), apply for a [job](https://boards.greenhouse.io/optimism) at the Optimism Foundation, or just follow them on [Twitter](https://twitter.com/optimismPBC?s=20&t=H6LnrltAPvZcVxIR_HhXtg) and help spread the word. Claim or swap for OP tokens and get active in Token House governance or work to become a member of the Citizens’ House.\n\nWe have the choice to support protocols that are building innovative governance structures to serve the greater good. It’s easy to get lost in the cryptoverse, but the Collective’s guiding light gives us good reason to be more optimistic not just about crypto, but about our collective future.\n\n\n---\n\n**Bios**\n\n***[Hiro Kennelly](https://twitter.com/HiroKennelly)*** *is a writer, editor, shipper, and coordinator at BanklessDAO and the Editor-in-Chief at Good Morning News. He is also helping to build a grants-focused organization at DAOpunks.*\n\n*illustration by **[Cosmic Clancy](https://twitter.com/CosmicClancy)***\n\n\n---\n\n*A version of this article was first released in BanklessDAO’s [State of the DAOs](https://banklessdao.substack.com/p/optimism-powers-cryptos-newest-collective)* newsletter on June 1, 2022.'
  }
]

export default LESSONS
