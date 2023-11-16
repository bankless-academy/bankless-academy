import { Text, Box, Image, SimpleGrid } from '@chakra-ui/react'
import { useTranslation } from 'react-i18next'

import { LESSONS } from 'constants/index'

const Badges = ({
  badges,
  badgeToHighlight,
  profile,
}: {
  badges: number[]
  badgeToHighlight?: number
  profile?: boolean
}): React.ReactElement => {
  const { t } = useTranslation()

  return (
    <>
      {badges?.length > 0 && (
        <>
          <Text fontSize="xl" fontWeight="bold" textAlign="center">
            {t('My Academy Badges')}
          </Text>
          <Box
            h={profile ? 'unset' : '215px'}
            overflowY={badges.length <= 6 ? 'hidden' : 'scroll'}
            overflowX="hidden"
            backgroundColor="blackAlpha.200"
            borderRadius="10px"
          >
            <SimpleGrid columns={3} spacing={3} p={3}>
              {badges?.map((badgeTokenId, index) => {
                const lesson = LESSONS.find(
                  (lesson) => lesson.badgeId === badgeTokenId
                )
                if (lesson) {
                  if (lesson.badgeImageLink.includes('.mp4')) {
                    return (
                      <Box
                        key={`badge-${index}`}
                        height="78px"
                        width="78px"
                        boxShadow="0px 0px 4px 2px #00000060"
                        borderRadius="3px"
                        overflow="hidden"
                        border="1px solid #4b474b"
                      >
                        <video
                          autoPlay
                          loop
                          playsInline
                          muted
                          style={{
                            borderRadius: '3px',
                            overflow: 'hidden',
                          }}
                        >
                          <source
                            src={lesson.badgeImageLink}
                            type="video/mp4"
                          ></source>
                        </video>
                      </Box>
                    )
                  } else
                    return (
                      <Box
                        key={`badge-${index}`}
                        justifySelf="center"
                        boxShadow="0px 0px 4px 2px #00000060"
                        borderRadius="3px"
                        backgroundColor={
                          badgeToHighlight === badgeTokenId
                            ? 'orange.200'
                            : 'blackAlpha.300'
                        }
                        p={1}
                      >
                        <Image
                          src={lesson.badgeImageLink}
                          width="70px"
                          height="70px"
                          alt={lesson.name}
                          title={lesson.name}
                        />
                      </Box>
                    )
                }
              })}
            </SimpleGrid>
          </Box>
        </>
      )}
    </>
  )
}

export default Badges
