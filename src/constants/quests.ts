import { QuestType } from 'entities/quest'

const QUESTS: QuestType[] = [
  {
    poapImageLink:
      'https://storage.googleapis.com/poapmedia/onboard-wallet-basic-2021-logo-1627395940468.png',
    learningActions:
      '- Create and manage your own wallet<br>- Connect your wallet to a web3 website',
    knowledgeRequirements: 'No prior knowledge needed.',
    poapEventId: 4652,
    duration: 10,
    learnings:
      '- What is a wallet?<br>- What are keys?<br>- Custodial vs non-custodial wallets<br>- Wallet Security',
    difficulty: 'Easy',
    description: 'Learn how to create and manage a wallet securely.',
    name: 'Wallet Basics',
    slug: 'wallet-basics',
    slides: [
      {
        type: 'LEARN',
        title: 'First slide',
        content:
          '# header 1\n## header 1.1\n\n- learning 1\n- learning 2\n\n## header 1.2\n\n- learning 3\n- learning 4\n\n# header 2\n\n## header 2.1\n\n- learning 5\n- learning 6',
      },
      {
        type: 'LEARN',
        title: 'Second slide',
        content:
          '# EIP-1559 | Everything You Need to Know\n\nhttps://www.youtube.com/watch?v=YZeXrChJ5n8\n\n- learning 1\n- learning 2\n',
      },
      {
        type: 'QUIZ',
        title: 'First quiz',
        quiz: {
          question: 'Quiz question',
          answer_1: 'Answer 1',
          answer_2: 'Answer 2',
          answer_3: 'Answer 3',
          answer_4: 'Answer 4',
          right_answer_number: 2,
          id: 'borrow-with-aave-1',
        },
      },
      {
        type: 'LEARN',
        title: 'Learn more',
        content:
          '# header 1\n## header 1.1\n\n- learning 1\n- learning 2\n\n## header 1.2\n\n- learning 3\n- learning 4\n\n# header 2\n\n## header 2.1\n\n- learning 5\n- learning 6',
      },
      {
        type: 'QUIZ',
        title: 'Second quiz',
        quiz: {
          question: 'Quiz question',
          answer_1: 'Answer 1',
          answer_2: 'Answer 2',
          answer_3: 'Answer 3',
          answer_4: 'Answer 4',
          right_answer_number: 2,
          id: 'borrow-with-aave-2',
        },
      },
      {
        type: 'QUEST',
        title: 'Wallet Basics Quest title',
        component: 'WalletBasics',
      },
      {
        type: 'POAP',
        title: 'Collect your POAP',
      },
    ],
  },
  {
    poapImageLink:
      'https://storage.googleapis.com/poapmedia/onboard-borrow-with-aave-2021-logo-1627580693589.png',
    learningActions:
      '- Connect your wallet to Aave<br>- Deposit collateral on Aave<br>- Take a loan against your collateral',
    knowledgeRequirements: 'Manage your wallet.',
    poapEventId: 4783,
    duration: 20,
    learnings:
      '- How to use Aave<br>- How to take a loan without any intermediary',
    difficulty: 'Advanced',
    description: 'Learn how to borrow with Aave.',
    name: 'Borrow with Aave',
    slug: 'borrow-with-aave',
    slides: [
      {
        type: 'LEARN',
        title: 'First slide',
        content:
          '# header 1\n## header 1.1\n\n- learning 1\n- learning 2\n\n## header 1.2\n\n- learning 3\n- learning 4\n\n# header 2\n\n## header 2.1\n\n- learning 5\n- learning 6',
      },
      {
        type: 'LEARN',
        title: 'Second slide',
        content:
          '# EIP-1559 | Everything You Need to Know\n\nhttps://www.youtube.com/watch?v=YZeXrChJ5n8\n\n- learning 1\n- learning 2\n',
      },
      {
        type: 'QUIZ',
        title: 'First quiz',
        quiz: {
          question: 'Quiz question',
          answer_1: 'Answer 1',
          answer_2: 'Answer 2',
          answer_3: 'Answer 3',
          answer_4: 'Answer 4',
          right_answer_number: 2,
          id: 'borrow-with-aave-1',
        },
      },
      {
        type: 'LEARN',
        title: 'Learn more',
        content:
          '# header 1\n## header 1.1\n\n- learning 1\n- learning 2\n\n## header 1.2\n\n- learning 3\n- learning 4\n\n# header 2\n\n## header 2.1\n\n- learning 5\n- learning 6',
      },
      {
        type: 'QUIZ',
        title: 'Second quiz',
        quiz: {
          question: 'Quiz question',
          answer_1: 'Answer 1',
          answer_2: 'Answer 2',
          answer_3: 'Answer 3',
          answer_4: 'Answer 4',
          right_answer_number: 2,
          id: 'borrow-with-aave-2',
        },
      },
      {
        type: 'QUEST',
        title: 'Wallet Basics Quest title',
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
