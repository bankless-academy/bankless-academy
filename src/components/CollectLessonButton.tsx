import { useEffect, useState } from 'react'
import {
  Box,
  Button,
  useDisclosure,
  Image as ChakraImage,
  UnorderedList,
  ListItem,
} from '@chakra-ui/react'
import { LessonType } from 'entities/lesson'
import { useLocalStorage } from 'usehooks-ts'
import { useAccount, useNetwork } from 'wagmi'
import { switchNetwork } from '@wagmi/core'
import { useTranslation } from 'react-i18next'

import MintCollectibleModal from 'components/MintCollectibleModal'
import { getLessonsCollectors, isHolderOfNFT } from 'utils'
import ExternalLink from 'components/ExternalLink'
import Helper from 'components/Helper'
import { getLessonsCollected } from 'utils'
import {
  IS_WHITELABEL,
  MD_ENABLED,
  TOKEN_GATING_ENABLED,
} from 'constants/index'
import Collectible from 'components/Collectible'

export const openLesson = async (
  openedLesson: string,
  lesson: LessonType,
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
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
  const { t } = useTranslation()
  const [isLessonMintedLS, setIsLessonMintedLS] = useLocalStorage(
    `isLessonMinted-${lesson.lessonCollectibleTokenAddress}`,
    false
  )
  const [isBadgeMintedLS] = useLocalStorage(
    `isBadgeMinted-${lesson.badgeId}`,
    false
  )
  const [tokenId, setTokenId] = useState('1')
  const {
    isOpen: isOpenMintCollectibleModal,
    onOpen: onOpenMintCollectibleModal,
    onClose: onCloseMintCollectibleModal,
  } = useDisclosure()
  // const {
  //   isOpen: isOpenLessonCollectibleModal,
  //   onOpen: onOpenLessonCollectibleModal,
  //   onClose: onCloseLessonCollectibleModal,
  // } = useDisclosure()
  const [numberOfOwners, setNumberOfOwners] = useState('--')
  const [numberIOwn, setNumberIOwn] = useState(1)
  const { address } = useAccount()
  const [, setLessonsCollectedLS] = useLocalStorage('lessonsCollected', [])
  const { chain } = useNetwork()

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
      lesson.lessonCollectibleTokenAddress
    )
    setIsLessonMintedLS(false)
    for (const NFTCollector of NFTCollectors) {
      if (address && NFTCollector.ownerAddress === address.toLowerCase()) {
        setTokenId(
          parseInt(NFTCollector.tokenBalances[0].tokenId, 16).toString()
        )
        if (NFTCollector.tokenBalances?.length >= 1)
          setNumberIOwn(NFTCollector.tokenBalances?.length)
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
    if (lesson.lessonCollectibleTokenAddress)
      updateLessonsCollectors().catch(console.error)
  }, [address])

  // TODO: TRANSLATE
  const share = `I’ve just collected ${numberIOwn} of 100 ‘${lesson.name}’ DataDisks from @BanklessAcademy.
https://opensea.io/assets/optimism/${lesson.lessonCollectibleTokenAddress}/${tokenId}

Become a Guardian of Bankless Academy today - join the effort to circulate @BanklessAcademy content and retroactively fund education public goods!`

  const twitterLink = `https://twitter.com/intent/tweet?url=${encodeURIComponent(
    share
  )}`

  // TODO: TRANSLATE
  const CollectiblesHelper = (
    <Helper
      title="Lesson Collectible"
      fullscreen
      definition={
        <Box>
          <Box mb="4">
            Lesson collectibles are tradable NFTs containing lesson content from
            Bankless Academy.
          </Box>
          <Box mb="4">
            Built for 100 passionate Bankless Explorers, owning a lesson
            DataDisk grants its Guardian the following perks:
            <br />
            <UnorderedList>
              <ListItem>
                Upgrading of normal lesson card to golden DataDisk artwork.
              </ListItem>
              <ListItem>
                Early invitation to the official ‘Bankless Academy’{' '}
                <ExternalLink
                  underline="true"
                  href="https://guild.xyz/bankless-academy"
                >
                  Discord server
                </ExternalLink>
                , and the dedicated ‘Guardian’ channel — where we discuss the
                future of collectible content at the Academy.
              </ListItem>
              <ListItem>
                Onchain display of your support for Bankless Academy and funding
                of education public goods.
              </ListItem>
              <ListItem>██████████████████ Soon™</ListItem>
            </UnorderedList>
          </Box>
          <Box mb="4">
            There are only 100 versions available for each collectible lesson.
            If the original batch sells out, try the secondary market. Join us
            and <b>become a Guardian of Bankless Academy</b> today!
          </Box>
          <Box mb="4" fontSize="sm" fontStyle="italic">
            <b>Note:</b> Maximum of two collectibles per wallet. 10% creator fee
            on secondary trades.
          </Box>
        </Box>
      }
    />
  )

  return (
    <Box maxW="450px" m="auto">
      <Box w="100%" position="relative">
        {CollectiblesHelper}
        <Button
          variant="primaryGold"
          w="100%"
          borderBottomRadius="0"
          height="51px"
          onClick={async () => {
            onOpenMintCollectibleModal()
            if (chain?.id !== 10 && address)
              await switchNetwork({ chainId: 10 })
          }}
        >
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            fontSize="lg"
          >
            <Box fontWeight="bold">{t('Collect DataDisk')}</Box>
            <Box ml="4">
              ({numberOfOwners}/{t('100 claimed')})
            </Box>
          </Box>
        </Button>
        <Box
          m="auto"
          maxW="500px"
          borderX="1px solid #4b474b"
          borderBottom="1px solid #4b474b"
          borderBottomRadius={isBadgeMintedLS && isLessonMintedLS ? 0 : '8px'}
          position="relative"
        >
          <>
            <Box
              py="2"
              opacity={isBadgeMintedLS ? '1' : '0.6'}
              cursor="pointer"
              onClick={async () => {
                onOpenMintCollectibleModal()
                if (chain?.id !== 10 && address)
                  await switchNetwork({ chainId: 10 })
              }}
            >
              <Collectible lesson={lesson} />
            </Box>
            {MD_ENABLED && lesson.hasCollectible && (
              <ExternalLink
                href={`https://github.com/bankless-academy/bankless-academy/blob/main/translation/lesson/en/${lesson.slug}.md?plain=1`}
              >
                <Button
                  position="absolute"
                  size="sm"
                  top="5px"
                  right="5px"
                  zIndex="1"
                  onClick={(e) => {
                    e.stopPropagation()
                    // onOpenLessonCollectibleModal()
                  }}
                >
                  &lt;/&gt;
                </Button>
              </ExternalLink>
            )}
          </>
        </Box>
        {isBadgeMintedLS && isLessonMintedLS && (
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
                  w="100%"
                  borderBottomRadius="0"
                  leftIcon={
                    <ChakraImage width="20px" src="/images/TwitterX.svg" />
                  }
                >
                  {t('Share on Twitter / X')}
                </Button>
              </ExternalLink>
            </Box>
            <Box pb="2">
              <ExternalLink
                href={`https://opensea.io/assets/optimism/${lesson.lessonCollectibleTokenAddress}/${tokenId}`}
              >
                <Button
                  variant="primaryGold"
                  w="100%"
                  borderRadius="0"
                  leftIcon={
                    <ChakraImage
                      width="24px"
                      height="24px"
                      src="/images/OpenSea.svg"
                    />
                  }
                >
                  {t('View on OpenSea')}
                </Button>
              </ExternalLink>
            </Box>
            <Box>
              <ExternalLink href="https://guild.xyz/bankless-academy">
                <Button
                  variant="primaryGold"
                  w="100%"
                  borderTopRadius="0"
                  leftIcon={
                    <ChakraImage
                      width="28px"
                      height="28px"
                      src="/images/Discord.svg"
                    />
                  }
                >
                  {t('Join the Discord')}
                </Button>
              </ExternalLink>
            </Box>
          </Box>
        )}
      </Box>
      <MintCollectibleModal
        isOpen={isOpenMintCollectibleModal}
        onClose={onCloseMintCollectibleModal}
        lesson={lesson}
        numberOfOwners={parseInt(numberOfOwners)}
      />
    </Box>
  )
}

export default CollectLessonButton
