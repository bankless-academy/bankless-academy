import { ReactNode, useEffect, useState } from 'react'
import { QuestionIcon } from '@chakra-ui/icons'
import {
  Box,
  Button,
  IconButton,
  Tooltip,
  useDisclosure,
  Image as ChakraImage,
} from '@chakra-ui/react'
import { LessonType } from 'entities/lesson'
import { useLocalStorage } from 'usehooks-ts'

import MintCollectibleModal from 'components/MintCollectibleModal'
import { getLessonsCollectors } from 'utils'
import ExternalLink from 'components/ExternalLink'

const ButtonHelper = ({
  info,
  definition,
}: {
  info: string
  definition: ReactNode
}): JSX.Element => (
  <Box position="absolute" top="-20px" right="-20px">
    <Tooltip hasArrow label={definition} closeOnClick={false}>
      <IconButton
        variant="unstyled"
        icon={<QuestionIcon color="white" />}
        aria-label={info}
      />
    </Tooltip>
  </Box>
)

const LessonCollectibleHelper = (
  <ButtonHelper
    info="Lesson Collectible"
    definition={
      <>
        <Box>
          Lesson collectibles are tradable NFTs containing lesson content from
          Bankless Academy, built for 100 passionate Bankless Explorers. Owning
          a lesson data-disk alters your in-site experience, gets you an invite
          to our collectors Telegram group, and displays your support for
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
  const [isLessonMintedLS] = useLocalStorage(
    `isLessonMinted-${lesson.LessonCollectibleTokenAddress}`,
    false
  )
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [numberOfOwners, setNumberOfOwners] = useState('--')

  useEffect(() => {
    const updateLessonsCollectors = async () => {
      const NFTCollectors = await getLessonsCollectors(
        lesson.LessonCollectibleTokenAddress
      )
      if (NFTCollectors) setNumberOfOwners(NFTCollectors.length.toString())
    }
    updateLessonsCollectors().catch(console.error)
  }, [])

  const twitterLink = ''

  if (lesson.hasCollectible)
    return (
      <>
        <Box>
          {isLessonMintedLS ? (
            <Box
              border="1px solid #F1B15A"
              color="#F1B15A"
              borderTopRadius="8px"
              textAlign="center"
              py="3"
              px="5"
              position="relative"
              // cursor={isLessonMintedLS ? 'auto' : 'pointer'}
              cursor="pointer"
              // onClick={() => !isLessonMintedLS && onOpen()}
              onClick={() => onOpen()}
            >
              {LessonCollectibleHelper}
              <Box>
                <Box>Collectible Minted</Box>
                <Box fontSize="xs">- {numberOfOwners}/100 claimed -</Box>
              </Box>
            </Box>
          ) : (
            <Box
              background="linear-gradient(105.55deg, #fbba59 12.48%, #bf8260 95.84%)"
              borderTopRadius="8px"
              textAlign="center"
              py="3"
              px="5"
              position="relative"
              // cursor={isLessonMintedLS ? 'auto' : 'pointer'}
              cursor="pointer"
              // onClick={() => !isLessonMintedLS && onOpen()}
              onClick={() => onOpen()}
            >
              {LessonCollectibleHelper}
              <Box>
                <Box fontWeight="bold">⚒️ Mint Collectible</Box>
                <Box fontSize="xs">- {numberOfOwners}/100 claimed -</Box>
              </Box>
            </Box>
          )}
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
                <ExternalLink href="https://testnets.opensea.io/assets/mumbai/0x464b891cc07adabe10746aa6af73a34c6d473cd9/1">
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
        </Box>
        <MintCollectibleModal isOpen={isOpen} onClose={onClose} />
      </>
    )
  else return <Box />
}

export default CollectLessonButton
