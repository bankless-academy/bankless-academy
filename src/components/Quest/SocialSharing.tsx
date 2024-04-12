import React, { useState, useEffect } from 'react'
import {
  Box,
  Spinner,
  Button,
  Text,
  Image as ChakraImage,
  Input,
  InputGroup,
  InputLeftAddon,
  InputRightElement,
} from '@chakra-ui/react'
import { CheckIcon, CloseIcon } from '@chakra-ui/icons'
// import { useTranslation } from 'react-i18next'

import { theme } from 'theme/index'
import { api, generateFarcasterLink, generateTwitterLink } from 'utils/index'
import { useSmallScreen } from 'hooks'
import ExternalLink from 'components/ExternalLink'
import { LESSONS } from 'constants/index'

const SocialSharing = (
  account: string,
  quest: string,
  share: string
): {
  isQuestCompleted: boolean
  questComponent: React.ReactElement
} => {
  // const { t } = useTranslation('quests', { keyPrefix: 'SocialSharing' })
  const [isQuestValidated, setIsQuestValidated] = useState(null)
  const [isSmallScreen] = useSmallScreen()
  const [messageLink, setMessageLink] = useState(
    localStorage.getItem(`quest-${quest}`) || ''
  )
  const [isLoading, setIsLoading] = useState(false)

  const validateQuest = async (messageLink) => {
    try {
      if (messageLink?.length > 0) {
        setIsLoading(true)
        const result = await api('/api/validate-quest', {
          address: account,
          quest,
          messageLink,
        })
        setIsLoading(false)
        if (result && result.status === 200) {
          setIsQuestValidated(result?.data?.isQuestValidated?.toString())
        } else {
          setIsQuestValidated('false')
          // TODO: handle errors
        }
      } else {
        setIsQuestValidated('false')
      }
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    if (account && messageLink?.length > 0) validateQuest(messageLink)
  }, [account])

  const shareLink = `${window.location.href}?referrer=${account}`

  const twitterLink = generateTwitterLink(share, shareLink)

  const farcasterLink = generateFarcasterLink(share, shareLink)

  const lesson = LESSONS.find((lesson) => lesson.quest === quest)

  if (!lesson)
    return {
      isQuestCompleted: false,
      questComponent: <>missing handbook</>,
    }

  return {
    isQuestCompleted: isQuestValidated === 'true',
    questComponent: (
      <>
        <Box display={isSmallScreen ? 'block' : 'flex'}>
          <Box width="100%" maxW="650px">
            <Text mx="0 !important" fontSize="xl" fontWeight="bold">
              {
                "Congratulations! You've reached the final step in this learning journey 🎓"
              }
            </Text>
            <Text mx="0 !important" fontSize="xl">
              {'Before claiming your onchain certification:'}
            </Text>
            <Text mx="0 !important" fontSize="xl">
              {`1. Spread the word about ${lesson.name} by sharing this lesson.`}
            </Text>
            <Box w="250px" m="auto">
              <Box pb="1">
                <ExternalLink href={twitterLink} mr="2">
                  <Button
                    variant="primary"
                    w="100%"
                    borderBottomRadius="0"
                    leftIcon={
                      <ChakraImage width="20px" src="/images/TwitterX.svg" />
                    }
                  >
                    {'Share on Twitter / X'}
                  </Button>
                </ExternalLink>
              </Box>
              <Box pb="1">
                <ExternalLink href={farcasterLink} mr="2">
                  <Button
                    variant="primary"
                    w="100%"
                    borderTopRadius="0"
                    leftIcon={
                      <ChakraImage width="20px" src="/images/Farcaster.svg" />
                    }
                  >
                    {'Share on Farcaster'}
                  </Button>
                </ExternalLink>
              </Box>
            </Box>
            <Box mt="8">
              <Text mx="0 !important" fontSize="xl">
                {'2. Paste the message link to verify and click Finish 📋 ✅'}
              </Text>
              <InputGroup maxW="530px">
                <InputLeftAddon width="71px">{'Link'}</InputLeftAddon>
                <Input
                  placeholder="https://..."
                  value={messageLink}
                  mb="8"
                  onChange={(e): void => {
                    setMessageLink(e.target.value)
                    localStorage.setItem(`quest-${quest}`, e.target.value)
                    validateQuest(e.target.value)
                  }}
                />
                <InputRightElement>
                  {isQuestValidated === 'true' ? (
                    <CheckIcon color={theme.colors.correct} />
                  ) : isLoading ? (
                    <Spinner speed="1s" />
                  ) : isQuestValidated === 'false' ? (
                    <CloseIcon color={theme.colors.incorrect} />
                  ) : null}
                </InputRightElement>
              </InputGroup>
            </Box>
            {/* {isQuestValidated !== 'true' && (
                <Box mt="24px !important" textAlign="center">
                  <Button onClick={validateQuest} variant="primary">
                    {t('Validate')}
                  </Button>
                </Box>
              )} */}
          </Box>
        </Box>
      </>
    ),
  }
}

export default SocialSharing
