import { Box } from '@chakra-ui/react'
import { Megaphone } from '@phosphor-icons/react'

import { AnnouncementType } from 'entities/announcement'
import ExternalLink from 'components/ExternalLink'
import { useLocalStorage } from 'usehooks-ts'

const Announcement = (): React.ReactElement => {
  const [announcements] = useLocalStorage<AnnouncementType[] | null>(
    'announcements',
    null
  )
  const [announcement] = announcements
  if (announcement)
    return (
      <Box zIndex={10}>
        <Box
          bg="#a379bdf0"
          display="flex"
          alignSelf="center"
          alignItems="center"
          color="white"
        >
          <Box
            display="flex"
            alignItems="center"
            textAlign="center"
            m="4px auto"
          >
            <Box mx="4px">
              <Megaphone
                width={24}
                height={24}
                style={{ transform: 'scaleX(-1)' }}
              />
            </Box>
            <ExternalLink
              underline="true"
              href={announcement.link}
              fontWeight="bold"
              fontSize={['14px', '18px']}
            >
              {announcement.announcement}
              {` - `}
              {announcement.description}
            </ExternalLink>
          </Box>
        </Box>
      </Box>
    )
}

export default Announcement
