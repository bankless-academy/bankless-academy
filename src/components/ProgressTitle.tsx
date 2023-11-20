import { Box, Text } from '@chakra-ui/react'

const ProgressTitle = ({
  title,
  score,
  max,
}: {
  title: string
  score: number
  max: number
}): React.ReactElement => (
  <Box
    borderBottom="1px solid #989898"
    display="flex"
    fontSize="2xl"
    fontWeight="bold"
    justifyContent="flex-end"
    pb="4"
    mb="8"
  >
    <Box mr="4">{score}</Box>
    <Text
      as="h2"
      borderRadius="2px"
      width={`${(score / max) * 200 + 200}px`}
      background="linear-gradient(223deg, #3a355a 16.65%, #634c70 95.78%)"
      textTransform="uppercase"
      textAlign="end"
      pr="2"
    >
      {title}
    </Text>
  </Box>
)

export default ProgressTitle
