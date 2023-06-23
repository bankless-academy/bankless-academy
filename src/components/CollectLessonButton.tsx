import { useEffect, useState } from 'react'
import {
  Box,
  Image,
  Button,
  useDisclosure,
  Image as ChakraImage,
} from '@chakra-ui/react'
import { LessonType } from 'entities/lesson'
import { useLocalStorage } from 'usehooks-ts'

import MintCollectibleModal from 'components/MintCollectibleModal'
import { getLessonsCollectors } from 'utils'
import ExternalLink from 'components/ExternalLink'
import Helper from 'components/Helper'
import { useAccount } from 'wagmi'
import { getLessonsCollected } from 'utils'
import { IS_WHITELABEL } from 'constants/index'

const CollectiblesHelper = (
  <Helper
    title="Lesson Collectible"
    definition={
      <>
        <Box>
          Lesson collectibles are tradable NFTs containing lesson content from
          Bankless Academy, built for 100 passionate Bankless Explorers. Owning
          a lesson data-disk alters your in-site experience, gets you an invite
          to our collectors Discord channel, and displays your support for
          providing a free blockchain education for internet citizens around the
          globe.
        </Box>
        <Box>
          There are only 100 versions available for each collectible lesson, but
          if the original batch sells out you can always try the secondary
          market.
        </Box>
        <Box>*10% creator fee on secondary trades.</Box>
      </>
    }
  />
)

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
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [numberOfOwners, setNumberOfOwners] = useState('--')
  const { address } = useAccount()
  const [lessonsCollectedLS, setLessonsCollectedLS] = useLocalStorage(
    'lessonsCollected',
    []
  )
  const [, setIsLessonOpenLS] = useLocalStorage(`isLessonOpen`, false)

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
https://testnets.opensea.io/assets/optimism-goerli/${lesson.LessonCollectibleTokenAddress}/${tokenId}

Join the journey and level up your #web3 knowledge! 👨‍🚀🚀`

  const twitterLink = `https://twitter.com/intent/tweet?url=${encodeURIComponent(
    share
  )}`

  const lessonImage = (
    <>
      {isLessonCollected ? (
        <video autoPlay loop playsInline muted>
          <source
            src={lesson.lessonCollectibleVideo}
            type="video/webm"
          ></source>
        </video>
      ) : (
        <Image src={lesson.lessonImageLink} />
      )}
    </>
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
              onClick={() => onOpen()}
            >
              {CollectiblesHelper}
              <Box>
                <Box>Collectible Minted</Box>
                <Box fontSize="xs">- {numberOfOwners}/100 claimed -</Box>
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
              onClick={() => onOpen()}
            >
              {CollectiblesHelper}
              <Box>
                <Box fontWeight="bold">⚒️ Mint Collectible</Box>
                <Box fontSize="xs">- {numberOfOwners}/100 claimed -</Box>
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
              <Box color="#F1B15A">
                <Box fontWeight="bold">Complete to Collect</Box>
                <Box fontSize="xs">- {numberOfOwners}/100 claimed -</Box>
              </Box>
            </Box>
          )}
          <Box
            m="auto"
            maxW="500px"
            borderX="1px solid #4b474b"
            borderBottom="1px solid #4b474b"
          >
            <Box
              style={{
                cursor: 'pointer',
              }}
              position="relative"
              minH="200px"
              onClick={() => setIsLessonOpenLS(true)}
            >
              {lessonImage}
              {lesson.hasCollectible && (
                <Button
                  position="absolute"
                  size="sm"
                  top="5px"
                  right="5px"
                  zIndex="1"
                  onClick={(e) => {
                    e.stopPropagation()
                    setIsLessonOpenLS(true)
                  }}
                >
                  &lt;/&gt;
                </Button>
              )}
            </Box>
          </Box>
          {isKudosMintedLS && (
            <Box
              border="1px solid #4b474b"
              borderBottomRadius="8px"
              borderTopWidth="0"
              textAlign="center"
              p="10px"
            >
              {isLessonMintedLS ? (
                <>
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
                    href={`https://testnets.opensea.io/assets/optimism-goerli/${lesson.LessonCollectibleTokenAddress}/${tokenId}`}
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
                </>
              ) : (
                <>
                  <b>Price:</b> 0.05 Ξ
                </>
              )}
            </Box>
          )}
        </Box>
        <MintCollectibleModal
          isOpen={isOpen}
          onClose={onClose}
          lesson={lesson}
        />
      </>
    )
  else return <Box>{lessonImage}</Box>
}

export default CollectLessonButton
