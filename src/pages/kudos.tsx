/* eslint-disable no-console */
import React from 'react'
import { Container, Button } from '@chakra-ui/react'
import { GetStaticProps } from 'next'
import axios from 'axios'

import { MetaData } from 'components/Head'
import { useActiveWeb3React } from 'hooks'

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

// TODO: make this dynamic -> lesson.mintKudosTokenId
const tokenId = 628

const Kudos = (): JSX.Element => {
  const { account, library } = useActiveWeb3React()

  const signMessage = async () => {
    const types = {
      AllowlistedAddress: [{ name: 'tokenId', type: 'uint256' }],
    }

    // The data to sign
    const value = {
      tokenId: tokenId,
    }
    const domainInfo = {
      name: 'Kudos',
      version: '7',
      // Mumbai | Polygon
      chainId: IS_MINTKUDOS_SANDBOX ? 80001 : 137,
      verifyingContract: IS_MINTKUDOS_SANDBOX
        ? '0xB876baF8F69cD35fb96A17a599b070FBdD18A6a1'
        : '0x60576A64851C5B42e8c57E3E4A5cF3CF4eEb2ED6',
    }

    try {
      const signer = library.getSigner(account)
      const signature = await signer._signTypedData(domainInfo, types, value)
      console.log('signature', signature)
      const bodyParameters = {
        address: account,
        kudosTokenId: tokenId,
        signature,
        message: value,
      }
      const result = await axios.post(`/api/mint-kudos`, bodyParameters)
      console.log(result)
      console.log(result.data)
      // TODO: check header/Location to know when the token has been claimed
      // if (result) setIsKudosClaimed(true)
    } catch (error) {
      // TODO: add error feedback
      console.error(error)
    }
  }

  return (
    <Container maxW="container.xl">
      <Button onClick={signMessage} variant="primary">
        sign
      </Button>
    </Container>
  )
}

export default Kudos
