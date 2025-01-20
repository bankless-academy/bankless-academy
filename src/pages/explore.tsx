import { GetStaticProps } from 'next'
import {
  Box,
  SimpleGrid,
  Text,
  Image,
  Tabs,
  TabList,
  TabPanels,
  TabPanel,
  Tab,
  Spinner,
  Center,
} from '@chakra-ui/react'
import { useEffect, useState } from 'react'

import { MetaData } from 'components/Head'
import Layout from 'layout/Layout'
import { StyledHeading } from 'components/LessonCards'
import ExternalLink from 'components/ExternalLink'

export const pageMeta: MetaData = {
  title: 'Explore',
}

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: { pageMeta },
  }
}

const ACTIVITIES = [
  {
    name: 'Zora',
    image: 'https://zora.co/assets/image/og-image.jpg',
    // link: 'https://zora.co/invite/banklessacademy',
    link: 'https://zora.co/@banklessacademy?referrer=0xe1887ff140bfa9d3b45d0b2077b7471124acd242',
  },
  {
    name: 'Pods',
    image: 'https://pods.media/api/carousel',
    link: 'https://pods.media/?referrer=0xe1887fF140BfA9D3b45D0B2077b7471124acD242',
  },
]

interface DApp {
  id: string
  category: string
  content: {
    title: string
    short_description: string
    image_url: string
    target_url: string
    cta_text: string
    creator_name: string
    creator_image_url: string
  }
}

interface TrendingDApps {
  [category: string]: DApp[]
}

function ExplorePage(): JSX.Element {
  const [trendingDApps, setTrendingDApps] = useState<TrendingDApps>({})
  const [error, setError] = useState<string>('')
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchDApps = async () => {
      try {
        setIsLoading(true)
        const response = await fetch('/api/explore')
        if (!response.ok) {
          throw new Error('Failed to fetch dApps')
        }
        const data = await response.json()
        setTrendingDApps(data.trending || {})
      } catch (error) {
        console.error('Error fetching dApps:', error)
        setError('Failed to load activities. Please try again later.')
      } finally {
        setIsLoading(false)
      }
    }

    fetchDApps()
  }, [])

  if (isLoading) {
    return (
      <Layout page="EXPLORE">
        <Center h="50vh">
          <Spinner size="xl" />
        </Center>
      </Layout>
    )
  }

  const renderDAppCard = (dapp: DApp) => (
    <Box
      key={dapp.id}
      w="100%"
      bg="gray.100"
      borderRadius="lg"
      overflow="hidden"
    >
      <ExternalLink href={dapp.content.target_url}>
        <Box position="relative" h="200px">
          <Image
            src={dapp.content.image_url}
            alt={dapp.content.title}
            w="100%"
            h="100%"
            objectFit="cover"
            bg="white"
          />
        </Box>
        <Box bg="#000000" p={4} h="120px">
          <Text fontWeight="bold" mb={1} noOfLines={1} color="white">
            {dapp.content.title}
          </Text>
          <Text
            fontSize="sm"
            mb={2}
            noOfLines={2}
            sx={{
              display: '-webkit-box',
              WebkitBoxOrient: 'vertical',
              WebkitLineClamp: 2,
              overflow: 'hidden',
              textOverflow: 'ellipsis',
            }}
            minH="42px"
            color="#9E9E9E"
          >
            {dapp.content.short_description}
          </Text>
          <Box display="flex" alignItems="center">
            <Image
              src={dapp.content.creator_image_url}
              alt={dapp.content.creator_name}
              boxSize="20px"
              mr={2}
            />
            <Text fontSize="sm" noOfLines={1}>
              {dapp.content.creator_name}
            </Text>
          </Box>
        </Box>
      </ExternalLink>
    </Box>
  )

  return (
    <Layout page="EXPLORE">
      <Box>
        {error && (
          <Text color="red.500" textAlign="center" mb={4}>
            {error}
          </Text>
        )}
        <StyledHeading as="h1" size="2xl" textAlign="center" my={8}>
          Featured Activities
        </StyledHeading>
        <SimpleGrid spacing={4} minChildWidth="300px">
          {ACTIVITIES.map((activity) => (
            <Box
              key={activity.name}
              w="100%"
              bg="gray.100"
              borderRadius="lg"
              overflow="hidden"
            >
              <ExternalLink href={activity.link}>
                <Box position="relative">
                  <Image
                    src={activity.image}
                    alt={activity.name}
                    w="100%"
                    h="100%"
                    objectFit="cover"
                    bg="white"
                    aspectRatio="1200/630"
                  />
                </Box>
                <Box bg="#000000" p={4}>
                  <Text fontWeight="bold" color="white">
                    {activity.name}
                  </Text>
                </Box>
              </ExternalLink>
            </Box>
          ))}
        </SimpleGrid>

        <StyledHeading as="h1" size="2xl" textAlign="center" my={8}>
          Trending Activities
        </StyledHeading>
        <Tabs colorScheme="purple">
          <Box overflowY="auto">
            <TabList>
              {Object.keys(trendingDApps).map((category) => (
                <Tab key={category} mx={2} whiteSpace="nowrap">
                  {category}
                </Tab>
              ))}
            </TabList>
          </Box>
          <TabPanels>
            {Object.entries(trendingDApps).map(([category, dapps]) => (
              <TabPanel key={category}>
                <SimpleGrid
                  spacing={4}
                  templateColumns={{
                    base: 'repeat(1, 1fr)',
                    md: 'repeat(2, 1fr)',
                    lg: 'repeat(4, 1fr)',
                  }}
                  maxW="1400px"
                  mx="auto"
                >
                  {dapps.map(renderDAppCard)}
                </SimpleGrid>
              </TabPanel>
            ))}
          </TabPanels>
        </Tabs>
      </Box>
    </Layout>
  )
}

export default ExplorePage
