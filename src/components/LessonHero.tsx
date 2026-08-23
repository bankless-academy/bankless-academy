// Server-rendered stand-in for the interactive app on /lessons/[slug]: it is
// what the served HTML carries where the app will mount (giving the page its
// <h1> for crawlers), and what the visitor sees until the web3 chunk loads.
// It deliberately MIMICS the app chrome — the black top bar with the logo and
// the 230px desktop rail — so the moment the real Nav/rail/lesson mount, the
// frame stays put and only the content area changes; without this the whole
// layout visibly "appeared" half a second after first paint.
//
// Dimensions mirrored from the real chrome: Nav bar is black,
// borderBottom #222222, logo 40px (31px on small screens); the rail is
// menuBarWidth = 230px in layout/Layout.tsx, shown above 800px — the same
// breakpoint useSmallScreen uses, so hide/show flips exactly with it.
//
// Contract: NOTHING here may read localStorage, matchMedia, wallet or router
// state — it renders identically on server and client (responsive styling is
// CSS-only media queries).
import { Box, Image } from '@chakra-ui/react'
import React from 'react'

import { LessonType } from 'entities/lesson'

const RAIL_QUERY = '@media (min-width: 801px)'

const SkeletonBlock = ({
  h,
  mb,
}: {
  h: string
  mb?: string
}): JSX.Element => (
  <Box
    h={h}
    mb={mb}
    mx="4"
    borderRadius="10px"
    bg="whiteAlpha.100"
    sx={{ animation: 'pulse 1.6s ease-in-out infinite' }}
  />
)

const LessonHero = ({ lesson }: { lesson?: LessonType }): JSX.Element => (
  <Box bg="#161515" color="#f0eeff" minH="100vh">
    {/* top bar, same box as Nav */}
    <Box
      bgColor="black"
      borderBottom="1px solid #222222"
      display="flex"
      alignItems="center"
      h="65px"
      px="4"
    >
      <Image
        src="/images/BanklessAcademy.svg"
        alt="Bankless Academy"
        h={{ base: '31px', md: '40px' }}
      />
    </Box>
    <Box display="flex">
      {/* desktop rail placeholder, same width as menuBarWidth */}
      <Box
        w="230px"
        flexShrink={0}
        pt="4"
        display="none"
        sx={{ [RAIL_QUERY]: { display: 'block' } }}
      >
        <SkeletonBlock h="268px" mb="16px" />
        <SkeletonBlock h="48px" mb="8px" />
        <SkeletonBlock h="48px" mb="8px" />
        <SkeletonBlock h="48px" mb="8px" />
        <SkeletonBlock h="48px" />
      </Box>
      {/* content area — same divider the app's Layout draws on its content
          box (2px #3D3838), so the line is continuous from first paint
          through the article section below */}
      <Box
        flex="1"
        minW="0"
        sx={{ [RAIL_QUERY]: { borderInlineStart: '2px solid #3D3838' } }}
      >
        <Box maxW="container.xl" m="auto" px={5} py={{ base: 8, md: 12 }}>
          {lesson?.lessonImageLink && (
            <Image
              src={lesson.lessonImageLink}
              alt={lesson.name}
              maxW={{ base: '100%', md: '600px' }}
              borderRadius="12px"
              mb={8}
            />
          )}
          <Box
            as="h1"
            fontSize={{ base: '2rem', md: '2.7rem' }}
            fontWeight="700"
            lineHeight="1.15"
            mb={4}
          >
            {lesson?.name}
          </Box>
          {lesson?.description && (
            <Box fontSize="1.15rem" opacity={0.85} maxW="860px" mb={8}>
              {lesson.description}
            </Box>
          )}
          {/* where the Start button will land once the app mounts */}
          <Box
            w="200px"
            maxW="100%"
            h="48px"
            borderRadius="24px"
            bg="whiteAlpha.200"
            sx={{ animation: 'pulse 1.6s ease-in-out infinite' }}
          />
        </Box>
      </Box>
    </Box>
  </Box>
)

export default LessonHero
