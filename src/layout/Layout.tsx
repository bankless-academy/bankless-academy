/* eslint-disable no-console */
import { Box, Container, Image, Button, Link } from '@chakra-ui/react'
import React, { ReactElement, useEffect, useState } from 'react'
import { useAppKit } from '@reown/appkit/react'
import { SquaresFour, Wallet } from '@phosphor-icons/react'
import { useRouter } from 'next/router'
import 'ethereum-identity-kit/css'

import { LessonTypeType } from 'entities/lesson'
import InternalLink from 'components/InternalLink'
import { useSmallScreen, useWindowScrollPositions } from 'hooks/index'
import { useAccount } from 'wagmi'
import { useLocalStorage } from 'usehooks-ts'
import { scrollTop, shortenAddress } from 'utils/index'
import { DEFAULT_AVATAR } from 'constants/index'
import ProfileScore from 'components/ProfileScore'
import Announcement from 'components/Announcement'
import {
  LessonIcon,
  HandbookIcon,
  GlossaryIcon,
  ExploreIcon,
} from 'components/Icons'
import { useTranslation } from 'react-i18next'
import { useApp } from 'contexts/AppContext'
import ChatWidget from 'components/ChatWidget'

export type PageType =
  | LessonTypeType
  | 'LESSON-DETAIL'
  | 'ARTICLE'
  | 'PROFILE'
  | 'EXPLORE'
  | 'GLOSSARY'
  | 'INDEX'
  | ''

const DesktopButton = ({
  isActive,
  link,
  label,
  icon: Icon,
}: {
  isActive: boolean
  link: string
  label: string
  icon: React.ComponentType<any>
}): React.ReactElement => {
  const button = (
    <Box w="100%" h="100%" display="flex" alignItems="center" color="white">
      <Box ml="6" display="flex">
        <Icon width={'38px'} height={'38px'} />
      </Box>
      <Box ml="6" fontSize="lg" fontWeight="semibold" textAlign="center">
        {label}
      </Box>
    </Box>
  )
  return (
    <Box
      h={isActive ? '70px' : '68px'}
      background={
        isActive
          ? 'linear-gradient(132deg, #67407E 0%, #354374 100%)'
          : '#3F3253'
      }
      borderY={isActive ? '2px solid #9d72dc' : ''}
      borderBottom={isActive ? '2px solid #9d72dc' : '2px solid #574572'}
      mt={isActive ? '-2px' : '0'}
    >
      {isActive ? button : <InternalLink href={link}>{button}</InternalLink>}
    </Box>
  )
}

const MobileButton = ({
  isActive,
  link,
  label,
  icon: Icon,
  pwa,
  imageSrc,
}: {
  isActive: boolean
  link: string
  label: string
  icon?: React.ComponentType<any>
  imageSrc?: string
  pwa: boolean
  [key: string]: any
}): ReactElement => {
  const iconSize = pwa ? '26px' : '32px'

  const button = (
    <Box
      flex="1"
      w="100%"
      h="100%"
      display="flex"
      alignItems="center"
      justifyContent="center"
      flexDirection="column"
      color={isActive ? 'white' : '#959393'}
      pt={pwa ? '6px' : '2px'}
      pb={pwa ? '16px' : '2px'}
    >
      {Icon ? (
        <Icon
          width={iconSize}
          height={iconSize}
          color={isActive ? 'white' : '#959393'}
        />
      ) : (
        <Image
          src={imageSrc}
          alt={label}
          w={iconSize}
          h={iconSize}
          borderRadius="50%"
          border={
            label === 'Profile'
              ? isActive
                ? '2px solid white'
                : '1px solid #959393'
              : ''
          }
          mt={'2px'}
        />
      )}
      <Box mt={pwa ? '2px' : '4px'} fontSize="14px">
        {label}
      </Box>
    </Box>
  )
  return (
    <Box flex="1">
      {isActive ? (
        <Box
          w="100%"
          h="100%"
          onClick={() => {
            scrollTop()
          }}
          userSelect="none"
          cursor="pointer"
        >
          {button}
        </Box>
      ) : (
        <InternalLink
          href={link}
          userSelect="none"
          onClick={() => {
            scrollTop()
          }}
        >
          {button}
        </InternalLink>
      )}
    </Box>
  )
}

const Layout = ({
  children,
  page,
  isLessonOpen,
}: {
  children: ReactElement
  page?: PageType
  isLessonOpen?: boolean
}): React.ReactElement => {
  const { t } = useTranslation()
  const { address } = useAccount()
  const { open } = useAppKit()
  const router = useRouter()
  const [nameCache] = useLocalStorage(`name-cache`, {})
  const [community] = useLocalStorage(`community`, '')
  const [score] = useLocalStorage(`score`, 0)
  const [, isSmallScreen] = useSmallScreen()
  const { scrollY } = useWindowScrollPositions()
  const addressLower = address?.toLowerCase()
  const [pwa] = useLocalStorage('pwa', false)
  const { hideNavBar } = useApp()
  const username = address
    ? addressLower in nameCache &&
      nameCache[addressLower]?.name?.includes('.eth')
      ? nameCache[addressLower].name
      : address
    : ''
  const ens = address
    ? addressLower in nameCache && nameCache[addressLower]?.name?.includes('.')
      ? nameCache[addressLower].name
      : address
    : ''
  const avatar = address
    ? addressLower in nameCache &&
      nameCache[addressLower]?.avatar?.startsWith('http')
      ? nameCache[addressLower].avatar
      : ''
    : ''
  const [appDeploymentId, setAppDeploymentId] = useLocalStorage(
    'app-deployment-id',
    ''
  )
  const [latestDeploymentId, setLatestDeploymentId] = useState(appDeploymentId)

  async function openModal() {
    await open({ view: 'Connect' })
  }

  const shouldShowOnlyChildren =
    (page === 'INDEX' ||
      page === '' ||
      (page === 'LESSON-DETAIL' && isLessonOpen)) &&
    !isSmallScreen

  const menuBarWidth = '230px'
  const profileHeight = community ? '309px' : '268px'

  useEffect(() => {
    const fetchDeploymentId = async (loadType: string) => {
      try {
        const res = await fetch('/api/deployment')
        const data = await res.json()
        const newDeploymentId = data.deploymentId
        if (newDeploymentId && newDeploymentId !== appDeploymentId) {
          // only update the app deployment id on first load
          if (loadType === 'first-load') {
            setAppDeploymentId(newDeploymentId)
          }
          setLatestDeploymentId(newDeploymentId)
        }
      } catch (error) {
        console.error('Failed to fetch deployment ID:', error)
      }
    }

    // call the api to get the deployment id every 1 minute
    const interval = setInterval(
      () => fetchDeploymentId('interval-load'),
      60000
    )

    // on first load, fetch the deployment id
    fetchDeploymentId('first-load')

    // Add visibility change listener
    const handleVisibilityChange = () => {
      if (document.visibilityState === 'visible') {
        fetchDeploymentId('interval-load')
      }
    }
    document.addEventListener('visibilitychange', handleVisibilityChange)

    return () => {
      clearInterval(interval)
      document.removeEventListener('visibilitychange', handleVisibilityChange)
    }
  }, [appDeploymentId])

  const newVersionAvailable =
    latestDeploymentId &&
    latestDeploymentId !== '' &&
    latestDeploymentId !== appDeploymentId

  const isEmbed = router.query.embed === 'true'

  return (
    <Box
      position="relative"
      display="flex"
      flexDirection="column"
      // background={
      //   shouldShowOnlyChildren
      //     ? 'default'
      //     : `linear-gradient(
      //   107.1deg,
      //   rgba(46, 33, 33, 0.3) -3.13%,
      //   rgba(80, 73, 84, 0.3) 16.16%,
      //   rgba(94, 89, 104, 0.3) 29.38%,
      //   rgba(86, 81, 94, 0.3) 41.5%,
      //   rgba(23, 21, 21, 0.3) 102.65%
      // )`
      // }
    >
      <Box
        // position={
        //   shouldShowOnlyChildren || isSmallScreen ? 'relative' : 'absolute'
        // }
        position="relative"
        top={0}
        left={0}
        right={0}
        bottom={0}
      >
        <Box
          marginLeft={
            isSmallScreen || shouldShowOnlyChildren ? '0' : menuBarWidth
          }
          borderLeft={
            isSmallScreen || shouldShowOnlyChildren ? '0' : '2px #3D3838 solid'
          }
          display={shouldShowOnlyChildren ? 'block' : 'grid'}
          backgroundColor="#161515"
          height="100%"
          position="relative"
        >
          {(page === 'INDEX' ||
            page === 'LESSON' ||
            page === 'EXPLORE' ||
            page === 'GLOSSARY' ||
            page === 'HANDBOOK') && <Announcement />}
          <Container
            maxW={
              shouldShowOnlyChildren
                ? '100vw'
                : page === 'PROFILE'
                ? '100vw'
                : 'container.xl'
            }
            px={
              shouldShowOnlyChildren
                ? '0'
                : isSmallScreen
                ? page === 'LESSON-DETAIL' ||
                  page === 'GLOSSARY' ||
                  page === 'ARTICLE' ||
                  page === 'INDEX'
                  ? '0'
                  : '4'
                : '4'
            }
            pb={isSmallScreen ? (page === 'LESSON-DETAIL' ? '0' : '16') : '0'}
          >
            {children}
          </Container>
        </Box>
        {!shouldShowOnlyChildren && !hideNavBar && (
          <>
            {!isSmallScreen ? (
              <>
                {/* Desktop menu */}
                <Box
                  // w={`calc(${menuBarWidth} + 2px)`}
                  w={menuBarWidth}
                  position={scrollY > 80 ? 'fixed' : 'absolute'}
                  top="0"
                >
                  {address ? (
                    <Box
                      background={
                        page === 'PROFILE'
                          ? 'linear-gradient(132deg, #67407E 0%, #354374 100%)'
                          : '#3F3253'
                      }
                      h={profileHeight}
                      borderBottom={
                        page === 'PROFILE' ? '' : '2px solid #574572'
                      }
                    >
                      <InternalLink
                        href={`/explorer/${username}?referral=true`}
                      >
                        <Box
                          pt="6"
                          borderBottom={
                            page === 'PROFILE' ? '2px solid #B85FF1' : ''
                          }
                          position="relative"
                        >
                          <Box transform="scale(0.95)">
                            <ProfileScore avatar={avatar} score={score} />
                          </Box>
                          <Box
                            textAlign="center"
                            mt="6"
                            color="white"
                            fontSize="md"
                            fontWeight="bold"
                            textTransform="uppercase"
                            whiteSpace="nowrap"
                            overflow="hidden"
                            textOverflow="ellipsis"
                            mx="5px"
                          >
                            {ens.includes('.') ? ens : shortenAddress(username)}
                          </Box>
                          <Box
                            textAlign="center"
                            color="#ffffff70"
                            fontSize="md"
                            fontWeight="bold"
                            textTransform="uppercase"
                            pt={community ? '4' : '0'}
                            pb="6"
                          >
                            {community && (
                              <Box display="flex" justifyContent="center">
                                <Box>-[&nbsp;</Box>
                                <Box mt="1.5px">{community}</Box>
                                <Box>&nbsp;]-</Box>
                              </Box>
                            )}
                          </Box>
                        </Box>
                      </InternalLink>
                    </Box>
                  ) : (
                    <Box
                      background="transparent"
                      h={profileHeight}
                      borderBottom="2px solid #574572"
                      textAlign="center"
                    >
                      <Box pt="6">
                        <Box
                          margin="auto"
                          pt="10px"
                          w="170px"
                          h="170px"
                          borderRadius="50%"
                          backgroundImage="linear-gradient(180deg, #A379BD 0%, #5B5198 100%)"
                        >
                          <Image
                            w="150px"
                            h="150px"
                            margin="auto"
                            borderRadius="50%"
                            backgroundColor="black"
                            src={DEFAULT_AVATAR}
                          />
                        </Box>
                        <Button
                          onClick={openModal}
                          size={isSmallScreen ? 'sm' : 'md'}
                          leftIcon={<Wallet weight="bold" />}
                          zIndex={2}
                          variant="primary"
                          marginY="20px"
                        >
                          Connect Wallet
                        </Button>
                      </Box>
                    </Box>
                  )}
                  <Box>
                    <DesktopButton
                      link="/lessons"
                      label="Lessons"
                      isActive={page === 'LESSON'}
                      icon={LessonIcon}
                    />
                    <DesktopButton
                      link="/lessons/handbook"
                      label="Handbooks"
                      isActive={page === 'HANDBOOK'}
                      icon={HandbookIcon}
                    />
                    <DesktopButton
                      link="/explore"
                      label="Explore"
                      isActive={page === 'EXPLORE'}
                      icon={ExploreIcon}
                    />
                    <DesktopButton
                      link="/glossary"
                      label="Glossary"
                      isActive={page === 'GLOSSARY'}
                      icon={GlossaryIcon}
                    />
                  </Box>
                </Box>
              </>
            ) : (
              !isEmbed && (
                <Box
                  position="fixed"
                  w="100vw"
                  h="81px"
                  bottom="0"
                  background="#2b2b2bdd"
                  backdropFilter="blur(10px)"
                  display="flex"
                  zIndex="2"
                  borderTop="1px solid #222222"
                >
                  {newVersionAvailable ? (
                    <Box
                      display="flex"
                      alignItems="center"
                      gap={2}
                      justifyContent="center"
                      bg="#2b2b2bdd"
                      color="white"
                      p={4}
                      w="100%"
                      h="100%"
                    >
                      <SquaresFour />
                      {t('New app version available!')}
                      {' · '}
                      <Link
                        onClick={() => window.location.reload()}
                        color="#C06FDB !important"
                      >
                        {t('Refresh')}
                      </Link>
                    </Box>
                  ) : (
                    <>
                      {/* Mobile menu */}
                      <MobileButton
                        link="/lessons"
                        label="Lessons"
                        isActive={router.pathname === '/lessons'}
                        icon={LessonIcon}
                        pwa={pwa}
                        imageSrc={avatar !== '' ? avatar : DEFAULT_AVATAR}
                      />
                      <MobileButton
                        link="/lessons/handbook"
                        label="Handbooks"
                        isActive={router.pathname.startsWith(
                          '/lessons/handbook'
                        )}
                        icon={HandbookIcon}
                        pwa={pwa}
                        imageSrc={avatar !== '' ? avatar : DEFAULT_AVATAR}
                      />
                      <MobileButton
                        link="/explore"
                        label="Explore"
                        isActive={page === 'EXPLORE'}
                        icon={ExploreIcon}
                        pwa={pwa}
                        imageSrc={avatar !== '' ? avatar : DEFAULT_AVATAR}
                      />
                      <MobileButton
                        link={
                          username !== ''
                            ? `/explorer/${username}?referral=true`
                            : `/explorer/my-profile`
                        }
                        label="Profile"
                        isActive={router.pathname.startsWith('/explorer')}
                        imageSrc={avatar !== '' ? avatar : DEFAULT_AVATAR}
                        borderRight={0}
                        pwa={pwa}
                      />
                    </>
                  )}
                </Box>
              )
            )}
          </>
        )}
      </Box>
      {!isLessonOpen && (
        <ChatWidget avatar={avatar} address={address} username={username} />
      )}
    </Box>
  )
}

export default Layout
