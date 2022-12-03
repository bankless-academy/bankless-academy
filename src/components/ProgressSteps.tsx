import { Box } from '@chakra-ui/react'

import { useSmallScreen } from 'hooks/index'

const ProgressSteps = ({
  step,
  total,
}: {
  step: number
  total: number
}): React.ReactElement => {
  const [isSmallScreen] = useSmallScreen()
  return (
    <Box display="flex" m="3" position="relative">
      {[...Array(total)].map((e, index) => (
        // TODO: make steps clickable?
        <Box
          key={index}
          w="100%"
          h={isSmallScreen ? 1 : '4px'}
          m={isSmallScreen ? 0.5 : 1}
          borderRadius={2}
          bg={
            index + 1 === total
              ? `linear-gradient(270deg, #FFFCF9 -44.74%, #F77B54 -11.81%, ${
                  index <= step ? '#916AB8' : '#ffffff22'
                } 94.44%)`
              : index <= step
              ? '#916AB8'
              : '#ffffff22'
          }
        ></Box>
      ))}
      <Box
        w={isSmallScreen ? 1 : '4px'}
        h={isSmallScreen ? 1 : '4px'}
        m={isSmallScreen ? 0.5 : 1}
        position="absolute"
        top="0"
        right="0"
        borderRadius={2}
        bg={'#FFEDEC'}
        boxShadow="0px 0px 5px 2px rgba(255, 252, 248, 0.88)"
      ></Box>
    </Box>
  )
}

export default ProgressSteps
