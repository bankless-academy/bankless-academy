import { GetStaticProps } from 'next'
import {
  SimpleGrid,
  Container,
  // Button,
  // Tooltip,
} from '@chakra-ui/react'

import { MetaData } from 'components/Head'
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
  return (
    <Container maxW="container.xl">
      <SimpleGrid columns={{ sm: 1, md: 2, lg: 3 }} spacing={4} mt={8}>
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
