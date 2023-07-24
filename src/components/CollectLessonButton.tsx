import { useEffect, useState } from 'react'
import {
  Box,
  Image,
  Button,
  useDisclosure,
  Image as ChakraImage,
  useToast,
} from '@chakra-ui/react'
import { LessonType } from 'entities/lesson'
import { useLocalStorage } from 'usehooks-ts'
import { switchNetwork } from '@wagmi/core'
import { isMobile } from 'react-device-detect'

import MintCollectibleModal from 'components/MintCollectibleModal'
import { getLessonsCollectors, isHolderOfNFT } from 'utils'
import ExternalLink from 'components/ExternalLink'
import Helper from 'components/Helper'
import { useAccount, useNetwork } from 'wagmi'
import { getLessonsCollected } from 'utils'
import LessonCollectibleModal from 'components/LessonCollectibleModal'
import {
  IS_WHITELABEL,
  MD_ENABLED,
  TOKEN_GATING_ENABLED,
} from 'constants/index'

const CollectiblesHelper = (
  <Helper
    title="Lesson Collectible"
    definition={
      <Box>
        <Box mb="4">
          Lesson collectibles are tradable NFTs containing lesson content from
          Bankless Academy, built for 100 passionate Bankless Explorers.
        </Box>
        <Box mb="4">
          Owning a lesson data-disk alters your in-site experience, gets you an
          invite to our collectors Discord channel, and displays your support
          for providing a free blockchain education for internet citizens around
          the globe.
        </Box>
        <Box mb="4">
          There are only 100 versions available for each collectible lesson, but
          if the original batch sells out you can always try the secondary
          market.
        </Box>
        <Box mb="4" fontSize="sm" fontStyle="italic">
          *10% creator fee on secondary trades.
        </Box>
      </Box>
    }
  />
)

export const openLesson = async (
  openedLesson: string,
  lesson: LessonType,
  toast: any,
  address?: string
): Promise<string> => {
  if (TOKEN_GATING_ENABLED && lesson.nftGating) {
    if (!address) {
      toast.closeAll()
      toast({
        title: 'This is a token gated lesson',
        description: 'Connect your wallet to access the lesson.',
        status: 'warning',
        duration: 20000,
        isClosable: true,
      })
      return openedLesson
    }
    const hasNFT = await isHolderOfNFT(address, lesson.nftGating)
    if (!hasNFT) {
      toast.closeAll()
      toast({
        title: "You don't own the required NFT",
        description: lesson?.nftGatingRequirements,
        status: 'warning',
        duration: 20000,
        isClosable: true,
      })
      return openedLesson
    }
  }
  const openedLessonArray = JSON.parse(openedLesson)
  return JSON.stringify(
    [...openedLessonArray, lesson.slug].filter(
      (value, index, array) => array.indexOf(value) === index
    )
  )
}

const CollectLessonButton = ({
  lesson,
}: {
  lesson: LessonType
}): JSX.Element => {
  const [isLessonMintedLS, setIsLessonMintedLS] = useLocalStorage(
    `isLessonMinted-${lesson.LessonCollectibleTokenAddress}`,
    false
  )
  const [isKudosMintedLS] = useLocalStorage(
    `isKudosMinted-${lesson.kudosId}`,
    false
  )
  const [tokenId, setTokenId] = useState('1')
  const {
    isOpen: isOpenMintCollectibleModal,
    onOpen: onOpenMintCollectibleModal,
    onClose: onCloseMintCollectibleModal,
  } = useDisclosure()
  const {
    isOpen: isOpenLessonCollectibleModal,
    onOpen: onOpenLessonCollectibleModal,
    onClose: onCloseLessonCollectibleModal,
  } = useDisclosure()
  const [numberOfOwners, setNumberOfOwners] = useState('--')
  const { address } = useAccount()
  const { chain } = useNetwork()
  const [lessonsCollectedLS, setLessonsCollectedLS] = useLocalStorage(
    'lessonsCollected',
    []
  )
  const [openLessonLS, setOpenLessonLS] = useLocalStorage(
    `lessonOpen`,
    JSON.stringify([])
  )
  const toast = useToast()

  const isLessonCollected =
    !!lesson.LessonCollectibleTokenAddress?.length &&
    lessonsCollectedLS.includes(
      lesson.LessonCollectibleTokenAddress.toLowerCase()
    )

  useEffect(() => {
    const updateNFTCollected = async () => {
      const lessonsCollected = await getLessonsCollected(address)
      if (lessonsCollected && Array.isArray(lessonsCollected))
        setLessonsCollectedLS(lessonsCollected)
    }
    if (!IS_WHITELABEL && address) {
      updateNFTCollected().catch(console.error)
    }
  }, [address])

  const updateLessonsCollectors = async () => {
    const NFTCollectors = await getLessonsCollectors(
      lesson.LessonCollectibleTokenAddress
    )
    setIsLessonMintedLS(false)
    for (const NFTCollector of NFTCollectors) {
      if (address && NFTCollector.ownerAddress === address.toLowerCase()) {
        setTokenId(
          parseInt(NFTCollector.tokenBalances[0].tokenId, 16).toString()
        )
        setIsLessonMintedLS(true)
      }
    }
    if (NFTCollectors) {
      setNumberOfOwners(
        NFTCollectors.reduce(
          (p, c) => p + c?.tokenBalances?.length,
          0
        ).toString()
      )
    }
  }
  useEffect(() => {
    updateLessonsCollectors().catch(console.error)
  }, [address])

  const share = `I've just bought a @BanklessAcademy "${lesson.name}" Lesson DATADISK™ to support the content production.
https://opensea.io/assets/optimism/${lesson.LessonCollectibleTokenAddress}/${tokenId}

Join the journey and level up your #web3 knowledge! 👨‍🚀🚀`

  const twitterLink = `https://twitter.com/intent/tweet?url=${encodeURIComponent(
    share
  )}`

  const lessonImage = (
    <Box py="2">
      {isLessonCollected ? (
        <>
          {isMobile ? (
            <Image src={lesson.lessonCollectibleGif} />
          ) : (
            <video autoPlay loop playsInline muted>
              <source
                src={lesson.lessonCollectibleVideo}
                type="video/webm"
              ></source>
            </video>
          )}
        </>
      ) : (
        <Image src={lesson.lessonImageLink} />
      )}
    </Box>
  )

  if (lesson.hasCollectible)
    return (
      <>
        <Box w="100%">
          {isLessonMintedLS ? (
            <Box
              border="1px solid #F1B15A"
              color="#F1B15A"
              borderTopRadius="8px"
              textAlign="center"
              py="3"
              px="5"
              position="relative"
              cursor="pointer"
              onClick={async () => {
                onOpenMintCollectibleModal()
                if (chain?.id !== 10) await switchNetwork({ chainId: 10 })
              }}
            >
              {CollectiblesHelper}
              <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
                fontSize="lg"
              >
                <Box fontWeight="bold">Collectible Minted</Box>
                <Box ml="4">({numberOfOwners}/100 claimed)</Box>
              </Box>
            </Box>
          ) : isKudosMintedLS ? (
            <Box
              background="linear-gradient(105.55deg, #fbba59 12.48%, #bf8260 95.84%)"
              borderTopRadius="8px"
              textAlign="center"
              py="3"
              px="5"
              position="relative"
              cursor="pointer"
              onClick={async () => {
                onOpenMintCollectibleModal()
                if (chain?.id !== 10) await switchNetwork({ chainId: 10 })
              }}
            >
              {CollectiblesHelper}
              <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
                fontSize="lg"
              >
                <Box fontWeight="bold">⚒️ Mint Collectible</Box>
                <Box ml="4">({numberOfOwners}/100 claimed)</Box>
              </Box>
            </Box>
          ) : (
            <Box
              border="1px solid #F1B15A"
              borderRadius="8px"
              textAlign="center"
              py="3"
              px="5"
              position="relative"
            >
              {CollectiblesHelper}
              <Box
                color="#F1B15A"
                display="flex"
                justifyContent="center"
                alignItems="center"
                fontSize="lg"
              >
                <Box fontWeight="bold">Complete to Collect</Box>
                <Box ml="4">({numberOfOwners}/100 claimed)</Box>
              </Box>
            </Box>
          )}
          <Box
            m="auto"
            maxW="500px"
            borderX="1px solid #4b474b"
            borderBottom="1px solid #4b474b"
            borderBottomRadius={isKudosMintedLS && isLessonMintedLS ? 0 : '8px'}
          >
            <Box
              style={{
                cursor: 'pointer',
              }}
              position="relative"
              minH="200px"
              onClick={async () =>
                setOpenLessonLS(
                  await openLesson(openLessonLS, lesson, toast, address)
                )
              }
            >
              {lessonImage}
              {MD_ENABLED && lesson.hasCollectible && (
                <Button
                  position="absolute"
                  size="sm"
                  top="5px"
                  right="5px"
                  zIndex="1"
                  onClick={(e) => {
                    e.stopPropagation()
                    onOpenLessonCollectibleModal()
                  }}
                >
                  &lt;/&gt;
                </Button>
              )}
            </Box>
          </Box>
          {isKudosMintedLS && isLessonMintedLS && (
            <Box
              border="1px solid #4b474b"
              borderBottomRadius="8px"
              borderTopWidth="0"
              textAlign="center"
              p="10px"
            >
              <Box pb="2">
                <ExternalLink href={twitterLink} mr="2">
                  <Button
                    variant="primaryGold"
                    isFullWidth
                    borderBottomRadius="0"
                    leftIcon={
                      <ChakraImage
                        width="24px"
                        height="24px"
                        src="/images/Twitter.svg"
                      />
                    }
                  >
                    Share on Twitter
                  </Button>
                </ExternalLink>
              </Box>
              <ExternalLink
                href={`https://opensea.io/assets/optimism/${lesson.LessonCollectibleTokenAddress}/${tokenId}`}
              >
                <Button
                  variant="primaryGold"
                  isFullWidth
                  borderTopRadius="0"
                  leftIcon={
                    <ChakraImage
                      width="24px"
                      height="24px"
                      src="/images/OpenSea.svg"
                    />
                  }
                >
                  View on OpenSea
                </Button>
              </ExternalLink>
            </Box>
          )}
        </Box>
        <MintCollectibleModal
          isOpen={isOpenMintCollectibleModal}
          onClose={onCloseMintCollectibleModal}
          lesson={lesson}
        />
        {MD_ENABLED && (
          <LessonCollectibleModal
            isOpen={isOpenLessonCollectibleModal}
            onClose={onCloseLessonCollectibleModal}
            lesson={lesson}
          />
        )}
      </>
    )
  else
    return (
      <Box
        onClick={async () =>
          setOpenLessonLS(
            await openLesson(openLessonLS, lesson, toast, address)
          )
        }
        cursor="pointer"
      >
        {lessonImage}
      </Box>
    )
}

export default CollectLessonButton
