import React, { useRef, useState } from 'react'
import {
  Box,
  Button,
  Input,
  Popover,
  Portal,
  PopoverContent,
  PopoverBody,
  Text,
  useDisclosure,
} from '@chakra-ui/react'
// React 18 children-type workaround (same as ConnectWalletButton)
import { PopoverTrigger as OrigPopoverTrigger } from '@chakra-ui/react'
import { ChevronDownIcon, ChevronUpIcon, CheckIcon } from '@chakra-ui/icons'
import { Globe } from '@phosphor-icons/react'
import { useTranslation } from 'react-i18next'
import { useRouter } from 'next/router'
import { useLocalStorage } from 'usehooks-ts'

import { LESSONS, LanguageDescription } from 'constants/index'
import {
  LANGUAGES,
  LanguageCode,
  LanguageDef,
  isLanguage,
  normalizeLangCode,
} from 'constants/languages'
import { LessonType, LanguageType } from 'entities/lesson'
import { useApp } from 'contexts/AppContext'
import { Mixpanel } from 'utils/index'
import { loadLanguage } from 'utils/translation'

const PopoverTrigger: React.FC<{ children: React.ReactNode }> =
  OrigPopoverTrigger

// case + diacritic insensitive matching ("Turkce" matches "Türkçe")
const fold = (s: string): string =>
  s
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()

const LanguageSelector = ({
  isSmallScreen,
  lesson,
}: {
  isSmallScreen?: boolean
  lesson?: LessonType
}): JSX.Element => {
  const { t, i18n } = useTranslation()
  const router = useRouter()
  const { setLanguage } = useApp()
  const { isOpen, onOpen, onClose } = useDisclosure()
  const inputRef = useRef<HTMLInputElement>(null)
  const listRef = useRef<HTMLDivElement>(null)
  const [query, setQuery] = useState('')
  const [activeIndex, setActiveIndex] = useState(-1)

  // ---- lesson-page detection (same as the old SelectLanguage) ----
  const isLessonPage =
    router.pathname.startsWith('/lessons/') &&
    router.pathname !== '/lessons/handbook'
  // the glossary has one indexable URL per language too, so switching language
  // there should move the user to that URL rather than only swapping strings
  const isGlossaryPage = router.pathname.startsWith('/glossary')
  const lessonSlugs = isLessonPage ? (router.query.slug as string[]) : []
  const selectedLanguage = lessonSlugs?.length > 1 ? lessonSlugs[0] : null
  const isContentPage = router.asPath.endsWith('/content')
  const lessonSlug = isContentPage
    ? lessonSlugs?.[lessonSlugs.length - 2]
    : lessonSlugs?.[lessonSlugs.length - 1]
  const content = isContentPage ? '/content' : ''

  // lesson prop wins; fall back to the lesson derived from the URL so the
  // nav globe keeps its per-lesson behavior without a prop
  const currentLesson: LessonType | undefined =
    lesson ??
    (lessonSlug ? LESSONS.find((l) => l.slug === lessonSlug) : undefined)

  // ---- persisted language (same as the old SelectLanguage) ----
  const [defaultLanguage, setDefaultLanguage] = useLocalStorage<string>(
    'default-language',
    selectedLanguage && isLanguage(selectedLanguage)
      ? selectedLanguage
      : typeof window !== 'undefined'
      ? // browser tags (pt-BR, zh-TW, ja-JP...) -> registry codes
        normalizeLangCode(window.navigator.language)
      : 'en'
  )

  React.useEffect(() => {
    // migrate legacy stored codes (br/cn/jp/ua) to their ISO replacements
    const normalizedLanguage = normalizeLangCode(defaultLanguage)
    if (normalizedLanguage !== defaultLanguage) {
      setDefaultLanguage(normalizedLanguage)
      return
    }
    // Applying the language is AppContext's job — it is the only place that
    // sees every route change. This effect used to do it too and the two
    // fought, which is how the homepage lost the language.
  }, [defaultLanguage, setDefaultLanguage])

  // <html dir>/<lang> syncing lives in applyDocumentLanguage (constants/
  // languages), called from AppContext — NOT here: this component unmounts
  // with the nav on every lesson slide, so an effect here never covers the
  // slideshow.

  const currentLang = normalizeLangCode(i18n.language)

  // ---- browser-language suggestion ----
  const browserLang =
    typeof navigator !== 'undefined'
      ? normalizeLangCode(navigator.language)
      : 'en'
  const suggested =
    browserLang !== currentLang
      ? LANGUAGES.find((l) => l.code === browserLang)
      : undefined

  // ---- filtering ----
  // Sorted by ENDONYM (the row's primary label), not by the English name, and
  // no language is pinned — the reader's likely language is offered separately
  // by the suggestion row above rather than by reordering the list.
  //
  // Two reasons, and the second is the one that matters:
  //
  // 1. Each row renders the endonym as its primary line and the English name
  //    as secondary text below it. A list should be ordered by the line the
  //    eye scans first.
  // 2. `localeCompare` buckets by codepoint range, so endonym order groups the
  //    scripts for free: Latin, then Cyrillic, then Devanagari, Bengali,
  //    Tamil, Telugu, then Hangul/CJK — each a contiguous block. Sorting by
  //    English name instead scatters them (CJK lands at positions 2, 10 and 11
  //    interleaved with Latin and Indic), so a reader looking for their script
  //    has to traverse the whole list. At 22+ languages across 9 scripts,
  //    "my script is one block" is worth more than alphabetical order within
  //    it, and it keeps working as `ar`/`ur` (Arabic) and `am` (Ge'ez) land.
  //
  // Searching in English is already covered: the filter below matches BOTH
  // `name` and `localName`, so "german" and "Deutsch" both find the row.
  //
  // Sorted here rather than relying on registry order so display order stays a
  // presentation concern; `LANGUAGES` is only a declaration.
  const byDisplayName = [...LANGUAGES].sort((a, b) =>
    a.localName.localeCompare(b.localName)
  )
  const q = fold(query.trim())
  const filtered = byDisplayName.filter(
    (l) => !q || fold(l.name).includes(q) || fold(l.localName).includes(q)
  )
  // flat list driving keyboard navigation: suggestion row (only when not
  // filtering) followed by the full registry list
  const options: LanguageDef[] = [
    ...(suggested && !q ? [suggested] : []),
    ...filtered,
  ]

  const isLessonTranslated = (code: string): boolean =>
    code === 'en' || !!currentLesson?.languages?.includes(code as LanguageType)

  const selectLanguage = (code: LanguageCode): void => {
    // Load the chunk first so the UI never flashes English mid-switch.
    void loadLanguage(code).then(() => i18n.changeLanguage(code))
    setDefaultLanguage(code)
    setLanguage(code)
    let path: string | null = null
    if (isGlossaryPage) {
      path = code === 'en' ? '/glossary' : `/glossary/${code}`
      router.push(path)
    } else if (isLessonPage && lessonSlug) {
      // route to the translated lesson URL when it exists, else keep the
      // user on the English lesson URL (UI language still switches)
      path =
        code !== 'en' && currentLesson?.languages?.includes(code)
          ? `/lessons/${code}/${lessonSlug}${content}`
          : `/lessons/${lessonSlug}${content}`
      router.push(path)
    }
    Mixpanel.track('change_language', {
      lesson: currentLesson?.englishName,
      language: code,
      link: path || router.asPath,
      name: code,
    })
    setQuery('')
    setActiveIndex(-1)
    onClose()
  }

  const scrollActiveIntoView = (index: number): void => {
    const el = listRef.current?.querySelector<HTMLElement>(
      `[data-index="${index}"]`
    )
    el?.scrollIntoView({ block: 'nearest' })
  }

  const handleKeyDown = (e: React.KeyboardEvent): void => {
    if (e.key === 'ArrowDown') {
      e.preventDefault()
      const next = Math.min(activeIndex + 1, options.length - 1)
      setActiveIndex(next)
      scrollActiveIntoView(next)
    } else if (e.key === 'ArrowUp') {
      e.preventDefault()
      const prev = Math.max(activeIndex - 1, 0)
      setActiveIndex(prev)
      scrollActiveIntoView(prev)
    } else if (e.key === 'Enter') {
      e.preventDefault()
      const pick =
        activeIndex >= 0
          ? options[activeIndex]
          : options.length === 1
          ? options[0]
          : undefined
      if (pick) selectLanguage(pick.code as LanguageCode)
    }
    // Escape bubbles to the Popover and closes it
  }

  const closeAndReset = (): void => {
    setQuery('')
    setActiveIndex(-1)
    onClose()
  }

  const renderRow = (
    def: LanguageDef,
    index: number,
    isSuggestion = false
  ): JSX.Element => {
    const isCurrent = def.code === currentLang
    const notTranslated = !!currentLesson && !isLessonTranslated(def.code)
    return (
      <Box
        key={`${isSuggestion ? 'suggested-' : ''}${def.code}`}
        as="button"
        role="option"
        aria-selected={isCurrent}
        data-index={index}
        display="flex"
        alignItems="center"
        w="100%"
        textAlign="start"
        minH="44px"
        px="3"
        py="1.5"
        borderRadius="md"
        opacity={notTranslated ? 0.5 : 1}
        bg={
          activeIndex === index
            ? 'whiteAlpha.300'
            : isCurrent
            ? 'whiteAlpha.200'
            : 'transparent'
        }
        _hover={{ bg: 'whiteAlpha.300' }}
        onClick={() => selectLanguage(def.code as LanguageCode)}
        onMouseMove={() => activeIndex !== index && setActiveIndex(index)}
      >
        <Box flex="1" minW="0">
          <Text isTruncated>{def.localName}</Text>
          <Text fontSize="xs" color="gray.400" isTruncated>
            {def.name}
            {notTranslated ? ` (${t('not translated')})` : ''}
          </Text>
        </Box>
        {isCurrent && <CheckIcon ms="2" boxSize="3" flexShrink={0} />}
      </Box>
    )
  }

  return (
    <Popover
      isOpen={isOpen}
      onOpen={onOpen}
      onClose={closeAndReset}
      placement="bottom-end"
      // Autofocusing the filter raises the mobile keyboard the instant the
      // popover opens. That shrinks the VISUAL viewport while `vh`/`dvh` below
      // is resolved against the LAYOUT viewport, so most of the list ends up
      // behind the keyboard with almost nothing left to scroll. On a phone the
      // list is the point, not the filter, so only focus it on larger screens.
      initialFocusRef={isSmallScreen ? undefined : inputRef}
      isLazy
    >
      <PopoverTrigger>
        <Button
          variant="secondary"
          size={isSmallScreen ? 'sm' : 'md'}
          border={isSmallScreen ? '1px solid transparent' : 'default'}
          px={isSmallScreen ? '11px !important' : '16px'}
          leftIcon={<Globe />}
          iconSpacing={isSmallScreen ? '0' : '1'}
          isActive={isOpen}
          aria-label={t('Select preferred language')}
        >
          <Box display="flex" alignItems="center">
            <Box
              flex="1"
              isTruncated
              display={isSmallScreen ? 'none' : 'inherit'}
            >
              {LanguageDescription[currentLang] || LanguageDescription['en']}
            </Box>
            {isOpen ? <ChevronUpIcon ms="1" /> : <ChevronDownIcon ms="1" />}
          </Box>
        </Button>
      </PopoverTrigger>
      {/* Portalled so no current or future ancestor with overflow:hidden can
          clip the dropdown; it also positions against the body rather than the
          nav's stacking context. */}
      <Portal>
        <PopoverContent
          zIndex="10"
          w={isSmallScreen ? '290px' : '330px'}
          maxW="calc(100vw - 24px)"
        >
          <PopoverBody p="2">
            <Input
              ref={inputRef}
              value={query}
              onChange={(e) => {
                setQuery(e.target.value)
                setActiveIndex(-1)
              }}
              onKeyDown={handleKeyDown}
              placeholder={t('Filter languages')}
              // 16px keeps iOS Safari from zooming the viewport on focus
              fontSize="16px"
              size="md"
              mb="2"
              aria-label={t('Filter languages')}
            />
            <Box
              ref={listRef}
              role="listbox"
              overflowY="auto"
              // `dvh` tracks the viewport as mobile browser chrome and the
              // keyboard change it; `vh` does not, and is kept as the fallback
              // for anything that does not support it. Momentum scrolling is
              // explicit so the list stays swipeable inside the popover on iOS.
              sx={{
                maxHeight: 'min(50vh, 320px)',
                '@supports (height: 1dvh)': { maxHeight: 'min(60dvh, 320px)' },
                WebkitOverflowScrolling: 'touch',
                overscrollBehavior: 'contain',
              }}
            >
              {suggested && !q && (
                <>
                  <Text
                    fontSize="xs"
                    color="gray.400"
                    textTransform="uppercase"
                    px="3"
                    pt="1"
                    pb="0.5"
                  >
                    {t('Suggested')}
                  </Text>
                  {renderRow(suggested, 0, true)}
                  <Box
                    borderBottom="1px solid"
                    borderColor="whiteAlpha.300"
                    my="1"
                  />
                </>
              )}
              {filtered.map((def, i) =>
                renderRow(def, suggested && !q ? i + 1 : i)
              )}
              {!filtered.length && (
                <Text px="3" py="2" fontSize="sm" color="gray.400">
                  {t('No language found')}
                </Text>
              )}
            </Box>
          </PopoverBody>
        </PopoverContent>
      </Portal>
    </Popover>
  )
}

export default LanguageSelector
