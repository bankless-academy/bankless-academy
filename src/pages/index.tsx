import {
  Box,
  Text,
  Stack,
  Heading,
  Link,
  Button,
  Container,
  SimpleGrid,
  Image,
  Center,
  useMediaQuery,
} from '@chakra-ui/react'

import QUESTS from 'constants/quests'
import Card from 'components/Card'

const MORE_LESSONS = [
  'Next Level: Intermediate Wallet',
  'Sidechains and Layer 2 Blockchains',
  'Next Level: Advanced Wallet',
  'DeFi Skills: Aave Basics',
  'DeFi Skills: Uniswap Basic',
  'Foundational Money Concepts',
  'DeFi Skills: Alchemix Basics',
  'DeFi Skllls: Working with Layer 2s',
]

const HomePage = (): JSX.Element => {
  const [isSmallScreen] = useMediaQuery('(max-width: 800px)')
  return (
    <>
      <Center
        height="80vh"
        bgImage="/images/homepage_background.jpg"
        bgSize="cover"
        bgPosition="center"
      >
        <Stack spacing={6} textAlign="center">
          <Heading as="h1" size="2xl">
            Welcome to the Bankless Academy
          </Heading>
          <Heading as="h2" size="xl">
            Level up your knowledge of Web3 and DeFi
          </Heading>
          <Link href={`/lessons`}>
            <Button variant="primary">Explore Lessons</Button>
          </Link>
        </Stack>
      </Center>
      <Box bgColor="#1F2023" p="5">
        <Container maxW="container.xl">
          <Box>
            <Heading as="h2" size="xl">
              Start Your Bankless Journey
            </Heading>
            <Text fontSize="lg">
              The Bankless Academy is on a mission to introduce 1 billion people
              to the exciting possibilities of cryptocurrency, DeFi, and beyond.
              Whether you’re curious about crypto, intrigued by NFTs, or want to
              get started the latest DeFi protocols, we’re here to help guide
              and accelerate your journey to Web3 proficiency.
            </Text>
            <SimpleGrid columns={{ sm: 1, md: 2, lg: 2 }} gap={6} m="10">
              <Box>
                <Heading as="h3" size="xl">
                  Advance Your Knowledge
                </Heading>
                <Text fontSize="lg">
                  From basics to deep dives, discover the world of Web3
                </Text>
              </Box>
              <Box>
                <Heading as="h3" size="xl">
                  Test Your Learning
                </Heading>
                <Text fontSize="lg">
                  Complete activities to reinforce what you’ve learned
                </Text>
              </Box>
              <Box>
                <Heading as="h3" size="xl">
                  Collect Rewards
                </Heading>
                <Text fontSize="lg">
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
              {QUESTS.map((lesson, key) => {
                const LessonImage = (
                  <Card
                    cursor="pointer"
                    overflow="hidden"
                    style={{
                      aspectRatio: '1.91/1',
                    }}
                    maxW="600px"
                  >
                    <Link href={`/lessons/${lesson.slug}`}>
                      <Image src={lesson.questImageLink} />
                    </Link>
                  </Card>
                )
                const LessonDescription = (
                  <Box alignSelf="center">
                    <Heading fontSize="xl">{lesson.name}</Heading>
                    <Text fontSize="lg">{lesson.description}</Text>
                    <Link href={`/lessons/${lesson.slug}`}>
                      <Button variant="primary" mt="4">
                        Start Lesson
                      </Button>
                    </Link>
                  </Box>
                )
                return (
                  <SimpleGrid
                    columns={{ sm: 1, md: 2, lg: 2 }}
                    key={key}
                    gap={6}
                    my="10"
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
                  </SimpleGrid>
                )
              })}
            </Box>
          </Box>
          <Box>
            <Heading as="h2" size="xl">
              More Lessons On the Way
            </Heading>
            <Text as="h3" size="lg">
              We are working on more informative lessons to help expand your
              Web3 knowledge.
            </Text>
            <SimpleGrid columns={{ sm: 2, md: 3, lg: 4 }} gap={6} m="10">
              {MORE_LESSONS.map((lesson, key) => (
                <Center
                  h="20"
                  bg="#2D2F34"
                  key={key}
                  textAlign="center"
                  borderRadius="10"
                >
                  {lesson}
                </Center>
              ))}
            </SimpleGrid>
          </Box>
          <Box>
            <SimpleGrid columns={{ sm: 1, md: 2, lg: 2 }} gap={6}>
              <Box>
                <Heading as="h3" size="md">
                  How can we help with your bankless journey?
                  <br />
                  Let us know what crypto, Web3, and DeFi topics and skills you
                  would like to learn.
                </Heading>
              </Box>
              <Box>
                <Link href={`/feedback`}>
                  <Button variant="primary">Suggest Topic</Button>
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
