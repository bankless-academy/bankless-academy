import { Box, Image } from '@chakra-ui/react'
import { isMobile } from 'react-device-detect'

import { LessonType } from 'entities/lesson'

const Datadisk = ({ lesson }: { lesson: LessonType }): JSX.Element => {
  return (
    <Box>
      {isMobile ? (
        <Image src={lesson.lessonCollectibleGif} />
      ) : (
        <video autoPlay loop playsInline muted style={{ minHeight: '224px' }}>
          <source
            src={lesson.lessonCollectibleVideo}
            type="video/webm"
          ></source>
        </video>
      )}
    </Box>
  )
}

export default Datadisk
