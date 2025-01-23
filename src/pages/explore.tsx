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
} from '@chakra-ui/react'
import { useEffect, useState } from 'react'

import { MetaData } from 'components/Head'
import Layout from 'layout/Layout'
import { StyledHeading } from 'components/LessonCards'
import ExternalLink from 'components/ExternalLink'
import { ExploreType } from 'entities/explore'
import { POTION_API } from 'constants/index'
import { fetchBE } from 'utils/server'

export const pageMeta: MetaData = {
  title: 'Explore',
}

interface ExplorePageProps {
  pageMeta: MetaData
  initialData: ExploreType[]
}

export const getStaticProps: GetStaticProps<ExplorePageProps> = async () => {
  try {
    const explore = await fetchBE(
      `${POTION_API}/table?id=8f2f600b38a44cbb98f7fd240686c27a`
    )
    const initialData = explore
      .map((e: any) => ({
        product: e.fields.Product,
        image: e.fields.Image,
        isActif: e.fields['Is Actif'],
        isFeatured: e.fields['Is Featured'],
        category: e.fields.Category?.[0],
        description: e.fields.Description,
        type: e.fields.Type,
        link: e.fields.Link,
      }))
      .filter((item: ExploreType) => item.isActif)

    return {
      props: {
        pageMeta,
        initialData,
      },
      revalidate: 60, // Revalidate every minute
    }
  } catch (error) {
    console.error('Error fetching explore data:', error)
    return {
      props: {
        pageMeta,
        initialData: [],
      },
      revalidate: 60,
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
  const [error, setError] = useState<string>('')

  useEffect(() => {
    const processData = () => {
      try {
        // Set featured items
        const featured = initialData.filter(
          (item: ExploreType) => item.isFeatured
        )
        setFeaturedItems(featured)

        // Group all items by category for display (including featured)
        const grouped = initialData.reduce(
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

        // Group all items by type for tabs (including featured)
        const groupedByType = initialData.reduce(
          (acc: GroupedByTypeItems, item: ExploreType) => {
            const type = item.type || 'Other'
            if (!acc[type]) {
              acc[type] = []
            }
            acc[type].push(item)
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
    <Box
      key={item.product}
      w="100%"
      bg="transparent"
      borderRadius="lg"
      overflow="hidden"
    >
      <ExternalLink href={item.link}>
        <Box display="flex" bg="#000000" borderRadius="lg" overflow="hidden">
          {/* Image container */}
          <Box position="relative" height="108px" aspectRatio="1">
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
          <Box flex="1" p={4}>
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
          </Box>
        </Box>
      </ExternalLink>
    </Box>
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
        <StyledHeading as="h1" size="2xl" textAlign="center" my={8}>
          Featured Apps
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
          Recommended Apps
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
              {Object.keys(groupedByType)
                .sort(sortTypes)
                .map((type) => (
                  <Tab color="white" key={type}>
                    {type}
                  </Tab>
                ))}
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
                  <Box>
                    {Object.entries(groupedItems)
                      .sort(([a], [b]) => a.localeCompare(b))
                      .filter((_, index) => index % 2 === 0)
                      .map(([category, items]) => (
                        <Box key={category} mb={8}>
                          <Text
                            fontSize="xl"
                            fontWeight="bold"
                            color="white"
                            mb={4}
                          >
                            {category}
                          </Text>
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
                  <Box>
                    {Object.entries(groupedItems)
                      .sort(([a], [b]) => a.localeCompare(b))
                      .filter((_, index) => index % 2 === 1)
                      .map(([category, items]) => (
                        <Box key={category} mb={8}>
                          <Text
                            fontSize="xl"
                            fontWeight="bold"
                            color="white"
                            mb={4}
                          >
                            {category}
                          </Text>
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
                            <Box>
                              {categories
                                .filter((_, index) => index % 2 === 0)
                                .map(([category, items]) => (
                                  <Box key={category} mb={8}>
                                    <Text
                                      fontSize="xl"
                                      fontWeight="bold"
                                      color="white"
                                      mb={4}
                                    >
                                      {category}
                                    </Text>
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
                            <Box>
                              {categories
                                .filter((_, index) => index % 2 === 1)
                                .map(([category, items]) => (
                                  <Box key={category} mb={8}>
                                    <Text
                                      fontSize="xl"
                                      fontWeight="bold"
                                      color="white"
                                      mb={4}
                                    >
                                      {category}
                                    </Text>
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
