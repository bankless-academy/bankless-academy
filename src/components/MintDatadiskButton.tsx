import { useEffect, useState } from 'react'
import {
  Box,
  Button,
  useDisclosure,
  Image as ChakraImage,
  UnorderedList,
  ListItem,
} from '@chakra-ui/react'
import { useLocalStorage } from 'usehooks-ts'
import { useAccount } from 'wagmi'
import { switchChain } from '@wagmi/core'
import { useTranslation } from 'react-i18next'
import { ShootingStar } from '@phosphor-icons/react'
import { isMobile } from 'react-device-detect'
import styled from '@emotion/styled'
import { optimism } from 'viem/chains'

import { LessonType } from 'entities/lesson'
import MintDatadiskModal from 'components/MintDatadiskModal'
import {
  generateFarcasterLink,
  generateTwitterLink,
  getLessonsCollectors,
  getLessonsCollected,
} from 'utils/index'
import ExternalLink from 'components/ExternalLink'
import Helper from 'components/Helper'
import { IS_WHITELABEL, NB_DATADISK_MAX } from 'constants/index'
import Datadisk from 'components/Datadisk'
import Card from 'components/Card'
import { wagmiConfig } from 'utils/wagmi'

const StyledCard = styled(Card)<{ issmallscreen?: string }>`
  box-shadow: none;
`

const MintDatadiskButton = ({
  lesson,
}: {
  lesson: LessonType
}): JSX.Element => {
  const { t } = useTranslation()
  const [nbDatadiskMintedLS, setNbDatadiskMintedLS] = useLocalStorage(
    `nbDatadiskMinted-${lesson.lessonCollectibleTokenAddress}`,
    0
  )
  const [tokenId, setTokenId] = useState('1')
  const {
    isOpen: isOpenMintDatadiskModal,
    onOpen: onOpenMintDatadiskModal,
    onClose: onCloseMintDatadiskModal,
  } = useDisclosure()
  const [numberOfOwners, setNumberOfOwners] = useState('--')
  const [numberIOwn, setNumberIOwn] = useState(1)
  const { address, chain } = useAccount()
  const [, setLessonsCollectedLS] = useLocalStorage('lessonsCollected', [])
  const [refreshDatadiskLS, setRefreshDatadiskLS] = useLocalStorage(
    'refreshDatadisk',
    false
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
      lesson.lessonCollectibleTokenAddress
    )
    setNbDatadiskMintedLS(0)
    for (const NFTCollector of NFTCollectors) {
      if (address && NFTCollector.ownerAddress === address.toLowerCase()) {
        setTokenId(
          parseInt(NFTCollector.tokenBalances[0].tokenId, 16).toString()
        )
        if (NFTCollector.tokenBalances?.length >= 1)
          setNumberIOwn(NFTCollector.tokenBalances?.length)
        setNbDatadiskMintedLS(NFTCollector.tokenBalances?.length)
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
    if (lesson.lessonCollectibleTokenAddress) {
      setRefreshDatadiskLS(false)
      updateLessonsCollectors().catch(console.error)
    }
  }, [address, refreshDatadiskLS])

  // TODO: TRANSLATE
  const shareLink = `https://app.banklessacademy.com/lessons/${lesson.slug}-datadisk`
  const share = `I’ve just collected ${numberIOwn} of 100 ‘${lesson.name}’ DataDisks from @BanklessAcademy.

Become a Guardian of Bankless Academy today - join the effort to circulate Bankless Academy content and retroactively fund education public goods!`

  const twitterLink = generateTwitterLink(share, shareLink)

  const farcasterLink = generateFarcasterLink(share, shareLink)

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
                , and the dedicated ‘Guardian’ channel.
              </ListItem>
              <ListItem>
                Onchain display of your support for Bankless Academy and funding
                of education public goods.
              </ListItem>
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
      <StyledCard w="100%" position="relative">
        {CollectiblesHelper}
        <Box
          m="auto"
          maxW="500px"
          border="1px solid #4b474b"
          borderRadius={'8px'}
          position="relative"
        >
          <>
            <Box opacity={nbDatadiskMintedLS > 0 ? '1' : '0.5'}>
              <Box
                cursor="pointer"
                onClick={async () => {
                  if (nbDatadiskMintedLS < NB_DATADISK_MAX) {
                    onOpenMintDatadiskModal()
                    if (chain?.id !== optimism.id && address)
                      await switchChain(wagmiConfig, { chainId: optimism.id })
                  } else {
                    window.open(
                      `https://opensea.io/assets/optimism/${lesson.lessonCollectibleTokenAddress}/${tokenId}`,
                      '_blank'
                    )
                  }
                }}
              >
                <Datadisk lesson={lesson} />
              </Box>
            </Box>
            {/* {MD_ENABLED && lesson.hasCollectible && (
              <InternalLink href={`${window.location.pathname}/content`}>
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
              </InternalLink>
            )} */}
          </>
          <Box textAlign="center" p="16px">
            <Box display="flex" pb={nbDatadiskMintedLS > 0 ? '1' : '0'}>
              <Button
                variant="primaryGold"
                w="full"
                height="51px"
                m="auto"
                isDisabled={!(nbDatadiskMintedLS < NB_DATADISK_MAX)}
                borderBottomRadius={nbDatadiskMintedLS > 0 ? '0' : '8px'}
                onClick={async () => {
                  onOpenMintDatadiskModal()
                  if (chain?.id !== optimism.id && address)
                    await switchChain(wagmiConfig, { chainId: optimism.id })
                }}
                leftIcon={
                  isMobile ? null : <ShootingStar width="28px" height="28px" />
                }
              >
                <Box
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                  fontSize="lg"
                >
                  <Box fontWeight="bold">
                    {nbDatadiskMintedLS < NB_DATADISK_MAX
                      ? t('Claim DataDisk')
                      : t('DataDisk Claimed')}
                  </Box>
                  <Box ml="2" fontWeight="normal">
                    ({numberOfOwners}/{t('100 minted')})
                  </Box>
                </Box>
              </Button>
            </Box>
            {nbDatadiskMintedLS > 0 && (
              <>
                <Box pb="1">
                  <ExternalLink href={twitterLink} mr="2">
                    <Button
                      variant="primaryGold"
                      w="100%"
                      borderRadius="0"
                      leftIcon={
                        <ChakraImage width="20px" src="/images/TwitterX.svg" />
                      }
                    >
                      {t('Share on Twitter / X')}
                    </Button>
                  </ExternalLink>
                </Box>
                <Box pb="1">
                  <ExternalLink href={farcasterLink} mr="2">
                    <Button
                      variant="primaryGold"
                      w="100%"
                      borderRadius="0"
                      leftIcon={
                        <ChakraImage width="20px" src="/images/Farcaster.svg" />
                      }
                    >
                      {t('Share on Farcaster')}
                    </Button>
                  </ExternalLink>
                </Box>
                <Box pb="1">
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
              </>
            )}
          </Box>
        </Box>
      </StyledCard>
      <MintDatadiskModal
        isOpen={isOpenMintDatadiskModal}
        onClose={onCloseMintDatadiskModal}
        lesson={lesson}
        numberOfOwners={parseInt(numberOfOwners)}
      />
    </Box>
  )
}

export default MintDatadiskButton
