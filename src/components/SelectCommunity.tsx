/* eslint-disable no-console */
import React, { useState } from 'react'
import {
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Text,
  Box,
  Input,
  InputGroup,
  InputRightAddon,
  useToast,
} from '@chakra-ui/react'
import { ChevronDownIcon, ChevronUpIcon } from '@chakra-ui/icons'
import { useAccount, useWalletClient } from 'wagmi'
import { useLocalStorage } from 'usehooks-ts'
import { signMessage } from '@wagmi/core'
import { ShieldCheck, PlusCircle, XCircle } from '@phosphor-icons/react'

import { api } from 'utils/index'
import { WALLET_SIGNATURE_MESSAGE_PROFILE } from 'constants/index'
import { wagmiConfig } from 'utils/wagmi'
import { verifySignature } from 'utils/SignatureUtil'
const COMMUNITIES = [
  'Chippi',
  'Gitcoin',
  'Optimism',
  'Pudgy Penguins',
  'Regens Unite',
  'SheFi',
  'Zerion',
].sort((a, b) => a.localeCompare(b, undefined, { sensitivity: 'base' }))

const SelectCommunity = (): any => {
  const { address } = useAccount()
  const [community, setCommunity] = useLocalStorage(`community`, '')
  const { data: walletClient } = useWalletClient()
  const [addCommunity, setAddCommunity] = useState('')
  const [profileSignature, setProfileSignature] = useLocalStorage(
    'profile-signature',
    ''
  )
  const toast = useToast()

  const updateCommunity = async (newCommunity) => {
    let signature = profileSignature
    const previousCommunity = community
    const chainId = await walletClient?.getChainId()
    let isSignatureAreadyVerified = await verifySignature({
      address,
      signature,
      message: WALLET_SIGNATURE_MESSAGE_PROFILE,
      chainId,
    })
    if (!isSignatureAreadyVerified) {
      toast.closeAll()
      toast({
        title: `Update community`,
        description: `Open your wallet to sign a message.`,
        status: 'warning',
        duration: null,
      })
      try {
        signature = await signMessage(wagmiConfig, {
          account: address,
          message: WALLET_SIGNATURE_MESSAGE_PROFILE,
        })
      } catch (error) {
        setCommunity(addCommunity || previousCommunity)
        toast.closeAll()
        let errorMessage = error?.message?.split('\n')[0]
        if (errorMessage.includes('switch chain'))
          errorMessage += ` Try changing the network to Ethereum manually from your wallet.`
        toast({
          title: `Update community error`,
          description: `Error while signing the message: ${errorMessage}`,
          status: 'error',
          duration: 20000,
          isClosable: true,
        })
        console.log(error)
      }
      if (!signature) return
      toast.closeAll()
      setProfileSignature(signature)
      isSignatureAreadyVerified = await verifySignature({
        address,
        signature,
        message: WALLET_SIGNATURE_MESSAGE_PROFILE,
        chainId,
      })
    }
    if (isSignatureAreadyVerified) {
      try {
        const result = await api('/api/update-community', {
          address,
          community: newCommunity,
          signature,
          chainId,
        })
        if (result && result.status === 200) {
          setCommunity(newCommunity)
        } else {
          // TODO: handle errors
          console.log(result)
          toast.closeAll()
          toast({
            title: `Update community error`,
            description: `Error while updating the community: ${result?.data?.error}`,
            status: 'error',
            duration: 20000,
            isClosable: true,
          })
        }
      } catch (error) {
        console.log(error)
        toast.closeAll()
        toast({
          title: `Update community error`,
          description: `Error while updating the community: ${error}`,
          status: 'error',
          duration: 20000,
          isClosable: true,
        })
      }
    } else {
      setCommunity(addCommunity || previousCommunity)
      toast.closeAll()
      toast({
        title: `Update community error`,
        description: `Wrong signature`,
        status: 'error',
        duration: 20000,
        isClosable: true,
      })
    }
  }

  return (
    <>
      {addCommunity !== '' ? (
        <Box my="8" mx="4" display="flex" placeContent="center">
          <InputGroup maxW="400px">
            <Input
              value={community}
              placeholder={'Your community...'}
              onChange={(e): void => {
                const customCommunity = e.target.value
                setCommunity(customCommunity)
              }}
            />
            <InputRightAddon padding="0">
              <Button
                variant="primary"
                width="100%"
                borderRadius="6px"
                borderLeftRadius="0"
                onClick={async () => {
                  updateCommunity(community)
                  setAddCommunity('')
                }}
              >
                Save
              </Button>
            </InputRightAddon>
          </InputGroup>
          <Box placeContent="center" ml="2">
            <XCircle
              color="#ffffff70"
              size={24}
              cursor="pointer"
              onClick={async () => {
                setCommunity('')
                updateCommunity('')
                setAddCommunity('')
              }}
            />
          </Box>
        </Box>
      ) : (
        <Box mt="8" mx="4" display="flex" placeContent="center">
          <Menu>
            {({ isOpen }) => (
              <>
                <MenuButton
                  isActive={isOpen}
                  as={Button}
                  variant="secondary"
                  minW="250px"
                >
                  <Box display="flex" alignItems="center">
                    <Box flex="1" isTruncated>
                      {community || `Select Community`}
                    </Box>
                    {isOpen ? (
                      <ChevronUpIcon ml="1" />
                    ) : (
                      <ChevronDownIcon ml="1" />
                    )}
                  </Box>
                </MenuButton>
                <MenuList zIndex="10">
                  <Text
                    mt="-10px"
                    pt="10px"
                    pl="2"
                    pb="2"
                    bg="var(--chakra-colors-whiteAlpha-200)"
                    color="lightgrey"
                    display="flex"
                    alignItems="center"
                    fontWeight="bold"
                    minW="250px"
                  >
                    <ShieldCheck size={18} style={{ marginRight: '6px' }} />
                    {' Approved Communities'}
                  </Text>
                  {COMMUNITIES.map((c) => {
                    return (
                      <MenuItem
                        key={c}
                        minH="40px"
                        backgroundColor={
                          community === c ? 'blackAlpha.300' : 'default'
                        }
                        onClick={async () => {
                          if (community === c) updateCommunity('')
                          else await updateCommunity(c)
                        }}
                      >
                        <Box
                          ml="5"
                          display="flex"
                          alignItems="center"
                          placeContent="space-between"
                          w="100%"
                        >
                          {c}
                          {community === c && <XCircle size={20} />}
                        </Box>
                      </MenuItem>
                    )
                  })}
                  <MenuItem
                    minH="40px"
                    onClick={() => {
                      setCommunity('')
                      setAddCommunity(community)
                    }}
                    backgroundColor="default"
                  >
                    <PlusCircle size={20} style={{ marginRight: '6px' }} />
                    {' Suggest new community'}
                  </MenuItem>
                  {community && !COMMUNITIES.includes(community) && (
                    <MenuItem
                      minH="40px"
                      backgroundColor="blackAlpha.300"
                      onClick={async () => {
                        updateCommunity('')
                      }}
                    >
                      <Box
                        ml="5"
                        display="flex"
                        alignItems="center"
                        placeContent="space-between"
                        w="100%"
                      >
                        {community}
                        <XCircle size={20} />
                      </Box>
                    </MenuItem>
                  )}
                </MenuList>
              </>
            )}
          </Menu>
        </Box>
      )}
    </>
  )
}

export default SelectCommunity
