import {
  Box,
  Text,
  Stack,
  Heading,
  Button,
  Container,
  SimpleGrid,
  Image,
  Center,
  useMediaQuery,
  Link,
} from '@chakra-ui/react'
import NextLink from 'next/link'
import styled from '@emotion/styled'

import LESSONS from 'constants/lessons'
import LessonBanner from 'components/LessonBanner'
import { LearnIcon, QuizIcon, QuestIcon, PoapIcon } from 'components/Icons'
// import { DEFAULT_METADATA } from 'constants/'

const MORE_LESSONS = [
  'Next Level: Intermediate Wallet',
  'Sidechains and Layer 2 Blockchains',
  'Next Level: Advanced Wallet',
  'DeFi Skills: Aave Basics',
  'DeFi Skills: Uniswap Basics',
  'Foundational Money Concepts',
  'DeFi Skills: Alchemix Basics',
  'DeFi Skills: Working with Layer 2s',
]

const LessonGrid = styled(SimpleGrid)`
  border-bottom: 1px solid #72757b;
  :last-child {
    border-bottom: none;
  }
`

const HomePage = (): JSX.Element => {
  const [isSmallScreen] = useMediaQuery('(max-width: 800px)')
  return (
    <>
      <Center
        height="80vh"
        bgImage="/images/homepage_background_v3.jpg"
        bgSize="cover"
        bgPosition="center"
      >
        <Stack
          width="100%"
          maxW="800px"
          spacing={6}
          textAlign="center"
          alignItems="center"
          pt="20vh"
        >
          <Image
            style={{
              filter: 'drop-shadow( 3px 3px 2px rgba(0, 0, 0, .7))',
            }}
            maxW="90%"
            src="/images/BanklessAcademy.svg"
            alt="Bankless Academy"
          />
          {/* <Heading
            as="h2"
            size="xl"
            maxW="90%"
            filter="drop-shadow( 3px 3px 2px rgba(0, 0, 0, .7))"
          >
            {DEFAULT_METADATA.description}
          </Heading> */}
          <Box>
            <NextLink href={`/lessons`}>
              <Button variant="primary" size="lg" style={{ padding: '0 23px' }}>
                Explore Lessons
              </Button>
            </NextLink>
          </Box>
        </Stack>
      </Center>
      <Box bgColor="#1F2023" p="5">
        <Container maxW="container.lg">
          <Box mt="6">
            <Heading as="h2" size="xl" m="auto">
              Start Your Bankless Journey
            </Heading>
            <Text fontSize="lg" mt="6">
              The Bankless Academy is on a mission to introduce 1 billion people
              to the exciting possibilities of cryptocurrency, DeFi, and beyond.
              Whether you’re curious about crypto, intrigued by NFTs, or want to
              get started the latest DeFi protocols, we’re here to help guide
              and accelerate your journey to Web3 proficiency.
            </Text>
            <SimpleGrid
              columns={{ sm: 1, md: 2, lg: 2 }}
              gap={6}
              my="10"
              mx={isSmallScreen ? '0' : '12'}
            >
              <Box border="1px solid #72757B" p="8" borderRadius="lg">
                <LearnIcon />
                <Heading size="lg" mt="2">
                  Advance Your Knowledge
                </Heading>
                <Text fontSize="lg" mt="2">
                  From basics to deep dives, discover the world of Web3
                </Text>
              </Box>
              <Box border="1px solid #72757B" p="8" borderRadius="lg">
                <QuizIcon />
                <Heading size="lg" mt="2">
                  Check Your Learning
                </Heading>
                <Text fontSize="lg" mt="2">
                  Complete activities to test your command of topics and
                  concepts
                </Text>
              </Box>
              <Box border="1px solid #72757B" p="8" borderRadius="lg">
                <QuestIcon />
                <Heading size="lg" mt="2">
                  Complete Quests
                </Heading>
                <Text fontSize="lg" mt="2">
                  Put knowledge into action with step-by-step tutorials
                </Text>
              </Box>
              <Box border="1px solid #72757B" p="8" borderRadius="lg">
                <PoapIcon />
                <Heading size="lg" mt="2">
                  Collect Rewards
                </Heading>
                <Text fontSize="lg" mt="2">
                  Complete lessons to claim badges and rewards
                </Text>
              </Box>
            </SimpleGrid>
          </Box>
          <Box>
            <Heading as="h2" size="xl">
              Available Lessons
            </Heading>
            <Box>
              {LESSONS.map((lesson, key) => {
                const isPoapClaimed = localStorage.getItem(
                  `poap-${lesson.slug}`
                )
                const isLessonStarted =
                  (localStorage.getItem(lesson.slug) || 0) > 0
                const LessonImage = (
                  <LessonBanner
                    cursor="pointer"
                    // overflow="hidden"
                    style={{
                      aspectRatio: '1.91/1',
                    }}
                    maxW="600px"
                  >
                    <NextLink href={`/lessons/${lesson.slug}`}>
                      <Image src={lesson.lessonImageLink} />
                    </NextLink>
                  </LessonBanner>
                )
                const LessonDescription = (
                  <Box alignSelf="center" mt="4">
                    <Heading fontSize="2xl">{lesson.name}</Heading>
                    <Text fontSize="lg" my="4">
                      {lesson.marketingDescription}
                    </Text>
                    <NextLink href={`/lessons/${lesson.slug}`}>
                      <Button variant="primary" mt="4">
                        {isPoapClaimed
                          ? 'Review Lesson'
                          : isLessonStarted
                          ? 'Resume Lesson'
                          : 'Start Lesson'}
                      </Button>
                    </NextLink>
                  </Box>
                )
                return (
                  <LessonGrid
                    columns={{ sm: 1, md: 2, lg: 2 }}
                    key={key}
                    gap={6}
                    py="10"
                    mx={isSmallScreen ? '0' : '12'}
                  >
                    {key % 2 === 0 || isSmallScreen ? (
                      <>
                        {LessonImage}
                        {LessonDescription}
                      </>
                    ) : (
                      <>
                        {LessonDescription}
                        {LessonImage}
                      </>
                    )}
                  </LessonGrid>
                )
              })}
            </Box>
          </Box>
          <Box>
            <Heading as="h2" size="xl">
              More Lessons On the Way
            </Heading>
            <Text as="h3" size="lg" mt="2">
              We are working on more informative lessons to help expand your
              Web3 knowledge.
            </Text>
            <SimpleGrid
              columns={{ sm: 2, md: 3, lg: 4 }}
              gap={6}
              my="10"
              mx={isSmallScreen ? '0' : '12'}
            >
              {MORE_LESSONS.map((lesson, key) => (
                <Center
                  h="20"
                  bg="#2D2F34"
                  key={key}
                  textAlign="center"
                  borderRadius="10"
                  p="4"
                >
                  {lesson}
                </Center>
              ))}
            </SimpleGrid>
          </Box>
          <Box my="12">
            <SimpleGrid columns={{ sm: 1, md: 2, lg: 2 }} gap={6}>
              <Box>
                <Heading as="h3" size="md">
                  How can we help with your bankless journey?
                  <br />
                  Let us know what crypto, Web3, DeFi topics and skills you
                  would like to learn.
                </Heading>
              </Box>
              <Box>
                <NextLink href={`/feedback`}>
                  <Button variant="secondary">Suggest topics</Button>
                </NextLink>
                <Link
                  target="_blank"
                  rel="noreferrer"
                  href={`https://tally.so/r/w4kXA3`}
                  ml="4"
                >
                  <Button variant="primary">Partner with us</Button>
                </Link>
              </Box>
            </SimpleGrid>
          </Box>
        </Container>
      </Box>
    </>
  )
}

export default HomePage
