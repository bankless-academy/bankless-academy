/* eslint-disable no-console */
import { Text, Box, Image, SimpleGrid, GridItem } from '@chakra-ui/react'
import { useTranslation } from 'react-i18next'

import { COLLECTIBLE_DETAILS, LESSONS } from 'constants/index'
import { DONATION_MAPPING } from 'pages/leaderboard'
import InternalLink from './InternalLink'
import ExternalLink from './ExternalLink'
import { STAMP_PROVIDERS } from 'constants/passport'

const Badges = ({
  badges,
  badgeToHighlight,
  type,
  isMyProfile,
}: {
  badges: number[] | string[]
  badgeToHighlight?: number | string
  type?: 'badges' | 'collectibles' | 'donations' | 'stamps'
  isMyProfile?: boolean
}): React.ReactElement => {
  const { t } = useTranslation()
  return (
    <>
      {(badges?.length > 0 || type) && (
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
            <SimpleGrid columns={type ? 4 : 3} spacing={2} p={2}>
              {badges?.map((badge, index) => {
                if (type === 'collectibles') {
                  const isDatadisk = badge.startsWith('D')
                  const collectibleTitle =
                    COLLECTIBLE_DETAILS[badge]?.englishName
                  return (
                    <GridItem
                      key={`badge-${index}`}
                      justifySelf="center"
                      alignSelf="center"
                      p={1}
                      colSpan={isDatadisk ? 2 : 1}
                      border="1px #2d292d solid"
                      borderRadius="8px"
                      position="relative"
                    >
                      <Image
                        src={`${
                          isDatadisk
                            ? '/images/datadisk-001.png'
                            : '/images/handbook-badge.png'
                        }`}
                        alt={collectibleTitle}
                        title={collectibleTitle}
                      />
                      {!isDatadisk && (
                        <Box
                          fontWeight="bold"
                          fontSize="lg"
                          position="absolute"
                          bottom="2px"
                          left="0"
                          width="100%"
                          textAlign="center"
                        >
                          {badge}
                        </Box>
                      )}
                    </GridItem>
                  )
                }
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
                        border="1px #2d292d solid"
                        borderRadius="8px"
                        alt={DONATION_MAPPING[badge]}
                        title={DONATION_MAPPING[badge]}
                      />
                      <Box
                        fontWeight="bold"
                        fontSize="lg"
                        position="absolute"
                        top="2px"
                        left="0"
                        width="100%"
                        textAlign="center"
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
                          alt={lesson.name}
                          title={lesson.name}
                        />
                      </Box>
                    )
                }
              })}
              {isMyProfile && type === 'badges' && badges?.length < 9 && (
                <Box key={`badge-add`} justifySelf="center" p={1}>
                  <InternalLink href="/lessons">
                    <Image
                      src={`/images/add-badge.png`}
                      width={'100px'}
                      height="auto"
                      alt={t('Claim new lesson badge')}
                      title={t('Claim new lesson badge')}
                    />
                  </InternalLink>
                </Box>
              )}
              {isMyProfile && type === 'collectibles' && badges?.length < 8 && (
                <Box key={`badge-add`} justifySelf="center" p={1}>
                  <InternalLink href="/lessons">
                    <Image
                      src={`/images/add-badge.png`}
                      width={'100px'}
                      height="auto"
                      alt={t('Buy collectible')}
                      title={t('Buy collectible')}
                    />
                  </InternalLink>
                </Box>
              )}
              {isMyProfile && type === 'donations' && (
                <Box key={`badge-add`} justifySelf="center" p={1}>
                  <ExternalLink href="https://explorer.gitcoin.co/#/round/424/0x98720dd1925d34a2453ebc1f91c9d48e7e89ec29/0x98720dd1925d34a2453ebc1f91c9d48e7e89ec29-175">
                    <Image
                      src={`/images/add-badge.png`}
                      width={'100px'}
                      height="auto"
                      alt={t('Donate on Gitcoin')}
                      title={t('Donate on Gitcoin')}
                    />
                  </ExternalLink>
                </Box>
              )}
              {isMyProfile && type === 'stamps' && (
                <>
                  {Object.entries(STAMP_PROVIDERS).map(([key, provider]) => {
                    const ownsBadge = (badges as string[]).includes(key)
                    return (
                      <Box key={`badge-${key}`} p={1} position="relative">
                        <Image
                          aspectRatio="1"
                          opacity={ownsBadge ? '1' : '0.2'}
                          w="100%"
                          src={provider.icon}
                          p="4"
                          border="1px #2d292d solid"
                          borderRadius="8px"
                          title={provider.name}
                        />
                        {!ownsBadge && (
                          <Image
                            w="30px"
                            src={`/images/add-badge.png`}
                            position="absolute"
                            top="-12px"
                            right="-10px"
                          />
                        )}
                      </Box>
                    )
                  })}
                </>
              )}
            </SimpleGrid>
          </Box>
        </>
      )}
    </>
  )
}

export default Badges
