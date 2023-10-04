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
  useDisclosure,
} from '@chakra-ui/react'
import styled from '@emotion/styled'
import { useTranslation } from 'react-i18next'

import Footer from 'layout/Footer'
import FeaturedLessons from 'components/FeaturedLessons'
import ExternalLink from 'components/ExternalLink'
import InternalLink from 'components/InternalLink'
import WhitelabelHomepage from 'pages/whitelabel_homepage'
import {
  LearnIcon,
  QuizIcon,
  QuestIcon,
  RewardsIcon,
  PencilIcon,
  GraduationCapIcon,
  HandshakeIcon,
  EyeIcon,
  UsersThreeIcon,
} from 'components/Icons'
import { HOMEPAGE_BACKGROUND, IS_WHITELABEL } from 'constants/index'
import { Mixpanel } from 'utils/index'
import SubscriptionModal from 'components/SubscriptionModal'
import { useSmallScreen } from 'hooks/index'

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
  const { t } = useTranslation('homepage')
  const [isSmallScreen] = useSmallScreen()
  const { isOpen, onOpen, onClose } = useDisclosure()

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
              <InternalLink href={`/lessons`} alt="Explore Lessons">
                <Button
                  variant="primary"
                  size="lg"
                  style={{ padding: '0 23px' }}
                >
                  {t('Explore Lessons')}
                </Button>
              </InternalLink>
            </Box>
          </Stack>
        </Center>
        <Box bgColor="#1F2023" p="4" overflow="hidden">
          <Container maxW="container.lg">
            <Box mt="6">
              <Heading as="h2" size="xl" m="auto">
                {t(`Start Your Bankless Journey`)}
              </Heading>
              <Box fontSize="lg" mt="6">
                {t(
                  `Bankless Academy is on a mission to ensure every web3 Explorer is ready for their crypto-verse voyage.`
                )}
                <br />
                <Box mt={2}>
                  {t(
                    `Using the Academy platform you’ll be taking a confident first step into the new frontier, before diving down your own unique learning path and preparing to blaze new trails across blockchain space. Let’s get started.`
                  )}
                </Box>
              </Box>
              <SimpleGrid
                columns={{ sm: 1, md: 2, lg: 2 }}
                gap={6}
                my="10"
                mx={isSmallScreen ? '0' : '12'}
              >
                <Card>
                  <LearnIcon />
                  <Heading size="lg" mt="2">
                    {t(`Advance Your Knowledge`)}
                  </Heading>
                  <Text fontSize="lg" mt="2">
                    {t(
                      `From basics to deep dives, discover the world of web3 with content built alongside leading experts.`
                    )}
                  </Text>
                </Card>
                <Card>
                  <QuizIcon />
                  <Heading size="lg" mt="2">
                    {t(`Test Your Abilities`)}
                  </Heading>
                  <Text fontSize="lg" mt="2">
                    {t(
                      `Complete activities that test your command of crypto concepts.`
                    )}
                  </Text>
                </Card>
                <Card>
                  <QuestIcon />
                  <Heading size="lg" mt="2">
                    {t(`Complete Quests`)}
                  </Heading>
                  <Text fontSize="lg" mt="2">
                    {t(
                      `Put knowledge into action with quests that reward first-hand experience.`
                    )}
                  </Text>
                </Card>
                <Card>
                  <RewardsIcon />
                  <Heading size="lg" mt="2">
                    {t(`Earn Rewards`)}
                  </Heading>
                  <Text fontSize="lg" mt="2">
                    {t(
                      `Collect badges and other onchain rewards for successfully finishing lessons and quests.`
                    )}
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
              <Box fontSize="2xl">
                <NewsletterButton
                  variant="primary"
                  size="lg"
                  onClick={() => {
                    onOpen()
                    Mixpanel.track('click_internal_link', {
                      link: 'modal',
                      name: 'Newsletter signup',
                    })
                  }}
                  mr="2"
                >
                  {t(`Newsletter`)}
                </NewsletterButton>
                {t(
                  `Sign up for our newsletter to be notified of new lessons and platform updates!`
                )}
              </Box>
            </Box>
            <SubscriptionModal isOpen={isOpen} onClose={onClose} />
            <FeaturedLessons />
            <>
              <Box mt="16">
                <Heading as="h2" size="xl" my="16" mb="12">
                  {t(`More Lessons On the Way`)}
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
                          {t(`Dive into DeFi`)}
                        </Heading>
                        {t(
                          `Learn how crypto protocols and tools are helping Explorers go Bankless.`
                        )}
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
                          {t(`Explore NFTs`)}
                        </Heading>
                        {t(
                          `Explore the onchain property rights movement, and the emerging use-cases for this technology.`
                        )}
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
                          {t(`Join a DAO`)}
                        </Heading>
                        {t(
                          `The future of work is upon us. Learn how you can work in crypto, and how to get started.`
                        )}
                      </Box>
                    </Box>
                    <Box display="flex" pb="6" width="100%">
                      <Box minW="64px" alignSelf="center">
                        <Image width="64px" src="/images/books.png" />
                      </Box>
                      <Box ml="4">
                        <Heading size="lg" mb="2">
                          {t(`Study Blockchain Architecture & More`)}
                        </Heading>
                        {t(
                          `Let’s explore how blockchain technology makes crypto currencies and tools possible.`
                        )}
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </Box>
              <Box my="16">
                <Heading as="h2" size="xl" mt="16" mb="8">
                  {t(`Work With Us!`)}
                </Heading>
                <Text fontSize="2xl" mb="8">
                  {t(
                    `From reviewing lessons to partnering with our platform, there are plenty of options for collaborating with the Academy Squad.`
                  )}
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
                      {t(`Collaborate On A Lesson`)}
                    </Heading>
                    <Text fontSize="lg" mt="2">
                      {t(
                        `Join protocols such as 1inch in building a lesson with Bankless Academy, introducing Explorers to Bankless tools and learning more about your community in the process.`
                      )}
                    </Text>
                    <Box
                      display="flex"
                      flexDirection="row-reverse"
                      pt="4"
                      style={{ flexGrow: 1 }}
                      alignItems="self-end"
                    >
                      <ExternalLink href="https://sponsors.banklessacademy.com/">
                        <Button variant="secondary" size="md">
                          {t(`Collaborate!`)}
                        </Button>
                      </ExternalLink>
                    </Box>
                  </Card>
                  <Card>
                    <GraduationCapIcon />
                    <Heading size="lg" mt="2">
                      {t(`Open Your Own Academy`)}
                    </Heading>
                    <Text fontSize="lg" mt="2">
                      {t(
                        `Our whitelabel platform has helped numerous DAOs kick-start their community education journey - without any developer knowledge!`
                      )}
                    </Text>
                    <Box
                      display="flex"
                      flexDirection="row-reverse"
                      pt="4"
                      style={{ flexGrow: 1 }}
                      alignItems="self-end"
                    >
                      <ExternalLink href="http://whitelabel.banklessacademy.com/">
                        <Button variant="secondary" size="md">
                          {t(`Learn More`)}
                        </Button>
                      </ExternalLink>
                    </Box>
                  </Card>
                  <Card>
                    <HandshakeIcon />
                    <Heading size="lg" mt="2">
                      {t(`Partner With Us`)}
                    </Heading>
                    <Text fontSize="lg" mt="2">
                      {t(
                        `Do you have an interesting value proposition for our team?`
                      )}
                      <br />

                      {t(`Reach out below so we can start a conversation.`)}
                    </Text>
                    <Box
                      display="flex"
                      flexDirection="row-reverse"
                      pt="4"
                      style={{ flexGrow: 1 }}
                      alignItems="self-end"
                    >
                      <ExternalLink href="https://tally.so/r/w4kXA3">
                        <Button variant="secondary" size="md">
                          {t(`Send Request`)}
                        </Button>
                      </ExternalLink>
                    </Box>
                  </Card>
                  <Card>
                    <EyeIcon />
                    <Heading size="lg" mt="2">
                      {t(`Improve Our Lessons`)}
                    </Heading>
                    <Text fontSize="lg" mt="2">
                      {t(
                        `Everyone can help make Bankless Academy better. Provide feedback on lessons or translations and receive an onchain badge once your feedback is included.`
                      )}
                    </Text>
                  </Card>
                  <Card>
                    <UsersThreeIcon />
                    <Heading size="lg" mt="2">
                      {t(`Join Our Team`)}
                    </Heading>
                    <Text fontSize="lg" mt="2">
                      {t(`Got what it takes to join the Academy Squad?`)}
                      <br />
                      {t(` We want to hear from you.`)}
                    </Text>
                    <Box
                      display="flex"
                      flexDirection="row-reverse"
                      pt="4"
                      style={{ flexGrow: 1 }}
                      alignItems="self-end"
                    >
                      <ExternalLink href="http://talent.banklessacademy.com/">
                        <Button variant="secondary" size="md">
                          {t(`See Positions`)}
                        </Button>
                      </ExternalLink>
                    </Box>
                  </Card>
                  <Card>
                    <Text fontSize="lg" mb="2">
                      {t(
                        `Or if you just like what we’re doing, you can help by funding us below.`
                      )}
                    </Text>
                    <ExternalLink
                      href="https://grants.gitcoin.co/"
                      alt="Donate via Gitcoin"
                    >
                      <Image
                        width="100%"
                        src="/images/Donate-via-Gitcoin.png"
                      />
                    </ExternalLink>
                    <Text fontSize="lg" mt="2">
                      {t(
                        `We rely on our public-goods business model to continue providing a free, Bankless education!`
                      )}
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
