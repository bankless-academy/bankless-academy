import { GetStaticProps } from 'next'
import { PageMetaProps } from 'components/Head'
import {
  SimpleGrid,
  Container,
  Button,
  Box,
  Stack,
  Text,
  List,
  ListItem,
  ListIcon,
} from '@chakra-ui/react'
import { MdCheckCircle, MdHourglassEmpty, MdError } from 'react-icons/md'

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

const DEV_PROGRESS = {
  implemented: [
    'Web3 wallet connection via Metamask & Wallet Connect | display BANK token balance',
    'Full mobile compatibility including swiping between slides',
    'Quest selection | dynamic progress based on slide number | number of POAPs claimed | modal showing quest details',
    'Wallet basics content demo (to be improved)',
    'Quiz',
    'Comment slides via Notion link to gather feedback about content & quiz',
    'Automatic content import from Notion via manual command line',
    'POAP claiming (beta version, claiming codes are stored in Notion table)',
    'Keyboard shortcuts: prev/next slide & select quiz answer [1], [2], [3], [4]',
    '[DEBUG] reset app state (delete data from local storage)',
  ],
  comingSoon: [
    'Wallet basics quest: sign a transaction with your wallet + share signature on twitter (to prevent Sybil attack)',
    'Support for image + video content',
    'Display all Bankless DAO POAPs',
    'Improve font sizing on mobile',
    'Improve POAP claiming: store claiming codes in database',
    'Logo + name',
    'Improve design + colors',
    'Aave content',
    'Aave quest: get Kovan test ETH + try borrowing on Aave',
  ],
  disabled: [
    'Multi language',
    'Dark Mode',
    'Simplified navigation, without homepage + about page',
  ],
}

const Page = (): JSX.Element => {
  return (
    <Container maxW="container.lg">
      <SimpleGrid columns={{ sm: 1, md: 2, lg: 3 }} spacing={12}>
        <QuestCards />
      </SimpleGrid>
      <Box mt={8}>
        <Stack spacing={3} mb={4}>
          <Text fontSize="2xl" fontWeight="bold">
            Implemented features
          </Text>
          <List spacing={3} fontSize="lg">
            {DEV_PROGRESS.implemented.map((f, k) => (
              <ListItem key={k}>
                <ListIcon as={MdCheckCircle} color="green" />
                {f}
              </ListItem>
            ))}
          </List>
        </Stack>
        <Stack spacing={3} mb={4}>
          <Text fontSize="2xl" fontWeight="bold">
            Coming soon™
          </Text>
          <List spacing={3} fontSize="lg">
            {DEV_PROGRESS.comingSoon.map((f, k) => (
              <ListItem key={k}>
                <ListIcon as={MdHourglassEmpty} color="orange" />
                {f}
              </ListItem>
            ))}
          </List>
        </Stack>
        <Stack spacing={3} mb={4}>
          <Text fontSize="2xl" fontWeight="bold">
            Temporary disabled
          </Text>
          <List spacing={3} fontSize="lg">
            {DEV_PROGRESS.disabled.map((f, k) => (
              <ListItem key={k}>
                <ListIcon as={MdError} color="red" />
                {f}
              </ListItem>
            ))}
          </List>
        </Stack>
        <Button
          onClick={() => {
            localStorage.clear()
            window.location.reload()
          }}
          mt={8}
        >
          [DEBUG] reset app state
        </Button>
      </Box>
    </Container>
  )
}

export default Page
