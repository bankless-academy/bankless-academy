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
} from '@chakra-ui/react'
import styled from '@emotion/styled'
import { useTranslation } from 'react-i18next'

import Footer from 'layout/Footer'
import FeaturedLessons from 'components/FeaturedLessons'
import ExternalLink from 'components/ExternalLink'
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
  DonateIcon,
} from 'components/Icons'
import { HOMEPAGE_BACKGROUND, IS_WHITELABEL } from 'constants/index'
import { Mixpanel } from 'utils/index'
import { useSmallScreen } from 'hooks/index'
import { useState } from 'react'
import OnboardingModal from 'components/OnboardingModal'
import Layout from 'layout/Layout'
import InternalLink from 'components/InternalLink'

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

const PulsingButton = styled(Button)`
  @keyframes pulse {
    0% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.2);
    }
    100% {
      transform: scale(1);
    }
  }
  animation: pulse 2s infinite;
`

const PARTNERS = [
  {
    name: 'Gitcoin',
    image: 'Gitcoin.png',
    link: 'https://www.gitcoin.co/',
  },
  {
    name: 'Optimism',
    image: 'Optimism.svg',
    link: 'https://www.optimism.io/',
  },
  {
    name: '1inch',
    image: '1inch.svg',
    link: 'https://1inch.com/',
  },
  {
    name: 'Zerion',
    image: 'Zerion.svg',
    link: 'https://zerion.io/',
  },
  {
    name: 'RocketPool',
    image: 'RocketPool.svg',
    link: 'https://rocketpool.net/',
  },
]

const COMMUNITY_PARTNERS = [
  {
    name: 'De University of Ethereum',
    image: 'ueth.png',
    link: 'https://ueth.org/',
  },
  {
    name: 'College DAO',
    image: 'CollegeDAO.png',
    link: 'https://collegedao.io/',
  },
]

const IS_PARTNERSHIP_ACTIVACTED = true

const HomePage = (): JSX.Element => {
  const { t } = useTranslation('homepage')
  const [isSmallScreen, isMediumScreen] = useSmallScreen()
  const [isOnboardingModalOpen, setIsOnboardingModalOpen] = useState(false)

  if (IS_WHITELABEL) return <WhitelabelHomepage />
  else
    return (
      <Layout page="INDEX">
        <>
          <Center
            height={isSmallScreen ? '74vh' : '80vh'}
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
              justifyContent="space-evenly"
              height="100%"
              pt="27vh"
              pb={'45px'}
            >
              <Box w="100%" maxW="90%">
                <Image
                  style={{
                    filter: 'drop-shadow( 3px 3px 2px rgba(0, 0, 0, .7))',
                  }}
                  maxW="90%"
                  src="/images/BanklessAcademy.svg"
                  alt="Bankless Academy"
                  m="auto"
                />
                {IS_PARTNERSHIP_ACTIVACTED && (
                  <Box ml="21%" w="79%">
                    <Text
                      fontSize={isSmallScreen ? '20px' : '25px'}
                      mt={isSmallScreen ? '0' : '-15px'}
                      w="100%"
                    >
                      {t('Your crypto journey starts here.')}
                    </Text>
                  </Box>
                )}
              </Box>
              <Box
                bottom="60px"
                height="70px"
                display="flex"
                alignItems="center"
              >
                <InternalLink href={`/lessons`} alt="Explore Lessons">
                  <PulsingButton variant="primaryBig" size="lg">
                    <Box>{t('Start Learning')}</Box>
                  </PulsingButton>
                </InternalLink>
              </Box>
            </Stack>
          </Center>
          {IS_PARTNERSHIP_ACTIVACTED && (
            <Box
              position="relative"
              w="100%"
              bgColor="#1F2023"
              borderBottom="3px solid #423952"
              pt="2"
            >
              <Box
                position="absolute"
                top="-18px"
                left="0"
                width="100%"
                display="flex"
                placeItems="center"
              >
                <Box w="100%" borderBottom="3px solid #423952" />
                <Text
                  fontSize="xl"
                  minW="250px"
                  textAlign="center"
                  color="#9E9E9E"
                >
                  {t('alongside our Partners:')}
                </Text>
                <Box w="100%" borderBottom="3px solid #423952" />
              </Box>
              <Box
                display="flex"
                m="auto"
                justifyContent="center"
                flexWrap="wrap"
                maxWidth="1650px"
                placeContent="space-around"
              >
                {PARTNERS.map((partner) => (
                  <Box
                    key={partner.name}
                    m={isSmallScreen ? '20px 10px' : '30px 20px'}
                  >
                    <ExternalLink href={partner.link}>
                      <Image
                        alt={partner.name}
                        height={isSmallScreen ? '40px' : '50px'}
                        src={`/images/partners/${partner.image}`}
                      />
                    </ExternalLink>
                  </Box>
                ))}
              </Box>
            </Box>
          )}
          <Box
            bgColor="#1F2023"
            p={isSmallScreen ? '2' : '4'}
            overflow="hidden"
            mb={isMediumScreen ? '17px' : '0'}
          >
            <Container maxW="container.lg">
              <Box mt="12">
                <Heading as="h2" size="xl" m="auto">
                  {t(`Start Your Bankless Journey`)}
                </Heading>
                <Box fontSize="lg" mt="6" color="#9E9E9E">
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
                    <Heading
                      display="flex"
                      alignItems="center"
                      gap={4}
                      fontSize="2xl"
                    >
                      <LearnIcon />
                      {t(`Advance Your Knowledge`)}
                    </Heading>
                    <Text fontSize="lg" mt="2" color="#9E9E9E">
                      {t(
                        `From basics to deep dives, discover the world of web3 with content built alongside leading experts.`
                      )}
                    </Text>
                  </Card>
                  <Card>
                    <Heading
                      display="flex"
                      alignItems="center"
                      gap={4}
                      fontSize="2xl"
                    >
                      <QuizIcon />
                      {t(`Test Your Abilities`)}
                    </Heading>
                    <Text fontSize="lg" mt="2" color="#9E9E9E">
                      {t(
                        `Complete activities that test your command of crypto concepts.`
                      )}
                    </Text>
                  </Card>
                  <Card>
                    <Heading
                      display="flex"
                      alignItems="center"
                      gap={4}
                      fontSize="2xl"
                    >
                      <QuestIcon />
                      {t(`Complete Quests`)}
                    </Heading>
                    <Text fontSize="lg" mt="2" color="#9E9E9E">
                      {t(
                        `Put knowledge into action with quests that reward first-hand experience.`
                      )}
                    </Text>
                  </Card>
                  <Card>
                    <Heading
                      display="flex"
                      alignItems="center"
                      gap={4}
                      fontSize="2xl"
                    >
                      <RewardsIcon />
                      {t(`Earn Rewards`)}
                    </Heading>
                    <Text fontSize="lg" mt="2" color="#9E9E9E">
                      {t(
                        `Collect badges for successfully finishing lessons and quests.`
                      )}
                    </Text>
                  </Card>
                </SimpleGrid>
              </Box>
              <Box
                border="1px solid #989898"
                p="8"
                mb="8"
                mt={16}
                borderRadius="lg"
              >
                <Box
                  fontSize="23px"
                  display={isSmallScreen ? 'block' : 'flex'}
                  alignItems="center"
                  textAlign={isSmallScreen ? 'center' : 'unset'}
                >
                  <Box>
                    <NewsletterButton
                      variant="primaryBig"
                      size="lg"
                      onClick={() => {
                        setIsOnboardingModalOpen(true)
                        Mixpanel.track('click_internal_link', {
                          link: 'modal',
                          name: 'Newsletter signup',
                        })
                      }}
                      mr="2"
                    >
                      {t(`Newsletter`)}
                    </NewsletterButton>
                  </Box>
                  <Box
                    ml={isSmallScreen ? '0' : '2'}
                    mt={isSmallScreen ? '4' : '0'}
                    fontSize={isSmallScreen ? 'md' : 'lg'}
                    color="#9E9E9E"
                  >
                    {t(
                      `Sign up for the newsletter to be notified of new lessons and platform updates!`
                    )}
                  </Box>
                </Box>
              </Box>
              <Box m="auto" w="100%" minHeight="550px">
                <Box display="flex" justifyContent="center" position="relative">
                  <ExternalLink
                    href="https://www.instagram.com/reel/DIwJC3lvKw8/"
                    border="1px solid #363636"
                    borderRadius="10px"
                    overflow="hidden"
                  >
                    <Image
                      src="/images/insta_video_preview.jpg"
                      alt="Instagram Video"
                      height="530px"
                      maxWidth="100%"
                    />
                    <Image
                      src="/images/insta_play_button.png"
                      alt="Instagram Video"
                      width="100px"
                      height="100px"
                      position="absolute"
                      top="50%"
                      left="50%"
                      transform="translate(-50%, -50%)"
                    />
                  </ExternalLink>
                </Box>
              </Box>
              <OnboardingModal
                isOpen={isOnboardingModalOpen}
                onClose={() => {
                  setIsOnboardingModalOpen(false)
                }}
                newsletterOnly={true}
              />
              <FeaturedLessons />
              <>
                <Box my={isSmallScreen ? '16' : '8'}>
                  <Heading
                    as="h2"
                    size="xl"
                    mt={isSmallScreen ? '16' : '8'}
                    mb="8"
                  >
                    {t('Community Collaborations')}
                  </Heading>
                  <SimpleGrid
                    columns={{ sm: 1, md: 2, lg: 2 }}
                    gap={6}
                    my="10"
                    mx={isSmallScreen ? '0' : '12'}
                  >
                    {COMMUNITY_PARTNERS.map((partner) => (
                      <Card key={partner.name} alignItems="center">
                        <ExternalLink href={partner.link}>
                          <Image
                            alt={partner.name}
                            maxHeight="70px"
                            src={`/images/partners/${partner.image}`}
                          />
                        </ExternalLink>
                      </Card>
                    ))}
                  </SimpleGrid>
                </Box>
                <Box my="16">
                  <Heading as="h2" size="xl" mt="16" mb="8">
                    {t(`Work With Us!`)}
                  </Heading>
                  <Text fontSize="xl" mb="8" color="#9E9E9E">
                    {t(
                      `From reviewing lessons to partnering with our platform, there are plenty of options for collaborating with Bankless Academy.`
                    )}
                  </Text>
                  <SimpleGrid
                    columns={{ sm: 1, md: 2, lg: 3 }}
                    gap={6}
                    my="10"
                    mx="0"
                  >
                    <Card>
                      <Heading
                        display="flex"
                        alignItems="center"
                        gap={4}
                        fontSize="2xl"
                      >
                        <PencilIcon />
                        {t(`Collaborate On A Lesson`)}
                      </Heading>
                      <Text fontSize="lg" mt="2" color="#9E9E9E">
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
                      <Heading
                        display="flex"
                        alignItems="center"
                        gap={4}
                        fontSize="2xl"
                      >
                        <GraduationCapIcon />
                        {t(`Open Your Own Academy`)}
                      </Heading>
                      <Text fontSize="lg" mt="2" color="#9E9E9E">
                        {t(
                          `Our whitelabel platform has helped DAOs kick-start their community education journey - without any developer knowledge!`
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
                      <Heading
                        display="flex"
                        alignItems="center"
                        gap={4}
                        fontSize="2xl"
                      >
                        <HandshakeIcon />
                        {t(`Partner With Us`)}
                      </Heading>
                      <Text fontSize="lg" mt="2" color="#9E9E9E">
                        {t(`Do you have an interesting value proposition?`)}
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
                      <Heading
                        display="flex"
                        alignItems="center"
                        gap={4}
                        fontSize="2xl"
                      >
                        <EyeIcon />
                        {t(`Improve Our Lessons`)}
                      </Heading>
                      <Text fontSize="lg" mt="2" color="#9E9E9E">
                        {t(
                          `Everyone can help make Bankless Academy better. Provide feedback on lessons or translations and receive an onchain recognition once your feedback is included.`
                        )}
                      </Text>
                    </Card>
                    <Card>
                      <Heading
                        display="flex"
                        alignItems="center"
                        gap={4}
                        fontSize="2xl"
                      >
                        <UsersThreeIcon />
                        {t(`Join Our Team`)}
                      </Heading>
                      <Text fontSize="lg" mt="2" color="#9E9E9E">
                        {t(`Got what it takes to join the Academy Squad?`)}
                        <br />
                        {t(
                          `We want to hear from you if you have a passion for education and web3.`
                        )}
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
                      <Heading
                        display="flex"
                        alignItems="center"
                        gap={4}
                        fontSize="2xl"
                      >
                        <DonateIcon />
                        {t(`Support Us`)}
                      </Heading>
                      <Box mt="2">
                        <ExternalLink
                          href="https://bankless.ac/giveth"
                          alt="Donate via Giveth"
                        >
                          <Image
                            width="100%"
                            src="/images/Donate-via-Giveth.png"
                          />
                        </ExternalLink>
                      </Box>
                      <Text fontSize="lg" mt="2" color="#9E9E9E">
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
      </Layout>
    )
}

export default HomePage
