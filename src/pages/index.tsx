import React from 'react'
import { GetStaticProps } from 'next'
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

import { PageMetaProps } from 'components/Head'
import QUESTS from 'constants/quests'
import Card from 'components/Card'

const pageMeta: PageMetaProps = {
  title: 'Home',
  description: '...',
}

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: { pageMeta },
  }
}

const MORE_COURSES = [
  'Next Level: Intermediate Wallet',
  'Sidechains and Layer 2 Blockchains',
  'Next Level: Advanced Wallet',
  'DeFi Skills: Aave Basics',
  'DeFi Skills: Uniswap Basic',
  'Foundational Money Concepts',
  'DeFi Skills: Alchemix Basics',
  'DeFi Skllls: Working with Layer 2s',
]

const Page = (): JSX.Element => {
  const [isSmallScreen] = useMediaQuery('(max-width: 800px)')
  return (
    <>
      <Center height="80vh" bg="purple.200">
        <Stack spacing={6} textAlign="center">
          <Heading as="h1" size="2xl">
            Welcome to the Bankless Academy
          </Heading>
          <Heading as="h2" size="xl">
            Level up your knowledge of Web3 and DeFi
          </Heading>
          <Link href={`/quests`}>
            <Button variant="primary">Explore Courses</Button>
          </Link>
        </Stack>
      </Center>
      <Box bg="gray.700" p="5">
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
                  Complete courses to claim badges and rewards
                </Text>
              </Box>
            </SimpleGrid>
          </Box>
          <Box>
            <Heading as="h2" size="xl">
              Available Courses
            </Heading>
            <Box p="5">
              {QUESTS.map((quest, key) => {
                const CourseImage = (
                  <Card
                    cursor="pointer"
                    overflow="hidden"
                    style={{
                      aspectRatio: '1.91/1',
                    }}
                    maxW="500px"
                  >
                    <Image src={quest.questImageLink} />
                  </Card>
                )
                const CourseDescription = (
                  <Box>
                    <Heading fontSize="xl">{quest.name}</Heading>
                    <Text fontSize="lg">{quest.description}</Text>
                    <Link href={`/quest/${quest.slug}`}>
                      <Button variant="primary" mt="4">
                        Start Course
                      </Button>
                    </Link>
                  </Box>
                )
                return (
                  <SimpleGrid
                    columns={{ sm: 1, md: 2, lg: 2 }}
                    key={key}
                    gap={6}
                    m="10"
                  >
                    {key % 2 === 0 && !isSmallScreen ? (
                      <>
                        {CourseImage}
                        {CourseDescription}
                      </>
                    ) : (
                      <>
                        {CourseDescription}
                        {CourseImage}
                      </>
                    )}
                  </SimpleGrid>
                )
              })}
            </Box>
          </Box>
          <Box>
            <Heading as="h2" size="xl">
              More Courses On the Way
            </Heading>
            <h2>
              We are working on more informative courses to help expand your
              Web3 knowledge.
            </h2>
            <SimpleGrid columns={{ sm: 2, md: 3, lg: 4 }} gap={6} m="10">
              {MORE_COURSES.map((course, key) => (
                <Center h="20" bg="gray.500" key={key} textAlign="center">
                  {course}
                </Center>
              ))}
            </SimpleGrid>
          </Box>
          <Box>
            <SimpleGrid columns={{ sm: 1, md: 2, lg: 2 }} gap={6}>
              <Box>
                <h2>
                  How can we help with your bankless journey? Let us know what
                  crypto, Web3, and DeFi topics and skills you would like to
                  learn.
                </h2>
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

export default Page
