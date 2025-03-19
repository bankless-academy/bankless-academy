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
  Tag,
  Heading,
  Button,
} from '@chakra-ui/react'
import { useEffect, useState } from 'react'

import { MetaData } from 'components/Head'
import Layout from 'layout/Layout'
import ExternalLink from 'components/ExternalLink'
import { ExploreType } from 'entities/explore'
import { fetchBE } from 'utils/server'
import Card from 'components/Card'
import Helper from 'components/Helper'
import { useSmallScreen } from 'hooks'
import { Plus } from '@phosphor-icons/react'
export const pageMeta: MetaData = {
  title: 'Explore Apps',
  description: 'The best apps for your crypto journey — all in one place.',
}

interface ExplorePageProps {
  pageMeta: MetaData
  initialData: ExploreType[]
}

export const getStaticProps: GetStaticProps<ExplorePageProps> = async () => {
  try {
    const explore = await fetchBE(
      `https://app.banklessacademy.com/api/cache/explore`
    )

    return {
      props: {
        pageMeta,
        initialData: explore?.data || [],
      },
    }
  } catch (error) {
    console.error('Error fetching explore data:', error)
    return {
      props: {
        pageMeta,
        initialData: [],
      },
    }
  }
}

interface GroupedExploreItems {
  [category: string]: ExploreType[]
}

interface GroupedByTypeItems {
  [type: string]: ExploreType[]
}

function ExplorePage({ initialData }: ExplorePageProps): JSX.Element {
  const [groupedItems, setGroupedItems] = useState<GroupedExploreItems>({})
  const [groupedByType, setGroupedByType] = useState<GroupedByTypeItems>({})
  const [featuredItems, setFeaturedItems] = useState<ExploreType[]>([])
  const [isSmallScreen] = useSmallScreen()
  const [error, setError] = useState<string>('')

  useEffect(() => {
    const processData = () => {
      try {
        // Set featured items
        const featured = initialData.filter(
          (item: ExploreType) => item.isFeatured
        )
        // Sort by isFeatured in ascending order
        setFeaturedItems(featured.sort((a, b) => a.isFeatured - b.isFeatured))

        // Group all items by category for display
        const grouped = initialData.reduce(
          (acc: GroupedExploreItems, item: ExploreType) => {
            const category = item.category || 'Other'
            if (!acc[category]) {
              acc[category] = []
            }
            if (!item.isFeatured) {
              acc[category].push(item)
            }
            return acc
          },
          {}
        )
        setGroupedItems(grouped)

        // Group all items by type for tabs
        const groupedByType = initialData.reduce(
          (acc: GroupedByTypeItems, item: ExploreType) => {
            const type = item.type || 'Other'
            if (!acc[type]) {
              acc[type] = []
            }
            if (!item.isFeatured) {
              acc[type].push(item)
            }
            return acc
          },
          {}
        )
        setGroupedByType(groupedByType)
      } catch (error) {
        console.error('Error processing explore data:', error)
        setError('Failed to process activities. Please try again later.')
      }
    }

    processData()
  }, [initialData])

  const renderRecommendedCard = (item: ExploreType) => (
    <Card key={item.product} w="100%" overflow="hidden">
      <ExternalLink href={item.link} alt={item.product}>
        <Box display="flex" borderRadius="lg" overflow="hidden">
          {/* Image container */}
          <Box position="relative" height="100px" aspectRatio="1">
            <Image
              src={item.image}
              alt={item.product}
              w="100%"
              h="100%"
              objectFit="cover"
              bg="transparent"
            />
          </Box>
          {/* Content container */}
          <Box flex="1" p={4} bg="transparent" borderLeft="1px solid #524f4f">
            <Text fontWeight="bold" mb={1} noOfLines={1} color="white">
              {item.product}
            </Text>
            <Text
              fontSize="xs"
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
          </Box>
        </Box>
      </ExternalLink>
    </Card>
  )

  // Helper function to remove emojis from the start of a string
  const removeLeadingEmojis = (str: string) => {
    // Remove all emojis and variation selectors at the start
    return str.replace(/^[^\p{L}\p{N}\p{P}\p{Z}]+/gu, '').trim()
  }

  // Helper function to sort types ignoring leading emojis
  const sortTypes = (a: string, b: string) => {
    const cleanA = removeLeadingEmojis(a)
    const cleanB = removeLeadingEmojis(b)
    return cleanA.localeCompare(cleanB, undefined, { sensitivity: 'base' })
  }

  return (
    <Layout page="EXPLORE">
      <Box minH="100vh">
        {error && (
          <Text color="red.500" textAlign="center" mb={4}>
            {error}
          </Text>
        )}
        <Heading
          as="h1"
          size="xl"
          textAlign="center"
          pt={isSmallScreen ? '12px' : '16px'}
        >
          <Box
            display="inline-block"
            justifyContent="center"
            position="relative"
          >
            Explore Apps
            <Box position="absolute" top="-4px" right="-10px">
              <Helper
                title="Disclaimer"
                definition={
                  <>
                    <Box mb="4">
                      <Text fontWeight="bold">
                        Always do your own research.
                      </Text>
                      Blockchain is a new technology and most applications are
                      new. Before depositing any large quantities of money, make
                      sure you understand the risks.
                    </Box>
                  </>
                }
              />
            </Box>
          </Box>
        </Heading>
        <Heading
          as="h2"
          size="md"
          color="#9E9E9E"
          fontWeight="normal"
          textAlign="center"
          mt={4}
          mb={6}
        >
          The best apps for your crypto journey — all in one place.
        </Heading>
        <SimpleGrid spacing={4} minChildWidth="300px" my={8}>
          {featuredItems.map((item) => (
            <Card key={item.product} w="100%" overflow="hidden">
              <ExternalLink href={item.link} alt={item.product}>
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
                <Box bg="transparent" p={4} borderTop="1px solid #524f4f">
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
            </Card>
          ))}
        </SimpleGrid>
        <Tabs variant="soft-rounded" colorScheme="purple" defaultIndex={0}>
          <Box mt={12}>
            <TabList
              display="flex"
              flexWrap="wrap"
              justifyContent="center"
              gap={2}
              my={4}
            >
              <Tab _selected={{ bg: '#3f3154' }} color="white !important">
                All
              </Tab>
              {Object.keys(groupedByType)
                .sort(sortTypes)
                .map((type) => (
                  <Tab
                    _selected={{ bg: '#3f3154' }}
                    color="white !important"
                    key={type}
                  >
                    {type}
                  </Tab>
                ))}
              <ExternalLink href="/feature-request" ml={2}>
                <Button leftIcon={<Plus />} variant="secondary">
                  Submit an App
                </Button>
              </ExternalLink>
            </TabList>
          </Box>
          <TabPanels>
            <TabPanel px="0">
              <Box maxW="1400px" mx="auto">
                <SimpleGrid
                  columns={{ base: 1, lg: 2 }}
                  spacing={8}
                  alignItems="flex-start"
                >
                  {/* Left Column */}
                  <Box display={{ base: 'none', lg: 'block' }}>
                    {Object.entries(groupedItems)
                      .sort(([a], [b]) => a.localeCompare(b))
                      .filter((_, index) => index % 2 === 0)
                      .map(([category, items]) => (
                        <Box key={category} mb={4}>
                          <Box
                            height="102px"
                            display="flex"
                            alignItems="center"
                            justifyContent="center"
                            mb={4}
                          >
                            <Text
                              fontSize="2xl"
                              fontWeight="bold"
                              color="white"
                            >
                              {category}
                            </Text>
                          </Box>
                          <SimpleGrid
                            spacing={4}
                            templateColumns={{
                              base: 'repeat(1, 1fr)',
                            }}
                          >
                            {items
                              .sort((a, b) =>
                                a.product.localeCompare(b.product)
                              )
                              .map(renderRecommendedCard)}
                          </SimpleGrid>
                        </Box>
                      ))}
                  </Box>
                  {/* Right Column */}
                  <Box display={{ base: 'none', lg: 'block' }}>
                    {Object.entries(groupedItems)
                      .sort(([a], [b]) => a.localeCompare(b))
                      .filter((_, index) => index % 2 === 1)
                      .map(([category, items]) => (
                        <Box key={category} mb={4}>
                          <Box
                            height="102px"
                            display="flex"
                            alignItems="center"
                            justifyContent="center"
                            mb={4}
                          >
                            <Text
                              fontSize="2xl"
                              fontWeight="bold"
                              color="white"
                            >
                              {category}
                            </Text>
                          </Box>
                          <SimpleGrid
                            spacing={4}
                            templateColumns={{
                              base: 'repeat(1, 1fr)',
                            }}
                          >
                            {items
                              .sort((a, b) =>
                                a.product.localeCompare(b.product)
                              )
                              .map(renderRecommendedCard)}
                          </SimpleGrid>
                        </Box>
                      ))}
                  </Box>
                  {/* Single Column for Mobile */}
                  <Box
                    display={{ base: 'block', lg: 'none' }}
                    gridColumn="1/-1"
                  >
                    {Object.entries(groupedItems)
                      .sort(([a], [b]) => a.localeCompare(b))
                      .map(([category, items]) => (
                        <Box key={category} mb={4}>
                          <Box
                            height="48px"
                            display="flex"
                            alignItems="center"
                            justifyContent="center"
                            mb={4}
                          >
                            <Text
                              fontSize="2xl"
                              fontWeight="bold"
                              color="white"
                            >
                              {category}
                            </Text>
                          </Box>
                          <SimpleGrid
                            spacing={4}
                            templateColumns={{
                              base: 'repeat(1, 1fr)',
                            }}
                          >
                            {items
                              .sort((a, b) =>
                                a.product.localeCompare(b.product)
                              )
                              .map(renderRecommendedCard)}
                          </SimpleGrid>
                        </Box>
                      ))}
                  </Box>
                </SimpleGrid>
              </Box>
            </TabPanel>
            {Object.entries(groupedByType)
              .sort(([a], [b]) => sortTypes(a, b))
              .map(([type, typeItems]) => (
                <TabPanel key={type} px="0">
                  <Box maxW="1400px" mx="auto">
                    <SimpleGrid
                      columns={{ base: 1, lg: 2 }}
                      spacing={8}
                      alignItems="flex-start"
                    >
                      {/* Group items by category first */}
                      {(() => {
                        // Group items by category
                        const categoryGroups = typeItems.reduce(
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

                        // Split categories into two columns
                        const categories = Object.entries(categoryGroups).sort(
                          ([a], [b]) => a.localeCompare(b)
                        )

                        return (
                          <>
                            {/* Left Column */}
                            <Box display={{ base: 'none', lg: 'block' }}>
                              {categories
                                .filter((_, index) => index % 2 === 0)
                                .map(([category, items]) => (
                                  <Box key={category} mb={4}>
                                    <Box
                                      height="102px"
                                      display="flex"
                                      alignItems="center"
                                      justifyContent="center"
                                      mb={4}
                                    >
                                      <Text
                                        fontSize="2xl"
                                        fontWeight="bold"
                                        color="white"
                                      >
                                        {category}
                                      </Text>
                                    </Box>
                                    <SimpleGrid
                                      spacing={4}
                                      templateColumns={{
                                        base: 'repeat(1, 1fr)',
                                      }}
                                    >
                                      {items
                                        .sort((a, b) =>
                                          a.product.localeCompare(b.product)
                                        )
                                        .map(renderRecommendedCard)}
                                    </SimpleGrid>
                                  </Box>
                                ))}
                            </Box>
                            {/* Right Column */}
                            <Box display={{ base: 'none', lg: 'block' }}>
                              {categories
                                .filter((_, index) => index % 2 === 1)
                                .map(([category, items]) => (
                                  <Box key={category} mb={4}>
                                    <Box
                                      height="102px"
                                      display="flex"
                                      alignItems="center"
                                      justifyContent="center"
                                      mb={4}
                                    >
                                      <Text
                                        fontSize="2xl"
                                        fontWeight="bold"
                                        color="white"
                                      >
                                        {category}
                                      </Text>
                                    </Box>
                                    <SimpleGrid
                                      spacing={4}
                                      templateColumns={{
                                        base: 'repeat(1, 1fr)',
                                      }}
                                    >
                                      {items
                                        .sort((a, b) =>
                                          a.product.localeCompare(b.product)
                                        )
                                        .map(renderRecommendedCard)}
                                    </SimpleGrid>
                                  </Box>
                                ))}
                            </Box>
                            {/* Single Column for Mobile */}
                            <Box
                              display={{ base: 'block', lg: 'none' }}
                              gridColumn="1/-1"
                            >
                              {categories
                                .sort(([a], [b]) => a.localeCompare(b))
                                .map(([category, items]) => (
                                  <Box key={category} mb={4}>
                                    <Box
                                      height="48px"
                                      display="flex"
                                      alignItems="center"
                                      justifyContent="center"
                                      mb={4}
                                    >
                                      <Text
                                        fontSize="2xl"
                                        fontWeight="bold"
                                        color="white"
                                      >
                                        {category}
                                      </Text>
                                    </Box>
                                    <SimpleGrid
                                      spacing={4}
                                      templateColumns={{
                                        base: 'repeat(1, 1fr)',
                                      }}
                                    >
                                      {items
                                        .sort((a, b) =>
                                          a.product.localeCompare(b.product)
                                        )
                                        .map(renderRecommendedCard)}
                                    </SimpleGrid>
                                  </Box>
                                ))}
                            </Box>
                          </>
                        )
                      })()}
                    </SimpleGrid>
                  </Box>
                </TabPanel>
              ))}
          </TabPanels>
        </Tabs>
      </Box>
    </Layout>
  )
}

export default ExplorePage
