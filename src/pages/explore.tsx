import { GetStaticProps } from 'next'
import {
  Box,
  SimpleGrid,
  Text,
  Image,
  Center,
  Tabs,
  TabList,
  TabPanels,
  TabPanel,
  Tab,
  Tag,
} from '@chakra-ui/react'
import { useEffect, useState } from 'react'

import { MetaData } from 'components/Head'
import Layout from 'layout/Layout'
import { StyledHeading } from 'components/LessonCards'
import ExternalLink from 'components/ExternalLink'
import { ExploreType } from 'entities/explore'

export const pageMeta: MetaData = {
  title: 'Explore',
}

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: { pageMeta },
  }
}

interface GroupedExploreItems {
  [category: string]: ExploreType[]
}

function ExplorePage(): JSX.Element {
  const [groupedItems, setGroupedItems] = useState<GroupedExploreItems>({})
  const [featuredItems, setFeaturedItems] = useState<ExploreType[]>([])
  const [error, setError] = useState<string>('')
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchExploreItems = async () => {
      try {
        setIsLoading(true)
        const response = await fetch('/api/get/explore')
        if (!response.ok) {
          throw new Error('Failed to fetch explore items')
        }
        const data = await response.json()
        // Only show active items
        const activeItems = data.filter((item: ExploreType) => item.isActif)

        // Set featured items
        const featured = activeItems.filter(
          (item: ExploreType) => item.isFeatured
        )
        setFeaturedItems(featured)

        // Group non-featured items by category
        const nonFeatured = activeItems.filter(
          (item: ExploreType) => !item.isFeatured
        )
        const grouped = nonFeatured.reduce(
          (acc: GroupedExploreItems, item: ExploreType) => {
            const category = item.category || 'Other'
            if (!acc[category]) {
              acc[category] = []
            }
            acc[category].push(item)
            return acc
          },
          {}
        )
        setGroupedItems(grouped)
      } catch (error) {
        console.error('Error fetching explore items:', error)
        setError('Failed to load activities. Please try again later.')
      } finally {
        setIsLoading(false)
      }
    }

    fetchExploreItems()
  }, [])

  if (isLoading) {
    return (
      <Layout page="EXPLORE">
        <Center h="50vh" minH="100vh">
          <Image
            margin="auto"
            paddingTop="200px"
            width="250px"
            src="/loading_purple.svg"
          />
        </Center>
      </Layout>
    )
  }

  const renderExploreCard = (item: ExploreType) => (
    <Box
      key={item.product}
      w="100%"
      bg="transparent"
      borderRadius="lg"
      overflow="hidden"
    >
      <ExternalLink href={item.link}>
        <Box position="relative" paddingBottom="100%" overflow="hidden">
          <Image
            src={item.image}
            alt={item.product}
            position="absolute"
            top={0}
            left={0}
            w="100%"
            h="100%"
            objectFit="cover"
            bg="transparent"
          />
        </Box>
        <Box bg="#000000" p={4}>
          <Text fontWeight="bold" mb={1} noOfLines={1} color="white">
            {item.product}
          </Text>
          <Text
            fontSize="xs"
            mb={2}
            noOfLines={2}
            sx={{
              display: '-webkit-box',
              WebkitBoxOrient: 'vertical',
              WebkitLineClamp: 2,
              overflow: 'hidden',
              textOverflow: 'ellipsis',
            }}
            minH="40px"
            color="#9E9E9E"
          >
            {item.description}
          </Text>
          <Box display="flex" alignItems="center" mb={2} gap={2}>
            <Tag size="sm" colorScheme="purple" variant="outline">
              {item.category}
            </Tag>
          </Box>
        </Box>
      </ExternalLink>
    </Box>
  )

  return (
    <Layout page="EXPLORE">
      <Box minH="100vh">
        {error && (
          <Text color="red.500" textAlign="center" mb={4}>
            {error}
          </Text>
        )}
        <StyledHeading as="h1" size="2xl" textAlign="center" my={8}>
          Featured Activities
        </StyledHeading>
        <SimpleGrid spacing={4} minChildWidth="300px" my={8}>
          {featuredItems
            .sort((a, b) => a.product.localeCompare(b.product))
            .map((item) => (
              <Box
                key={item.product}
                w="100%"
                bg="transparent"
                borderRadius="lg"
                overflow="hidden"
              >
                <ExternalLink href={item.link}>
                  <Box position="relative">
                    <Image
                      src={item.image}
                      alt={item.product}
                      w="100%"
                      h="100%"
                      objectFit="cover"
                      bg="transparent"
                      aspectRatio="1200/630"
                    />
                  </Box>
                  <Box bg="#000000" p={4}>
                    <Text fontWeight="bold" mb={1} noOfLines={1} color="white">
                      {item.product}
                    </Text>
                    <Text
                      fontSize="xs"
                      mb={2}
                      noOfLines={2}
                      sx={{
                        display: '-webkit-box',
                        WebkitBoxOrient: 'vertical',
                        WebkitLineClamp: 2,
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                      }}
                      minH="40px"
                      color="#9E9E9E"
                    >
                      {item.description}
                    </Text>
                    <Box display="flex" alignItems="center" mb={2} gap={2}>
                      <Tag size="sm" colorScheme="purple" variant="outline">
                        {item.category}
                      </Tag>
                    </Box>
                  </Box>
                </ExternalLink>
              </Box>
            ))}
        </SimpleGrid>

        <StyledHeading as="h1" size="2xl" textAlign="center" my={8}>
          Recommended Activities
        </StyledHeading>
        <Tabs variant="soft-rounded" colorScheme="purple" defaultIndex={0}>
          <Box mt={8}>
            <TabList
              display="flex"
              flexWrap="wrap"
              justifyContent="center"
              gap={2}
              mb={4}
            >
              <Tab color="white">All</Tab>
              {Object.keys(groupedItems)
                .sort((a, b) => a.localeCompare(b))
                .map((category) => (
                  <Tab color="white" key={category}>
                    {category}
                  </Tab>
                ))}
            </TabList>
          </Box>
          <TabPanels>
            <TabPanel>
              <SimpleGrid
                spacing={4}
                templateColumns={{
                  base: 'repeat(2, 1fr)',
                  md: 'repeat(3, 1fr)',
                  lg: 'repeat(5, 1fr)',
                }}
                maxW="1400px"
                mx="auto"
              >
                {Object.values(groupedItems)
                  .flat()
                  .sort((a, b) => a.product.localeCompare(b.product))
                  .map(renderExploreCard)}
              </SimpleGrid>
            </TabPanel>
            {Object.entries(groupedItems)
              .sort(([a], [b]) => a.localeCompare(b))
              .map(([category, items]) => (
                <TabPanel key={category}>
                  <SimpleGrid
                    spacing={4}
                    templateColumns={{
                      base: 'repeat(2, 1fr)',
                      md: 'repeat(3, 1fr)',
                      lg: 'repeat(5, 1fr)',
                    }}
                    maxW="1400px"
                    mx="auto"
                  >
                    {items
                      .sort((a, b) => a.product.localeCompare(b.product))
                      .map(renderExploreCard)}
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
