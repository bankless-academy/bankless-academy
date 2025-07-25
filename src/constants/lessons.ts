/* eslint-disable no-useless-escape */
import { LessonType } from 'entities/lesson'

const LESSONS: LessonType[] = [
  {
    badgeImageLink: '/images/bitcoin-basics/badge-89138e57.png',
    lessonImageLink: '/images/bitcoin-basics/lesson-cb12b11e.png',
    lessonCollectedImageLink: '/images/bitcoin-basics/datadisk-collected-15700488.png',
    lessonCollectibleGif: '/images/bitcoin-basics/datadisk-gif-ba7bb13b.gif',
    lessonCollectibleVideo: '/images/bitcoin-basics/datadisk-video-c4e04385.webm',
    lessonCollectibleMintID: '65e62382de00ef68ee5d7454',
    lessonCollectibleTokenAddress: '0x92B55D5254bC93A4f282224A9C3bD2b7e0eF37fc',
    socialImageLink: '/images/bitcoin-basics/social-e4b40d40.jpg',
    learningActions: '',
    marketingDescription: 'What is Bitcoin? Explore the first successful cryptocurrency and rethink money.',
    badgeId: 12,
    datadiskVectorMint: 124,
    collectibleId: 'D002',
    duration: 15,
    learnings: '',
    description: 'What is Bitcoin? Explore the first successful cryptocurrency and rethink money.',
    name: 'Bitcoin Basics',
    languages: [
      'br',
      'cn',
      'es',
      'fr',
      'tr',
      'ua'
    ],
    level: 'Essentials',
    lessonWriters: 'Tetranome',
    quest: 'BitcoinBasics',
    publicationStatus: 'publish',
    publicationDate: '2024-03-07',
    featuredOrderOnHomepage: null,
    isCommentsEnabled: false,
    endOfLessonRedirect: null,
    hasCollectible: true,
    notionId: '6a440f5dd00a4179811178943bf89e1d',
    englishName: 'Bitcoin Basics',
    slug: 'bitcoin-basics',
    imageLinks: [
      '/images/bitcoin-basics/welcome-to-bankless-academy-cc6189d4.png',
      '/images/bitcoin-basics/bitcoins-story-98b007a5.png',
      '/images/bitcoin-basics/a-brief-history-of-money-b5126abd.svg',
      '/images/bitcoin-basics/a-brief-history-of-money-part-2-3f9be5ac.svg',
      '/images/bitcoin-basics/enter-bitcoin-b108517c.svg',
      '/images/bitcoin-basics/digital-gold-scarcity-8c8905f7.svg',
      '/images/bitcoin-basics/digital-gold-self-custody-18bd7ba3.svg',
      '/images/bitcoin-basics/bitcoin-its-like-emailing-money-2e2fb8ad.svg',
      '/images/bitcoin-basics/the-bitcoin-network-eda52e60.svg',
      '/images/bitcoin-basics/bitcoin-mining-9b8a77ea.svg',
      '/images/bitcoin-basics/your-bitcoin-quest-aad5de00.png'
    ],
    keywords: [
      'cryptocurrency',
      'satoshi nakamoto',
      'scarcity',
      'gold standard',
      'central banks',
      'monetary policy',
      'commercial banks',
      'custodian',
      'btc',
      'peer-to-peer',
      'blockchain technology',
      'scarce',
      'self-custodial',
      'max supply',
      'cryptocurrency mining',
      'circulating supply',
      'self-custody',
      'custodians',
      'cryptocurrency wallet',
      'decentralization',
      'decentralized',
      'miners',
      'blockchain',
      'central bank',
      'decentralized money',
      'equality of opportunity'
    ],
    slides: [
      {
        type: 'LEARN',
        notionId: 'be804c6aecad43af911a5b34026fe79a',
        title: 'Welcome to Bankless Academy',
        content: '<div class="bloc1"><p>Welcome, bold Explorer, to the frontier of digital innovation.</p><p>At Bankless Academy, our mission is to provide Explorers such as yourself with the best tools and knowledge to navigate the blockchain universe and “go bankless!”</p><p>Today, we’re looking at the <code>cryptocurrency</code> that started it all: Bitcoin.</p><p>Bitcoin is a new type of money. It increases financial freedom for those who hold it, and protects their hard-earned money from losing value over time.</p></div><div class="bloc2"><img src=\'/images/bitcoin-basics/welcome-to-bankless-academy-cc6189d4.png\'></div>'
      },
      {
        type: 'LEARN',
        notionId: 'e1ba1d31d16b4430afa774522ff13fb2',
        title: 'Bitcoin’s Story',
        content: '<div class="bloc1"><p>Launched in 2009 by the mysterious “<code>Satoshi Nakamoto</code>,” Bitcoin marked the beginning of a new economic era.</p><p>As the first successful <code>cryptocurrency</code>, Bitcoin began a powerful conversation: should the control and power of money continue to rest within traditional banking systems? Or does it belong in the hands of the citizens who earn and use it every day? If you’re unsure of what exactly this means, you’re in the right place!</p><p>The reality is that today, we aren’t in control of our money in the way we think we are. This has very real consequences.</p><p>It’s time to learn how Bitcoin is revolutionizing finance.</p><p><strong>It’s time to rethink money.</strong></p></div><div class="bloc2"><img src=\'/images/bitcoin-basics/bitcoins-story-98b007a5.png\'></div>'
      },
      {
        type: 'LEARN',
        notionId: '30cb635e7580485793f2935d39b1f007',
        title: 'A Brief History of Money',
        content: '<div class="bloc1"><p>Money has been an integral part of society since our earliest days when beads, shells, and stones were used to exchange goods & services.</p><p>Yet early currencies had a problem: it was too easy for someone to find/create new money. The more of something there is, the less value it has, and so everyone’s money would slowly become worth less. If currency was to hold its value, it needed to be harder to find.</p><p>Materials like gold & silver were eventually adopted to solve this problem. The key advantage of these materials was their scarcity – there wasn\'t an endless supply, making it hard for anyone to increase the amount of money in circulation significantly. This <code>scarcity</code> helped maintain the value of money.</p><p>As societies grew, a government’s central bank would issue standardized coins made of gold & silver. Such currency made money recognizable and measurable while serving as a strong store of value.</p></div><div class="bloc2"><img src=\'/images/bitcoin-basics/a-brief-history-of-money-b5126abd.svg\'></div>'
      },
      {
        type: 'QUIZ',
        notionId: 'eecfb3374fc640c980096e5ed654c70c',
        title: '✅ Knowledge Check',
        quiz: {
          question: 'True or False:<br>”As more money is added to a monetary system, the existing money becomes worth less.”',
          rightAnswerNumber: 1,
          answers: [
            'True',
            'False'
          ],
          feedback: [
            'Correct! The more money there is, the less value it has.',
            'Try again.'
          ],
          id: 'bitcoin-basics-1'
        }
      },
      {
        type: 'LEARN',
        notionId: '71abd63b1fa8418e96ad038bbc51cb34',
        title: 'A Brief History of Money (Part 2)',
        content: '<div class="bloc1"><p>With the introduction of paper money, currencies shifted to being \'backed\' by gold. Money’s value was directly linked to a specific amount of the precious metal held in storage.</p><p>Then, in the 20th century, came the fall of this “<code>Gold Standard</code>”.</p><p>Precious metals were slowly disconnected from currencies worldwide — an effort that would allow any country’s economy to grow beyond its supply of gold. As a central bank no longer needed gold to create currency, they could create as much new money as they deemed necessary for their country’s economy. By firmly controlling the money supply, they could also control its value.</p><p>Moving into the digital age, electronic currency has vastly replaced physical currency. Storing our money with commercial banks has given us the convenience of credit cards and payment apps. While easy and secure, it also puts for-profit businesses between people and their money.</p></div><div class="bloc2"><img src=\'/images/bitcoin-basics/a-brief-history-of-money-part-2-3f9be5ac.svg\'></div>'
      },
      {
        type: 'LEARN',
        notionId: '459a1518417540c99dc0a0f68ac9cef5',
        title: 'The Problem',
        content: '<div class="bloc1"><p>The problem with our current financial system is the lack of control we have over our money, and how this lowers our ability to freely decide what to save and what to spend.</p><p><code>Central banks</code>, the bank managing a country’s <code>monetary policy</code>, can introduce any amount of new money. This lack of <code>scarcity</code> often makes our money worth less and less each year. Money with an unpredictable, decreasing value often forces us to spend it: <strong>“If my money is going to be worth less every year, why save? I might as well spend it now.”</strong> 💸</p><p><code>Commercial banks</code>, those used for everyday saving and spending, also influence our spending habits. As a <code>custodian</code>, they can block transactions or confiscate our funds. Some banks have blocked their clients from buying cryptocurrency! <strong>If your bank can freeze your life savings at any time… do you truly own your money?</strong> 💸</p><hr><p>For money to once again support financial freedom, it must regain the two key properties it has lost over time:</p><ul><li>💎 <strong>Value:</strong> Money must reliably store its worth over time.</li><li>✊ <strong>Ownership:</strong> Money must be easy to store and protect ourselves.</li></ul><p>Only these qualities can restore our ability to freely save and spend our money.</p></div>'
      },
      {
        type: 'LEARN',
        notionId: 'e1f43554c7964a0ea655c2b299d42844',
        title: 'Enter Bitcoin',
        content: '<div class="bloc1"><p><code>Satoshi Nakamoto</code> thought that money was too important to be controlled by just a few people. He wanted to create a type of money that could be fair and reliable for everyone.</p><p>Enter Bitcoin (<code>BTC</code>): a digital currency that operates beyond the traditional banking system.</p><ul><li>⛓️ It’s <code>peer-to-peer</code>: It connects people directly to each other. Automated using <code>blockchain technology</code>, it removes need for institutions to facilitate storage or transactions. Advocates call it “a set of rules with no rulers”.</li><li>💎 It’s <code>scarce</code>: With no central bank issuing unlimited new money, Bitcoin has a stable, predictable monetary policy that honors long-term saving.</li><li>✊ It’s <code>self-custodial</code>: It can be held without institutions hosting transfers or storage. When stored in its natural state, Bitcoin is held in a secure online safe and only the owner has access.</li></ul><p>For its qualities, Bitcoin has earned the nickname “digital gold”.</p></div><div class="bloc2"><img src=\'/images/bitcoin-basics/enter-bitcoin-b108517c.svg\'></div>'
      },
      {
        type: 'LEARN',
        notionId: '8462f7e2e0694a82a0e6dc126c81b907',
        title: 'Digital Gold: Scarcity',
        content: '<div class="bloc1"><p>📉 Do you find it difficult to keep up with rising costs?</p><hr><p>Scarcity in Bitcoin refers to there being a cap on how many Bitcoins can ever exist — a maximum of 21 million. This <code>max supply</code> is embedded in its code, making Bitcoin rare and potentially valuable. This puts it in a good position as a long term store of value, much like gold.</p><p>While the max supply of <code>BTC</code> can’t exceed 21 million, new currency is added to the market at regular intervals. Much like mining gold, new Bitcoin is introduced through a laborious process called <code>cryptocurrency mining</code>. This predictable increase in <code>circulating supply</code> keeps the Bitcoin economy moving.</p><p>Bitcoin\'s fixed <code>monetary policy</code> makes it an attractive asset for those seeking to preserve value in the long term, allowing them to keep up with rising costs.</p><p>Its short term value remains volatile due to market speculation.</p></div><div class="bloc2"><img src=\'/images/bitcoin-basics/digital-gold-scarcity-8c8905f7.svg\'></div>'
      },
      {
        type: 'QUIZ',
        notionId: '626fb6d4b2b047db837057cfbb3992e0',
        title: '✅ Knowledge Check',
        quiz: {
          question: 'How does Bitcoin promote value preservation in the long term?',
          rightAnswerNumber: 1,
          answers: [
            'Using a max supply cap.',
            'By removing custodians.'
          ],
          feedback: [
            'Correct! Bitcoin\'s fixed supply creates scarcity similar to precious metals. This aids value retention.',
            'Try again! Custody relates to ownership, rather than value.'
          ],
          id: 'bitcoin-basics-2'
        }
      },
      {
        type: 'LEARN',
        notionId: '52422fece4f34f158bfea69822ee1815',
        title: 'Digital Gold: Self-Custody',
        content: '<div class="bloc1"><p>🧊 Has your bank frozen your funds without notice because you performed a transfer that they didn’t like?</p><hr><p>In democracies, ownership is a protected human right because it gives citizens increased control and freedom over their lives. We cannot act freely when our means of survival are conditional — judged by businesses or institutions.</p><p>As our assets are increasingly digitized (i.e. your money, your property, and even your identity), our lives are taking on a digital quality that we must learn to protect.</p><p>Bitcoin’s <code>self-custody</code> offers true digital ownership, beyond reach of <code>custodians</code>. So long as you don’t share your account information with someone else, you have sole access to your assets. It’s like having your own vault of gold in a secure online space.</p><p>This system of ownership gives you total control of your digital wealth — anywhere in the world, any time.</p></div><div class="bloc2"><img src=\'/images/bitcoin-basics/digital-gold-self-custody-18bd7ba3.svg\'></div>'
      },
      {
        type: 'QUIZ',
        notionId: 'f8d8e8d58e984f1097f0b17a6d805df8',
        title: '✅ Knowledge Check',
        quiz: {
          question: 'How does self-custody enable true ownership?',
          rightAnswerNumber: 1,
          answers: [
            'By giving you sole access to your assets.',
            'By allowing custodians to access to your assets.'
          ],
          feedback: [
            'Correct! Anyone with access to our assets has the ability to confiscate them.',
            'Try again! Self-custody means there is no custodian (third party) that can access our assets.'
          ],
          id: 'bitcoin-basics-3'
        }
      },
      {
        type: 'LEARN',
        notionId: '2e71f5c2c4364496bf982a6d093fc5f5',
        title: 'Bitcoin: It’s like Emailing Money!',
        content: '<div class="bloc1"><p>⌛ Have you ever had to wait several working days to send money internationally, while paying 3-5% in fees?</p><hr><p>Email simplified sending letters by removing the need for a post office. In a similar way, Bitcoin has streamlined sending money by removing the need for banks.</p><ul><li>⚡ Transfer Bitcoin globally for a reasonable fee.</li><li>⚙️ Send money 24/7. No waiting, no paperwork, no downtime.</li><li>📡 Access Bitcoin from anywhere with an internet connection.</li></ul><p>In the same way that you have an email address, a single Bitcoin address is necessary to receive Bitcoin. By default it looks like this: <em>1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa</em> (we’ll show you how to customize this later!)</p><p>You’ll manage your account using <code>cryptocurrency wallet</code> software connected to your web browser or your phone. It’s the easiest “bank account” you’ll ever set up. No appointment or ID required!</p></div><div class="bloc2"><img src=\'/images/bitcoin-basics/bitcoin-its-like-emailing-money-2e2fb8ad.svg\'></div>'
      },
      {
        type: 'QUIZ',
        notionId: '4fbf3369fdda41cfacc47b91a55cb428',
        title: '✅ Knowledge Check',
        quiz: {
          question: 'How is Bitcoin similar to email?',
          rightAnswerNumber: 4,
          answers: [
            'Both are online 24/7.',
            'Both are digital technologies.',
            'Both can be accessed with a phone.',
            'All of the above.'
          ],
          feedback: [
            'Right! But this isn’t the only correct answer.',
            'Right! But this isn’t the only correct answer.',
            'Right! But this isn’t the only correct answer.',
            'Correct! Both Bitcoin and email innovate on the services that came before them.'
          ],
          id: 'bitcoin-basics-4'
        }
      },
      {
        type: 'LEARN',
        notionId: '77a68343994b4aad9aa1c99f35961204',
        title: 'The Bitcoin Network',
        content: '<div class="bloc1"><p>Let’s switch gears and look at the engine behind Bitcoin: <br><strong>The Bitcoin Network</strong>.</p><p>Bitcoin runs on a shared network hosted across thousands of computers worldwide. Every computer in the network plays a role in maintaining its operations; the network exists through these computers! If one computer processes a fraudulent transaction, the others are there to correct it.</p><p>This also means there’s no single point to apply pressure in attempted hacks. In order for the network to be controlled, a majority of the computers would need to be compromised.</p><p>This defense strategy is called <code>decentralization</code>: the shifting of control from one central group to many smaller ones. It’s what makes cryptocurrency networks virtually unstoppable.</p></div><div class="bloc2"><img src=\'/images/bitcoin-basics/the-bitcoin-network-eda52e60.svg\'></div>'
      },
      {
        type: 'LEARN',
        notionId: '8a1ec1c7e35649bb9b26e4a1c1ce5fe1',
        title: 'Bitcoin Mining',
        content: '<div class="bloc1"><p>With the Bitcoin Network having no central bank, the network relies on its <code>decentralized</code> participants. Known as <code>miners</code>, these participants are constantly checking transactions and adding them to a “database” — the <code>blockchain</code>.</p><p>It’s important that these miners are motivated to be active and honest, to protect the network from fraud. Miners frequently double-check each other’s results, but are also rewarded for the work they do. When we submit Bitcoin transactions, we pay a small fee that goes to the miner of our transaction. Miners also earn new Bitcoin, known as “block rewards”, for their work.</p><p>These rewards slowly increase Bitcoin’s <code>circulating supply</code> within the <code>max supply</code> cap of 21 million <code>BTC</code>.</p><p>It’s the slow, predictable introduction of new coins that separates Bitcoin from traditional currencies. Everything is managed by community-approved computer code — “rules with no rulers” — and decentralized participants, rather than small groups of people at the <code>central bank</code>.</p></div><div class="bloc2"><img src=\'/images/bitcoin-basics/bitcoin-mining-9b8a77ea.svg\'></div>'
      },
      {
        type: 'LEARN',
        notionId: '9062ca20dd5541a6ae3a25f5831ee4e2',
        title: 'Sending a Bitcoin Transaction',
        content: '<div class="bloc1"><p>Understanding the exact mechanisms that power Bitcoin transactions and mining can get quite complicated. That said, using and sending Bitcoin is simple!</p><p>We’ll take a simplified view of the process for today:</p><ol><li>You submit a transaction using your <code>cryptocurrency wallet</code>, sending 0.1 <code>BTC</code> to your friend’s wallet address.</li><li>A miner checks your transaction for errors. Other miners double-check their results.</li><li>If approved, your transaction is added to the <code>blockchain</code> “database”.</li><li>Your friend receives 0.1 BTC in their wallet.</li></ol></div><div class="bloc2"><iframe allowfullscreen class=\'animation\' src=\'https://app.banklessacademy.com/animation/bitcoin\'></iframe></div>'
      },
      {
        type: 'QUIZ',
        notionId: '66a30c6163b1406da931e7b62ba76222',
        title: '✅ Knowledge Check',
        quiz: {
          question: 'What is decentralization?',
          rightAnswerNumber: 2,
          answers: [
            'Increased scarcity.',
            'Distribution of control across multiple participants.',
            'The rewards earned by miners.'
          ],
          feedback: [
            'Try again! Scarcity means an asset is in low supply.',
            'Correct! This distribution protects the network and its users.',
            'Try again! Miners are rewarded with transaction fees and block rewards.'
          ],
          id: 'bitcoin-basics-5'
        }
      },
      {
        type: 'QUIZ',
        notionId: '59609434869c42b99a54a538d8faa2d5',
        title: '✅ Knowledge Check',
        quiz: {
          question: 'How does mining protect the Bitcoin Network from fraud?',
          rightAnswerNumber: 1,
          answers: [
            'By rewarding miners for checking transactions.',
            'By increasing the circulating supply of Bitcoin.',
            'Both of the above.'
          ],
          feedback: [
            'Correct! Bitcoin rewards attract miners and incentivize them to act honestly.',
            'Try again! Supply increases don’t help to prevent fraud.',
            'Try again! Only one of the above helps to prevent fraud.'
          ],
          id: 'bitcoin-basics-6'
        }
      },
      {
        type: 'LEARN',
        notionId: 'e2a5684df9734013afdc8e42a1bb494c',
        title: 'The Innovation of Money',
        content: '<div class="bloc1"><p>In this lesson, we’ve looked at how Bitcoin’s scarcity helps it retain value, and how institutional management of our assets means giving up full ownership.</p><p>However Bitcoin has evolved beyond a simple monetary tool. It has become a catalyst for a <code>decentralized money</code> revolution. This movement reimagines the traditional financial system by distributing monetary power and control to those who use it.</p><p>By decentralizing money and removing <code>custodians</code> we can:</p><ul><li>💵 Host a 24/7 global marketplace, secured by citizens around the world.</li><li>🛠️ Offer financial tools to the unbanked regions of the globe.</li><li>🤝 Use <code>peer-to-peer</code> technology to avoid the inefficiencies of middleman institutions.</li><li>🔎 Reduce institutional inequality, fraud and market manipulation.</li><li>⚖️ Build <code>equality of opportunity</code> into monetary systems.</li><li>🌐 Establish true ownership for the digital age.</li></ul><p>The new era of money is championing the fundamental values of democracy to increase quality of everyday life for citizens around the globe — and you’re invited.</p><p>”Democracy provides an environment that respects human rights and fundamental freedoms, and in which the freely expressed will of people is exercised.” — United Nations.</p></div>'
      },
      {
        type: 'LEARN',
        notionId: '9920715e06094e39bf34a5a63891a909',
        title: 'Your Bitcoin Quest',
        content: '<div class="bloc1"><p>It’s time to simulate your first Bitcoin transaction and practice your freedom in the digital age.</p><p>Your transaction will include the following details:</p><p>📫 The wallet address of the person you’re sending to.</p><p>💰 The amount of Bitcoin to send.</p><p>It will also include a transaction fee given to the <code>miners</code>.</p><p>Remember to make sure all details are accurate.<br>Once a Bitcoin transaction is confirmed, you cannot reverse it.</p></div><div class="bloc2"><img src=\'/images/bitcoin-basics/your-bitcoin-quest-aad5de00.png\'></div>'
      },
      {
        type: 'QUEST',
        title: 'Bitcoin Basics Quest',
        component: 'BitcoinBasics'
      }
    ]
  },
  {
    badgeImageLink: '/images/ethereum-basics/badge-3baf577f.png',
    lessonImageLink: '/images/ethereum-basics/lesson-69c1f3d5.png',
    socialImageLink: '/images/ethereum-basics/social-307d7f60.jpg',
    learningActions: '',
    marketingDescription: 'What is Ethereum? Unlock the “new internet” and your digital freedom.',
    badgeId: 14,
    duration: 15,
    learnings: '',
    description: 'What is Ethereum? Unlock the “new internet” and your digital freedom.',
    name: 'Ethereum Basics',
    languages: [
      'fr'
    ],
    level: 'Essentials',
    lessonWriters: 'Tetranome',
    publicationStatus: 'publish',
    publicationDate: '2024-09-10',
    featuredOrderOnHomepage: 1,
    isCommentsEnabled: false,
    endOfLessonRedirect: null,
    notionId: '2a957f2be160403ebdd7c89a4f0fa01d',
    englishName: 'Ethereum Basics',
    slug: 'ethereum-basics',
    imageLinks: [
      '/images/ethereum-basics/ethereum-basics-b2e09ce5.png',
      '/images/ethereum-basics/a-global-town-square-fcb47024.svg',
      '/images/ethereum-basics/centralized-services-adf5be05.svg',
      '/images/ethereum-basics/one-sided-trades-8d68270f.svg',
      '/images/ethereum-basics/an-open-internet-31819e5b.svg',
      '/images/ethereum-basics/peer-to-peer-trades-f043c3c0.svg',
      '/images/ethereum-basics/ethereum-the-open-internet-ab794154.svg',
      '/images/ethereum-basics/a-global-banking-system-5a241dfc.svg',
      '/images/ethereum-basics/how-it-works-08c71cad.svg',
      '/images/ethereum-basics/joining-the-movement-44086b0b.png'
    ],
    keywords: [
      'apps',
      'app store',
      'cryptocurrency',
      'fiat',
      'centralized services',
      'intermediaries',
      'value-extractive',
      'peer',
      'intermediary',
      'peer-to-peer',
      'ethereum blockchain',
      'crypto wallet',
      'dapps',
      'decentralized',
      'dapp',
      'crypto',
      'onchain',
      'eth',
      'validator nodes',
      'ether',
      'centralized exchange',
      'value-extraction',
      'value-creation'
    ],
    slides: [
      {
        type: 'LEARN',
        notionId: '020b00dc30e4460583a7fe08be2bbd15',
        title: 'Ethereum Basics',
        content: '<div class="bloc1"><p>Welcome, Explorer, to one of the most important lessons at Bankless Academy.</p><p>Today we’re looking at Ethereum: the next era of the internet. It’s a revolutionary platform powering a world of new internet <code>apps</code> and digital currencies.</p><p>A simple way to think of Ethereum is like the Google or Apple <code>app store</code>, but with some key differences:</p><ul><li>💸 It uses <code>cryptocurrency</code> instead of <code>fiat</code> currency (the US dollar, the euro, or the Chinese yuan).</li><li>📡 It’s a layer added directly to your internet browser, unlocking new functionality on websites.</li><li>⚖️ The store rules are agreed on by users and app builders. There’s no central corporation in charge.</li></ul><p>To understand why millions of people are using Ethereum across the world, we need to look at its core mission…</p></div><div class="bloc2"><img src=\'/images/ethereum-basics/ethereum-basics-b2e09ce5.png\'></div>'
      },
      {
        type: 'LEARN',
        notionId: '4fc7e20ce1964eb59bcc420eabf565be',
        title: 'A Global Town Square',
        content: '<div class="bloc1"><p>Over the last forty years, the internet has become the world’s town square.</p><p>Here, total strangers connect, exchange ideas, goods and services, and even ignite global movements together. It\'s humanity\'s most powerful intersection of connection, creativity, and innovation.</p><p><strong>But it has one big problem…</strong></p></div><div class="bloc2"><img src=\'/images/ethereum-basics/a-global-town-square-fcb47024.svg\'></div>'
      },
      {
        type: 'LEARN',
        notionId: '9dc478de7dd64901a3c0b38cf67f500b',
        title: 'Centralized Services',
        content: '<div class="bloc1"><p><strong>The internet relies on a small group of corporations that don’t always have our best interests at heart.</strong></p><p><code>Centralized services</code> have more control over the internet than ever before, acting as <code>intermediaries</code> for almost everything you do online.</p><p>Think of how big banks manage your purchases, Facebook and Instagram connect your social interactions, and Apple or Google control the apps you can have on your phone. Through their rules, fees, and corporate motives, they have an incredible influence over your digital exchanges.</p></div><div class="bloc2"><img src=\'/images/ethereum-basics/centralized-services-adf5be05.svg\'></div>'
      },
      {
        type: 'LEARN',
        notionId: 'e4260ebbeda44a4596fb1d1d73e3375b',
        title: 'One-sided Trades',
        content: '<div class="bloc1"><p>We call them <code>centralized services</code> because all the power is in one place. It’s often like being stuck under the rule of a king who knows exactly how to get what he wants from you. You might be surprised at the reality of your trades…</p><p>💸 Banks charge you fees and invest your money for their own profit.</p><p>💳 Payment networks, like Visa & Mastercard, sell your purchase data to advertisers.</p><p>📞 Social platforms, like Instagram, can view your private conversations.</p><p>🪓 Content platforms, like YouTube, can freely delete creators’ entire careers — with no fair trial.</p><p>These shady rules and fees are often hidden away in the ‘Terms & Conditions’, and tend to get worse over time. Take a closer look at your favorite service agreements here: <a href=\'https://tosdr.org/\'>https://tosdr.org/</a> 👀</p></div><div class="bloc2"><img src=\'/images/ethereum-basics/one-sided-trades-8d68270f.svg\'></div>'
      },
      {
        type: 'QUIZ',
        notionId: 'f01c3458feb644e1a4850a233dd9e4ab',
        title: '✅ Knowledge Check',
        quiz: {
          question: 'True or False: Centralized services have unnecessary control over your online activity.',
          rightAnswerNumber: 1,
          answers: [
            'True',
            'False'
          ],
          feedback: [
            'Correct!',
            'Try again.'
          ],
          id: 'ethereum-basics-1'
        }
      },
      {
        type: 'LEARN',
        notionId: '4f1d06ddc7e34a839ce93eb065df9da9',
        title: 'An Open Internet',
        content: '<div class="bloc1"><p>😤 <strong>Had enough of platforms that don’t respect your needs?</strong></p><hr><p>This is the <code>value-extractive</code> internet we’ve become used to.</p><p>Called “walled gardens” for how restrictive these services are and how difficult they make it to leave, finding better alternatives can be time consuming and expensive. It often feels easier to just put up with the high fees, lack of transparency, and one-sided trades.</p><p>We need a fairer, more reliable internet, beyond intermediaries and their walled gardens. We need an online space where power is held by the user — the way the internet was initially built to be.</p></div><div class="bloc2"><img src=\'/images/ethereum-basics/an-open-internet-31819e5b.svg\'></div>'
      },
      {
        type: 'LEARN',
        notionId: '1016c615bacc4cc6aa8b3e13746db366',
        title: 'Peer-to-Peer Trades',
        content: '<div class="bloc1"><p>The solution starts with changing how the internet is connected.</p><p>In traditional internet services, information or money from one <code>peer</code> goes through an <code>intermediary</code> checkpoint before arriving at its destination. Theoretically, these intermediaries can do whatever they want before the trade is complete.</p><p><strong>Peer → Intermediary → Peer</strong></p><p>But there’s a second model of computer interaction, called <code>peer-to-peer</code> networking. It replaces intermediary services with automated, transparent processes, using computer code.</p><p><strong>Peer → Automation → Peer</strong></p><p>It’s like replacing your intermediary with a self-service kiosk. Here, nobody is above the rules; “Code, not kings.” Services become more predictable, fees go down, and users regain control over their interactions.</p><p>As we’ll see, a peer-to-peer internet changes everything.</p></div><div class="bloc2"><img src=\'/images/ethereum-basics/peer-to-peer-trades-f043c3c0.svg\'></div>'
      },
      {
        type: 'QUIZ',
        notionId: '7d1e5e16e9c04f44a60d705eb6ad7701',
        title: '✅ Knowledge Check',
        quiz: {
          question: 'How can automation improve your online experiences?',
          rightAnswerNumber: 2,
          answers: [
            'By increasing the reach of intermediaries.',
            'By giving participants more control.'
          ],
          feedback: [
            'Try again.',
            'Correct!'
          ],
          id: 'ethereum-basics-2'
        }
      },
      {
        type: 'LEARN',
        notionId: '8c42e105a4224552bd29aa64c2842047',
        title: 'Ethereum: The Open Internet',
        content: '<div class="bloc1"><p>⚖️ <strong>Wouldn’t the internet be a better place if the same rules applied to everyone?</strong></p><hr><p>Think of Ethereum as a digital city, where everything—from businesses to public services—is run by self-service, transparent systems. There are no intermediaries. With public-facing programming, users can easily review their trade terms and even inspect how the system works.</p><p>Transactions in the city are noted on a public record called the <code>Ethereum blockchain</code>. The blockchain tracks and stores digital property in the city, removing the need for another classic intermediary — the bank!</p><p>Even the city’s governance process is automated. Any changes to a system’s rules are agreed on by users and builders. A small tax on each transaction goes towards maintaining the city.</p><p>On Ethereum, democratic code has replaced kings. Nobody is above the rules.</p></div><div class="bloc2"><img src=\'/images/ethereum-basics/ethereum-the-open-internet-ab794154.svg\'></div>'
      },
      {
        type: 'LEARN',
        notionId: '1b86dffae9cc4577929e0107a0a2f30b',
        title: 'The Decentralized Economy',
        content: '<div class="bloc1"><p>To access Ethereum you’ll use your computer or mobile device’s web browser. With just one account you can log into the entirety of this new internet — a single login called a <code>crypto wallet</code>. This universal account makes it easier to change services and escape “walled gardens”.</p><p>When you enable the Ethereum app layer, you can access new websites known as <code>dApps</code>. These are the self-service systems we mentioned earlier. dApps offer digital goods and services like:</p><ul><li>🤝 sending or trading currencies, stocks and other digital goods, but with <strong>low fees and 24/7 service</strong>.</li><li>📻 connection with your favorite creators, but you can <strong>unlock unique perks and opportunities</strong> while ensuring your money goes directly to the artist.</li><li>👪 social media, but if you dislike the platform you can <strong>easily transfer your social circle</strong> to a new one.</li><li>🗳️ donating to your favorite projects, but even a $1 donation receives <strong>a large matching bonus, meaning greater impact</strong>.</li><li>⚙️ renting out your computer’s processing power for <strong>passive income</strong>.</li></ul><p>By removing intermediaries, banks, and individual accounts for each service, Ethereum has made its economy <code>decentralized</code> (this is the “d” in “dApp”). dApps get better and better as they compete on quality — not unclear business practices and control.</p></div>'
      },
      {
        type: 'LEARN',
        notionId: 'b148c5eff8a24e6fbe27c9423305c698',
        title: 'Using a dApp',
        content: '<div class="bloc1"><p>Using a <code>dApp</code> is similar to using regular apps and internet services.</p><p>Let’s simulate using a dApp for swapping <code>crypto</code> online. In this simulation we’ll swap USDC, an <code>onchain</code> US dollar, for <code>ETH</code>, Ethereum’s native currency.</p><ol><li>Connect your <code>crypto wallet</code> to the dApp’s website.</li><li>Confirm that you want to allow this dApp to interact with your Ethereum wallet.</li><li>Swap all of your USDC to ETH by clicking “Maximum”.</li><li>Initiate the swap.</li><li>In your wallet, check the terms of your trade, and then sign.</li><li>Great! Ethereum has processed your crypto swap!</li></ol><p>Plugging your wallet into a dApp and swapping crypto is that easy. Now you can send it to friends, use it to make purchases, or try other financial service dApps.</p></div><div class="bloc2"><iframe allowfullscreen class=\'animation\' src=\'https://app.banklessacademy.com/animation/swap\'></iframe></div>'
      },
      {
        type: 'QUIZ',
        notionId: 'e06f37809a984334a46b55126b01e060',
        title: '✅ Knowledge Check',
        quiz: {
          question: 'On Ethereum, services get better and better because…',
          rightAnswerNumber: 3,
          answers: [
            'Business practices are more transparent.',
            'You can easily change service providers.',
            'Both of the above.'
          ],
          feedback: [
            'Try again.',
            'Try again.',
            'Correct!'
          ],
          id: 'ethereum-basics-3'
        }
      },
      {
        type: 'LEARN',
        notionId: '8b317a82a13047f0972d6d6ed44e347c',
        title: 'A Global Banking System',
        content: '<div class="bloc1"><p>⌛ <strong>Do you want a faster, cheaper way to transfer money internationally?</strong></p><hr><p>Ethereum makes it possible for you to send and store <code>crypto</code> without intermediaries, with better services at lower costs.</p><p>⚡ With crypto, you can send money anywhere in the world for as little as one cent — and it only takes a few seconds! Compare this to sending money through a bank, where they can charge you 3-4% in fees, and take 1-5 days.</p><p>🔐 You’re the only person with access to your Ethereum account. There’s no intermediary loaning out your savings or controlling what you do with your money. Funds are stored in your personal <code>crypto wallet</code> — the same one you used to connect to a dApp earlier.</p><p>On Ethereum, you’re your own bank, and you feel like it!</p></div><div class="bloc2"><img src=\'/images/ethereum-basics/a-global-banking-system-5a241dfc.svg\'></div>'
      },
      {
        type: 'LEARN',
        notionId: 'befa989e445846e0bd0ac488740154fb',
        title: 'Sending a Payment',
        content: '<div class="bloc1"><p>Let’s use another simulation to practice sending cryptocurrency. Try sending your 0.015 <code>ETH</code> to the Bankless Academy <code>crypto wallet</code>.</p><ol><li>Unlock your wallet.</li><li>Inside of your wallet, select send.</li><li>Adjust the amount to 0.015 ETH by clicking “Maximum”.</li><li>Confirm the currency and amount.</li><li>In contacts, select banklessacademy.eth.</li><li>That’s it! Your international transfer was done in seconds, and no intermediary could stop you.</li></ol><p>With Ethereum wallets, you can own and send more than just cryptocurrency. Transferable assets include any digital property that can be stored <code>onchain</code>. Digital art, club memberships, show tickets, stocks, website address ownership, and even real-world property rights have made their way onto Ethereum.</p></div><div class="bloc2"><iframe allowfullscreen class=\'animation\' src=\'https://app.banklessacademy.com/animation/send\'></iframe></div>'
      },
      {
        type: 'QUIZ',
        notionId: '7e8729f592ad4836a1d7c1fd5b6f560d',
        title: '✅ Knowledge Check',
        quiz: {
          question: 'True or False: On Ethereum, you can be your own bank.',
          rightAnswerNumber: 1,
          answers: [
            'True',
            'False'
          ],
          feedback: [
            'Correct. On Ethereum you can go “Bankless”! Lower fees, more control over your money.',
            'Try again.'
          ],
          id: 'ethereum-basics-4'
        }
      },
      {
        type: 'LEARN',
        notionId: '260be70be7dd44c7ae2edbe322a33aae',
        title: 'How it Works',
        content: '<div class="bloc1"><p>Let’s bring everything together by taking a quick look at how Ethereum makes it all possible.</p><p>As a <code>peer-to-peer</code> network, Ethereum is made up of tens of thousands of computers spread across the world. These devices, known as <code>validator nodes</code>, have been volunteered by their owners to help run the network. Using automated software, a validator will process transactions and verify the results of others to prevent fraud. In doing so, the validator generates <code>ether</code> rewards for its owner.</p></div><div class="bloc2"><img src=\'/images/ethereum-basics/how-it-works-08c71cad.svg\'></div>'
      },
      {
        type: 'LEARN',
        notionId: 'c112d4f50c8c488f88950a3e732f6148',
        title: 'How it Works (Pt. II)',
        content: '<div class="bloc1"><p>The transaction you submitted earlier was processed by these Ethereum network <code>validator nodes</code>.</p><ol><li>Your ETH transaction was submitted to the Ethereum Network.</li><li>A validator checked your transaction for errors. Other validators double-checked their results.</li><li>Your transaction was added to the network’s public ledger, the <code>Ethereum blockchain</code>.</li><li>We received your transferred ETH in our account.</li></ol><p>You might be wondering why these validators don’t just run off with your funds. The short answer is because Ethereum makes this virtually impossible. Your upcoming lesson, “Blockchain Basics”, will help you understand more.</p></div><div class="bloc2"><iframe allowfullscreen class=\'animation\' src=\'https://app.banklessacademy.com/animation/ethereum\'></iframe></div>'
      },
      {
        type: 'LEARN',
        notionId: 'e7766b4ed5d94c05962984e11ad62bc1',
        title: 'Common Questions',
        content: '<div class="bloc1"><details><summary>How was Ethereum created?,m,e70a5a72-9432-4033-896c-2ee3137dc68a</summary>Ethereum launched in 2015. Initially managed by the Ethereum Foundation, it is now steered by a global community through <code>decentralized</code> governance. This distribution of power strengthens the network’s founding vision of an open internet.</details><details><summary>Is Ethereum safe?</summary>Your digital property on Ethereum can\'t be stolen directly. However, scammers can trick you into giving them access to your assets. Our “Web3 Security” lesson will teach you the basics of staying safe and avoiding simple mistakes that can cost you money.</details><details><summary>Is Ethereum widely used?,m,bb1ea7ca-85b1-4308-930b-b047f723f9f8</summary>Yes. Today, Ethereum\'s legality and adoption are so strong that <a href=\'https://www.forbes.com/sites/lawrencewintermeyer/2024/07/25/ethereum-on-the-brink-of-market-transformation-as-etfs-get-green-light/\'>big businesses are investing in it</a>. Businesses, such as <a href=\'https://www.bankless.com/sony-introduces-soneium-its-ethereum-l2-network\'>Sony</a> and <a href=\'https://caribbean.visa.com/about-visa/newsroom/press-releases/visa-network-to-settle-transactions-in-usd-coin-usdc.html\'>Visa</a>, are even building on it.</details><details><summary>Is Ethereum used for criminal activity?</summary><a href=\'https://www.chainalysis.com/blog/2023-crypto-crime-report-introduction/\'>Research performed by Chainalysis</a> shows that around 0.24% of cryptocurrency transactions were used for criminal activity in 2022. This is far below the <a href=\'https://www.forbes.com/sites/haileylennon/2021/01/19/the-false-narrative-of-bitcoins-role-in-illicit-activity/\'>estimated 2-5% of global GDP</a> suspected to be involved in criminal activity. Ethereum’s high transparency also makes it easy for investigators to track and prosecute criminals acting <code>onchain</code>.</details><details><summary>Is Ethereum energy efficient?</summary>As Ethereum’s daily usage grew the community identified a growing environmental impact. A major network upgrade, called \'The Merge\', <a href=\'https://www.newscientist.com/article/2369304-cryptocurrency-ethereum-has-slashed-its-energy-use-by-99-99-per-cent/\'>reduced Ethereum\'s energy consumption by 99.9%</a>. This achievement showcases Ethereum\'s adaptability to the needs of its users!</details><details><summary>How can I invest in Ethereum?</summary>To invest in Ethereum, you’ll want to own <code>ETH</code>, the network’s native cryptocurrency. ETH can be bought through your <code>crypto wallet</code> — we’ll be helping you create yours in the next lesson. You can also buy ETH on a <code>centralized exchange</code> like Coinbase or Binance, but you won’t be able to use it on Ethereum until you transfer it to a wallet.</details></div>'
      },
      {
        type: 'LEARN',
        notionId: '04662fd3b840472ab6c20aec0dab7a12',
        title: 'Joining the Movement',
        content: '<div class="bloc1"><p>💪 <strong>It’s time to take control of your digital life.</strong></p><hr><p>Ethereum is eroding the walls that intermediaries have put up around their corners of the internet, transforming an economy of <code>value-extraction</code> into one of <code>value-creation</code>. It’s time for powerful yet fair online services, true ownership over your digital assets, bold new communities, transformative work opportunities, and more.</p><p>Ready to make your mark?</p><p>To start your journey you’ll need to create your <code>crypto wallet</code>. This is your passport to the world of Ethereum. We’ll set up yours in your next lesson, “Wallet Basics”.</p></div><div class="bloc2"><img src=\'/images/ethereum-basics/joining-the-movement-44086b0b.png\'></div>'
      },
      {
        type: 'POLL',
        notionId: '9fffc9eec113419cab34b9919fa9a5cc',
        title: '📊 Poll',
        quiz: {
          question: 'How do you imagine yourself using Ethereum? (Check all that apply)',
          answers: [
            'Exploring new digital goods and services.',
            'Sending money internationally.',
            'Investing in Ethereum projects.',
            'Connecting with the artists I love.',
            'Contributing to powerful community projects.',
            'Building innovative dApps.'
          ],
          id: 'ethereum-basics-5'
        }
      }
    ]
  },
  {
    badgeImageLink: null,
    lessonImageLink: '/images/creating-a-crypto-wallet/lesson-6b7566f5.png',
    socialImageLink: '/images/creating-a-crypto-wallet/social-45c701eb.png',
    learningActions: '',
    marketingDescription: 'Set up your first crypto wallet with our step-by-step walkthrough.',
    badgeId: null,
    collectibleId: 'H008',
    duration: 5,
    learnings: '',
    description: 'Set up your first crypto wallet with our step-by-step walkthrough.',
    name: 'Creating a Crypto Wallet',
    languages: [
      'br',
      'cn',
      'es',
      'fr',
      'it',
      'tr',
      'ua'
    ],
    level: 'Essentials',
    lessonWriters: 'Tetranome',
    publicationStatus: 'publish',
    publicationDate: '2024-03-20',
    featuredOrderOnHomepage: null,
    isCommentsEnabled: false,
    endOfLessonRedirect: null,
    mirrorLink: 'https://mirror.xyz/banklessacademy.eth/Mznhl0ZMjw-5KdjB2o8GJ9ylRPLN-Loeihfevk7J6gU',
    mirrorNFTAddress: '0x8C21eABd632B41f840690C56D9dda70C9FD6E55e',
    areMirrorNFTAllCollected: false,
    sponsorName: 'Zerion',
    sponsorLogo: '/images/creating-a-crypto-wallet/sponsor-f64ba262.png',
    isArticle: true,
    notionId: '5f63090deb2b4800b699442a04e08314',
    englishName: 'Creating a Crypto Wallet',
    slug: 'creating-a-crypto-wallet',
    articleContent: 'This is a summary of our [Wallet Basics](https://app.banklessacademy.com/lessons/wallet-basics) lesson, along with a walkthrough for the quest. Check out [the full lesson](https://app.banklessacademy.com/lessons/wallet-basics) to **level up your knowledge and claim your badge!**\n\n\n---\n\n## Key Takeaways\n\n> * You’ll need a `crypto wallet` to access the world of blockchains!\n>\n> * A wallet is like a `blockchain` account.\n>\n> * Wallets are used to store `cryptocurrency`, log into blockchain apps, and more.\n>\n> * These wallets work on both computers and phones.\n>\n> * Creating a wallet is easy and takes around 5 minutes. We’ll show you how, in our video below!\n\n## What is a Crypto Wallet?\n\nCrypto wallets are an essential piece of web3 equipment, allowing you to use `cryptocurrency` on your computer or phone. Wallets are accessed using software called a `wallet app` — a web browser extension for your computer, or an app on your phone.\n\nIt gets better. Wallets are more than accounts for holding cryptocurrency — they’re our connection to the blockchain. We can use them to exchange cryptocurrency with others, log into blockchain applications, **and even collect digital items like Bankless Academy badges.** The more we explore, the more our wallets become — with some viewing them as the beginning of digital identity.\n\nWallets come with two core pieces of account information:\n\n* A `public key`, that you can think of as your *username*. You’ll share it publicly to receive cryptocurrency.\n\n* A `private key`, acting as your *password*. This should always be kept private, and cannot be changed.\n\nProtecting your private key is critical because this key grants instant access to your wallet. You should never share your private key. You can learn more by taking [the full lesson](https://app.banklessacademy.com/lessons/wallet-basics).\n\nToday we will set up our first wallet, using our recommended crypto wallet: Zerion!\n\n## Walkthrough\n\nSet up your first wallet on your computer, using the walkthrough below, or keep scrolling for our phone wallet walkthrough.\n\n### Computer Wallet\n\n[youtube-embed](https://www.youtube-nocookie.com/embed/czL_qQ39AH0)\n\n### Phone Wallet\n\n[youtube-embed](https://www.youtube-nocookie.com/embed/SFbo9QsO2t4)\n\n\n---\n\n**It’s time to join the blockchain multiverse!**\n\nDon’t forget to collect this handbook entry for easy reference on your travels, and to support Bankless Academy.\n\nSafe travels, Explorer!\n\n\n---\n\n## FAQ\n\n### What is a cryptocurrency?\n\nCryptocurrencies are a form of digital money, secured by `cryptography`. These currencies can run without the need for centralized authorities and banks, reducing possibility for fraud while increasing the financial freedom of the holder.\n\nLearn more about cryptocurrency through our **[Bitcoin Basics](https://app.banklessacademy.com/lessons/bitcoin-basics)** lesson, and see how these digital currencies are revolutionizing the financial world!\n\n### What are public and private keys?\n\nPublic/private key `encryption` allows your wallet to make some information public, like the address where others can send cryptocurrency to you, while keeping access to your cryptocurrency private. One key is like your cryptocurrency’s house address, and the other unlocks the front door.\n\nYou can share your public key with anyone you trust to send you cryptocurrency, but your private key is for your eyes only — because it grants access to all assets inside the wallet. Never share it, even if your contact claims to be from Bankless Academy or Zerion.\n\nLearn more and get rewarded for creating your first wallet, in our [Wallet Basics](https://app.banklessacademy.com/lessons/wallet-basics) lesson.\n\n### What happens if I lose my recovery phrase?\n\nYour recovery phrase, also known as a “secret phrase” or “seed phrase”, is your only backup if you lose access to your wallet on your device. If you lose your recovery phrase, your wallet’s holdings will be lost forever. This is why it’s important to store it somewhere safe — from not only theft or loss, but fire or water damage too.\n\n### Can Ethereum wallets hold Bitcoin?\n\nEthereum wallets can hold Bitcoin, but in a “wrapped” form. If you want to hold original Bitcoin, you’ll have to create a wallet that runs on the Bitcoin network, like [Exodus](https://www.exodus.com/) or [Mycelium](https://wallet.mycelium.com/).\n\n\n---\n\n**Author**\n\n[Tetranome](https://twitter.com/Tetranome) is the Content & Design Lead at Bankless Academy, focusing on the learning journey, user interface & experience, and platform artwork.\n\n**Patron**\n\nThis walkthrough is powered by Zerion.',
    imageLinks: [],
    keywords: [
      'crypto wallet',
      'blockchain',
      'cryptocurrency',
      'wallet app',
      'public key',
      'private key',
      'cryptography',
      'encryption'
    ]
  },
  {
    badgeImageLink: '/images/wallet-basics/badge-d89b2df3.png',
    lessonImageLink: '/images/wallet-basics/lesson-5aa84b59.png',
    socialImageLink: '/images/wallet-basics/social-c3ee6a4c.jpg',
    learningActions: 'Create and manage your own wallet\nConnect your wallet to a web3 website',
    marketingDescription: 'A crypto wallet is essential gear for Web3 and DeFi. Get basic training on how a wallet works and how to get started.',
    badgeId: 1,
    duration: 15,
    learnings: '',
    difficulty: 'Easy',
    description: 'What is a crypto wallet? Learn more and create your “Ethereum account” today!',
    name: 'Wallet Basics',
    languages: [
      'br',
      'cn',
      'es',
      'fr',
      'it',
      'tr',
      'ua'
    ],
    level: 'Essentials',
    lessonWriters: 'Ap0ll0517, Jordy, Tetranome',
    quest: 'WalletBasics',
    publicationStatus: 'publish',
    publicationDate: '2024-03-20',
    featuredOrderOnHomepage: 2,
    isCommentsEnabled: false,
    endOfLessonRedirect: null,
    sponsorName: 'Zerion',
    sponsorLogo: '/images/wallet-basics/sponsor-5c941aef.png',
    notionId: 'c2e79569863a4f5bbfdc9e86be5ae64f',
    englishName: 'Wallet Basics',
    slug: 'wallet-basics',
    imageLinks: [
      '/images/wallet-basics/wallet-intro-b6d4487a.png',
      '/images/wallet-basics/wallet-definition-d2912914.svg',
      '/images/wallet-basics/is-creating-a-wallet-difficult-9bd9aab4.svg',
      '/images/wallet-basics/your-wallets-public-key-87828c3e.svg',
      '/images/wallet-basics/your-wallets-private-key-0d84ad39.svg',
      '/images/wallet-basics/recovery-phrase-c614c36c.svg',
      '/images/wallet-basics/types-of-wallet-094f0eb1.png',
      '/images/wallet-basics/custodial-wallets-4eede755.svg',
      '/images/wallet-basics/non-custodial-wallet-833c3d6b.svg',
      '/images/wallet-basics/hot-wallets-9356886d.svg',
      '/images/wallet-basics/cold-wallets-0e3183d1.svg',
      '/images/wallet-basics/wallet-security-3a185d90.png',
      '/images/wallet-basics/youre-ready-to-create-your-first-wallet-6d8136f2.svg'
    ],
    keywords: [
      'web2',
      'web3',
      'cryptocurrency',
      'blockchain apps',
      'blockchain',
      'wallet app',
      'public key',
      'private key',
      'wallet',
      'recovery phrase',
      'self-custody wallet',
      'custodial wallet',
      'hot wallet',
      'cold wallets',
      'hot wallets',
      'self-custody'
    ],
    slides: [
      {
        type: 'LEARN',
        notionId: '96133dee20584842a4b297d2946f6eae',
        title: 'Wallet Intro',
        content: '<div class="bloc1"><p><strong>Greetings Bankless Explorer!</strong></p><p>It’s time to dive deeper on your journey into the blockchain multiverse. Every Explorer in this space eventually needs to create a crypto wallet.</p><p>Wallets are kind of like the accounts from the <code>web2</code> internet that you’re used to. You’ll use a wallet to log into the blockchain ecosystem, also known as <code>web3</code>, where you’ll be able to use <code>cryptocurrency</code> and connect to <code>blockchain apps</code>!</p><p>In this lesson, we’ll introduce you to wallets, how they work, and how to keep your cryptocurrency secure. We’ll end with a guide on how to set one up and access<strong> the Ethereum blockchain — the home of Bankless Academy.</strong></p></div><div class="bloc2"><img src=\'/images/wallet-basics/wallet-intro-b6d4487a.png\'></div>'
      },
      {
        type: 'LEARN',
        notionId: 'f6b567bdfb59479cbacf047dbb1a9878',
        title: 'Wallet Definition',
        content: '<div class="bloc1"><p>What exactly is a crypto wallet?</p><p>The short definition is: an account on a <code>blockchain</code>, used to store digital assets and log into blockchain apps.</p><p>It’s like having your own personal safe on the internet, and you hold the only key for unlocking it. At the same time, this safe is similar to a regular website account. You can use it to make purchases, send or receive <code>cryptocurrency</code>, and interact with a blockchain.</p><p>However, unlike the <code>web2</code> accounts you’re used to, a single wallet can access an entire blockchain, and a large number of blockchain apps. It’s like having one account for the entire internet.</p></div><div class="bloc2"><img src=\'/images/wallet-basics/wallet-definition-d2912914.svg\'></div>'
      },
      {
        type: 'LEARN',
        notionId: '9e07253ff3334fb59f20fdda4a2e03c6',
        title: 'Is creating a wallet difficult?',
        content: '<div class="bloc1"><p>It used to be difficult, but these days anyone can create a wallet quite easily.</p><p>If you are comfortable with downloading and installing software on your computer (or apps on your phone), then you’ll have no trouble creating your first wallet.</p><p>The trickier part of managing a wallet involves keeping it secure — which we’ll dive into shortly!</p><p>Choosing your <code>wallet app</code> may also feel intimidating. This is the app that you will install on your device to access your wallet on the blockchain. We recommend starting with the Zerion wallet app: it’s user friendly and has access to many popular blockchains. As you get more comfortable in the <code>web3</code> space, you will likely explore other providers and create multiple wallets.</p></div><div class="bloc2"><img src=\'/images/wallet-basics/is-creating-a-wallet-difficult-9bd9aab4.svg\'></div>'
      },
      {
        type: 'QUIZ',
        notionId: 'c28d3aa7e8b34f7a944645eab08ba3ad',
        title: 'Knowledge Check',
        quiz: {
          question: 'What is a wallet?',
          rightAnswerNumber: 4,
          answers: [
            'A blockchain',
            'A cryptocurrency',
            'A digital collectible',
            'A blockchain account'
          ],
          feedback: [
            'ℹ️ Try again! Your wallet is hosted on a blockchain.',
            'ℹ️ Try again! Cryptocurrencies are something you hold in your wallet.',
            'ℹ️ Try again! Digital collectibles are something you hold in your wallet.',
            'ℹ️ Correct! Wallets are accounts used to interact with blockchains.'
          ],
          id: 'wallet-basics-1'
        }
      },
      {
        type: 'LEARN',
        notionId: 'fdd6285759b04ebbaf5d87ef05a02725',
        title: 'Wallets & Password Recovery',
        content: '<div class="bloc1"><p>Here is one of the most important things to understand about <code>web3</code> wallets:<strong><br>There are no “password resets” or “password changes”.</strong></p><p>Most of us are used to these features. If we forget a password, we click a button, do a few things, and get a new password. Easy.</p><p>Not so with crypto wallets. Because of how blockchains work, wallets are assigned an “address” and a complex “password” when they’re created — and you do not choose these.</p><p>This address and password combination are impossible to change, although you can always create a new wallet if you need to. Let’s learn a bit more about these special addresses and passwords, so that we can feel confident using them!</p></div>'
      },
      {
        type: 'LEARN',
        notionId: 'fc8b92080fd14c938e419ca401e15634',
        title: 'Your wallet’s public key',
        content: '<div class="bloc1"><p>A <code>public key</code> is basically your wallet’s address. Often, this looks like a random series of letters and numbers.</p><p>Example: <em>0xe1887fF140BfA9D3b45D0B2077b7471124acD242</em></p><p>It is possible to create easier to remember versions of this with some <code>web3</code> services, but that’s a lesson for another time.</p><p>You can also think of a public key like a house address. It is public, anyone can see it, and it tells others where they can send you crypto assets — without revealing anything personal about you.</p><p>It is perfectly safe to share your wallet’s <strong>public key</strong>.</p><p><strong>Note:</strong> A single wallet app can hold multiple public/<code>private key</code> pairs.</p></div><div class="bloc2"><img src=\'/images/wallet-basics/your-wallets-public-key-87828c3e.svg\'></div>'
      },
      {
        type: 'LEARN',
        notionId: '5f1d4d9b65f740c4af2dc65510c417ef',
        title: 'Your wallet’s private key',
        content: '<div class="bloc1"><p>If the public key is like a house address, then the <code>private key</code> is like the key to the front door. It’s the “password” to your funds and assets.</p><p>Example: <em>eceac283e04f121cbd40b69e16ab9dec0220df80bf092</em></p><p><strong>It’s never safe to share this key — you could lose your wallet and everything in it.</strong></p><p>Most people recommend that you do not even save it digitally. Whoever has access to a private key has access to whatever is in the <code>wallet</code>.</p><p>This is more than just a password. You cannot reset it if you lose access to it.</p><p>Luckily, most <code>blockchain apps</code> do not require you to type a long, complicated string of characters every time you need to send funds or sign a blockchain transaction. The private key usually operates quietly in the background.</p></div><div class="bloc2"><img src=\'/images/wallet-basics/your-wallets-private-key-0d84ad39.svg\'></div>'
      },
      {
        type: 'QUIZ',
        notionId: '28e8eeb6ea36443faba81c65d049e874',
        title: 'Knowledge Check',
        quiz: {
          question: 'Your public key is like your _____ and your private key is like your _____ .',
          rightAnswerNumber: 3,
          answers: [
            'Routing Number / Account Number',
            'Address / Zip code',
            'House address / House key',
            'Phone Number / Passport Number'
          ],
          feedback: [
            'ℹ️ Try again! Unlike a bank account number, your private key shouldn’t be shared with others.',
            'ℹ️ Try again! Unlike a zip code, your private key shouldn’t be shared with others.',
            'ℹ️ Correct! Your public key allows others to find you, while only your private key lets you in.',
            'ℹ️ Try again! These are examples of public & private information, but they’re unrelated.'
          ],
          id: 'wallet-basics-2'
        }
      },
      {
        type: 'LEARN',
        notionId: '7d74c06b71154434bc5f11673a26c5c6',
        title: 'Recovery Phrase',
        content: '<div class="bloc1"><p>When you set up a new wallet, your wallet app will provide you with a <code>recovery phrase</code>.</p><p>Also called a “seed phrase” or “secret phrase”, this string of words can be used to access your wallet and crypto assets if:</p><ul><li>Your <code>wallet app</code> or device fails unexpectedly or is damaged.</li><li>Your device has been lost or stolen.</li><li>You want to access your wallet on multiple devices.</li></ul><p>Most recovery phrases are a list of 12 to 24 words that represent a unique piece of data. This data is used to generate both the <code>public key</code> and <code>private key</code> for your wallet.</p><p>Wallet recovery does <strong>not </strong>change or reset the keys.</p><p>Your recovery phrase is essentially an easier to read version of your public/private key pair. <strong>Never share your recovery phrase.</strong></p></div><div class="bloc2"><img src=\'/images/wallet-basics/recovery-phrase-c614c36c.svg\'></div>'
      },
      {
        type: 'QUIZ',
        notionId: 'aca3c7b9435445d292815700f9b24e4c',
        title: 'Knowledge Check',
        quiz: {
          question: 'Can you access your wallet with a recovery phrase if your device gets damaged or lost?',
          rightAnswerNumber: 2,
          answers: [
            'No',
            'Yes'
          ],
          feedback: [
            'ℹ️ Try again!',
            'ℹ️ Correct! Recovery phrases grant access to your wallet, even on multiple devices.'
          ],
          id: 'wallet-basics-3'
        }
      },
      {
        type: 'LEARN',
        notionId: '4764dfa090134af4b6d237b6c2986ce1',
        title: 'Types of Wallet',
        content: '<div class="bloc1"><p>Just as there are many types of computer software, there many types of wallet. Let’s look at the four main categories:</p><ul><li>🏦 <strong>Custodial wallets:</strong> where a third party is responsible for your private keys.</li><li>👤<strong> Self-custody (non-custodial) wallets:</strong> where you are responsible for your private keys.</li></ul><p>There are two styles of <code>self-custody wallet</code>:</p><ul><li>🔥 <strong>Hot wallets:</strong> software on your desktop or phone.</li><li>🧊 <strong>Cold wallets:</strong> a piece of hardware (like a memory stick) you store somewhere safe.</li></ul><p>Each wallet solution serves a different use-case. Many advanced users have one of each!</p><p>Don’t worry, we’ll only be creating one wallet today.</p></div><div class="bloc2"><img src=\'/images/wallet-basics/types-of-wallet-094f0eb1.png\'></div>'
      },
      {
        type: 'LEARN',
        notionId: '15cb2a53c3ce4b2abb7d7b293accc50b',
        title: 'Custodial Wallets',
        content: '<div class="bloc1"><p>Since your <code>private key</code> unlocks access to your <code>wallet</code>, keeping it safe and secure is very important!</p><p><code>Custodial wallet</code> services include cryptocurrency exchanges such as Coinbase and Kraken. <strong>They are your wallet custodian</strong> — they look after your private keys for you. You access their services like any other website (with an email login and resettable password).</p><p>This may be all some people need, but it requires you to trust these third parties to secure your crypto assets and give you access when you want to trade them or send them somewhere. Also, your access to some <code>blockchain apps</code> may be limited.</p></div><div class="bloc2"><img src=\'/images/wallet-basics/custodial-wallets-4eede755.svg\'></div>'
      },
      {
        type: 'QUIZ',
        notionId: 'e8953595b16e4482a4ad5e76b4421dd5',
        title: 'Knowledge Check',
        quiz: {
          question: 'Do you control your private key with a custodial wallet?',
          rightAnswerNumber: 2,
          answers: [
            'Yes',
            'No'
          ],
          feedback: [
            'ℹ️ Try again!',
            'ℹ️ Correct! Custodial wallets require trust in a third party (custodian) to control your private keys.'
          ],
          id: 'wallet-basics-4'
        }
      },
      {
        type: 'LEARN',
        notionId: '6ea36d21aff4480d806b93acba0677bf',
        title: 'Non-custodial Wallet',
        content: '<div class="bloc1"><p>A <code>self-custody wallet</code> (like Zerion or Trezor) is when you fully control your <code>private key</code>. You have <strong>no custodian</strong>, and you alone are responsible for keeping your private key safe.</p><p>These wallets offer the widest range of access and freedom within the world of <code>web3</code>. You never have to worry about a third party freezing or mishandling your funds.</p><p>The trade-off is in risk: if you lose access to your <code>recovery phrase</code>, or your private key is compromised, there is often very little you can do to restore access to the wallet.</p><p>Whichever route you choose, it pays to be familiar and comfortable with wallet security. We’ll give you some tips before you complete this lesson.</p></div><div class="bloc2"><img src=\'/images/wallet-basics/non-custodial-wallet-833c3d6b.svg\'></div>'
      },
      {
        type: 'QUIZ',
        notionId: 'a87cd8104504449e8fe7859b7a55853e',
        title: 'Knowledge Check',
        quiz: {
          question: 'Are you responsible for your private key with a self-custody wallet?',
          rightAnswerNumber: 1,
          answers: [
            'Yes',
            'No'
          ],
          feedback: [
            'ℹ️ Correct! With a self-custody wallet you are solely responsible for your private keys.',
            'ℹ️ Try again!'
          ],
          id: 'wallet-basics-5'
        }
      },
      {
        type: 'LEARN',
        notionId: '146c8f827b874b029a48a1155331b552',
        title: 'Hot Wallets',
        content: '<div class="bloc1"><p>You will hear the terms “hot” and “cold wallet” quite a bit in <code>web3</code>.</p><p>A <code>hot wallet</code> is a wallet accessed via an app on your device — the Zerion app for example. Similar to many <code>web2</code> apps, a wallet app is consistently connected to the internet.</p><p>Your <code>private key</code> is encrypted and stored inside the wallet app, and is only accessed when you interact with the blockchain. These wallets are named ‘hot wallets’ for this “hot” connection between the internet and your private key.</p><p>Hot wallets are convenient for small day-to-day interactions, much like a physical wallet you keep in your pocket. We’ll be creating a hot wallet today!</p></div><div class="bloc2"><img src=\'/images/wallet-basics/hot-wallets-9356886d.svg\'></div>'
      },
      {
        type: 'LEARN',
        notionId: '29050c8f640248eb84149dd09b119301',
        title: 'Cold Wallets',
        content: '<div class="bloc1"><p>As you dive deeper into your <code>web3</code> journey, you will come to know a landscape full of interesting tech trade-offs.</p><p><code>Cold wallets</code> grant higher security at the cost of convenience. A cold wallet is one where your <code>private key</code> is stored on a dedicated hardware device (like a memory stick or external hard drive). You must physically connect the hardware wallet to your computer to access your wallet on the blockchain. Your private key is never directly connected to the internet. Cold wallets are named after this “cold” internet connection.</p><p>They are widely considered to be more secure than <code>hot wallets</code>, because your <code>private key</code> is stored offline — out of reach of digital attackers.</p><p>Ledger and Trezor are examples of <code>cold wallets</code>.</p></div><div class="bloc2"><img src=\'/images/wallet-basics/cold-wallets-0e3183d1.svg\'></div>'
      },
      {
        type: 'QUIZ',
        notionId: 'd969a34bf65647b492f20ef28c97f22d',
        title: 'Knowledge Check',
        quiz: {
          question: 'Which of the following wallet types is considered the most secure?',
          rightAnswerNumber: 4,
          answers: [
            'All wallets are about the same',
            'A hot wallet',
            'A custodial wallet',
            'A cold wallet'
          ],
          feedback: [
            'ℹ️ Try again! There are various trade-offs for each wallet type, with level of security being one of them.',
            'ℹ️ Try again! A hot wallet has an active internet connection which makes it more susceptible to digital attack.',
            'ℹ️ Try again! The third party holding the private keys can get hacked or go bankrupt.',
            'ℹ️ Correct! Cold wallets aren’t actively connected to the internet, making them more attack-resistant.'
          ],
          id: 'wallet-basics-6'
        }
      },
      {
        type: 'LEARN',
        notionId: 'c4161519db714ac4871c66ba56549c25',
        title: 'Wallet Security',
        content: '<div class="bloc1"><p>Regardless if your <code>self-custody wallet</code> is hot or cold, there are many smart security practices you should develop.</p><p>🖊️ Record your <code>recovery phrase</code> on a physical, durable material (such as laminated paper, or even steel) and store it somewhere very safe. Never share it or your <code>private key</code> with anyone. <strong>Remember, this is more than just a password.</strong></p><p>🔍 When interacting with a blockchain or sending funds, even small amounts, double check the details very carefully. Incorrect details cannot be changed after an interaction.</p><p>🔭 Spend time researching and gathering info on any <code>blockchain apps</code> you plan to interact with before connecting your wallet to it or signing its transactions.</p><p>💰 Use wallets with low amounts of funds to try new things and explore web3, and consider storing high value assets across multiple wallet accounts (i.e. avoid putting all your crypto eggs in one basket).</p></div><div class="bloc2"><img src=\'/images/wallet-basics/wallet-security-3a185d90.png\'></div>'
      },
      {
        type: 'QUIZ',
        notionId: '4074ea94f6f647379d6981bae7969b68',
        title: 'Knowledge Check',
        quiz: {
          question: 'What is the safest way to protect your recovery phrase?',
          rightAnswerNumber: 1,
          answers: [
            'Write it on a durable material and store it in a safe place.',
            'Save it on your computer and print it out.',
            'Take a screenshot and save it on your phone.',
            'Save it in your password manager.'
          ],
          feedback: [
            'ℹ️ Correct! A safely stored physical backup with no digital traces is the safest storage option.',
            'ℹ️ Try again! If your computer is hacked, your recovery phrase could be found. Printing also opens many attack opportunities.',
            'ℹ️ Try again! If your phone is hacked, you could lose all assets in your wallet.',
            'ℹ️ Try again! If your password manager is hacked, your recovery phrase could be leaked.'
          ],
          id: 'wallet-basics-7'
        }
      },
      {
        type: 'LEARN',
        notionId: '0e8457196b6a40578ba16a783590dab6',
        title: 'You’re ready to create your first wallet!',
        content: '<div class="bloc1"><p>In fact, you’ll need one if you want to claim proof of completing this quest!</p><p>There are several <code>self-custody</code>, <code>hot wallet</code> apps available today. We will explore the Zerion wallet for the rest of this lesson as:</p><ul><li>⚙️ It’s compatible with most <code>blockchain apps</code>.</li><li>⚡ The interface is incredibly smooth and easy to use.</li><li>💻 It has a browser extension for Chrome, Brave, Edge, and Opera internet browsers.</li><li>📱 It is also available as a mobile app for Android and iOS users.</li><li>🗣️ Zerion supports a variety of languages.</li></ul><p>The end of the lesson is right around the corner, where we will share your instructions for setting up your wallet with Zerion!</p></div><div class="bloc2"><img src=\'/images/wallet-basics/youre-ready-to-create-your-first-wallet-6d8136f2.svg\'></div>'
      },
      {
        type: 'QUIZ',
        notionId: '087e6162d56d4d06a72d0449b15abd7d',
        title: 'Knowledge Check',
        quiz: {
          question: 'Is Zerion a custodial wallet app?',
          rightAnswerNumber: 2,
          answers: [
            'Yes',
            'No'
          ],
          feedback: [
            'ℹ️ Try again! Your Zerion wallet isn’t controlled by a custodian.',
            'ℹ️ Correct! Zerion wallets are self-custody wallets — controlled by you, and you alone.'
          ],
          id: 'wallet-basics-8'
        }
      },
      {
        type: 'QUEST',
        title: 'Wallet Basics Quest',
        component: 'WalletBasics'
      }
    ]
  },
  {
    badgeImageLink: '/images/blockchain-basics/badge-e715f0fc.png',
    lessonImageLink: '/images/blockchain-basics/lesson-1c75f4be.png',
    socialImageLink: '/images/blockchain-basics/social-21c13a4a.jpg',
    learningActions: '',
    marketingDescription: 'Blockchains make cryptocurrency, DeFi, and Web3 possible. Discover how blockchain networks are built and how they work.',
    badgeId: 3,
    duration: 15,
    learnings: '',
    difficulty: 'Easy',
    description: 'Learn about the fundamental architecture of blockchain technology.',
    name: 'Blockchain Basics',
    languages: [
      'de',
      'es',
      'fr'
    ],
    level: 'Essentials',
    lessonWriters: 'iSpeakNerd',
    quest: 'BlockchainBasics',
    publicationStatus: 'publish',
    publicationDate: '2022-06-30',
    featuredOrderOnHomepage: null,
    isCommentsEnabled: false,
    endOfLessonRedirect: null,
    notionId: '1887f283a1b846008bcbd7fa1736bf49',
    englishName: 'Blockchain Basics',
    slug: 'blockchain-basics',
    imageLinks: [
      '/images/blockchain-basics/introduction-1e34f31e.svg',
      '/images/blockchain-basics/blockchain-structure-1c9a9ed4.svg',
      '/images/blockchain-basics/examining-the-ledger-838ca24f.svg',
      '/images/blockchain-basics/transactions-on-the-ledger-6b86493d.svg',
      '/images/blockchain-basics/block-anatomy-5c22845b.svg',
      '/images/blockchain-basics/inside-a-block-b0c2dd11.svg',
      '/images/blockchain-basics/individual-transactions-de83e15c.svg',
      '/images/blockchain-basics/user-addresses-57e130d9.svg'
    ],
    keywords: [
      'blockchain',
      'ledger',
      'block explorer',
      'blocks',
      'transactions',
      'addresses',
      'public',
      'address',
      'node',
      'decentralized',
      'block hash',
      'block',
      'digital signature',
      'smart contracts',
      'transaction hash',
      'private key',
      'public key'
    ],
    slides: [
      {
        type: 'LEARN',
        notionId: '1e3f909f907141c1af09d29e910fdbdf',
        title: 'Introduction',
        content: '<div class="bloc1"><p><code>Blockchain</code> technology is a revolutionary way of storing and tracking data, while also making that data accessible to anyone. It is a way of organizing data in a single public list of all historical transactions that anyone can view but cannot edit. This public list of transactions is collectively known as the blockchain <code>ledger</code>.</p><p>After examining the layers of a blockchain, we will be using a blockchain tool called a <code>block explorer</code> to look into the specifics of the Ethereum blockchain structure; we will zoom in on the Ethereum blockchain to view the <strong>list</strong> of blocks, the <strong>transactions</strong> within those blocks, and the <strong>details</strong> of each individual transaction.</p></div><div class="bloc2"><img src=\'/images/blockchain-basics/introduction-1e34f31e.svg\'></div>'
      },
      {
        type: 'LEARN',
        notionId: '6b25ee1411ef46c49ef878c5953ae079',
        title: 'Blockchain Structure',
        content: '<div class="bloc1"><p>The term blockchain can be used as a noun — the Bitcoin blockchain — or as an adjective — blockchain technology. Either way, <code>blockchain</code> refers to the entire structure cryptocurrencies are built on.</p><p>Zooming in from the outside, there are 3 levels of structure in a blockchain:</p><ol><li>The overall <code>blockchain</code> is made up of blocks that are linked together in order</li><li><code>Blocks</code> are made up of groups of transactions put together </li><li><code>Transactions</code> are amounts of money sent between two <code>addresses</code> on the network</li></ol><p>This three-tiered structure comes together to create a cryptographic ledger - an unalterable history of all transactions performed on the network.</p></div><div class="bloc2"><img src=\'/images/blockchain-basics/blockchain-structure-1c9a9ed4.svg\'></div>'
      },
      {
        type: 'QUIZ',
        notionId: 'dea57bbfc2494226b459d86fc87b46b9',
        title: '✅ Knowledge Check',
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
        notionId: 'e79c9ceb9f33424385e5427015461275',
        title: 'Examining the Ledger',
        content: '<div class="bloc1"><p>In typical money systems, we trust third parties like banks to keep track of how much money each person has. But, to be truly Bankless, we want a system that doesn’t require us to trust one entity to manage the ledger.</p><p>The <code>ledger</code> is the list of ALL transactions ever made on a blockchain, and anyone can see it for <code>public</code> blockchains. Discrete groups of transactions from the ledger form the blocks that together make the blockchain.</p><p>When new transactions are added to the ledger, balances stored at each <code>address</code> get updated; past transactions cannot be altered. It’s like allowing everyone to look at everyone’s all-time bank account transaction history, at any given time, forever. </p></div><div class="bloc2"><img src=\'/images/blockchain-basics/examining-the-ledger-838ca24f.svg\'></div>'
      },
      {
        type: 'LEARN',
        notionId: '719560cd2fc048e282250b23be846443',
        title: 'Transactions on the Ledger',
        content: '<div class="bloc1"><p>Let’s look at some example transactions:</p><ul><li>Alice sends 5 ETH to Bob</li><li>Bob sends 2 ETH to Charlie</li></ul><p>Individual transactions show the <em>change </em>in the amount of cryptocurrency for each address so the total result of all transactions IS the amount of cryptocurrency each address has.</p><hr><p>⇒ Alice has lost 5 ETH</p><p>⇒ Bob has gained 3 ETH total (received 5, sent 2)</p><p>⇒ Charlie has gained 2 ETH</p></div><div class="bloc2"><img src=\'/images/blockchain-basics/transactions-on-the-ledger-6b86493d.svg\'></div>'
      },
      {
        type: 'QUIZ',
        notionId: 'c9136a9caf6f4c5aacc85fac90725cae',
        title: '✅ Knowledge Check',
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
        notionId: '821afba1083a4e8aa2ed0d88e5a0e335',
        title: 'Decentralization',
        content: '<div class="bloc1"><p>Not only are transactions included on a <code>blockchain</code> ledger unchangeable, they are also shared and distributed amongst a large network of computers. To make sure that no single entity has the power to change the data, the blockchain ledger is stored on every device, called a <code>node</code>, on the network.</p><p>This shared data is what makes the blockchain ledger <code>decentralized</code>. No single authority or entity controls the data. Blockchains like Ethereum are also <code>public</code> because the ledger can be viewed by anyone. </p><p>We will see specifics of how new data is added and how we ensure everyone has a copy of the same data all the time in our upcoming Blockchain Theory lesson. For this lesson, just remember that the ledger data is shared by every computer running on the Ethereum network.</p></div>'
      },
      {
        type: 'QUIZ',
        notionId: '4a9d8f07650a4711a1d477298c8ed0cc',
        title: '✅ Knowledge Check',
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
        notionId: '9b35ad0ec12f4b8b91bb55b8bd95817d',
        title: 'Block Anatomy',
        content: '<div class="bloc1"><p>An important feature of blockchains is that past transaction data cannot be changed after it has been included in a block. This is because each block has a unique <code>block hash</code>, like a fingerprint, that is used to link the blocks together one after another. No one can change past transactions without changing that fingerprint and the fingerprint of EVERY block that follows it because each fingerprint depends on the previous one.</p><p>So each <code>block</code> is simply a group of transactions put together in one file along with that block’s <code>block hash</code>. The blocks are chained together because each one references the previous block’s unique fingerprint to form one connected block<strong><em>chain</em></strong>. </p></div><div class="bloc2"><img src=\'/images/blockchain-basics/block-anatomy-5c22845b.svg\'></div>'
      },
      {
        type: 'QUIZ',
        notionId: 'a64c7bd22dad465d858a458e637f13a2',
        title: '✅ Knowledge Check',
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
        notionId: '450fd9484ede4536b12c064b6efcebc8',
        title: 'Inside a Block',
        content: '<div class="bloc1"><p>Remember, <code>block</code> data is just a group of transactions put together. Looking within a single block, we see a list of transactions and some data about who created the block. </p><p>From our example earlier when discussing the blockchain ledger, both of those transactions might be grouped within one block, or spread out into multiple blocks over time. But no matter what block they are included in, they are all added to the overall blockchain ledger eventually.</p><ul><li>Alice sends 5 ETH to Bob</li><li>Bob sends 2 ETH to Charlie</li></ul><p>Recall that each block must also reference the past block’s <code>block hash</code> to link the blockchain together.</p></div><div class="bloc2"><img src=\'/images/blockchain-basics/inside-a-block-b0c2dd11.svg\'></div>'
      },
      {
        type: 'QUIZ',
        notionId: 'c8eb8024363341b89a56a3b106d63d85',
        title: '✅ Knowledge Check',
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
        notionId: 'b4a57b943b714c72afdc919b3b73a947',
        title: 'Individual Transactions',
        content: '<div class="bloc1"><p>The data on any blockchain is simply a list of <code>transactions</code>, records of currency moved between users. Each transaction must be signed by the sender’s <code>digital signature</code> to be valid. </p><p>This is what you do when you confirm a transaction with a wallet, you are signing with your digital signature to authorize a transaction. You can think of it as the digital equivalent of physically signing a check, receipt, or credit card transaction.</p><p>Transactions can be simple, like sending crypto assets, or more complex, such as swapping crypto assets or even deploying special code that executes when triggered, called <code>smart contracts</code>.</p><p>Finally, each transaction has a unique digital identifier, called its <code>transaction hash</code>, that no other transaction has. This makes it easy to refer to any single transaction later on and ensures that the details of that transaction can’t be changed afterward.</p></div><div class="bloc2"><img src=\'/images/blockchain-basics/individual-transactions-de83e15c.svg\'></div>'
      },
      {
        type: 'QUIZ',
        notionId: '61840623d81245cdac32c81e208cc37c',
        title: '✅ Knowledge Check',
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
        notionId: '9ab48a4f7b4b47c7bcaa3af14a21bf69',
        title: 'User Addresses',
        content: '<div class="bloc1"><p>An <code>address</code> is a public identifier that anyone can look up on the blockchain. Like an email address, anyone can send funds to it but only someone who controls the <code>private key</code> can unlock and use the funds at that address.</p><p>On Ethereum, an address always starts with <em>0x_________</em> and is 42 characters of numbers and letters derived from the <code>public key</code> of that address.</p><p>When looking at a single transaction in a block explorer, we can see the From: and To: addresses. This doesn’t tell us who the <em>people </em>are who control those addresses but allows any user to track the movement of cryptocurrency throughout the blockchain ledger.</p></div><div class="bloc2"><img src=\'/images/blockchain-basics/user-addresses-57e130d9.svg\'></div>'
      },
      {
        type: 'QUIZ',
        notionId: 'df8eff6a23fe48a0b60ac92124e3ddb2',
        title: '✅ Knowledge Check',
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
      }
    ]
  },
  {
    badgeImageLink: '/images/web3-security/badge-699013d5.png',
    lessonImageLink: '/images/web3-security/lesson-947e450d.png',
    socialImageLink: '/images/web3-security/social-c3497283.jpg',
    learningActions: 'Avoid the scams in web3 and keep your assets safe.',
    marketingDescription: 'Protect yourself and your wallet from the most common scams in web3.',
    badgeId: 5,
    duration: 15,
    learnings: '',
    difficulty: 'Easy',
    description: 'Protect yourself and your wallet from the most common scams in web3.',
    name: 'Web3 Security',
    languages: [
      'fr',
      'ua'
    ],
    level: 'Essentials',
    tags: [
      'Security'
    ],
    quest: 'Web3Security',
    publicationStatus: 'publish',
    publicationDate: '2022-07-29',
    featuredOrderOnHomepage: null,
    isCommentsEnabled: false,
    endOfLessonRedirect: null,
    notionId: '519c86d503954a629a2035eb1b401628',
    englishName: 'Web3 Security',
    slug: 'web3-security',
    imageLinks: [
      '/images/web3-security/money-in-web2-7e1a5fd1.svg',
      '/images/web3-security/money-in-web3-f575b0f6.svg',
      '/images/web3-security/two-factor-authentication-7fa9bfdf.svg',
      '/images/web3-security/social-engineering-scams-73c69132.svg',
      '/images/web3-security/social-media-safety-a76a39f4.svg',
      '/images/web3-security/social-media-best-practices-48ad350f.svg',
      '/images/web3-security/scam-tokens-761d5f63.svg',
      '/images/web3-security/hardware-wallets-22a096d4.svg',
      '/images/web3-security/wallet-strategies-2b743061.svg'
    ],
    keywords: [
      'web3',
      'centralized exchange',
      'seed phrase',
      'private keys',
      'password manager',
      'two factor authentication',
      'password managers',
      'social engineering',
      'phishing',
      'fomo',
      'red flags',
      'scam-tokens',
      'hardware wallet',
      'wallets',
      'hot wallet',
      'hodl',
      '2fa',
      'allowance',
      'allowances'
    ],
    slides: [
      {
        type: 'LEARN',
        notionId: '08d72b0e6d8244cfbeef69c042791936',
        title: 'Introduction',
        content: '<div class="bloc1"><p>Digital ownership is the new feature of web3. Using blockchains, cryptocurrencies, and NFTs, web3 gives ownership and power back to users. This online ownership of digital financial products is new for many, and that lack of experience gives opportunities for predatory people to scam and steal the assets of others. These scams work so well because most people aren’t aware of how they work. </p><p>But, it\'s not just web3 that suffers from scams, web2 services like email and social media are full of scams as well. In addition, many web3 tools are still tied to web2 services like bank accounts or centralized exchanges so protecting those is important too. So congratulations, Academy Explorer, on taking the time to arm yourself with the knowledge that will protect you as you venture out into <code>web3</code>!</p><p>This lesson will cover:</p><ul><li>Web2 & web3 security.</li><li>The most common ways people lose their funds and how to protect oneself from them.</li><li>A general strategy for wallet security.</li><li>How one can recover if they are the victim of a scam.</li></ul></div>'
      },
      {
        type: 'LEARN',
        notionId: 'd4fe1d65fdf244feb67846d6c7f385d9',
        title: 'Money in Web2',
        content: '<div class="bloc1"><p>In web2, the institutions hold money on behalf of people. A user must prove their identity to an institution in order to access and use their money. It’s the same as a bank account or a <code>centralized exchange</code> (CEX); one needs a login ID and a password.</p><p>For a scammer to gain access to your money, they need this ID + password combination. Because the institutions are charged with protecting your money, fraudulent transactions can be reversed - like a credit card transaction dispute.</p></div><div class="bloc2"><img src=\'/images/web3-security/money-in-web2-7e1a5fd1.svg\'></div>'
      },
      {
        type: 'LEARN',
        notionId: '545e9e774eb24c6f9a045b856dd9490a',
        title: 'Money in Web3',
        content: '<div class="bloc1"><p>In web3, money works differently. It’s more like a locked cash wallet; once money is spent, it’s gone. Only private keys control access to the wallet. So for a scammer to gain access they need the <code>seed phrase</code>, that special set of secret words, to access someone’s <code>private keys</code> and steal from their wallet. </p><p>It’s very important to protect seed phrases; people should <em><strong>never</strong></em> give their seed phrase to anyone for any reason. Also, never enter seed phrases digitally; digital photos, notes applications, and text files on your computer can all get compromised.</p></div><div class="bloc2"><img src=\'/images/web3-security/money-in-web3-f575b0f6.svg\'></div>'
      },
      {
        type: 'QUIZ',
        notionId: '04726706edaf48c4a232f30b7bcd95ca',
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
        notionId: '56bb5f6cb8ba4b5e8da7dc1821c2ae1e',
        title: 'Secure Seed Storage',
        content: '<div class="bloc1"><p>There are many methods for storing seed phrases securely, but a good start is to keep it on physical media (laminated paper or similar) and store it in a water- and fire-proof safe in your own home. <strong>Do not </strong>store a <code>seed phrase</code> as a photo or other digital methods - even in a password manager. </p><p>Bad places to store seed phrases include:</p><ul><li>In a filing cabinet</li><li>Digital notes application</li><li>At your workplace</li><li>Digital photo</li></ul><p>Wherever you store your seed phrase, you should ensure that only you have access to it and that it is protected from loss and destruction. You never know what might happen in the future!</p></div>'
      },
      {
        type: 'LEARN',
        notionId: '7be1ee4b401a487f8a0e23e8ba1d1f2e',
        title: 'Protect your Passwords',
        content: '<div class="bloc1"><p>Healthy password usage and management is an important piece of everyday internet exploration.</p><p>Passwords should be different for each and every web2 service used online. This includes services like email, centralized exchanges, and other service accounts. It’s problematic if someone manages to get the ID + password for one account, but it’s far worse if that combination unlocks all of your accounts!</p><p><code>Password manager</code> applications like 1password, LastPass, and BitWarden securely store and encrypt multiple passwords; they can even generate new high-security passwords and store them automatically. The user just has to remember a single master password. </p><p>Do <strong>not</strong> store a web3 <code>seed phrase</code> in a password manager; it takes just one password breach to obtain all of your web3 assets and there is no one to recover your assets for you.</p></div>'
      },
      {
        type: 'QUIZ',
        notionId: '8c7e79fea4484fef915ba9c100e3f1d0',
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
        notionId: '3944e76cc9f14e9bb0e45f8a135ceb01',
        title: 'Two Factor Authentication',
        content: '<div class="bloc1"><p><code>Two Factor Authentication</code>, also known as 2FA, is a secondary layer of web2 security.</p><p>Many people have had their web2 accounts hacked, or have had their money and credentials stolen despite having strong passwords. Web2 websites (and even <code>password managers</code>) often use a second layer of security 2FA as well. 2FA generates single-use codes sent to another device, in addition to the normal password, to enable website log-in. The other device could be a phone, a desktop computer, or even a small device you can attach to your keychain.</p><p>Phone (SMS) 2FA is better than no 2FA, but phone companies are vulnerable to scammers also. They can use <code>social engineering</code> to impersonate the account owner, bypass the company’s security checks, and gain access to the owner’s account - all without the real owner knowing. Authentication applications like Authy or Google Authenticator are more secure 2FA solutions.</p></div><div class="bloc2"><img src=\'/images/web3-security/two-factor-authentication-7fa9bfdf.svg\'></div>'
      },
      {
        type: 'QUIZ',
        notionId: '2f0f524e5c6c489db675c2420cb5df24',
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
        notionId: '99d8745f48194765927c1f5719083771',
        title: 'Social Engineering Scams',
        content: '<div class="bloc1"><p>In both web2 and web3, scammers use <code>phishing</code> tactics to trick people into giving up their passwords and seed phrases. Often they’ll pretend to be product support staff offering help, “Hello this is Metamask support”, or pretend to be an admin of a community, “New NFT mint, exclusive for our community”.</p><p>They use <code>social engineering</code> to pressure people. Examples include:</p><ul><li>“Time is running out!” - making you feel rushed.</li><li>“Congratulations you won our giveaway!” - making things feel exclusive.</li><li>”Get early access to our pre-mint!” - generating <code>FOMO</code> in the person being scammed.</li></ul></div><div class="bloc2"><img src=\'/images/web3-security/social-engineering-scams-73c69132.svg\'></div>'
      },
      {
        type: 'LEARN',
        notionId: 'f5751ef8dc3d44099efb83a8c587a15a',
        title: 'Fear Of Missing Out',
        content: '<div class="bloc1"><p><code>FOMO</code> stands for the ‘Fear Of Missing Out’, it’s the stressful feeling that you’re not going to get a great benefit or opportunity unless you do something <strong>right now</strong>.</p><p>The best defense against FOMO is to simply take a step back from your computer and take a break. People don’t think clearly when they’re stressed, that’s why FOMO is such an effective scamming tool. By stepping away from the situation, it becomes much easier to spot the scams for what they are.</p></div>'
      },
      {
        type: 'QUIZ',
        notionId: '65f3e534d9bd4dad96049307d210af06',
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
        notionId: '3ba4ffe0ce7649649cd3ad768b857449',
        title: 'Social Media Safety',
        content: '<div class="bloc1"><p>Scammers love to engage with users in social media environments like Twitter and the Discord servers of cryptocurrency projects. They will typically try to move to or even start conversations via direct messaging to avoid being spotted by experienced community members. It’s generally safer to talk in public areas, until you’ve gained more experience in crypto-culture.</p><p>However, no matter where you are talking to others, you should <em><strong>never</strong></em> give your <code>seed phrase</code> to anyone for <strong>any reason</strong>. If anyone asks for your seed phrase or private key, they are a scammer. It’s that simple.</p></div>'
      },
      {
        type: 'LEARN',
        notionId: '7126cf46eb4d499da75db201458a04a9',
        title: 'Social Media Safety',
        content: '<div class="bloc1"><p>Social media <code>red flags</code>:</p><p>🚩 <strong>Language and grammar errors:</strong> They’re/their/there, etc.</p><p>🚩 <strong>FOMO:</strong> “Don’t miss out!”</p><p>🚩 <strong>Impersonation:</strong> an admin, support desk, Vitalik Buterin, Elon Musk, etc.</p><p>🚩 <strong>Guaranteed returns: </strong>Nothing is guaranteed in crypto.</p><p>🚩 <strong>Unrequested links and offers, </strong><em>especially in direct messages</em>.</p></div><div class="bloc2"><img src=\'/images/web3-security/social-media-safety-a76a39f4.svg\'></div>'
      },
      {
        type: 'LEARN',
        notionId: 'ed9bce57432f473982482dbd98e33ae5',
        title: 'Social Media Best Practices',
        content: '<div class="bloc1"><p>Practices for staying safe:</p><p>✅ If they have to direct message you to sell their product, you probably don’t want it.</p><p>✅ Check the project follower and member count - though these do not guarantee project legitimacy, quality, or stability.</p><p>✅ Verify everything with an outside source, like another official project account.</p><p>✅ If you’re ever uncertain, check with reputable members from a large community you trust - and ask in public.</p></div><div class="bloc2"><img src=\'/images/web3-security/social-media-best-practices-48ad350f.svg\'></div>'
      },
      {
        type: 'LEARN',
        notionId: '311f5ebd0a414a2b8f1f627691f4cfdc',
        title: 'Scam-tokens',
        content: '<div class="bloc1"><p>Besides social engineering, the second most common web3 attack is having <code>scam-tokens</code> sent to your web3 wallet. Scam-tokens are crypto tokens that scammers transfer to many wallets at once, in the hopes that someone will try to move or sell the tokens and trigger the malicious code hiding in the token’s smart contract.</p><p>Malicious contracts often require people to spend far more on a transaction than is necessary in order to sell these scam-tokens, and others can completely drain wallets; these scam-tokens could even be NFTs! If the problem isn’t with the smart contract itself, scam-tokens will often lure victims back to phishing websites where scammers try to trick victims into entering their <code>seed phrase</code> or other credentials.</p><p>The best thing to do when you receive random tokens is to not interact with them at all; leave them in your wallet and never transfer/sell them.</p></div><div class="bloc2"><img src=\'/images/web3-security/scam-tokens-761d5f63.svg\'></div>'
      },
      {
        type: 'QUIZ',
        notionId: 'b08a84ce7f04456aa3e472606b855648',
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
        notionId: 'c01a9870f18c437483ede3c209b06064',
        title: 'Hardware Wallets',
        content: '<div class="bloc1"><p>If you remember from our <a href=\'https://app.banklessacademy.com/lessons/wallet-basics\'>Wallet Basics</a> lesson, a <code>hardware wallet</code> is only connected to the internet when you physically connect it to a computer or device that is connected to the internet. This makes your funds much safer as someone would have to physically steal your device and hack into it in order to find your <code>seed phrase</code>.</p><p>It is even possible to use your hardware wallet through many browser extension wallets, like MetaMask. By using this setup, you receive the convenience of a single wallet interface with the security of using a hardware wallet.</p><p>Ledger has <a href=\'https://www.ledger.com/academy/security/the-safest-way-to-use-metamask\'>written their own guide</a> on how to setup MetaMask for use with their hardware wallet device.</p></div><div class="bloc2"><img src=\'/images/web3-security/hardware-wallets-22a096d4.svg\'></div>'
      },
      {
        type: 'QUIZ',
        notionId: '0c0c40b078d443a5b1ba0d2aefc7e65f',
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
        notionId: '1d5edee94a824d729f90878f4346a548',
        title: 'Wallet Strategies',
        content: '<div class="bloc1"><p>After adding a hardware wallet to your setup, one of the best ways to secure your funds is to keep them spread between multiple <code>wallets</code>. Here is a compartmentalized strategy using three separate wallets:</p><ol><li><strong>Social Wallet:</strong> A wallet that serves as your web3 identity for logins — like for web3 social media — use a <code>hardware wallet</code> for extra security.</li><li><strong>Trading Wallet:</strong> A <code>hot wallet</code> for trading and other activities involving funds that may need to be moved on short notice.</li><li><strong>HODL Wallet:</strong> A <code>hardware wallet</code> for the long-term <code>HODL</code> — these are funds intended to hold for a long time. It’s recommended to <em><strong>not </strong></em>use this wallet for interacting with smart contracts.</li></ol><p>👍 <strong>PROs:</strong> Separation ensures that scams only threaten funds in <em>that particular wallet</em> rather than <em>everything</em>.</p><p>👎 <strong>CONs:</strong> It’s more complicated to keep track of, but many wallet applications allow you to name your wallets.</p></div><div class="bloc2"><img src=\'/images/web3-security/wallet-strategies-2b743061.svg\'></div>'
      },
      {
        type: 'QUIZ',
        notionId: '71cc17a7d8664e70afd5ff1f108c1d4e',
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
        notionId: 'f2c958c42a36433ab935c70a2d072e1f',
        title: 'Recovering from Web2 Scams',
        content: '<div class="bloc1"><p>Hopefully you have not already fallen victim to a scammer. If you have, there are some steps you should take to secure your accounts once more.</p><p>For a scam involving a web2 service, like Gmail or Discord, you should:</p><ul><li>Change your password on the affected account.</li><li>Where it’s available, use the “sign out everywhere else” button to kick the scammers off your account.</li><li>Enable <code>2FA</code> with an authenticator app.</li><li>Report the scam to the service involved.</li><li>Ensure your email account is also secure.</li><li>Discuss the scam with friends or trusted community members.</li></ul></div>'
      },
      {
        type: 'LEARN',
        notionId: 'f87bb8a18f764190a9be5e2e763a5607',
        title: 'Recovering from Web3 Scams',
        content: '<div class="bloc1"><p>Contracts must be given explicit permission to spend tokens on Ethereum. The token <code>allowance</code> is how much of that token you’ve given permission to be spent by a specific contract. Keeping allowances low reduces the risk to your assets by a potentially malicious application or hacker.</p><p>Web3 doesn’t have anyone in charge of protocols to report scammers to, but you can still take action:</p><ul><li>Immediately move any funds still in the compromised wallet to a different wallet address, <strong>make sure the new address has a different seed phrase.</strong></li><li>Review and revoke the token <code>allowances</code> you have given on your wallet with tools like <a href=\'https://etherscan.io/tokenapprovalchecker\'>etherscan.io/tokenapprovalchecker</a>. Note that revoking allowances will cost gas. OpenSea has a <a href=\'https://support.opensea.io/hc/en-us/articles/4416083190291-How-can-I-revoke-token-allowance-permissions-\'>support article</a> walkthrough.</li><li>Use a <code>hardware wallet</code> in the future.</li><li>Warn others by reporting the scam to the affected community.</li><li>Discuss the scam process with friends or trusted community members to see how you can protect yourself and others in the future.</li></ul></div>'
      },
      {
        type: 'QUEST',
        title: 'Web3 Security Quest',
        component: 'Web3Security'
      }
    ]
  },
  {
    badgeImageLink: '/images/layer-1-blockchains/badge-53d2b389.png',
    lessonImageLink: '/images/layer-1-blockchains/lesson-c945beaa.png',
    socialImageLink: '/images/layer-1-blockchains/social-36173b14.jpg',
    learningActions: '',
    marketingDescription: 'Understand how Layer 1 blockchains work - and learn their limitations!',
    badgeId: 7,
    duration: 15,
    learnings: '',
    description: 'Understand how Layer 1 blockchains work - and learn their limitations!',
    name: 'Layer 1 Blockchains',
    languages: [],
    level: 'Level 1',
    lessonWriters: 'iSpeakNerd',
    quest: 'Layer1Blockchains',
    publicationStatus: 'publish',
    publicationDate: '2022-12-14',
    featuredOrderOnHomepage: null,
    isCommentsEnabled: false,
    endOfLessonRedirect: null,
    notionId: '7aeb05250dbc4d55a474fb817ff089d8',
    englishName: 'Layer 1 Blockchains',
    slug: 'layer-1-blockchains',
    imageLinks: [
      '/images/layer-1-blockchains/introduction-feee7790.svg',
      '/images/layer-1-blockchains/blockchain-trilemma-9bd1b1e4.svg',
      '/images/layer-1-blockchains/security-and-consensus-4e857c50.svg',
      '/images/layer-1-blockchains/security-and-attacks-a73febc0.svg',
      '/images/layer-1-blockchains/scalability-throughput-d36672c5.svg',
      '/images/layer-1-blockchains/scalability-finality-73177220.svg',
      '/images/layer-1-blockchains/decentralization-distributes-power-feafb05a.svg',
      '/images/layer-1-blockchains/is-it-decentralized-9cd381fb.svg',
      '/images/layer-1-blockchains/some-examples-30020a8d.svg',
      '/images/layer-1-blockchains/so-what-can-be-done-043c43fb.svg',
      '/images/layer-1-blockchains/the-future-of-ethereum-1f05c338.svg'
    ],
    keywords: [
      'blockchain',
      'blockspace',
      'blockchain trilemma',
      'security',
      'scalability',
      'decentralization',
      'consensus',
      'proof of work',
      'block reward',
      '51% attack',
      'stake',
      'proof of stake',
      'block',
      'transaction throughput',
      'tps',
      'block space',
      'finality',
      'permissionless',
      'censorship-resistant',
      'ledger',
      'finality time',
      'smart contracts',
      'alternative layer 1',
      'layer 2',
      'sharding'
    ],
    slides: [
      {
        type: 'LEARN',
        notionId: 'ffd0f4706fe84588b17130293d5df33f',
        title: 'Introduction',
        content: '<div class="bloc1"><p>Problems emerge when more users want to use a <code>blockchain</code> network than it can handle. Large demand for <code>blockspace</code> can be temporary or can last as long as users continue to have a strong desire to use the blockchain. In times of high demand, Ethereum users can pay skyrocketing fees to still have their transactions processed quickly— ultimately pricing out users with less capital.</p><p>This lesson explores why Ethereum and other blockchains are subject to the <code>Blockchain Trilemma</code>, how the Trilemma is the root cause of the problems described above, and how the Trilemma affects Ethereum’s plans for serving the needs of all its users. We will look at the tradeoffs several blockchains have made concerning the Blockchain Trilemma, and what those tradeoffs mean for Academy Explorers.</p></div><div class="bloc2"><img src=\'/images/layer-1-blockchains/introduction-feee7790.svg\'></div>'
      },
      {
        type: 'LEARN',
        notionId: '2933158cd04448dbab8d9d0ba7a97ce8',
        title: 'Blockchain Trilemma',
        content: '<div class="bloc1"><p>As implied by the word <em><strong>tri</strong></em>lemma, there are three qualities of blockchains that compete with each other and prevent optimizing for all three at once. </p><p>These are: <code>Security</code>, <code>Scalability</code>, and <code>Decentralization</code>.</p><p>For a blockchain to serve as an unbiased foundation for a monetary system at a global scale, it should excel in all three aspects. A monetary system needs to be secure from fraud, safe from attacks by censors through decentralization, and scalable to meet the needs of over 8 billion humans in a global society.</p></div><div class="bloc2"><img src=\'/images/layer-1-blockchains/blockchain-trilemma-9bd1b1e4.svg\'></div>'
      },
      {
        type: 'QUIZ',
        notionId: '6881d9f6b2ab40aea5ac74b5a4956559',
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
        notionId: 'bbb0dabe345e44b090e2fe87a5e30cc1',
        title: 'Security and Consensus',
        content: '<div class="bloc1"><p>Security is the most foundational requirement for a public blockchain. Computers within a network (such as a blockchain network) must agree on what transactions have truly happened to work together; this agreement is called <code>consensus</code>. A blockchain is secure if attackers cannot disrupt the network from agreeing on that truth. Consensus algorithms are designed to resist these attacks.</p><p>Chains like Bitcoin that use <code>Proof of Work</code> consensus prevent fraud by making their consensus algorithm highly competitive; each block producer races to solve a math problem. The first to do so wins the right to create the next block and receives the monetary <code>block reward</code> that comes with it. Fraud would require massive investments in computing power and energy, so an attacker would likely spend more than they’d gain. </p></div><div class="bloc2"><img src=\'/images/layer-1-blockchains/security-and-consensus-4e857c50.svg\'></div>'
      },
      {
        type: 'QUIZ',
        notionId: '4582b0e22520444a85d8fc1668575e5c',
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
        notionId: '21c7f132000f4d7d8fa4bd5d80e1374b',
        title: 'Security and Attacks',
        content: '<div class="bloc1"><p>One potential form of attack on blockchain consensus is a <code>51% attack</code>; an attacker needs to have 51% or more of the consensus power on a network to commit fraud by creating falsified transactions. This means 51% of the computing power solving math problems in Proof of Work consensus and 51% of the <code>stake</code> in Proof of Stake consensus. Again, fraud would require a massive capital investment to acquire a stake in the network, which will be destroyed if found to be creating false transactions; an attacker would likely spend more than they’d gain.</p><p>In <code>Proof of Stake</code> consensus, the block producer isn’t chosen through competition but is randomly assigned instead. Like with Proof of Work, the consensus algorithm ensures that any single entity cannot regularly “win” the right to create a new <code>block</code>. </p></div><div class="bloc2"><img src=\'/images/layer-1-blockchains/security-and-attacks-a73febc0.svg\'></div>'
      },
      {
        type: 'QUIZ',
        notionId: 'a0c08d3d1ce34356852e3ef0b7e8a38d',
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
        notionId: 'b48ad9f24cf64fec938f939f3f99e118',
        title: 'Scalability - Throughput',
        content: '<div class="bloc1"><p><code>Scalability</code> refers to a blockchain’s ability to process many transactions quickly. Two parts determine a blockchain’s scalability: throughput and finality.</p><p>1) <code>Transaction throughput</code>: How many transactions a blockchain can process at once, usually measured in transactions per second (<code>TPS</code>).</p><p>Imagine many people waiting at a bus stop with more arriving every minute, they all want to travel. But there are only so many people that can travel by bus. To clear the bus stop of people faster, you’d have to use bigger busses (more people) or make the busses run more often (less time). It works the same way with trying to fit many transactions into the small amount of <code>block space</code> available for each block. You can see this visualization with live data at <a href=\'https://txstreet.com/v/eth-btc\'>https://txstreet.com/v/eth-btc</a>.</p></div><div class="bloc2"><img src=\'/images/layer-1-blockchains/scalability-throughput-d36672c5.svg\'></div>'
      },
      {
        type: 'QUIZ',
        notionId: '5510ec0e6e8740ca9a8abbd882066b0c',
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
        notionId: 'b53a3a02eae94e99a877ec31812d09f5',
        title: 'Scalability - Finality',
        content: '<div class="bloc1"><p>The second aspect of blockchain scalability is:</p><p>2) <code>Finality</code>: When can we be reasonably sure a transaction won’t get changed or reversed?</p><p>Finality is typically measured in blocks — how many blocks have passed since the transaction was included in a block? The more blocks that get added to the chain afterward, the more sure we can be that the transaction is finalized and won’t get reverted. Remember, a secure blockchain consensus algorithm makes it very expensive to change past blocks, and the expense increases the farther back someone changes. We convert this block number to a finality time by multiplying the expected number of block confirmations by the blockchain’s TPS. For Ethereum, eight block confirmations times 15 <code>TPS</code> gives 2 minutes of finality time after confirmation. </p></div><div class="bloc2"><img src=\'/images/layer-1-blockchains/scalability-finality-73177220.svg\'></div>'
      },
      {
        type: 'LEARN',
        notionId: 'bbdce38d6f824d9aa0bb921f60a3a0e5',
        title: 'Decentralization distributes power',
        content: '<div class="bloc1"><p><code>Decentralization</code> is the final basis of the blockchain trilemma — the process of transferring control and decision-making from a single entity to a distributed network of many. Decentralization is the fundamental principle that enables blockchains to be <code>permissionless</code> and <code>censorship-resistant</code>; anyone can use decentralized blockchains, and anyone can build software using them.</p><p>Centralized platforms like Facebook and Twitter can deactivate anyone’s account at any time. Many influential streamers on Twitch or Tiktok have found themselves removed from their platforms without cause. Even if social media users can reinstate their accounts, it can be long and painful process. Without decentralization, a blockchain <code>ledger</code> is just a financial spreadsheet on a bank computer; the bankers decide who gets to create an account with them. A <code>permissionless</code> network means authority is sufficiently decentralized; there is no way to remove a person or entity’s access.</p></div><div class="bloc2"><img src=\'/images/layer-1-blockchains/decentralization-distributes-power-feafb05a.svg\'></div>'
      },
      {
        type: 'QUIZ',
        notionId: '655bb01b00294875867c3b8cacf654b3',
        title: '✅ Why decentralization?',
        quiz: {
          question: 'Which of these statements is NOT true for decentralization?',
          rightAnswerNumber: 3,
          answers: [
            'Decentralization makes blockchains censorship-resistant',
            'Decentralization makes blockchains permissionless',
            'Decentralization helps authoritarian powers to maintain control',
            'Anyone anywhere can use permissionless systems'
          ],
          id: 'layer-1-blockchains-5'
        }
      },
      {
        type: 'LEARN',
        notionId: '02ce0a483cf74c818e7178e42f62c61a',
        title: 'Is it decentralized?',
        content: '<div class="bloc1"><p>But whether something is decentralized isn’t just a yes or no answer. Are 10 controlling entities decentralized? How about 1000? One million? There isn’t a standard cutoff for something being sufficiently decentralized, so it makes sense to think of decentralization as a spectrum. Rather than the only choices being black and white, there are also many greys between them.</p><p>So we can say something is “more or less decentralized than something else” rather than “centralized or decentralized.” A high degree of decentralization is required for a neutral monetary system to resist state-level censorship. Newer blockchains often trade decentralization for scalability, but they leave themselves vulnerable to the same pressures from societies and governments that fully centralized platforms feel. They may end up engaging in the same censorship seen on centralized social media networks.</p></div><div class="bloc2"><img src=\'/images/layer-1-blockchains/is-it-decentralized-9cd381fb.svg\'></div>'
      },
      {
        type: 'QUIZ',
        notionId: 'aeb2bd652b5e4cc88613d8323425ef10',
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
        notionId: '2e6f523d8a05406986b7be9b0d6647e5',
        title: 'Some Examples',
        content: '<div class="bloc1"><p>Each blockchain has its own approach to the trilemma, and each has made tradeoffs to focus on its goals. Bitcoin and Ethereum prioritize security and decentralization over scalability, leading to long transaction <code>finality time</code> for Bitcoin and sky-high transaction fees for Ethereum. The demand to use <code>smart contracts</code> as a “decentralized world-finance computer”, especially for DeFi, has meant that many users making small transactions cannot afford Ethereum.</p><p>This high cost to use has provided an opening for <code>alternative Layer 1</code>’s like the Binance chain. Binance prioritized scalability over decentralization for higher <code>transaction throughput</code> and cheaper fees. Third-generation chains like Solana use novel methods to solve the trilemma, but all blockchains are still subject to these basic constraints. Each chain’s choice defines its ecosystem through the foundational effects that come from that choice.</p></div><div class="bloc2"><img src=\'/images/layer-1-blockchains/some-examples-30020a8d.svg\'></div>'
      },
      {
        type: 'LEARN',
        notionId: '9381df55e11a40d182dbe4272d6fc5e0',
        title: 'So what can be done?',
        content: '<div class="bloc1"><p>So if Ethereum has prioritized high security and decentralization, how can it scale to serve the needs of all users as the global financial network it aims to become? This is where the Ethereum roadmap can provide some answers: <code>Layer 2</code>s and blockchain <code>sharding</code>.</p><p><code>Layer 2</code>s are an early solution to increasing Ethereum scalability without compromising on the other two parts of the blockchain trilemma. They are an additional layer sitting on top of the main blockchain, relying on the main chain for security but allowing users to benefit from reduced fees and faster transactions. We will explore them in more detail in our Layer 2 lesson.</p><p><code>Sharding</code> splits the single blockchain into multiple chains that all run together in parallel, like adding more lanes to a road. It enables more transactions to be processed at once without sacrificing security or decentralization.</p></div><div class="bloc2"><img src=\'/images/layer-1-blockchains/so-what-can-be-done-043c43fb.svg\'></div>'
      },
      {
        type: 'QUIZ',
        notionId: '85eea665d8de47e0b27e9d99d00020f8',
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
        notionId: '80c59f6cba234479aaab8b3ef94dbcac',
        title: 'The future of Ethereum',
        content: '<div class="bloc1"><p>Previously known as the Ethereum 2.0 upgrade, the Ethereum network is evolving its scalability without sacrificing the other aspects of the trilemma. These changes include the merge to <code>Proof of Stake</code> consensus, Layer 2s going live, <code>sharding</code> of the main chain, and an overall reduction of energy usage. <strong>All of these changes together will mean a faster, more environmentally-friendly, and cheaper Ethereum while still maintaining security and decentralization as core tenets.</strong> The Ethereum Foundation has an excellent webpage on coming <a href=\'https://ethereum.org/en/upgrades/\'>upgrades to Ethereum</a>.</p><p>These things take time; meanwhile, many <code>Layer 2</code> protocols are building on top of Ethereum to help meet user demand in the short term without requiring updates to the Ethereum protocol itself. These Layer 2 protocols rely on Layer 1 Ethereum to provide decentralized security while they provide scalability; the diversity of Layer 2s makes a decentralized ecosystem! Ethereum scaling projects include protocols like Optimistic Ethereum, Polygon, and others.</p></div><div class="bloc2"><img src=\'/images/layer-1-blockchains/the-future-of-ethereum-1f05c338.svg\'></div>'
      },
      {
        type: 'QUIZ',
        notionId: '5279c579e15e4a9fae2aa66a1a50f523',
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
        notionId: 'ec0d0d5198e143879f7b4ac3bd1c7a74',
        title: 'What does it mean for Explorers?',
        content: '<div class="bloc1"><p>Users need low fees to learn and explore the technology with low barriers to entry and low costs from mistakes, even more so at the beginning of their journey. The Ethereum blockchain is not ideal yet, but its values make it one of the best candidates for fulfilling the dream of a global financial computing system. Explorers can learn to interact and use Ethereum without paying massive fees; using Layer 2s allows Explorers to have the security and decentralization benefits of Ethereum combined with the higher scalability.</p><p>The next lesson will explain <code>Layer 2</code> solutions and how to get started. Onward explorers!</p></div>'
      },
      {
        type: 'QUEST',
        title: 'Layer 1 Blockchains Quest',
        component: 'Layer1Blockchains'
      }
    ]
  },
  {
    badgeImageLink: '/images/layer-2-blockchains/badge-4336366c.png',
    lessonImageLink: '/images/layer-2-blockchains/lesson-473d7974.png',
    lessonCollectedImageLink: '/images/layer-2-blockchains/datadisk-collected-3073d815.png',
    lessonCollectibleGif: '/images/layer-2-blockchains/datadisk-gif-2a93bd15.gif',
    lessonCollectibleVideo: '/images/layer-2-blockchains/datadisk-video-bfdfdef9.webm',
    lessonCollectibleMintID: '64b810dda23ab034b49a1340',
    lessonCollectibleTokenAddress: '0x5ce61b80931Ea67565f0532965DDe5be2d41331d',
    socialImageLink: '/images/layer-2-blockchains/social-d2363565.jpg',
    learningActions: '',
    marketingDescription: 'The Layer 2 revolution has begun. Discover how the Layer 2 ecosystem can boost your transaction speed & reduce gas fees.',
    badgeId: 8,
    datadiskVectorMint: 123,
    collectibleId: 'D001',
    duration: 15,
    learnings: '',
    description: 'Join the Layer 2 ecosystem to boost your transaction speed & reduce fees.',
    name: 'Layer 2 Blockchains',
    languages: [],
    level: 'Level 1',
    tags: [
      'Optimism'
    ],
    lessonWriters: 'HiroKennelly, Tetranome',
    quest: 'Layer2Blockchains',
    publicationStatus: 'publish',
    publicationDate: '2023-02-22',
    featuredOrderOnHomepage: null,
    isCommentsEnabled: false,
    endOfLessonRedirect: null,
    sponsorName: 'Optimism',
    sponsorLogo: '/images/layer-2-blockchains/sponsor-e17c33fc.png',
    hasCollectible: true,
    notionId: '5308fd17fcdb461b937bbc8717917ea2',
    englishName: 'Layer 2 Blockchains',
    slug: 'layer-2-blockchains',
    imageLinks: [
      '/images/layer-2-blockchains/introduction-c1f2c88f.svg',
      '/images/layer-2-blockchains/payment-channels-31677af9.svg',
      '/images/layer-2-blockchains/bridging-layer-1-and-layer-2-c219a748.svg',
      '/images/layer-2-blockchains/sidechains-464f0191.svg',
      '/images/layer-2-blockchains/rollups-308dc6c9.svg',
      '/images/layer-2-blockchains/optimistic-rollups-846aad61.svg',
      '/images/layer-2-blockchains/zk-rollups-9d65de85.svg',
      '/images/layer-2-blockchains/cross-chain-dapp-compatibility-8a372647.svg',
      '/images/layer-2-blockchains/start-your-layer-2-journey-with-optimism-or-base--54a0f80a.svg'
    ],
    keywords: [
      'blockchain trilemma',
      'payment channels',
      'smart contract',
      'scalability',
      'security',
      'decentralization',
      'gas',
      'dapps',
      'ledgers',
      'bridges',
      'l1',
      'sidechain',
      'bridge',
      'optimistic rollups',
      'zk rollups',
      'fraud proof',
      'settlement time',
      'transaction finality',
      'ethereum virtual machine',
      'sidechains',
      'rollups',
      'zero-knowledge'
    ],
    slides: [
      {
        type: 'LEARN',
        notionId: '0143a0be1b15443abf30d91bafb9f5cd',
        title: 'Introduction',
        content: '<div class="bloc1"><p>The desired operational state for any blockchain is to be as decentralized, secure, and scalable as possible. Building a blockchain that handles all three aspects well has proven to be a challenge, as yet unsolved. This challenge has been given a name: the <code>Blockchain Trilemma</code>.</p><p>Bitcoin and Ethereum are both fairly decentralized and secure, but they don’t scale well, as is evident from the high transaction fees and long transaction queues when the network is busy. To circumvent these issues, Explorers can make use of various technologies which drastically reduce transaction costs and increase transaction speed. These are collectively known as Layer 2 (L2) scaling solutions.</p><p>The Lightning Network is Bitcoin’s best-known scaling solution, and it relies on a technology called <code>payment channels</code> to scale payments between parties. Ethereum has plans to eventually ease the Blockchain Trilemma through the use of sharding technology, but for the immediate future the network is relying on various L2 solutions to improve scalability.<br></p></div><div class="bloc2"><img src=\'/images/layer-2-blockchains/introduction-c1f2c88f.svg\'></div>'
      },
      {
        type: 'LEARN',
        notionId: '26a2591e6a8a4481afc39156d828c9a7',
        title: 'Payment Channels',
        content: '<div class="bloc1"><p>On the Bitcoin blockchain, the Lightning Network relies on bidirectional payment channels, which enables multiple parties to exchange BTC without transacting on the main chain.</p><p>The architecture enables parties to open payment channels amongst two or more users. Between the opening and closing of a channel, parties can shift funds among themselves. Each participant’s micro-ledger entry is updated after both users sign for the transaction — which requires both users to be online.<br>A channel can be closed at any time by either party broadcasting the most recent version of the micro-ledger to the blockchain.</p><p>Payment channels don’t support advanced <code>smart contract</code> interactions, only basic peer-to-peer transactions.</p></div><div class="bloc2"><img src=\'/images/layer-2-blockchains/payment-channels-31677af9.svg\'></div>'
      },
      {
        type: 'QUIZ',
        notionId: 'f160a4c558db4165a604915b0fcfa0f2',
        title: '✅ Question',
        quiz: {
          question: 'You must be online to transact using the Bitcoin Lightning Network.',
          rightAnswerNumber: 1,
          answers: [
            'True',
            'False'
          ],
          id: 'layer-2-blockchains-1'
        }
      },
      {
        type: 'LEARN',
        notionId: '8b3c3d53ff85422bb046dbd9d9babcf2',
        title: 'Ethereum Scaling Solutions',
        content: '<div class="bloc1"><p>Ethereum developers have been working on Ethereum-native scaling solutions for nearly as long as that network has been live.</p><p>Most Ethereum community members argue that in order to be an “Ethereum scaling solution”, a project must address Ethereum’s <code>scalability</code> shortcomings without sacrificing <code>security</code> or <code>decentralization</code>. For users, the most practical needs are faster transactions and cheaper <code>gas</code> than Ethereum Mainnet. To compete, some scaling solutions are willing to make greater trade-offs on the Trilemma than others.</p><p>Ethereum is defined by its smart contract capabilities, so it is also important that its scaling solutions inherit this support. There’s no use having fast, cheap transactions if users can’t access their favorite <code>dApps</code> from a Layer 2.</p></div>'
      },
      {
        type: 'QUIZ',
        notionId: 'afaf7811b1ca47daa52316c6b4816f18',
        title: '✅ Question',
        quiz: {
          question: 'Ethereum scaling solutions:',
          rightAnswerNumber: 3,
          answers: [
            'use payment channels to scale the network.',
            'can’t support smart contract interactions.',
            'should increase scalability without compromising on other trilemma attributes.',
            'allow faster transaction speeds at the cost of higher gas.'
          ],
          id: 'layer-2-blockchains-2'
        }
      },
      {
        type: 'LEARN',
        notionId: '125052ee19a149ef87a37ca41fae236e',
        title: 'Bridging Layer 1 and Layer 2',
        content: '<div class="bloc1"><p>As we learned in <a href=\'https://app.banklessacademy.com/lessons/blockchain-basics\'>Blockchain Basics</a>, blockchains are databases known as <code>ledgers</code>, that record a cryptographically secured, chronological list of transactions. L1 blockchains and L2 scaling solutions are each blockchains in their own right, with their own databases of addresses and data.</p><p>Infrastructure called <code>bridges</code> is used to transfer information between different blockchain databases. For example, if you think of the Ethereum Mainnet (or any other <code>L1</code> blockchain) as one island, and a different blockchain or your preferred scaling solution as another, a crypto bridge is the generic term for the networked highway connecting these two digital islands.</p><p>The technology is very complex, but from the end user perspective this process is as simple as choosing a destination.</p></div><div class="bloc2"><img src=\'/images/layer-2-blockchains/bridging-layer-1-and-layer-2-c219a748.svg\'></div>'
      },
      {
        type: 'LEARN',
        notionId: '6873415e4cce4efa8c2ca83d9779c385',
        title: 'Sidechains',
        content: '<div class="bloc1"><p>A <code>sidechain</code> is a separate blockchain that runs independently to Ethereum — but is connected to Ethereum Mainnet by a <code>bridge</code> that maintains a two-way peg. This means that to migrate native tokens to the sidechain, you have to lock them in a bridge contract on Ethereum Mainnet, so that the balance on the sidechain never exceeds the collateral locked on Mainnet. Such bridges extend the security of Ethereum to capital on the sidechain, while allowing them to validate and process their own transactions.</p><p>Sidechains are still subject to the Blockchain Trilemma. Their lower <code>gas</code> fees and increased transaction speed can be attributed to a smaller but more powerful validator set — meaning they trade some decentralization and security for scalability.</p><p>Sidechains, like Polygon PoS, regularly publish snapshots to the L1, saving a moment-in-time status of their ledger. Snapshots enable sidechains to roll the chain state back to a previous snapshot in the case of on-chain fraud or error.</p></div><div class="bloc2"><img src=\'/images/layer-2-blockchains/sidechains-464f0191.svg\'></div>'
      },
      {
        type: 'QUIZ',
        notionId: 'ff79af059f9d49f4a74a4b0c4635e558',
        title: '✅ Question',
        quiz: {
          question: 'Sidechains:',
          rightAnswerNumber: 4,
          answers: [
            'hold collateral on Mainnet.',
            'have cheaper gas fees than Mainnet.',
            'have greater centralization risks than Mainnet.',
            'All the above.'
          ],
          id: 'layer-2-blockchains-3'
        }
      },
      {
        type: 'LEARN',
        notionId: 'e09a6e2fc9fc4f60aef2e3f6671c1c22',
        title: 'Rollups',
        content: '<div class="bloc1"><p>Layer 2 protocols that use Rollup technology maintain closer alignment with the security level of Ethereum Mainnet.</p><p>Like sidechains, Rollups permit on-chain transactions to execute away from Ethereum Mainnet. These transactions are then ‘rolled up’ into a single transaction before being sent to Ethereum.</p><p>In order for the Rollup to prove itself secure enough to process transactions on behalf of Mainnet, it must provide “convincing evidence” that the transactions in each submitted batch are secure and valid. This evidence is included in the transaction rollup and verified by the bridge contract on Ethereum Mainnet.</p><p>There are currently two Rollup methods that can provide this evidence: <code>Optimistic Rollups</code>, and <code>ZK Rollups</code>. Let’s take a closer look at these two processes.</p></div><div class="bloc2"><img src=\'/images/layer-2-blockchains/rollups-308dc6c9.svg\'></div>'
      },
      {
        type: 'LEARN',
        notionId: '8ff690da2f2e4a45877b1c00df18bb5b',
        title: 'Optimistic Rollups',
        content: '<div class="bloc1"><p>L2 protocols like Optimism, Base and Arbitrum, all use <code>Optimistic Rollups</code> as their scaling solution architecture. Optimistic Rollups are so-called because the information in the Rollup batch is considered to be valid unless proven otherwise — an optimistic assumption is made.</p><p>To mitigate against any abuse of this technique, there is typically a multi-day delay once a user requests to move funds off of the L2 back to Mainnet. During this time, bridge validators can publish a <code>fraud proof</code> seeking to cancel the withdrawal. This fraud-proof mechanism is similar to the banking industry’s clearance processes, but is decentralized.</p><p>Note: Third-party bridging services, like Across and Hop, help users bridge funds in mere minutes rather than days, but these solutions come with an increased risk of attack compared to protocol-native bridges due to differing fraud-proof processes.</p></div><div class="bloc2"><img src=\'/images/layer-2-blockchains/optimistic-rollups-846aad61.svg\'></div>'
      },
      {
        type: 'QUIZ',
        notionId: 'e5e6e3c66842487aa0c7ad0014dfa893',
        title: '✅ Question',
        quiz: {
          question: 'With Optimistic Rollups, transactions are considered valid until proven otherwise.',
          rightAnswerNumber: 1,
          answers: [
            'True',
            'False'
          ],
          id: 'layer-2-blockchains-4'
        }
      },
      {
        type: 'LEARN',
        notionId: '1f0986b36f304ea79035b2f9c6a7fc52',
        title: 'ZK Rollups',
        content: '<div class="bloc1"><p><code>ZK Rollups</code> are a type of Rollup that relies on Zero-Knowledge technology. Unlike <code>Optimistic Rollups</code>, ZK Rollups confirm the legitimacy of the batched transactions almost immediately, without reliance on certain users to look for evidence of fraud. Instead, these Rollups confirm transactions using complex, computation-heavy mathematical models.</p><p>The major upside to ZK Rollups is the <code>settlement time</code>, also known as <code>transaction finality</code>. Rather than a multi-day settlement period, ZK Rollups enable users to access their funds in under an hour. User privacy is also improved because only the mathematical proof is stored on Mainnet.</p><p>There are some major protocols using ZK Rollup technology to build their Ethereum scaling solutions, including zkSync, StarkNet, and Aztec. It’s still early in terms of development, but has great future potential.</p></div><div class="bloc2"><img src=\'/images/layer-2-blockchains/zk-rollups-9d65de85.svg\'></div>'
      },
      {
        type: 'QUIZ',
        notionId: '2594cf6d735f43f0a092f0eb25e7bc47',
        title: '✅ Question',
        quiz: {
          question: 'Compared to Optimistic Rollups, ZK Rollups:',
          rightAnswerNumber: 2,
          answers: [
            'post more user data to Mainnet.',
            'offer greater privacy and enable faster transaction finality on Mainnet.',
            'perform fewer computations to finalize a transaction.'
          ],
          id: 'layer-2-blockchains-5'
        }
      },
      {
        type: 'LEARN',
        notionId: '236d6e4ed8264dc5af08c7b88434bf92',
        title: 'Cross-chain dApp Compatibility',
        content: '<div class="bloc1"><p>When comparing <code>Optimistic Rollups</code> and <code>ZK Rollups</code>, the main focus for most users is withdrawal times. However, since these withdrawal-lag issues can be resolved by third-party bridges, it shouldn’t be a major consideration when deciding which scaling solution to explore.</p><p>Many Optimistic Rollups are “EVM equivalent”, meaning the L2 natively supports any dApp that can run on the <code>Ethereum Virtual Machine</code> (EVM). EVM equivalence enables deployment of any smart contracts previously deployed on Mainnet - thus allowing L2 users to access their favorite dApps.</p><p>Sidechains and ZK Rollups are not yet fully EVM equivalent. For now this limits the dApp ecosystems of such networks, but also allows for greater experimentation and discovery of new ways to layer dApp experiences on top of Ethereum.</p></div><div class="bloc2"><img src=\'/images/layer-2-blockchains/cross-chain-dapp-compatibility-8a372647.svg\'></div>'
      },
      {
        type: 'QUIZ',
        notionId: 'e77e5c9faacc4b4cbb884c4ae595bcc1',
        title: '✅ Question',
        quiz: {
          question: 'EVM equivalent scaling solutions are able to easily reuse smart contracts deployed on Mainnet.',
          rightAnswerNumber: 1,
          answers: [
            'True',
            'False'
          ],
          id: 'layer-2-blockchains-6'
        }
      },
      {
        type: 'LEARN',
        notionId: 'ae3457f983c9455e9534798226d5bda6',
        title: 'Lesson Recap',
        content: '<div class="bloc1"><p>L1 blockchains like Bitcoin and Ethereum are currently constrained by the <code>Blockchain Trilemma</code>. <code>Payment channels</code> on the Bitcoin network, or sidechains and Rollups on Ethereum, help these networks to scale and ease the Trilemma.</p><p><code>Bridges</code> connect L1 blockchains with <code>sidechains</code> and <code>Rollups</code>, and the way in which the bridge contract functions influences the properties of the connected network.</p><p>Sidechain funds inherit the <code>security</code> of Ethereum via a two-way peg, but the network validates and processes its own transactions. These chains have a small but powerful validator set that allows them to increase transaction speed and lower gas fees, at the cost of decentralization.</p><p>Rollups, like sidechains, also validate and process their own transactions, but their bridge contract requires them to provide “convincing evidence” of transaction validity before the data is considered valid. This allows them to uphold a level of <code>security</code> and <code>decentralization</code> in alignment with Ethereum values. There are two methods for providing this “convincing evidence”: Optimistic Rollups and ZK Rollups. <code>Optimistic Rollups</code> maintain a multi-day delay before settling their transaction rollups on Mainnet, during which time bridge validators detect and report fraud. <code>ZK Rollups</code> provide mathematical assurance of transaction legitimacy, thanks to <code>Zero-Knowledge</code> technology.</p><p>Presently, Optimistic Rollups offer the greatest level of smart contract compatibility with Ethereum Mainnet, enabling dApps from Ethereum Mainnet to easily deploy on their networks. Many believe ZK Rollups will become the scaling solution of the future, thanks to their high levels of privacy and security.</p></div>'
      },
      {
        type: 'LEARN',
        notionId: '166635f09eb1405b8b226734b89116d0',
        title: 'Start Your Layer 2 Journey With Optimism or Base 🙂',
        content: '<div class="bloc1"><p>Optimism and Base, both EVM-equivalent Optimistic Rollups, are great L2s for Explorers to begin with. Using dApps on either chain will feel similar to using L1 dApps, just cheaper and faster — and they both use ETH as gas. Your upcoming quest will serve as the first step in your journey on Optimism or Base!</p><p>This improved functionality isn’t the only reason these networks are great scaling solutions for Bankless Explorers. Both ecosystems are deeply influenced by Ethereum values, with Optimism even allocating a portion of its transaction fees to <a href=\'https://optimism.mirror.xyz/wqk1Yeyn2OhV9paDzbRXvQ0m0JYDu2npbSkMClwk1rY\'>retroactively fund public goods</a> that add value to the ecosystem. It’s like a digital country that regularly and transparently funds on-chain infrastructure, such as free education from Bankless Academy, for everyone.</p><p>Optimism and Base aren’t just platforms relying on Optimistic Rollups—they represent the power of blockchain technology to solve existing problems and explore new ways of transacting and coordinating together. And that should make us all optimistic. 🙂</p></div><div class="bloc2"><img src=\'/images/layer-2-blockchains/start-your-layer-2-journey-with-optimism-or-base--54a0f80a.svg\'></div>'
      },
      {
        type: 'QUEST',
        title: 'Layer 2 Blockchains Quest',
        component: 'Layer2Blockchains'
      }
    ]
  },
  {
    badgeImageLink: null,
    lessonImageLink: '/images/funding-a-wallet-on-layer-2/lesson-dcf41ef6.png',
    socialImageLink: '/images/funding-a-wallet-on-layer-2/social-4bb4ca84.png',
    learningActions: '',
    marketingDescription: 'Learn how to fund your wallet on L2 via CEXs, third-party onramps, and bridges.',
    badgeId: null,
    collectibleId: 'H001',
    duration: 5,
    learnings: '',
    description: 'Learn how to fund your wallet on L2 via CEXs, third-party onramps, and bridges.',
    name: 'Funding a Wallet on Layer 2',
    languages: [],
    level: 'Level 1',
    tags: [
      'Optimism'
    ],
    lessonWriters: 'HiroKennelly',
    publicationStatus: 'publish',
    publicationDate: '2023-02-22',
    featuredOrderOnHomepage: null,
    isCommentsEnabled: false,
    endOfLessonRedirect: null,
    mirrorLink: 'https://mirror.xyz/banklessacademy.eth/zLajMWXQC44H4uQOXK5j9ROZhuC3xwgoddLtAQQo0k0',
    mirrorNFTAddress: '0x235f3dfe5106f137d8b137c1b7fa115076e8b476',
    areMirrorNFTAllCollected: true,
    sponsorName: 'Optimism',
    sponsorLogo: '/images/funding-a-wallet-on-layer-2/sponsor-6ad00b37.png',
    isArticle: true,
    notionId: '111a71126d5a4092b79a7c6981e05270',
    englishName: 'Funding a Wallet on Layer 2',
    slug: 'funding-a-wallet-on-layer-2',
    articleContent: '## Key Takeaways\n\n> * There are a number of ways to fund your wallet on an Ethereum scaling solution like Optimism, Arbitrum, or Polygon.\n>\n> * Centralized exchanges often provide a direct Layer 2 onramp.\n>\n> * Third-party payment apps enable users to fund a wallet on Layer 2 from a bank account or a debit or credit card.\n>\n> * Protocol bridges let users send funds from Ethereum Mainnet to Layer 2.\n\nIf you’re new to crypto, all the talk about the importance of `Layer 2` (or L2) must seem a bit odd, confusing really. In contrast to [Layer 1](https://app.banklessacademy.com/lessons/layer-1-blockchains), which often refers to [Ethereum Mainnet](https://ethereum.org/), Layer 2 is a term for a specific type of Ethereum scaling solution that enables users to inherit the security of Ethereum but enjoy low transaction fees and fast `block` inclusion times. If you’ve ever heard of [Optimism](https://www.optimism.io/), [Arbitrum](https://arbitrum.io/), or [Polygon](https://polygon.technology/) (which is really a side chain, but let’s not worry about that here), those are Layer 2 scaling solutions.\n\nWhen the Ethereum network is busy, it can cost the equivalent of 80 USD in transaction fees — known as `gwei` or gas — to swap tokens, and much more to mint NFTs or provide `liquidity` to a `decentralized exchange` (DEX) on Mainnet. When network activity is low, most transactions on Ethereum Mainnet still cost a few dollars, and it takes an [FTX-level debacle](https://www.investopedia.com/ftx-exchange-5200842) or a [beyond-hyped NFT drop](https://dappradar.com/blog/yuga-labs-600m-otherside-nft-land-sale-records-highest-gas-fees-ever-on-ethereum) to really spike transaction fees.\n\nBecause transactions on Layer 2 confirm quickly and are inexpensive to execute, many of the most innovative protocols are building on L2s. Unless you’ve been in the ecosystem for a while, however, it’s not intuitive to know how to start using Layer 2s. But there is a clear place to begin your journey into Ethereum scaling solutions: funding your `wallet` on Layer 2.\n\nThere are three main ways to fund an L2 wallet: moving your crypto from a `centralized exchange` straight to a Layer 2 network, using a third-party crypto payment service to fund an L2 wallet, or sending your digital assets from Mainnet to L2 via a bridging protocol.\n\n> Please note, you’ll need to have a cryptocurrency wallet, like [MetaMask](https://metamask.io/) or [Tally Ho](https://tallyho.org/), and an Ethereum wallet `address` to proceed. If you haven’t yet created a `non-custodial wallet`, please [take this lesson first](https://app.banklessacademy.com/lessons/wallet-basics)!\n>\n> After you have a non-custodial Ethereum wallet address, you’ll be ready to continue on your crypto journey.\n\n## Funding From CEXs\n\nFunding your wallet directly from a centralized exchange (CEX) is perhaps the simplest way to move digital assets to an L2, particularly if you already hold cryptocurrency on the exchange. Most major CEXs offer users this option, although it isn’t always clear to the user.\n\nOn [Coinbase](https://www.coinbase.com/), for example, users can send their funds directly to Optimism or Polygon in just a few steps:\n\n1\. Go to [Coinbase](https://www.coinbase.com/).\n\n2\. [Purchase](https://help.coinbase.com/en/coinbase/trading-and-funding/buying-selling-or-converting-crypto/how-do-i-buy-digital-currency) or hold ETH on Coinbase.\n\n3\. Select ‘Send & Receive’, located at the top of the website.\n\n![](/images/funding-a-wallet-on-layer-2/image-06c6d84b.png)\n\n4\. Enter the amount in fiat or ETH you wish to send (you can toggle between fiat and crypto to the right of the amount), select ‘Pay with’ and choose Ethereum, and in the ‘To’ field, enter the wallet address where the funds will be sent. Select ‘Continue’.\n\n![](/images/funding-a-wallet-on-layer-2/image-11e1d7f9.png)\n\n5\. On the next screen, select ‘Network’ and change the network from Ethereum to Optimism.\n\n![](/images/funding-a-wallet-on-layer-2/image-c8d4dd72.png)\n\n6\. Review, and if accurate, select ‘Send Now’.\n\n![](/images/funding-a-wallet-on-layer-2/image-9598ee73.png)\n\nMost major exchanges offer users the ability to send their crypto directly to an L2. [Binance](https://www.binance.com/) supports Optimism and Arbitrum, for example. On whatever centralized exchange you convert fiat to crypto, check to see whether it offers support for direct-to-L2 services. Pro Tip: Use [Blockscan](https://blockscan.com/exchanges) to find the exchange compatible with your preferred L2.\n\n## Third-Party Onramps\n\nAnother simple way to fund your L2 wallet is to take advantage of direct-to-L2 services offered by many third-party crypto payment companies. [MoonPay](https://www.moonpay.com/), [Ramp](https://ramp.network/buy/), and [Transak](https://global.transak.com/) are three of the most popular options to fund crypto wallets without having to use a centralized exchange.\n\nLike most exchanges, these third-party onramps will require you to provide Know-Your-Customer information. However, once you get past those basic hurdles, these payment options are an easy way to buy crypto across the ecosystem and transfer it to Layer 2.\n\nFor MoonPay, the steps are:\n\n1\. Go to [MoonPay](https://www.moonpay.com/).\n\n2\. Select ‘Buy crypto’, located at the top or middle of the website.\n\n![](/images/funding-a-wallet-on-layer-2/image-4f0d6a11.png)\n\n3\. Enter the amount of fiat you wish to send and the proper denomination.\n\n![](/images/funding-a-wallet-on-layer-2/image-386958ca.png)\n\n4\. Select a digital asset, in this case ETH. Type in “ETH\'“ and you will see different networks on which you can purchase ETH (you may need to scroll down); choose the Layer 2 you want to use. Click ‘Continue’.\n\n![](/images/funding-a-wallet-on-layer-2/image-fe6487dc.png)\n\n5\. Next, you will be prompted to enter personal verification and payment data.\n\n6\. Once complete, enter your Ethereum wallet address. You’ll be asked to make sure the wallet is safe to use.\n\n![](/images/funding-a-wallet-on-layer-2/image-138ee98b.png)\n\n7\. Complete, confirm the information is correct, and select ‘Pay’.\n\n![](/images/funding-a-wallet-on-layer-2/image-99952ff9.png)\n\nAs with CEXs, most major third-party payment onramps provide direct-to-L2 functionality. Take advantage of these innovations to save on transaction fees and increase the range of your `blockchain` explorations.\n\n## Funding Via Bridges\n\nIf you already have funds on Ethereum Mainnet, by far the easiest way to get your crypto on to L2 is to use a bridging protocol. Bridges are the name we’ve given to protocols designed to help us move our funds around the cryptoverse, and there are a number of bridges designed to move crypto from Ethereum Mainnet to Layer 2s.\n\n### Native Bridges\n\nNative bridges are those designed by the Layer 2 protocols themselves. For true Layer 2 scaling solutions like Arbitrum and Optimism, it takes about 30 minutes to move funds onto L2, but one week to move that crypto back over to Mainnet. The [Arbitrum Bridge](https://bridge.arbitrum.io/) and the [Optimism Bridge](https://app.optimism.io/bridge/) both take longer to transfer assets and settle transactions because of the way the scaling solution is designed.\n\n### Third-Party Bridges\n\nBecause no one likes to wait, a number of third-party bridging services exist to help us move our funds instantly to and from L2s. Among the most popular options are [Hop Protocol](https://app.hop.exchange/) and [Across Protocol](https://across.to/bridge), but you can use [Bungee](https://bungee.exchange/) to compare bridging fees across a number of protocols. To use Across, for example, all you need to do is:\n\n1\. Go to the [Across Protocol](https://across.to/bridge) bridge and connect your wallet.\n\n2\. To bridge funds to L2, select Ethereum under ‘From’.\n\n![](/images/funding-a-wallet-on-layer-2/image-0f4e1bde.png)\n\n3\. Choose your asset and the amount you wish to bridge (Pro Tip: only bridge a blockchain’s native `coin`, in this case ETH).\n\n![](/images/funding-a-wallet-on-layer-2/image-659f509f.png)\n\n4\. Next, select your L2 solution in ‘To’.\n\n![](https://mirror.xyz/\_next/image?url=https%3A%2F%2Fimages.mirror-media.xyz%2Fpublication-images%2FMnz8fWPFIGGQp25RA6FKt.png&w=3840&q=90)\n\n5\. Review the transaction, and if all looks correct, select ‘Send’.\n\n![](/images/funding-a-wallet-on-layer-2/image-8d84ca0b.png)\n\nMoving funds from Mainnet to L2 is really that simple, and nearly all bridges work the same way. Select a blockchain to send funds from and your destination, pick an asset and amount, and across the blockchain crevice you go. Pro Tip: As with sending from a CEX, you can use [Blockscan](https://blockscan.com/bridges) to find a compatible bridge for your L2 destination.\n\n## The Road to L2\n\nLayer 2s offer users of all experience levels the opportunity to experiment with decentralized finance in a way that is often prohibitive on Mainnet. Because it costs mere pennies to transact on these networks (you can compare costs [here](https://l2fees.info/)), it’s a great place to become familiar with the basic building blocks of decentralized finance, such as swaps, `liquidity pools`, or yield farms.\n\nUsing a CEX or a bridge to move funds to L2 is a necessary step in your journey from crypto novice to crypto competency. Remember, to see your funds displayed in your wallet, you may need to add the network in your wallet settings, which can be done at [Chainlist](https://chainlist.org/). If you just want to check that the funds made it safely to your L2 wallet, you can also check Etherscan (click on the ‘b’ for ‘Blockscan’ to the right of your wallet address to see L2 transactions) or go to a DEX, like [Uniswap](https://app.uniswap.org/), and select the L2 network and the asset to see your balance.\n\nAs you scale up your skills, you’ll need to figure out how to scale down your transaction fees. Learning how to fund an L2 wallet is the first step, but the next steps on your crypto journey are up to you. Welcome, explorer, a new world awaits.\n\n\n---\n\nLet’s get moving, Layer 2 Ethereum awaits! We hope you’ve enjoyed this entry in the Explorer’s Handbook: ‘Funding a Wallet on Layer 2’.\n\nDon’t forget to collect this entry if you want to own a copy for easy reference on your travels, or to support future content at Bankless Academy. Safe travels, Explorer!\n\n\n***\n\n**Author**\n\n**[Hiro Kennelly](https://twitter.com/HiroKennelly)** is a writer, editor, and coordinator at BanklessDAO and the Editor-in-Chief at Good Morning News. He is also helping to build a grants-focused organization at DAOpunks.\n\n**Editor**\n\n**[Trewkat](https://twitter.com/trewkat)** is a writer and editor at BanklessDAO. She’s interested in learning as much as possible about crypto and NFTs, with a particular focus on how best to communicate this knowledge to others.\n\n**Patron**\n\nThis article was funded by **[Optimism](https://www.optimism.io/)**.',
    imageLinks: [
      '/images/funding-a-wallet-on-layer-2/image-06c6d84b.png',
      '/images/funding-a-wallet-on-layer-2/image-11e1d7f9.png',
      '/images/funding-a-wallet-on-layer-2/image-c8d4dd72.png',
      '/images/funding-a-wallet-on-layer-2/image-9598ee73.png',
      '/images/funding-a-wallet-on-layer-2/image-4f0d6a11.png',
      '/images/funding-a-wallet-on-layer-2/image-386958ca.png',
      '/images/funding-a-wallet-on-layer-2/image-fe6487dc.png',
      '/images/funding-a-wallet-on-layer-2/image-138ee98b.png',
      '/images/funding-a-wallet-on-layer-2/image-99952ff9.png',
      '/images/funding-a-wallet-on-layer-2/image-0f4e1bde.png',
      '/images/funding-a-wallet-on-layer-2/image-659f509f.png',
      '/images/funding-a-wallet-on-layer-2/image-8d84ca0b.png'
    ],
    keywords: [
      'Layer 2',
      'block',
      'gwei',
      'liquidity',
      'decentralized exchange',
      'wallet',
      'centralized exchange',
      'address',
      'non-custodial wallet',
      'blockchain',
      'coin',
      'liquidity pools'
    ]
  },
  {
    badgeImageLink: null,
    lessonImageLink: '/images/registering-your-web3-username/lesson-817f2737.png',
    socialImageLink: '/images/registering-your-web3-username/social-8ce7fa9d.png',
    learningActions: '',
    marketingDescription: 'Customize your wallet address with ENS, start building your digital identity.',
    badgeId: null,
    collectibleId: 'H009',
    duration: 5,
    learnings: '',
    description: 'Customize your wallet address with ENS, start building your digital identity.',
    name: 'Registering Your Web3 Username',
    languages: [],
    level: 'Level 1',
    tags: [
      'ENS'
    ],
    lessonWriters: 'estmcmxci, Tetranome',
    publicationStatus: 'publish',
    publicationDate: '2024-04-08',
    featuredOrderOnHomepage: null,
    isCommentsEnabled: false,
    endOfLessonRedirect: null,
    mirrorLink: 'https://mirror.xyz/banklessacademy.eth/2C31DMdOv4dGL1-bkM3nXn8pjc8X9jTGiTVRhMoPizE',
    mirrorNFTAddress: '0xd94ecc2f45d7346975f2437c789b3e2e32c397ca',
    areMirrorNFTAllCollected: false,
    isArticle: true,
    notionId: 'd862b38d9f104039b84a67c4f51399dd',
    englishName: 'Registering Your Web3 Username',
    slug: 'registering-your-web3-username',
    articleContent: '## Key Takeaways\n\n> * Using the Ethereum Name Service (ENS), you can create a single username that represents you across multiple blockchains.\n>\n> * ENS names simplify sending and receiving `cryptocurrency` by replacing your lengthy wallet address with a memorable label like *web3explorer.eth*\n>\n> * Your ENS names become associated with your online presence: your cryptocurrency portfolio, your blockchain interactions, social media pages, avatars, websites, and emails, forming a single `onchain identity`.\n>\n> * Registering an ENS name is similar to registering a .com website address. It requires a `cryptocurrency wallet` and 10 minutes.\n\n## Introducing Universal Usernames\n\nImagine having a single username for the entire internet. One account for your entire online presence — an account that you own and plug into other apps across the internet. This username would serve as your digital personality, allowing you to be recognized across the internet, making you a unique, memorable member of the online community.\n\nProjects like the [Ethereum Name Service (ENS)](https://ens.domains) are building this single username reality, leveraging the powers of cryptocurrency wallets. Using ENS, your `custodial wallet` address can be transformed into a personalized address of your choosing, with a `.eth` extension.\n\n*0xB00e26E79352882391604E24b371A3F3c8658e8c* → *web3explorer.eth*\n\n![](/images/registering-your-web3-username/image-c7baff43.png)\n\nJust like a .com website address, it’s easy to read, memorable, and personalized to you. No matter where on the internet you are, your name will be consistent and recognizable. Sending `cryptocurrency` to your wallet no longer requires saving, copying and pasting a lengthy address.\n\nAnd this is just the beginning.\n\n> *Originally we envisioned ENS as a naming system to name crypto addresses.. (but) as web3 users, the meaning of an address is so much more, it can be your Farcaster id, your crypto payment address, a DAO contract and more.*\n>\n> *The use cases of web3 are expanding and if we want the next billion people to be onboarded onto web3, it needs to be usable. When all these things are properly named, web3 becomes usable, it becomes human.*\n>\n> *ENS makes web3 human.*\n>\n> *— Jefflau.eth, Core Developer at ENS Labs*\n\nBy linking your wallet address to a unique .eth username, you’ve actually created a web3 personality with the ownership powers of a custodial wallet. ENS names can support wallets across multiple networks. One universal name is now linked to your digital property across blockchains, your blockchain history, and more. This includes any special credentials you may have unlocked — **like your Bankless Academy badges.**\n\n![](/images/registering-your-web3-username/image-c55c7950.png)\n\n## Onchain Identity\n\nThe capabilities of ENS extend beyond labelling wallet addresses; ENS can label almost any entity or asset on the blockchain, like a `smart contract`, and point to any location on the `web2` internet. Your website, social media profiles, and email can all be associated with this single username.\n\n![](/images/registering-your-web3-username/image-7086002e.png)\n\nPicture ENS as **your onchain passport**. A physical passport contains your name, photo, birth date, and passport number, linking to extensive information in your government’s identity database. ENS maps your .eth domain (`yourname.eth`) with an Ethereum address, a profile picture, `onchain` data like trades and governance votes, and `offchain` data like your website.\n\nHere’s the key difference: You own and control all aspects of this onchain passport.\n\nENS names are represented as NFT tokens (`ERC-721` tokens) on the Ethereum blockchain, which are owned by and managed through your custodial wallet — **just like cryptocurrency.** In web3, you can truly own your online identity and carry it with you around the internet. Your account — its data, content, followers etc. — can’t be erased by the platforms you use. We’re moving beyond the control of YouTube, Instagram, and the other web2 giants managing the internet community.\n\n![](/images/registering-your-web3-username/image-073b8d76.png)\n\nLet’s take a look at how our ENS names plug into onchain apps, starting with the Bankless Academy ‘Explorer Profile’ feature. As a Bankless Academy user with an ENS name, you will automatically find your ENS name and profile picture represented on [your profile](https://app.banklessacademy.com/explorer/my-profile). This information is displayed alongside your Academy achievements — like lesson badges and collected content.\n\n![](/images/registering-your-web3-username/image-09c3d858.png)\n\nAnother example is Farcaster, a decentralized social network. Instead of requiring users to create a new social account, it allows them to connect their wallet and leverage their existing ENS name along with its associated data. This approach enriches the Farcaster social graph with existing information, showcasing practicality of ENS in decentralized identity management.\n\n> **Fun fact:** As of this writing, ENS has registered nearly 2,070,797 domains, as per [Dune Analytics data](https://dune.com/ethereumnameservice/ens). That’s close to the population of Houston, Texas. 🐂\n\nIt\'s time to become an onchain citizen and shape our decentralized future. It’s time to register your ENS name. We\'ll guide you through the process, helping you to unlock its key features, including assigning your profile picture for visibility across numerous onchain apps like Bankless Academy.\n\nThe process is very similar to registering a .com website address on a platform like GoDaddy or Google Domains. It’s as simple as choosing a unique name and submitting two blockchain transactions.\n\n## Prerequisites\n\n**1\. Create a Crypto Wallet**\n\nTo buy and hold your ENS name, you\'ll need to set up a wallet if you haven\'t already done so. Check out our quick guide, [‘Creating a Crypto Wallet’](https://app.banklessacademy.com/lessons/creating-a-crypto-wallet), and create your wallet in 5 minutes.\n\n**2\. Ensure You Have ETH in Your Wallet on the Ethereum Mainnet**\n\nYou can fund your wallet by sending cryptocurrency from a Centralized Exchange, or by using services like [Moonpay](https://www.moonpay.com/en-gb) or [Transak](https://global.transak.com/). As another option, you can also pay for an ENS name using a credit or debit card.\n\n## Walkthrough\n\n**1\. Open the [ENS Manager App](https://app.ens.domains/)** **and connect your wallet.**\n\n![](/images/registering-your-web3-username/image-2297867c.png)\n\n**2\. Search for and select your desired name.**\n\n![](/images/registering-your-web3-username/image-4d71d393.png)\n\n**3\. Choose the duration of your registration.**\n\nYou’ll need to periodically renew your ENS name. Be sure to set a reminder in your personal calendar to notify you before it expires.\n\n![](/images/registering-your-web3-username/image-0e183437.png)\n\n**4\. Select your payment method.**\n\nYou can use the balance in your Ethereum wallet, or pay with a credit/debit card.\n\n**Optional:** Set your domain as your `primary name` during this phase. This means your ENS name and profile picture will be displayed instead of your lengthy wallet address on Bankless Academy, Farcaster and other ENS-supported platforms.\n\n![](/images/registering-your-web3-username/image-91795816.png)\n\n**5\. Review the upcoming registration steps.**\n\n![](/images/registering-your-web3-username/image-d312b342.png)\n\n**6\. Start the 60 second timer by signing the first transaction.**\n\nThis first transaction prevents others from `front-running` your registration process.\n\n![](/images/registering-your-web3-username/image-a8bece69.png)\n\n![](https://images.mirror-media.xyz/publication-images/Gz4ZTiKop-ncbvPL3yjXz.png?height=1127&width=1440)\n\n**7\. Wait for the timer to finish.**\n\n![](/images/registering-your-web3-username/image-0f779c34.png)\n\n**8\. Sign the second transaction.**\n\nThis is the transaction that will secure ownership of your new ENS name, and send it to your wallet.\n\n![](/images/registering-your-web3-username/image-b83971f6.png)\n\n**9\. Success!**\n\nYour ENS name will now be represented as an `ERC-721` token in your wallet.\n\n![](/images/registering-your-web3-username/image-ea2d6d2a.png)\n\nYou can verify that your ENS name redirects to your wallet address by visiting <https://etherscan.io/> and entering your ENS name in the address search bar; note that this process might take a few minutes. Once this is working, your ENS name is ready to be shared with your friends and plugged into Ethereum apps.\n\nFor more ways to utilize your new ENS name, don\'t forget to check out the ‘Frequently Asked Questions’ section below!\n\n\n---\n\n## Conclusion\n\nBy registering your web3 username, you are embracing self-sovereignty on the decentralized web, moving towards a future where you alone own your onchain identity. ENS serves as both your web3 username and wallet address, marking your presence in the digital realm. It integrates seamlessly with onchain apps, reflecting and building your identity with every transaction.\n\nYour onchain identity, once established, is solely under your custody, and it is your responsibility to ensure its renewal. The adoption of ENS is key in shaping a user-empowered internet, free from abuses of authority. With ENS, each interaction on the decentralized web is a testament to your unique onchain persona.\n\n\n---\n\nIt’s time to take control of your onchain identity, with ENS. We hope you’ve enjoyed this entry in the Explorer’s Handbook: ‘Registering Your Web3 Username’.\n\nDon’t forget to collect this entry if you want to own a copy for easy reference on your travels, or to support future content at Bankless Academy. Safe travels, Explorer!\n\n\n---\n\n## Frequently Asked Questions\n\n### **What is a Primary Name?**\n\nYour `primary name` functions as a nickname for your onchain wallet address, simplifying your complex Ethereum wallet address. By assigning a primary name, you allow various apps to use and display it, along with your profile picture. [Learn more here](https://support.ens.domains/en/articles/7890756-the-primary-name#)!\n\n### **Can I link my email, website, or social media to my ENS name?**\n\nYes, absolutely! Just as your passport can hold different details about you, your ENS name can link to a variety of personal data. This includes your email, personal website, profile picture, and social media handles.\n\nThese `standard records` allow you to publicly share your contact information in a decentralized way. They’re stored onchain and accessible via any application that recognizes ENS names.\n\nFor a beginner-friendly guide on setting records for your ENS name and what each type of record could be used for, please refer to this [article](https://support.ens.domains/en/articles/7890802-set-a-record).\n\n### **How much does it cost to register an ENS Name?**\n\nCurrently, the registration costs for ENS names are set at the following prices:\n\n* Names with 5 or more characters: $5 in ETH per year.\n\n* Names with 4 characters: $160 in ETH per year.\n\n* Names with 3 characters: $640 in ETH per year.\n\nThis doesn’t include transaction `gas fees` for interacting with the Ethereum Network, which are roughly estimated in the [ENS Manager App](https://app.ens.domains/). Additional gas fees are required for onchain data updates like setting `custom records`. Prices for shorter names are higher due to scarcity. Fees deter speculative registrations and support the DAO\'s development of ENS.\n\n### Can I connect multiple wallet addresses with a single ENS name?\n\nAbsolutely! Your ENS name can either map several wallet addresses to a single ENS name, like \'yourname.eth\', or you can sort your addresses into separate subnames to identify the type of cryptocurrency associated with each, like \'ethereum.yourname.eth\' or \'bitcoin.yourname.eth\'.\n\nYou can set up either option using the [ENS Manager App](https://ens.app). For more details, [refer to this guide for step-by-step instructions](https://support.ens.domains/en/articles/7900302-ens-use-cases)\n\n### Can I use my existing website address as my ENS name?\n\nYes, if you own a website like [web3explorer.com](http://web3explorer.com), you can use this instead of web3explorer.eth. This is thanks to infrastructure co-built by ENS and GoDaddy.\n\nTo learn more, check out ENS Labs’ [blog post](https://blog.ens.domains/post/godaddy-partners-with-ens).\n\n\n---\n\n**Authors**\n\n**[Marcus](https://twitter.com/estmcmxci)** publishes the ENS DAO Newsletter. He researches how surplus revenue generated from protocol fees can subsidize application layer development and other open source infrastructure.\n\n**[Tetranome](https://twitter.com/Tetranome)** is the Content & Design Lead at Bankless Academy, focusing on the learning journey, user interface & experience, and platform artwork.\n\n**Patron**\n\nThis walkthrough is powered by Bankless Academy.',
    imageLinks: [
      '/images/registering-your-web3-username/image-c7baff43.png',
      '/images/registering-your-web3-username/image-c55c7950.png',
      '/images/registering-your-web3-username/image-7086002e.png',
      '/images/registering-your-web3-username/image-073b8d76.png',
      '/images/registering-your-web3-username/image-09c3d858.png',
      '/images/registering-your-web3-username/image-2297867c.png',
      '/images/registering-your-web3-username/image-4d71d393.png',
      '/images/registering-your-web3-username/image-0e183437.png',
      '/images/registering-your-web3-username/image-91795816.png',
      '/images/registering-your-web3-username/image-d312b342.png',
      '/images/registering-your-web3-username/image-a8bece69.png',
      '/images/registering-your-web3-username/image-0f779c34.png',
      '/images/registering-your-web3-username/image-b83971f6.png',
      '/images/registering-your-web3-username/image-ea2d6d2a.png'
    ],
    keywords: [
      'cryptocurrency',
      'onchain identity',
      'cryptocurrency wallet',
      'custodial wallet',
      '.eth',
      'smart contract',
      'web2',
      'yourname.eth',
      'onchain',
      'offchain',
      'ERC-721',
      'primary name',
      'front-running',
      'standard records',
      'gas fees',
      'custom records'
    ]
  },
  {
    badgeImageLink: '/images/intro-to-defi/badge-b4dab2d4.png',
    lessonImageLink: '/images/intro-to-defi/lesson-97291c9d.png',
    socialImageLink: '/images/intro-to-defi/social-ee8d95a4.jpg',
    learningActions: 'Transfer crypto into your web3 wallet in order to be ready to interact with DeFi later',
    marketingDescription: 'Move beyond centralized exchanges and start exploring the ever-expanding possibilities of decentralized finance.',
    badgeId: 2,
    duration: 10,
    learnings: '',
    difficulty: 'Easy',
    description: 'Understand the basics of decentralized finance.',
    name: 'Intro to DeFi',
    languages: [],
    level: 'Level 1',
    tags: [
      'DeFi'
    ],
    lessonWriters: 'Ap0ll0',
    quest: 'IntroToDeFi',
    publicationStatus: 'publish',
    publicationDate: '2022-02-11',
    featuredOrderOnHomepage: null,
    isCommentsEnabled: false,
    endOfLessonRedirect: null,
    notionId: '409cd6ada1bd4ba7aa30f86239c98753',
    englishName: 'Intro to DeFi',
    slug: 'intro-to-defi',
    imageLinks: [
      '/images/intro-to-defi/defi-defined-759c5922.svg',
      '/images/intro-to-defi/earning-yield-bc952747.svg',
      '/images/intro-to-defi/what-you-can-do-with-defi-e1e865b5.svg',
      '/images/intro-to-defi/investing-7c8b44ed.svg',
      '/images/intro-to-defi/trading-67935721.svg',
      '/images/intro-to-defi/lending-borrowing-b7d58dfa.svg',
      '/images/intro-to-defi/staking-8dbafcb8.svg',
      '/images/intro-to-defi/defi-downsides-da1fdb68.svg',
      '/images/intro-to-defi/defi-downsides-d533aeef.svg',
      '/images/intro-to-defi/defi-downsides-0070f0e1.svg'
    ],
    keywords: [
      'decentralized',
      'blockchain',
      'defi',
      'permissionless',
      'dapps',
      'liquidity pools',
      'wallets',
      'peer-to-peer'
    ],
    slides: [
      {
        type: 'LEARN',
        notionId: 'a83bc134efdc45d99f84ea134bd73f05',
        title: 'DeFi Defined',
        content: '<div class="bloc1"><p>DeFi—short for <code>decentralized</code> finance—refers to the fast-growing ecosystem of financial products, protocols, and applications that operate on public <code>blockchain</code> networks.</p><p>DeFi is rapidly transforming the world of finance with a range of new tools for putting crypto assets to work. It offers opportunities beyond simply buying crypto on a centralized exchange. It allows anyone and everyone to build a decentralized, Bankless lifestyle.</p></div><div class="bloc2"><img src=\'/images/intro-to-defi/defi-defined-759c5922.svg\'></div>'
      },
      {
        type: 'LEARN',
        notionId: 'cced9d9d29ca4c6bb30b299e0752f9f5',
        title: 'Why DeFi?',
        content: '<div class="bloc1"><p>DeFi gives anyone with an internet connection access to sophisticated financial tools: Trading, Options, Lending and Borrowing.</p><p>DeFi offers these tools to users transparently and openly. Anyone can look at the code and verify that the contract does what it says it does, unlike what banks do with your money behind closed doors.</p><p>There are no middlemen to intermediate or take a cut of your transactions.</p></div>'
      },
      {
        type: 'QUIZ',
        notionId: '38047b3853c042e7a533087ba0f144cb',
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
        notionId: 'fd76b66007fd453495cb9b74ebd729ed',
        title: 'Earning Yield',
        content: '<div class="bloc1"><p>There are a growing number of <code>DeFi</code> protocols that enable you to earn interest and other rewards by using your crypto assets. You can have access to financial products that you would typically need a bank or financial services firm to get—but without the paperwork, middleman, approval process, and other hassles of the traditional finance world.</p><p>By removing the middleman, you also remove any service fees, dues, and commissions you would typically pay in the traditional finance world. With DeFi, you get to keep all the rewards, or yield earned from your assets. This is why DeFi is popular. </p></div><div class="bloc2"><img src=\'/images/intro-to-defi/earning-yield-bc952747.svg\'></div>'
      },
      {
        type: 'QUIZ',
        notionId: '3a3c104d035b47deaa096f522d99a610',
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
        notionId: 'b6bca63d7f73486eacb60d6123cb2876',
        title: 'What You Can Do With DeFi',
        content: '<div class="bloc1"><p><code>DeFi</code> transactions are <code>permissionless</code>. This refers to a public <code>blockchain</code> that anyone can use to buy, sell, or trade assets. No third party controls or oversees activity. These transactions are carried out by decentralized applications, known as DApps. </p><p><code>DApps</code> and DeFi platforms enable users to make more and more types of financial transactions, 24/7, all over the world. We will introduce four of the most common opportunities used to earn yield in DeFi - investing, trading, lending and borrowing, and staking.</p></div><div class="bloc2"><img src=\'/images/intro-to-defi/what-you-can-do-with-defi-e1e865b5.svg\'></div>'
      },
      {
        type: 'QUIZ',
        notionId: '889ab319653d48ba9e926cd52cefa4c8',
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
        notionId: '5a2d7fb95b7248d38a6bf1fd4053fe45',
        title: 'Investing',
        content: '<div class="bloc1"><p>The most common <code>DeFi</code> transaction is to purchase some cryptocurrency with the expectation that it will be worth more in the future. This is known as investing.</p><p>HODL is a term used for keeping crypto assets for a long time. Depending on who you ask, the HODL meme either comes from a typo of HOLD or it stands for <strong>H</strong>old <strong>O</strong>n for <strong>D</strong>ear <strong>L</strong>ife.</p><p>DeFi allows early access to coins and tokens to find and invest in, before they are listed on centralized exchanges (CEX).</p></div><div class="bloc2"><img src=\'/images/intro-to-defi/investing-7c8b44ed.svg\'></div>'
      },
      {
        type: 'QUIZ',
        notionId: '262ad86832024af0ad8c4551b90bfe3e',
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
        notionId: '80542f305eba491a9708c26e3c589208',
        title: 'Trading',
        content: '<div class="bloc1"><p>A decentralized exchange (DEX) shows current exchange rates between different crypto tokens and coins and serves as a digital marketplace that facilitates trading one currency for another by bringing together buyers and sellers. </p><p>The parties involved in a DEX trade don’t need to know or trust each other. In fact, it may appear that you are trading with the DEX. However, in most cases, the DEX creates <code>liquidity pools</code> that facilitate the trade between two traders’ <code>wallets</code> in a <code>permissionless</code> fashion.</p></div><div class="bloc2"><img src=\'/images/intro-to-defi/trading-67935721.svg\'></div>'
      },
      {
        type: 'LEARN',
        notionId: 'cd076f09d9cb49d8a4aea8ab8aa83a34',
        title: 'So What?',
        content: '<div class="bloc1"><p>Anyone can trade and participate in markets regardless of your net asset worth. Anyone can enter or exit a position via on-chain protocols.</p></div>'
      },
      {
        type: 'QUIZ',
        notionId: '57033e0ecc71486bb00d00537b13a7a6',
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
        notionId: '2c2ea5e9dd49405a9281d06303b3d709',
        title: 'Lending & Borrowing',
        content: '<div class="bloc1"><p>DeFi lending and borrowing offers loans without the need for a bank or intermediary institution. Instead, lending is done on a <code>peer-to-peer</code> level. That means transactions are between two parties and does not require a middleman or controlling entity.</p><p>There are <code>DApps</code> that enable anyone to lend and borrow crypto assets. Similar to traditional loans, a lender will earn interest on the loan and the borrower will need to pay the principal of the loan plus interest.</p></div><div class="bloc2"><img src=\'/images/intro-to-defi/lending-borrowing-b7d58dfa.svg\'></div>'
      },
      {
        type: 'QUIZ',
        notionId: '7b23f53bcb0b452b8a57ae31dbbe0e04',
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
        notionId: 'a2fd7286556c442e9ba63aecd83a2f0a',
        title: 'Staking',
        content: '<div class="bloc1"><p>DeFi staking is similar to lending, however it\'s a special type of lending. Instead of lending your crypto to another user on a <code>peer-to-peer</code> basis, you lend your crypto to a network or protocol. In exchange for helping secure the network or protocol, you earn rewards.</p><p>Centralized exchanges also offer staking. However, like their trading pairs, the staking opportunities and rewards are limited. With DeFi, there are many more staking possibilities than there are with centralized exchanges. </p></div><div class="bloc2"><img src=\'/images/intro-to-defi/staking-8dbafcb8.svg\'></div>'
      },
      {
        type: 'QUIZ',
        notionId: 'f866ee130ec84dfe8aa2b2d17b70d14e',
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
        notionId: 'b58bcae51ef24191a284b20a65a1081a',
        title: 'DeFi Downsides',
        content: '<div class="bloc-ab"><div class="bloc-a"><img src=\'/images/intro-to-defi/defi-downsides-da1fdb68.svg\'></div><div class="bloc-b"><p><strong>Hackers</strong></p><p>Where there is money and technology, there are people looking for ways to hack the system and take advantage of poor security measures.</p></div></div><div class="bloc-ab"><div class="bloc-a"><img src=\'/images/intro-to-defi/defi-downsides-d533aeef.svg\'></div><div class="bloc-b"><p><strong>Risk</strong></p><p>DeFi, like blockchain technology, runs on code. If there’s an error or loophole in the code, it can be exploited.</p></div></div><div class="bloc-ab"><div class="bloc-a"><img src=\'/images/intro-to-defi/defi-downsides-0070f0e1.svg\'></div><div class="bloc-b"><p><strong>No recourse</strong></p><p>Being decentralized also means there are no companies or government agencies that you can appeal to for help if something goes wrong.</p></div></div>'
      },
      {
        type: 'QUIZ',
        notionId: '2e8d46830695493d8d03ac75a6c7e67d',
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
      }
    ]
  },
  {
    badgeImageLink: null,
    lessonImageLink: '/images/understanding-stablecoins/lesson-dcf41ef6.png',
    socialImageLink: '/images/understanding-stablecoins/social-32059ac7.png',
    learningActions: '',
    marketingDescription: 'Use dollars, euros, and more on the blockchain.',
    badgeId: null,
    collectibleId: 'H003',
    duration: 5,
    learnings: '',
    description: 'Use dollars, euros, and more on the blockchain.',
    name: 'Understanding Stablecoins',
    languages: [],
    level: 'Level 1',
    lessonWriters: 'Tetranome',
    publicationStatus: 'publish',
    publicationDate: '2023-08-16',
    featuredOrderOnHomepage: null,
    isCommentsEnabled: false,
    endOfLessonRedirect: null,
    mirrorLink: 'https://mirror.xyz/banklessacademy.eth/qc15y-_wur6as8ZRuPOwzpuvZ7NNV7EF2cI3Yb6Jy1w',
    mirrorNFTAddress: '0x58da595fec45ca61cc68883869885e378caf0231',
    areMirrorNFTAllCollected: false,
    sponsorName: 'Glo Dollar',
    sponsorLogo: '/images/understanding-stablecoins/sponsor-d3df6afb.png',
    isArticle: true,
    notionId: '1181627a73fb463a814043d53f44559e',
    englishName: 'Understanding Stablecoins',
    slug: 'understanding-stablecoins',
    articleContent: '## Key Takeaways\n\n> * Stablecoins are the blockchain equivalent of fiat currency, like the dollar or euro.\n>\n> * Stablecoins are `ERC-20` tokens: they allow DeFi users to quickly move between fiat value, and crypto value, while staying on the blockchain.\n>\n> * There are several categories of stablecoin, each with their own trade-offs and risk profile.\n>\n> * Stablecoins can generate more annual interest than holding fiat in a traditional bank.\n\n## Why Hold Stablecoins?\n\nStablecoins have become a cornerstone of the DeFi ecosystem, reaching over $140 billion USD in supply value at their 2022 peak. Stablecoins settled over $7 trillion in transaction value that year — that’s \~0.3% of global USD settlement in 2022.\n\n![](/images/understanding-stablecoins/image-0c080b13.png)\n\nHere’s why they’re in demand:\n\n* **Stability:** Holding stablecoins in your self-custody wallet is like holding fiat currency, but on the blockchain. When holding a stablecoin like Circle’s U.S. dollar (USDC), you can expect it to maintain 1:1 value with the U.S. dollar while the prices of assets like ether and bitcoin fluctuate.\n\n* **Flexibility:** Because this pegged value exists as an ERC-20 token on the blockchain, it’s easy to move between fiat value and crypto value.\n\n* **Access:** Stablecoins provide access to a range of decentralized financial services, like permissionless borrowing or lending to earn interest.\n\n* **Security:** Cryptography makes it extremely difficult for attackers to capture or forge transactions.\n\nThe way a stablecoin maintains a 1:1 equivalence, or `peg`, to its fiat counterpart is its most important property. Just as fiat currency is only worth the fundamentals that underlie it, a stablecoin peg mechanism dictates the value of your holdings.\n\n## Stablecoin Categories\n\nThere are three common strategies for a stablecoin to maintain its price peg:\n\n* 💵 **Fiat-backed:** 1:1 collateralized by real-world fiat reserves.\n\n* 🔗 **Crypto-collateralized:** overcollateralized by crypto deposits into DeFi protocols.\n\n* 🔃 **Algorithmic:** fixed supply/demand algorithms that maintain price stability.\n\n### 1\. Fiat-backed Stablecoins\n\nFiat-backed stablecoins maintain value by issuing a fixed token supply matched by real-world currency reserves. Their on-chain price is maintained via supply/demand economics: few people want to pay more than one real-world dollar for a dollar of on-chain value, so they simply take their trade elsewhere. To meet increased demand, the stablecoin issuer locks up additional fiat and increases the token supply by the same amount.\n\nNotable fiat-backed stablecoins include Tether (USDT) and Circle (USDC).\n\nStablecoin issuers generate revenue through various methods. These methods include investing a portion of their fiat reserves in short-term US Treasuries and cash equivalents, as well as employing a mixed revenue model that involves collecting transaction fees and offering lending services.\n\n> **Innovation & Philanthropy through Fiat-Backed Stablecoins: Glo Dollar**\n>\n> The Glo Foundation has introduced an innovative approach when it comes to revenue generation through the creation of [Glo Dollar](https://www.glodollar.org/) (USDGLO), its US dollar-backed stablecoin. Glo Dollar sets itself apart from other stablecoins by directing the interest earned from its reserves towards basic income programs for people in extreme poverty.\n>\n> Holders of USDGLO contribute to this mission by practicing embedded philanthropy. Learn more about Glo Dollar and how it works, [here](https://www.glodollar.org/articles/how-glo-works).\n\nConsiderations when using fiat-backed stablecoins:\n\n* **Collateral Audits:** Holders need assurance that their stablecoin tokens are matched one-to-one by fiat reserves. Ideally the provider is open to regular audits by independent parties. USDT has historically made it difficult to know the total value of their locked assets. USDC regularly undergoes independent audits, increasing certainty that their reserves equal their token issuance.\n\n* **Censorship Risk:** With both USDC and USDT subject to government investigation, these tokens’ `smart contracts` include a freeze function whereby a user’s on-chain holdings can be locked in cases of disagreeable activity. This freeze function also applies to tokens held in `non-custodial wallets`.\n\nThe high degree of centralization in the fiat-backed stablecoin sector leaves great room for improvement in holding fiat-pegged value in a crypto-native way.\n\n### 2\. Crypto-collateralized Stablecoins\n\nCrypto-collateralized stablecoins are a more transparent, decentralized option — and these qualities help eliminate certain risks. They maintain a fiat peg through crypto asset reserves. As crypto market volatility influences the total value of these reserves, these stablecoins are overcollateralized — sometimes up to 200%! All collateralized assets are viewable on chain, giving users 24/7 access to the real composition of their stablecoins.\n\nThe most notable example in this category is MakerDAO’s Dai (DAI).\n\n![DAI collateralization breakdown (June 2023) Source: https://makerburn.com/#/rundown](/images/understanding-stablecoins/image-573e657a.png)\n\nConsiderations:\n\n* **Collateral Valuation:** A stablecoin’s reserves typically consist of crypto, other stablecoins, and even other asset classes. For example, DAI is backed by BTC, ETH, stablecoins, real world assets, and several other minor components. To mitigate the risks of this diverse range of assets, DAI is overcollateralized (at the time of writing). Even if the ETH price was to crash by 20%, DAI would still have [enough collateral](https://daistats.com/) to cover their token. However, further price volatility across its range of assets could begin to erode the peg.\n\n* `Counterparty Risk`: Reliance on multiple asset classes means there’s a higher chance one of the assets will experience difficulty and affect the value of your holdings. However, you only have fractional exposure to the impact of each individual risk.\n\n* **Governance Risk:** This type of stablecoin and its treasury are managed by a decentralized group of governance voters. This means there are risks of human error, or possible governance capture.\n\n### 3\. Algorithmic Stablecoins\n\nThese tokens maintain their peg by automatically balancing their own supply. An onchain algorithm reduces the number of tokens in circulation when the market price falls below the peg, and injects new tokens when the market price surpasses the peg. Both the balancing algorithm and the stablecoin\'s smart contracts are public, meaning anyone can clone and improve, or audit the existing system.\n\nAs algorithmic stablecoins have the fewest external dependencies, and no administration or governance demands, they almost entirely eliminate counterparty risk. This makes them the most decentralized and self-custody-ready stablecoin option.\n\nNotable examples include Liquity (LUSD) and Frax (FRAX).\n\n![](/images/understanding-stablecoins/image-4f6e4c7f.png)\n\nConsiderations:\n\n* **Dynamic Holdings:** With the balancing algorithm adjusting token supply, your number of tokens held will fluctuate with supply adjustments. The total value of your token holdings remains constant — you aren’t losing or gaining any value — but this aspect can be confusing for new users.\n\n* **Highly Technical:** You need to understand the technology to build confidence and risk/reward awareness.\n\n* **Emergent Tech Risk:** With algorithmic stablecoins being so new, unknown smart contract risks could be present. Only use algorithmic stablecoins with several smart contract audits, performed by top-level auditors.\n\n## Choosing a Stablecoin\n\nWhat is the best stablecoin to hold? As with everything DeFi, the answer to that question depends on your **needs**, **values**, and **risk tolerance**.\n\nHere’s a quick refresher on each category:\n\n* 💵 **Fiat-backed:** The traditional approach — the closest you’ll come to holding fiat on chain.\n\n  * Values: Conventionality, institutional trust.\n\n  * Risks: Opaque collateral backing, ability for provider to freeze funds.\n\n* 🔗 **Crypto-collateralized:** A balanced, crypto-native approach, spreading collateral risk across multiple asset classes.\n\n  * Values: Diversification, transparency, progression.\n\n  * Risks: Crypto market volatility, dependence on other assets.\n\n* 🔃 **Algorithmic:** The decentralized — but experimental — option that minimizes counterparty risk.\n\n  * Values: Self-sovereignty, transparency, progression.\n\n  * Higher risk of smart contract bugs.\n\nAs always, the best way to learn about something is to try it. You might even decide to hold a variety of stablecoins.\n\nAnd remember, not all stablecoins in each category are created equal! Do your own research before interacting with any new token.\n\n\n---\n\nWe hope you’ve enjoyed this entry in the Explorer’s Handbook: ‘Understanding Stablecoins’.\n\nDon’t forget to collect this entry if you want to own a copy for easy reference on your travels, or to support future content at Bankless Academy. Safe travels, Explorer!\n\n\n---\n\n## Frequently Asked Questions\n\n### What are the most popular stablecoins?\n\nLooking at the leading stablecoins by `market cap` gives an idea of the current market preference, but this isn’t guidance on how you should position yourself, or how safe that position would be.\n\nHere’s a realtime list of top stablecoins by market cap: <https://defillama.com/stablecoins>\n\nCryptocurrency users often refer to the ‘Lindy Effect’ when choosing investment options. This concept says that the longer something has existed, the more we can expect it will continue to exist. Ten years of cryptocurrency history have shown this to only be true on occasion.\n\n### Where can I buy stablecoins?\n\nCentralized Exchanges (CEXs) offer popular fiat-backed stablecoins (and typically their own branded stablecoin), other types of stablecoin are often missing.\n\nVisit a Decentralized Exchange (DEX), or use a direct wallet on-ramp service like ‘MetaMask Buy’, to acquire crypto-collateralized and algorithmic tokens. Check out our lesson on [Decentralized Exchanges](https://app.banklessacademy.com/lessons/decentralized-exchanges) to learn more about peer-2-peer marketplaces.\n\n### How can I earn interest on stablecoins?\n\nSome CEXs offer yield by just holding stablecoins on their platform, funded by a share of platform profits to incentivize platform use.\n\nYou can also earn interest in DeFi, with trustless lending and borrowing platforms. These platforms connect lenders and borrowers, managing risk through onchain collateral and smart contracts. Stablecoin lenders can earn annual returns far higher than available in the traditional banking sector — but where there’s reward, there’s risk!\n\nThe lending and borrowing topic deserves its own Bankless Academy entry. If you’re already interested in learning more you can research platforms like [Aave.com](https://aave.com/) and [Curve.fi](https://curve.fi/).\n\n### What happens if a stablecoin loses its peg?\n\nThe price of any stablecoin can shift slightly (usually around the +/- 2% mark) in peak network hours. This effect is usually temporary, with prices quickly stabilized by traders taking advantage of arbitrage opportunities.\n\nHowever, there are cases where a stablecoin loses its peg beyond safe, temporary ranges. This effect isn’t necessarily permanent (USDC, March 2023) — but it can be (Terra, May 2022).\n\nSome fiat-backed stablecoin issuers, like USDC, offer 1:1 redemption from their stablecoin to regular fiat through their website. Whether this remains true during times of crisis is another story.\n\n\n---\n\n**Author**\n\n**[Tetranome](https://twitter.com/tetranome)** is the Project Champion at Bankless Academy, focusing on user experience, UI, design, and platform curriculum.\n\n**Editor**\n\n**[Trewkat](https://twitter.com/trewkat)** is a writer and editor at BanklessDAO. She’s interested in learning about crypto and NFTs, with a particular focus on how best to communicate this knowledge to others.\n\n**Patron**\n\nThis unsponsored article is part of your free Bankless Academy education. Collect the article to support future content!',
    imageLinks: [
      '/images/understanding-stablecoins/image-0c080b13.png',
      '/images/understanding-stablecoins/image-573e657a.png',
      '/images/understanding-stablecoins/image-4f6e4c7f.png'
    ],
    keywords: [
      'ERC-20',
      'peg',
      'smart contracts',
      'non-custodial wallets',
      'Counterparty Risk',
      'market cap'
    ]
  },
  {
    badgeImageLink: '/images/decentralized-exchanges/badge-bbe90ffe.png',
    lessonImageLink: '/images/decentralized-exchanges/lesson-17a45657.png',
    socialImageLink: '/images/decentralized-exchanges/social-f7845e3f.jpg',
    learningActions: '',
    marketingDescription: 'DEXs and AMMs have changed the landscape of traditional market trading. It’s time to understand why, and how you can use this technology to your own advantage.',
    badgeId: 9,
    duration: 15,
    learnings: '',
    description: 'Discover how smart-contract exchanges enable permissionless token swaps!',
    name: 'Decentralized Exchanges',
    languages: [],
    level: 'Level 1',
    lessonWriters: 'Tetranome',
    quest: 'DecentralizedExchanges',
    publicationStatus: 'publish',
    publicationDate: '2023-06-22',
    featuredOrderOnHomepage: null,
    isCommentsEnabled: false,
    endOfLessonRedirect: null,
    sponsorName: 'Velodrome',
    sponsorLogo: '/images/decentralized-exchanges/sponsor-2982259a.png',
    nftGating: 'https://opensea.io/assets/matic/0x60576a64851c5b42e8c57e3e4a5cf3cf4eeb2ed6/15463',
    nftGatingRequirements: 'Complete and claim your ‘Layer 2 Blockchains’ lesson badge first.',
    nftGatingImageLink: '/images/decentralized-exchanges/nft-2d2147b0.png',
    nftGatingLink: 'https://app.banklessacademy.com/lessons/layer-2-blockchains',
    nftGatingCTA: 'View Lesson',
    notionId: '41209248612042d2b279261ee60e3a66',
    englishName: 'Decentralized Exchanges',
    slug: 'decentralized-exchanges',
    imageLinks: [
      '/images/decentralized-exchanges/what-is-a-decentralized-exchange-7eed6afb.svg',
      '/images/decentralized-exchanges/centralized-and-decentralized-exchanges-f6f6324c.svg',
      '/images/decentralized-exchanges/decentralized-applications-99447b26.svg',
      '/images/decentralized-exchanges/decentralized-applications-continued-728cfade.svg',
      '/images/decentralized-exchanges/automated-market-makers-78ad7439.svg',
      '/images/decentralized-exchanges/token-swaps-41ceb8e1.svg',
      '/images/decentralized-exchanges/token-swaps-continued-bad45a9b.svg',
      '/images/decentralized-exchanges/what-is-liquidity-a88af170.svg',
      '/images/decentralized-exchanges/liquidity-providers-4f46eebb.svg',
      '/images/decentralized-exchanges/dex-best-practices-62cbc83b.svg'
    ],
    keywords: [
      'liquidity pools',
      'defi',
      'cexs',
      'dexs',
      'dapp',
      'liquidity',
      'dapps',
      'amm',
      'token swaps',
      'trade route',
      'token pair',
      'token allowances',
      'liquidity pool',
      'price impact',
      'lp',
      'slippage',
      'kyc',
      'sandwich attacks',
      'tvl'
    ],
    slides: [
      {
        type: 'LEARN',
        notionId: '6ed40b9725024a57800c91229c3826f6',
        title: 'What is a Decentralized Exchange?',
        content: '<div class="bloc1"><p>Decentralized Exchanges (DEXs) are on-chain marketplaces that enable Explorers to securely exchange cryptocurrency with other users while maintaining self-custody of their wallet funds. These peer-to-peer trades are facilitated using publicly accessible smart contracts that connect users with large communal vaults of tokens. These vaults are called <code>liquidity pools</code>. DEXs can be found on almost any blockchain, and are present on Ethereum Layer 1 and 2.</p><p>Exchanging tokens is an essential part of using <code>DeFi</code>. In DeFi you’ll find a greater range of token variety and utility than on any other type of exchange. Some users buy tokens to access on-chain products and services. Others purchase tokens as an investment. Some tokens grant holders voting power used to determine project direction — much like holding shares in a traditional corporation! Regardless of your motivation, you’ll be visiting DEXs on a regular basis in DeFi.</p><p>Let\'s learn how they work and how they can best serve you.</p></div><div class="bloc2"><img src=\'/images/decentralized-exchanges/what-is-a-decentralized-exchange-7eed6afb.svg\'></div>'
      },
      {
        type: 'LEARN',
        notionId: '0ac18b1bb72840f2ad144e1ef7e84b7d',
        title: 'Centralized and Decentralized Exchanges',
        content: '<div class="bloc1"><p>Let’s cover the differences between the technology used for a Centralized Exchange (like Coinbase, Binance, Kraken) and that of a Decentralized Exchange (like Uniswap, PancakeSwap).</p><p>Centralized Exchanges (<code>CEXs</code>) allow users to trade and invest in cryptocurrency, without engaging in the blockchain ecosystem itself. As your account is registered on the CEX, your private keys and funds are in their custody — you are subject to their management, rules, and business model risks.</p><p>Decentralized Exchanges (<code>DEXs</code>) enable users to trade cryptocurrency entirely in self-custody — the original intended purpose of blockchains. The peer-to-peer model allows you to act as both the consumer and the provider, accessing financial opportunities previously available only to the financial class. The blockchain system is both transparent and censorship-resistant, creating equal opportunity while protecting users from hackers, the state, or any participant seeking to gain an unfair advantage.</p></div><div class="bloc2"><img src=\'/images/decentralized-exchanges/centralized-and-decentralized-exchanges-f6f6324c.svg\'></div>'
      },
      {
        type: 'QUIZ',
        notionId: '41802b1b9f7d4b7aa6f33341369fed76',
        title: '✅ Knowledge Check',
        quiz: {
          question: 'Which of the following is true regarding cryptocurrency exchanges?',
          rightAnswerNumber: 3,
          answers: [
            'There is no team behind a DEX.',
            'The only way you can lose funds on a CEX is due to a bad trade.',
            'DEXs allow you to trade while maintaining self-custody, while CEXs do not.'
          ],
          feedback: [
            'ℹ️ DEXs still have development teams, but their influence on the project is limited.',
            'ℹ️ Even CEXs have their risks. In 2022, the FTX exchange collapsed, with almost all users losing their deposits.',
            'ℹ️ Unless explicitly stated otherwise, a CEX owns your private keys.'
          ],
          id: 'decentralized-exchanges-1'
        }
      },
      {
        type: 'LEARN',
        notionId: '5ee6556050014f1797cb863b3fe99d41',
        title: 'Decentralized Applications',
        content: '<div class="bloc1"><p>DEXs are a type of <code>dApp</code> — a decentralized application running on a blockchain. For an internet application to be considered ‘decentralized’ it must indiscriminately allow anyone to use it, process their interactions without need for another person, and be written in publicly transparent code.</p><p>dApp services are facilitated using smart contracts, lines of code that take a user’s on-chain action and return a predictable on-chain response. The Ethereum Foundation compares smart contracts to vending machines, where the user inputs the number corresponding to the item they’d like to receive, plus the appropriate amount of money, and they receive an expected output (their snack) without the need for another human to facilitate the transaction.</p><p>DEX smart contracts handle a variety of commands, like token swapping, voting, or adding and removing <code>liquidity</code>.</p></div><div class="bloc2"><img src=\'/images/decentralized-exchanges/decentralized-applications-99447b26.svg\'></div>'
      },
      {
        type: 'LEARN',
        notionId: '4927e55652c3476a9dca1e39329c0887',
        title: 'Decentralized Applications (continued)',
        content: '<div class="bloc1"><p>DEXs follow the same logic as the vending machine: they take a user’s input token and output the desired token. Other dApp examples include:</p><p>🎟️ <strong>Voting dApps:</strong> allocating a user’s vote to a specified entity.</p><p>📦 <strong>Bridge dApps:</strong> transferring a user’s cryptocurrency from one blockchain network to another.</p><p>🤝 <strong>Lending/Borrowing dApps:</strong> granting loans to users who meet specified requirements.</p><p>Smart contracts are accounts on Ethereum — they have an address and balance, performing automated actions when prompted by a transfer and command. A DEX is a programmed Ethereum account with several available functions.</p><p><code>dApps</code> will typically use a website as a visual interface to help users interact with the underlying smart contracts. If the website is down, you can still access the smart contract with some experience!</p></div><div class="bloc2"><img src=\'/images/decentralized-exchanges/decentralized-applications-continued-728cfade.svg\'></div>'
      },
      {
        type: 'QUIZ',
        notionId: '1e7748d105bb4374a8dab96e40481502',
        title: '✅ Knowledge Check',
        quiz: {
          question: 'Which of the below properties are needed for a smart contract to be considered decentralized?',
          rightAnswerNumber: 4,
          answers: [
            'Permissionless: open access to all users.',
            'Autonomous: user interactions do not need an intermediary.',
            'Transparent: the smart contract code is publicly available.',
            'All of the above.'
          ],
          feedback: [
            'ℹ️ This is a quality of a dApp, but it isn’t the only one.',
            'ℹ️ This is a quality of a dApp, but it isn’t the only one.',
            'ℹ️ This is a quality of a dApp, but it isn’t the only one.',
            'ℹ️ Ethereum dApps are respected for their capacity to be permissionless, autonomous, and transparent.'
          ],
          id: 'decentralized-exchanges-2'
        }
      },
      {
        type: 'LEARN',
        notionId: 'abef1f4a718a483d9d45b38cc7d6c3c1',
        title: 'Automated Market Makers',
        content: '<div class="bloc1"><p>In traditional markets and <code>CEXs</code>, your custodian uses an order book: a database filled with buy and sell offers. The CEX connects your trade offer with another person’s. You are usually charged a base/scaling commission on your trade, and you’re also left wondering if the undisclosed matching method found you the best possible deal.</p><p><code>DEXs</code> use ‘Automated Market Maker’ (<code>AMM</code>) technology, a matchmaking system that makes the best trade based on a public algorithm. As this algorithm is open-source, anyone can understand, clone, and improve it — leading to healthy competition, constant innovation, and better trades for everyone.</p><p>AMMs route user trades through <code>liquidity pools</code>, rather than directly matching user bids and asks. These communal token vaults accumulate and dispense tokens according to user interactions, providing a more transparent and fair trade as compared to order book technology.</p></div><div class="bloc2"><img src=\'/images/decentralized-exchanges/automated-market-makers-78ad7439.svg\'></div>'
      },
      {
        type: 'QUIZ',
        notionId: '7ff7469e00154f15ac6d0f149a378590',
        title: '✅ Knowledge Check',
        quiz: {
          question: 'What is the benefit of using AMMs to complete trades as compared to a traditional order book?',
          rightAnswerNumber: 3,
          answers: [
            'The AMM trade is faster than an order book trade.',
            'AMMs connect you directly to the other user.',
            'You can detect and prevent other parties creating one-sided trades.'
          ],
          feedback: [
            'ℹ️ When we include network confirmation time, this isn’t necessarily true.',
            'ℹ️ AMMs route user trades through communal token vaults, called liquidity pools, rather than directly between users.',
            'ℹ️ The transparent nature of AMMs means that it is a lot harder for platforms to hide malicious actions — or for users to be malicious at all!'
          ],
          id: 'decentralized-exchanges-3'
        }
      },
      {
        type: 'LEARN',
        notionId: '33632c90e3b74bd7a4309b9ad3ea5643',
        title: 'Token Swaps',
        content: '<div class="bloc1"><p>Cryptocurrency trades on the blockchain are called <code>token swaps</code>. These smart contract interactions are the conversion from one cryptocurrency to another, using AMM <code>liquidity pools</code>. By forming a <code>trade route</code>, a pathway through the appropriate liquidity pools, a DEX smart contract exchanges your input token for your desired output token. As liquidity pools often consist of only two tokens, and because there aren’t always liquidity pools for every <code>token pair</code>, trade routes may run through more than one liquidity pool to fulfil your swap.</p><p>In order for a smart contract to access our wallet, we grant it permission to withdraw funds up to a specified (or unlimited) amount. These <code>token allowances</code> enable trusted smart contracts to carry out our transactions without sharing our wallet private key. Granting permissions has a gas fee, so the permission is left open for future interactions with your wallet. This is one of the reasons why it is safer to use one wallet for trading, while reserving a separate wallet for holding. We’ll monitor and revoke token allowances in future content!</p></div><div class="bloc2"><img src=\'/images/decentralized-exchanges/token-swaps-41ceb8e1.svg\'></div>'
      },
      {
        type: 'LEARN',
        notionId: '7d48626abaf74a2ba362a3093c7888b5',
        title: 'Token Swaps (continued)',
        content: '<div class="bloc1"><p>Let’s take a look at an example swap to understand the permission and exchange process. The example is a swap between USDC to OP on Velodrome — a large DEX on the Optimism network. This trade is often routed through two pools, as the USDC/OP <code>liquidity pool</code> isn’t as cost-efficient:</p><ol><li>First, you grant the appropriate Velodrome smart contract the permission to make USDC withdrawals from your wallet.</li><li>You submit your swap transaction request to Velodrome.</li><li>The transaction is accepted: Velodrome withdraws the specified amount of USDC from your wallet, into the USDC/ETH liquidity pool. The equivalent amount of ETH exits this first liquidity pool and is transferred to the ETH/OP liquidity pool. Lastly, OP is transferred from the second liquidity pool to your wallet address.</li></ol><p>The swap transaction is complete. Your USDC tokens have been swapped for OP, via ETH!</p></div><div class="bloc2"><img src=\'/images/decentralized-exchanges/token-swaps-continued-bad45a9b.svg\'></div>'
      },
      {
        type: 'QUIZ',
        notionId: '086408da71d64987bea8e712a03db00a',
        title: '✅ Knowledge Check',
        quiz: {
          question: 'AMMs can route a trade through multiple liquidity pools, all in a single transaction.',
          rightAnswerNumber: 1,
          answers: [
            'True',
            'False'
          ],
          feedback: [
            'ℹ️ Correct! You might pay a higher network fee, but the actions are bundled into one transaction.',
            'ℹ️ Incorrect, check the previous slide to understand why.'
          ],
          id: 'decentralized-exchanges-4'
        }
      },
      {
        type: 'LEARN',
        notionId: '9af40685c4e8494d9a2cba27f103d6fd',
        title: 'What is Liquidity?',
        content: '<div class="bloc1"><p>Liquidity in the crypto space refers to a marketplace’s ability to facilitate digital asset buys and sells at fair prices. When liquidity is high, prices are more stable; when liquidity is low, prices are more volatile. As users are generally attracted to fairer prices, <code>DEXs</code> aim to have high liquidity across all of their liquidity pools.</p><p>High liquidity means there is a high quantity of tokens in the liquidity pool — generally a 50/50 valuation split of the two tokens users are trading in and out of the pool. For example, a USDC/ETH pool facilitates all trades between this <code>token pair</code> on the host platform.<br>When there are more tokens, users making trades through the pool have less impact on the 50/50 asset balance, which helps prices remain stable. The amount by which any trade throws off this balance is known as <code>price impact</code>.</p><p>As an Explorer, you want the lowest price impact on your trades as possible, in order to receive the best deal! That means you want high, balanced liquidity.</p></div><div class="bloc2"><img src=\'/images/decentralized-exchanges/what-is-liquidity-a88af170.svg\'></div>'
      },
      {
        type: 'LEARN',
        notionId: '498a9f4d407b416c84b16152aa350bcf',
        title: 'Liquidity Providers',
        content: '<div class="bloc1"><p>Optimizing for high <code>liquidity</code> is integral to the success of a DEX — but because there’s only so much liquidity in the cryptocurrency ecosystem, each DEX is in competition to capture as much liquidity as possible. So where does this liquidity come from?</p><p>In a decentralized ecosystem, DeFi citizens are incentivized to provide liquidity to a given pool to raise the TVL (total value locked) on a platform. Fees gathered from users making trades through the pool are distributed to the LPs (liquidity providers) based on the amount of liquidity provided. You heard that right: by lending your tokens to a DEX liquidity pool, you can generate passive income.</p><p>There are a variety of considerations when becoming an <code>LP</code>, and we’ll cover this in future content. For now, know that the large APRs (annual percentage rates) displayed across DEX liquidity pools aren’t guaranteed, and there can be losses.</p></div><div class="bloc2"><img src=\'/images/decentralized-exchanges/liquidity-providers-4f46eebb.svg\'></div>'
      },
      {
        type: 'QUIZ',
        notionId: 'b93c97acd19847aaaa7867734bade95a',
        title: '✅ Knowledge Check',
        quiz: {
          question: 'Finish the statement: “When liquidity is __________.”',
          rightAnswerNumber: 3,
          answers: [
            'high, volatility is high.',
            'low, volatility is low.',
            'low, volatility is high.'
          ],
          feedback: [
            'ℹ️ Incorrect, try again.',
            'ℹ️ Incorrect, try again.',
            'ℹ️ Right! Liquidity and volatility are generally inversely-correlated.'
          ],
          id: 'decentralized-exchanges-5'
        }
      },
      {
        type: 'QUIZ',
        notionId: '5a390d00dff4454e948ba9e54c569ae4',
        title: '✅ Knowledge Check',
        quiz: {
          question: 'How do DEXs incentivize users to provide liquidity?',
          rightAnswerNumber: 2,
          answers: [
            'Insurance for trade losses.',
            'A share of platform fees and/or bonus tokens.',
            'Access to private liquidity pools.',
            'All of the above.'
          ],
          feedback: [
            'ℹ️ Neither CEXs or DEXs protect you from losses on a bad investment.',
            'ℹ️ The fees charged to use the DEX are often split across various platform stakeholders — including LPs. Some platforms even grant additional bonuses.',
            'ℹ️ There are no private liquidity pools, low traffic would likely not provide adequate returns.',
            'ℹ️ There’s only one correct answer here, can you figure out which one it is?'
          ],
          id: 'decentralized-exchanges-6'
        }
      },
      {
        type: 'LEARN',
        notionId: 'f76ae7add46f44518f4368f4f6814830',
        title: 'Platform Fees',
        content: '<div class="bloc1"><p>Both CEXs and DEXs usually charge fees for the services they provide. While the automation of DEX and AMM technology has reduced the cost for exchanging cryptocurrency, interacting with the blockchain is not free of charge. Let’s take a look at five common costs to consider when deciding which platform to use.</p><p>🏷️ <strong>Platform fees:</strong> Approximately 0.5% commission on each trade for most CEXs, and 0.05% for most DEXs. These can fluctuate.</p><p>🌐 <strong>Network fees:</strong> Blockchains charge gas fees on top of the dApp transaction. You can minimize these costs by using the network during low periods of activity. Etherscan.io has a real-time estimate tool for various Ethereum Mainnet actions here: <a href=\'https://etherscan.io/gastracker\'>Etherscan.io</a> (for DEXs, refer to the ‘Swap’ action). On Layer 2s, fees are far cheaper: <a href=\'https://l2fees.info/\'>l2fees.info</a></p><p>📦 <strong>Bridge fees:</strong> Both CEXs and the blockchain will charge a flat rate for transferring cryptocurrency from one blockchain network to another. For CEXs, refer to their on-site information. For the blockchain, check out the ‘Deposit’ action on <a href=\'https://etherscan.io/gastracker\'>Etherscan.io</a>.</p><p>💹 <strong>Exchange rates:</strong> When buying cryptocurrency directly with fiat on a CEX or DEX, be wary of exchange rates that don’t reflect the market rate.</p><p>🧊 <strong>Slippage:</strong> As prices change so quickly in this space, DEXs leave room for fluctuations on a swap — this is called <code>slippage</code>. This percentage value is customizable, with most dApps recommending 0.5-2%. You may lose up to the slippage value on a trade to have it executed, but if your slippage range is too low the trade might be rejected.</p><p>As you can see, there are many factors to consider when comparing exchange fees. It’s always best to do your own research before making a trade to make sure the platform\'s advantages and disadvantages are understood.</p></div>'
      },
      {
        type: 'LEARN',
        notionId: '9c61a52109294180b8135a6c3da255c5',
        title: 'DEX Advantages',
        content: '<div class="bloc1"><p>We’ve covered a lot of theory in this lesson, but you might still be wondering if DEXs are for you. Generally speaking, you are probably going to benefit from Decentralized Exchanges if:</p><ul><li>🔑 You want to retain custody over your digital assets.</li><li>🔒 You want to secure your assets on the blockchain, avoiding CEX collapses.</li><li>⌛ You want 24/7 access to the cryptocurrency market.</li><li>👛 You want access to a wider range of cryptocurrencies.</li><li>🤑 You are interested in providing liquidity.</li><li>🛂 You don’t want to register and <code>KYC</code> on every platform you interact with.</li><li>⚔️ You seek the additional risks and rewards of exploring Decentralized Finance.</li></ul><p>With that said, almost every DeFi user has an account on a Centralized Exchange. This is because CEXs have easy on/off ramp features to the traditional banking world; you can easily get money from your bank account onto the blockchain and vice-versa. <a href=\'https://twitter.com/RyanSAdams\'>Ryan Sean Adams</a> compares this to using a public bathroom: <em>“You go in, you do your business, you get out.”</em></p><p>This is great because it means you can start with a CEX account and slowly transition to DeFi as you become more confident in navigation.</p></div>'
      },
      {
        type: 'LEARN',
        notionId: '5c02e781464d4be884b95bcb1170080e',
        title: 'DEX Risks',
        content: '<div class="bloc1"><p>Using a DEX also comes with risk. Here are a few of the most impactful:</p><p>🐞 <strong>Smart contract risk: </strong>While audits reduce the chances of smart contract bugs, they still exist. In a rare, worst-case scenario, you could lose up to your trade amount to a bug. Only interact with trusted, heavily audited smart contracts.</p><p>💰 <strong>Self-custody risk:</strong> Sole responsibility for your private keys means you could lose an entire wallet to theft, scams, or a misplaced seed phrase. This is why it is important to mitigate risk with a multi-wallet strategy, and to always keep a copy of your seed phrases backed up in a secure, real-world location.</p><p>🥪 <strong>Sandwich attacks: </strong>Setting your swap slippage high increases the likelihood of trade frontrunners coordinating <code>sandwich attacks</code> against you. In a sandwich attack, you could lose up to your slippage amount on a trade. We’ll cover how to protect yourself from this style of attack in future content.</p><p>With these advantages and risks considered, a CEX might be a better fit for you if:</p><ul><li>🎓 You’re still early in your cryptocurrency journey, working to understand the risks and rewards.</li><li>⚖️ Your trade frequency and volume are small, making blockchain fees an unrealistic cost.</li><li>🏰 You’d prefer to trust an exchange to watch your funds, rather than being responsible for them.</li></ul><p>Some users take a hybrid approach to lower their overall risk, using a CEX to buy and sell their cryptocurrency, while storing it on the blockchain itself.</p></div>'
      },
      {
        type: 'QUIZ',
        notionId: 'c630efe1a4c14ffa995b6edbd9a1fe94',
        title: '✅ Knowledge Check',
        quiz: {
          question: 'Why would you use a Decentralized Exchange over a Centralized Exchange?',
          rightAnswerNumber: 4,
          answers: [
            'You want to access tokens not listed on a Centralized Exchange.',
            'You want to retain full custody over the exchanged funds.',
            'You’d like to access tools and opportunities not traditionally available to you.',
            'All of the above.'
          ],
          feedback: [
            'ℹ️ This is a quality of a DEX, but it isn’t the only one.',
            'ℹ️ This is a quality of a DEX, but it isn’t the only one.',
            'ℹ️ This is a quality of a DEX, but it isn’t the only one.',
            'ℹ️ Right! DEXs offer all of these benefits over CEXs.'
          ],
          id: 'decentralized-exchanges-7'
        }
      },
      {
        type: 'LEARN',
        notionId: '8a161e97222a49c98cd73197535ac711',
        title: 'Choosing a DEX',
        content: '<div class="bloc1"><p>There are many Decentralized Exchanges in DeFi, and some are better than others. Consider these five key factors when deciding on which DEX to use:</p><p>🥇 <strong>Legitimacy:</strong> Is the entity well known for its trustworthiness, quality, and longevity?</p><p>⛲ <strong>Liquidity:</strong> Is the liquidity pool <code>TVL</code> high enough to minimize price impact?</p><p>🖱️ <strong>Ease of use:</strong> Is the user interface easy to interact with?</p><p>🔐 <strong>Security:</strong> Have the smart contracts been audited by multiple auditors?</p><p>🎁 <strong>Rewards and Features:</strong> Are there loyalty rewards for using the exchange or providing liquidity? Can you vote in governance?</p><p>Notable names that score highly in these areas include Uniswap, Curve, Velodrome, and Balancer. You can easily move from one DEX to another until you find a few favorites! For the lesson quest, we’re going to use Velodrome — the number one DEX by TVL on Optimism. It’s well known, easy to use, has the deepest liquidity on the network, and because it’s on L2 the fees are far more reasonable!</p></div>'
      },
      {
        type: 'LEARN',
        notionId: '786352ac183a48e78eb74519e0b87117',
        title: 'DEX Best Practices',
        content: '<div class="bloc1"><p>Before you interact with a dApp, there are some best practices you should follow to keep your funds safe:</p><p>👩‍💻 Always verify the link to a dApp by checking the official project Twitter (gold check mark) or a trusted third party, and bookmark it once you’ve validated it. A variety of DeFi scams begin with a fake link — even on popular search engines.</p><p>🔓 When prompted to grant on-chain <code>token allowances</code> to a smart contract, limit the allowance to your trade amount to prevent future access to your funds.</p><p>♟️ Don’t interact with dApps via your HODL wallet. It’s better to use a separate wallet just for dApps in case anything goes wrong. Check out our <a href=\'https://app.banklessacademy.com/lessons/web3-security\'>Web3 Security lesson</a> for more information on wallet strategies, and how to stay safe in web3.</p><p>Now you’re ready to interact with a Decentralized Exchange!</p></div><div class="bloc2"><img src=\'/images/decentralized-exchanges/dex-best-practices-62cbc83b.svg\'></div>'
      },
      {
        type: 'QUIZ',
        notionId: '0eae7cec3bd140f79b75dbfbff51d7b9',
        title: '✅ Knowledge Check',
        quiz: {
          question: 'How can you be sure you’ve chosen a reputable DEX?',
          rightAnswerNumber: 1,
          answers: [
            'By independently checking its online reputation and only following URLs provided by a trusted party.',
            'By performing a small test interaction when using the platform for the first time.',
            'Both of the above.'
          ],
          feedback: [
            'ℹ️ Right, only interacting with trustworthy URLs is a good layer of protection.',
            'ℹ️ A single interaction with a bad smart contract can drain your entire wallet.',
            'ℹ️ Incorrect. A single interaction with a bad smart contract can drain your entire wallet.'
          ],
          id: 'decentralized-exchanges-8'
        }
      },
      {
        type: 'QUEST',
        title: 'Decentralized Exchanges Quest',
        component: 'DecentralizedExchanges'
      }
    ]
  },
  {
    badgeImageLink: null,
    lessonImageLink: '/images/swapping-on-a-decentralized-exchange/lesson-7ca41657.png',
    socialImageLink: '/images/swapping-on-a-decentralized-exchange/social-523f352a.png',
    learningActions: '',
    marketingDescription: 'Begin your journey into DeFi with this Decentralized Exchange walkthrough.',
    badgeId: null,
    collectibleId: 'H002',
    duration: 5,
    learnings: '',
    description: 'Begin your journey into DeFi with this Decentralized Exchange walkthrough.',
    name: 'Swapping on a Decentralized Exchange',
    languages: [],
    level: 'Level 1',
    tags: [
      'DeFi'
    ],
    lessonWriters: 'Tetranome',
    publicationStatus: 'publish',
    publicationDate: '2023-06-22',
    featuredOrderOnHomepage: null,
    isCommentsEnabled: false,
    endOfLessonRedirect: null,
    mirrorLink: 'https://mirror.xyz/banklessacademy.eth/g6Z7yuteSaJmhxVeVWwKtcZ2zttC33_9Enw23MbxKyk',
    mirrorNFTAddress: '0xdedebfc6893d5e7e87db8a1a88667d2bb746c231',
    areMirrorNFTAllCollected: false,
    sponsorName: 'Velodrome',
    sponsorLogo: '/images/swapping-on-a-decentralized-exchange/sponsor-a48cb5ef.png',
    isArticle: true,
    notionId: 'fe0ab896f8d74031bedf683510261b05',
    englishName: 'Swapping on a Decentralized Exchange',
    slug: 'swapping-on-a-decentralized-exchange',
    articleContent: '## Key Takeaways\n\n> * Decentralized Exchanges are a type of dApp that facilitate self-custody token swaps.\n>\n> * There is some practical knowledge required for confidently interacting with a DEX.\n>\n> * We can use block explorers to inspect our on-chain transactions.\n\nThe Decentralized Exchange (DEX) is the most commonly used application in the world of `Decentralized Finance` (DeFi) — and for good reason! DEXs enable automated swapping of one cryptocurrency token for another, without need for a mediator. Unlike Centralized Exchanges (CEXs), this type of swap also enables users to swap while retaining full ownership of their assets.\n\nAutonomy, and permissionless protocols, are backbone features of DeFi. They empower DeFi users with true ownership over their digital assets, and open access to fundamental blockchain services 24/7. Anyone with an internet connection can access DeFi, regardless of their personal background, beliefs, or geographical location.\n\nIn this handbook entry, we will cover how to use your self-custody wallet to interact with a DEX, with the goal of swapping one token for another. You can learn more about the mechanics, qualities, and risk profile of this technology, and how it compares to CEXs, in our lesson on [Decentralized Exchanges](https://app.banklessacademy.com/lessons/decentralized-exchanges).\n\n## Choosing a DEX\n\nSelecting an affordable and safe platform is the first step in performing a token swap. In this walkthrough we will be using Velodrome, the most popular DEX on the Optimism network (at time of writing). As you become more confident in blockchain navigation, you’ll learn how to evaluate other exchanges and find the best fit for your needs. Our [Decentralized Exchanges](https://app.banklessacademy.com/lessons/decentralized-exchanges) lesson includes a comprehensive list of qualities to look out for.\n\n![](/images/swapping-on-a-decentralized-exchange/image-a5b39b1d.png)\n\nDEXs are a great start to your web3 journey because most dApps follow a user interface layout similar to DEXs, and use similar interactions with your self-custody wallet.\n\nLet’s begin our token swap.\n\n## Performing a Token Swap\n\n**1\. Load the dApp:**\n\nOpen [Velodrome](https://velodrome.finance/swap?from=eth&to=0x4200000000000000000000000000000000000042) in a new browser tab.\n\n**2\. Connect your wallet:**\n\nUse the standard ‘Connect’ button typically located in the top right corner of any dApp.\n\nIf you are on desktop, connect with your browser wallet.\n\nIf you are on mobile, you will be prompted to use WalletConnect — the web3 standard for connecting mobile wallets to dApps.\n\n![](/images/swapping-on-a-decentralized-exchange/image-1d7c44d3.png)\n\n**3\. Approve the connection:**\n\nSelect ‘Connect’ in your wallet application to confirm the site connection. This allows the dApp to see your wallet address and token balances. You haven’t granted any other permissions yet.\n\n![](/images/swapping-on-a-decentralized-exchange/image-6ecdef56.png)\n\n**4\. Check and sign the terms of service (if you accept):**\n\nMany dApps will ask you to sign a message to confirm you have read their terms and conditions. Signing messages doesn’t cost gas, and doesn’t store any information on the blockchain. If you agree with the terms, you can sign the message.\n\n![](/images/swapping-on-a-decentralized-exchange/image-e3f7c7e8.png)\n\n**5\. Switch to the right network:**\n\nFor this walkthrough, make sure your wallet is set to the Optimism network.\n\n![](/images/swapping-on-a-decentralized-exchange/image-8d15c6f6.png)\n\n**6\. Customize your swap:**\n\nIt’s time to select your desired input and output tokens. In this example, we will be swapping ETH for OP — but you can swap whatever tokens you like!\n\n![](/images/swapping-on-a-decentralized-exchange/image-7b117655.png)\n\n**7\. Approve token permissions:**\n\nYou will be prompted to set and approve permission for Velodrome to access your wallet funds. We recommend limiting this to your trade size to limit future interactions with your tokens. (Stay tuned for future content on token permissions!)\n\n**8\. Confirm the transaction:**\n\nOnce you’re happy with your swap quote and settings, you can begin the swap. This step includes confirming on the dApp, and again in your wallet.\n\n![](/images/swapping-on-a-decentralized-exchange/image-89f87156.png)\n\n**9\. Check your balance:**\n\nYour transaction should take around 40 seconds to confirm, after which you will see your new token balance in your wallet. If your token type is not displayed, make sure you’ve imported the token addresses.\n\n*Optimism token contract address: 0x4200000000000000000000000000000000000042*\n\n![](/images/swapping-on-a-decentralized-exchange/image-c8b8abcc.png)\n\n**10\. Fetch your transaction hash:**\n\nTo complete the quest for our [Decentralized Exchanges](https://app.banklessacademy.com/lessons/decentralized-exchanges) lesson, you’ll need the ***transaction hash of the swap*** (not to be confused with the hash from your token permission transaction, or your wallet address). A block explorer link will usually appear on the DEX interface, letting you view the confirmed transaction details.. If you missed it, or it’s missing, you’ll find another link in your wallet activity log — tied directly to your trade.\n\n![](/images/swapping-on-a-decentralized-exchange/image-bcfdf0ee.png)\n\n\n---\n\nIt’s time to explore the world of decentralized trading! We hope you’ve enjoyed this entry in the Explorer’s Handbook: ‘Swapping on a Decentralized Exchange’.\n\nDon’t forget to collect this entry if you want to own a copy for easy reference on your travels, or to support future content at Bankless Academy. Safe travels, Explorer!\n\n\n---\n\n## Frequently Asked Questions\n\n### Why does my price quote change a few times every minute?\n\nPrice quotes are typically calculated at the time you enter your desired swap into the DEX interface. As time goes by, other users are making swaps and affecting token supply on the exchange. The DEX will regularly refresh your quote to stay up to date.\n\n### How long does it take for a token swap to execute?\n\nThe answer depends on a variety of factors, primarily the block speed of the blockchain and how much you underpay or overpay the gas fee. DEX transactions submitted to Ethereum Mainnet typically take between 15 seconds and a couple of minutes to be confirmed. Layer 2 transactions are usually faster!\n\n### Why did my transaction fail?\n\nThere are a number of reasons why a transaction could fail: insufficient funds to pay gas, gas limit set too low, or slippage set too low. The best way to begin troubleshooting is to look for User Interface error messages. You can also view your transaction on a block explorer, like [Etherscan](https://optimistic.etherscan.io/), to check if there are any on-chain error messages. We’ll cover more troubleshooting specifics in future content!\n\n### Can I change or remove token permissions?\n\nGranting token permissions to a smart contract can leave our wallet vulnerable to unwanted future interactions, in the case of a smart contract hack. It is possible to change or remove token permissions using apps like [Revoke.cash](https://revoke.cash/). As adjusting permissions costs gas, this precaution can quickly become expensive. This is one of the reasons why many users store their digital assets in one wallet (cold wallet), while interacting with dApps on another (trading wallet). Users transfer assets between them only as necessary.\n\n### Why is the token I\'m looking for not available to swap?\n\nIf your token isn’t listed by default, you’ll have to paste the token contract address into the list. To find the token contract address, check <https://www.coingecko.com/> or the official project website.\n\n**Note:** Token addresses can change for a given token on different networks. For example the [USDC contract on Mainnet](https://etherscan.io/token/0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48) is different than the [USDC contract on Optimism](https://optimistic.etherscan.io/token/0x7f5c764cbc14f9669b88837ca1490cca17c31607). Always verify token addresses before swapping!\n\n\n---\n\n**Author**\n\n**[Tetranome](https://twitter.com/tetranome)** is the Project Champion at Bankless Academy, focusing on user experience, UI, design, and platform curriculum.\n\n**Editor**\n\n**[Trewkat](https://twitter.com/trewkat)** is a writer and editor at BanklessDAO. She’s interested in learning as much as possible about crypto and NFTs, with a particular focus on how best to communicate this knowledge to others.\n\n**Patron**\n\nThis unsponsored article is part of your free Bankless Academy education. Collect the article to support future content!',
    imageLinks: [
      '/images/swapping-on-a-decentralized-exchange/image-a5b39b1d.png',
      '/images/swapping-on-a-decentralized-exchange/image-1d7c44d3.png',
      '/images/swapping-on-a-decentralized-exchange/image-6ecdef56.png',
      '/images/swapping-on-a-decentralized-exchange/image-e3f7c7e8.png',
      '/images/swapping-on-a-decentralized-exchange/image-8d15c6f6.png',
      '/images/swapping-on-a-decentralized-exchange/image-7b117655.png',
      '/images/swapping-on-a-decentralized-exchange/image-89f87156.png',
      '/images/swapping-on-a-decentralized-exchange/image-c8b8abcc.png',
      '/images/swapping-on-a-decentralized-exchange/image-bcfdf0ee.png'
    ],
    keywords: [
      'Decentralized Finance'
    ]
  },
  {
    badgeImageLink: '/images/staking-on-ethereum/badge-2714ad22.png',
    lessonImageLink: '/images/staking-on-ethereum/lesson-0274132a.png',
    socialImageLink: '/images/staking-on-ethereum/social-11fcfa74.jpg',
    learningActions: '',
    marketingDescription: 'Become a guardian of Ethereum: Secure the network, earn Ether rewards.',
    badgeId: 11,
    duration: 15,
    learnings: '',
    description: 'Become a guardian of Ethereum: Secure the network, earn Ether rewards.',
    name: 'Staking on Ethereum',
    languages: [],
    level: 'Level 1',
    lessonWriters: 'Tetranome',
    quest: 'StakingOnEthereum',
    publicationStatus: 'publish',
    publicationDate: '2024-02-21',
    featuredOrderOnHomepage: 3,
    isCommentsEnabled: false,
    endOfLessonRedirect: null,
    sponsorName: 'Rocket Pool',
    sponsorLogo: '/images/staking-on-ethereum/sponsor-3c0f08c6.png',
    notionId: 'e90059604739465ea99b9a2c8af5eb75',
    englishName: 'Staking on Ethereum',
    slug: 'staking-on-ethereum',
    imageLinks: [
      '/images/staking-on-ethereum/staking-on-ethereum-50472cf7.png',
      '/images/staking-on-ethereum/ethereum-wants-you-fd40b9e5.png',
      '/images/staking-on-ethereum/blockchain-security-7f2149fe.svg',
      '/images/staking-on-ethereum/proof-of-stake-49c358ed.svg',
      '/images/staking-on-ethereum/slashing-ccabe137.svg',
      '/images/staking-on-ethereum/ethernomics-33407ddc.svg',
      '/images/staking-on-ethereum/types-of-staking-part-2-9de268fd.svg',
      '/images/staking-on-ethereum/types-of-staking-part-2-96f11caf.svg',
      '/images/staking-on-ethereum/types-of-staking-part-2-27091ef5.svg',
      '/images/staking-on-ethereum/network-centralization-0622ba07.svg',
      '/images/staking-on-ethereum/staking-pools-46c96251.svg',
      '/images/staking-on-ethereum/network-centralization-again-43bfd55b.svg',
      '/images/staking-on-ethereum/reth-your-path-to-decentralized-staking-a5172608.svg'
    ],
    keywords: [
      'staking',
      'mining',
      'decentralized',
      'smart contract',
      'validator node',
      'staker',
      'validator nodes',
      'fraud',
      'credible neutrality',
      'consensus',
      'node operator',
      'consensus mechanism',
      'stake',
      'slashed',
      'proof-of-stake',
      'blocks',
      'block builders',
      'block proposer',
      'attestation',
      'block reward',
      'private keys',
      'self-custody',
      'staking pools',
      'smart contracts',
      'staking providers',
      'tokens',
      'lsts',
      'liquid',
      'restaking',
      'decentralized exchange',
      'staking pool',
      'liquid staking token'
    ],
    slides: [
      {
        type: 'LEARN',
        notionId: 'f6e6503183354fcdbc74fb3dd303f626',
        title: 'Staking on Ethereum',
        content: '<div class="bloc1"><p>Welcome, Explorer, to your next lesson!</p><p>Today, we’ll look at the process of “staking” — one simple way to build digital wealth.</p><p><code>Staking</code> is similar to <code>mining</code> on the Bitcoin network: they’re both systems for letting participants process transactions on the blockchain in exchange for rewards. They keep our networks <code>decentralized</code>.</p><p>However, there’s an important difference between mining and staking. Staking on Ethereum doesn’t require a powerful computer to compete against others. Simply locking Ether (ETH) in a network <code>smart contract</code> keeps Ethereum running and rewards you.</p></div><div class="bloc2"><img src=\'/images/staking-on-ethereum/staking-on-ethereum-50472cf7.png\'></div>'
      },
      {
        type: 'LEARN',
        notionId: 'c53e50f57c1c4cf299aeb9971d739b6d',
        title: 'Ethereum Wants You!',
        content: '<div class="bloc1"><p>Think of <code>staking</code> like an “internet bond”.</p><p>Just like supporting your government through bonds gives financial returns, supporting Ethereum brings rewards! Even better, like government bonds, staking is a way to show financial support for your values and the world you want to live in.</p><p>When you stake Ether, it is assigned to a <code>validator node</code> working to process transactions on Ethereum. The more Ether staked, the more nodes Ethereum can have. With more nodes, Ethereum becomes more <code>decentralized</code> and secure.</p><p>As a <code>staker</code>, you become a <strong>guardian of Ethereum!</strong></p><p>Now, let\'s take a deep look into staking mechanics and discover a stress-free and low-cost opportunity to start your staking journey today.</p><p>Grab your gear, let’s go!</p></div><div class="bloc2"><img src=\'/images/staking-on-ethereum/ethereum-wants-you-fd40b9e5.png\'></div>'
      },
      {
        type: 'LEARN',
        notionId: 'fcf9351332874288b5a7bf2b5b9f6d12',
        title: 'Blockchain Security',
        content: '<div class="bloc1"><p><code>Validator nodes</code> are key to a secure and legitimate economy on Ethereum. They protect the blockchain from <code>fraud</code>.</p><p>Fraud in the blockchain world looks like a user manipulating balances or creating non-existent crypto. Ethereum’s way of curbing it is ensuring that every transaction is valid and no participant has power over others. This fairness, known as <code>credible neutrality</code>, is vital. Why? Nobody wants to be a part of an economy where there\'s deceit and distrust — it will eventually collapse.</p><p>In a healthy blockchain, validator nodes share one goal: <strong>to</strong> <strong>reach decentralized agreement—across the network—on the state of the blockchain.</strong> Nodes scan transactions, check them against the blockchain’s history, and vote on their validity. Transactions that pass node <code>consensus</code> as valid are added to the blockchain.</p></div><div class="bloc2"><img src=\'/images/staking-on-ethereum/blockchain-security-7f2149fe.svg\'></div>'
      },
      {
        type: 'QUIZ',
        notionId: '9a6352929e6e494ab3b165039598794c',
        title: '✅ Knowledge Check',
        quiz: {
          question: 'How do validator nodes prevent fraud on Ethereum?',
          rightAnswerNumber: 3,
          answers: [
            'By overpowering each other.',
            'By creating non-existent crypto for certain people.',
            'By reaching decentralized agreement on valid transactions.'
          ],
          feedback: [
            'Try again! Nodes have no influence over each other. They work together to influence the blockchain.',
            'Try again! This would be committing fraud.',
            'Correct! Nodes agree on the state of the blockchain.'
          ],
          id: 'staking-on-ethereum-1'
        }
      },
      {
        type: 'LEARN',
        notionId: '8c558399c3624e3bbc8bea263dd62324',
        title: 'Proof-of-Stake',
        content: '<div class="bloc1"><p>Users who want to run a <code>validator node</code> on their computer must gather and lock 32 ETH — that’s a lot of money. In exchange for taking a large financial “stake” in the network, the <code>node operator</code> is allowed to propose and review blocks of transactions on Ethereum — and earn rewards. Think of blocks as groups of transactions submitted to the network.</p><p>The network’s <code>consensus mechanism</code> randomly selects a validator node to propose the next block and its decision is double-checked by other nodes to ensure honesty. When a node successfully proposes a block, its <code>stake</code> grows.</p></div><div class="bloc2"><img src=\'/images/staking-on-ethereum/proof-of-stake-49c358ed.svg\'></div>'
      },
      {
        type: 'LEARN',
        notionId: 'b103503df12146dd9852717fc17bb02a',
        title: 'Slashing',
        content: '<div class="bloc1"><p>When a node is too slow or tries to approve fraud, its stake is <code>slashed</code>: it gets a penalty charge. This way, staked Ether becomes a form of insurance where nodes are incentivized to be honest and keep Ethereum running smoothly.</p><p>For an attacker to approve fraud on Ethereum, they must have control over majority of the validator nodes and thus, staked Ether. Fortunately this can\'t happen if everyday users are involved in staking. <code>Decentralized</code> ownership of the network divides the power to make decisions.</p></div><div class="bloc2"><img src=\'/images/staking-on-ethereum/slashing-ccabe137.svg\'></div>'
      },
      {
        type: 'QUIZ',
        notionId: '3e7bf2b7a80b4d58adb59c9fe47fb7af',
        title: '✅ Knowledge Check',
        quiz: {
          question: 'True or False: Validator nodes caught processing fraudulent blocks will receive penalty charges.',
          rightAnswerNumber: 1,
          answers: [
            'True',
            'False'
          ],
          feedback: [
            'Correct! This “slashing” incentivizes nodes to stay honest!',
            'Try again! Nodes must receive some sort of punishment for dishonest actions.'
          ],
          id: 'staking-on-ethereum-2'
        }
      },
      {
        type: 'LEARN',
        notionId: 'b9fbae598d8f489a8cdacb40144815de',
        title: 'Validating Transactions',
        content: '<div class="bloc1"><p>Let\'s get into the step-by-step process of how nodes come to agreement using <code>Proof-of-Stake</code> consensus:</p><ol><li><strong>Staking:</strong> A <code>node operator</code> locks 32 ETH on the network and begins running a <code>validator node</code>.</li><li><strong>Block Building:</strong> Users submit transactions ordered into <code>blocks</code> by <code>block builders</code>.</li><li><strong>Proposer Selection:</strong> An algorithm selects a validator node to propose the next block to be added to the blockchain.</li><li><strong>Block Proposal:</strong> The <code>block proposer</code> reviews potential blocks and selects one, granting their <code>attestation</code> if valid.</li><li><strong>Cross-Verification:</strong> Other validators double-check the block and grant attestation if valid. Invalid blocks are discarded and the proposer is <code>slashed</code>.</li><li><strong>Block Addition:</strong> The valid block is added to the Ethereum blockchain.</li><li><strong>Rewards:</strong> The block proposer earns a <code>block reward</code> and transaction tips. The other validators are also rewarded.</li></ol></div><div class="bloc2"><iframe allowfullscreen class=\'animation\' src=\'https://app.banklessacademy.com/animation/validating-tx-with-ethereum-staking\'></iframe></div>'
      },
      {
        type: 'QUIZ',
        notionId: '802bd3e3ac71461fa38ab668e9873b00',
        title: '✅ Knowledge Check',
        quiz: {
          question: 'What is the name of the validator node selecting the next block to be added to Ethereum?',
          rightAnswerNumber: 3,
          answers: [
            'Staker',
            'Block builder',
            'Block proposer'
          ],
          feedback: [
            'Try again! Stakers support validator nodes, but don’t run the node themselves.',
            'Try again! Block builders order incoming transactions into potential blocks, but don’t add them to the blockchain.',
            'Correct! Block proposers, looking at blocks from block builders, choose one to add to the blockchain.'
          ],
          id: 'staking-on-ethereum-3'
        }
      },
      {
        type: 'LEARN',
        notionId: '5ac23eb478224f14a8dda33b59a2bf43',
        title: 'Ethernomics',
        content: '<div class="bloc1"><p>For providing Ether to a validator node, stakers earn a portion of its rewards.</p><p>Rewards received by nodes are based on various ecosystem factors and can change. Simply put, the rewards are a portion of transaction fees and a small amount of newly issued Ether added to new blocks.</p><p>Annual yield can look like anything between a 3% to 16% return on staked Ether. The exact amount is based on two key factors:</p><ul><li>📈<strong> Network Activity:</strong> Generally speaking, if traffic is low rewards are lower. If traffic is high, they’re higher.</li><li>👥<strong> Number of Validator Nodes:</strong> Rewards get further divided with more participants.</li></ul><p>Yields also change depending on how exactly you stake your Ether. Let’s look at our options.</p></div><div class="bloc2"><img src=\'/images/staking-on-ethereum/ethernomics-33407ddc.svg\'></div>'
      },
      {
        type: 'LEARN',
        notionId: '7e977dd7c1544b2db6810289a13d2947',
        title: 'Types of Staking',
        content: '<div class="bloc1"><p>You’ll typically need to lock 32 ETH to run a <code>validator node</code>, but new staking methods have made guarding Ethereum available to everyone.</p><p>So, there are three ways to protect Ethereum:</p><ul><li>📡 <strong>Solo Staking:</strong> Run a validator node yourself.</li><li>⛲ <strong>Staking Pools:</strong> Join a group of stakers and run a node together.</li><li>🏦 <strong>Centralized Exchange Staking:</strong> Join a “crypto bank” node.</li></ul><p>Each method requires varying levels of technical knowledge to get set up, along with its own associated risks.</p><p>If you’re comfortable holding your <code>private keys</code> but don’t have 32 ETH, then consider joining others in a staking pool. </p><p>If you’re not yet okay with taking <code>self-custody</code> of your crypto, check out Centralized Exchange staking. In the mean time, take our <a href=\'https://app.banklessacademy.com/lessons/wallet-basics\'>Wallet Basics</a> lesson and boldly take ownership of your crypto!</p></div>'
      },
      {
        type: 'LEARN',
        notionId: '20dbf51d28cc48c48868ddbba29b34ac',
        title: 'Types of Staking (Part 2)',
        content: '<div class="bloc-ab"><div class="bloc-a"><img src=\'/images/staking-on-ethereum/types-of-staking-part-2-9de268fd.svg\'></div><div class="bloc-b"><p><span class=\'color-default\'><strong>Solo Staking</strong></span></p><p>🟡 Requires 32 ETH</p><p>🟡 Technical Setup</p><p>🟢 Decentralizes Ethereum</p><p><strong>Risks:</strong> You may lose your private keys, get <code>slashed</code>, or receive minor penalties for an offline node.</p></div></div><div class="bloc-ab"><div class="bloc-a"><img src=\'/images/staking-on-ethereum/types-of-staking-part-2-96f11caf.svg\'></div><div class="bloc-b"><p><strong>Staking Pools</strong></p><p>🟢 Any amount of ETH</p><p>🟢 Easy Setup</p><p>🟡 Decentralized Options</p><p><strong>Risks:</strong> There could be a bug in the staking pool’s smart contract or you may lose your private keys.</p></div></div><div class="bloc-ab"><div class="bloc-a"><img src=\'/images/staking-on-ethereum/types-of-staking-part-2-27091ef5.svg\'></div><div class="bloc-b"><p><strong>Centralized Exchange Staking</strong></p><p>🟢 Any amount of ETH</p><p>🟢 Easy Setup</p><p>🔴 Centralizes Ethereum</p><p><strong>Risks:</strong> Your exchange could declare bankruptcy — this may lead to loss of your holdings.</p></div></div>'
      },
      {
        type: 'LEARN',
        notionId: '1bdf5971c3c94e5ca3323c7af00fed38',
        title: 'Network Centralization',
        content: '<div class="bloc1"><p><strong>Any staking that leads to many nodes under one entity begins to centralize Ethereum.</strong></p><p>Imagine Ethereum as a web of connected <code>validator nodes</code>. When nodes are concentrated under one or a few entities, the entire web becomes imbalanced and unsafe. For this not to happen, we need lots of unique connection points.</p><p>A single entity gaining control over enough nodes is bad. This forces blocks of transactions through the centralized section of the web. The centralized entity could begin approving fraudulent blocks, or even denying valid ones. This would destroy Ethereum’s <code>credible neutrality</code>.</p><p>As its guardians, we must focus on staking methods that keep the web balanced and <code>decentralized</code>.</p><p>You may face many barriers with running your own validator node as a beginner. Instead, let\'s explore a beginner-friendly option to decentralized staking: <code>staking pools</code>.</p></div><div class="bloc2"><img src=\'/images/staking-on-ethereum/network-centralization-0622ba07.svg\'></div>'
      },
      {
        type: 'QUIZ',
        notionId: 'e9cad4dd12fa472ba02b101739921dd7',
        title: '✅ Knowledge Check',
        quiz: {
          question: 'What would happen if a single entity controlled a majority of validator nodes?',
          rightAnswerNumber: 1,
          answers: [
            'They could approve blocks including fraudulent transactions.',
            'They would gain control of all validator nodes.',
            'Ethereum would stop processing transactions altogether.',
            'All of the above.'
          ],
          feedback: [
            'Correct! Ethereum would lose its credible neutrality.',
            'Try again! Other nodes cannot be controlled, but their voice can be overpowered.',
            'Try again! Ethereum wouldn’t stop running during such an attack, but its credible neutrality would be lost.',
            'Try again! Only one of the above answers is correct.'
          ],
          id: 'staking-on-ethereum-4'
        }
      },
      {
        type: 'LEARN',
        notionId: '561e1079d9874ee3976977a90426bb5d',
        title: 'Staking Pools',
        content: '<div class="bloc1"><p>The best part about <code>staking pools</code> is that they’re entirely run by <code>smart contracts</code>. You don’t have to meet the other stakers in person and you don’t have to trust them. You do however have to trust the smart contract.</p><p>Staking pools are organized by <code>staking providers</code>, digital platforms connecting stakers across the world! In staking pools, a <code>node operator</code> stakes at least 16 ETH and runs the node, while other participants supply the remaining Ether. The node operator earns extra yield for their service.</p><p>The remaining staking participants are given “Liquid Staking Tokens” (LSTs) representing their membership to the pool. These <code>tokens</code> stand for a share of a pool’s staked Ether. The holder earns a portion of rewards equal to the represented stake, and can use them to redeem their stake at any time.</p><p>By simply holding an LST—like Rocket Pool’s rETH—you own a share of a staking pool. Yep, your Ether is decentralizing Ethereum and earning staking rewards!</p></div><div class="bloc2"><img src=\'/images/staking-on-ethereum/staking-pools-46c96251.svg\'></div>'
      },
      {
        type: 'QUIZ',
        notionId: '3222f2f41d574a28ba4ce99dc7ecbce2',
        title: '✅ Knowledge Check',
        quiz: {
          question: 'Which entity hosts the staking pool?',
          rightAnswerNumber: 3,
          answers: [
            'The node operator.',
            'The remaining staking participants.',
            'The staking provider.'
          ],
          feedback: [
            'Try again! Node operators run the validator node, but not the pool itself.',
            'Try again! Stakers provide Ether, but don’t run the pool.',
            'Correct! The pool is hosted through the provider’s smart contracts.'
          ],
          id: 'staking-on-ethereum-5'
        }
      },
      {
        type: 'LEARN',
        notionId: '2664f39b79d2408a9b3de46c76cac42c',
        title: 'Liquid Staking Tokens',
        content: '<div class="bloc1"><p>The best thing about <code>LSTs</code> is that even while your Ether is staked and gathering yield, it maintains a <code>liquid</code> form.</p><p>“Liquid” in this case means that it can still flow throughout the ecosystem. Think of holding a share of a staking pool… but you can use it as money! LSTs can be swapped, used as collateral for loans, or even deposited on <code>restaking</code> platforms for bonus yield.</p><p>LSTs are great because they open access to staked Ether. Staking pools often have minimum deposit amounts for adding Ether to the pool (around 0.01 ETH). However, using LSTs, you can buy even smaller increments of staked Ether on your favorite <code>decentralized exchange</code>.</p></div>'
      },
      {
        type: 'LEARN',
        notionId: '4942d5247e6b41899c4f1bf1e6b66a31',
        title: 'Network Centralization — Again!',
        content: '<div class="bloc1"><p>Staking pools and LSTs have the same catch as the different staking methods: <strong>they function in different degrees of centralization and decentralization.</strong></p><p>Staking providers like Rocket Pool have made sure that anyone, anywhere can be the <code>node operator</code> of a staking pool. This supports new node operators in building their 32 ETH stake, and helps to decentralize Ethereum. However, other providers only allow a small range of their contacts to run their nodes, making the centralization of staked Ether a risk.</p><p>If any entity gains over 33% control of all staked Ether, they could cause problems on the network. At 50%, they seriously threaten Ethereum’s <code>credible neutrality</code>.</p><p>Staking provider Lido (as of early 2024) already hovers around the problematic 33% mark.</p><p>To guard Ethereum, we need to do our research. Even with <code>staking pools</code> we need to make choices that support decentralization.</p></div><div class="bloc2"><img src=\'/images/staking-on-ethereum/network-centralization-again-43bfd55b.svg\'></div>'
      },
      {
        type: 'QUIZ',
        notionId: '4abc237a56fb4c1c863c0190b17b52f3',
        title: '✅ Knowledge Check',
        quiz: {
          question: 'True or False: Supporting new node operators helps to decentralize Ethereum.',
          rightAnswerNumber: 1,
          answers: [
            'True',
            'False'
          ],
          feedback: [
            'Correct! More node operators means more independent validator nodes detecting fraud.',
            'Try again! The more independent nodes, the better.'
          ],
          id: 'staking-on-ethereum-6'
        }
      },
      {
        type: 'LEARN',
        notionId: 'a0934d6558514f63bff55fa3207a871a',
        title: 'rETH - Your Path to Decentralized Staking',
        content: '<div class="bloc1"><p>It’s time to become a staker — a guardian of Ethereum.<br>For today’s quest, we’re taking ownership of a <code>staking pool</code> at Rocket Pool.</p><p>🪙 It’s simple: Mint or buy Rocket Pool’s <code>liquid staking token</code>, <strong>rETH</strong>.</p><p>As the first step on your staking journey, you’ll be funding a <code>validator node</code> to process blocks, in exchange for Ether rewards.</p><p><strong>Note:</strong> With rETH, staking rewards are added to the value of the token. If you hold 1 rETH today, you’ll still own 1 rETH in a year. It will just be worth more.</p><p>Good luck on your quest, Explorer! May your commitment to Ethereum’s decentralized future be greatly rewarded.</p></div><div class="bloc2"><img src=\'/images/staking-on-ethereum/reth-your-path-to-decentralized-staking-a5172608.svg\'></div>'
      },
      {
        type: 'QUEST',
        title: 'Staking on Ethereum Quest',
        component: 'StakingOnEthereum'
      }
    ]
  },
  {
    badgeImageLink: null,
    lessonImageLink: '/images/staking-ether/lesson-c9e39d73.png',
    socialImageLink: '/images/staking-ether/social-040aeea7.png',
    learningActions: '',
    marketingDescription: 'Generate yield on your Ether by protecting Ethereum.',
    badgeId: null,
    collectibleId: 'H007',
    duration: 5,
    learnings: '',
    description: 'Generate yield on your Ether by protecting Ethereum.',
    name: 'Staking Ether',
    languages: [],
    level: 'Level 1',
    lessonWriters: 'Tetranome',
    publicationStatus: 'publish',
    publicationDate: '2024-02-21',
    featuredOrderOnHomepage: null,
    isCommentsEnabled: false,
    endOfLessonRedirect: null,
    mirrorLink: 'https://mirror.xyz/banklessacademy.eth/rnxCnDuopoauSu61vG-ldteB7sw5WfAeurWmcGN5pps',
    mirrorNFTAddress: '0xe2dd5eb9841920937833c094874ba33d26becb4f',
    areMirrorNFTAllCollected: false,
    sponsorName: 'Rocket Pool',
    sponsorLogo: '/images/staking-ether/sponsor-c94516e2.png',
    isArticle: true,
    notionId: 'fef542e5e6a8431b95081ba714c551cc',
    englishName: 'Staking Ether',
    slug: 'staking-ether',
    articleContent: 'This is a summary and walkthrough for our [’Staking on Ethereum’](https://app.banklessacademy.com/lessons/staking-on-ethereum) lesson and quest. Check out [the full lesson](https://app.banklessacademy.com/lessons/staking-on-ethereum) to **level up your knowledge and claim your badge!**\n\n\n---\n\n## Key Takeaways\n\n> * Staking is essential to decentralization and transaction processing on Ethereum.\n>\n> * It’s simple: lock Ether on the network, earn rewards.\n>\n> * Running a `validator node` is the fundamental form of staking on Ethereum, requiring 32 Ether.\n>\n> * Using the rETH `token`, Explorers can get involved in staking with any amount of Ether.\n\n## What is Staking?\n\nPut simply, staking on Ethereum is an action that allows anyone to help secure the network. You lock a portion of Ether on the network, aiding network validators, and earning rewards.\n\nStaking is an essential part of Ethereum’s `consensus mechanism`: the separation of legitimate transaction and blocks from the fraudulent ones, in a `decentralized` way. This sorting is integral for maintaining a fair economy across the network.\n\nThis might sound familiar — because it has the same goal as mining does on the Bitcoin network. Yet there’s a crucial difference between mining and staking: On Ethereum, staking can be accessed by anyone. You don’t need a powerful computer to process transactions, like you would for mining on Bitcoin.\n\nSo by simply buying Ether and locking it in a network `smart contract`, you can become a staker. In doing so, you’ll help keep Ethereum running smoothly, and earn rewards in return!\n\n## Start Staking with rETH\n\nNow, the best way to get involved in securing Ethereum is to run a `validator node`. It grants the most rewards, and has the biggest impact on network decentralization. The problem is… it requires 32 ETH, some technical knowledge, and a dedicated computer with 24/7 power and internet access. That’s a tall order for most Explorers. Fortunately, innovators within the Ethereum community have created an easy entry point that anyone can use to get involved: `staking pools` and `liquid staking tokens` (LSTs).\n\nRocket Pool is a leader in this category, with an approach granting high positive network impact. By locking Ether in one of their staking pools, you’ll `mint` rETH. While minting rETH directly from the Rocket Pool smart contract has the largest impact on network decentralization, you can also buy it on a `decentralized exchange`. In holding this token, you’ll begin earning staking rewards, generating annual returns between 3% and 16%.\n\nWith rETH, staking rewards are added straight to the value of the token: If you hold 1 rETH today, you will still own 1 rETH in a year. It will just be worth more.\n\n## Prerequisites\n\n* You’ll need some regular ETH on one of the following networks: Ethereum, Optimism, Base, Arbitrum or Polygon (POS).\n\n## Walkthrough\n\n### Option #1: Minting New rETH\n\nRequires >0.01 ETH, and only works on Ethereum Mainnet.\n\n**1\. Head over to <https://stake.rocketpool.net/> and connect your wallet.**\n\n![](/images/staking-ether/image-80cf7889.png)\n\n**2\. Enter the amount you’d like to stake, hit ‘Stake’, and then in your wallet hit ‘Submit’.**\n\nYour rETH will land in your wallet once your transaction has been processed. It’s that easy.\n\n![](/images/staking-ether/image-255e1bf8.png)\n\n### Option #2: Buying rETH on a Decentralized Exchange\n\nNo minimum balance requirements, and works on all networks listed above.\n\n**1\. Jump to <https://app.uniswap.org/swap> and connect your wallet.**\n\nWe’re swapping on the Optimism `layer 2` network, because gas fees are a lot lower than on Ethereum mainnet. Learn how to bridge to Optimism, [in our “How to Fund Your Wallet on L2” article](https://app.banklessacademy.com/lessons/funding-a-wallet-on-layer-2).\n\n![](/images/staking-ether/image-8d944152.png)\n\n**2\. Enter the amount you’d like to hold, hit ‘Swap’, and then in your wallet hit ‘Confirm’.**\n\nYour rETH will land in your wallet once your transaction has been processed. It’s that easy.\n\n![](/images/staking-ether/image-5d667f3c.png)\n\n\n---\n\n**It’s time to become a guardian of Ethereum!** We hope you’ve enjoyed this entry in the Explorer’s Handbook: ‘’Staking Ether”.\n\nDon’t forget to collect this entry if you want to own a copy for easy reference on your travels, and to support future content at Bankless Academy.\n\nSafe travels, Explorer!\n\n\n---\n\n## FAQ\n\n### What are the risks of staking?\n\nIt depends on the method used, but the one shared risk is that the validator nodes you’re involved with could get slashed. In most staking pools and centralized exchange staking, these kinds of losses are diluted across the entire platform (everyone shares the loss, diminishing its impact) or even insured.\n\nOther risks include:\n\n* `Solo Staking`: A bug in the validator node’s chosen `validator client` software.\n\n* `Staking Pools`: A bug in the staking pool’s smart contracts, or the validator client software.\n\n* `Centralized Exchange Staking`: Sudden bankruptcy of the exchange, and loss of any stake in it.\n\nThe potential impact of each risk is really difficult to predict, but it’s safe to say that staking Ether is more risky than simply holding it. Where there’s reward, there’s risk! Only invest what you’re willing to lose.\n\n### Does all staking benefit Ethereum?\n\nBenefit comes in the form of `decentralization` — you want as many independent `node operators` as possible.\n\n* `Solo Staking`: Maximum decentralization, as this typically means just a few nodes under one person.\n\n* `Staking Pools`: It depends on the platform. Some staking providers only allow specific people to act as validator nodes within their pools. That means many nodes under a few people — a centralizing force. Rocket Pool is one of the few providers that allow anyone to become the node operator of a staking pool. This makes their platform one of the best staking options for citizens of Ethereum.\n\n* `Centralized Exchange Staking`: Much like the centralizing forces within staking pools, many nodes under one entity is bad for Ethereum.\n\n### Do staking rewards change?\n\nYes, rewards depend on two key factors:\n\n* **Network Activity:** Generally speaking, in times of low traffic rewards are lower, and in high traffic they’re higher.\n\n* **Number of Validator Nodes:** With more participants, rewards are further divided.\n\nRewards also change based on the staking method chosen. Check out our [“Staking on Ethereum” lesson](https://app.banklessacademy.com/lessons/staking-on-ethereum) to learn more!\n\n### How do I run a validator node?\n\nIf you want to become a `solo staker`, you’ll need the full 32 ETH, as well as your validator hardware. Check out [this great guide by CoinCashew](https://www.coincashew.com/coins/overview-eth/guide-or-how-to-setup-a-validator-on-eth2-mainnet).\n\nYou can get started with just 16 ETH by running a `staking pool` with Rocket Pool, where other participants will help you reach the 32 ETH required. Of course, you’ll still need your validator hardware. Check out [the documentation over at Rocket Pool](https://docs.rocketpool.net/guides/) to get started!\n\n\n---\n\n**Author**\n\n[Tetranome](https://twitter.com/Tetranome) is the Project Champion at Bankless Academy, focusing on user experience, interface, design, and content.\n\n**Patron**\n\nThis article is funded by [Rocket Pool](https://rocketpool.net/).',
    imageLinks: [
      '/images/staking-ether/image-80cf7889.png',
      '/images/staking-ether/image-255e1bf8.png',
      '/images/staking-ether/image-8d944152.png',
      '/images/staking-ether/image-5d667f3c.png'
    ],
    keywords: [
      'validator node',
      'token',
      'consensus mechanism',
      'decentralized',
      'smart contract',
      'staking pools',
      'liquid staking tokens',
      'mint',
      'decentralized exchange',
      'layer 2',
      'Solo Staking',
      'validator client',
      'Staking Pools',
      'Centralized Exchange Staking',
      'decentralization',
      'node operators',
      'solo staker',
      'staking pool'
    ]
  },
  {
    badgeImageLink: null,
    lessonImageLink: '/images/managing-token-allowances/lesson-dcf41ef6.png',
    socialImageLink: '/images/managing-token-allowances/social-6f251351.png',
    learningActions: '',
    marketingDescription: 'Protect your wallet from unwanted smart contract interactions.',
    badgeId: null,
    collectibleId: 'H004',
    duration: 5,
    learnings: '',
    description: 'Protect your wallet from unwanted smart contract interactions.',
    name: 'Managing Token Allowances',
    languages: [],
    level: 'Level 1',
    tags: [
      'Security'
    ],
    lessonWriters: 'estmcmxci, Tetranome',
    publicationStatus: 'publish',
    publicationDate: '2023-08-30',
    featuredOrderOnHomepage: null,
    isCommentsEnabled: false,
    endOfLessonRedirect: null,
    mirrorLink: 'https://mirror.xyz/banklessacademy.eth/25cFAg4NR8wImRBa4hsYM8cHrzdD5oGa27EYbwRIw2U',
    mirrorNFTAddress: '0x0ae1cfd5f84bde987b255e822463a17705ad9ba9',
    areMirrorNFTAllCollected: false,
    sponsorName: 'Revoke.cash',
    sponsorLogo: '/images/managing-token-allowances/sponsor-20e8598f.png',
    isArticle: true,
    notionId: '7e849598acb245fea60fca7162b937c3',
    englishName: 'Managing Token Allowances',
    slug: 'managing-token-allowances',
    articleContent: '## Key Takeaways\n\n> * Token allowances refer to permissions granted to `smart contracts` to spend tokens from a wallet without further approval.\n>\n> * They can be exploited by malicious actors if the user is not aware permissions are in place.\n>\n> * Tools like Revoke.cash allow users to easily inspect and revoke token allowances.\n\n## Introduction\n\nDeFi grants users control over their assets, including their `private keys`, offering unprecedented sovereignty and authority over their funds. However, with great power comes greater responsibility, requiring users to take full charge of the safety and management of their assets.\n\nThere are four common categories of scams that DeFi users should be aware of:\n\n* **Seed Phrase Compromise:** Attackers attempt to deceive users into revealing their seed phrases, which would give them unauthorized access to funds. With your seed phrase, an attacker can drain all your funds and continue doing so if you deposit additional funds into the wallet. Unfortunately, there is no way to recover from this situation, and the only solution is to create a completely new wallet with a new `seed phrase`.\n\n* **Direct ETH Transfers:** Scammers can conceal ETH transfers by either requesting an “eth_sign” signature or disguising it as a function call, such as “Security Update.” Falling for this scam means you won’t be able to recover your funds, but you can still safely use your wallet for other transactions.\n\n* **NFT Marketplace Listings:** Be cautious of fake listings and malicious contracts that exploit the allowances you grant to marketplaces like OpenSea. Scammers may trick you into signing an `offchain` message that lists your approved `NFTs` for sale, with no actual token transaction taking place.\n\n* **Token Allowances:** Attackers may manipulate permissions to gain access to more funds than initially approved. “Approvals” are on-chain transactions that grant access to your tokens or NFTs. “Permits” offer the same access but only require an off-chain signature.\n\n  As smart contracts gain popularity, `token allowances` become necessary to enable trusted contracts to execute transactions without exposing private keys. Token allowances allow dApps to automatically move tokens in your wallet on your behalf. While this convenience boosts efficiency, it also exposes users to potential attack vectors through scams and unauthorized access.\n\nIn this article, we’ll discuss ‘Token Allowances’ and introduce a community tool built to help manage your permissions.\n\n## Token Allowances: Understanding, Managing, and Ensuring Safety\n\nToken allowances are permissions given in advance to smart contracts to spend tokens from a wallet. They serve a crucial role in facilitating transactions without requiring explicit permission every time for direct asset transfers from the wallet. When misused, however, token allowances can become an attack vector for the unsuspecting. To address this risk, it’s important that DeFi users exercise caution, educate themselves on the security landscape, and understand how token allowances actually work.\n\nThere are two steps involved when granting permissions to a third-party contract:\n\n1. Wallet permission: When connecting your wallet to a dApp, you grant its smart contract permission to access your wallet’s `public key`, view your balances, and monitor your wallet activity.\n\n2. Token approval: Once you’ve granted this access to your wallet, you then approve your tokens to be moved on your behalf in order to complete transactions.\n\nBy proactively managing token allowances, users can ensure that no contract withdraws more than the initially specified amount from their wallet. Luckily, there are community tools built to help give DeFi users confidence and peace of mind.\n\n## Walkthrough: Using Revoke.cash\n\n[Revoke.cash](https://revoke.cash/) empowers users to easily manage their token allowances through a simple website that helps inspect and monitor allowances given to different dApps. Let’s walkthrough how you can use this powerful community tool to help you safeguard your assets and take back control of your wallet.\n\n**1\. Connect your wallet**:\n\nTo begin the process of revoking your token allowances, head to [Revoke.cash](http://revoke.cash/) and click on “Connect Wallet” located in the top-right corner. Alternatively, you can manually enter your wallet public address in the search bar. Once the loading is complete, you’ll see a list of all your token approvals on that network.\n\n![](/images/managing-token-allowances/image-f95ea594.png)\n\n**2\. Inspect your allowances**:\n\nOnce you have connected your wallet, you can inspect your existing approvals. You can sort, filter, or search for specific approvals based on the authorized spender address. Sorting by “Newest to Oldest” is particularly useful if you suspect a malicious approval recently. Use the network selection, sorting, and filtering options provided to gain an overview of token allowances you have granted across various networks.\n\n![](/images/managing-token-allowances/image-f3b00f4a.png)\n\n**3\. Revoke undesired allowances:**\n\nOnce you identify the approvals you want to revoke, simply click the “Revoke” button next to each of them. Optionally, you can update the approval to a different amount by clicking the pencil icon next to the approved amount if you still require the approval in the future but wish to reduce your risk.\n\n![](/images/managing-token-allowances/image-138cb12e.png)\n\nIt might be in your best interest to revoke or adjust a token allowance if:\n\n1. A recently deployed smart contract is exploited and creates a vulnerability in a `decentralized exchange` you regularly use.\n\n   Earlier this year, popular `DEX` SushiSwap suffered a similar exploit, when \~$3.5M was stolen from users. Affected users remained at risk if they hadn’t revoked their token allowance.\n\n2. A malicious governance proposal updates several contracts with the intent of draining users’ funds.\n\n   More than $2.5M in assets were compromised when Atlantis Loans, a `DeFi` protocol on a BNB chain, executed a governance proposal that targeted several contracts. Users who managed their approval limit mitigated the risk of their wallets being fully drained by the malicious proposal.\n\n\n---\n\nIt’s time to strengthen our wallet defenses! We hope you’ve enjoyed this entry in the Explorer’s Handbook: ‘Managing Token Allowances’.\n\nDon’t forget to collect this entry if you want to own a copy for easy reference on your travels, or to support future content at Bankless Academy. Safe travels, Explorer!\n\n\n---\n\n## FAQ\n\n### When should I use Revoke.cash?\n\nUse Revoke.cash periodically, especially during periods when you are not actively using a dApp, particularly for NFT marketplaces. Limiting approvals lessens the risk of funds loss due to hacks, exploits, or phishing scams. By sorting your approvals to show the most recent, you can identify the suspicious approvals and revoke them promptly, mitigating further damage.\n\n### Does disconnecting my wallet protect me from approval exploits?\n\nDisconnecting your wallet from a dApp does not protect you from exploits, approvals or otherwise. The token approvals you previously granted remain active even after disconnecting, because they are stored onchain.\n\n### How can I avoid token allowance exploits and similar risks?\n\nA proactive approach to token allowances includes:\n\n* granting allowances only to trusted dApps.\n\n* periodically reviewing token allowances.\n\n* removing unnecessary or suspicious allowances.\n\n* staying informed about dApps’ security updates.\n\nConsider using third-party tools like the Revoke.cash [browser extension](https://revoke.cash/extension) — it acts as a proactive measure against potential threats. The extension warns you if you are about to sign something potentially harmful, protecting you from phishing scams or other malicious activities.\n\n### Can I recover funds with Revoke.cash?\n\nUnfortunately, Revoke.cash cannot recover stolen funds. It serves as a preventive tool to reduce the likelihood of becoming a victim of approval exploits. However, revoking the approvals used to steal your funds can prevent further theft.\n\n### Why does my wallet keep getting drained each time I top it up?\n\nYour wallet may contain a “sweeper bot,” a script that monitors and acts on transactions from a compromised wallet. When it detects such transactions, the bot initiates a new transaction before the original one completes, allowing it to rapidly transfer any new deposits out. If your wallet has such a “sweeper bot” stealing incoming ETH, it means your seed phrase is compromised. Revoking approvals won’t improve your wallet’s security. The best course of action is to abandon the compromised wallet and create a new one.\n\n\n---\n\n**Author**\n\n**[Marcus](https://twitter.com/estmcmxci)** publishes the ENS DAO Newsletter. He researches how surplus revenue generated from protocol fees can subsidize application layer development and other open source infrastructure.\n\n**Editors**\n\n**[Tetranome](https://twitter.com/Tetranome)** is the Project Champion at Bankless Academy, focusing on user experience, interface, design, and content.\n\n**[Trewkat](https://twitter.com/trewkat)** is a writer and editor at BanklessDAO. She’s interested in learning about crypto and NFTs, with a particular focus on how best to communicate this knowledge to others.\n\n**Patron**\n\nThis unsponsored article is part of your free Bankless Academy education. Collect the article to support future content!',
    imageLinks: [
      '/images/managing-token-allowances/image-f95ea594.png',
      '/images/managing-token-allowances/image-f3b00f4a.png',
      '/images/managing-token-allowances/image-138cb12e.png'
    ],
    keywords: [
      'smart contracts',
      'private keys',
      'seed phrase',
      'offchain',
      'NFTs',
      'token allowances',
      'public key',
      'decentralized exchange',
      'DEX',
      'DeFi'
    ]
  },
  {
    badgeImageLink: '/images/dex-aggregators/badge-70fa5c0e.png',
    lessonImageLink: '/images/dex-aggregators/lesson-cfab26b7.png',
    socialImageLink: '/images/dex-aggregators/social-8eedc35a.jpg',
    learningActions: '',
    marketingDescription: 'Dive into DEX Aggregators, liquidity, and the DeFi exchange landscape.',
    badgeId: 6,
    duration: 15,
    learnings: '',
    description: 'Dive into DEX Aggregators, liquidity, and the DeFi exchange landscape.',
    name: 'DEX Aggregators',
    languages: [],
    level: 'Level 1',
    lessonWriters: 'iSpeakNerd',
    quest: 'DEXAggregators',
    publicationStatus: 'publish',
    publicationDate: '2022-10-13',
    featuredOrderOnHomepage: null,
    isCommentsEnabled: false,
    endOfLessonRedirect: null,
    sponsorName: '1inch',
    sponsorLogo: '/images/dex-aggregators/sponsor-4ead7b48.png',
    notionId: '48b3a9d48fe34d5593c125d5811b1273',
    englishName: 'DEX Aggregators',
    slug: 'dex-aggregators',
    imageLinks: [
      '/images/dex-aggregators/introduction-1f25c90b.svg',
      '/images/dex-aggregators/an-example-of-how-liquidity-impacts-prices-24eb7dd7.svg',
      '/images/dex-aggregators/shortcomings-of-traditional-dexs-thin-liquidity-384b90b6.svg',
      '/images/dex-aggregators/recombining-liquidity-with-dex-aggregators-c12c49a1.svg',
      '/images/dex-aggregators/how-gas-cost-is-calculated-on-ethereum-c7d692cd.svg',
      '/images/dex-aggregators/how-aggregators-reduce-gas-costs-for-users-aea20eff.svg',
      '/images/dex-aggregators/meta-aggregators-7609a2ce.svg',
      '/images/dex-aggregators/avoiding-sandwich-attacks-d4114147.svg',
      '/images/dex-aggregators/more-protection-from-sandwiches-otc-trades-3da1b5df.svg'
    ],
    keywords: [
      'decentralized exchanges',
      'dex aggregators',
      'swap',
      'liquidity',
      'price impact',
      'intermediary token',
      'trade route',
      'gas',
      'gwei',
      'trade routes',
      'dapp',
      'meta-aggregator',
      'dexs',
      'slippage tolerance',
      'sandwich attacks',
      'otc',
      'over the counter',
      'liquidity pools'
    ],
    slides: [
      {
        type: 'LEARN',
        notionId: '33abf72cd0994182bbaac36125da3788',
        title: 'Introduction',
        content: '<div class="bloc1"><p><code>Decentralized Exchanges</code> (DEXs) eliminate the costs of intermediaries and save Explorers money when trading assets. </p><p>But did you know, Explorer, that there’s more ways to save with DeFi technology? Using <code>DEX aggregators</code>, you can scan all possible trades on various DEX platforms simultaneously and execute the best trade route — all in one action. They help you get the best deal when doing a token <code>swap</code>. Just like airline flight aggregators help you find the cheapest flight, DEX aggregators help you maximize the value of your trade.</p><p>This lesson will show:</p><ol><li>How DEXs split liquidity and how that can result in reduced trading rates.</li><li>How DEX aggregators enable users to view and use multiple DEXs through one interface.</li><li>Multiple ways a single aggregator interface can save Explorers time and money.</li></ol></div><div class="bloc2"><img src=\'/images/dex-aggregators/introduction-1f25c90b.svg\'></div>'
      },
      {
        type: 'LEARN',
        notionId: 'c81a4b2290d84ac28917f44a266ace23',
        title: 'How Liquidity Affects Prices',
        content: '<div class="bloc1"><p>The amount of any token that is available to trade on a single market is called a token’s <code>liquidity</code>. The amount of liquidity available strongly influences the <code>price impact</code> when making trades in DeFi; a large price impact means the trade will cost more, and a low price impact will cost less. Most people prefer to trade in markets with higher liquidity to reduce their price impact. </p><p>You can think of it like a swimming pool; the more water (liquidity) there is, the smaller the <em>change </em>in the water level (price impact) when someone jumps in or leaves. The size of that ‘someone’ (the trade) also affects the <em>change</em> in the water level (price impact).</p></div>'
      },
      {
        type: 'LEARN',
        notionId: '137fbe05adb943f99cafdfd6bd2ef057',
        title: 'An Example of How Liquidity Impacts Prices',
        content: '<div class="bloc1"><p>Let’s look at an example. </p><p>The BanklessDAO token (BANK) has a liquidity amount of ~30 million BANK on Uniswap, but only ~4.5 million BANK on SushiSwap. Uniswap has over 6x the BANK liquidity of SushiSwap.</p><p>If an Explorer was to purchase 10,000 BANK from each pool, they would find that the <code>price impact</code> of their trade would result in a higher trade price in the SushiSwap pool — because their trade has pulled a larger percentage of the pool’s total liquidity.</p></div><div class="bloc2"><img src=\'/images/dex-aggregators/an-example-of-how-liquidity-impacts-prices-24eb7dd7.svg\'></div>'
      },
      {
        type: 'QUIZ',
        notionId: 'e24b2cfca49f40468c373d4a3f0347ee',
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
        notionId: '4922a47975374caeba12fcbe32e9def9',
        title: 'Shortcomings of Traditional DEXs: Thin Liquidity',
        content: '<div class="bloc1"><p>DeFi continues to grow, but a problem is emerging for users: As more DEXs launch, the total amount of any individual token gets spread out. This is known as thin liquidity.</p><p>Remember the swimming pool: if the available water (<code>liquidity</code>) is split between multiple pools, the amount of water will be “thinner” in each pool compared to the total in the single original pool.</p><p>In 2020, Uniswap held much of the DEX liquidity to trade in DeFi. When SushiSwap launched the following month, it attracted over $1B worth of liquidity into its DEX from Uniswap, reducing total liquidity on Uniswap. This was just the start. Since then, more and more DEXs have entered the DeFi ecosystem, progressively thinning the liquidity of each pool.</p><p>Thus, any trade has a larger <code>price impact</code> than when Uniswap held most of the ecosystem’s total liquidity. As more DEXs launch, it costs Explorers more to trade on any single DEX without new innovations.</p></div><div class="bloc2"><img src=\'/images/dex-aggregators/shortcomings-of-traditional-dexs-thin-liquidity-384b90b6.svg\'></div>'
      },
      {
        type: 'QUIZ',
        notionId: '05a725c789fb423e85536358b0f724ce',
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
        notionId: 'c8766682ea9d4d44bdb04dac10c9dfb6',
        title: 'Recombining Liquidity With DEX Aggregators',
        content: '<div class="bloc1"><p>Large amounts of <code>liquidity</code> are needed to reduce price impact and save you money. DEX aggregators allow users to run trades through multiple DEXs at once and reduce the price impact; a big trade from an Explorer’s wallet gets broken down into multiple small trades across multiple DEXs.</p><p>DEX aggregators can even route trades through an <code>intermediary token</code> , or more than one, if that gets a better result for users — like the way a flight aggregator might suggest an extra stop at another airport if it’s cheaper for the passenger. This discovery of the optimal <code>trade route</code> is done by sophisticated algorithms searching through all possible paths to find the cheapest trade route at that moment.</p></div><div class="bloc2"><img src=\'/images/dex-aggregators/recombining-liquidity-with-dex-aggregators-c12c49a1.svg\'></div>'
      },
      {
        type: 'QUIZ',
        notionId: '79f6a27daa9d428a91366ea4932338fd',
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
        notionId: '7d25338ca0b546d29710dd957a80ca45',
        title: 'How Gas Cost Is Calculated on Ethereum',
        content: '<div class="bloc1"><p>Let’s refresh how gas is calculated before we go on to see how the optimizations DEX aggregators make can reduce network fees for users.</p><p>Just like gas for a car, <code>gas</code> is the fuel for running blockchain code on Ethereum. The farther you travel, the more gas your car uses. Likewise, the more computations you do, the more gas your code requires. Gas price is measured in very small amounts of Ether called <code>gwei</code>, like cents to a dollar. 1 gwei is 1 billionth of an ether (1 gwei = 0.00000001 ETH). </p><p>Total gas cost is based on how much gas your transaction uses and the unit price of gas at the time of use. The formula for calculating the price of a transaction is as follows:<br><em>Amount of gas used * Gas price = Total gas cost</em></p><p>As an example, let’s say gas costs are at 22 gwei per gas unit and the transaction uses 120-thousand units:<br><em>120,000 * 22 gwei = 2,640,000 gwei </em><em><strong>or</strong></em><em> 0.00264 ETH</em></p></div><div class="bloc2"><img src=\'/images/dex-aggregators/how-gas-cost-is-calculated-on-ethereum-c7d692cd.svg\'></div>'
      },
      {
        type: 'LEARN',
        notionId: '1bc1fa133e754e48ac16ce4d858011fc',
        title: 'How Aggregators Reduce Gas Costs for Users',
        content: '<div class="bloc1"><p>Trade splitting would result in more transaction fees from the extra on-chain activity, except that advanced aggregators plan for transaction fees and include them in their calculations of the trade route. They simulate trades off chain, including <code>gas</code> costs, to find <code>trade routes</code> that leave Explorers with the most value at the end of the interaction.</p><p>Some aggregators go even further: they may refund some of the network transaction fees from using their protocol. 1inch currently offers rebates in their token for a portion of gas costs from trading through their <code>dApp</code> on Ethereum mainnet.</p></div><div class="bloc2"><img src=\'/images/dex-aggregators/how-aggregators-reduce-gas-costs-for-users-aea20eff.svg\'></div>'
      },
      {
        type: 'QUIZ',
        notionId: '0c869bfcb0f14f70a197753de548bc99',
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
        notionId: 'be3c24ff77a143c5a091f5dc7f8c8f7b',
        title: 'Meta-Aggregators',
        content: '<div class="bloc1"><p>There are even meta-aggregators of DEX aggregators! These platforms search through all competing DEX aggregators and serve price quotes to users. An example of this is the in-app swap function in the MetaMask wallet. This feature is actually a meta-aggregator that relies on DEX aggregators like 1inch to function.</p><p>Note: While convenient, <code>meta-aggregator</code> services can add extra costs on top of network transaction fees, increasing the overall cost for users. Explorers: make sure that your trades don’t end up more expensive than you intended. </p></div><div class="bloc2"><img src=\'/images/dex-aggregators/meta-aggregators-7609a2ce.svg\'></div>'
      },
      {
        type: 'QUIZ',
        notionId: 'cb73faf4adf34a0194b99dde75f11939',
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
        notionId: '8c67c8032ffd4b4da795711d16845856',
        title: 'Avoiding Sandwich Attacks',
        content: '<div class="bloc1"><p>Users swapping directly through <code>DEXs</code> can lose value up to the limit of their <code>slippage tolerance</code> due to price changes coordinated by block producers — these kinds of losses are called <code>sandwich attacks</code>. Did you know that sandwich attacks led users to a total loss of $235,000,000 during 2021? Explorers can protect themselves by keeping a low slippage tolerance when swapping tokens.</p><p>Fortunately, because of the recombined liquidity offered by DEX aggregators, the price impact of a trade is reduced. Explorers can keep their slippage tolerance low while saving more with DEX aggregators, as opposed to trading directly on a DEX.</p></div><div class="bloc2"><img src=\'/images/dex-aggregators/avoiding-sandwich-attacks-d4114147.svg\'></div>'
      },
      {
        type: 'QUIZ',
        notionId: '478990740cb14d7094308c60bed96833',
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
        notionId: 'd8992c13da474896a0aa9846b298a7f1',
        title: 'More Protection From Sandwiches: OTC Trades',
        content: '<div class="bloc1"><p>Some aggregators like 1inch even offer specialized <code>OTC</code> (<code>Over The Counter</code>) services that provide total protection against sandwich attacks. These optional services enable direct trading with other users, rather than facilitating trades through DeFi <code>liquidity pools</code>. Anyone can engage in <code>OTC</code> trades to fully remove the threat of sandwich attacks — providing another great way for Explorers to save.</p><p>CoWSwap is a Meta-Aggregator that also offers sandwich-resistant services, enabled by default, to ensure trades are 100% protected against sandwich attacks.</p></div><div class="bloc2"><img src=\'/images/dex-aggregators/more-protection-from-sandwiches-otc-trades-3da1b5df.svg\'></div>'
      },
      {
        type: 'QUIZ',
        notionId: 'd33b2d65a645400da530ee2fb114b79e',
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
      }
    ]
  },
  {
    badgeImageLink: null,
    lessonImageLink: '/images/understanding-ethereum-token-standards/lesson-dcf41ef6.png',
    socialImageLink: '/images/understanding-ethereum-token-standards/social-45b8b003.png',
    learningActions: '',
    marketingDescription: 'Learn how Ethereum’s asset templates support both traditional and emerging asset classes.',
    badgeId: null,
    collectibleId: 'H006',
    duration: 10,
    learnings: '',
    description: 'Learn how Ethereum’s asset templates support both traditional and emerging asset classes.',
    name: 'Understanding Ethereum Token Standards',
    languages: [],
    level: 'Level 1',
    lessonWriters: 'Musharef, Tetranome',
    publicationStatus: 'publish',
    publicationDate: '2023-11-08',
    featuredOrderOnHomepage: null,
    isCommentsEnabled: false,
    endOfLessonRedirect: null,
    mirrorLink: 'https://mirror.xyz/banklessacademy.eth/qxBzms3mPBCZ8XCk2HMmyTm7IWe70wiFFn5J0BSvYiM',
    mirrorNFTAddress: '0xb9Eef5b84D862e45e6C425574BE23b11CA9211f3',
    areMirrorNFTAllCollected: false,
    isArticle: true,
    notionId: 'c3d069346f984d6599f5190b04cffc11',
    englishName: 'Understanding Ethereum Token Standards',
    slug: 'understanding-ethereum-token-standards',
    articleContent: '## **Key Takeaways**\n\n> * Ethereum `token` standards are predefined rules and functions used for deploying tokens on Ethereum.\n>\n> * The most popular Ethereum token standards are `ERC-20`, `ERC-721`, and `ERC-1155`.\n>\n> * Each standard enables different levels of `fungibility`, allowing creation of both common and unique onchain assets.\n>\n> * Token standards enable token interoperability across the Ethereum ecosystem, making it very easy for dApps to integrate new tokens, and for you to have access to them!\n\n## What are Ethereum Token Standards?\n\nEthereum hosts tens of thousands of different crypto tokens, each with different properties and use cases. How can the network ensure seamless token support across its dApp ecosystem, without developers having to spend hours integrating each token? How can users of these tokens understand their key properties without scrolling through hours of documentation?\n\nEnter token standards!\n\nThese templates and rulesets support token `interoperability` across the Ethereum ecosystem. This means that dApps only need to support a few common token standards rather than thousands of individual tokens. For Explorers like yourself, this means that you can look at a token’s founding standard and understand its basic abilities across Ethereum.\n\nToken standards dictate:\n\n* How a token’s smart contract should be coded.\n\n* The use cases a token can have within the Ethereum ecosystem.\n\nCurrently, Ethereum has three commonly used token standards:\n\n![](/images/understanding-ethereum-token-standards/image-eb8638eb.png)\n\n1. **ERC-20** — A standard for easily exchangeable (or fungible) tokens.\n\n   e.g. USDC and UNI tokens.\n\n2. **ERC-721** — A standard for unique (or non-fungible) tokens, known as `NFTs`.\n\n   e.g. CryptoPunk and Bored Ape NFTs.\n\n3. **ERC-1155** — A standard used for both fungible and non-fungible tokens in the same contract.\n\n   e.g. Items inside a web3 video game.\n\nNow, you are probably wondering: “What exactly is fungibility?”\n\nLet’s take a look at this concept from traditional economics to understand its importance in the Ethereum ecosystem.\n\n## Fungibility vs. Non-Fungibility.\n\n**‘Fungibility’** is a property of an economic asset or good, indicating two key features:\n\n* When the asset is traded, its units are interchangeable without any alteration in value.\n\n  ($1 USD can be exchanged for another $1 USD, or four 25¢ coins, or twenty 5¢ coins.)\n\n* When the asset is divided, the smaller fractions maintain its fundamental characteristics.\n\n  ($1 USD, split into four 25¢ coins, still functions as a store of value or is used for making purchases.)\n\nExamples of fungible assets include oil, fiat currency, government bonds, and company shares. These non-unique assets can be easily exchanged and divided.\n\n![](/images/understanding-ethereum-token-standards/image-8e5e9468.png)\n\nConversely, **‘non-fungibility’** indicates:\n\n* The asset has unique properties which make it distinguishable from its counterparts, giving it a unique value.\n\n  (A canvas painting by Van Gogh is priced differently to one by an emerging modern artist, because of the appearance, rarity, level of skill, and reputation behind the paintings.)\n\n* The act of division affects its fundamental characteristics.\n\n  (A painting cut into four pieces has sections that do not resemble one another, and each section may be valued differently. The initial intention of the painting is also gone.)\n\nSome examples of non-fungible assets are real estate, artwork, digital identities, and certifications. These assets are more difficult to exchange and divide because of their unique properties.\n\n![](/images/understanding-ethereum-token-standards/image-ebe8683a.png)\n\nIf you’re ever confused about fungibility, just ask yourself: “How easy is it to exchange and divide?” If it’s difficult, it’s likely non-fungible!\n\nEthereum aims to become “the settlement layer for the world economy”. Fungible and non-fungible asset functionality opens opportunities for traditional asset classes to be represented onchain — and for new ones to be created!\n\n## Standards & Token Functions\n\nWhen deploying a new token contract on Ethereum, the asset creator will select from one of the existing token standards. This grants it initial properties — called functions — such as the total supply of the asset, whether or not it can be transferred to another wallet, and what information it can hold.\n\n![](/images/understanding-ethereum-token-standards/image-242de5f5.png)\n\nFor example, ERC-20 uses functions like these:\n\n**1\. totalSupply:** Defines the total supply of an ERC-20 token.\n\nThe total supply of a token informs important qualities like its value and distribution.\n\n**2\. balanceOf:** Checks the token balance of a specified address.\n\nThis helps services and platforms check your wallet’s balance before executing your requested transaction.\n\n**3\. transfer:** Transfers tokens from your address to other addresses.\n\nEvery time you send a crypto token from your wallet to another wallet, you’re using the transfer function.\n\n**4\. approve:** Allows an address (usually a smart contract) to automatically transact on behalf of your wallet up to a specified amount.\n\nUsing this function, you can approve a platform or service to automatically use a defined portion of your funds and execute transactions.\n\n**5\. allowance:** Used to get the amount that a spender can transact from a wallet.\n\nA platform may use this function to check the total amount you’ve approved it to use and if it can execute the transaction without you signing it manually.\n\nStandardizing the token creation process enables `composability` in the Ethereum ecosystem. For instance, a developer building a [decentralized exchange (DEX)](https://app.banklessacademy.com/lessons/decentralized-exchanges) can add support for any token following the ERC-20 standard because they will all behave in a similar way. They will not need to  build in individual support for each listed token.\n\nSimilarly, someone building an NFT marketplace just needs to make the platform compliant with ERC-721 and ERC-1155 standards to support all NFTs created on Ethereum.\n\nNow that we understand token standards, fungibility, and functions, let’s take a look at the use cases for the three primary standards on Ethereum.\n\n### ERC-20: Fungible Tokens\n\n![](/images/understanding-ethereum-token-standards/image-4708764e.png)\n\n[ERC-20](https://eips.ethereum.org/EIPS/eip-20) is a token standard that defines the rules for creating fungible token contracts.\n\nERC-20 tokens can be anything from a `memecoin` to a mode of payment in a decentralized marketplace. In most cases, they’ll fit into one of these four categories:\n\n**1\. Utility token:** Serves a specific use case within an app/platform ecosystem.\n\nExample: Filecoin (FIL) is used to reward storage providers who validate and add new blocks to their data storage network.\n\n**2\. Governance token:** Offers holders voting rights in governance decisions of a platform.\n\nExample: Ethereum Name Service (ENS) holders can vote in proposals to update the domain registry protocol.\n\n**3\. Stablecoin:** Designed to maintain a stable value, usually equal to the U.S. dollar.\n\nExamples: Tether (USDT), USDCoin (USDC), DAI (DAI).\n\n**4\. Security token:** Represents ownership in an underlying asset, like stocks of a company.\n\nExamples: Blockchain Capital (BCAP)\n\nA single token could fall into more than one category. For example, a governance token can also have certain utility within a platform.\n\nYou can easily [buy ERC-20 tokens on a DEX](https://app.banklessacademy.com/lessons/how-to-swap-on-a-decentralized-exchange) like Uniswap or a `centralized exchange` like Binance or Coinbase.\n\n### ERC-721: Non-fungible Tokens\n\n![](/images/understanding-ethereum-token-standards/image-aa1af1d5.png)\n\n[ERC-721](https://eips.ethereum.org/EIPS/eip-721) is a standard that defines the rules for Ethereum users to create or use non-fungible tokens. It ensures that each NFT created is provably unique.\n\nWhat are some use cases of ERC-721 tokens?\n\n**1\. Ownership of assets:** ERC-721 tokens are widely used to represent the ownership of unique digital and real-world assets. For example, this Explorer’s Handbook entry has 100 individually numbered versions available — not just to read, but to own — like a book on your digital bookshelf. (You can `mint` and own it by hitting the gold ‘Collect Entry’ button at the top). Bankless Academy’s ‘Datadisk Collectibles’ work in the same way.\n\n**2\. Subscriptions and memberships:** Creators, artists, clubs, and companies are already using NFTs for subscriptions, event tickets, and memberships. The provable uniqueness of NFTs ensures that each of the fixed supply is tied to an individual user.\n\n**3\. Loyalty rewards:** Starbucks launched a loyalty program called Odyssey where its members can complete quests to obtain NFTs that they can redeem for digital and real-world rewards. Many other brands are offering NFTs as a loyalty reward that users can choose to redeem or sell whenever they want.\n\n**4\. Identity and Certifications:** ERC-721 tokens can be used to create tamper-proof identities and certifications. When your digital identity or certificates are ERC-721 tokens, it is easy for you to prove your ownership and nearly impossible for anyone to forge your documents and misuse them.\n\nTo get an ERC-721 token, create an account on an NFT marketplace like [OpenSea](https://opensea.io/) or [Blur](https://blur.io/) and purchase any listed NFT. Make sure you take our [Web3 Security](https://app.banklessacademy.com/lessons/web3-security) lesson to protect yourself from marketplace scams.\n\n### ERC-1155: Fungible & Non-fungible Tokens\n\n![](/images/understanding-ethereum-token-standards/image-d804ad2f.png)\n\nOften referred to as a `multi-token standard`, [ERC-1155](https://eips.ethereum.org/EIPS/eip-1155) merges the concepts of ERC-20 and ERC-721 and lets builders write contracts that can support both fungible and non-fungible tokens. This doesn’t make a major difference to the user experience but can help to optimize platform features. An example would be deploying both a fungible in-game currency and non-fungible in-game assets under a single contract.\n\nThis standard also allows the creation of semi-fungible tokens — tokens that are fungible and non-fungible in specific circumstances. For example, in a trading card collection, all cards that have the same rarity might be fungible (interchangeable) whereas cards with differing rarity levels might be non-fungible (non-interchangeable).\n\nERC-1155 also enables batch transactions to send multiple token types at once, potentially reducing the `gas` cost for users.\n\n\n---\n\nWe commend you for making it through this lengthy entry in the Explorer’s Handbook: ‘Understanding Token Standards’.\n\nDon’t forget to collect this entry if you want to own a copy for easy reference on your travels, or to support future content at Bankless Academy. Safe travels, Explorer!\n\n\n---\n\n## Ethereum Token Standard FAQ\n\n### How are Ethereum token standards created?\n\nToken standards are proposed and published on Ethereum through a proposal process called Ethereum Improvement Proposals (EIPs). Once a proposal is passed, it becomes a standard and is called an Ethereum Request for Comment (ERC). The serial number of the EIP is then appended to complete the standard name, e.g. ERC-20 or ERC-721.\n\n### Does ether (ETH) follow a token standard?\n\nNo. In fact, ETH is known as a ‘coin’ not a ‘token’, meaning it has its own [blockchain](https://app.banklessacademy.com/lessons/blockchain-basics).\n\n### Can anyone launch a token?\n\nYes. Ethereum is a permissionless ecosystem and anyone can launch a fungible or non-fungible token. However, you will need technical know-how or access to no-code tools.\n\n### If two tokens have the same name, how do I know which is the official token?\n\nTo identify the original token, you should check the contract address that’s used to publish the tokens you want to use and reference it against official project documentation. This way you’ll ensure that you do not interact with a malicious token contract that could drain your wallet.\n\n### Are there other token standards on Ethereum apart from ERC-20, 721, and 1155?\n\nYes, there are other token standards on Ethereum that are not in use or have very niche use cases. Some examples include [ERC-223](https://eips.ethereum.org/EIPS/eip-223), [ERC-1462](https://eips.ethereum.org/EIPS/eip-1462), [ERC-1948](https://eips.ethereum.org/EIPS/eip-1948), and [ERC-4626](https://eips.ethereum.org/EIPS/eip-4626).\n\n\n---\n\n**Authors**\n\n**[Musharraf](https://x.com/musharrafff)** is the co-founder of Unhashed. He helps web3 projects with content strategy and execution.\n\n**[Tetranome](https://twitter.com/Tetranome)** is the Project Champion at Bankless Academy, focusing on user experience, interface, design, and content.\n\n**Editors**\n\n**[Trewkat](https://twitter.com/trewkat)** is a writer and editor at BanklessDAO. She’s interested in learning about crypto and NFTs, with a particular focus on how best to communicate this knowledge to others.\n\n**Patron**\n\nThis unsponsored article is part of your free Bankless Academy education. Collect the article to support future content!',
    imageLinks: [
      '/images/understanding-ethereum-token-standards/image-eb8638eb.png',
      '/images/understanding-ethereum-token-standards/image-8e5e9468.png',
      '/images/understanding-ethereum-token-standards/image-ebe8683a.png',
      '/images/understanding-ethereum-token-standards/image-242de5f5.png',
      '/images/understanding-ethereum-token-standards/image-4708764e.png',
      '/images/understanding-ethereum-token-standards/image-aa1af1d5.png',
      '/images/understanding-ethereum-token-standards/image-d804ad2f.png'
    ],
    keywords: [
      'token',
      'ERC-20',
      'ERC-721',
      'ERC-1155',
      'fungibility',
      'interoperability',
      'NFTs',
      'composability',
      'memecoin',
      'centralized exchange',
      'mint',
      'multi-token standard',
      'gas'
    ]
  },
  {
    badgeImageLink: '/images/gitcoin-2.0-essentials/badge-62565097.png',
    lessonImageLink: '/images/gitcoin-2.0-essentials/lesson-e0f45ad7.jpg',
    socialImageLink: '/images/gitcoin-2.0-essentials/social-6df25a97.jpg',
    learningActions: '',
    marketingDescription: 'Decoding Gitcoin 2.0',
    badgeId: 13,
    duration: 15,
    learnings: '',
    description: 'Explore Gitcoin\'s whitepaper for insights into democratic capital allocation and Ethereum ecosystem growth.',
    name: 'Gitcoin 2.0 Essentials',
    languages: [],
    level: 'Community Lessons',
    community: 'Gitcoin',
    quest: 'Gitcoin20Essentials',
    questSocialMessage: 'I\'ve just completed the @Gitcoin 2.0 Essentials lesson on @BanklessAcademy 🎓\n\nJoin the journey and level up your #web3 knowledge! 👨‍🚀 🚀',
    publicationStatus: 'publish',
    publicationDate: '2024-07-25',
    featuredOrderOnHomepage: null,
    isCommentsEnabled: false,
    endOfLessonRedirect: null,
    notionId: '6b05b52eae8a41e0ab27222ac27fca12',
    englishName: 'Gitcoin 2.0 Essentials',
    slug: 'gitcoin-2.0-essentials',
    imageLinks: [
      '/images/gitcoin-2.0-essentials/welcome-to-gitcoin-2.0-gitcoin-grants-growth-3e78d2ef.png',
      '/images/gitcoin-2.0-essentials/introduction-to-quadratic-funding-e38257e1.png',
      '/images/gitcoin-2.0-essentials/gitcoins-role-in-the-ethereum-ecosystem-b699b9ea.png',
      '/images/gitcoin-2.0-essentials/and-theres-more-99247fc7.png',
      '/images/gitcoin-2.0-essentials/carving-a-path-ffb2f198.png',
      '/images/gitcoin-2.0-essentials/evolutionary-development-092753e6.png',
      '/images/gitcoin-2.0-essentials/the-impact-of-capital-allocation-1c17e0b8.png',
      '/images/gitcoin-2.0-essentials/expanding-beyond-evm-with-allo-protocol-c8a108f7.png',
      '/images/gitcoin-2.0-essentials/grants-stack-other-use-cases-7334384f.png',
      '/images/gitcoin-2.0-essentials/grants-stack-other-use-cases-continued-df15ee70.png',
      '/images/gitcoin-2.0-essentials/lets-go-over-what-we-learned-a902dc9c.png'
    ],
    keywords: [
      'allo protocol',
      'quadratic funding'
    ],
    slides: [
      {
        type: 'LEARN',
        notionId: '163809eabca84850b37afe1857173353',
        title: 'Welcome to Gitcoin 2.0 | Gitcoin = Grants = Growth',
        content: '<div class="bloc1"><p>Welcome to the revolution in onchain capital allocation 💰</p><p>In this lesson, we explore the <strong>Gitcoin 2.0 white paper</strong> to discover innovative approaches to public goods funding and growth in the Ethereum ecosystem. Having surpassed <strong>$60 million in funding distributed</strong>, Gitcoin is at the forefront of a movement towards more democratic, efficient, and transparent capital allocation in web3.</p><p>The publication of the Gitcoin 2.0 white paper marks a pivotal moment in Gitcoin’s history. It provides an in-depth look at how its infrastructure and the implementation of <code>Allo Protocol</code> are helping to steward its mission. For quick reference during this journey, you can access the publication <a href=\'https://www.gitcoin.co/whitepaper/read\'>here</a>.</p><p>This lesson has been curated by contributors at Gitcoin and Bankless Academy, aiming to provide a fun, unique, and web3 native way of learning about Gitcoin’s new stage, <strong>Gitcoin 2.0. </strong>Prepared to explore the future of onchain capital allocation? If so, let’s dive in!</p></div><div class="bloc2"><img src=\'/images/gitcoin-2.0-essentials/welcome-to-gitcoin-2.0-gitcoin-grants-growth-3e78d2ef.png\'></div>'
      },
      {
        type: 'LEARN',
        notionId: '55e43442defe411b9109132581333a42',
        title: 'Introduction to Quadratic Funding',
        content: '<div class="bloc1"><p><code>Quadratic Funding</code> (QF) originated from the ideas of Glen Weyl and Vitalik Buterin. It\'s a mechanism designed to allocate funds in a fair and democratic manner by leveraging matching funds to <strong>amplify the impact</strong> of small individual contributions.</p><p>QF debuted with <strong>Gitcoin Grants</strong> (GG), marking a pivotal moment in enabling democratic donations to projects that matter. Since the launch of GG Round 1, the QF model has been finely tuned with each iteration.</p><p>Now, <strong>Gitcoin 2.0</strong> extends further into the grants space to include funding mechanisms like Direct Grants, delivering a more decentralized and modular experience for users and grantees.</p></div><div class="bloc2"><img src=\'/images/gitcoin-2.0-essentials/introduction-to-quadratic-funding-e38257e1.png\'></div>'
      },
      {
        type: 'LEARN',
        notionId: '060ee68d743d4850942271999566a5df',
        title: 'Gitcoin’s role in the Ethereum ecosystem',
        content: '<div class="bloc1"><p>As of May 2024, twenty editions of the Gitcoin Grants program have been run by Gitcoin, disbursing funds to diverse projects building on Ethereum, averaging nearly one major round per quarter.</p><p>Although rounds ebb and flow depending on market cycles and participating project maturity, these rounds are an important touchstone especially for the <strong>open source Ethereum community</strong>.</p><p>Prior to Gitcoin Grants Round 20, the total amount of funding raised through the program reached $29 million.</p><p>In 2023, the past four rounds—α, β, 18, and 19—have been deployed on a variety of chains, from Ethereum mainnet to L2s such as Arbitrum and Optimism, as well as sidechains like Polygon and Fantom.</p></div><div class="bloc2"><img src=\'/images/gitcoin-2.0-essentials/gitcoins-role-in-the-ethereum-ecosystem-b699b9ea.png\'></div>'
      },
      {
        type: 'LEARN',
        notionId: 'c71d220061584a79a004d40bee450bb9',
        title: '…and there’s more!',
        content: '<div class="bloc1"><p>Gitcoin\'s dynamics most often reward projects that <strong>play the long game</strong> — that is, projects that appear consistently throughout grant rounds, making connections over time, and building community and a following.</p><p>A notable finding is the <strong>correlation between Gitcoin Grants rounds and developer growth</strong>.</p><p>The <a href=\'https://docs.opensource.observer/blog/gitcoin-grants-impact/#grants-on-allo-alpha-round-to-gg19-2023\'>Open Source Observer Impact Analysis</a> shows that of a group of 50 open source software projects that have received funding across multiple Gitcoin Grants rounds, for every $1 million paid out in grants since 2019, there are 7 full-time developers who are <em>still active today.</em></p><p>If we factor in the crowdfund multiplier, every $1 million contributed to the matching pool is associated with 13 retained full-time developers, with these numbers holding steady even during the bear market!</p></div><div class="bloc2"><img src=\'/images/gitcoin-2.0-essentials/and-theres-more-99247fc7.png\'></div>'
      },
      {
        type: 'QUIZ',
        notionId: '6419b66630ba4d5d9f7879a903269624',
        title: 'Knowledge Check',
        quiz: {
          question: 'What funding mechanism is designed to democratically allocate funds by amplifying the impact of individual contributions?',
          rightAnswerNumber: 3,
          answers: [
            'Direct Grants',
            'Allo Protocol',
            'Quadratic Funding',
            'Matching Funds'
          ],
          id: 'gitcoin-2.0-essentials-1'
        }
      },
      {
        type: 'LEARN',
        notionId: '98415667c1b34062b8ab3ff55497925e',
        title: 'Carving a Path',
        content: '<div class="bloc1"><p>Gitcoin 1.0 was used by many top leaders in the space including Ethereum founder <strong>Vitalik Buterin</strong> and by major protocols like WalletConnect, Uniswap, Yearn, and 1inch.</p><p>Since its inception in 2017, this first version of Gitcoin primarily focused on hackathons and bounties, followed by Quadratic Funding (QF) powered grants.</p><p>The recent upgrade to Gitcoin 2.0 was driven by many changes in the market, including the <strong>expansion</strong> of the Ethereum ecosystem with L2 launches, the <strong>growth</strong> of open source development, and <strong>increasing adoption</strong> of grant programs.</p></div><div class="bloc2"><img src=\'/images/gitcoin-2.0-essentials/carving-a-path-ffb2f198.png\'></div>'
      },
      {
        type: 'LEARN',
        notionId: '2ca8f1e045b64f30ace263934335d963',
        title: 'Evolutionary Development',
        content: '<div class="bloc1"><p>Gitcoin’s transformation breaks down as follows:</p><ol><li><strong>Decentralized Modular Protocols</strong>: moving from a centralized, Gitcoin-operated platform to a suite of modularized products and protocols that anyone can use and build with or on top of.</li><li><strong>Plural Funding Mechanics</strong>: moving from QF only to many ways of allocating capital, namely Direct Grants, Retroactive Public Goods Funding, Streaming QF and Conviction Voting.</li><li><strong>Open for EVM-Based Community:</strong> expanding beyond Ethereum-only to implementation across EVM-based networks such as Optimism, Arbitrum, Base, Polygon, zkSync, Scroll and Avalanche.</li></ol></div><div class="bloc2"><img src=\'/images/gitcoin-2.0-essentials/evolutionary-development-092753e6.png\'></div>'
      },
      {
        type: 'QUIZ',
        notionId: '64916dce80644ad7878cb730144d36c1',
        title: 'Knowledge Check',
        quiz: {
          question: 'What was Gitcoin focused on before 2.0?',
          rightAnswerNumber: 4,
          answers: [
            'Hackathon platform',
            'Bounty platform',
            'Quadratic Funding',
            'All of the above'
          ],
          feedback: [
            'Right! But this isn’t the only correct answer.',
            'Right! But this isn’t the only correct answer.',
            'Right! But this isn’t the only correct answer.',
            'Correct! Gitcoin technically focused on bounties, hackathons and QF before the 2.0 launch.'
          ],
          id: 'gitcoin-2.0-essentials-2'
        }
      },
      {
        type: 'LEARN',
        notionId: '058259e6f2724af1b207c36b26abfe5f',
        title: 'The Impact of Capital Allocation',
        content: '<div class="bloc1"><p>Gitcoin harnesses the positive attributes of high speed internet and immutable blockchain tech to address the following capital allocation issues:</p><ol><li><strong>Gatekeeping</strong>: using small groups of decision makers, who may otherwise become power brokers and are unwilling or unable to be democratic.</li><li><strong>Not Scalable</strong>: taking advantage of the primitives the internet (easy access, direct to consumer interfaces) and Ethereum (credible neutrality, composability, transparency, democratic decision making, censorship resistance) have to offer.</li><li><strong>Not Precise:</strong> by programmatically managing large amounts of information at scale, enabling high resolution capital allocation.</li></ol></div><div class="bloc2"><img src=\'/images/gitcoin-2.0-essentials/the-impact-of-capital-allocation-1c17e0b8.png\'></div>'
      },
      {
        type: 'LEARN',
        notionId: '5dcd6311a0574b36a5fc756f7fd57a49',
        title: 'Expanding beyond EVM with Allo Protocol',
        content: '<div class="bloc1"><p>Allo Protocol is a set of smart contracts designed for democratic onchain capital allocation and distribution, developed to empower the Grants Stack.</p><p>Allo’s simple, generalized architecture allows it to be <strong>easily customized</strong> for a wide range of use cases. Its power lies in its ability to <strong>deepen impact</strong> by allocating capital at scale. There are three key components to the protocol:</p><ol><li><strong>Tokens:</strong> funding sources sending tokens into a pool.</li><li><strong>Registry:</strong> structuring data of possible participants that are eligible for distribution of tokens.</li><li><strong>Strategy:</strong> designating how tokens will be allocated and distributed to recipients.</li></ol><p>💡 <span class=\'color-default\'> An easy way to remember what Allo Protocol is or does, is that it’s short for </span><em><span class=\'color-default\'>Capital Allocation Protocol</span></em><span class=\'color-default\'>. For a deeper understanding of what people can create using Allo, checkout the design space-focused </span><a href=\'https://www.gitcoin.co/rainbowpaper\'>rainbowpaper</a><span class=\'color-default\'>.</span></p></div><div class="bloc2"><img src=\'/images/gitcoin-2.0-essentials/expanding-beyond-evm-with-allo-protocol-c8a108f7.png\'></div>'
      },
      {
        type: 'LEARN',
        notionId: 'fa9d497779c245cd93d677f5f8efcb36',
        title: 'Grants Stack & other use cases',
        content: '<div class="bloc1"><p>Grants Stack, built on top of Allo Protocol, is the <strong>primary application</strong> in the Gitcoin ecosystem.</p><p>Grants Stack is designed to be a trustworthy, enterprise-grade tool that grant customers can rely on. It also serves as a reference app for Allo Protocol builders, as it is <strong>open source </strong>and<strong> forkable</strong>.</p><p>Grants Stack invests in several core areas to provide grants managers with the tools they need to run successful grants programs.</p></div><div class="bloc2"><img src=\'/images/gitcoin-2.0-essentials/grants-stack-other-use-cases-7334384f.png\'></div>'
      },
      {
        type: 'LEARN',
        notionId: '3640f02a78634c73b931223fc4d3b08e',
        title: 'Grants Stack & other use cases continued',
        content: '<div class="bloc1"><p><strong>Grants Stack</strong> currently supports two funding methods: <a href=\'https://www.wtfisqf.com/\'>Quadratic Funding</a> and <a href=\'https://www.gitcoin.co/blog/intro-to-direct-grants-how-do-they-work\'>Direct Grants</a>.</p><p>As new funding mechanisms arise, Gitcoin quickly adapts and integrates them. A relevant example of this is <a href=\'https://easyretropgf.xyz/\'>EasyRetroPGF.xyz</a>. Originally deployed by Optimism, the ability to operate a retroactive grants round is now open source.</p><p>Complementary applications such as reporting and discovery tools may follow suit, creating a <strong>flywheel of grants innovation</strong> that allows Grants Stack to remain a <strong>stable, trusted solution</strong>.</p></div><div class="bloc2"><img src=\'/images/gitcoin-2.0-essentials/grants-stack-other-use-cases-continued-df15ee70.png\'></div>'
      },
      {
        type: 'QUIZ',
        notionId: '89e00897b74d4c99a6379db89c2a09f8',
        title: 'Knowledge Check',
        quiz: {
          question: '<span class=\'color-default\'>Allo is th</span><span class=\'color-default\'>e ______ </span><span class=\'color-default\'> layer for distribution of capital allocation, while Grants Stack i</span><span class=\'color-default\'>s a _____ for running ______ programs.</span>',
          rightAnswerNumber: 2,
          answers: [
            'community - application - funding',
            'protocol - tool - grants',
            'program - product - builder',
            'None of the above'
          ],
          id: 'gitcoin-2.0-essentials-3'
        }
      },
      {
        type: 'LEARN',
        notionId: 'dc9d8509dafc4372bd6e1683119eb033',
        title: 'Let’s go over what we learned…',
        content: '<div class="bloc1"><ol><li>Gitcoin\'s journey from 1.0 to 2.0 represents a leap towards modular systems and diverse mechanisms in the <strong>decentralized funding</strong><strong> </strong>industry.</li><li>QF emerged as a pivotal mechanism, facilitating distribution of <strong>+$60M to public goods</strong> in the Ethereum ecosystem.</li><li>Gitcoin 2.0 includes Direct Grants, Retroactive Public Goods Funding, and operates across multiple EVM-based networks.</li><li>Onchain capital allocation offers <strong>transparency, efficiency, and democratization</strong>, challenging traditional gatekeeping and scalability issues.</li><li>Grants are a <strong>catalyst for growth</strong> in web3, underpinning community engagement, builder retention, and positive-sum outcomes.</li><li>Gitcoin <strong>delivers decentralization</strong> by layers. First, at the protocol layer with Grants Stack and at the app layer with Allo Protocol, providing a modular framework for effective capital allocation.</li></ol></div><div class="bloc2"><img src=\'/images/gitcoin-2.0-essentials/lets-go-over-what-we-learned-a902dc9c.png\'></div>'
      },
      {
        type: 'QUEST',
        title: 'Gitcoin 2.0 Essentials Quest',
        component: 'Gitcoin20Essentials'
      }
    ]
  },
  {
    badgeImageLink: '/images/optimism-governance/badge-f0aaca7d.png',
    lessonImageLink: '/images/optimism-governance/lesson-2c666ee5.png',
    socialImageLink: '/images/optimism-governance/social-687d7386.jpg',
    learningActions: '',
    marketingDescription: 'Become a governing member of Optimism and help decide the network\'s future.',
    badgeId: 10,
    duration: 20,
    learnings: '',
    description: 'Become a governing member of Optimism and help decide the network\'s future.',
    name: 'Optimism Governance',
    languages: [
      'cn',
      'de',
      'es',
      'fr',
      'jp'
    ],
    level: 'Community Lessons',
    tags: [
      'DAO',
      'Optimism'
    ],
    lessonWriters: 'Tetranome',
    quest: 'OptimismGovernance',
    publicationStatus: 'publish',
    publicationDate: '2023-09-07',
    featuredOrderOnHomepage: null,
    isCommentsEnabled: false,
    endOfLessonRedirect: null,
    sponsorName: 'Optimism',
    sponsorLogo: '/images/optimism-governance/sponsor-e765f09a.png',
    notionId: '7f53656c75b343d4b94c5b6a78fd0332',
    englishName: 'Optimism Governance',
    slug: 'optimism-governance',
    imageLinks: [
      '/images/optimism-governance/old-problems-new-tools-fea84c8f.svg',
      '/images/optimism-governance/network-governance-45b77eb1.svg',
      '/images/optimism-governance/the-optimism-network-af6d1031.svg',
      '/images/optimism-governance/progressive-decentralization-aaa9b55d.svg',
      '/images/optimism-governance/a-new-economy-fd6cac83.svg',
      '/images/optimism-governance/incentivizing-public-goods-b764ca38.svg',
      '/images/optimism-governance/ethers-phoenix-2b7210df.svg',
      '/images/optimism-governance/introducing-the-governing-houses-8f40dd30.svg',
      '/images/optimism-governance/the-token-house-39ac02b5.svg',
      '/images/optimism-governance/a-note-on-token-distribution-5d723b29.svg',
      '/images/optimism-governance/the-citizens-house-4c2b3821.svg',
      '/images/optimism-governance/governance-seasons-a79f33e7.svg',
      '/images/optimism-governance/shaping-an-optimistic-future-c4ff6f41.svg'
    ],
    keywords: [
      'dao',
      'delegation',
      'veto',
      'asynchronous',
      'onchain governance',
      'daos',
      'layer 2',
      'public goods',
      'blockspace',
      'l2',
      'dapps',
      'retropgf',
      'block producers',
      'erc-20',
      'cexs',
      'dexs',
      'delegate',
      'token distribution',
      'fork',
      'cex',
      'open source',
      'trustless'
    ],
    slides: [
      {
        type: 'LEARN',
        notionId: '8defbb8a1a4d432c9a1296ec85ef07cd',
        title: 'Old Problems, New Tools',
        content: '<div class="bloc1"><p>Modern technology has drastically changed the way in which humans view and interact with each other. On the world stage, and in a borderless cyberspace, we need new coordination models in order to coexist and thrive as a global tribe.</p><p>The vision of <code>DAO</code> technology is to streamline problem-solving and debate between a large number of collaborators — whether on the internet, in your local community, or on an international scale. This is done by:</p><ul><li>Incentivizing participants to share a common mission.</li><li>Innovative voting, <code>delegation</code>, and <code>veto</code> mechanics.</li><li>Using blockchain technology to decrease the potential for human error or hijacking.</li></ul></div><div class="bloc2"><img src=\'/images/optimism-governance/old-problems-new-tools-fea84c8f.svg\'></div>'
      },
      {
        type: 'LEARN',
        notionId: '9be7bd6326454cb682ff333f4738d11c',
        title: 'Network Governance',
        content: '<div class="bloc1"><p>Like any traditional nation-state with resources and participants, a DAO uses a governance process to steer the deployment of its resources and achievement of its mission. It’s like a town hall, but <code>asynchronous</code>, global, and partially mediated by code.</p><p>📜 <strong>Proposal:</strong> It begins with a governance proposal and community discussion. The proposal is updated based on public feedback. Anyone can submit a proposal, or critique one. This is the ‘decentralized’ part of ‘<code>DAO</code>’.</p><p>🗳️ <strong>Vote:</strong> The proposal moves to a vote — hosted via the transparent, censorship-resistant process of <code>onchain governance</code>. There is zero human facilitation between vote open and close; It is all mediated by code. This is the ‘autonomous’ part of ‘<code>DAO</code>’ — a quality envisioned to eventually cover the entire governance process.</p><p>🛠️ <strong>Implementation:</strong> The approved proposal is applied to the network, by various incentivized developers if necessary.</p></div><div class="bloc2"><img src=\'/images/optimism-governance/network-governance-45b77eb1.svg\'></div>'
      },
      {
        type: 'QUIZ',
        notionId: '1f06055418574f5a8c4ea95009b8a22c',
        title: '✅ Knowledge Check',
        quiz: {
          question: 'How can onchain governance help to solve interhuman debate?',
          rightAnswerNumber: 4,
          answers: [
            'Automation',
            'Transparency',
            'Censorship-resistance',
            'All of the above'
          ],
          feedback: [
            'ℹ️ This is true, but it isn’t the only answer.',
            'ℹ️ This is true, but it isn’t the only answer.',
            'ℹ️ This is true, but it isn’t the only answer.',
            'ℹ️ Correct! Onchain governance protects the voting process through multiple means.'
          ],
          id: 'optimism-governance-1'
        }
      },
      {
        type: 'LEARN',
        notionId: 'd8f110c9a56b40d5a76dbc8cb2c198c9',
        title: 'The Optimism Network',
        content: '<div class="bloc1"><p><code>DAOs</code> like the Optimism Collective are at the frontier of exploring such coordination systems.</p><p>In this lesson, we will explore how Optimism is pioneering the DAO vision. We will learn about their mission, and how they’re building new coordination frameworks for humanity.</p><p>Our quest will focus on claiming our first voting rights, so we’ll be ready to help build the future of Ethereum and human coordination!</p></div><div class="bloc2"><img src=\'/images/optimism-governance/the-optimism-network-af6d1031.svg\'></div>'
      },
      {
        type: 'LEARN',
        notionId: 'a900b00eb24242d292a90f20ae97d0f9',
        title: 'The Optimistic Vision',
        content: '<div class="bloc1"><p>Optimism is on a mission: to scale Ethereum by building a <code>Layer 2</code> network. It’s part of the Ethereum ecosystem, but with lower fees and faster transactions — while maintaining Ethereum’s high standard of security. Here are the defining properties:</p><p>🏕️ <strong>Public Goods:</strong> Great emphasis on funding and building onchain <code>public goods</code>. A public good is something that benefits everyone in a community, while one person\'s use of it doesn\'t reduce its availability for others. Your free education at Bankless Academy has been made possible through Optimism’s support of public goods!</p><p>🧑‍🤝‍🧑 <strong>Community Governance:</strong> The network is led by its community.</p><p>🏠 <strong>Free Market:</strong> Launched as an extension of not just Ethereum <code>blockspace</code>, but of Ethereum principles. It aims to scale the permissionless, open-source, censorship-resistant marketplace of Ethereum.</p><p>Optimism aims to become a “district of cyberspace” that directly provides for — and is governed by — its citizens!</p></div>'
      },
      {
        type: 'QUIZ',
        notionId: 'cab4301328734bd89b9b43a9c4b4dc21',
        title: '✅ Knowledge Check',
        quiz: {
          question: 'Which of the following is NOT a public good?',
          rightAnswerNumber: 4,
          answers: [
            'Education',
            'The Internet',
            'Ethereum',
            'A Centralized Exchange'
          ],
          feedback: [
            'ℹ️ Education can benefit everyone, and one person’s use doesn’t reduce its availability.',
            'ℹ️ The internet can benefit everyone, and one person’s use doesn’t reduce its availability.',
            'ℹ️ Ethereum can benefit everyone, and — with Layer 2s — one person’s use doesn’t reduce its availability.',
            'ℹ️ Correct. While CEXs provide community benefits, they are private businesses.'
          ],
          id: 'optimism-governance-2'
        }
      },
      {
        type: 'LEARN',
        notionId: '56113ce78bef4e478c9958f01515b8b5',
        title: 'Progressive Decentralization',
        content: '<div class="bloc1"><p>Many great blockchain projects begin with a centralized group. This gives the project crucial focus in building and spending, but a <code>DAO</code> needs<strong> more than promises of decentralization</strong>. On Optimism, the founders, network, and community are thought of as follows:</p><ul><li>🏦 <strong>Optimism Foundation:</strong> The network founders. They kickstart the ecosystem, provide initial resources, and act as community steward, before eventually dissolving.</li><li>🌐 <strong>Optimism Network:</strong> The autonomous code on the blockchain — the smart contracts and processing of user input.</li><li>👬 <strong>Optimism Collective:</strong> The governing community; a diverse set of global participants. They are responsible for the long term ownership and management of the ecosystem. The term ‘DAO’ covers both the Collective and the Network.</li></ul><p>Legal checks and balances, such as the Collective’s ability to remove members of the Foundation, ensure slow <strong>transfer of network ownership to the community</strong>.</p></div><div class="bloc2"><img src=\'/images/optimism-governance/progressive-decentralization-aaa9b55d.svg\'></div>'
      },
      {
        type: 'QUIZ',
        notionId: '0ca331a53a8d4890a2dbd4ebbce4f761',
        title: '✅ Knowledge Check',
        quiz: {
          question: 'True or false? The Optimism Foundation will continue to guide the Optimism Collective over the network’s lifetime.',
          rightAnswerNumber: 2,
          answers: [
            'True',
            'False'
          ],
          feedback: [
            'ℹ️ Try again!',
            'ℹ️ Correct! The Foundation will eventually dissolve, and the Collective will continue the mission.'
          ],
          id: 'optimism-governance-3'
        }
      },
      {
        type: 'LEARN',
        notionId: '400c326115274c778b9b6c7fbef050a0',
        title: 'A New Economy',
        content: '<div class="bloc1"><p>At the center of the Optimism <code>L2</code> economy is the <strong>‘Optimistic Flywheel’</strong>. This economic cycle generates revenue, network growth, and progress towards Optimism’s mission.</p><ol><li>Users and <code>dApps</code> demand network <code>blockspace</code>.</li><li>The network generates revenue via transaction fees.</li><li>A portion of these taxes are awarded to builders providing impactful public goods infrastructure.</li><li>Network users gain access to free resources and services, increasing the value of OP blockspace.</li></ol><p>With more valuable onchain infrastructure, demand for Optimism blockspace increases, and the cycle continues!</p></div><div class="bloc2"><img src=\'/images/optimism-governance/a-new-economy-fd6cac83.svg\'></div>'
      },
      {
        type: 'LEARN',
        notionId: '7e75e6c1c7ae463fa2b5dc3e2263f52f',
        title: 'Incentivizing Public Goods',
        content: '<div class="bloc1"><p>As you can see, <code>public goods</code> infrastructure is at the heart of Optimism. Yet selecting projects worthy of funding isn’t simple.</p><p>Here, Optimism takes an ‘<strong>Impact = Profit</strong>’ approach. Impact, however, is difficult to anticipate. Rather than making predictions, the funding body periodically looks over existing projects and assigns retroactive funding based on historic performance.</p><p>As Vitalik Buterin said,<br><em>“It’s easier to agree on what was useful than what will be useful.”</em></p><p>This distribution model is known as <strong>‘Retroactive Public Goods Funding’</strong>, or <strong>‘RetroPGF’</strong>. This funding mechanism incentivizes optimistic thinkers to build public goods that are of service to humanity. It liberates us from the value-extraction mindset of traditional capitalist economies.</p></div><div class="bloc2"><img src=\'/images/optimism-governance/incentivizing-public-goods-b764ca38.svg\'></div>'
      },
      {
        type: 'LEARN',
        notionId: '6ffa8e5eea9241b78933d4b5817519e9',
        title: 'Ether’s Phoenix',
        content: '<div class="bloc1"><p>Optimism calls this effect <strong>‘Ether’s Phoenix’</strong>: an <em>“angel reaching backwards in time, rewarding those who summon it.”</em></p><p><em>“It is an algorithm that rewards the early cooperators who created conditions for public goods funding to prosper. It is a future where early investment in public goods is recognized. It is also a mindset: that optimism prevails, that better systems are possible, and that humankind will be rewarded for its cooperative revolution.”</em></p><p>— The Optimism Foundation</p></div><div class="bloc2"><img src=\'/images/optimism-governance/ethers-phoenix-2b7210df.svg\'></div>'
      },
      {
        type: 'QUIZ',
        notionId: 'a9d7f617e364444589bf293de34be208',
        title: '✅ Knowledge Check',
        quiz: {
          question: 'How is Optimism incentivizing community-focused economics?',
          rightAnswerNumber: 3,
          answers: [
            'By rewarding all Optimism projects with retroactive funding.',
            'By providing a free market, but on the blockchain.',
            'By systemically funding business models that improve the lives of all network users.',
            'All of the above.'
          ],
          feedback: [
            'ℹ️ Try again! Rewarding all projects regardless of their mission is not Optimism’s approach.',
            'ℹ️ Try again! Use of blockchain technology alone doesn’t affect economic models.',
            'ℹ️ Correct! The network allocates a portion of transaction fees towards funding public goods.',
            'ℹ️ Try again! Only one of these is true.'
          ],
          id: 'optimism-governance-4'
        }
      },
      {
        type: 'LEARN',
        notionId: 'ce8f6cb56a9c458ab1882f5fe00f441a',
        title: 'Introducing the Governing Houses',
        content: '<div class="bloc1"><p>There are two houses that make up the Optimism Collective, each with independent and shared responsibilities in running the network.</p><p><strong>The Token House</strong> is responsible for managing network upgrades, incentives, and treasury. Its stakeholder structure incentivizes growth of the network economy, and generates stakeholder value. The house is also responsible for preserving decentralization — preventing capture of the network economy.</p><p><strong>The Citizens’ House</strong> allocates <code>RetroPGF</code> resources to community projects, according to the ‘Impact = Profit’ ethos, and helps decide the parameters of citizenship. The house is incentivized to improve network quality of life, by funding public goods that improve the value of citizenship!</p><p>Both houses maintain network balance through their duties, voting mechanics, and <code>veto</code> abilities. Let’s take a closer look.</p></div><div class="bloc2"><img src=\'/images/optimism-governance/introducing-the-governing-houses-8f40dd30.svg\'></div>'
      },
      {
        type: 'QUIZ',
        notionId: '1e4f756aa4d544ae8c9227f5d952ecf7',
        title: '✅ Knowledge Check',
        quiz: {
          question: 'How does the Citizens’ House differ from the Token House?',
          rightAnswerNumber: 2,
          answers: [
            'The Citizens’ House is the only house with veto abilities.',
            'The Citizens’ House allocates RetroPGF rewards.',
            'The Citizens’ House leads network decentralization.',
            'All of the above.'
          ],
          feedback: [
            'ℹ️ Try again! Both houses have veto powers.',
            'ℹ️ Correct! The Citizens’ House allocates public goods funding.',
            'ℹ️ Try again! Both houses maintain decentralization.',
            'ℹ️ Try again!'
          ],
          id: 'optimism-governance-5'
        }
      },
      {
        type: 'LEARN',
        notionId: '0949bf58f8ae4bdbb2d8442b126e89ab',
        title: 'The Token House',
        content: '<div class="bloc1"><p>The Token House maintains the economy and defenses of the Optimism Network.</p><p>Duties include:</p><ul><li>⚒️ Review and approval of <strong>upgrades to network mechanics</strong>.</li><li>⛓️ Selection of network <code>block producers</code>.</li><li>📈 <strong>Allocation of revenue, </strong>using collected transaction fees to fuel network growth. </li></ul><p>To protect the network, the Citizens’ House has the right to <code>veto</code> any proposal under the above categories.</p><p>The Token House also has the ability to veto any proposal submitted by the Citizens’ House, or the Optimism Foundation, which is seen to be reducing rights of token holders.</p></div><div class="bloc2"><img src=\'/images/optimism-governance/the-token-house-39ac02b5.svg\'></div>'
      },
      {
        type: 'LEARN',
        notionId: 'fd028bd1ef4e427495a13d809576d0fc',
        title: 'Token House: Joining, Voting, Delegating',
        content: '<div class="bloc1"><p>📝 <strong>Joining:</strong> the Token House is done via purchasing and holding OP tokens. These are <code>ERC-20</code> tokens, and are therefore transferrable; They can be bought and sold on <code>CEXs</code>, Optimism <code>DEXs</code>, or sent between friends. OP tokens are not available on other networks.</p><p>🗳️ <strong>Voting:</strong> Voting power scales based on how many tokens are held.</p><p>The Token House follows <a href=\'https://community.optimism.io/docs/governance/token-house-history/\'>a five week voting cycle</a>:</p><ul><li>Week 1-3: Proposal submission, review, and feedback.</li><li>Week 4-5: Voting.</li></ul><p>📢 <strong>Delegating: </strong>Many users prefer to <code>delegate</code> their voting power to other token holders who they feel best represent the community’s interests. This is a great way to have an impact on the ecosystem without having to read every proposal that enters voting. Delegation does not affect token ownership — delegated OP tokens stay in your wallet.</p><p>Anyone can become a Token House delegate on Optimism, representing a group of friends, a community, or even a university’s blockchain club! Active delegates are often rewarded by the community.</p></div>'
      },
      {
        type: 'LEARN',
        notionId: 'fc178589352542e5841061f5a22ee0b8',
        title: 'A Note on Token Distribution…',
        content: '<div class="bloc1"><p>Network governance is only as democratic as its initial <code>token distribution</code>. We should always ask “who received voting power in the first place?” and “how much did they receive?”. </p><p>Check out the <a href=\'https://community.optimism.io/docs/governance/allocations/#allocations-at-a-glance\'>OP distribution plan</a> to see how the Optimism Foundation has allocated initial governance power, in service of balanced stakeholder representation.</p></div><div class="bloc2"><img src=\'/images/optimism-governance/a-note-on-token-distribution-5d723b29.svg\'></div>'
      },
      {
        type: 'QUIZ',
        notionId: 'fffcd5559d6b47e2b6d5149ec9d28d22',
        title: '✅ Knowledge Check',
        quiz: {
          question: 'How does the Token House protect the network from attack?',
          rightAnswerNumber: 4,
          answers: [
            'By selecting a diverse set of network block producers.',
            'By vetoing Optimism Foundation proposals seen to be reducing token holder rights.',
            'By carefully reviewing network upgrade proposals.',
            'All of the above.'
          ],
          feedback: [
            'ℹ️ This is true, but it isn’t the only answer.',
            'ℹ️ This is true, but it isn’t the only answer.',
            'ℹ️ This is true, but it isn’t the only answer.',
            'ℹ️ Correct! The Token House has a diverse set of responsibilities in protecting the network.'
          ],
          id: 'optimism-governance-6'
        }
      },
      {
        type: 'LEARN',
        notionId: '9521963b9c4d4307b7966bab816c14da',
        title: 'The Citizens’ House',
        content: '<div class="bloc1"><p>The Citizens’ House conducts the growth of public infrastructure on the Optimism Network. Its primary focus is managing Retroactive Public Goods Funding.</p><p>Duties include:</p><ul><li>🎯 <strong>Defining RetroPGF metrics and impact criteria</strong> for measuring project performance.</li><li>🔍 <strong>Research and allocation of RetroPGF</strong> to community projects which meet the guidelines.</li><li>👬 <strong>Selection of new citizens</strong> to help govern the Citizens’ House, and balance Token House perspective. The Token House has veto rights for this type of proposal.</li></ul><p>The Citizens’ House also ensures that Token House proposals are mission-aligned, using <code>veto</code> mechanics to waive unaligned changes to the network.</p></div><div class="bloc2"><img src=\'/images/optimism-governance/the-citizens-house-4c2b3821.svg\'></div>'
      },
      {
        type: 'LEARN',
        notionId: 'd4769b75171e4850b0b5768a68a9a31a',
        title: 'Citizens’ House: Joining, Voting, Delegating',
        content: '<div class="bloc1"><p>📝 <strong>Joining:</strong> The Citizens’ House currently adds members by invitation, to slowly scale and refine its processes. Membership is marked by holding a ‘Citizen Badge’.</p><p>The specifics of invitations change seasonally based on experimentation by the Optimism Foundation:</p><ul><li>Current Citizens may be granted an additional invitation, to be shared with someone they see as a great addition to the network.</li><li>Previous RetroPGF recipients have been granted the opportunity to select one community member for Citizen status.</li><li>The Optimism Foundation has issued Citizenship to project builders using the network.</li></ul><p>As the scaling methods are refined, growth will be automated via <code>onchain governance</code>.</p><p>🗳️ <strong>Voting:</strong> Each Citizen has a single vote. Their voting power cannot be transferred or delegated. This protects against gathering of House power under a small number of Citizens.</p><p>At present, RetroPGF distribution occurs roughly twice per year.</p></div>'
      },
      {
        type: 'QUIZ',
        notionId: '7ddf83811003407487d15711a764ca5e',
        title: '✅ Knowledge Check',
        quiz: {
          question: 'How does the Citizens’ House protect the network from attack?',
          rightAnswerNumber: 3,
          answers: [
            'By expanding the number of Citizens’ House members.',
            'By vetoing unaligned Token House proposals.',
            'Both of the above.'
          ],
          feedback: [
            'ℹ️ This is true, but it isn’t the only answer.',
            'ℹ️ This is true, but it isn’t the only answer.',
            'ℹ️ Correct! This house diversifies its own perspective, and balances Token House perspective.'
          ],
          id: 'optimism-governance-7'
        }
      },
      {
        type: 'LEARN',
        notionId: '83fb66652fd14e3a90d4c0c13c086a84',
        title: 'Governance Seasons',
        content: '<div class="bloc1"><p>Optimism takes <strong>an iterative approach to governance</strong>, using a calendar structure referred to as ‘Seasons’. </p><p>By moving between periods of active governance and reflection, participants gain firsthand experience followed by digestion and discussion of current governance practices. The model is then improved by the Optimism Foundation, and the next season begins.</p><p>On Optimism a season lasts roughly three months, followed by a reflection period of similar length.</p><p>These thoughtful feedback loops, built throughout Optimism’s systems, are incredibly important for building governance best practices in <code>DAO</code> communities.</p></div><div class="bloc2"><img src=\'/images/optimism-governance/governance-seasons-a79f33e7.svg\'></div>'
      },
      {
        type: 'LEARN',
        notionId: 'b1a6643529c946d4804f4b5887b88e67',
        title: 'Now… Think Even Bigger!',
        content: '<div class="bloc1"><p>We’re almost ready to govern on Optimism 🔴. There’s one last thing to mention.</p><p>The Optimistic Vision doesn’t stop at a single <code>L2</code> blockchain. As result of the ability to <code>fork</code> a blockchain, this is a cloneable governance experiment. This technology is built to be scaled across multiple L2s — and even into real world governance scenarios. Optimism calls this <strong>‘The Superchain’</strong>.</p><p>Coinbase, a prominent <code>CEX</code>, has already forked and started contributing to this <code>open source</code> initiative, through the Base 🔵 L2 blockchain. This collaborative pooling of development resources increases infrastructure evolution, while funneling L2 transaction fees towards Optimism’s ‘Impact = Profit’ ethos.</p><p>RetroPGF rewards now include profits from Base 🔵 transaction fees — which means more funding for <code>public goods</code>!</p></div>'
      },
      {
        type: 'LEARN',
        notionId: 'c07816442cd44d56ad4522f713b959c1',
        title: 'Shaping an Optimistic Future',
        content: '<div class="bloc1"><p>History has always been paved by the optimists of humanity — those that dared to think big, and act to achieve their vision.</p><p>By getting involved in innovative communities, using <code>trustless</code> and fair governance systems, we are trailblazing the future of human coordination. We are building a world where humanity can thrive in local, global, and online systems. It’s time to start our Optimism governance journey.</p><p>Today’s quest is <strong>to join the Token House and </strong><code>delegate</code><strong> our OP tokens</strong>.</p><p>While the Citizens’ House develops its onboarding procedures, we can begin our Citizen journey by participating in conversation on the <a href=\'https://gov.optimism.io/\'>Optimism community</a> forums.</p></div><div class="bloc2"><img src=\'/images/optimism-governance/shaping-an-optimistic-future-c4ff6f41.svg\'></div>'
      },
      {
        type: 'QUEST',
        title: 'Optimism Governance Quest',
        component: 'OptimismGovernance'
      }
    ]
  },
  {
    badgeImageLink: null,
    lessonImageLink: '/images/delegating-on-optimism/lesson-9ce41ea1.png',
    socialImageLink: '/images/delegating-on-optimism/social-2cbfa86f.png',
    learningActions: '',
    marketingDescription: 'Grant your OP voting power to people closely following governance.',
    badgeId: null,
    collectibleId: 'H005',
    duration: 5,
    learnings: '',
    description: 'Grant your OP voting power to people closely following governance.',
    name: 'Delegating on Optimism',
    languages: [
      'cn',
      'de',
      'es',
      'fr',
      'jp'
    ],
    level: 'Level 1',
    tags: [
      'DAO',
      'Optimism'
    ],
    lessonWriters: 'Tetranome',
    publicationStatus: 'publish',
    publicationDate: '2023-09-07',
    featuredOrderOnHomepage: null,
    isCommentsEnabled: false,
    endOfLessonRedirect: null,
    mirrorLink: 'https://mirror.xyz/banklessacademy.eth/INead5MxCJbHMVb9lDDSzs3VA1DCAU9SCc4AIdhC58k',
    mirrorNFTAddress: '0xa22ed08b4ed3a34ce5c1802748ed8b294f3ec926',
    areMirrorNFTAllCollected: false,
    sponsorName: 'Optimism',
    sponsorLogo: '/images/delegating-on-optimism/sponsor-29773262.png',
    isArticle: true,
    notionId: 'a46f91a728e340f1a6bc66dd4367394d',
    englishName: 'Delegating on Optimism',
    slug: 'delegating-on-optimism',
    articleContent: '## Key Takeaways\n\n> * Delegation is a voting mechanic that allows a representative — called a ‘Delegate’ — to make votes on another person’s behalf.\n>\n> * Optimism handles voting and delegation via their ‘Optimism Agora’ `dApp`.\n>\n> * You will maintain self-custody over delegated OP tokens, able to transfer or sell at any time.\n\n## Introduction\n\nDelegation is an onchain voting mechanic that allows a community member to temporarily grant their governance voting power to a community representative. This process allows a user to contribute to `network governance`, without having to actively monitor every proposed action or change in the ecosystem.\n\nOn Optimism, governance power is represented by holding OP tokens in a self-custody wallet. OP tokens do not leave your self-custody wallet during delegation. You can transfer or sell them at any time, but your Delegate will only receive the voting power held in your wallet. You can change your community Delegate at any time.\n\nOn Optimism we use a voting dApp called ‘Agora’ to look through eligible Delegates, perform delegation, and monitor proposals. Let’s take a closer look.\n\n## Prerequisites\n\nIf you want to hold voting power, you’ll need to purchase OP tokens. You can continue without completing these two steps if you simply want to set up delegation.\n\n**1\. Buy ETH on the Optimism Network.**\n\nYou can find a step-by-step guide in our Explorer’s Handbook entry, [‘How to fund a Wallet on Layer 2’](https://app.banklessacademy.com/lessons/how-to-fund-a-wallet-on-layer-2).\n\n**2\. Swap your ETH to OP tokens on the Optimism Network, using a** `DEX`.\n\nCheck out our Explorer’s Handbook entry on [‘How to Swap on a Decentralized Exchange’](https://app.banklessacademy.com/lessons/how-to-swap-on-a-decentralized-exchange) for a step-by-step guide on using a DEX to buy OP tokens.\n\n## Delegating on Optimism Agora\n\n**1\. Open the Optimism Agora dApp: <https://vote.optimism.io/>**\n\n![](/images/delegating-on-optimism/image-ce643a81.png)\n\n**2\. Connect your wallet.**\n\n![](/images/delegating-on-optimism/image-9ec06fe9.png)\n\n**3\. Scroll down, and choose your favorite Delegate.**\n\nBy clicking on a delegate, you will find a short statement, their vote history, and influence measurements. Take your time to find a representative that aligns with your vision for Optimism.\n\n![](/images/delegating-on-optimism/image-6443ae02.png)\n\n**4\. Hit the ‘delegate’ button, and approve the transaction in your wallet.**\n\nNo OP tokens will leave your wallet throughout this process. There is a small gas fee, charged in ETH.\n\n![](/images/delegating-on-optimism/image-245809cd.png)\n\n\n---\n\nIt’s time to explore better voting systems. We hope you’ve enjoyed this entry in the Explorer’s Handbook: ‘Delegating on Optimism’.\n\nDon’t forget to collect this entry if you want to own a copy for easy reference on your travels, or to support future content at Bankless Academy. Safe travels, Explorer!\n\n\n---\n\n## Frequently Asked Questions\n\n### How many tokens do I need to delegate?\n\nYou can begin delegating while holding any amount of OP tokens — even zero! As you increase or decrease your OP holdings, your delegated voting power will be updated. You don’t have to redelegate every time you make changes to your OP holdings.\n\n### How do I choose the right delegate?\n\nIt comes down to your personal values, and your vision for how you want to see Optimism grow. Take some time to scroll through the Delegate profiles and see what resonates with you.\n\n### Can I become a Delegate?\n\nYou can! Check out the [‘How to be a delegate’](https://community.optimism.io/docs/governance/delegate/) guide, hosted on Optimism Docs.\n\nNote: this won’t count for the [‘Optimism Governance’](https://app.banklessacademy.com/lessons/optimism-governance) lesson quest at Bankless Academy.\n\n### Do I need to delegate to vote?\n\nYou can skip delegation and represent yourself by tracking votes under the ‘Proposals’ tab on Optimism Agora.\n\nNote: this also won’t count for the [‘Optimism Governance’](https://app.banklessacademy.com/lessons/optimism-governance) lesson quest at Bankless Academy, but you can do so once you’ve collected your badge!\n\n\n---\n\n**Author**\n\n**[Tetranome](https://twitter.com/Tetranome)** is the Project Champion at Bankless Academy, focusing on user experience, interface, design, and content.\n\n**Patron**\n\nThis article was funded by **[Optimism](https://www.optimism.io/)**.',
    imageLinks: [
      '/images/delegating-on-optimism/image-ce643a81.png',
      '/images/delegating-on-optimism/image-9ec06fe9.png',
      '/images/delegating-on-optimism/image-6443ae02.png',
      '/images/delegating-on-optimism/image-245809cd.png'
    ],
    keywords: [
      'dApp',
      'network governance',
      'DEX'
    ]
  },
  {
    badgeImageLink: '/images/public-nouns-a-public-goods-dao-experiment/badge-a642c71c.png',
    lessonImageLink: '/images/public-nouns-a-public-goods-dao-experiment/lesson-9b436d64.png',
    socialImageLink: '/images/public-nouns-a-public-goods-dao-experiment/social-aa1b4d45.png',
    learningActions: '',
    marketingDescription: 'Learn how web3 communities come together to fund public goods.',
    badgeId: 15,
    duration: 10,
    learnings: '',
    description: 'Learn how web3 communities come together to fund public goods.',
    name: 'Public Nouns: A Public Goods DAO Experiment',
    languages: [],
    level: 'Community Lessons',
    community: 'Public Nouns',
    lessonWriters: 'OrnellaWeb3',
    quest: 'PublicNounsAPublicGoodsDAOExperiment',
    questSocialMessage: 'I\'ve just completed the @PublicNouns lesson on @BanklessAcademy 🎓\n\nJoin the journey and level up your #web3 knowledge! 👨‍🚀 🚀',
    publicationStatus: 'publish',
    publicationDate: '2025-06-18',
    featuredOrderOnHomepage: null,
    isCommentsEnabled: false,
    endOfLessonRedirect: null,
    sponsorName: 'Public Nouns',
    sponsorLogo: '/images/public-nouns-a-public-goods-dao-experiment/sponsor-912e55e6.png',
    notionId: '20f12837a13b80fca3f0c312ba7d1fac',
    englishName: 'Public Nouns: A Public Goods DAO Experiment',
    slug: 'public-nouns-a-public-goods-dao-experiment',
    imageLinks: [
      '/images/public-nouns-a-public-goods-dao-experiment/introduction-959fa0fe.png',
      '/images/public-nouns-a-public-goods-dao-experiment/public-goods-are-good-aa712ff1.png',
      '/images/public-nouns-a-public-goods-dao-experiment/using-web3-to-fund-public-goods-9ee02318.png',
      '/images/public-nouns-a-public-goods-dao-experiment/what-is-an-nft-the-role-of-meme-culture-71cedc1a.png',
      '/images/public-nouns-a-public-goods-dao-experiment/what-is-a-dao-e9562a03.png',
      '/images/public-nouns-a-public-goods-dao-experiment/forking-governance-contracts-07be6c71.svg',
      '/images/public-nouns-a-public-goods-dao-experiment/how-onchain-funding-works-5d9d11c8.png',
      '/images/public-nouns-a-public-goods-dao-experiment/public-nouns-impact-part-i-7b7c8535.png',
      '/images/public-nouns-a-public-goods-dao-experiment/public-nouns-impact-part-ii-5de36323.png',
      '/images/public-nouns-a-public-goods-dao-experiment/mission-accomplished-a808dbc2.png',
      '/images/public-nouns-a-public-goods-dao-experiment/whats-next-an-open-invitation-5efe6f41.png'
    ],
    keywords: [
      'nft',
      'erc-721',
      'erc-1155',
      'erc-20'
    ],
    slides: [
      {
        type: 'LEARN',
        notionId: '20f12837a13b80638a22c7a5068216d2',
        title: 'Introduction',
        content: '<div class="bloc1"><p><strong>Welcome, Explorers, to a new Community Lesson!</strong></p><p>In web3, everything starts with <strong>community</strong>. Thanks to blockchain technology and Ethereum, communities can now do more than just coordinate! They can take <strong>action</strong>, <strong>govern</strong> shared resources, <strong>fund</strong> aligned projects, and <strong>support</strong> the future they want to see 🌱</p><p>In this lesson, you’ll explore how <strong>public goods, DAOs, NFTs</strong>, and <strong>onchain governance</strong> come together in a bold experiment called <strong>Public Nouns</strong>. Think of open-source tools, Ethereum infrastructure, or free educational platforms like Bankless Academy. These are digital public goods. They can benefit everyone, but since they are not profit-driven, they’re generally hard to fund.</p><p>To tackle the challenge, Public Nouns raised a question: <em><strong>What if a decentralized community could fund these goods directly using art, culture, and code? </strong></em><strong>👨🏻‍💻</strong></p><p>Let’s find out what happens when people care enough to build! ⚒️</p></div><div class="bloc2"><img src=\'/images/public-nouns-a-public-goods-dao-experiment/introduction-959fa0fe.png\'></div>'
      },
      {
        type: 'LEARN',
        notionId: '20f12837a13b80b987e4dd01fd21f189',
        title: 'Public goods are good',
        content: '<div class="bloc1"><p>To start, let’s learn what public goods are 💡</p><p>Public goods are resources that <strong>everyone can access, and one person’s use doesn’t reduce its availability to others.</strong></p><p>In more economic terms, they are <strong>non-excludable and non-rivalrous.</strong></p><p>It might be a difficult concept to grasp at first, but think of clean air, streetlights, and public spaces like libraries and parks 🌳</p><p>In web3, public goods include things like <strong>open-source code</strong> (such as Ethereum clients), <strong>shared infrastructure</strong>, and <strong>free educational resources</strong> like tutorials and documentation. These are the digital commons that can be used by everyone, and their availability isn’t reduced if used 🌐</p><p>Public Nouns is a web3-native experiment designed to support both<strong> web3 and real-world</strong> public goods without middlemen, using <strong>art, community, and culture</strong> 🎨</p></div><div class="bloc2"><img src=\'/images/public-nouns-a-public-goods-dao-experiment/public-goods-are-good-aa712ff1.png\'></div>'
      },
      {
        type: 'QUIZ',
        notionId: '9ae7dfe11c4c476abba3fcd16438d3b5',
        title: '✅ Knowledge Check',
        quiz: {
          question: 'What’s true about public goods?',
          rightAnswerNumber: 3,
          answers: [
            'They run out when used',
            'They’re invite-only spaces',
            'They are free and shared',
            'They’re locked behind a paywall'
          ],
          id: 'public-nouns-a-public-goods-dao-experiment-1'
        }
      },
      {
        type: 'LEARN',
        notionId: '21512837a13b800b8b36f7c1f7a04ab1',
        title: 'Using web3 to fund public goods',
        content: '<div class="bloc1"><p>To understand how web3 enables funding for public goods, we need to define its <strong>core building blocks 🧱</strong></p><p>If you’re already familiar with them, you’ll be able to engage with the next slides more confidently. If not, do not worry, we encourage you to <em>read carefully</em>, as these are <strong>foundational</strong> ideas that will help everything else make sense.</p><p>We’ll cover:</p><ul><li><strong>NFTs: </strong>non-fungible tokens used for identity and coordination 🖼️</li><li><strong>DAOs: </strong>decentralized autonomous organizations with shared treasuries 🌐</li><li><strong>Onchain governance:</strong> transparent, code-based systems for collective decisions 🗳️</li></ul><p>These elements come together in a <em>unique case study</em>: <strong>Public Nouns</strong>, a community experiment for public goods funding.</p></div><div class="bloc2"><img src=\'/images/public-nouns-a-public-goods-dao-experiment/using-web3-to-fund-public-goods-9ee02318.png\'></div>'
      },
      {
        type: 'LEARN',
        notionId: '20f12837a13b80dab377cc7952e67a0c',
        title: 'What is an NFT? The role of meme culture',
        content: '<div class="bloc1"><p>Ethereum has different types of tokens. <code>NFT</code> stands for <em>non-fungible token</em>, most commonly implemented as <code>ERC-721</code> or <code>ERC-1155</code>. ERC stands for Ethereum Request for Comment, it refers to a set of <strong>technical standards</strong> that govern how tokens are created and function on Ethereum.</p><p>Unlike interchangeable tokens, like ETH or tokens like USDC (<code>ERC-20</code>), each NFT is distinct and can represent many things: art, music, identity, status, or access.</p><p>In Public Nouns, they’re <strong>symbols of shared values. </strong>Each one features an artwork representing a <strong>public goods project</strong>. These visuals act as shared symbols within each community and the Ethereum ecosystem. Examples include <strong>MolochDAO, Gitcoin, Treegens</strong>, and more. As communities emerge and others wind down, Public Nouners can propose new art/communities to be included 🗳️</p><p>The art draws from <strong>meme culture</strong>, as a way to define <strong>cultural identity</strong> and help people <strong>coordinate</strong> around a shared mission 🎯</p></div><div class="bloc2"><img src=\'/images/public-nouns-a-public-goods-dao-experiment/what-is-an-nft-the-role-of-meme-culture-71cedc1a.png\'></div>'
      },
      {
        type: 'QUIZ',
        notionId: '21512837a13b809a8deaf4ca312a528f',
        title: '✅ Knowledge Check',
        quiz: {
          question: 'What does a Public Nouns NFT represent?',
          rightAnswerNumber: 3,
          answers: [
            'Pets of each community member',
            'Speculative art with no intrinsic value',
            'A specific public goods project',
            'Memecoins'
          ],
          id: 'public-nouns-a-public-goods-dao-experiment-2'
        }
      },
      {
        type: 'LEARN',
        notionId: '20f12837a13b80a1a5d3c3dfb437c5e9',
        title: 'What is a DAO?',
        content: '<div class="bloc1"><p>A <strong>DAO</strong>, or <strong>Decentralized Autonomous Organization</strong>, is a web3-native structure for making collective decisions. It manages a shared treasury and its community members vote on new initiatives and how to fund them, openly and without middlemen ⛓️</p><p>DAOs were born on <strong>Ethereum. Smart contracts</strong>, self-executing programs deployed on the blockchain, have made it possible to automate coordination through code. These programs define the rules: <strong>who</strong> can propose a project, <strong>how</strong> votes are counted, and <strong>when</strong> funds are released 🔓</p><p><strong>Public Nouns is a DAO</strong>. If you hold in your Ethereum wallet a Public Noun NFT, you’re part of the DAO. You can <strong>propose</strong> new projects, <strong>vote</strong> on proposals, and <strong>help decide</strong> which public goods get supported 🗳️</p><p>There are many kinds of DAOs. Some manage protocols, others invest capital, and some, like Public Nouns, exist to support public goods. Its mission is to create impact, not profit.</p></div><div class="bloc2"><img src=\'/images/public-nouns-a-public-goods-dao-experiment/what-is-a-dao-e9562a03.png\'></div>'
      },
      {
        type: 'LEARN',
        notionId: '20f12837a13b80819b8aead7d3f250b8',
        title: 'Nouns and Public Nouns',
        content: '<div class="bloc1"><p>Now that you know what a DAO is, let’s look at the one that inspired it all: <strong>Nouns</strong> ⌐◨-◨</p><p>Nouns began as an experiment in <strong>community-owned culture</strong>. Every 24 hours, a pixel-art “Noun” is generated and auctioned onchain. The ETH goes into a shared treasury, and each Noun gives its holder one vote in the DAO.</p><p>The Nouns movement started with a meme and lets the community <strong>decide what to build</strong>. Projects can go from media to tooling to global events. Its most iconic trait? <strong>The Noggles</strong> ⌐◨-◨, pixelated glasses worn by every Noun.</p><p>This cultural icon has expanded from the <em>digital realm to real-world landmarks</em> and events such as the <a href=\'https://x.com/punk4156/status/1822040547059446040\'>Shibuya Crossing in Tokyo</a>, to a projection on the <a href=\'https://x.com/johnhamon_/status/1761348271421747554\'>Eiffel Tower</a>, and has even been part of a <a href=\'https://www.youtube.com/watch?v=Dbke3F1VnsQ\'>Super Bowl commercial</a>. Noggles are a <strong>cultural symbol of shared Nouns identity</strong> across sub-DAOs like Lil Nouns, Gnars, and of course, Public Nouns.</p></div><div class="bloc2"><iframe allowfullscreen src=\'https://www.youtube.com/embed/lOzCA7bZG_k?rel=0&start=8\'></iframe></div>'
      },
      {
        type: 'QUIZ',
        notionId: '21512837a13b803c8c2af3167489f5e4',
        title: '✅ Knowledge Check',
        quiz: {
          question: 'What connects Public Nouns to Nouns?',
          rightAnswerNumber: 2,
          answers: [
            'They have shared treasury and governance',
            'Coded fork and shared symbols',
            'Founded by the same web3 team',
            'They use pixel art that changes every week'
          ],
          id: 'public-nouns-a-public-goods-dao-experiment-3'
        }
      },
      {
        type: 'LEARN',
        notionId: '20f12837a13b80568cefdb0005254620',
        title: 'Forking & Governance Contracts',
        content: '<div class="bloc1"><p>Public Nouns is a <strong>fork of Nouns.</strong> In web3, <em>forking </em>means copying<strong> open-source code</strong> and adapting it for a new mission. Public Nouns <strong>kept the daily auction model</strong>, but instead of having random characters with different traits, each NFT features symbolic artwork tied to a public good.</p><p>The system relies on three core contracts, each with a specific role:</p><ul><li><strong>Auction</strong>: handles timing and sales of NFTs 🖼️</li><li><strong>Treasury</strong>: holds the ETH and releases it when proposals pass 🗝️</li><li><strong>Governor</strong>: developed by Compound, it manages proposals, voting rules, and quorum 🗳️</li></ul><p>These <strong>smart contracts work together</strong> to define how proposals are made, approved and executed, all automatically and onchain ⚡</p><p>This kind of <strong>modular approach</strong> is one of Web3’s biggest strengths: shared infrastructure becomes a public good of its own, ready to be <em>remixed, repurposed, and reimagined </em>💭</p></div><div class="bloc2"><img src=\'/images/public-nouns-a-public-goods-dao-experiment/forking-governance-contracts-07be6c71.svg\'></div>'
      },
      {
        type: 'LEARN',
        notionId: '20f12837a13b80faa792fdedc282a630',
        title: 'How Onchain Funding Works',
        content: '<div class="bloc1"><p>To understand onchain funding, here’s a brief summary of how it works:</p><p><strong>🎨 Step 1</strong>: the <strong>auction contract</strong> creates a new Public Noun every 12 hours (or when the past auction is settled), and sends the ETH from each auction directly to the treasury.</p><p><strong>🗳️ Step 2</strong>: the <strong>governor contract</strong> manages proposals and voting made by DAO members - only when a proposal passes, meeting quorum and approval thresholds, can it be executed.</p><p><strong>💰 Step 3:</strong> the <strong>treasury contract</strong> holds the funds and is only triggered by the governor contract, often with a built-in time delay.</p><p>This setup means funds <strong>move only when the community approves. </strong>No shortcuts, no central admin, no backroom decisions.</p><p>In simple terms, it’s a protocol for funding: transparent, automatic, and verifiable by anyone on the Ethereum blockchain. Check out the full contract <a href=\'https://etherscan.io/address/0x2bbebfeca0febde8c70ef8501c991f3ab2095862#code\'>here</a> on Etherscan.</p></div><div class="bloc2"><img src=\'/images/public-nouns-a-public-goods-dao-experiment/how-onchain-funding-works-5d9d11c8.png\'></div>'
      },
      {
        type: 'QUIZ',
        notionId: '21512837a13b80029db5ce0c278254d1',
        title: '✅ Knowledge Check',
        quiz: {
          question: 'What does forking mean?',
          rightAnswerNumber: 3,
          answers: [
            'Attending the annual Public Nouns dinner',
            'Rewritten the governance contract',
            'Copying code and reusing it',
            'Delegate the ability to vote on proposals'
          ],
          id: 'public-nouns-a-public-goods-dao-experiment-4'
        }
      },
      {
        type: 'LEARN',
        notionId: '21b12837a13b8087bbb4f604a2b406b4',
        title: 'Public Nouns’ Impact - Part I',
        content: '<div class="bloc1"><p>Since inception, Public Nouns has funded more than 50 projects through community-approved proposals. These <strong>early-stage experiments, </strong>which can be web3 or non-web3 related, were designed by community members with new and disruptive ideas 💡</p><p><strong>Web3 Public Goods</strong></p><ul><li><a href=\'https://x.com/ProtocolGuild\'>Protocol Guild</a>: long-term funding for Ethereum core contributors ⛓️</li><li><a href=\'https://x.com/Pizza_DAO\'>PizzaDAO</a>: in-person events promoting web3 values through pizza 🍕</li><li><a href=\'https://x.com/Giveth\'>Giveth</a>: empowers changemakers to accept crypto donations 💜</li><li><a href=\'https://publicnouns.wtf/vote/50\'>Gardens Conviction Voting</a>: bottom-up web3 governance framework 🌱</li></ul><p>This very lesson, content and onchain certification, is also possible thanks to the support of the community. Check out the full list of projects and proposals supported <a href=\'https://publicnouns.wtf/vote\'>here</a>. Public Nouns shows the<strong> impact a small internet-native community can have</strong> when it funds public goods with intent, speed, and shared values.</p></div><div class="bloc2"><img src=\'/images/public-nouns-a-public-goods-dao-experiment/public-nouns-impact-part-i-7b7c8535.png\'></div>'
      },
      {
        type: 'LEARN',
        notionId: '20f12837a13b807181b7e84610b14bea',
        title: 'Public Nouns’ Impact - Part II',
        content: '<div class="bloc1"><p>Public Nouns doesn’t just support web3 public goods, its mission extends into real-world public goods too. The community has backed projects focused on climate action, education, local food systems, and regeneration 🌍</p><p>Recent examples include:</p><ul><li><a href=\'https://publicnouns.wtf/vote/69\'>Kokonut Network</a>: syntropic agroforestry farms using web3 🌱</li><li><a href=\'https://publicnouns.wtf/vote/71\'>Solar Foundation:</a> expanding access to solar power in Tanzania</li><li><a href=\'https://publicnouns.wtf/vote/38\'>Tree Planting Guinness World Record Sponsorship</a> in Thailand</li><li><a href=\'https://publicnouns.wtf/vote/63\'>Ayowecca Uganda:</a> transforming lifestyle of indigenous and marginalized communities</li></ul><p>Each project followed a <em>three-step process</em>:</p><ol><li>The proposal was <strong>posted</strong> in the <a href=\'/20f12837a13b80fca3f0c312ba7d1fac?pvs=25\'>Public Nouns Discord</a> 🗨️</li><li>A 7-day (suggested) community <strong>discussion</strong> period took place 🧠</li><li>The proposal advanced to <strong>onchain voting</strong> at <a href=\'http://publicnouns.wtf\'>publicnouns.wtf</a> 🗳️</li></ol></div><div class="bloc2"><img src=\'/images/public-nouns-a-public-goods-dao-experiment/public-nouns-impact-part-ii-5de36323.png\'></div>'
      },
      {
        type: 'LEARN',
        notionId: '21412837a13b80ef9583cbf88c3203d4',
        title: 'Mission accomplished',
        content: '<div class="bloc1"><p>Public Nouns set out with a <strong>clear mission</strong>: fund experiments in public goods using <strong>onchain tools, community decision-making, and symbolic NFTs.</strong> From protocol development and public education to coordination infrastructure and community-led initiatives, its impact is widely felt within the <strong>Ethereum ecosystem.</strong></p><p><strong>How long will this experiment last?</strong> <em>That’s still being defined.</em> As more OG members move on, and new members join, the community is now exploring how the mission can evolve ✨</p><p>One of the core strengths of web3 is <strong>building in public</strong>. This supports innovation and cross-collaboration that can shape the next phase of Public Nouns. Whatever the future might hold, it is clear that Public Nouns has helped pioneer the frontier of <strong>mission-driven, onchain funding</strong> - with an impact that will echo for years to come ⏳</p><p>Whether through Public Nouns itself or new forks, the model remains <strong>open, tested, and available</strong>. The tools are onchain. The lessons are public. And the invitation to keep building, is always open ⚒️</p></div><div class="bloc2"><img src=\'/images/public-nouns-a-public-goods-dao-experiment/mission-accomplished-a808dbc2.png\'></div>'
      },
      {
        type: 'LEARN',
        notionId: '21412837a13b807b93bbfb1bbe247967',
        title: 'What’s next? An open invitation',
        content: '<div class="bloc1"><p>You’re almost there, Explorer! 🧑🏻‍🚀 We’re just one step away from the end of the lesson. Once completed, you will conquer the quest and be eligible to claim your onchain certification 🛡️</p><p>Before we conclude, and if the <strong>Public Nouns mission resonates with you</strong>, here’s a few steps you can take to support the community:</p><ul><li>Follow <a href=\'https://x.com/PublicNouns\'>Public Nouns</a></li><li>Join the Community Spaces 🎙️</li><li><a href=\'https://x.com/KokonutNetwork/status/1934021469966635401\'>Create content</a> about Public Nouns</li><li>Become part of the community by buying a <a href=\'https://publicnouns.wtf/\'>Public Noun</a></li></ul><p>Getting involved in any of these initiatives, supports the mission and helps it move forward 🚀</p><p><em>💡 To participate in the first three it\'s important to mention that you do not need to own a Public Nouns. All activities are free to access.</em></p></div><div class="bloc2"><img src=\'/images/public-nouns-a-public-goods-dao-experiment/whats-next-an-open-invitation-5efe6f41.png\'></div>'
      },
      {
        type: 'QUEST',
        title: 'Public Nouns: A Public Goods DAO Experiment Quest',
        component: 'PublicNounsAPublicGoodsDAOExperiment'
      }
    ]
  }
]

export default LESSONS
