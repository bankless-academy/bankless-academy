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
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  useDisclosure,
} from '@chakra-ui/react'
import styled from '@emotion/styled'
import NextLink from 'next/link'

import Footer from 'layout/Footer'
import FeaturedLessons from 'components/FeaturedLessons'
import WhitelabelHomepage from 'pages/whitelabel_homepage'
import {
  LearnIcon,
  QuizIcon,
  QuestIcon,
  KudosIcon,
  PencilIcon,
  GraduationCapIcon,
  HandshakeIcon,
  EyeIcon,
  UsersThreeIcon,
} from 'components/Icons'
import { HOMEPAGE_BACKGROUND, IS_WHITELABEL } from 'constants/index'
import { Mixpanel } from 'utils/index'

const Card = styled(Box)`
  border: 1px solid #72757b;
  padding: var(--chakra-space-8);
  border-radius: var(--chakra-radii-lg);
  background: linear-gradient(
    107.1deg,
    rgba(46, 33, 33, 0.3) -3.13%,
    rgba(80, 73, 84, 0.3) 16.16%,
    rgba(94, 89, 104, 0.3) 29.38%,
    rgba(86, 81, 94, 0.3) 41.5%,
    rgba(23, 21, 21, 0.3) 102.65%
  );
  display: flex;
  flex-direction: column;
`
const NewsletterButton = styled(Button)`
  :hover {
    padding: 0 23px;
  }
`

const HomePage = (): JSX.Element => {
  const [isSmallScreen] = useMediaQuery('(max-width: 800px)')
  const { isOpen, onOpen, onClose } = useDisclosure()

  const NewsletterModal = (
    <Modal onClose={onClose} size={'xl'} isOpen={isOpen}>
      <ModalOverlay />
      <ModalContent bg="linear-gradient(135.91deg, #B06FD8 29.97%, #597AEE 99.26%)">
        <ModalHeader>Newsletter</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Box
            display="flex"
            flexShrink="initial"
            justifyContent="center"
            p="8"
            borderRadius="lg"
            width="100%"
          >
            <iframe
              height="320px"
              width="320px"
              style={{ maxWidth: '100%' }}
              scrolling="yes"
              src="https://cdn.forms-content.sg-form.com/21588aac-6045-11ed-a92e-a663f73c8296"
            ></iframe>
          </Box>
        </ModalBody>
      </ModalContent>
    </Modal>
  )

  if (IS_WHITELABEL) return <WhitelabelHomepage />
  else
    return (
      <>
        <Center
          height="80vh"
          bgImage={HOMEPAGE_BACKGROUND}
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
            <Box>
              <NextLink href={`/lessons`}>
                <Button
                  variant="primary"
                  size="lg"
                  style={{ padding: '0 23px' }}
                >
                  Explore Lessons
                </Button>
              </NextLink>
            </Box>
          </Stack>
        </Center>
        <Box bgColor="#1F2023" p="4" overflow="hidden">
          <Container maxW="container.lg">
            <Box mt="6">
              <Heading as="h2" size="xl" m="auto">
                Start Your Bankless Journey
              </Heading>
              <Text fontSize="lg" mt="6">
                Bankless Academy is on a mission to ensure every web3 Explorer
                is ready for their crypto-verse voyage.
                <br />
                <Box mt={2}>
                  Using the Academy platform you’ll be taking a confident first
                  step into the new frontier, before diving down your own unique
                  learning path and preparing to blaze new trails across
                  blockchain space. Let’s get started.
                </Box>
              </Text>
              <SimpleGrid
                columns={{ sm: 1, md: 2, lg: 2 }}
                gap={6}
                my="10"
                mx={isSmallScreen ? '0' : '12'}
              >
                <Card>
                  <LearnIcon />
                  <Heading size="lg" mt="2">
                    Advance Your Knowledge
                  </Heading>
                  <Text fontSize="lg" mt="2">
                    From basics to deep dives, discover the world of web3 with
                    content built alongside leading experts.
                  </Text>
                </Card>
                <Card>
                  <QuizIcon />
                  <Heading size="lg" mt="2">
                    Test Your Abilities
                  </Heading>
                  <Text fontSize="lg" mt="2">
                    Complete activities that test your command of crypto
                    concepts.
                  </Text>
                </Card>
                <Card>
                  <QuestIcon />
                  <Heading size="lg" mt="2">
                    Complete Quests
                  </Heading>
                  <Text fontSize="lg" mt="2">
                    Put knowledge into action with quests that reward first-hand
                    experience.
                  </Text>
                </Card>
                <Card>
                  <KudosIcon />
                  <Heading size="lg" mt="2">
                    Earn Rewards
                  </Heading>
                  <Text fontSize="lg" mt="2">
                    Collect badges and other on-chain rewards for successfully
                    finishing lessons and quests.
                  </Text>
                </Card>
              </SimpleGrid>
            </Box>
            <Box
              border="1px solid #989898"
              py="8"
              px="6"
              mb="8"
              borderRadius="lg"
            >
              <Text fontSize="2xl">
                {`Sign up for our `}
                <NewsletterButton
                  variant="primary"
                  size="lg"
                  onClick={() => {
                    onOpen()
                    Mixpanel.track('click_newsletter_modal')
                  }}
                >
                  Newsletter
                </NewsletterButton>
                {` to be notified of new lessons and platform
              updates!`}
              </Text>
            </Box>
            {NewsletterModal}
            <FeaturedLessons />
            <>
              <Box mt="16">
                <Heading as="h2" size="xl" my="16" mb="12">
                  More Lessons On the Way
                </Heading>
                <Box maxW="800px" display="flex" margin="auto">
                  <Box width="100%">
                    <Box
                      display="flex"
                      borderBottom="1px solid #72757B"
                      pb="6"
                      width="100%"
                      mb="6"
                    >
                      <Box minW="64px" alignSelf="center">
                        <Image width="64px" src="/images/money.png" />
                      </Box>
                      <Box ml="4">
                        <Heading size="lg" mb="2">
                          Dive into DeFi
                        </Heading>
                        Learn how crypto protocols and tools are helping
                        Explorers go Bankless.
                      </Box>
                    </Box>
                    <Box
                      display="flex"
                      borderBottom="1px solid #72757B"
                      pb="6"
                      width="100%"
                      mb="6"
                    >
                      <Box minW="64px" alignSelf="center">
                        <Image width="64px" src="/images/parrot.png" />
                      </Box>
                      <Box ml="4">
                        <Heading size="lg" mb="2">
                          Explore NFTs
                        </Heading>
                        Explore the on-chain property rights movement, and the
                        emerging use-cases for this technology.
                      </Box>
                    </Box>
                    <Box
                      display="flex"
                      borderBottom="1px solid #72757B"
                      pb="6"
                      width="100%"
                      mb="6"
                    >
                      <Box minW="64px" alignSelf="center">
                        <Image width="64px" src="/images/hammer-and-pick.png" />
                      </Box>
                      <Box ml="4">
                        <Heading size="lg" mb="2">
                          Join a DAO
                        </Heading>
                        The future of work is upon us. Learn how you can work in
                        crypto, and how to get started.
                      </Box>
                    </Box>
                    <Box display="flex" pb="6" width="100%">
                      <Box minW="64px" alignSelf="center">
                        <Image width="64px" src="/images/books.png" />
                      </Box>
                      <Box ml="4">
                        <Heading size="lg" mb="2">
                          Study Blockchain Architecture & More
                        </Heading>
                        Let’s explore how blockchain technology makes crypto
                        currencies and tools possible.
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </Box>
              <Box my="16">
                <Heading as="h2" size="xl" mt="16" mb="8">
                  Work With Us!
                </Heading>
                <Text fontSize="2xl" mb="8">
                  From reviewing lessons to partnering with our platform, there
                  are plenty of options for collaborating with the Academy
                  Squad.
                </Text>
                <SimpleGrid
                  columns={{ sm: 1, md: 2, lg: 3 }}
                  gap={6}
                  my="10"
                  mx="0"
                >
                  <Card>
                    <PencilIcon />
                    <Heading size="lg" mt="2">
                      Collaborate On A Lesson
                    </Heading>
                    <Text fontSize="lg" mt="2">
                      Join protocols such as 1inch in building a lesson with
                      Bankless Academy, introducing Explorers to Bankless tools
                      and learning more about your community in the process.
                    </Text>
                    <Box
                      display="flex"
                      flexDirection="row-reverse"
                      pt="4"
                      style={{ flexGrow: 1 }}
                      alignItems="self-end"
                    >
                      <Link
                        href="https://sponsors.banklessacademy.com/"
                        target="_blank"
                      >
                        <Button variant="secondary" size="md">
                          Collaborate!
                        </Button>
                      </Link>
                    </Box>
                  </Card>
                  <Card>
                    <GraduationCapIcon />
                    <Heading size="lg" mt="2">
                      Open Your Own Academy
                    </Heading>
                    <Text fontSize="lg" mt="2">
                      Our whitelabel platform has helped numerous DAOs
                      kick-start their community education journey - without any
                      developer knowledge!
                    </Text>
                    <Box
                      display="flex"
                      flexDirection="row-reverse"
                      pt="4"
                      style={{ flexGrow: 1 }}
                      alignItems="self-end"
                    >
                      <Link
                        href="http://whitelabel.banklessacademy.com/"
                        target="_blank"
                      >
                        <Button variant="secondary" size="md">
                          Learn More
                        </Button>
                      </Link>
                    </Box>
                  </Card>
                  <Card>
                    <HandshakeIcon />
                    <Heading size="lg" mt="2">
                      Partner With Us
                    </Heading>
                    <Text fontSize="lg" mt="2">
                      Do you have an interesting value proposition for our team?
                      <br />
                      Reach out below so we can start a conversation.
                    </Text>
                    <Box
                      display="flex"
                      flexDirection="row-reverse"
                      pt="4"
                      style={{ flexGrow: 1 }}
                      alignItems="self-end"
                    >
                      <Link href="https://tally.so/r/w4kXA3" target="_blank">
                        <Button variant="secondary" size="md">
                          Send Request
                        </Button>
                      </Link>
                    </Box>
                  </Card>
                  <Card>
                    <EyeIcon />
                    <Heading size="lg" mt="2">
                      Review Our Lessons
                    </Heading>
                    <Text fontSize="lg" mt="2">
                      Anyone can help improve Bankless Academy. Help us by
                      providing feedback on Beta lessons and your on-chain
                      Reviewer badge will make sure we won’t forget it.
                    </Text>
                    <Box
                      display="flex"
                      flexDirection="row-reverse"
                      pt="4"
                      style={{ flexGrow: 1 }}
                      alignItems="self-end"
                    >
                      <Link
                        href="https://gm.xyz/c/BanklessAcademy?communityName=BanklessAcademy&sortBy=new&topicUuid=ead361fe-d823-45bb-8d6c-010eab49174b"
                        target="_blank"
                      >
                        <Button variant="secondary" size="md">
                          Sign Up
                        </Button>
                      </Link>
                    </Box>
                  </Card>
                  <Card>
                    <UsersThreeIcon />
                    <Heading size="lg" mt="2">
                      Join Our Team
                    </Heading>
                    <Text fontSize="lg" mt="2">
                      Got what it takes to join the Academy Squad?
                      <br />
                      We want to hear from you.
                    </Text>
                    <Box
                      display="flex"
                      flexDirection="row-reverse"
                      pt="4"
                      style={{ flexGrow: 1 }}
                      alignItems="self-end"
                    >
                      <Link
                        href="http://talent.banklessacademy.com/"
                        target="_blank"
                      >
                        <Button variant="secondary" size="md">
                          See Positions
                        </Button>
                      </Link>
                    </Box>
                  </Card>
                  <Card>
                    <Text fontSize="lg" mb="2">
                      Or if you just like what we’re doing, you can help by
                      funding us below.
                    </Text>
                    <Link
                      href="https://gitcoin.co/grants/3535/bankless-academy"
                      target="_blank"
                    >
                      <Image
                        width="100%"
                        src="/images/Donate-via-Gitcoin.png"
                      />
                    </Link>
                    <Text fontSize="lg" mt="2">
                      We rely on our public-goods business model to continue
                      providing a free, Bankless education!
                    </Text>
                  </Card>
                </SimpleGrid>
              </Box>
            </>
          </Container>
          <Footer />
        </Box>
      </>
    )
}

export default HomePage
