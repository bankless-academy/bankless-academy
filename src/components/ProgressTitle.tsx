import { Box, Text } from '@chakra-ui/react'
import { ReactNode } from 'react'
import Helper from 'components/Helper'

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
}): React.ReactElement => (
  <Box
    borderBottom="1px solid #989898"
    display="flex"
    position="relative"
    fontSize="2xl"
    fontWeight="bold"
    justifyContent="flex-end"
    pb="4"
    mb="8"
  >
    <Box mr="4">{score}</Box>
    <Box
      width={`${(score / max) * 200}px`}
      borderLeftRadius="2px"
      background="linear-gradient(223deg, #3a355a 16.65%, #634c70 95.78%)"
    />
    <Text
      as="h2"
      borderRightRadius="2px"
      border="2px solid #8a68a2"
      borderLeft="0"
      width="200px"
      backgroundColor="transparent"
      textTransform="uppercase"
      textAlign="end"
      pr="2"
    >
      {title}
    </Text>
    <Box
      display="flex"
      position="absolute"
      top="-5px"
      height="50px"
      right="199px"
      borderRight="1px #989898 solid"
    />
    <Helper
      title={title}
      isProfile={true}
      definition={
        <>
          <Box>{description}</Box>
        </>
      }
    />
  </Box>
)

export default ProgressTitle
