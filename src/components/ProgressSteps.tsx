import { Box } from '@chakra-ui/react'

const ProgressSteps = ({
  step,
  total,
}: {
  step: number
  total: number
}): React.ReactElement => {
  return (
    <Box display="flex">
      {[...Array(total)].map((e, index) => (
        // TODO: make steps clickable?
        <Box
          key={index}
          w="100%"
          h="2"
          m={2}
          borderRadius={4}
          bg={index <= step ? 'red.500' : 'red.200'}
        ></Box>
      ))}
    </Box>
  )
}

export default ProgressSteps
