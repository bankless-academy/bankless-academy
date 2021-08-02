import { GetStaticProps } from 'next'
import { PageMetaProps } from 'components/Head'
import { SimpleGrid, Container, Button, Kbd, Box } from '@chakra-ui/react'

import QuestCards from 'components/QuestCards'

// TODO LATER: rename back to quests.tsx

const pageMeta: PageMetaProps = {
  title: 'Quests',
  description: 'Quests description',
}

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: { pageMeta },
  }
}

const Page = (): JSX.Element => {
  return (
    <Container maxW="container.lg">
      <SimpleGrid columns={{ sm: 1, md: 2, lg: 3 }} spacing={12}>
        <QuestCards />
      </SimpleGrid>
      <Box m={8}>
        <Button
          onClick={() => {
            localStorage.clear()
            window.location.reload()
          }}
        >
          <span>
            <Kbd color="black" mr="0.5em">
              r
            </Kbd>
          </span>
          reset app state
        </Button>
      </Box>
    </Container>
  )
}

export default Page
