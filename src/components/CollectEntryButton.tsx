import { Box, Button, Tooltip, useToast } from '@chakra-ui/react'
import { LessonType } from 'entities/lesson'
import { ethers } from 'ethers'
import { useEffect, useState } from 'react'
import {
  usePrepareContractWrite,
  useContractWrite,
  useWaitForTransaction,
  useAccount,
} from 'wagmi'
import { Gear, SealCheck } from '@phosphor-icons/react'

import ExternalLink from 'components/ExternalLink'
import { useSmallScreen } from 'hooks'
import { getArticlesCollectors } from 'utils'

const CollectEntryButton = ({
  lesson,
}: {
  lesson: LessonType
}): JSX.Element => {
  if (!lesson.mirrorNFTAddress) return
  const { address } = useAccount()
  const toast = useToast()
  const [isSmallScreen] = useSmallScreen()
  const [numberMinted, setNumberMinted] = useState('-')

  const { config } = usePrepareContractWrite({
    address: lesson.mirrorNFTAddress,
    abi: [
      {
        inputs: [
          {
            internalType: 'address',
            name: 'tokenRecipient',
            type: 'address',
          },
          { internalType: 'string', name: 'message', type: 'string' },
        ],
        name: 'purchase',
        outputs: [
          { internalType: 'uint256', name: 'tokenId', type: 'uint256' },
        ],
        stateMutability: 'payable',
        type: 'function',
      },
    ],
    functionName: 'purchase',
    args: [address, ''],
    overrides: {
      // 0.01 + 0.00069 in collector fee
      value: ethers.utils.parseEther('0.01069'),
      gasLimit: ethers.BigNumber.from(150000),
    },
  })
  const { data, write } = useContractWrite(config)

  const { isLoading, isSuccess } = useWaitForTransaction({
    hash: data?.hash,
  })

  const updateArticlesCollectors = async () => {
    const NFTCollectors = await getArticlesCollectors(lesson.mirrorNFTAddress)
    NFTCollectors.reduce((p, c) => p + c?.tokenBalances?.length, 0)
    setNumberMinted(
      NFTCollectors.reduce(
        (p, c) => p + c?.tokenBalances?.length,
        0
      )?.toString()
    )
  }
  useEffect(() => {
    if (lesson.mirrorNFTAddress && address)
      updateArticlesCollectors().catch(console.error)
  }, [address])

  useEffect(() => {
    if (isLoading) {
      toast.closeAll()
      const txLink = `https://optimistic.etherscan.io/tx/${data?.hash}`
      toast({
        description: (
          <>
            <Box>
              <Box display="flex">
                <Box mr="4">
                  <Gear width="40px" height="auto" />
                </Box>
                <Box flexDirection="column">
                  <Box>Minting in progress:</Box>
                  <ExternalLink href={txLink} alt="Transaction in progress">
                    {isSmallScreen ? `${txLink.substring(0, 40)}...` : txLink}
                  </ExternalLink>
                </Box>
              </Box>
            </Box>
          </>
        ),
        status: 'warning',
        duration: null,
        isClosable: true,
      })
    }
  }, [isLoading])

  useEffect(() => {
    if (isSuccess) {
      toast.closeAll()
      // HACK: guess tokenId
      const txLink = `https://opensea.io/assets/optimism/${
        lesson.mirrorNFTAddress
      }/${1 + parseInt(numberMinted)}`
      toast({
        description: (
          <>
            <Box>
              <Box display="flex">
                <Box mr="4">
                  <SealCheck width="40px" height="auto" />
                </Box>
                <Box flexDirection="column">
                  <Box>Entry minted:</Box>
                  <ExternalLink href={txLink} alt="Transaction in progress">
                    {isSmallScreen ? `${txLink.substring(0, 40)}...` : txLink}
                  </ExternalLink>
                </Box>
              </Box>
            </Box>
          </>
        ),
        status: 'success',
        duration: 10000,
        isClosable: true,
      })
    }
  }, [isSuccess])

  const openInNewTab = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer')
  }

  return (
    <Box>
      <Tooltip hasArrow label="Collect Mirror Entry">
        <Button
          isDisabled={!write || isLoading}
          loadingText="Minting ..."
          variant="primaryGold"
          w="100%"
          onClick={() =>
            numberMinted !== '-'
              ? parseInt(numberMinted) >= 100
                ? openInNewTab(`https://opensea.io/collection/${lesson.slug}`)
                : write()
              : alert('try again in 2 seconds')
          }
        >
          Collect Entry
        </Button>
      </Tooltip>
      {isSuccess && (
        <div>
          Successfully minted your NFT!
          <div>
            <a href={`https://etherscan.io/tx/${data?.hash}`}>Etherscan</a>
          </div>
        </div>
      )}
    </Box>
  )
}
export default CollectEntryButton
