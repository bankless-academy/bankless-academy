import React from 'react'
import { Box, Heading } from '@chakra-ui/react'

// import { StyledHeading } from 'components/LessonCards'
import { useSmallScreen } from 'hooks/index'

interface Term {
  id: string
  name: string
  definition: string
}

interface GlossaryProps {
  terms: Term[]
}

const Glossary: React.FC<GlossaryProps> = ({ terms }) => {
  const [isSmallScreen] = useSmallScreen()
  const groupedTerms: { [key: string]: Term[] } = {}
  terms.forEach((term) => {
    let firstLetter = term.name.charAt(0).toUpperCase()
    if (parseInt(firstLetter)) firstLetter = 'number'
    if (!groupedTerms[firstLetter]) {
      groupedTerms[firstLetter] = []
    }
    groupedTerms[firstLetter].push(term)
  })

  return (
    <Box position="relative">
      <Box
        position="fixed"
        top="80px"
        right="8px"
        h={isSmallScreen ? 'calc(100% - 160px)' : 'calc(100% - 90px)'}
        display="grid"
        overflowY="scroll"
        overflowX="hidden"
        fontWeight="bold"
        w="34px"
      >
        <Box w="16px" display="grid" textAlign="center">
          {Object.keys(groupedTerms).map((letter) => (
            <a key={letter} href={`#section-${letter}`}>
              <Box minH="30px">{letter.replace('number', '#')}</Box>
            </a>
          ))}
        </Box>
      </Box>
      <Box
        m="10"
        pr="2"
        ml={isSmallScreen ? '20px' : '40px'}
        mt="0"
        maxW="1024px"
      >
        <Heading
          as="h1"
          size="xl"
          textAlign="center"
          pt={isSmallScreen ? '12px' : '16px'}
        >
          Glossary
        </Heading>
        {Object.keys(groupedTerms).map((letter) => (
          <Box key={letter} id={`section-${letter}`}>
            <Box
              as="h2"
              fontSize="3xl"
              fontWeight="bold"
              pt="8"
              mb={'8'}
              mt="4"
              borderBottom="2px solid #B85FF1"
            >
              {letter.replace('number', '#')}
            </Box>
            {groupedTerms[letter].map((term) => (
              <React.Fragment key={term.id}>
                <Box
                  as="h3"
                  fontSize="2xl"
                  fontWeight="bold"
                  id={term.id}
                  mt={8}
                  mb={6}
                >
                  {term.name}
                </Box>
                <Box mb={8} color="#9E9E9E">
                  {term.definition}
                </Box>
              </React.Fragment>
            ))}
          </Box>
        ))}
      </Box>
    </Box>
  )
}

export default Glossary
