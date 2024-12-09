/* eslint-disable no-console */
import { Box, Container, Image, Button } from '@chakra-ui/react'
import { ReactElement } from 'react'
import { useWeb3Modal } from '@web3modal/wagmi/react'
import { Wallet } from '@phosphor-icons/react'

import { LessonTypeType } from 'entities/lesson'
import InternalLink from 'components/InternalLink'
import { useSmallScreen, useWindowScrollPositions } from 'hooks/index'
import { useAccount } from 'wagmi'
import { useLocalStorage } from 'usehooks-ts'
import { shortenAddress } from 'utils/index'
import { DEFAULT_AVATAR } from 'constants/index'
import ProfileScore from 'components/ProfileScore'
import Announcement from 'components/Announcement'

export type PageType = LessonTypeType | 'PROFILE' | 'GLOSSARY' | 'INDEX' | ''

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
      <Box ml="6" display="flex">
        <Image src={imageSrc} />
      </Box>
      <Box ml="6" fontSize="xl" fontWeight="semibold" textAlign="center">
        {label}
      </Box>
    </Box>
  )
  return (
    <Box
      h={isActive ? '80px' : '78px'}
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
  imageSrc,
  pwa,
  ...props
}: {
  isActive: boolean
  link: string
  label: string
  imageSrc?: string
  pwa: boolean
  [key: string]: any
}): React.ReactElement => {
  const button = (
    <Box
      flex="1"
      w="100%"
      h="100%"
      background={
        isActive
          ? 'linear-gradient(132deg, #67407E 0%, #354374 100%)'
          : '#3F3253'
      }
      borderRight={'2px solid #574572'}
      borderTop={isActive ? '2px solid #9d72dc' : ''}
      display="flex"
      alignItems="center"
      justifyContent="center"
      flexDirection="column"
      color="white"
      {...props}
      pt={label === 'Profile' ? '6px' : '0'}
      pb={pwa ? '16px' : '0'}
    >
      <Image
        src={imageSrc}
        alt={label}
        title={label}
        w={label === 'Profile' ? '38px' : '52px'}
        h={label === 'Profile' ? '38px' : '52px'}
        borderRadius="50%"
        fallbackSrc={label === 'Profile' ? DEFAULT_AVATAR : ''}
        border={label === 'Profile' && isActive ? '2px solid #9d72dc' : ''}
        mt={label === 'Profile' && pwa ? '4px' : '0'}
      />
      <Box
        mt={
          label === 'Profile' && pwa
            ? '4px'
            : label === 'Profile'
            ? '6px'
            : '-3px'
        }
      >
        {label}
      </Box>
    </Box>
  )
  return (
    <Box flex="1">
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
  const { open } = useWeb3Modal()
  const [nameCache] = useLocalStorage(`name-cache`, {})
  const [community] = useLocalStorage(`community`, '')
  const [score] = useLocalStorage(`score`, 0)
  const [isSmallScreen] = useSmallScreen()
  const { scrollY } = useWindowScrollPositions()
  const addressLower = address?.toLowerCase()
  const [pwa] = useLocalStorage('pwa', false)
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

  async function openModal() {
    await open({ view: 'Connect' })
  }

  if (page === 'INDEX' && !isSmallScreen) {
    return <>{children}</>
  }

  const menuBarWidth = '280px'
  const profileHeight = community ? '344px' : '298px'
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
        {page !== 'GLOSSARY' && <Announcement />}
        {page === 'INDEX' || page === '' ? (
          children
        ) : (
          <Container maxW="container.xl" pb={isSmallScreen ? '16' : '0'}>
            {children}
          </Container>
        )}
      </Box>
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
                borderBottom={page === 'PROFILE' ? '' : '2px solid #574572'}
              >
                <InternalLink href={`/explorer/${username}?referral=true`}>
                  <Box
                    pt="8"
                    borderBottom={page === 'PROFILE' ? '2px solid #B85FF1' : ''}
                    position="relative"
                  >
                    <ProfileScore avatar={avatar} score={score} />
                    <Box
                      textAlign="center"
                      mt="8"
                      color="white"
                      fontSize="xl"
                      fontWeight="bold"
                      textTransform="uppercase"
                      whiteSpace="nowrap"
                    >
                      {ens.includes('.') ? ens : shortenAddress(username)}
                    </Box>
                    <Box
                      textAlign="center"
                      color="#ffffff70"
                      fontSize="xl"
                      fontWeight="bold"
                      textTransform="uppercase"
                      pt={community ? '4' : '0'}
                      pb="8"
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
                <Box pt="8">
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
                    marginY="27px"
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
                imageSrc="/images/lesson-logo.svg"
              />
              <DesktopButton
                link="/lessons/handbook"
                label="Handbooks"
                isActive={page === 'HANDBOOK'}
                imageSrc="/images/handbook-logo.svg"
              />
              <DesktopButton
                link="/glossary"
                label="Glossary"
                isActive={page === 'GLOSSARY'}
                imageSrc="/images/glossary-logo.svg"
              />
            </Box>
          </Box>
        </>
      ) : (
        <Box
          position="fixed"
          w="100vw"
          h="81px"
          bottom="0"
          bg="black"
          display="flex"
          zIndex="2"
          borderTop="1px solid #222222"
        >
          {/* Mobile menu */}
          <MobileButton
            link="/lessons"
            label="Lessons"
            isActive={page === 'LESSON'}
            imageSrc="/images/lesson-logo-mobile.svg"
            pwa={pwa}
          />
          <MobileButton
            link="/lessons/handbook"
            label="Handbooks"
            isActive={page === 'HANDBOOK'}
            imageSrc="/images/handbook-logo-mobile.svg"
            pwa={pwa}
          />
          <MobileButton
            link="/glossary"
            label="Glossary"
            isActive={page === 'GLOSSARY'}
            imageSrc="/images/glossary-logo-mobile.svg"
            pwa={pwa}
          />
          <MobileButton
            link={
              username !== ''
                ? `/explorer/${username}?referral=true`
                : `explorer/my-profile`
            }
            label="Profile"
            isActive={page === 'PROFILE'}
            imageSrc={avatar !== '' ? avatar : DEFAULT_AVATAR}
            borderRight={0}
            pwa={pwa}
          />
        </Box>
      )}
    </Box>
  )
}

export default Layout
