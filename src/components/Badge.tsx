/* eslint-disable no-console */
import { useState } from 'react'
import { Box, Button, useDisclosure, useToast } from '@chakra-ui/react'
import { useLocalStorage } from 'usehooks-ts'
import { useTranslation } from 'react-i18next'
import { useAccount, useEnsName } from 'wagmi'
import { ShareFat, ShootingStar } from '@phosphor-icons/react'
import styled from '@emotion/styled'

import { LessonType } from 'entities/lesson'
import MintBadge from 'components/MintBadge'
import { IS_WHITELABEL, TWITTER_ACCOUNT } from 'constants/index'
import { BADGE_OPENSEA_URL, BADGE_TO_KUDOS_IDS } from 'constants/badges'
import Helper from 'components/Helper'
import NFT from 'components/NFT'
import Card from 'components/Card'
import ShareModal from 'components/ShareModal'

const StyledCard = styled(Card)<{ issmallscreen?: string }>`
  box-shadow: none;
`

const StyledButton = styled(Button)`
  ::before {
    border-radius: 8px 8px 0 0 !important;
  }
`

const Badge = ({
  lesson,
  isQuestCompleted,
}: {
  lesson: LessonType
  isQuestCompleted: boolean
}): JSX.Element => {
  const { t, i18n } = useTranslation()
  const toast = useToast()
  const [triggerOpen, setTriggerOpen] = useState(false)
  const [isBadgeMintedLS] = useLocalStorage(
    `isBadgeMinted-${lesson.badgeId}`,
    false
  )
  const [currentWallet] = useLocalStorage('current_wallet', '')
  const { address } = useAccount()
  const { data: ensName } = useEnsName({
    address: address,
    chainId: 1,
  })
  const [, setConnectWalletPopupLS] = useLocalStorage(
    `connectWalletPopup`,
    false
  )
  const {
    isOpen: isShareOpen,
    onOpen: onShareOpen,
    onClose: onShareClose,
  } = useDisclosure()
  const [kudosMintedLS] = useLocalStorage(`kudosMinted`, [])
  const langURL = i18n.language !== 'en' ? `${i18n.language}` : ''
  const lang = langURL ? `&lng=${langURL}` : ''
  const locationOrigin =
    typeof window !== 'undefined' ? `${window.location.origin}` : ''
  const shareLink = IS_WHITELABEL
    ? `${locationOrigin}/lessons/${lang}${lesson.slug}`
    : `${locationOrigin}/explorer/${
        typeof ensName === 'string' && ensName?.includes('.')
          ? ensName
          : address || currentWallet
      }?badge=${lesson.badgeId}&referral=true${lang}`

  // TODO: TRANSLATE
  const shareMessage = `I've just claimed my "${lesson.name}" onchain certification at @${TWITTER_ACCOUNT} 🎉

Join the journey and level up your #web3 knowledge! 👨‍🚀🚀`

  const BadgeHelper = (
    <Helper
      title={t('Academy Badges')}
      definition={
        <>
          <Box>
            {t(
              "Academy Badges are onchain certifications representing your achievements. You can claim badges for free after you've completed your lesson and quest."
            )}
          </Box>
        </>
      }
      triggerOpen={triggerOpen}
      helpLink="/faq#ee66feb29b2041549f364a3480064aac"
      onCloseParent={() => {
        if (!address) {
          // do nothing
        } else if (!isQuestCompleted) {
          toast.closeAll()
          toast({
            title: 'Badge claiming',
            description: `Complete the lesson${
              lesson?.quest ? ' and the quest' : ''
            } before claiming the badge.`,
            status: 'warning',
            duration: 10000,
            isClosable: true,
          })
        }
      }}
    />
  )

  const kudosId = BADGE_TO_KUDOS_IDS[lesson.badgeId.toString()]
  // TODO: handle polygon badges?
  const OpenSeaBadgeLink = kudosMintedLS.includes(kudosId)
    ? // old badges (kudos)
      `https://opensea.io/assets/matic/0x60576a64851c5b42e8c57e3e4a5cf3cf4eeb2ed6/${kudosId}`
    : // new badges
      `${BADGE_OPENSEA_URL}${lesson.badgeId}`

  return (
    <Box textAlign="center" mb="20px">
      <StyledCard width="290px" m="auto">
        <Box
          width="290px"
          border="1px solid #4b474b"
          borderRadius="8px"
          position="relative"
        >
          {BadgeHelper}
          <Box opacity={isBadgeMintedLS ? '1' : '0.5'} position="relative">
            <Box position="absolute" w="100%" height="100%" px="19px">
              <Box
                w="100%"
                height="100%"
                cursor={!isBadgeMintedLS ? 'help' : 'pointer'}
                borderRadius="50%"
                zIndex="2"
                onClick={() => {
                  if (!isBadgeMintedLS) {
                    setTriggerOpen(true)
                    setTimeout(() => {
                      setTriggerOpen(false)
                    }, 100)
                  } else {
                    window.open(OpenSeaBadgeLink, '_blank')
                  }
                }}
              />
            </Box>
            <NFT nftLink={lesson.badgeImageLink} />
          </Box>
          <Box p="4">
            {isBadgeMintedLS ? (
              <Box>
                <Box pb="2">
                  <StyledButton
                    variant="primary"
                    height="51px"
                    w="100%"
                    borderBottomRadius="0"
                    leftIcon={<ShootingStar width="28px" height="28px" />}
                    isDisabled={true}
                  >
                    {t('Badge Claimed')}
                  </StyledButton>
                </Box>
                <Button
                  variant="primary"
                  w="100%"
                  height="51px"
                  borderTopRadius="0"
                  leftIcon={<ShareFat width="28px" height="28px" />}
                  onClick={() => {
                    onShareOpen()
                  }}
                >
                  Share & Refer
                </Button>
              </Box>
            ) : (
              <Box position="relative">
                {(!address || !isQuestCompleted) && (
                  <Box
                    position="absolute"
                    cursor="help"
                    borderRadius="8px"
                    zIndex="2"
                    w="100%"
                    height="100%"
                    onClick={() => {
                      if (!address) {
                        setConnectWalletPopupLS(true)
                      } else if (!isQuestCompleted) {
                        setTriggerOpen(true)
                        setTimeout(() => {
                          setTriggerOpen(false)
                        }, 100)
                      }
                    }}
                  />
                )}
                <MintBadge
                  badgeId={lesson.badgeId}
                  isQuestCompleted={isQuestCompleted}
                />
              </Box>
            )}
          </Box>
        </Box>
        <ShareModal
          isOpen={isShareOpen}
          onClose={onShareClose}
          shareTitle="Share Badge, Earn Points"
          shareMessage={shareMessage}
          shareLink={shareLink}
        />
      </StyledCard>
    </Box>
  )
}

export default Badge
