import {
  Button,
  Box,
  Image,
  useClipboard,
  InputRightAddon,
  InputGroup,
  Input,
  useMediaQuery,
} from '@chakra-ui/react'
import { Check, CopySimple } from '@phosphor-icons/react'
import ExternalLink from 'components/ExternalLink'
import { useEffect, useState } from 'react'
import {
  generateFacebookLink,
  generateFarcasterLink,
  generateHeyLink,
  generateLinkedinLink,
  generateTelegramLink,
  generateTwitterLink,
  generateWhatsappLink,
} from 'utils'

const ShareAction = ({
  shareMessage,
  shareLink,
}: {
  shareMessage: string
  shareLink: string
}): React.ReactElement => {
  const [shareLinkRandom, setShareLinkRandom] = useState(shareLink)
  const { onCopy, hasCopied } = useClipboard(shareLinkRandom)
  const [isMobileScreen] = useMediaQuery(['(max-width: 480px)'])

  useEffect(() => {
    if (
      shareLinkRandom.includes('/explorer/') &&
      !shareLinkRandom.includes('&r=')
    ) {
      const random = Math.floor(Math.random() * 100000)

      setShareLinkRandom(`${shareLinkRandom}&r=${random}`)
    }
  }, [shareLinkRandom])

  const twitterLink = generateTwitterLink(shareMessage, shareLinkRandom)
  const farcasterLink = generateFarcasterLink(shareMessage, shareLinkRandom)
  const heyLink = generateHeyLink(shareMessage, shareLinkRandom)
  const telegramLink = generateTelegramLink(shareMessage, shareLinkRandom)
  const linkedinLink = generateLinkedinLink(shareMessage, shareLinkRandom)
  const facebookLink = generateFacebookLink(shareMessage, shareLinkRandom)
  const whatsappLink = generateWhatsappLink(shareMessage, shareLinkRandom)

  return (
    <>
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        gap="10px"
      >
        <ExternalLink href={twitterLink}>
          <Image width="50px" src="/images/share/share-X.png" />
        </ExternalLink>
        <ExternalLink href={farcasterLink}>
          <Image width="50px" src="/images/share/share-Farcaster.png" />
        </ExternalLink>
        <ExternalLink href={heyLink}>
          <Image width="50px" src="/images/share/share-Lens.png" />
        </ExternalLink>
        <ExternalLink href={telegramLink}>
          <Image width="50px" src="/images/share/share-Telegram.png" />
        </ExternalLink>
        <ExternalLink href={facebookLink}>
          <Image width="50px" src="/images/share/share-Facebook.png" />
        </ExternalLink>
        <ExternalLink href={whatsappLink}>
          <Image width="50px" src="/images/share/share-WhatsApp.png" />
        </ExternalLink>
        <ExternalLink href={linkedinLink}>
          <Image width="50px" src="/images/share/share-LinkedIn.png" />
        </ExternalLink>
      </Box>
      <Box
        my="24px"
        display="flex"
        flexDirection="column"
        gap="10px"
        alignItems="center"
      >
        <InputGroup maxW="400px">
          <Input value={shareLinkRandom} readOnly />
          <InputRightAddon padding="0" w={isMobileScreen ? '50px' : '120px'}>
            <Button
              variant="primaryWhite"
              width="100%"
              borderRadius="6px"
              borderLeftRadius="0"
              leftIcon={
                hasCopied ? <Check size="30px" /> : <CopySimple size="30px" />
              }
              onClick={onCopy}
              isActive={hasCopied}
              iconSpacing={isMobileScreen ? '0' : '8px'}
            >
              {isMobileScreen ? '' : hasCopied ? 'Copied' : 'Copy'}
            </Button>
          </InputRightAddon>
        </InputGroup>
      </Box>
    </>
  )
}

export default ShareAction
