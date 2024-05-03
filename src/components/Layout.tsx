/* eslint-disable no-console */
import { Box, Container, Image, Icon } from '@chakra-ui/react'
import { ReactElement } from 'react'
import { BookOpen, Icon as PhosphorIcon } from '@phosphor-icons/react'

import { LessonTypeType } from 'entities/lesson'
import InternalLink from './InternalLink'
import { useSmallScreen, useWindowScrollPositions } from 'hooks/index'
import { useAccount } from 'wagmi'
import { useLocalStorage } from 'usehooks-ts'
import { shortenAddress } from 'utils/index'

export type PageType = LessonTypeType | 'PROFILE'

const DesktopButton = ({
  isActive,
  link,
  label,
  icon,
}: {
  isActive: boolean
  link: string
  label: string
  icon: PhosphorIcon
}): React.ReactElement => {
  const button = (
    <Box w="100%" h="100%" display="flex" alignItems="center" color="white">
      <Box ml="4" display="flex">
        <Icon as={icon} />
      </Box>
      <Box ml="4" fontSize="xl" fontWeight="semibold">
        {label}
      </Box>
    </Box>
  )
  return (
    <Box
      h="64px"
      mt="2"
      background={
        isActive
          ? 'linear-gradient(132deg, #67407E 0%, #354374 100%)'
          : '#3F3253'
      }
      border={isActive ? '2px solid #B85FF1' : ''}
    >
      {isActive ? button : <InternalLink href={link}>{button}</InternalLink>}
    </Box>
  )
}

const MobileButton = ({
  isActive,
  link,
  label,
  icon,
}: {
  isActive: boolean
  link: string
  label: string
  icon: PhosphorIcon
}): React.ReactElement => {
  const button = (
    <Box
      borderRadius="50%"
      w="56px"
      h="56px"
      background={
        isActive
          ? 'linear-gradient(132deg, #67407E 0%, #354374 100%)'
          : '#3F3253'
      }
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      <Icon alt={label} as={icon} />
    </Box>
  )
  return (
    <Box mt="2px">
      {isActive ? button : <InternalLink href={link}>{button}</InternalLink>}
    </Box>
  )
}

const Layout = ({
  children,
  page,
}: {
  children: ReactElement
  page?: PageType
}): React.ReactElement => {
  const { address } = useAccount()
  const [nameCache] = useLocalStorage(`name-cache`, {})
  const [isSmallScreen] = useSmallScreen()
  const { scrollY } = useWindowScrollPositions()
  const username = address
    ? address in nameCache
      ? nameCache[address].name
      : address
    : ''

  const menuBarWidth = '250px'
  return (
    <Box
      position="relative"
      display="flex"
      flexDirection="column"
      background={`linear-gradient(
      107.1deg,
      rgba(46, 33, 33, 0.3) -3.13%,
      rgba(80, 73, 84, 0.3) 16.16%,
      rgba(94, 89, 104, 0.3) 29.38%,
      rgba(86, 81, 94, 0.3) 41.5%,
      rgba(23, 21, 21, 0.3) 102.65%
    )`}
    >
      <Box
        marginLeft={isSmallScreen ? '0' : menuBarWidth}
        borderLeft={isSmallScreen ? '0' : '2px #3D3838 solid'}
        display="block"
        backgroundColor="#161515"
      >
        <Container maxW="container.xl">{children}</Container>
      </Box>
      {!isSmallScreen ? (
        <>
          {/* Desktop menu */}
          <Box
            w={`calc(${menuBarWidth} + 2px)`}
            position={scrollY > 80 ? 'fixed' : 'absolute'}
            top="0"
            mt="2"
          >
            {address && (
              <Box
                pt="2"
                background={
                  page === 'PROFILE'
                    ? 'linear-gradient(132deg, #67407E 0%, #354374 100%)'
                    : '#3F3253'
                }
              >
                <InternalLink href={`/explorer/${username}?referral=true`}>
                  <Box
                    margin="auto"
                    mt="4"
                    pt="5px"
                    w="160px"
                    h="160px"
                    borderRadius="50%"
                    backgroundImage="linear-gradient(180deg, #A379BD 0%, #5B5198 100%)"
                  >
                    <Image
                      w="150px"
                      h="150px"
                      margin="auto"
                      borderRadius="50%"
                      backgroundColor="black"
                      src={`https://ensdata.net/media/avatar/${username}`}
                    />
                  </Box>
                  <Box textAlign="center" mt="4" color="white">
                    {username.includes('.')
                      ? username
                      : shortenAddress(username)}
                  </Box>
                </InternalLink>
              </Box>
            )}
            <Box>
              <DesktopButton
                link="/lessons"
                label="Lesson Select"
                isActive={page === 'LESSON'}
                icon={BookOpen}
              />
              <DesktopButton
                link="/lessons/handbook"
                label="Explorer’s Handbook"
                isActive={page === 'HANDBOOK'}
                icon={BookOpen}
              />
            </Box>
          </Box>
        </>
      ) : (
        <Box
          position="fixed"
          w="100vw"
          h="60px"
          bottom="0"
          bg="black"
          display="flex"
          zIndex="2"
          justifyContent="space-around"
          placeItems="center"
        >
          {/* Mobile menu */}
          <MobileButton
            link={`/explorer/${username}?referral=true`}
            label="Profile"
            isActive={page === 'PROFILE'}
            icon={BookOpen}
          />
          <MobileButton
            link="/lessons"
            label="Essentials"
            isActive={page === 'LESSON'}
            icon={BookOpen}
          />
          <MobileButton
            link="/lessons/handbook"
            label="Handbook"
            isActive={page === 'HANDBOOK'}
            icon={BookOpen}
          />
        </Box>
      )}
    </Box>
  )
}

export default Layout
