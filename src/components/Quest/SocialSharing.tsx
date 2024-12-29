/* eslint-disable no-console */
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
  Icon,
} from '@chakra-ui/react'
import { CheckIcon, CloseIcon } from '@chakra-ui/icons'
// import { useTranslation } from 'react-i18next'

import { theme } from 'theme/index'
import { api, generateFarcasterLink, generateTwitterLink } from 'utils/index'
import { useSmallScreen } from 'hooks/index'
import ExternalLink from 'components/ExternalLink'
import { LESSONS } from 'constants/index'
import { EMPTY_PASSPORT, STAMP_PLATFORMS } from 'constants/passport'
import { useLocalStorage } from 'usehooks-ts'

const CircleIcon = (props) => (
  <Icon viewBox="0 0 200 200" {...props}>
    <path
      fill="currentColor"
      d="M 100, 100 m -75, 0 a 75,75 0 1,0 150,0 a 75,75 0 1,0 -150,0"
    />
  </Icon>
)

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
  const [error, setError] = useState('')
  const [loadingStamp, setLoadingStamp] = useState('')
  const [passportLS, setPassportLS] = useLocalStorage(
    'passport',
    EMPTY_PASSPORT
  )
  const [refreshPassportLS, setRefreshPassportLS] = useLocalStorage(
    'refreshPassport',
    false
  )
  const [isLoading, setIsLoading] = useState(false)
  const address = account

  const lesson = LESSONS.find((lesson) => lesson.quest === quest)

  const socialSharingQuestType = lesson?.questSocialMessage?.startsWith('http')
    ? 'RT'
    : 'TWEET'

  const platform = STAMP_PLATFORMS['twitter']
  const stamps = passportLS?.stamps ? Object.keys(passportLS.stamps) : []
  const stamp = stamps?.includes('twitterAccountAgeGte#180')

  async function checkPassport() {
    // setIsLoading(true)
    const result = await api('/api/passport', { address })
    if (result && result.status === 200) {
      // setIsLoading(false)
      setPassportLS(result.data)
    } else {
      // TODO: handle errors
    }
  }

  useEffect(() => {
    checkPassport()
  }, [address])

  useEffect(() => {
    if (refreshPassportLS) {
      setRefreshPassportLS(false)
      checkPassport()
    }
  }, [refreshPassportLS])

  const validateQuest = async (messageLink = '', firstLoad = false) => {
    try {
      if (messageLink?.length > 0 || socialSharingQuestType === 'RT') {
        setIsLoading(true)
        const result = await api('/api/validate-quest', {
          address: account,
          quest,
          messageLink,
        })
        setIsLoading(false)
        if (result && result.status === 200) {
          const isQuestValidated = result?.data?.isQuestValidated
          if (!isQuestValidated) {
            if (!firstLoad) setError(result?.data?.error || 'Unknow error.')
          } else {
            setError('')
          }
          setIsQuestValidated(isQuestValidated?.toString())
        } else {
          setIsQuestValidated('false')
          // TODO: handle errors
        }
      } else {
        setIsQuestValidated('false')
      }
    } catch (error) {
      setIsLoading(false)
      console.error(error)
    }
  }

  useEffect(() => {
    if (
      account &&
      (messageLink?.length > 0 || (socialSharingQuestType === 'RT' && stamp))
    )
      validateQuest(messageLink, true)
  }, [account])

  const linkPlatform = (platform) => {
    setLoadingStamp(platform)
    const width = 600
    const height = 800
    const left = window.screen.width / 2 - width / 2
    const top = window.screen.height / 2 - height / 2
    const random = Math.floor(Math.random() * 100000)
    const authUrl: string = STAMP_PLATFORMS[platform].oauth
      ?.replace('RANDOM_STATE', `&state=${random}`)
      ?.replaceAll('REPLACE_ADDRESS', `${address}`)
    console.log(authUrl)
    const page = window.open(
      authUrl,
      '_blank',
      `toolbar=no, location=no, directories=no, status=no, menubar=no, resizable=no, copyhistory=no, width=${width}, height=${height}, top=${top}, left=${left}`
    )
    const timer = setInterval(function () {
      if (page.closed) {
        clearInterval(timer)
        setLoadingStamp('')
      }
    }, 1000)
  }

  const shareLink = `${window.location.href}?referrer=${account}`

  const twitterLink = generateTwitterLink(share, shareLink)

  const farcasterLink = generateFarcasterLink(share, shareLink)

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
            {socialSharingQuestType === 'TWEET' ? (
              <>
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
                          <ChakraImage
                            width="20px"
                            src="/images/TwitterX.svg"
                          />
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
                          <ChakraImage
                            width="20px"
                            src="/images/Farcaster.svg"
                          />
                        }
                      >
                        {'Share on Farcaster'}
                      </Button>
                    </ExternalLink>
                  </Box>
                </Box>
                <Box mt="8">
                  <Text mx="0 !important" fontSize="xl">
                    {
                      '2. Paste the message link to verify and click Finish 📋 ✅'
                    }
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
                        <Spinner size="sm" speed="1s" />
                      ) : isQuestValidated === 'false' ? (
                        <CloseIcon color={theme.colors.incorrect} />
                      ) : null}
                    </InputRightElement>
                  </InputGroup>
                </Box>
              </>
            ) : (
              <>
                <Text mx="0 !important" fontSize="xl">
                  {`1. Link your Twitter account.`}
                </Text>
                <Box
                  display="flex"
                  alignItems="center"
                  h="60px"
                  w="300px"
                  m="auto"
                  my={8}
                >
                  <Box width="40px" display="flex" justifyContent="center">
                    <ChakraImage
                      src={platform.icon}
                      minHeight="40px"
                      minWidth="40px"
                    />
                  </Box>
                  <Box m={2}>{`${platform.name}`}</Box>
                  <Box flexGrow={1} textAlign="right">
                    {stamp ? (
                      // OK
                      <CircleIcon
                        width="24px"
                        height="24px"
                        color={theme.colors.correct}
                      />
                    ) : (
                      <Button
                        variant="primaryWhite"
                        onClick={() => {
                          linkPlatform('twitter')
                        }}
                        isLoading={loadingStamp === 'twitter'}
                      >
                        {'Connect'}
                      </Button>
                    )}
                  </Box>
                </Box>
                <Box mt="8">
                  <Text mx="0 !important" fontSize="xl">
                    {'2. Repost the following tweet.'}
                  </Text>
                  <Box
                    display="flex"
                    alignItems="center"
                    w="300px"
                    m="auto"
                    my={8}
                  >
                    <ExternalLink
                      href={`https://x.com/intent/retweet?tweet_id=${lesson?.questSocialMessage
                        ?.split('/')
                        ?.pop()}`}
                      mr="2"
                    >
                      <Button
                        variant="primary"
                        isDisabled={isQuestValidated === 'true' || !stamp}
                        w="100%"
                        leftIcon={
                          <ChakraImage
                            width="20px"
                            src="/images/TwitterX.svg"
                          />
                        }
                      >
                        {'Repost on Twitter / X'}
                      </Button>
                    </ExternalLink>
                    <Box flexGrow={1} textAlign="right">
                      {isQuestValidated === 'true' ? (
                        // OK
                        <CircleIcon
                          width="24px"
                          height="24px"
                          color={theme.colors.correct}
                        />
                      ) : (
                        <CircleIcon width="24px" height="24px" color="orange" />
                      )}
                    </Box>
                  </Box>
                  <Box color="orange" mt="2">
                    {error}
                  </Box>
                  {socialSharingQuestType === 'RT' &&
                    stamp &&
                    isQuestValidated !== 'true' && (
                      <Box mt="24px !important" textAlign="end">
                        <Button
                          onClick={() => validateQuest()}
                          variant="primary"
                          isLoading={isLoading}
                          loadingText="Validating quest"
                        >
                          {'Validate'}
                        </Button>
                      </Box>
                    )}
                </Box>
              </>
            )}
          </Box>
        </Box>
      </>
    ),
  }
}

export default SocialSharing
