import { useEffect, useState } from 'react'
import {
  Box,
  Button,
  IconButton,
  useDisclosure,
  Image as ChakraImage,
  Icon,
} from '@chakra-ui/react'
import { LessonType } from 'entities/lesson'
import { useLocalStorage } from 'usehooks-ts'

import MintCollectibleModal from 'components/MintCollectibleModal'
import { getLessonsCollectors } from 'utils'
import ExternalLink from 'components/ExternalLink'
import HelpModal from 'components/HelpModal'

const QuestionIcon = (props) => (
  <Icon
    width={props.size === 'lg' ? '30px' : '24px'}
    height={props.size === 'lg' ? '30px' : '24px'}
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      d="M12.0002 21C16.9708 21 21.0002 16.9706 21.0002 12C21.0002 7.02944 16.9708 3 12.0002 3C7.02968 3 3.00024 7.02944 3.00024 12C3.00024 16.9706 7.02968 21 12.0002 21Z"
      fill="#1A191A"
      stroke="#C6C6C6"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M12 17.8125C12.5178 17.8125 12.9375 17.3928 12.9375 16.875C12.9375 16.3572 12.5178 15.9375 12 15.9375C11.4822 15.9375 11.0625 16.3572 11.0625 16.875C11.0625 17.3928 11.4822 17.8125 12 17.8125Z"
      fill="#C6C6C6"
    />
    <path
      d="M12 13.5004V12.7504C12.5192 12.7504 13.0267 12.5965 13.4584 12.308C13.8901 12.0196 14.2265 11.6096 14.4252 11.13C14.6239 10.6503 14.6758 10.1225 14.5746 9.61332C14.4733 9.10412 14.2233 8.63639 13.8562 8.26927C13.489 7.90216 13.0213 7.65215 12.5121 7.55087C12.0029 7.44958 11.4751 7.50156 10.9955 7.70024C10.5158 7.89892 10.1058 8.23538 9.81739 8.66706C9.52895 9.09874 9.375 9.60625 9.375 10.1254"
      stroke="#C6C6C6"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Icon>
)

const ButtonHelper = ({
  onOpenHelpModal,
}: {
  onOpenHelpModal: any
}): JSX.Element => {
  const [isHover, setIsHover] = useState(false)
  return (
    <Box
      position="absolute"
      top={isHover ? '-15px' : '-12px'}
      right={isHover ? '-15px' : '-12px'}
    >
      <IconButton
        variant="unstyled"
        size={isHover ? 'lg' : 'md'}
        onClick={(e) => {
          e.stopPropagation()
          onOpenHelpModal()
        }}
        display="contents"
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
        icon={<QuestionIcon size={isHover ? 'lg' : 'md'} />}
        aria-label=""
      />
    </Box>
  )
}

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
  const {
    isOpen: isOpenHelpModal,
    onOpen: onOpenHelpModal,
    onClose: onCloseHelpModal,
  } = useDisclosure()

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
          <HelpModal
            isOpen={isOpenHelpModal}
            onClose={onCloseHelpModal}
            title="Lesson Collectible"
            definition={
              <>
                <Box>
                  Lesson collectibles are tradable NFTs containing lesson
                  content from Bankless Academy, built for 100 passionate
                  Bankless Explorers. Owning a lesson data-disk alters your
                  in-site experience, gets you an invite to our collectors
                  Telegram group, and displays your support for providing a free
                  blockchain education for internet citizens around the globe.
                </Box>
                <Box>
                  There are only 100 versions available for each collectible
                  lesson, but if the original batch sells out you can always try
                  the secondary market.
                </Box>
                <Box>*10% creator fee on secondary trades.</Box>
              </>
            }
          />
          {isLessonMintedLS ? (
            <Box
              border="1px solid #F1B15A"
              color="#F1B15A"
              borderTopRadius="8px"
              textAlign="center"
              py="3"
              px="5"
              position="relative"
            >
              <ButtonHelper onOpenHelpModal={onOpenHelpModal} />
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
              cursor="pointer"
              onClick={() => onOpen()}
            >
              <ButtonHelper onOpenHelpModal={onOpenHelpModal} />
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
