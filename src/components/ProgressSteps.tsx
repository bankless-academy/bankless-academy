import { Box, useMediaQuery } from '@chakra-ui/react'

const ProgressSteps = ({
  step,
  total,
}: {
  step: number
  total: number
}): React.ReactElement => {
  const [isSmallScreen] = useMediaQuery('(max-width: 800px)')
  return (
    <Box display="flex" m="3">
      {[...Array(total)].map((e, index) => (
        // TODO: make steps clickable?
        <Box
          key={index}
          w="100%"
          h={isSmallScreen ? 1 : '4px'}
          m={isSmallScreen ? 0.5 : 2}
          borderRadius={2}
          bg={index <= step ? '#916AB8' : '#ffffff22'}
        ></Box>
      ))}
    </Box>
  )
}

export default ProgressSteps
