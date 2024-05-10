/* eslint-disable no-console */
import { useState } from 'react'
import { Box, Button, Image as ChakraImage } from '@chakra-ui/react'
import { useLocalStorage } from 'usehooks-ts'
import { useTranslation } from 'react-i18next'
import { useAccount, useEnsName } from 'wagmi'
import { ShootingStar } from '@phosphor-icons/react'
import styled from '@emotion/styled'

import { LessonType } from 'entities/lesson'
import MintBadge from 'components/MintBadge'
import { IS_WHITELABEL, TWITTER_ACCOUNT, DOMAIN_URL_ } from 'constants/index'
import { BADGE_OPENSEA_URL, BADGE_TO_KUDOS_IDS } from 'constants/badges'
import ExternalLink from 'components/ExternalLink'
import Helper from 'components/Helper'
import NFT from 'components/NFT'
import Card from 'components/Card'
import { generateFarcasterLink, generateTwitterLink } from 'utils/index'

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
  const [triggerOpen, setTriggerOpen] = useState(false)
  const [isBadgeMintedLS] = useLocalStorage(
    `isBadgeMinted-${lesson.badgeId}`,
    false
  )
  const current_wallet: any = localStorage.getItem('current_wallet')
  const { address } = useAccount()
  const { data: ensName } = useEnsName({
    address: address,
    chainId: 1,
  })
  const [, setConnectWalletPopupLS] = useLocalStorage(
    `connectWalletPopup`,
    false
  )
  const [kudosMintedLS] = useLocalStorage(`kudosMinted`, [])
  // TODO: TRANSLATE
  const langURL = i18n.language !== 'en' ? `${i18n.language}/` : ''
  const shareLink = IS_WHITELABEL
    ? `${DOMAIN_URL_}/lessons/${langURL}${lesson.slug}`
    : `${DOMAIN_URL_}/explorer/${
        typeof ensName === 'string' && ensName?.includes('.')
          ? ensName
          : address || current_wallet
      }?badge=${lesson.badgeId}&referral=true`

  const share = `I've just claimed my "${lesson.name}" onchain credential at @${TWITTER_ACCOUNT} 🎉

Join the journey and level up your #web3 knowledge! 👨‍🚀🚀`

  const twitterLink = generateTwitterLink(share, shareLink)

  const farcasterLink = generateFarcasterLink(share, shareLink)

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
    />
  )

  const kudosId = BADGE_TO_KUDOS_IDS[lesson.badgeId.toString()]
  const OpenSeaBadgeLink = kudosMintedLS.includes(kudosId)
    ? // old badges (kudos)
      `https://opensea.io/assets/matic/0x60576a64851c5b42e8c57e3e4a5cf3cf4eeb2ed6/${kudosId}`
    : // new badges
      `${BADGE_OPENSEA_URL}${lesson.badgeId}`

  return (
    <Box textAlign="center" mb="40px">
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
                <Box pb="1">
                  <ExternalLink href={twitterLink} mr="2">
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
                  </ExternalLink>
                </Box>
                <Box pb="1">
                  <ExternalLink href={twitterLink} mr="2">
                    <Button
                      variant="primary"
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
                      variant="primary"
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
                <ExternalLink href={OpenSeaBadgeLink}>
                  <Button
                    variant="primary"
                    w="100%"
                    borderTopRadius="0"
                    leftIcon={
                      <ChakraImage width="24px" src="/images/OpenSea.svg" />
                    }
                  >
                    {t('View on OpenSea')}
                  </Button>
                </ExternalLink>
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
      </StyledCard>
    </Box>
  )
}

export default Badge
