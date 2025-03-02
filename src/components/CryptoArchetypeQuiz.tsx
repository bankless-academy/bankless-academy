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
  Tag,
} from '@chakra-ui/react'
import styled from '@emotion/styled'

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

const StyledTag = styled(Tag)<{ isactive?: string }>`
  height: 30px;
  ${(props) =>
    props.isactive === 'true' &&
    `
    ::before {
      background: #F1B15A;
    }
    color: #F1B15A;
  `};
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
  const [showResults, setShowResults] = useState(false)

  // Questions that map to different archetypes
  const questions = [
    {
      text: 'During a crypto market crash, I typically:',
      options: [
        {
          text: 'Hold tight and maybe buy more if I have cash',
          archetypes: ['hodler', 'maximalist'],
        },
        {
          text: 'See it as an opportunity to find high-risk, high-reward plays',
          archetypes: ['degenerate', 'pumpDumper'],
        },
        {
          text: 'Focus on building/improving projects regardless of price',
          archetypes: ['protocolDev', 'smartContractWizard', 'founder'],
        },
        {
          text: "Analyze on-chain data to understand what's happening",
          archetypes: ['onChainAnalyst', 'journalist'],
        },
      ],
    },
    {
      text: 'My typical time horizon for crypto investments is:',
      options: [
        {
          text: 'Years to decades',
          archetypes: ['hodler', 'maximalist', 'whale'],
        },
        {
          text: 'Days to weeks',
          archetypes: ['degenerate', 'pumpDumper', 'airdropFarmer'],
        },
        {
          text: "I'm not investing, I'm building for the long term",
          archetypes: ['protocolDev', 'founder', 'tokenomicsArchitect'],
        },
        {
          text: 'I care more about participating than timeframes',
          archetypes: ['nftCollector', 'daoVoter', 'stakingEnthusiast'],
        },
      ],
    },
    {
      text: 'When I discover a promising new project, I first:',
      options: [
        {
          text: 'Check the team, roadmap, and tokenomics',
          archetypes: ['hodler', 'whale', 'tokenomicsArchitect'],
        },
        {
          text: 'Ape in before everyone else discovers it',
          archetypes: ['degenerate', 'pumpDumper'],
        },
        {
          text: 'Review the codebase and technical documentation',
          archetypes: ['protocolDev', 'smartContractWizard', 'whiteHat'],
        },
        {
          text: 'Share it with my followers/community',
          archetypes: ['ctInfluencer', 'educator', 'memeLord'],
        },
      ],
    },
    {
      text: 'I spend most of my time in crypto:',
      options: [
        {
          text: 'Trading and managing my portfolio',
          archetypes: ['whale', 'pumpDumper', 'degenerate'],
        },
        {
          text: 'Writing code and building products',
          archetypes: ['protocolDev', 'smartContractWizard', 'founder'],
        },
        {
          text: 'Participating in communities and governance',
          archetypes: ['daoVoter', 'stakingEnthusiast', 'nftCollector'],
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
        },
      ],
    },
    {
      text: 'My biggest concern in crypto is:',
      options: [
        {
          text: 'Centralization and government overreach',
          archetypes: ['maximalist', 'privacyAdvocate'],
        },
        {
          text: 'Missing out on profitable opportunities',
          archetypes: ['degenerate', 'airdropFarmer', 'pumpDumper'],
        },
        {
          text: 'Security vulnerabilities and exploits',
          archetypes: ['whiteHat', 'protocolDev', 'smartContractWizard'],
        },
        {
          text: 'Sustainable ecosystem growth',
          archetypes: ['founder', 'tokenomicsArchitect', 'educator'],
        },
      ],
    },
    {
      text: 'My favorite way to earn in crypto is:',
      options: [
        {
          text: 'HODLing quality assets long-term',
          archetypes: ['hodler', 'maximalist', 'whale'],
        },
        {
          text: 'Finding the next 100x gem or airdrop',
          archetypes: ['degenerate', 'airdropFarmer'],
        },
        {
          text: 'Building and launching products',
          archetypes: ['founder', 'protocolDev', 'smartContractWizard'],
        },
        {
          text: 'Staking, yield farming, and governance rewards',
          archetypes: ['stakingEnthusiast', 'daoVoter'],
        },
      ],
    },
    {
      text: 'When using social media for crypto, I typically:',
      options: [
        {
          text: 'Share market insights and technical analysis',
          archetypes: ['onChainAnalyst', 'whale', 'educator'],
        },
        {
          text: 'Post memes and engage with crypto culture',
          archetypes: ['memeLord', 'ctInfluencer'],
        },
        {
          text: 'Discuss technical innovations and code',
          archetypes: ['protocolDev', 'smartContractWizard', 'whiteHat'],
        },
        {
          text: 'Report on news and trends in the space',
          archetypes: ['journalist', 'educator'],
        },
      ],
    },
    {
      text: 'When it comes to blockchain networks, I believe:',
      options: [
        {
          text: 'One chain will rule them all (e.g., Bitcoin or Ethereum)',
          archetypes: ['maximalist', 'hodler'],
        },
        {
          text: 'Different chains for different purposes',
          archetypes: ['founder', 'tokenomicsArchitect', 'smartContractWizard'],
        },
        {
          text: "I'll use whatever has the most profit potential right now",
          archetypes: ['degenerate', 'pumpDumper', 'airdropFarmer'],
        },
        {
          text: 'Privacy-focused chains are most important',
          archetypes: ['privacyAdvocate'],
        },
      ],
    },
    {
      text: 'My crypto knowledge is primarily focused on:',
      options: [
        {
          text: 'Market dynamics and investment strategies',
          archetypes: ['whale', 'hodler', 'pumpDumper'],
        },
        {
          text: 'Technical implementation and development',
          archetypes: ['protocolDev', 'smartContractWizard', 'whiteHat'],
        },
        {
          text: 'Community building and governance',
          archetypes: ['founder', 'daoVoter', 'educator'],
        },
        {
          text: 'On-chain analytics and data interpretation',
          archetypes: ['onChainAnalyst', 'journalist'],
        },
      ],
    },
    {
      text: 'If I had to choose one crypto activity, it would be:',
      options: [
        {
          text: 'Collecting rare NFTs and digital art',
          archetypes: ['nftCollector'],
        },
        {
          text: 'Optimizing yield through staking and DeFi',
          archetypes: ['stakingEnthusiast', 'degenerate'],
        },
        {
          text: 'Contributing to protocol governance',
          archetypes: ['daoVoter', 'whale'],
        },
        {
          text: 'Building new applications and features',
          archetypes: ['protocolDev', 'smartContractWizard', 'founder'],
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

  // Handle selecting an answer
  const handleAnswerSelect = (archetypes: string[]) => {
    const newScores = { ...scores }
    archetypes.forEach((archetype) => {
      newScores[archetype] += 1
    })
    setScores(newScores)

    // Move to next question or show results
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1)
    } else {
      setShowResults(true)
    }
  }

  // Determine top archetype based on scores
  const determineTopArchetype = () => {
    let topArchetype = Object.keys(scores)[0]
    let maxScore = scores[topArchetype]

    Object.entries(scores).forEach(([archetype, score]) => {
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

  // Reset the quiz
  const resetQuiz = () => {
    setCurrentQuestionIndex(0)
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
    setShowResults(false)
  }

  // Get current question
  const currentQuestion = questions[currentQuestionIndex]

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
            <Text fontSize="sm" color="gray.400" mb={2}>
              Question {currentQuestionIndex + 1} of {questions.length}
            </Text>
            <Progress
              value={((currentQuestionIndex + 1) / questions.length) * 100}
              colorScheme="purple"
              size="sm"
              borderRadius="full"
              mb={6}
            />

            <Heading as="h2" size="md" fontWeight="medium" mb={6} color="white">
              {currentQuestion.text}
            </Heading>

            <VStack spacing={4} align="stretch">
              {currentQuestion.options.map((option, idx) => (
                <Button
                  key={idx}
                  onClick={() => handleAnswerSelect(option.archetypes)}
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
              </Center>

              <Box mb={8} p={6} borderRadius="lg" bg="whiteAlpha.100">
                <Text color="gray.100">
                  {archetypeDescriptions[determineTopArchetype()]}
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
                                value={
                                  (archetype.score / questions.length) * 100
                                }
                                colorScheme={idx === 0 ? 'yellow' : 'purple'}
                                size="sm"
                                borderRadius="full"
                              />
                            </Box>
                            <StyledTag
                              isactive={(idx === 0).toString()}
                              variant="outline"
                              size="sm"
                            >
                              {archetype.score} / {questions.length}
                            </StyledTag>
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
                              const scorePercentage =
                                (scores[archetype] / questions.length) * 100
                              const isHighScore = scorePercentage > 30

                              return (
                                <StyledCard
                                  key={archetype}
                                  p={3}
                                  borderRadius="md"
                                  opacity={isHighScore ? 1 : 0.8}
                                >
                                  <Flex
                                    position="relative"
                                    zIndex="1"
                                    alignItems="center"
                                    gap={3}
                                  >
                                    <StyledIconBox
                                      w={{ base: '36px', md: '40px' }}
                                      h={{ base: '36px', md: '40px' }}
                                      minW="30px"
                                      minH="30px"
                                      flexShrink={0}
                                      style={{
                                        background: isHighScore
                                          ? 'radial-gradient(circle, rgba(128, 90, 213, 0.15) 0%, rgba(128, 90, 213, 0.08) 100%)'
                                          : 'radial-gradient(circle, rgba(160, 174, 192, 0.1) 0%, rgba(160, 174, 192, 0.05) 100%)',
                                      }}
                                    >
                                      {archetypeVisuals[archetype]}
                                    </StyledIconBox>
                                    <Box flex="1">
                                      <Text
                                        color={
                                          isHighScore ? 'white' : 'gray.300'
                                        }
                                        fontSize="sm"
                                        fontWeight={
                                          isHighScore ? 'medium' : 'normal'
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
                                              isHighScore ? 'purple' : 'gray'
                                            }
                                            size="xs"
                                            borderRadius="full"
                                          />
                                        </Box>
                                        <Badge
                                          px={2}
                                          py={0.5}
                                          bg={
                                            isHighScore
                                              ? 'purple.600'
                                              : 'whiteAlpha.200'
                                          }
                                          color={
                                            isHighScore ? 'white' : 'gray.400'
                                          }
                                          borderRadius="full"
                                          fontSize="xs"
                                        >
                                          {scores[archetype]}
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
