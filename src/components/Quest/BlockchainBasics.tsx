import React, { useState, useEffect } from 'react'
import {
  InputGroup,
  InputLeftAddon,
  InputRightElement,
  Input,
  Box,
  Text,
} from '@chakra-ui/react'
import { CheckIcon, CloseIcon } from '@chakra-ui/icons'
import { useTranslation } from 'react-i18next'

import ExternalLink from 'components/ExternalLink'
import { theme } from 'theme/index'
import { useSmallScreen } from 'hooks/index'

const BlockchainBasics = (): {
  isQuestCompleted: boolean
  questComponent: React.ReactElement
} => {
  const { t, i18n } = useTranslation('quests', {
    keyPrefix: 'BlockchainBasics',
  })
  // HACK: or else translation is skipped...
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { t: tl } = useTranslation('lesson')
  const [isAnswerCorrect, setIsAnswerCorrect] = useState(null)
  const [from, setFrom] = useState(
    localStorage.getItem('quest-blockchain-fundamentals-from')
  )
  const [to, setTo] = useState(
    localStorage.getItem('quest-blockchain-fundamentals-to')
  )
  const [isFromCorrect, setIsFromCorrect] = useState(false)
  const [isToCorrect, setIsToCorrect] = useState(false)
  const [isSmallScreen] = useSmallScreen()

  const verifyFrom = (from) => {
    return (
      from?.toLowerCase() === '0xa1e4380a3b1f749673e270229993ee55f35663b4' ||
      from?.toLowerCase() === 'thanateros.eth'
    )
  }

  const verifyTo = (to) => {
    return to?.toLowerCase() === '0x5df9b87991262f6ba471f09758cde1c0fc1de734'
  }

  useEffect(() => {
    setIsFromCorrect(verifyFrom(from))
    setIsToCorrect(verifyTo(to))
    validateQuest(from, to)
  }, [])

  const validateQuest = (from, to) => {
    setIsAnswerCorrect(verifyFrom(from) && verifyTo(to))
  }

  return {
    isQuestCompleted: isAnswerCorrect,
    questComponent: (
      <>
        <Box display={isSmallScreen ? 'block' : 'flex'}>
          <div className="bloc1">
            <Text fontSize="xl" fontWeight="bold">
              {t('Understand a transaction')}
            </Text>
            <p>
              <>
                {t(
                  `To validate this quest, paste the "From" and "To" addresses of this transaction`
                )}{' '}
                <ExternalLink href="https://etherscan.io/tx/0x5c504ed432cb51138bcf09aa5e8a410dd4a1e204ef84bfed1be16dfba1b22060">
                  https://etherscan.io/tx/0x5c...2060
                </ExternalLink>
              </>
            </p>
            <Box pr="2">
              <InputGroup maxW="530px">
                <InputLeftAddon width="71px">From</InputLeftAddon>
                <Input
                  placeholder="0x..."
                  value={from}
                  mb="8"
                  onChange={(e): void => {
                    setFrom(e.target.value)
                    localStorage.setItem(
                      'quest-blockchain-fundamentals-from',
                      e.target.value
                    )
                    setIsFromCorrect(verifyFrom(e.target.value))
                    validateQuest(e.target.value, to)
                  }}
                />
                <InputRightElement>
                  {isFromCorrect ? (
                    <CheckIcon color={theme.colors.correct} />
                  ) : (
                    from !== '' && <CloseIcon color={theme.colors.incorrect} />
                  )}
                </InputRightElement>
              </InputGroup>
              <InputGroup maxW="530px">
                <InputLeftAddon width="71px">To</InputLeftAddon>
                <Input
                  placeholder="0x..."
                  value={to}
                  onChange={(e): void => {
                    setTo(e.target.value)
                    localStorage.setItem(
                      'quest-blockchain-fundamentals-to',
                      e.target.value
                    )
                    setIsToCorrect(verifyTo(e.target.value))
                    validateQuest(from, e.target.value)
                  }}
                />
                <InputRightElement>
                  {isToCorrect ? (
                    <CheckIcon color={theme.colors.correct} />
                  ) : (
                    to !== '' && <CloseIcon color={theme.colors.incorrect} />
                  )}
                </InputRightElement>
              </InputGroup>
            </Box>
          </div>
          <div className="bloc2">
            <iframe
              src={`https://www.youtube.com/embed/8z2rL99sLGA?rel=0${
                i18n.language !== 'en'
                  ? `&cc_load_policy=1&cc_lang_pref=${i18n.language}&hl=${i18n.language}`
                  : ``
              }`}
              allowFullScreen
            ></iframe>
          </div>
        </Box>
      </>
    ),
  }
}

export default BlockchainBasics
