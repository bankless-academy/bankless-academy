import { Box, Container, Image } from '@chakra-ui/react'
import styled from '@emotion/styled'

import Footer from 'layout/Footer'
import { HOMEPAGE_BACKGROUND } from 'constants/index'
import FeaturedLessons from 'components/FeaturedLessons'

const StyledImage = styled(Image)`
  width: 100%;
  max-height: 85vh;
  object-fit: cover;
`

const HomePage = (): JSX.Element => {
  return (
    <>
      <StyledImage src={HOMEPAGE_BACKGROUND} />
      <Box bgColor="#1F2023" p="4" overflow="hidden">
        <Container maxW="container.lg">
          <FeaturedLessons />
        </Container>
        <Footer />
      </Box>
    </>
  )
}

export default HomePage
