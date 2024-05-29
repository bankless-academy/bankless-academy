import { Box, Text } from '@chakra-ui/react'
import { ReactNode } from 'react'
import Helper from 'components/Helper'
import { useSmallScreen } from 'hooks/index'

const ProgressTitle = ({
  title,
  score,
  max,
  description,
}: {
  title: string
  score: number
  max: number
  description: ReactNode
}): React.ReactElement => {
  const [, , isSmallScreen] = useSmallScreen()
  return (
    <Box
      borderBottom="1px solid #989898"
      display="flex"
      position="relative"
      fontSize="2xl"
      fontWeight="bold"
      justifyContent="flex-end"
      pb="4"
      mb="8"
      mt="6"
    >
      <Box mr="4" my="4px">
        {score}
      </Box>
      <Box
        width={`${(score / max) * 200}px`}
        borderLeftRadius="2px"
        background="linear-gradient(135.91deg, #634c70 29.97%, #3a355a 99.26%)"
        my="4px"
      />
      <Box display="flex" height="50px" borderRight="1px #989898 solid" />
      <Text
        as="h2"
        display="flex"
        alignItems="center"
        justifyContent="center"
        borderRightRadius="2px"
        border="2px solid #8a68a2"
        borderLeft="0"
        width={isSmallScreen ? '140px' : '200px'}
        fontSize={isSmallScreen ? 'md' : 'inherit'}
        backgroundColor="transparent"
        textTransform="uppercase"
        pb="1px"
        my="4px"
      >
        {title}
      </Text>
      <Helper
        title={title}
        isProfile={true}
        definition={
          <>
            <Box mb="4">{description}</Box>
          </>
        }
      />
    </Box>
  )
}

export default ProgressTitle
