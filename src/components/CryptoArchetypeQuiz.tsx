import React, { useState } from 'react'
import {
  Box,
  Button,
  Center,
  Flex,
  Grid,
  Heading,
  Progress,
  Text,
  Badge,
  VStack,
  Tooltip,
  Icon,
} from '@chakra-ui/react'
import styled from '@emotion/styled'
import { InfoIcon } from '@chakra-ui/icons'

import { archetypeVisuals } from 'components/ArchetypeVisuals'

// Styled components to match the app's design language
const StyledCard = styled(Box)`
  position: relative;
  ::after {
    background: linear-gradient(
      107.1deg,
      rgba(46, 33, 33, 0.3) -3.13%,
      rgba(80, 73, 84, 0.3) 16.16%,
      rgba(94, 89, 104, 0.3) 29.38%,
      rgba(86, 81, 94, 0.3) 41.5%,
      rgba(23, 21, 21, 0.3) 102.65%
    );
    opacity: 0.6;
    border-radius: var(--chakra-radii-xl);
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }
  ::before {
    background: radial-gradient(#353535, #3d3333);
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border-radius: var(--chakra-radii-xl);
    padding: 1px;
    -webkit-mask: linear-gradient(#fff 0 0) content-box,
      linear-gradient(#fff 0 0);
    -webkit-mask-composite: source-out;
    mask-composite: exclude;
  }
`

const StyledIconBox = styled(Box)`
  background: radial-gradient(
    circle,
    rgba(128, 90, 213, 0.1) 0%,
    rgba(128, 90, 213, 0.05) 100%
  );
  border-radius: 50%;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;

  /* Ensure SVG icons scale properly */
  & > svg {
    width: 65%;
    height: 65%;
    min-width: 20px;
    min-height: 20px;
    flex-shrink: 0;
  }

  @media (max-width: 480px) {
    & > svg {
      width: 70%;
      height: 70%;
    }
  }
`

// Gold-themed icon box for top matches
const GoldIconBox = styled(Box)`
  background: radial-gradient(
    circle,
    rgba(241, 177, 90, 0.15) 0%,
    rgba(241, 177, 90, 0.05) 100%
  );
  border-radius: 50%;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;

  /* Ensure SVG icons scale properly */
  & > svg {
    width: 65%;
    height: 65%;
    min-width: 20px;
    min-height: 20px;
    flex-shrink: 0;
  }

  @media (max-width: 480px) {
    & > svg {
      width: 70%;
      height: 70%;
    }
  }
`

const CryptoArchetypeQuiz = () => {
  // State for tracking current question, answers, and results
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [scores, setScores] = useState<Record<string, number>>({
    hodler: 0,
    degenerate: 0,
    whale: 0,
    pumpDumper: 0,
    maximalist: 0,
    protocolDev: 0,
    smartContractWizard: 0,
    founder: 0,
    whiteHat: 0,
    tokenomicsArchitect: 0,
    nftCollector: 0,
    daoVoter: 0,
    airdropFarmer: 0,
    stakingEnthusiast: 0,
    privacyAdvocate: 0,
    ctInfluencer: 0,
    onChainAnalyst: 0,
    memeLord: 0,
    educator: 0,
    journalist: 0,
  })
  const [knowledgeScore, setKnowledgeScore] = useState(0)
  const [showResults, setShowResults] = useState(false)
  // Add state to track if we're in knowledge assessment phase
  const [isKnowledgePhase, setIsKnowledgePhase] = useState(true)
  const [knowledgeQuestionIndex, setKnowledgeQuestionIndex] = useState(0)

  // Dedicated knowledge assessment questions
  const knowledgeQuestions = [
    {
      text: 'What is the primary innovation introduced by Bitcoin?',
      options: [
        {
          text: 'A digital payment system with low fees',
          knowledgePoints: 1, // Basic understanding
          isCorrect: false,
        },
        {
          text: 'A decentralized digital currency that prevents double-spending without a trusted third party',
          knowledgePoints: 3, // Advanced understanding
          isCorrect: true,
        },
        {
          text: 'A way to anonymously transfer money online',
          knowledgePoints: 1, // Basic misunderstanding
          isCorrect: false,
        },
        {
          text: 'A digital gold alternative with a limited supply',
          knowledgePoints: 2, // Partial understanding
          isCorrect: false,
        },
      ],
    },
    {
      text: 'What is a smart contract?',
      options: [
        {
          text: 'A legally binding agreement between cryptocurrency users',
          knowledgePoints: 1, // Misunderstanding
          isCorrect: false,
        },
        {
          text: 'Self-executing code that runs on a blockchain and automatically enforces agreements',
          knowledgePoints: 3, // Correct understanding
          isCorrect: true,
        },
        {
          text: 'A contract signed using a hardware wallet for extra security',
          knowledgePoints: 1, // Basic misunderstanding
          isCorrect: false,
        },
        {
          text: 'An agreement between miners to validate transactions',
          knowledgePoints: 1, // Basic misunderstanding
          isCorrect: false,
        },
      ],
    },
    {
      text: 'What does "staking" primarily refer to in crypto?',
      options: [
        {
          text: 'Holding crypto in an exchange to earn interest',
          knowledgePoints: 1, // Basic misunderstanding
          isCorrect: false,
        },
        {
          text: 'Locking up tokens as collateral in DeFi protocols',
          knowledgePoints: 2, // Partial understanding
          isCorrect: false,
        },
        {
          text: 'Participating in network consensus and validation by locking tokens',
          knowledgePoints: 3, // Correct understanding
          isCorrect: true,
        },
        {
          text: 'Setting stop-loss orders when trading',
          knowledgePoints: 0, // Complete misunderstanding
          isCorrect: false,
        },
      ],
    },
    {
      text: 'What is a blockchain fork?',
      options: [
        {
          text: 'When a blockchain splits into two separate chains due to protocol changes or disagreements',
          knowledgePoints: 3, // Correct understanding
          isCorrect: true,
        },
        {
          text: 'A tool used to mine cryptocurrencies',
          knowledgePoints: 0, // Complete misunderstanding
          isCorrect: false,
        },
        {
          text: 'When a transaction is rejected by the network',
          knowledgePoints: 1, // Basic misunderstanding
          isCorrect: false,
        },
        {
          text: 'A malicious attack on a blockchain network',
          knowledgePoints: 1, // Basic misunderstanding
          isCorrect: false,
        },
      ],
    },
    {
      text: 'What is a private key in cryptocurrency?',
      options: [
        {
          text: 'A password created by an exchange to access your account',
          knowledgePoints: 1, // Basic misunderstanding
          isCorrect: false,
        },
        {
          text: 'A secret number that allows you to spend funds from a corresponding wallet address',
          knowledgePoints: 3, // Correct understanding
          isCorrect: true,
        },
        {
          text: 'The unique ID assigned to your cryptocurrency transaction',
          knowledgePoints: 1, // Basic misunderstanding
          isCorrect: false,
        },
        {
          text: 'A special code that miners use to validate transactions',
          knowledgePoints: 1, // Basic misunderstanding
          isCorrect: false,
        },
      ],
    },
  ]

  // Questions that map to different archetypes
  const archetypeQuestions = [
    {
      text: 'During a crypto market crash, I typically:',
      options: [
        {
          text: 'Hold tight and maybe buy more if I have cash',
          archetypes: ['hodler', 'maximalist'],
          oppositeArchetypes: ['degenerate', 'pumpDumper'],
        },
        {
          text: 'See it as an opportunity to find high-risk, high-reward plays',
          archetypes: ['degenerate', 'pumpDumper'],
          oppositeArchetypes: ['hodler', 'maximalist'],
        },
        {
          text: 'Focus on building/improving projects regardless of price',
          archetypes: ['protocolDev', 'smartContractWizard', 'founder'],
          oppositeArchetypes: ['pumpDumper', 'degenerate'],
        },
        {
          text: "Analyze on-chain data to understand what's happening",
          archetypes: ['onChainAnalyst', 'journalist'],
          oppositeArchetypes: [],
        },
      ],
    },
    {
      text: 'My typical time horizon for crypto investments is:',
      options: [
        {
          text: 'Years to decades',
          archetypes: ['hodler', 'maximalist', 'whale'],
          oppositeArchetypes: ['degenerate', 'pumpDumper', 'airdropFarmer'],
        },
        {
          text: 'Days to weeks',
          archetypes: ['degenerate', 'pumpDumper', 'airdropFarmer'],
          oppositeArchetypes: [
            'hodler',
            'maximalist',
            'whale',
            'tokenomicsArchitect',
          ],
        },
        {
          text: "I'm not investing, I'm building for the long term",
          archetypes: ['protocolDev', 'founder', 'tokenomicsArchitect'],
          oppositeArchetypes: ['airdropFarmer', 'pumpDumper'],
        },
        {
          text: 'I care more about participating than timeframes',
          archetypes: ['nftCollector', 'daoVoter', 'stakingEnthusiast'],
          oppositeArchetypes: [],
        },
      ],
    },
    {
      text: 'When I discover a promising new project, I first:',
      options: [
        {
          text: 'Check the team, roadmap, and tokenomics',
          archetypes: ['hodler', 'whale', 'tokenomicsArchitect'],
          oppositeArchetypes: ['degenerate', 'pumpDumper'],
        },
        {
          text: 'Ape in before everyone else discovers it',
          archetypes: ['degenerate', 'pumpDumper'],
          oppositeArchetypes: [
            'hodler',
            'whale',
            'whiteHat',
            'onChainAnalyst',
            'educator',
            'journalist',
          ],
        },
        {
          text: 'Review the codebase and technical documentation',
          archetypes: ['protocolDev', 'smartContractWizard', 'whiteHat'],
          oppositeArchetypes: ['memeLord', 'ctInfluencer'],
        },
        {
          text: 'Share it with my followers/community',
          archetypes: ['ctInfluencer', 'educator', 'memeLord'],
          oppositeArchetypes: ['privacyAdvocate'],
        },
      ],
    },
    {
      text: 'I spend most of my time in crypto:',
      options: [
        {
          text: 'Trading and managing my portfolio',
          archetypes: ['whale', 'pumpDumper', 'degenerate'],
          oppositeArchetypes: [
            'protocolDev',
            'smartContractWizard',
            'founder',
            'stakingEnthusiast',
          ],
        },
        {
          text: 'Writing code and building products',
          archetypes: ['protocolDev', 'smartContractWizard', 'founder'],
          oppositeArchetypes: [],
        },
        {
          text: 'Participating in communities and governance',
          archetypes: ['daoVoter', 'stakingEnthusiast', 'nftCollector'],
          oppositeArchetypes: [],
        },
        {
          text: 'Creating content or analyzing data',
          archetypes: [
            'ctInfluencer',
            'onChainAnalyst',
            'educator',
            'journalist',
            'memeLord',
          ],
          oppositeArchetypes: [],
        },
      ],
    },
    {
      text: 'My biggest concern in crypto is:',
      options: [
        {
          text: 'Centralization and government overreach',
          archetypes: ['maximalist', 'privacyAdvocate'],
          oppositeArchetypes: [],
        },
        {
          text: 'Missing out on profitable opportunities',
          archetypes: ['degenerate', 'airdropFarmer', 'pumpDumper'],
          oppositeArchetypes: [
            'protocolDev',
            'smartContractWizard',
            'founder',
            'whiteHat',
            'tokenomicsArchitect',
            'daoVoter',
            'educator',
          ],
        },
        {
          text: 'Security vulnerabilities and exploits',
          archetypes: ['whiteHat', 'protocolDev', 'smartContractWizard'],
          oppositeArchetypes: [],
        },
        {
          text: 'Sustainable ecosystem growth',
          archetypes: ['founder', 'tokenomicsArchitect', 'educator'],
          oppositeArchetypes: [],
        },
      ],
    },
    {
      text: 'My favorite way to earn in crypto is:',
      options: [
        {
          text: 'HODLing quality assets long-term',
          archetypes: ['hodler', 'maximalist', 'whale'],
          oppositeArchetypes: [],
        },
        {
          text: 'Finding the next 100x gem or airdrop',
          archetypes: ['degenerate', 'airdropFarmer'],
          oppositeArchetypes: [],
        },
        {
          text: 'Building and launching products',
          archetypes: ['founder', 'protocolDev', 'smartContractWizard'],
          oppositeArchetypes: ['nftCollector'],
        },
        {
          text: 'Staking, yield farming, and governance rewards',
          archetypes: ['stakingEnthusiast', 'daoVoter'],
          oppositeArchetypes: [],
        },
      ],
    },
    {
      text: 'When using social media for crypto, I typically:',
      options: [
        {
          text: 'Share market insights and technical analysis',
          archetypes: ['onChainAnalyst', 'whale', 'educator'],
          oppositeArchetypes: [],
        },
        {
          text: 'Post memes and engage with crypto culture',
          archetypes: ['memeLord', 'ctInfluencer'],
          oppositeArchetypes: ['onChainAnalyst', 'journalist'],
        },
        {
          text: 'Discuss technical innovations and code',
          archetypes: ['protocolDev', 'smartContractWizard', 'whiteHat'],
          oppositeArchetypes: ['memeLord', 'ctInfluencer'],
        },
        {
          text: 'Report on news and trends in the space',
          archetypes: ['journalist', 'educator'],
          oppositeArchetypes: [],
        },
      ],
    },
    {
      text: 'When it comes to blockchain networks, I believe:',
      options: [
        {
          text: 'One chain will rule them all (e.g., Bitcoin or Ethereum)',
          archetypes: ['maximalist', 'hodler'],
          oppositeArchetypes: [],
        },
        {
          text: 'Different chains for different purposes',
          archetypes: ['founder', 'tokenomicsArchitect', 'smartContractWizard'],
          oppositeArchetypes: ['maximalist'],
        },
        {
          text: "I'll use whatever has the most profit potential right now",
          archetypes: ['degenerate', 'pumpDumper', 'airdropFarmer'],
          oppositeArchetypes: ['hodler', 'maximalist'],
        },
        {
          text: 'Privacy-focused chains are most important',
          archetypes: ['privacyAdvocate'],
          oppositeArchetypes: [],
        },
      ],
    },
    {
      text: 'My crypto knowledge is primarily focused on:',
      options: [
        {
          text: 'Market dynamics and investment strategies',
          archetypes: ['whale', 'hodler', 'pumpDumper'],
          oppositeArchetypes: ['nftCollector', 'daoVoter'],
        },
        {
          text: 'Technical implementation and development',
          archetypes: ['protocolDev', 'smartContractWizard', 'whiteHat'],
          oppositeArchetypes: [],
        },
        {
          text: 'Community building and governance',
          archetypes: ['founder', 'daoVoter', 'educator'],
          oppositeArchetypes: [],
        },
        {
          text: 'On-chain analytics and data interpretation',
          archetypes: ['onChainAnalyst', 'journalist'],
          oppositeArchetypes: [],
        },
      ],
    },
    {
      text: 'If I had to choose one crypto activity, it would be:',
      options: [
        {
          text: 'Collecting rare NFTs and digital art',
          archetypes: ['nftCollector'],
          oppositeArchetypes: [],
        },
        {
          text: 'Optimizing yield through staking and DeFi',
          archetypes: ['stakingEnthusiast', 'degenerate'],
          oppositeArchetypes: [],
        },
        {
          text: 'Contributing to protocol governance',
          archetypes: ['daoVoter', 'whale'],
          oppositeArchetypes: [],
        },
        {
          text: 'Building new applications and features',
          archetypes: ['protocolDev', 'smartContractWizard', 'founder'],
          oppositeArchetypes: ['nftCollector'],
        },
      ],
    },
    {
      text: 'My approach to crypto privacy is:',
      options: [
        {
          text: 'Privacy is a fundamental right that needs protection',
          archetypes: ['privacyAdvocate', 'whiteHat'],
          oppositeArchetypes: ['ctInfluencer', 'journalist'],
        },
        {
          text: 'I use privacy tools when needed for specific transactions',
          archetypes: ['degenerate', 'whale'],
          oppositeArchetypes: [],
        },
        {
          text: 'Transparency is more important for ecosystem health',
          archetypes: ['onChainAnalyst', 'journalist', 'educator'],
          oppositeArchetypes: ['privacyAdvocate'],
        },
        {
          text: 'I focus more on security than privacy',
          archetypes: ['hodler', 'smartContractWizard'],
          oppositeArchetypes: [],
        },
      ],
    },
    {
      text: 'When I see a meme coin pumping, I typically:',
      options: [
        {
          text: 'Create or share memes about it to join the fun',
          archetypes: ['memeLord', 'ctInfluencer'],
          oppositeArchetypes: ['maximalist', 'tokenomicsArchitect'],
        },
        {
          text: "Analyze if there's a short-term trading opportunity",
          archetypes: ['pumpDumper', 'degenerate', 'airdropFarmer'],
          oppositeArchetypes: ['hodler'],
        },
        {
          text: 'Ignore it and focus on fundamentals',
          archetypes: ['hodler', 'maximalist', 'tokenomicsArchitect'],
          oppositeArchetypes: ['memeLord', 'pumpDumper'],
        },
        {
          text: 'Study the community dynamics for educational content',
          archetypes: ['educator', 'journalist', 'onChainAnalyst'],
          oppositeArchetypes: [],
        },
      ],
    },
    {
      text: 'My ideal contribution to the crypto ecosystem would be:',
      options: [
        {
          text: 'Building tools that enhance security and safety',
          archetypes: ['whiteHat', 'protocolDev', 'smartContractWizard'],
          oppositeArchetypes: [],
        },
        {
          text: 'Creating educational content to onboard newcomers',
          archetypes: ['educator', 'ctInfluencer', 'journalist'],
          oppositeArchetypes: [],
        },
        {
          text: 'Providing liquidity and supporting promising projects',
          archetypes: ['whale', 'stakingEnthusiast', 'nftCollector'],
          oppositeArchetypes: [],
        },
        {
          text: 'Participating actively in governance and community',
          archetypes: ['daoVoter', 'founder', 'privacyAdvocate'],
          oppositeArchetypes: [],
        },
      ],
    },
    {
      text: 'When exploring new DeFi protocols, I prioritize:',
      options: [
        {
          text: 'Innovative tokenomics and sustainable yield',
          archetypes: ['tokenomicsArchitect', 'stakingEnthusiast', 'founder'],
          oppositeArchetypes: [],
        },
        {
          text: 'Security audits and code quality',
          archetypes: ['whiteHat', 'smartContractWizard', 'hodler'],
          oppositeArchetypes: ['degenerate'],
        },
        {
          text: 'APY and potential airdrops',
          archetypes: ['degenerate', 'airdropFarmer', 'pumpDumper'],
          oppositeArchetypes: ['whiteHat'],
        },
        {
          text: 'Community strength and governance structure',
          archetypes: ['daoVoter', 'educator', 'nftCollector'],
          oppositeArchetypes: [],
        },
      ],
    },
    {
      text: 'My reaction to controversial crypto regulations is:',
      options: [
        {
          text: 'Advocate for privacy and freedom from oversight',
          archetypes: ['privacyAdvocate', 'maximalist'],
          oppositeArchetypes: [],
        },
        {
          text: 'Analyze how they affect different projects and markets',
          archetypes: ['journalist', 'onChainAnalyst', 'whale'],
          oppositeArchetypes: [],
        },
        {
          text: 'Build solutions that can adapt to regulatory changes',
          archetypes: ['founder', 'protocolDev', 'tokenomicsArchitect'],
          oppositeArchetypes: [],
        },
        {
          text: 'Create memes and content about the situation',
          archetypes: ['memeLord', 'ctInfluencer', 'educator'],
          oppositeArchetypes: [],
        },
      ],
    },
    {
      text: 'The most exciting aspect of NFTs for me is:',
      options: [
        {
          text: 'Collecting digital art and rare items',
          archetypes: ['nftCollector', 'whale'],
          oppositeArchetypes: [],
        },
        {
          text: 'Building new NFT standards and applications',
          archetypes: ['smartContractWizard', 'protocolDev', 'founder'],
          oppositeArchetypes: [],
        },
        {
          text: 'The community and cultural aspects',
          archetypes: ['memeLord', 'ctInfluencer', 'daoVoter'],
          oppositeArchetypes: [],
        },
        {
          text: 'The potential for flipping profitable collections',
          archetypes: ['degenerate', 'pumpDumper', 'airdropFarmer'],
          oppositeArchetypes: ['hodler'],
        },
      ],
    },
    {
      text: 'When a protocol is exploited, I typically:',
      options: [
        {
          text: 'Analyze the hack and learn from the vulnerabilities',
          archetypes: ['whiteHat', 'smartContractWizard', 'onChainAnalyst'],
          oppositeArchetypes: [],
        },
        {
          text: 'Look for buying opportunities if the token dumps',
          archetypes: ['degenerate', 'whale', 'pumpDumper'],
          oppositeArchetypes: [],
        },
        {
          text: 'Create educational content explaining what happened',
          archetypes: ['educator', 'journalist', 'ctInfluencer'],
          oppositeArchetypes: [],
        },
        {
          text: 'Participate in governance to improve security',
          archetypes: ['daoVoter', 'founder', 'hodler'],
          oppositeArchetypes: [],
        },
      ],
    },
    {
      text: 'My favorite crypto conference activity would be:',
      options: [
        {
          text: 'Attending technical workshops and developer sessions',
          archetypes: ['protocolDev', 'smartContractWizard', 'whiteHat'],
          oppositeArchetypes: [],
        },
        {
          text: 'Networking with founders and investors',
          archetypes: ['founder', 'whale', 'tokenomicsArchitect'],
          oppositeArchetypes: [],
        },
        {
          text: 'Participating in governance discussions',
          archetypes: ['daoVoter', 'maximalist', 'privacyAdvocate'],
          oppositeArchetypes: [],
        },
        {
          text: 'Creating content and engaging with the community',
          archetypes: ['memeLord', 'educator', 'journalist'],
          oppositeArchetypes: [],
        },
      ],
    },
    {
      text: 'The crypto books/resources I value most focus on:',
      options: [
        {
          text: 'Technical implementation and cryptography',
          archetypes: ['protocolDev', 'smartContractWizard', 'whiteHat'],
          oppositeArchetypes: [],
        },
        {
          text: 'Investment strategies and market analysis',
          archetypes: ['hodler', 'whale', 'onChainAnalyst'],
          oppositeArchetypes: [],
        },
        {
          text: 'Philosophical aspects of decentralization',
          archetypes: ['maximalist', 'privacyAdvocate', 'educator'],
          oppositeArchetypes: [],
        },
        {
          text: 'Community building and project growth',
          archetypes: ['founder', 'ctInfluencer', 'daoVoter'],
          oppositeArchetypes: [],
        },
      ],
    },
    {
      text: 'When I receive an airdrop, I typically:',
      options: [
        {
          text: 'Research the project thoroughly before deciding to hold',
          archetypes: ['hodler', 'educator', 'journalist'],
          oppositeArchetypes: [],
        },
        {
          text: 'Sell immediately to lock in profits',
          archetypes: ['pumpDumper', 'airdropFarmer'],
          oppositeArchetypes: ['hodler', 'maximalist'],
        },
        {
          text: 'Participate in governance to improve the protocol',
          archetypes: ['daoVoter', 'stakingEnthusiast', 'founder'],
          oppositeArchetypes: [],
        },
        {
          text: 'Create content about it for my community',
          archetypes: ['ctInfluencer', 'memeLord', 'educator'],
          oppositeArchetypes: [],
        },
      ],
    },
    {
      text: 'My approach to crypto taxes is:',
      options: [
        {
          text: 'Meticulously track everything for compliance',
          archetypes: ['hodler', 'whale', 'onChainAnalyst'],
          oppositeArchetypes: [],
        },
        {
          text: 'Use privacy tools to maintain financial sovereignty',
          archetypes: ['privacyAdvocate', 'maximalist'],
          oppositeArchetypes: [],
        },
        {
          text: 'Build or use tools that simplify tax reporting',
          archetypes: ['protocolDev', 'smartContractWizard', 'founder'],
          oppositeArchetypes: [],
        },
        {
          text: 'Share tax optimization strategies with my community',
          archetypes: ['educator', 'ctInfluencer', 'stakingEnthusiast'],
          oppositeArchetypes: [],
        },
      ],
    },
  ]

  // Archetype descriptions
  const archetypeDescriptions: Record<string, string> = {
    hodler:
      "The HODLer – You're a patient, long-term investor unfazed by market volatility. You believe in the fundamental value of crypto assets and don't panic sell during downturns. Your mantra is 'time in the market beats timing the market.'",
    degenerate:
      'The Degenerate (DeFi Degen) – You live for the thrill of high-risk, high-reward opportunities. From 100x leverage to unaudited contracts, no play is too risky if the potential rewards are juicy enough. YOLO is your investment thesis.',
    whale:
      'The Whale – Your substantial holdings give you significant market influence. You make strategic, large-scale moves and understand market liquidity deeply. Your trades can create waves that smaller investors surf or crash on.',
    pumpDumper:
      "The Pump & Dumper – You're a master of hype cycles, buying before major announcements and selling into retail FOMO. You understand that crypto markets are psychological battlegrounds where narrative often trumps fundamentals.",
    maximalist:
      "The Maximalist – You have unwavering faith in one blockchain's superiority. Whether Bitcoin, Ethereum, or another chain, you believe your chosen network will ultimately dominate and render others obsolete.",
    protocolDev:
      'The Protocol Dev – You work on core blockchain infrastructure, focusing on consensus mechanisms, scalability solutions, and network security. Your contributions shape the foundational layer of the crypto ecosystem.',
    smartContractWizard:
      "The Smart Contract Wizard – You write the code that powers DeFi, NFTs, and other on-chain applications. You're fluent in Solidity, Rust, or Move, and understand the intricacies of secure, gas-efficient contract design.",
    founder:
      "The Founder – You create and launch new crypto projects, from initial concept to product-market fit. You're both a visionary and an executor, balancing technical knowledge with business acumen and community building.",
    whiteHat:
      'The White-Hat Hacker – You identify vulnerabilities before malicious actors can exploit them. Your ethical hacking skills help secure billions in crypto assets, making you a silent guardian of the blockchain space.',
    tokenomicsArchitect:
      'The Tokenomics Architect – You design economic systems that align incentives and create sustainable token economies. Your deep understanding of game theory and economics helps projects avoid common pitfalls like hyperinflation or value extraction.',
    nftCollector:
      "The NFT Collector – You're passionate about digital ownership and art, carefully curating collections of NFTs based on their aesthetic, cultural, or potential investment value. You're often early to emerging NFT trends and communities.",
    daoVoter:
      'The DAO Voter – You actively participate in on-chain governance, shaping the future of protocols through your votes. You carefully research proposals and take your responsibility as a governance token holder seriously.',
    airdropFarmer:
      "The Airdrop Farmer – You expertly position yourself to qualify for token airdrops, often using multiple wallets and carefully tracking potential distribution criteria. You've developed a sixth sense for which projects might drop tokens to early users.",
    stakingEnthusiast:
      'The Staking Enthusiast – You maximize passive income through strategic staking, delegation, and yield farming. You understand the nuances of different staking mechanisms and carefully balance risk and reward across your portfolio.',
    privacyAdvocate:
      'The Privacy Advocate – You champion financial privacy as a fundamental right. You use tools like zero-knowledge proofs, privacy coins, and mixing services while advocating against surveillance in blockchain systems.',
    ctInfluencer:
      "The Crypto Twitter (CT) Influencer – You've built a significant following by sharing market insights, project reviews, or entertaining takes. Your opinions can move markets and you've developed a recognizable personal brand in the space.",
    onChainAnalyst:
      'The On-Chain Analyst – You extract valuable insights from blockchain data using tools like Etherscan, Dune Analytics, or Nansen. You can spot trends, track whale movements, and understand network health through data.',
    memeLord:
      'The Meme Lord – You spread crypto culture through humorous, shareable content. Your memes both entertain and educate, often capturing complex concepts in accessible, viral formats that help onboard new users to the space.',
    educator:
      "The Educator – You break down complex crypto concepts into understandable lessons through content, courses, or direct mentorship. You're passionate about expanding understanding of blockchain technology beyond speculation.",
    journalist:
      'The Journalist – You investigate and report on developments in the crypto space, maintaining a critical eye when evaluating projects and trends. You help separate signal from noise in an industry filled with bold claims and hype.',
  }

  // Knowledge level descriptions
  const knowledgeLevelDescriptions = {
    beginner:
      "You're just starting your crypto journey. You understand the basics of buying and holding cryptocurrencies, but may still be learning about blockchain technology fundamentals and the broader ecosystem.",
    intermediate:
      "You have a solid understanding of crypto beyond just trading. You're familiar with different blockchain networks, DeFi concepts, and can navigate the ecosystem with confidence.",
    advanced:
      'You have deep knowledge of crypto technologies, economics, and applications. You understand complex topics like protocol design, tokenomics, and technical implementations.',
    expert:
      'You possess expert-level understanding across multiple domains in crypto. You can analyze, build, and contribute to the ecosystem at a professional level, with specialized knowledge in specific areas.',
  }

  // Group archetypes into categories
  const archetypeCategories: Record<string, string[]> = {
    'Investors & Speculators': [
      'hodler',
      'degenerate',
      'whale',
      'pumpDumper',
      'maximalist',
    ],
    'Builders & Innovators': [
      'protocolDev',
      'smartContractWizard',
      'founder',
      'whiteHat',
      'tokenomicsArchitect',
    ],
    'Users & Enthusiasts': [
      'nftCollector',
      'daoVoter',
      'airdropFarmer',
      'stakingEnthusiast',
      'privacyAdvocate',
    ],
    'Media & Influence': [
      'ctInfluencer',
      'onChainAnalyst',
      'memeLord',
      'educator',
      'journalist',
    ],
  }

  // Handle selecting an answer for knowledge questions
  const handleKnowledgeAnswerSelect = (knowledgePoints: number) => {
    // Add to knowledge score
    setKnowledgeScore((prevScore) => prevScore + knowledgePoints)

    // Move to next knowledge question or switch to archetype questions
    if (knowledgeQuestionIndex < knowledgeQuestions.length - 1) {
      setKnowledgeQuestionIndex(knowledgeQuestionIndex + 1)
    } else {
      // Switch to archetype questions
      setIsKnowledgePhase(false)
    }
  }

  // Handle selecting an answer for archetype questions
  const handleArchetypeAnswerSelect = (
    archetypes: string[],
    oppositeArchetypes: string[]
  ) => {
    const newScores = { ...scores }

    // Award points to matching archetypes
    archetypes.forEach((archetype) => {
      newScores[archetype] += 1
    })

    // Deduct points for opposite archetypes
    oppositeArchetypes.forEach((archetype) => {
      // Deduct 0.5 points (less than a full point to avoid excessive penalties)
      newScores[archetype] -= 0.5
    })

    setScores(newScores)

    // Move to next question or show results
    if (currentQuestionIndex < archetypeQuestions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1)
    } else {
      setShowResults(true)
    }
  }

  // Determine knowledge level based on score
  const determineKnowledgeLevel = () => {
    // Maximum possible knowledge score is the sum of maximum points per question
    const maxPossibleScore = knowledgeQuestions.length * 3 // Assuming max 3 points per question

    // Calculate percentage
    const percentage = (knowledgeScore / maxPossibleScore) * 100

    if (percentage < 40) {
      return 'beginner'
    } else if (percentage < 70) {
      return 'intermediate'
    } else if (percentage < 90) {
      return 'advanced'
    } else {
      return 'expert'
    }
  }

  // Calculate knowledge level percentage
  const calculateKnowledgePercentage = () => {
    // Maximum possible knowledge score is the sum of maximum points per question
    const maxPossibleScore = knowledgeQuestions.length * 3
    // Convert to percentage and ensure it's between 0-100%
    const percentage = Math.max(
      0,
      Math.min(100, (knowledgeScore / maxPossibleScore) * 100)
    )
    // Round to nearest integer
    return Math.round(percentage)
  }

  // Get correct knowledge question based on state
  const currentKnowledgeQuestion = knowledgeQuestions[knowledgeQuestionIndex]

  // Get current archetype question
  const currentArchetypeQuestion = archetypeQuestions[currentQuestionIndex]

  // Reset the quiz
  const resetQuiz = () => {
    setCurrentQuestionIndex(0)
    setKnowledgeQuestionIndex(0)
    setIsKnowledgePhase(true)
    setScores({
      hodler: 0,
      degenerate: 0,
      whale: 0,
      pumpDumper: 0,
      maximalist: 0,
      protocolDev: 0,
      smartContractWizard: 0,
      founder: 0,
      whiteHat: 0,
      tokenomicsArchitect: 0,
      nftCollector: 0,
      daoVoter: 0,
      airdropFarmer: 0,
      stakingEnthusiast: 0,
      privacyAdvocate: 0,
      ctInfluencer: 0,
      onChainAnalyst: 0,
      memeLord: 0,
      educator: 0,
      journalist: 0,
    })
    setKnowledgeScore(0)
    setShowResults(false)
  }

  // Determine top archetype based on scores
  const determineTopArchetype = () => {
    // Filter out archetypes with negative scores
    const positiveScores = Object.entries(scores).filter(
      ([_, score]) => score > 0
    )

    // If no positive scores, return the least negative one
    if (positiveScores.length === 0) {
      return Object.entries(scores).sort((a, b) => b[1] - a[1])[0][0]
    }

    // Otherwise, find the highest positive score
    let topArchetype = positiveScores[0][0]
    let maxScore = positiveScores[0][1]

    positiveScores.forEach(([archetype, score]) => {
      if (score > maxScore) {
        topArchetype = archetype
        maxScore = score
      }
    })

    return topArchetype
  }

  // Get top three archetypes
  const getTopThreeArchetypes = () => {
    return Object.entries(scores)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 3)
      .map((entry) => ({ name: entry[0], score: entry[1] }))
  }

  // Calculate normalized score percentage (ensuring it's between 0-100%)
  const calculateScorePercentage = (score: number) => {
    // Convert score to percentage of total questions
    const rawPercentage = (score / archetypeQuestions.length) * 100
    // Ensure the percentage is between 0 and 100
    return Math.max(0, Math.min(100, rawPercentage))
  }

  // Calculate percentage match for an archetype
  const calculateMatchPercentage = (score: number) => {
    // Maximum possible score is 1 point per question
    const maxPossibleScore = archetypeQuestions.length
    // Convert to percentage and ensure it's between 0-100%
    const percentage = Math.max(
      0,
      Math.min(100, (score / maxPossibleScore) * 100)
    )
    // Round to nearest integer
    return Math.round(percentage)
  }

  // Format archetype name for display
  const formatArchetypeName = (key: string) => {
    const nameMap: Record<string, string> = {
      hodler: 'The HODLer',
      degenerate: 'The Degenerate (DeFi Degen)',
      whale: 'The Whale',
      pumpDumper: 'The Pump & Dumper',
      maximalist: 'The Maximalist',
      protocolDev: 'The Protocol Dev',
      smartContractWizard: 'The Smart Contract Wizard',
      founder: 'The Founder',
      whiteHat: 'The White-Hat Hacker',
      tokenomicsArchitect: 'The Tokenomics Architect',
      nftCollector: 'The NFT Collector',
      daoVoter: 'The DAO Voter',
      airdropFarmer: 'The Airdrop Farmer',
      stakingEnthusiast: 'The Staking Enthusiast',
      privacyAdvocate: 'The Privacy Advocate',
      ctInfluencer: 'The Crypto Twitter (CT) Influencer',
      onChainAnalyst: 'The On-Chain Analyst',
      memeLord: 'The Meme Lord',
      educator: 'The Educator',
      journalist: 'The Journalist',
    }

    return nameMap[key] || key
  }

  // Get category for an archetype
  const getCategoryForArchetype = (archetype: string) => {
    for (const [category, archetypes] of Object.entries(archetypeCategories)) {
      if (archetypes.includes(archetype)) {
        return category
      }
    }
    return 'Other'
  }

  return (
    <Box maxW="1200px" mx="auto" px={{ base: 4, md: 8 }}>
      <Heading as="h1" size="xl" textAlign="center" mb={6} color="white">
        Crypto Archetype Quiz
      </Heading>

      {!showResults ? (
        <StyledCard p={6} borderRadius="xl">
          <Box position="relative" zIndex="1">
            {isKnowledgePhase ? (
              // Knowledge assessment phase
              <>
                <Text fontSize="sm" color="gray.400" mb={2}>
                  Knowledge Assessment {knowledgeQuestionIndex + 1} of{' '}
                  {knowledgeQuestions.length}
                </Text>
                <Progress
                  value={
                    ((knowledgeQuestionIndex + 1) / knowledgeQuestions.length) *
                    100
                  }
                  colorScheme="blue"
                  size="sm"
                  borderRadius="full"
                  mb={6}
                />

                <Heading
                  as="h2"
                  size="md"
                  fontWeight="medium"
                  mb={6}
                  color="white"
                >
                  {currentKnowledgeQuestion.text}
                </Heading>

                <VStack spacing={4} align="stretch">
                  {currentKnowledgeQuestion.options.map((option, idx) => (
                    <Button
                      key={idx}
                      onClick={() =>
                        handleKnowledgeAnswerSelect(option.knowledgePoints)
                      }
                      w="full"
                      p={5}
                      justifyContent="flex-start"
                      variant="outline"
                      borderColor="whiteAlpha.300"
                      color="white"
                      borderRadius="xl"
                      _hover={{ bg: 'whiteAlpha.100' }}
                      transition="all 0.2s"
                      fontWeight="normal"
                      fontSize="md"
                    >
                      {option.text}
                    </Button>
                  ))}
                </VStack>
              </>
            ) : (
              // Archetype assessment phase
              <>
                <Text fontSize="sm" color="gray.400" mb={2}>
                  Archetype Question {currentQuestionIndex + 1} of{' '}
                  {archetypeQuestions.length}
                </Text>
                <Progress
                  value={
                    ((currentQuestionIndex + 1) / archetypeQuestions.length) *
                    100
                  }
                  colorScheme="purple"
                  size="sm"
                  borderRadius="full"
                  mb={6}
                />

                <Heading
                  as="h2"
                  size="md"
                  fontWeight="medium"
                  mb={6}
                  color="white"
                >
                  {currentArchetypeQuestion.text}
                </Heading>

                <VStack spacing={4} align="stretch">
                  {currentArchetypeQuestion.options.map((option, idx) => (
                    <Button
                      key={idx}
                      onClick={() =>
                        handleArchetypeAnswerSelect(
                          option.archetypes,
                          option.oppositeArchetypes || []
                        )
                      }
                      w="full"
                      p={5}
                      justifyContent="flex-start"
                      variant="outline"
                      borderColor="whiteAlpha.300"
                      color="white"
                      borderRadius="xl"
                      _hover={{ bg: 'whiteAlpha.100' }}
                      transition="all 0.2s"
                      fontWeight="normal"
                      fontSize="md"
                    >
                      {option.text}
                    </Button>
                  ))}
                </VStack>
              </>
            )}
          </Box>
        </StyledCard>
      ) : (
        <Box>
          <StyledCard p={8} borderRadius="xl" mb={8}>
            <Box position="relative" zIndex="1">
              <Center flexDirection="column" mb={6}>
                <Badge
                  px={4}
                  py={2}
                  bg="yellow.600"
                  color="white"
                  borderRadius="full"
                  fontSize="sm"
                  fontWeight="medium"
                  mb={3}
                >
                  {getCategoryForArchetype(determineTopArchetype())}
                </Badge>
                <Heading
                  as="h2"
                  size="xl"
                  color="white"
                  mb={4}
                  textAlign="center"
                >
                  {formatArchetypeName(determineTopArchetype())}
                </Heading>
                <GoldIconBox
                  w={{ base: '80px', md: '100px' }}
                  h={{ base: '80px', md: '100px' }}
                  minW="60px"
                  minH="60px"
                >
                  {archetypeVisuals[determineTopArchetype()]}
                </GoldIconBox>
                <Badge
                  px={4}
                  py={2}
                  bg="yellow.500"
                  color="white"
                  borderRadius="full"
                  fontSize="md"
                  fontWeight="bold"
                  mt={4}
                >
                  {calculateMatchPercentage(scores[determineTopArchetype()])}%
                  Match
                </Badge>
              </Center>

              <Box mb={8} p={6} borderRadius="lg" bg="whiteAlpha.100">
                <Text color="gray.100">
                  {archetypeDescriptions[determineTopArchetype()]}
                </Text>
              </Box>

              {/* Knowledge Level Section */}
              <Box mb={8} p={6} borderRadius="lg" bg="rgba(49, 130, 206, 0.15)">
                <Flex justifyContent="space-between" alignItems="center" mb={3}>
                  <Heading as="h3" size="md" fontWeight="medium" color="white">
                    Knowledge Level:{' '}
                    {determineKnowledgeLevel().charAt(0).toUpperCase() +
                      determineKnowledgeLevel().slice(1)}
                  </Heading>
                  <Badge
                    px={3}
                    py={1}
                    bg="blue.500"
                    color="white"
                    borderRadius="full"
                    fontSize="sm"
                    fontWeight="bold"
                  >
                    {calculateKnowledgePercentage()}%
                  </Badge>
                </Flex>
                <Progress
                  value={calculateKnowledgePercentage()}
                  colorScheme="blue"
                  size="sm"
                  borderRadius="full"
                  mb={4}
                />
                <Text color="gray.100">
                  {knowledgeLevelDescriptions[determineKnowledgeLevel()]}
                </Text>
              </Box>

              <Box mb={8}>
                <Heading
                  as="h3"
                  size="md"
                  fontWeight="medium"
                  mb={5}
                  color="white"
                >
                  Your Top Matches
                  <Tooltip
                    label="Scores reflect both your matching characteristics and contradicting choices. Selecting options that contradict an archetype's core traits will reduce its score."
                    placement="top"
                    hasArrow
                  >
                    <Icon as={InfoIcon} ml={2} h={4} w={4} color="gray.400" />
                  </Tooltip>
                </Heading>
                <VStack spacing={4} align="stretch">
                  {getTopThreeArchetypes().map((archetype, idx) => (
                    <StyledCard key={idx} p={4} borderRadius="lg">
                      <Flex
                        position="relative"
                        zIndex="1"
                        alignItems="center"
                        gap={4}
                      >
                        {idx === 0 ? (
                          <GoldIconBox
                            w={{ base: '50px', md: '60px' }}
                            h={{ base: '50px', md: '60px' }}
                            minW="40px"
                            minH="40px"
                            flexShrink={0}
                          >
                            {archetypeVisuals[archetype.name]}
                          </GoldIconBox>
                        ) : (
                          <StyledIconBox
                            w={{ base: '50px', md: '60px' }}
                            h={{ base: '50px', md: '60px' }}
                            minW="40px"
                            minH="40px"
                            flexShrink={0}
                          >
                            {archetypeVisuals[archetype.name]}
                          </StyledIconBox>
                        )}
                        <Box flex="1">
                          <Text color="white" fontWeight="medium" mb={2}>
                            {formatArchetypeName(archetype.name)}
                          </Text>
                          <Flex alignItems="center">
                            <Box flex="1" mr={3}>
                              <Progress
                                value={calculateScorePercentage(
                                  archetype.score
                                )}
                                colorScheme={idx === 0 ? 'yellow' : 'purple'}
                                size="sm"
                                borderRadius="full"
                              />
                            </Box>
                            <Badge
                              px={2}
                              py={1}
                              bg={idx === 0 ? 'yellow.500' : 'purple.500'}
                              color="white"
                              borderRadius="full"
                              fontSize="sm"
                              fontWeight="medium"
                            >
                              {calculateMatchPercentage(archetype.score)}%
                            </Badge>
                          </Flex>
                        </Box>
                      </Flex>
                    </StyledCard>
                  ))}
                </VStack>
              </Box>

              <Box>
                <Heading
                  as="h3"
                  size="md"
                  fontWeight="medium"
                  mb={5}
                  color="white"
                >
                  Results by Category
                  <Tooltip
                    label="Scores reflect both your matching characteristics and contradicting choices. Selecting options that contradict an archetype's core traits will reduce its score."
                    placement="top"
                    hasArrow
                  >
                    <Icon as={InfoIcon} ml={2} h={4} w={4} color="gray.400" />
                  </Tooltip>
                </Heading>
                <Grid templateColumns={{ base: '1fr', md: '1fr 1fr' }} gap={6}>
                  {Object.entries(archetypeCategories).map(
                    ([category, archetypes]) => (
                      <StyledCard key={category} p={5} borderRadius="xl">
                        <Box position="relative" zIndex="1">
                          <Heading
                            as="h4"
                            size="sm"
                            fontWeight="semibold"
                            mb={4}
                            color="white"
                          >
                            {category}
                          </Heading>
                          <VStack spacing={3} align="stretch">
                            {archetypes.map((archetype) => {
                              const scorePercentage = calculateScorePercentage(
                                scores[archetype]
                              )

                              // Find the highest scoring archetype in this category
                              const highestScoreArchetype = [
                                ...archetypes,
                              ].sort((a, b) => scores[b] - scores[a])[0]
                              const isHighestScore =
                                archetype === highestScoreArchetype &&
                                scores[archetype] > 0

                              return (
                                <StyledCard
                                  key={archetype}
                                  p={3}
                                  borderRadius="md"
                                  opacity={isHighestScore ? 1 : 0.8}
                                >
                                  <Flex
                                    position="relative"
                                    zIndex="1"
                                    alignItems="center"
                                    gap={3}
                                  >
                                    {isHighestScore ? (
                                      <GoldIconBox
                                        w={{ base: '36px', md: '40px' }}
                                        h={{ base: '36px', md: '40px' }}
                                        minW="30px"
                                        minH="30px"
                                        flexShrink={0}
                                      >
                                        {archetypeVisuals[archetype]}
                                      </GoldIconBox>
                                    ) : (
                                      <StyledIconBox
                                        w={{ base: '36px', md: '40px' }}
                                        h={{ base: '36px', md: '40px' }}
                                        minW="30px"
                                        minH="30px"
                                        flexShrink={0}
                                        style={{
                                          background:
                                            'radial-gradient(circle, rgba(160, 174, 192, 0.1) 0%, rgba(160, 174, 192, 0.05) 100%)',
                                        }}
                                      >
                                        {archetypeVisuals[archetype]}
                                      </StyledIconBox>
                                    )}
                                    <Box flex="1">
                                      <Text
                                        color={
                                          isHighestScore ? 'white' : 'gray.300'
                                        }
                                        fontSize="sm"
                                        fontWeight={
                                          isHighestScore ? 'medium' : 'normal'
                                        }
                                      >
                                        {formatArchetypeName(archetype)
                                          .split(' ')
                                          .slice(1)
                                          .join(' ')}
                                      </Text>
                                      <Flex alignItems="center" mt={1}>
                                        <Box flex="1" mr={2}>
                                          <Progress
                                            value={scorePercentage}
                                            colorScheme={
                                              isHighestScore ? 'yellow' : 'gray'
                                            }
                                            size="xs"
                                            borderRadius="full"
                                          />
                                        </Box>
                                        <Badge
                                          px={2}
                                          py={0.5}
                                          bg={
                                            isHighestScore
                                              ? 'yellow.500'
                                              : 'whiteAlpha.200'
                                          }
                                          color={
                                            isHighestScore
                                              ? 'white'
                                              : 'gray.400'
                                          }
                                          borderRadius="full"
                                          fontSize="xs"
                                        >
                                          {calculateMatchPercentage(
                                            scores[archetype]
                                          )}
                                          %
                                        </Badge>
                                      </Flex>
                                    </Box>
                                  </Flex>
                                </StyledCard>
                              )
                            })}
                          </VStack>
                        </Box>
                      </StyledCard>
                    )
                  )}
                </Grid>
              </Box>
            </Box>
          </StyledCard>

          <Center mb={8}>
            <Button onClick={resetQuiz} variant="secondaryBig" size="lg">
              Take the Quiz Again
            </Button>
          </Center>
        </Box>
      )}
    </Box>
  )
}

export default CryptoArchetypeQuiz
