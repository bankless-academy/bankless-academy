/* eslint-disable no-console */
import React from 'react'
import { Container, Button, Box, useToast } from '@chakra-ui/react'
import { GetStaticProps } from 'next'
import axios from 'axios'

import { MetaData } from 'components/Head'
import { useActiveWeb3React } from 'hooks'
import { LESSONS } from 'constants/index'
import { MINTKUDOS_CHAIN_ID, MINTKUDOS_DOMAIN_INFO } from 'constants/kudos'
import { NETWORKS } from 'constants/networks'

const pageMeta: MetaData = {
  title: 'Kudos',
}

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: { pageMeta },
  }
}

const Kudos = (): JSX.Element => {
  const { account, library, chainId } = useActiveWeb3React()
  const toast = useToast()

  const signMessage = async (kudosId: number) => {
    const adminTypes = {
      CommunityAdminAirdrop: [{ name: 'tokenId', type: 'uint256' }],
    }

    // The data to sign
    const value = {
      tokenId: kudosId,
    }

    if (chainId !== MINTKUDOS_CHAIN_ID) {
      const network = Object.values(NETWORKS).find(
        (network) => network.chainId === MINTKUDOS_CHAIN_ID
      )
      toast.closeAll()
      toast({
        title: 'Wrong network',
        description: `switch network to ${network.name}`,
        status: 'warning',
        duration: null,
      })
    } else {
      try {
        const signer = library.getSigner(account)
        const signature = await signer._signTypedData(
          MINTKUDOS_DOMAIN_INFO,
          adminTypes,
          value
        )
        // console.log('signature', signature)
        toast.closeAll()
        const bodyParameters = {
          address: account,
          kudosId,
          signature,
        }
        const result = await axios.post(`/api/sign-kudos`, bodyParameters)
        console.log(result.data)
        if (result.data?.error) {
          toast({
            title: `Signature for ${kudosId}`,
            description: result.data?.error,
            status: 'error',
            duration: 10000,
          })
        } else {
          toast({
            title: `Signature for ${kudosId}`,
            description: result.data?.result,
            status: 'success',
            duration: 10000,
          })
        }
      } catch (error) {
        // TODO: add error feedback
        console.error(error)
      }
    }
  }

  return (
    <Container maxW="container.xl">
      {LESSONS.map((lesson, index) => (
        <Box key={index}>
          {/* TODO: show if already signed in UI */}
          {lesson.kudosId && (
            <Button
              onClick={() => signMessage(lesson.kudosId)}
              variant="primary"
            >
              sign {lesson.kudosId}
            </Button>
          )}
        </Box>
      ))}
    </Container>
  )
}

export default Kudos
