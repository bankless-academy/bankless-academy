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
  Icon,
} from '@chakra-ui/react'
import Link from 'next/link'
import { BookOpen, LightbulbFilament, Sword, Medal } from 'phosphor-react'

import LESSONS from 'constants/lessons'
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
        bgImage="/images/homepage_background_v2.jpg"
        bgSize="cover"
        bgPosition="center"
      >
        <Stack spacing={6} textAlign="center">
          {/* <Heading as="h1" size="2xl">
            Welcome to the Bankless Academy
          </Heading>
          <Heading as="h2" size="xl">
            Level up your knowledge of Web3 and DeFi
          </Heading> */}
          <Box mt="45vh">
            <Link href={`/lessons`}>
              <Button variant="primary">Explore Lessons</Button>
            </Link>
          </Box>
        </Stack>
      </Center>
      <Box bgColor="#1F2023" p="5">
        <Container maxW="container.xl">
          <Box mt="6">
            <Heading as="h2" size="xl" textAlign="center" m="auto">
              Start Your Bankless Journey
            </Heading>
            <Text fontSize="lg" maxW="800px" textAlign="center" m="auto" my="6">
              The Bankless Academy is on a mission to introduce 1 billion people
              to the exciting possibilities of cryptocurrency, DeFi, and beyond.
              Whether you’re curious about crypto, intrigued by NFTs, or want to
              get started the latest DeFi protocols, we’re here to help guide
              and accelerate your journey to Web3 proficiency.
            </Text>
            <SimpleGrid columns={{ sm: 1, md: 2, lg: 4 }} gap={6} my="8">
              <Box>
                <Icon
                  as={BookOpen}
                  w={10}
                  h={10}
                  bg="linear-gradient(148.06deg, #B8FFB0 7.86%, #84FFE1 90.48%)"
                  color="black"
                  borderRadius="50%"
                  p="2"
                />
                <Heading size="lg">Advance Your Knowledge</Heading>
                <Text fontSize="lg">
                  From basics to deep dives, discover the world of Web3
                </Text>
              </Box>
              <Box>
                <Icon
                  as={LightbulbFilament}
                  w={10}
                  h={10}
                  bg="linear-gradient(148.06deg, #B0FFFA 7.86%, #FFBF84 90.48%)"
                  color="black"
                  borderRadius="50%"
                  p="2"
                />
                <Heading size="lg">Check Your Learning</Heading>
                <Text fontSize="lg">
                  Complete activities to test your command of topics and
                  concepts
                </Text>
              </Box>
              <Box>
                <Icon
                  as={Sword}
                  w={10}
                  h={10}
                  bg="linear-gradient(148.06deg, #FFDFB0 7.86%, #FF84DC 90.48%)"
                  color="black"
                  borderRadius="50%"
                  p="2"
                />
                <Heading size="lg">Complete Quests</Heading>
                <Text fontSize="lg">
                  Put knowledge into action with step-by-step tutorials
                </Text>
              </Box>
              <Box>
                <Icon
                  as={Medal}
                  w={10}
                  h={10}
                  bg="linear-gradient(148.06deg, #FDFF84 7.86%, #B0E3FF 79.72%)"
                  color="black"
                  borderRadius="50%"
                  p="2"
                />
                <Heading size="lg">Collect Rewards</Heading>
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
              {LESSONS.map((lesson, key) => {
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
                      <Image src={lesson.lessonImageLink} />
                    </Link>
                  </Card>
                )
                const LessonDescription = (
                  <Box alignSelf="center">
                    <Heading fontSize="2xl">{lesson.name}</Heading>
                    <Text fontSize="lg" my="2">
                      {lesson.marketingDescription}
                    </Text>
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
