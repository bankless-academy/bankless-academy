import { Icon } from '@chakra-ui/react'
import { BookOpen, LightbulbFilament, Sword, Medal } from 'phosphor-react'

export const LearnIcon = (): React.ReactElement => (
  <Icon
    as={BookOpen}
    w={10}
    h={10}
    bg="linear-gradient(148.06deg, #B8FFB0 7.86%, #84FFE1 90.48%)"
    color="black"
    borderRadius="50%"
    p="2"
  />
)

export const QuizIcon = (): React.ReactElement => (
  <Icon
    as={LightbulbFilament}
    w={10}
    h={10}
    bg="linear-gradient(148.06deg, #B0FFFA 7.86%, #FFBF84 90.48%)"
    color="black"
    borderRadius="50%"
    p="2"
  />
)

export const QuestIcon = (): React.ReactElement => (
  <Icon
    as={Sword}
    w={10}
    h={10}
    bg="linear-gradient(148.06deg, #FFDFB0 7.86%, #FF84DC 90.48%)"
    color="black"
    borderRadius="50%"
    p="2"
  />
)

export const PoapIcon = (): React.ReactElement => (
  <Icon
    as={Medal}
    w={10}
    h={10}
    bg="linear-gradient(148.06deg, #FDFF84 7.86%, #B0E3FF 79.72%)"
    color="black"
    borderRadius="50%"
    p="2"
  />
)
