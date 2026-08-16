import React from 'react'
import {
  Button,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  Portal,
  Text,
} from '@chakra-ui/react'
// React 18 children-type workaround (same as ConnectWalletButton)
import { PopoverTrigger as OrigPopoverTrigger } from '@chakra-ui/react'
import { Warning } from '@phosphor-icons/react'
import { useTranslation } from 'react-i18next'

import ExternalLink from 'components/ExternalLink'

const PopoverTrigger: React.FC<{ children: React.ReactNode }> =
  OrigPopoverTrigger

/**
 * Risk notice for the quest slide, replacing the modal that used to gate
 * *opening* a lesson. Reading has never cost anyone money; the quest is where
 * a learner acts, so that is where the warning belongs.
 *
 * It sits in the slide nav next to Report an Issue rather than in the quest
 * body: persistent and out of the way beats a modal people dismiss without
 * reading, and it costs the quest none of its 533px.
 *
 * Every string here already exists in `common.json` and is translated in all
 * languages, so this adds no i18n work.
 */
const QuestDisclaimer = ({
  isSmallScreen,
}: {
  isSmallScreen?: boolean
}): React.ReactElement => {
  const { t } = useTranslation()

  return (
    <Popover placement="top" isLazy>
      <PopoverTrigger>
        {/* Mirrors the Report an Issue button it sits beside, including
            dropping the label on small screens so the nav row still fits. */}
        <Button
          leftIcon={<Warning width="24px" height="24px" />}
          iconSpacing={isSmallScreen ? 0 : '8px'}
          variant="outline"
          // Icon-only on mobile, so the 16px side padding is buying nothing but
          // width in a nav row that already overflows at 375px.
          px={isSmallScreen ? '2' : '4'}
          aria-label={t('Disclaimer')}
        >
          {isSmallScreen ? '' : t('Disclaimer')}
        </Button>
      </PopoverTrigger>
      {/* Portalled so the slide's overflow rules cannot clip it. */}
      <Portal>
        <PopoverContent maxW="calc(100vw - 24px)">
          <PopoverArrow />
          <PopoverCloseButton />
          <PopoverBody pr="8">
            <Text mb="2">
              {t(
                'Remember, this is the frontier of technology and finance. Even the most trained Explorers can make mistakes and lose money. Education only reduces risk.'
              )}
            </Text>
            {/* ExternalLink opens a new tab, so reading the full disclaimer
                does not navigate the learner out of the lesson mid-quest. */}
            <ExternalLink underline="true" href="/disclaimer">
              {t('Learn more')}
            </ExternalLink>
          </PopoverBody>
        </PopoverContent>
      </Portal>
    </Popover>
  )
}

export default QuestDisclaimer
