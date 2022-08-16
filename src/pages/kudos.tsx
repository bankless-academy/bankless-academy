/* eslint-disable no-console */
import React from 'react'
import { Container, Button, Box, useToast } from '@chakra-ui/react'
import { GetStaticProps } from 'next'

import { MetaData } from 'components/Head'
import { useActiveWeb3React } from 'hooks'
import { LESSONS } from 'constants/index'
import networks from 'constants/networks'

const pageMeta: MetaData = {
  title: 'Kudos',
}

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: { pageMeta },
  }
}

const MINTKUDOS_API = process.env.NEXT_PUBLIC_MINTKUDOS_API
const IS_MINTKUDOS_SANDBOX =
  MINTKUDOS_API === 'https://sandbox-api.mintkudos.xyz'
const CHAIN_ID = IS_MINTKUDOS_SANDBOX ? 80001 : 137

const Kudos = (): JSX.Element => {
  const { account, library, chainId } = useActiveWeb3React()
  const toast = useToast()

  const signMessage = async (kudosId: number) => {
    const types = {
      AllowlistedAddress: [{ name: 'tokenId', type: 'uint256' }],
    }

    // The data to sign
    const value = {
      tokenId: kudosId,
    }
    const domainInfo = {
      name: 'Kudos',
      version: '7',
      // Mumbai | Polygon
      chainId: CHAIN_ID,
      verifyingContract: IS_MINTKUDOS_SANDBOX
        ? '0xB876baF8F69cD35fb96A17a599b070FBdD18A6a1'
        : '0x60576A64851C5B42e8c57E3E4A5cF3CF4eEb2ED6',
    }

    if (chainId !== CHAIN_ID) {
      const network = Object.values(networks).find(
        (network) => network.chainId === CHAIN_ID
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
        const signature = await signer._signTypedData(domainInfo, types, value)
        console.log('signature', signature)
        toast.closeAll()
        toast({
          title: `Signature for ${kudosId}`,
          description: signature,
          status: 'success',
          duration: null,
        })
        // TODO: save this in DB (verify signature + check if address is an authorized credential signer)
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
