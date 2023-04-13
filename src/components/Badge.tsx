import { Box, Button, Image as ChakraImage, Tooltip } from '@chakra-ui/react'
import { useLocalStorage } from 'usehooks-ts'
import { useAccount } from 'wagmi'

import { LessonType } from 'entities/lesson'
import MintKudos from 'components/MintKudos'
import { IS_WHITELABEL, TWITTER_ACCOUNT, DOMAIN_URL } from 'constants/index'
import { MINTKUDOS_URL, MINTKUDOS_OPENSEA_URL } from 'constants/kudos'
import ExternalLink from 'components/ExternalLink'

const Badge = ({
  lesson,
  isQuestCompleted,
}: {
  lesson: LessonType
  isQuestCompleted: boolean
}): JSX.Element => {
  const { address } = useAccount()
  const [isKudosMintedLS] = useLocalStorage(
    `isKudosMinted-${lesson.kudosId}`,
    false
  )

  const share = `I've just claimed my "${
    lesson.name
  }" on-chain credential at @${TWITTER_ACCOUNT} 🎉
${
  IS_WHITELABEL
    ? `
Go claim yours here 👇 ${DOMAIN_URL}/lessons/${lesson.slug}`
    : `${MINTKUDOS_URL}profile/${address}?tab=Received&tokenId=${lesson.kudosId}

Join the journey and level up your #web3 knowledge! 👨‍🚀🚀`
}`

  const twitterLink = `https://twitter.com/intent/tweet?url=${encodeURIComponent(
    share
  )}`

  return (
    <>
      <Box textAlign="center" mb="40px">
        <Box width="290px" m="auto">
          {isQuestCompleted && (
            <Button
              variant={isKudosMintedLS ? 'secondary' : 'primary'}
              w="100%"
              borderBottomRadius="0"
              disabled={!isQuestCompleted && !isKudosMintedLS}
            >
              {isKudosMintedLS ? 'Badge Minted' : 'Mint Badge'}
            </Button>
          )}
          <Box
            height="290px"
            width="290px"
            borderRadius={
              isKudosMintedLS
                ? '0px'
                : !isQuestCompleted
                ? '8px'
                : '0px 0px 8px 8px'
            }
            overflow="hidden"
            border="1px solid #4b474b"
            p="20px"
          >
            {lesson.kudosImageLink.includes('.mp4') ? (
              <video
                autoPlay
                loop
                playsInline
                muted
                style={{ borderRadius: '30px', overflow: 'hidden' }}
              >
                <source src={lesson.kudosImageLink} type="video/mp4"></source>
              </video>
            ) : (
              <ChakraImage src={lesson.kudosImageLink} height="250px" mb="2" />
            )}
            {lesson.kudosId && <MintKudos kudosId={lesson.kudosId} />}
          </Box>
          {isKudosMintedLS && (
            <Box
              display="flex"
              justifyContent="center"
              borderRadius="0px 0px 8px 8px"
              border="1px solid #4b474b"
              borderTop="0"
            >
              <ExternalLink href={`${MINTKUDOS_OPENSEA_URL}${lesson.kudosId}`}>
                <Tooltip hasArrow label="View on OpenSea">
                  <Button
                    leftIcon={
                      <ChakraImage width="24px" src="/images/OpenSea.svg" />
                    }
                  ></Button>
                </Tooltip>
              </ExternalLink>
              <ExternalLink href={twitterLink} mr="2">
                <Tooltip hasArrow label="Share on Twitter">
                  <Button
                    leftIcon={
                      <ChakraImage
                        width="24px"
                        src="/images/Twitter-blue.svg"
                      />
                    }
                  ></Button>
                </Tooltip>
              </ExternalLink>
            </Box>
          )}
        </Box>
      </Box>
    </>
  )
}

export default Badge
