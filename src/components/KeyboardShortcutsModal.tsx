import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalOverlay,
  Box,
  Kbd,
  Text,
} from '@chakra-ui/react'
import { useTranslation } from 'react-i18next'

import { useSmallScreen } from 'hooks/index'

// The lesson player has always had keyboard shortcuts (Lesson.tsx wires them
// with useHotkeys) but nothing surfaced them: `?` opened a raw alert() with a
// TODO in it. They are listed here instead of in hover tooltips, because a
// shortcut is a learn-once fact and a tooltip on an arrow icon mostly just
// covers the text you are reading.
const SHORTCUTS: { keys: string[]; label: string }[] = [
  { keys: ['←'], label: 'Previous slide' },
  { keys: ['→'], label: 'Next slide' },
  { keys: ['1', '2', '3', '4', '5'], label: 'Select a quiz answer' },
  { keys: ['Esc'], label: 'Close the lesson' },
  { keys: ['?'], label: 'Show this help' },
]

const KeyboardShortcutsModal = ({
  isOpen,
  onClose,
}: {
  isOpen: boolean
  onClose: () => void
}): React.ReactElement => {
  const { t } = useTranslation()
  const [isSmallScreen] = useSmallScreen()

  return (
    <Modal onClose={onClose} isOpen={isOpen} isCentered>
      <ModalOverlay />
      <ModalContent
        bg="linear-gradient(180deg, #a379bdcc 0%, #5a5198cc 100%)"
        border={isSmallScreen ? '0' : '2px solid #B68BCC'}
        borderRadius={isSmallScreen ? '0' : '3xl'}
        backdropFilter="blur(10px)"
        overflowY="auto"
        maxH="var(--chakra-vh)"
      >
        <ModalHeader>{t('Keyboard shortcuts')}</ModalHeader>
        <ModalCloseButton />
        <ModalBody pb="6">
          {SHORTCUTS.map(({ keys, label }) => (
            <Box
              key={label}
              display="flex"
              alignItems="center"
              justifyContent="space-between"
              gap="4"
              py="2"
              borderBottom="1px solid #ffffff1a"
              _last={{ borderBottom: 'none' }}
            >
              <Text>{t(label)}</Text>
              <Box display="flex" gap="1" flexShrink={0}>
                {keys.map((key, i) => (
                  <Box key={key} display="flex" alignItems="center" gap="1">
                    {i > 0 && (
                      <Text fontSize="xs" opacity={0.6}>
                        /
                      </Text>
                    )}
                    <Kbd
                      color="black"
                      bg="whiteAlpha.900"
                      borderColor="gray.400"
                    >
                      {key}
                    </Kbd>
                  </Box>
                ))}
              </Box>
            </Box>
          ))}
        </ModalBody>
      </ModalContent>
    </Modal>
  )
}

export default KeyboardShortcutsModal
