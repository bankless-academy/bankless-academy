import { Box, Container, Image } from '@chakra-ui/react'
import styled from '@emotion/styled'

import Footer from 'layout/Footer'
import Modules from 'components/Modules'
import { HOMEPAGE_BACKGROUND } from 'constants/index'
import MODULES from 'constants/whitelabel_modules'

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
          {/* Top modules */}
          <Modules modules={MODULES.filter((m) => !m.parentModule)} />
        </Container>
        <Footer />
      </Box>
    </>
  )
}

export default HomePage
