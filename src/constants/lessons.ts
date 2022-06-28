import { LessonType } from 'entities/lesson'

const LESSONS: LessonType[] = [
  {
    poapImageLink: 'https://app.banklessacademy.com/humanDAO/what-is-a-blockchain-poap.png',
    lessonImageLink: 'https://app.banklessacademy.com/humanDAO/what-is-a-blockchain-social.jpg',
    socialImageLink: 'https://app.banklessacademy.com/humanDAO/what-is-a-blockchain-social.jpg',
    learningActions: '',
    marketingDescription: 'Understand the potential of Blockchain technology',
    poapEventId: 26971,
    duration: 10,
    learnings: '',
    difficulty: 'Easy',
    description: 'Understand the potential of Blockchain technology',
    name: 'What is a Blockchain?',
    quest: 'WhatIsABlockchain?',
    publicationStatus: 'publish',
    isFeaturedOnHomepage: true,
    isCommentsEnabled: false,
    endOfLessonRedirect: null,
    endOfLessonText: undefined,
    notionId: '32348c8a437f414881d42ca28b84c1d1',
    slug: 'what-is-a-blockchain',
    imageLinks: [
      '/lesson/what-is-a-blockchain/what-is-a-blockchain-3d0c26d9.jpg',
      '/lesson/what-is-a-blockchain/do-you-need-a-third-party-36283a62.jpg',
      '/lesson/what-is-a-blockchain/who-can-see-the-data-with-a-blockchain-ca4af4f3.jpg',
      '/lesson/what-is-a-blockchain/what-can-you-store-on-a-blockchain-8e544f69.jpg',
      '/lesson/what-is-a-blockchain/how-is-a-blockchain-structured-1abb24a3.jpg',
      '/lesson/what-is-a-blockchain/popular-applications-of-blockchains-are-b3851b89.jpg',
      '/lesson/what-is-a-blockchain/popular-applications-of-blockchains-are-bb38d24f.jpg'
    ],
    slides: [
      {
        type: 'LEARN',
        notionId: '7d6ee7453a504a8b872188d035020458',
        title: 'What is a Blockchain?',
        content: '<img src=\'/lesson/what-is-a-blockchain/what-is-a-blockchain-3d0c26d9.jpg\'>'
      },
      {
        type: 'LEARN',
        notionId: 'aedb6d711ed04f8799b8e1ce07b9dc77',
        title: 'Do you need a third party?',
        content: '<div class="bloc1"><p>Earlier, to verify every transaction, we needed a third party.</p><p>With <span class="tooltip" definition="A shared, unchangeable database, or ledger, of recorded transactions.">blockchain</span>, a third party (like a bank or the government) is not required.</p></div><div class="bloc2"><img src=\'/lesson/what-is-a-blockchain/do-you-need-a-third-party-36283a62.jpg\'></div>'
      },
      {
        type: 'QUIZ',
        notionId: '4ccc2e72593444e8bd1b41cf4abf02bd',
        title: 'Knowledge Check',
        quiz: {
          question: 'Do you need a third party with fintech Nexus?',
          rightAnswerNumber: 2,
          answers: [
            'Yes',
            'No'
          ],
          id: 'what-is-a-blockchain-1'
        }
      },
      {
        type: 'LEARN',
        notionId: 'a5def25f86f740a095d1766e6eb087e0',
        title: 'Who can see the data with a blockchain?',
        content: '<div class="bloc1"><p>In a <span class="tooltip" definition="A shared, unchangeable database, or ledger, of recorded transactions.">blockchain</span>, everyone has access to the same data, so no one party can change or tamper the data without others knowing about it.</p><p>Data contained in a blockchain is therefore secure, transparent and trustworthy.</p></div><div class="bloc2"><img src=\'/lesson/what-is-a-blockchain/who-can-see-the-data-with-a-blockchain-ca4af4f3.jpg\'></div>'
      },
      {
        type: 'QUIZ',
        notionId: '63e9481225c54f458cc816f2f66193fb',
        title: 'Knowledge Check',
        quiz: {
          question: 'Is a blockchain transparent?',
          rightAnswerNumber: 1,
          answers: [
            'Yes',
            'No'
          ],
          id: 'what-is-a-blockchain-2'
        }
      },
      {
        type: 'LEARN',
        notionId: 'ea984553e2c341faabd2a00ca70696c8',
        title: 'What can you store on a blockchain?',
        content: '<div class="bloc1"><p>Due to its secure nature, blockchain can be used to store anything of value, such as , land records, patents, copyrights, intellectual properties, etc.</p></div><div class="bloc2"><img src=\'/lesson/what-is-a-blockchain/what-can-you-store-on-a-blockchain-8e544f69.jpg\'></div>'
      },
      {
        type: 'LEARN',
        notionId: '35b418d8839b4da890f28f09ada9ac39',
        title: 'How is a Blockchain structured?',
        content: '<div class="bloc1"><p>In a blockchain, every recorded <span class="tooltip" definition="A record of an event.">transaction</span> is store in a block. A block tells us when the data was recorded.</p><p>Each block is linked to another block on the basis of time, forming a chain.</p><p>This is why, the complete set is called a “Blockchain” - a chain, made up of blocks of information.</p></div><div class="bloc2"><img src=\'/lesson/what-is-a-blockchain/how-is-a-blockchain-structured-1abb24a3.jpg\'></div>'
      },
      {
        type: 'QUIZ',
        notionId: 'ac293bf325a04164bc4aa3128f3fd91a',
        title: 'Knowledge Check',
        quiz: {
          question: 'What are stored in a block?',
          rightAnswerNumber: 2,
          answers: [
            'keys',
            'transactions'
          ],
          id: 'what-is-a-blockchain-3'
        }
      },
      {
        type: 'LEARN',
        notionId: 'e17fbf4bd9504ddebf365a9cc7fc0ad1',
        title: 'Popular applications of blockchains are:',
        content: '<div class="bloc-ab"><div class="bloc-a"><img src=\'/lesson/what-is-a-blockchain/popular-applications-of-blockchains-are-b3851b89.jpg\'></div><div class="bloc-b"><p>Cryptocurrencies like Bitcoin and Ethereum</p></div></div><div class="bloc-ab"><div class="bloc-a"><img src=\'/lesson/what-is-a-blockchain/popular-applications-of-blockchains-are-bb38d24f.jpg\'></div><div class="bloc-b"><p>NFTs</p></div></div>'
      },
      {
        type: 'QUEST',
        title: 'What is a Blockchain? Quest',
        component: 'WhatIsABlockchain?'
      },
      {
        type: 'END',
        title: 'End of lesson'
      }
    ]
  },
  {
    poapImageLink: 'https://app.banklessacademy.com/humanDAO/what-is-a-dao-poap.png',
    lessonImageLink: 'https://app.banklessacademy.com/humanDAO/what-is-a-dao-social.jpg',
    socialImageLink: 'https://app.banklessacademy.com/humanDAO/what-is-a-dao-social.jpg',
    learningActions: '',
    marketingDescription: 'Understand what a Decentralized Autonomous Organization is',
    poapEventId: 26972,
    duration: 5,
    learnings: '',
    difficulty: 'Easy',
    description: 'Understand what a Decentralized Autonomous Organization is',
    name: 'What is a DAO?',
    quest: 'WhatIsADAO?',
    publicationStatus: 'publish',
    isFeaturedOnHomepage: true,
    isCommentsEnabled: false,
    endOfLessonRedirect: null,
    endOfLessonText: undefined,
    notionId: '5d2af8e65c31457dbbb03619424f2122',
    slug: 'what-is-a-dao',
    imageLinks: [
      '/lesson/what-is-a-dao/what-is-a-dao-0c719a27.jpg',
      '/lesson/what-is-a-dao/what-can-you-do-in-a-dao-f9df5ddc.jpg',
      '/lesson/what-is-a-dao/who-is-deciding-in-a-dao-235df794.jpg',
      '/lesson/what-is-a-dao/who-can-contribute-to-a-dao-65ba673f.jpg',
      '/lesson/what-is-a-dao/how-do-people-work-in-a-dao-5cb7dc49.jpg',
      '/lesson/what-is-a-dao/heres-a-quick-navigation-guide-to-the-dao-landscape-9f204c44.jpg'
    ],
    slides: [
      {
        type: 'LEARN',
        notionId: 'aae3af99112548d496a8b229b0f07c49',
        title: 'What is a DAO?',
        content: '<img src=\'/lesson/what-is-a-dao/what-is-a-dao-0c719a27.jpg\'>'
      },
      {
        type: 'QUIZ',
        notionId: 'd8adda51d0ae4c899287ed4e39a90ce5',
        title: 'Knowledge Check',
        quiz: {
          question: 'What does DAO stand for? ',
          rightAnswerNumber: 2,
          answers: [
            'Decentralized Anonymous Opinion',
            'Decentralized Autonomous Organization'
          ],
          id: 'what-is-a-dao-1'
        }
      },
      {
        type: 'LEARN',
        notionId: '3de69fea105e4536a5f47d29f27afbaa',
        title: 'What can you do in a DAO?',
        content: '<img src=\'/lesson/what-is-a-dao/what-can-you-do-in-a-dao-f9df5ddc.jpg\'>'
      },
      {
        type: 'LEARN',
        notionId: '18d494ef2cc746378b43891ec5f70de3',
        title: 'Who is deciding in a DAO?',
        content: '<div class="bloc1"><p>Decisions in a DAO are taken by community voting.</p></div><div class="bloc2"><img src=\'/lesson/what-is-a-dao/who-is-deciding-in-a-dao-235df794.jpg\'></div>'
      },
      {
        type: 'LEARN',
        notionId: '33698aed50eb44b18635bc6e6e469b49',
        title: 'Who can contribute to a DAO?',
        content: '<div class="bloc1"><p>Workers in a DAO are freelancers who can contribute their skills to multiple DAOs at the same time.</p></div><div class="bloc2"><img src=\'/lesson/what-is-a-dao/who-can-contribute-to-a-dao-65ba673f.jpg\'></div>'
      },
      {
        type: 'LEARN',
        notionId: 'a5661b78a03c466281ffc0bfdd9143f5',
        title: 'How do people work in a DAO?',
        content: '<div class="bloc1"><p>DAOs allows workers a lot of flexibility - one can work from anywhere, anytime. However, it unlike tradition jobs, DAOs are yet to provide workers a sense of security.</p></div><div class="bloc2"><img src=\'/lesson/what-is-a-dao/how-do-people-work-in-a-dao-5cb7dc49.jpg\'></div>'
      },
      {
        type: 'LEARN',
        notionId: '5007c7e11f3a488889a8ff6bbf92f54e',
        title: 'Here’s a quick navigation guide to the DAO Landscape',
        content: '<img src=\'/lesson/what-is-a-dao/heres-a-quick-navigation-guide-to-the-dao-landscape-9f204c44.jpg\'>'
      },
      {
        type: 'QUEST',
        title: 'What is a DAO? Quest',
        component: 'WhatIsADAO?'
      },
      {
        type: 'END',
        title: 'End of lesson'
      }
    ]
  }
]

export default LESSONS
