/* eslint-disable no-console */
import { useEffect, useState } from 'react'
import { Container, Heading, Box, Image, Text } from '@chakra-ui/react'
import { useAccount } from 'wagmi'
import { useLocalStorage } from 'usehooks-ts'
import { GetStaticProps } from 'next'
import { useRouter } from 'next/router'

import { MetaData } from 'components/Head'
import { UserType } from 'entities/user'
import Card from 'components/Card'
import { DEFAULT_AVATAR } from 'constants/index'

const pageMeta: MetaData = {
  title: 'My profile',
  description: 'My Explorer profile',
  noindex: true,
}

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: { pageMeta },
  }
}

export default function Page() {
  const router = useRouter()
  const [error, setError] = useState('')
  const { address, isConnected } = useAccount()
  const [connectWalletPopupLS, setConnectWalletPopupLS] = useLocalStorage(
    `connectWalletPopup`,
    false
  )

  useEffect(() => {
    const loadUser = async () => {
      try {
        const res = await fetch(`/api/user/${address}?profile=true`)
        if (!res.ok) setError('Failed to fetch user data.')
        const user: UserType = await res.json()
        if (user?.error) {
          setError(user?.error)
        } else if (user) {
          console.log(user)
          router.push(`/explorer/${user.ensName || user.address}?referral=true`)
        }
      } catch (error) {
        console.log(error)
        setError(
          'Failed to fetch user data from API. Please refresh the page manually.'
        )
      }
    }
    if (address) loadUser()
  }, [address])

  useEffect(() => {
    console.log('isConnected', isConnected)
    if (!isConnected) {
      console.log('open')
      setConnectWalletPopupLS(true)
    }
  }, [isConnected])

  if (!connectWalletPopupLS)
    return (
      <Container maxW="992px">
        <Heading as="h2" size="xl" m="8" textAlign="center">
          Loading Explorer Profile
        </Heading>
        <Image
          margin="auto"
          paddingTop="200px"
          width="250px"
          src="/loading_purple.svg"
        />
      </Container>
    )
  else
    return (
      <Container maxW="992px">
        <Card mt="180px" borderRadius="2xl !important">
          <Box
            margin="auto"
            mt="-130px"
            pt="12px"
            w="284px"
            h="284px"
            borderRadius="50%"
            backgroundImage="linear-gradient(180deg, #A379BD 0%, #5B5198 100%)"
          >
            <Image
              w="260px"
              h="260px"
              margin="auto"
              borderRadius="50%"
              backgroundColor="black"
              src={DEFAULT_AVATAR}
            />
          </Box>
          <Text
            as="h2"
            fontSize="4xl"
            fontWeight="bold"
            textAlign="center"
            textTransform="uppercase"
            mt="40px"
            mb="8"
          >
            Explorer Profile
          </Text>
        </Card>
        {error}
      </Container>
    )
}
