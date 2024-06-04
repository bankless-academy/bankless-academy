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
import { useSession } from 'next-auth/react'

export type PageType = LessonTypeType | 'PROFILE' | 'GLOSSARY' | ''

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
      h={isActive ? '80px' : '78px'}
      background={
        isActive
          ? 'linear-gradient(132deg, #67407E 0%, #354374 100%)'
          : '#3F3253'
      }
      borderY={isActive ? '2px solid #9d72dc' : ''}
      borderBottom={isActive ? '2px solid #9d72dc' : '2px solid #574572'}
      mt={isActive ? '-2px' : '0'}
      // pb={isActive ? '2px' : ''}
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
        fallbackSrc={label === 'Profile' ? DEFAULT_AVATAR : ''}
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
  const { status } = useSession()
  const { open } = useWeb3Modal()
  const [nameCache] = useLocalStorage(`name-cache`, {})
  const [score] = useLocalStorage(`score`, 0)
  const [isSmallScreen] = useSmallScreen()
  const { scrollY } = useWindowScrollPositions()
  const username = address
    ? address in nameCache && nameCache[address].name?.includes('.eth')
      ? nameCache[address].name
      : address
    : ''

  async function openModal() {
    await open({ view: 'Connect' })
  }

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
        <Container maxW="container.xl" pb={isSmallScreen ? '16' : '0'}>
          {children}
        </Container>
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
            {address && status === 'authenticated' ? (
              <Box
                background={
                  page === 'PROFILE'
                    ? 'linear-gradient(132deg, #67407E 0%, #354374 100%)'
                    : '#3F3253'
                }
                h="298px"
                borderBottom={page === 'PROFILE' ? '' : '2px solid #574572'}
              >
                <InternalLink href={`/explorer/${username}?referral=true`}>
                  <Box
                    pt="8"
                    borderBottom={page === 'PROFILE' ? '2px solid #B85FF1' : ''}
                    position="relative"
                  >
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
                        src={`https://ensdata.net/media/avatar/${username}`}
                        fallbackSrc={DEFAULT_AVATAR}
                      />
                      {score > 0 && (
                        <Box position="absolute" top="33px" right="28px">
                          <Image src="/images/profile-hex.svg" />
                          <Box
                            position="absolute"
                            top="0"
                            right="0"
                            width="66px"
                            height="75px"
                            display="flex"
                            justifyContent="center"
                            alignItems="center"
                            fontSize="28px"
                            fontWeight="bold"
                            color="white"
                          >
                            {score}
                          </Box>
                        </Box>
                      )}
                    </Box>
                    <Box
                      textAlign="center"
                      mt="8"
                      color="white"
                      fontSize="xl"
                      fontWeight="bold"
                      textTransform="uppercase"
                      pb="8"
                    >
                      {username.includes('.')
                        ? username
                        : shortenAddress(username)}
                    </Box>
                  </Box>
                </InternalLink>
              </Box>
            ) : (
              <Box
                background="transparent"
                h="298px"
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
                label="Lesson Select"
                isActive={page === 'LESSON'}
                imageSrc="/images/lesson-logo.svg"
              />
              <DesktopButton
                link="/lessons/handbook"
                label="Handbook"
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
          justifyContent="space-around"
          placeItems="center"
          borderTop="1px solid #222222"
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
          <MobileButton
            link="/glossary"
            label="Glossary"
            isActive={page === 'GLOSSARY'}
            imageSrc="/images/glossary-logo-mobile.svg"
          />
        </Box>
      )}
    </Box>
  )
}

export default Layout
