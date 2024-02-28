/* eslint-disable no-console */
import { useState } from 'react'
import { Box, Button, Image as ChakraImage } from '@chakra-ui/react'
import { useLocalStorage } from 'usehooks-ts'
import { useTranslation } from 'react-i18next'
import { useAccount, useEnsName } from 'wagmi'

import { LessonType } from 'entities/lesson'
import MintBadge from 'components/MintBadge'
import { IS_WHITELABEL, TWITTER_ACCOUNT, DOMAIN_URL_ } from 'constants/index'
import { BADGE_OPENSEA_URL, BADGE_TO_KUDOS_IDS } from 'constants/badges'
import ExternalLink from 'components/ExternalLink'
import Helper from 'components/Helper'
import NFT from 'components/NFT'
import { generateFarcasterLink, generateTwitterLink } from 'utils/index'

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
  const { address } = current_wallet
    ? { address: current_wallet }
    : useAccount()
  const { data: ensName } = useEnsName({
    address: address,
    chainId: 1,
  })
  const [kudosMintedLS] = useLocalStorage(`kudosMinted`, [])
  // TODO: TRANSLATE
  const langURL = i18n.language !== 'en' ? `${i18n.language}/` : ''
  const shareLink = IS_WHITELABEL
    ? `${DOMAIN_URL_}/lessons/${langURL}${lesson.slug}`
    : `${DOMAIN_URL_}/explorer/${
        typeof ensName === 'string' && ensName?.includes('.')
          ? ensName
          : address
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
              'Academy Badges are non-tradable NFTs that serve as proof of your achievements on the blockchain. You can mint them for free after you answered all the questions correctly and validated the lesson quest.'
            )}
          </Box>
        </>
      }
      triggerOpen={triggerOpen}
    />
  )

  const kudosId = BADGE_TO_KUDOS_IDS[lesson.badgeId.toString()]
  const OpenSeaBadgeLink = kudosMintedLS.includes(kudosId)
    ? // old badges (kudos)
      `https://opensea.io/assets/matic/0x60576a64851c5b42e8c57e3e4a5cf3cf4eeb2ed6/${kudosId}`
    : // new badges
      `${BADGE_OPENSEA_URL}${lesson.badgeId}`

  return (
    <>
      <Box textAlign="center" mb="40px">
        <Box width="290px" m="auto">
          <Box
            width="290px"
            border="1px solid #4b474b"
            borderRadius="8px"
            position="relative"
          >
            {BadgeHelper}
            <Box opacity={isBadgeMintedLS ? '1' : '0.5'}>
              <NFT nftLink={lesson.badgeImageLink} />
            </Box>
            <Box p="4">
              {isBadgeMintedLS ? (
                <Box>
                  <Box pb="2">
                    <ExternalLink href={twitterLink} mr="2">
                      <Button
                        variant="primary"
                        w="100%"
                        borderBottomRadius="0"
                        leftIcon={
                          <ChakraImage
                            width="20px"
                            src="/images/TwitterX.svg"
                          />
                        }
                      >
                        {t('Share on Twitter / X')}
                      </Button>
                    </ExternalLink>
                  </Box>
                  <Box pb="2">
                    <ExternalLink href={farcasterLink} mr="2">
                      <Button
                        variant="primary"
                        w="100%"
                        borderRadius="0"
                        leftIcon={
                          <ChakraImage
                            width="20px"
                            src="/images/Farcaster.svg"
                          />
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
                  <Box
                    position="absolute"
                    cursor="not-allowed"
                    zIndex="2"
                    w="100%"
                    height="100%"
                    onClick={() => {
                      console.log('dd')
                      if (!isQuestCompleted) {
                        setTriggerOpen(true)
                        setTimeout(() => {
                          setTriggerOpen(false)
                        }, 100)
                      }
                    }}
                  />
                  <MintBadge
                    badgeId={lesson.badgeId}
                    isQuestCompleted={isQuestCompleted}
                  />
                </Box>
              )}
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  )
}

export default Badge
