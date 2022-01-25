import { GetStaticProps } from 'next'
import { MetaData } from 'components/Head'
import {
  SimpleGrid,
  Container,
  // Button,
  Box,
  Link,
  // Tooltip,
} from '@chakra-ui/react'
import { isMobile } from 'react-device-detect'

import LessonCards from 'components/LessonCards'

const pageMeta: MetaData = {
  title: 'Lessons',
}

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: { pageMeta },
  }
}

const Lessons = (): JSX.Element => {
  const hostname = window?.location.hostname
  return (
    <Container maxW="container.xl">
      {isMobile && (
        <Box pb={4}>
          ⛔️ on mobile, make sure to open this website directly inside&nbsp;
          <Link href={`https://metamask.app.link/dapp/${hostname}`} color="red">
            MetaMask&apos;s browser
          </Link>
        </Box>
      )}
      <SimpleGrid columns={{ sm: 1, md: 2, lg: 3 }} spacing={12} mt={8}>
        <LessonCards />
      </SimpleGrid>
      {/* <Box mt={8}>
        <Tooltip
          hasArrow
          placement="right"
          label="If you want to try the lesson from scratch or experience any problem, click this button to reset the local app state"
        >
          <Button
            onClick={() => {
              localStorage.clear()
              window.location.reload()
            }}
            mb={4}
            colorScheme="red"
          >
            [DEBUG] reset app state
          </Button>
        </Tooltip>
      </Box> */}
    </Container>
  )
}

export default Lessons
