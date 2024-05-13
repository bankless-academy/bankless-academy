import { useEffect } from 'react'
import {
  Image,
  CloseButton,
  useDisclosure,
  Box,
  Button,
} from '@chakra-ui/react'

import { AnnouncementType } from 'entities/announcement'
import ExternalLink from 'components/ExternalLink'

const Announcement = ({
  announcement,
}: {
  announcement?: AnnouncementType
}): React.ReactElement => {
  const { isOpen, onOpen, onClose } = useDisclosure()

  useEffect(() => {
    onOpen()
  }, [])

  if (isOpen)
    return (
      <Box zIndex={10}>
        <Box
          bg="linear-gradient(180deg, #a379bdf0 0%, #5a5198f0 100%)"
          border="2px solid #B68BCC"
          borderRadius="3xl"
          position="fixed"
          bottom="20px"
          left="20px"
          display="flex"
          mr="20px"
          maxW="500px"
        >
          <CloseButton
            position="absolute"
            top="8px"
            right="12px"
            onClick={() => onClose()}
          />
          <Box p="6">
            <Box display="flex" alignItems="center">
              <Image src={announcement.image} h="150px" maxH="30vw" />
              <Box
                m="4"
                display="flex"
                alignSelf="center"
                flexFlow="column"
                alignItems="center"
              >
                <Box textAlign="center" mb="4">
                  {announcement.description}
                </Box>
                <ExternalLink href={announcement.link}>
                  <Button variant="primaryWhite">
                    {announcement.announcement}
                  </Button>
                </ExternalLink>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    )
}

export default Announcement
