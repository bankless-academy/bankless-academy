import { useEffect, useState } from 'react'
import {
  Box,
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
  const [tokenId, setTokenId] = useState(null)
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [numberOfOwners, setNumberOfOwners] = useState('--')
  const { address } = useAccount()

  useEffect(() => {
    const updateLessonsCollectors = async () => {
      const NFTCollectors = await getLessonsCollectors(
        lesson.LessonCollectibleTokenAddress
      )
      for (const NFTCollector of NFTCollectors) {
        if (NFTCollector.ownerAddress === address.toLowerCase()) {
          setTokenId(parseInt(NFTCollector.tokenBalances[0].tokenId, 16))
          setIsLessonMintedLS(true)
        }
      }
      if (NFTCollectors)
        setNumberOfOwners(
          NFTCollectors.reduce(
            (p, c) => p + c?.tokenBalances?.length,
            0
          ).toString()
        )
    }
    updateLessonsCollectors().catch(console.error)
  }, [address])

  const share = `I've just bought a @BanklessAcademy "${lesson.name}" Lesson DATADISK™ to support the content production.
https://testnets.opensea.io/assets/optimism-goerli/${lesson.LessonCollectibleTokenAddress}/${tokenId}

Join the journey and level up your #web3 knowledge! 👨‍🚀🚀`

  const twitterLink = `https://twitter.com/intent/tweet?url=${encodeURIComponent(
    share
  )}`

  if (lesson.hasCollectible)
    return (
      <>
        <Box w="232px">
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
          {isKudosMintedLS && (
            <Box
              border="1px solid #4b474b"
              borderBottomRadius="8px"
              borderTopWidth="0"
              textAlign="center"
              p="4"
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
                          <ChakraImage width="24px" src="/images/Twitter.svg" />
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
                        <ChakraImage width="24px" src="/images/OpenSea.svg" />
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
  else return <Box />
}

export default CollectLessonButton
