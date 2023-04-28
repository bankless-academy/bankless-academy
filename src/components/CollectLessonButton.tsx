import { ReactNode, useEffect } from 'react'
import { QuestionIcon } from '@chakra-ui/icons'
import {
  Button,
  Box,
  IconButton,
  Tooltip,
  useDisclosure,
} from '@chakra-ui/react'
import { LessonType } from 'entities/lesson'
import { useLocalStorage } from 'usehooks-ts'

import MintCollectibleModal from 'components/MintCollectibleModal'
import { useAccount } from 'wagmi'
import { getLessonsCollected } from 'utils'

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

const CollectLessonButton = ({
  lesson,
}: {
  lesson: LessonType
}): JSX.Element => {
  const [isLessonMintedLS, setIsLessonMintedLS] = useLocalStorage(
    `isLessonMinted-${lesson.LessonCollectibleTokenAddress}`,
    false
  )
  const { isOpen, onOpen, onClose } = useDisclosure()
  const { address } = useAccount()

  useEffect(() => {
    const updateNFTCollected = async () => {
      const lessonsCollected = await getLessonsCollected(address)
      if (lessonsCollected && Array.isArray(lessonsCollected))
        setIsLessonMintedLS(
          lessonsCollected.includes(lesson.LessonCollectibleTokenAddress)
        )
    }
    if (address) {
      updateNFTCollected().catch(console.error)
    }
  }, [address])
  if (lesson.hasCollectible)
    return (
      <>
        {lesson.kudosId && (
          <Button
            variant={isLessonMintedLS ? 'primaryGold' : 'secondaryGold'}
            // onMouseEnter
            onClick={() => !isLessonMintedLS && onOpen()}
          >
            <ButtonHelper
              info="Lesson Collectible"
              definition={
                <>
                  <Box>
                    Lesson collectibles are tradable NFTs containing lesson
                    content from Bankless Academy, built for 100 passionate
                    Bankless Explorers. Owning a lesson data-disk alters your
                    in-site experience, gets you an invite to our collectors
                    Telegram group, and displays your support for providing a
                    free blockchain education for internet citizens around the
                    globe.
                  </Box>
                  <Box>
                    There are only 100 versions available for each collectible
                    lesson, but if the original batch sells out you can always
                    try the secondary market.
                  </Box>
                  <Box>*10% creator fee on secondary trades.</Box>
                </>
              }
            />
            <Box>
              <Box>
                {isLessonMintedLS ? 'Collectible Minted' : 'Mint Collectible'}
              </Box>
              <Box fontSize="xs">-XX/100 claimed-</Box>
            </Box>
          </Button>
        )}
        <MintCollectibleModal isOpen={isOpen} onClose={onClose} />
      </>
    )
}

export default CollectLessonButton
