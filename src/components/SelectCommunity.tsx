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
} from '@chakra-ui/react'
import { ChevronDownIcon, ChevronUpIcon } from '@chakra-ui/icons'
import { useAccount } from 'wagmi'
import { useLocalStorage } from 'usehooks-ts'

import { api } from 'utils/index'

const COMMUNITIES = [
  'Boys Club',
  'DAO Punk',
  'FWB',
  'Gitcoin',
  'Optimism Collective',
  'SheFi',
  'Zerion',
].sort()

const SelectCommunity = (): any => {
  const { address } = useAccount()
  const [community, setCommunity] = useLocalStorage(`community`, '')
  const [addCommunity, setAddCommunity] = useState(false)

  const updateCommunity = async (community) => {
    try {
      const result = await api('/api/update-community', {
        address,
        community,
      })
      if (result && result.status === 200) {
        setCommunity(community)
      } else {
        // TODO: handle errors
        console.log(result)
      }
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      {addCommunity ? (
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
                  setAddCommunity(false)
                }}
              >
                Save
              </Button>
            </InputRightAddon>
          </InputGroup>
        </Box>
      ) : (
        <Box my="8" mx="4" display="flex" placeContent="center">
          <Menu>
            {({ isOpen }) => (
              <>
                <MenuButton isActive={isOpen} as={Button} variant="secondary">
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
                  >
                    Select Community
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
                          await updateCommunity(c)
                        }}
                      >
                        <Box ml="4">{c}</Box>
                      </MenuItem>
                    )
                  })}
                  <MenuItem
                    minH="40px"
                    onClick={() => {
                      setCommunity('')
                      setAddCommunity(true)
                    }}
                    backgroundColor="default"
                  >
                    &gt; Suggest new community
                  </MenuItem>
                  {community && !COMMUNITIES.includes(community) && (
                    <MenuItem minH="40px" backgroundColor="blackAlpha.300">
                      <Box ml="4">{community}</Box>
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
