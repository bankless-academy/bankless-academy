import { Box, Image } from '@chakra-ui/react'
import { DEFAULT_AVATAR } from 'constants/index'

interface ProfileScoreProps {
  avatar: string
  score: number
}

const ProfileScore: React.FC<ProfileScoreProps> = ({ avatar, score }) => {
  return (
    <Box
      margin="auto"
      pt="10px"
      w="170px"
      h="170px"
      borderRadius="50%"
      backgroundImage="linear-gradient(180deg, #A379BD 0%, #5B5198 100%)"
      position="relative"
    >
      <Image
        w="150px"
        h="150px"
        margin="auto"
        borderRadius="50%"
        backgroundColor="black"
        src={avatar !== '' ? avatar : DEFAULT_AVATAR}
        // fallbackSrc={DEFAULT_AVATAR}
      />
      {score > 0 && (
        <Box position="absolute" top="0" right="-26px">
          <Image src="/images/profile-hex.svg" />
          <Box
            position="absolute"
            top="0"
            right="0"
            width="66px"
            height="75px"
            display="flex"
            justifyContent="center"
            alignItems="center"
            fontSize="28px"
            fontWeight="bold"
            color="white"
          >
            {score}
          </Box>
        </Box>
      )}
    </Box>
  )
}

export default ProfileScore
