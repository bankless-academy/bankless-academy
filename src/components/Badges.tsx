/* eslint-disable no-console */
import {
  Text,
  Box,
  Image,
  SimpleGrid,
  GridItem,
  useDisclosure,
} from '@chakra-ui/react'
import { useTranslation } from 'react-i18next'
import React from 'react'

import { LESSONS } from 'constants/index'
import InternalLink from './InternalLink'
import { STAMP_PLATFORMS } from 'constants/passport'
import PassportModal from 'components/PassportModal'
import { useSmallScreen } from 'hooks/index'
import ExternalLink from './ExternalLink'
import { ACHIEVEMENTS } from 'constants/achievements'
import Helper from 'components/Helper'

const Badges = ({
  badges,
  badgeToHighlight,
  type,
  isMyProfile,
}: {
  badges: number[] | string[]
  badgeToHighlight?: number | string
  type?: 'badges' | 'collectibles' | 'achievements' | 'stamps'
  isMyProfile?: boolean
}): React.ReactElement => {
  const { t } = useTranslation()
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [isSmallScreen] = useSmallScreen()

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
            overflowY={badges?.length <= 6 || type ? 'hidden' : 'scroll'}
            overflowX="hidden"
            backgroundColor={type ? 'unset' : 'blackAlpha.200'}
            borderRadius="10px"
          >
            <SimpleGrid
              columns={type && !isSmallScreen ? 4 : 3}
              spacing={2}
              p={2}
            >
              {
                type === 'achievements' && (
                  <>
                    {Object.keys(ACHIEVEMENTS).map((a, index) => {
                      if (a in ACHIEVEMENTS) {
                        const achievement = ACHIEVEMENTS[a]
                        const isAchievementDone = (badges as string[]).includes(
                          a
                        )
                        if (isAchievementDone || isMyProfile)
                          return (
                            <Box
                              justifySelf="center"
                              p={1}
                              position="relative"
                              opacity={isAchievementDone ? '1' : '0.3'}
                              key={`achievement-${index}`}
                            >
                              <Box position="absolute" top="9px" right="5px">
                                <Helper
                                  title={achievement.description}
                                  isProfile={true}
                                  definition={
                                    <>
                                      <Box mb="4">
                                        {achievement.helper
                                          .split(achievement.label)
                                          .map((part, i, array) => (
                                            <React.Fragment key={`helper-${i}`}>
                                              {part}
                                              {i < array.length - 1 && (
                                                <ExternalLink
                                                  href={achievement.link}
                                                >
                                                  {achievement.label}
                                                </ExternalLink>
                                              )}
                                            </React.Fragment>
                                          ))}
                                      </Box>
                                    </>
                                  }
                                />
                              </Box>
                              <ExternalLink href={achievement.link}>
                                <Box>
                                  <Box
                                    p="2"
                                    border="1px #433d43 solid"
                                    borderRadius="8px"
                                  >
                                    <Image
                                      src={achievement.image}
                                      alt={achievement.description}
                                    />
                                  </Box>
                                  <Box
                                    fontWeight="bold"
                                    fontSize="sm"
                                    width="100%"
                                    textAlign="center"
                                    color="white"
                                  >
                                    {achievement.description}
                                  </Box>
                                </Box>
                              </ExternalLink>
                            </Box>
                          )
                      }
                    })}
                  </>
                )
              }
              {badges?.map((badge, index) => {
                if (!type) {
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
                    }
                    // OLD badge display
                    else
                      return (
                        <Box
                          key={`badge-${index}`}
                          justifySelf="center"
                          boxShadow={'0px 0px 4px 2px #00000060'}
                          borderRadius="3px"
                          backgroundColor={'blackAlpha.300'}
                          p={1}
                        >
                          <Image
                            src={lesson.badgeImageLink}
                            alt={lesson.name}
                          />
                        </Box>
                      )
                  }
                }
              })}
              {type === 'collectibles' && (
                <>
                  {[
                    ...LESSONS.filter(
                      (lesson) =>
                        lesson.collectibleId?.startsWith('D') &&
                        lesson.publicationStatus === 'publish'
                    ).sort(
                      (a, b) =>
                        parseInt(a.collectibleId.replace('D', ''), 16) -
                        parseInt(b.collectibleId.replace('D', ''), 16)
                    ),
                    ...LESSONS.filter(
                      (lesson) =>
                        lesson.collectibleId?.startsWith('H') &&
                        lesson.publicationStatus === 'publish'
                    ).sort(
                      (a, b) =>
                        parseInt(a.collectibleId.replace('H', ''), 16) -
                        parseInt(b.collectibleId.replace('H', ''), 16)
                    ),
                  ].map((lesson, index) => {
                    const numberOfCollectiblesOwned = (
                      badges as string[]
                    ).filter(
                      (collectibleId) => collectibleId === lesson.collectibleId
                    )?.length
                    const isDatadisk = lesson.collectibleId.startsWith('D')
                    if (isMyProfile || numberOfCollectiblesOwned > 0)
                      return (
                        <GridItem
                          key={`badge-${index}`}
                          justifySelf="center"
                          colSpan={isDatadisk ? 2 : 1}
                          opacity={numberOfCollectiblesOwned > 0 ? '1' : '0.3'}
                          backgroundColor={
                            badgeToHighlight === lesson.badgeId
                              ? 'orange.200'
                              : 'unset'
                          }
                          p={1}
                          border="1px #433d43 solid"
                          borderRadius="8px"
                          position="relative"
                        >
                          <InternalLink
                            href={`/lessons/${lesson.slug}`}
                            alt={lesson.englishName}
                          >
                            <>
                              <Image
                                src={`${
                                  isDatadisk
                                    ? lesson.lessonCollectedImageLink
                                    : '/images/handbook-badge.png'
                                }`}
                                alt={lesson.name}
                                title={lesson.name}
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
                                  color="white"
                                >
                                  {lesson.collectibleId}
                                </Box>
                              )}
                              {numberOfCollectiblesOwned > 1 && (
                                <Box
                                  fontWeight="bold"
                                  fontSize="12px"
                                  position="absolute"
                                  top="-9px"
                                  right="-9px"
                                  width="18px"
                                  height="18px"
                                  textAlign="center"
                                  color="white"
                                  backgroundColor="#8a68a2"
                                  borderRadius="50%"
                                >
                                  {numberOfCollectiblesOwned}
                                </Box>
                              )}
                            </>
                          </InternalLink>
                        </GridItem>
                      )
                  })}
                </>
              )}
              {type === 'badges' && (
                <>
                  {LESSONS.filter(
                    (lesson) =>
                      lesson.badgeId && lesson.publicationStatus === 'publish'
                  ).map((lesson, index) => {
                    const ownsBadge = (badges as number[]).includes(
                      lesson.badgeId
                    )
                    if (isMyProfile || ownsBadge)
                      return (
                        <InternalLink
                          key={`badge-${index}`}
                          href={`/lessons/${lesson.slug}`}
                          alt={lesson.englishName}
                        >
                          <Box
                            justifySelf="center"
                            opacity={ownsBadge ? '1' : '0.3'}
                            borderRadius="3px"
                            backgroundColor={
                              // badgeToHighlight === lesson.badgeId
                              // ? 'orange.100' : 'unset'
                              'unset'
                            }
                            p={1}
                          >
                            <Image
                              src={lesson.badgeImageLink}
                              alt={lesson.name}
                            />
                          </Box>
                        </InternalLink>
                      )
                  })}
                </>
              )}
              {type === 'stamps' && (
                <>
                  {Object.entries(STAMP_PLATFORMS).map(([key, platform]) => {
                    const ownsBadge = (badges as string[])?.includes(
                      STAMP_PLATFORMS[key].provider
                    )
                    if (isMyProfile || ownsBadge)
                      return (
                        <Box key={`badge-${key}`} p={1} position="relative">
                          <Image
                            aspectRatio="1"
                            opacity={ownsBadge ? '1' : '0.3'}
                            w="100%"
                            src={platform.icon}
                            p="3"
                            border="1px #433d43 solid"
                            borderRadius="8px"
                            title={platform.name}
                            cursor={isMyProfile ? 'pointer' : 'default'}
                            onClick={() => isMyProfile && onOpen()}
                          />
                        </Box>
                      )
                  })}
                  <PassportModal
                    isOpen={isOpen}
                    onClose={onClose}
                    isProfile={isMyProfile}
                  />
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
