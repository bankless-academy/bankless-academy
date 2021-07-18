import { CircularProgress, Box } from '@chakra-ui/react'

const CircularProgressSteps = ({
  step,
  total,
}: {
  step: number
  total: number
}): React.ReactElement => {
  const stepWidth = (1 / total) * 100
  return (
    <Box position="absolute" w="300px" h="300px">
      {[...Array(total)].map((e, index) => (
        <CircularProgress
          key={index}
          position="absolute"
          // - 1: to have some padding between steps
          value={stepWidth - 1}
          size="300px"
          thickness="2px"
          trackColor="transparent"
          // quest not started yet: -1
          color={index <= step && step !== -1 ? 'red.500' : 'red.200'}
          transform={`rotate(${(index / total) * 360}deg);`}
        />
      ))}
    </Box>
  )
}

export default CircularProgressSteps
