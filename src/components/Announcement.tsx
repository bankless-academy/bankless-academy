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
  const announcement = announcements ? announcements[0] : null
  if (announcement)
    return (
      <Box zIndex={9}>
        <Box
          bg="#a379bdf0"
          display="flex"
          alignSelf="center"
          alignItems="center"
          color="white"
          p="4px 8px"
        >
          <Box display="flex" alignItems="center" textAlign="center" m="auto">
            <Box mr="4px">
              <Megaphone
                width={24}
                height={24}
                style={{ transform: 'scaleX(-1)' }}
              />
            </Box>
            <Box fontSize={['14px', '18px']}>
              <Box as="span" style={{ marginRight: '4px' }} fontWeight="bold">
                {announcement.announcement}
              </Box>
              <ExternalLink underline="true" href={announcement.link}>
                <Box as="span" fontWeight="normal">
                  {announcement.description}
                </Box>
              </ExternalLink>
            </Box>
          </Box>
        </Box>
      </Box>
    )
}

export default Announcement
