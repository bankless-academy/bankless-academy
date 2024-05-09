/* eslint-disable no-console */
import { Box, Container, Image } from '@chakra-ui/react'
import { ReactElement } from 'react'

import { LessonTypeType } from 'entities/lesson'
import InternalLink from 'components/InternalLink'
import { useSmallScreen, useWindowScrollPositions } from 'hooks/index'
import { useAccount } from 'wagmi'
import { useLocalStorage } from 'usehooks-ts'
import { shortenAddress } from 'utils/index'
import { DEFAULT_AVATAR } from 'constants/index'

export type PageType = LessonTypeType | 'PROFILE' | ''

const DesktopButton = ({
  isActive,
  link,
  label,
  imageSrc,
}: {
  isActive: boolean
  link: string
  label: string
  imageSrc: string
}): React.ReactElement => {
  const button = (
    <Box w="100%" h="100%" display="flex" alignItems="center" color="white">
      <Box ml="4" display="flex">
        <Image src={imageSrc} />
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
  imageSrc,
}: {
  isActive: boolean
  link: string
  label: string
  imageSrc?: string
}): React.ReactElement => {
  const button = (
    <Box
      borderRadius="50%"
      w="52px"
      h="52px"
      background={
        isActive
          ? 'linear-gradient(132deg, #67407E 0%, #354374 100%)'
          : '#3F3253'
      }
      border={isActive ? '2px solid #9d72dc' : ''}
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      <Image
        src={imageSrc}
        alt={label}
        title={label}
        borderRadius="50%"
        fallbackSrc={DEFAULT_AVATAR}
      />
    </Box>
  )
  return (
    <Box>
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

  const menuBarWidth = '280px'
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
                background={
                  page === 'PROFILE'
                    ? 'linear-gradient(132deg, #67407E 0%, #354374 100%)'
                    : '#3F3253'
                }
              >
                <InternalLink href={`/explorer/${username}?referral=true`}>
                  <Box
                    pt="4"
                    border={page === 'PROFILE' ? '2px solid #B85FF1' : ''}
                  >
                    <Box
                      margin="auto"
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
                        fallbackSrc={DEFAULT_AVATAR}
                      />
                    </Box>
                    <Box
                      textAlign="center"
                      mt="4"
                      color="white"
                      fontSize="xl"
                      fontWeight="bold"
                      textTransform="uppercase"
                      pb="4"
                    >
                      {username.includes('.')
                        ? username
                        : shortenAddress(username)}
                    </Box>
                  </Box>
                </InternalLink>
              </Box>
            )}
            <Box>
              <DesktopButton
                link="/lessons"
                label="Lesson Select"
                isActive={page === 'LESSON'}
                imageSrc="/images/lesson-logo.svg"
              />
              <DesktopButton
                link="/lessons/handbook"
                label="Explorer’s Handbook"
                isActive={page === 'HANDBOOK'}
                imageSrc="/images/handbook-logo.svg"
              />
            </Box>
          </Box>
        </>
      ) : (
        <Box
          position="fixed"
          w="100vw"
          h="59px"
          bottom="0"
          bg="#211f1f"
          display="flex"
          zIndex="2"
          justifyContent="space-around"
          placeItems="center"
          borderTop="1px solid black"
        >
          {/* Mobile menu */}
          <MobileButton
            link={
              username !== ''
                ? `/explorer/${username}?referral=true`
                : `explorer/my-profile`
            }
            label="Profile"
            isActive={page === 'PROFILE'}
            imageSrc={
              username !== ''
                ? `https://ensdata.net/media/avatar/${username}`
                : DEFAULT_AVATAR
            }
          />
          <MobileButton
            link="/lessons"
            label="Essentials"
            isActive={page === 'LESSON'}
            imageSrc="/images/lesson-logo-mobile.svg"
          />
          <MobileButton
            link="/lessons/handbook"
            label="Handbook"
            isActive={page === 'HANDBOOK'}
            imageSrc="/images/handbook-logo-mobile.svg"
          />
        </Box>
      )}
    </Box>
  )
}

export default Layout
