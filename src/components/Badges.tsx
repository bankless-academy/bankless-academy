/* eslint-disable no-console */
import { Text, Box, Image, SimpleGrid } from '@chakra-ui/react'
import { useTranslation } from 'react-i18next'

import { LESSONS } from 'constants/index'
import { DONATION_MAPPING } from 'pages/leaderboard'

const Badges = ({
  badges,
  badgeToHighlight,
  type,
}: {
  badges: number[] | string[]
  badgeToHighlight?: number | string
  type?: 'badges' | 'collectibles' | 'donations'
}): React.ReactElement => {
  const { t } = useTranslation()
  return (
    <>
      {badges?.length > 0 && (
        <>
          {!type && (
            <Text fontSize="xl" fontWeight="bold" textAlign="center">
              {t('My Academy Badges')}
            </Text>
          )}
          <Box
            h={type ? 'unset' : '215px'}
            overflowY={badges.length <= 6 ? 'hidden' : 'scroll'}
            overflowX="hidden"
            backgroundColor={type ? 'unset' : 'blackAlpha.200'}
            borderRadius="10px"
          >
            <SimpleGrid columns={3} spacing={3} p={3}>
              {badges?.map((badge, index) => {
                if (type === 'collectibles')
                  return (
                    <Box key={`badge-${index}`} justifySelf="center" p={1}>
                      <Image
                        src={`${badge}`}
                        width={'100px'}
                        height="auto"
                        alt={
                          badge.startsWith('http')
                            ? 'Layer 2 Blockchains'
                            : 'Handbook'
                        }
                        title={
                          badge.startsWith('http')
                            ? 'Layer 2 Blockchains'
                            : 'Handbook'
                        }
                      />
                    </Box>
                  )
                if (type === 'donations' && badge in DONATION_MAPPING)
                  return (
                    <Box
                      key={`badge-${index}`}
                      justifySelf="center"
                      p={1}
                      position="relative"
                    >
                      <Image
                        src={`/images/gitcoin/gitcoin-donation.png`}
                        width={'100px'}
                        height="auto"
                        alt={DONATION_MAPPING[badge]}
                        title={DONATION_MAPPING[badge]}
                      />
                      <Box
                        fontWeight="bold"
                        fontSize="xl"
                        position="absolute"
                        top="-4px"
                        left="30px"
                      >
                        {badge}
                      </Box>
                    </Box>
                  )
                const lesson = LESSONS.find(
                  (lesson) => lesson.badgeId === badge
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
                        boxShadow={type ? 'unset' : '0px 0px 4px 2px #00000060'}
                        borderRadius="3px"
                        backgroundColor={
                          badgeToHighlight === badge
                            ? 'orange.200'
                            : type
                            ? 'unset'
                            : 'blackAlpha.300'
                        }
                        p={1}
                      >
                        <Image
                          src={lesson.badgeImageLink}
                          width={type ? '100px' : '70px'}
                          height="auto"
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
