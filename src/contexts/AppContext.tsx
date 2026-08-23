import React, {
  createContext,
  useCallback,
  useContext,
  useState,
  useEffect,
  useLayoutEffect,
} from 'react'
import { useRouter } from 'next/router'
import i18next from 'i18next'

import {
  applyDocumentLanguage,
  isNonLocalizedPath,
  normalizeLangCode,
  readPreferredLanguage,
  writePreferredLanguage,
} from 'constants/languages'
import { LESSONS } from 'constants/index'
import { loadLanguage } from 'utils/translation'
import { markAppMounted } from 'utils/appMounted'

export interface OnboardingModalOptions {
  newsletterOnly?: boolean
}

export interface AppContextType {
  hideNavBar: boolean
  setHideNavBar: (value: boolean) => void
  language: string
  setLanguage: (value: string) => void
  openLessons: string[]
  setOpenLessons: (value: string[]) => void
  // There is exactly ONE OnboardingModal in the app, rendered by `layout/index`
  // and driven from here. Never mount another one: two instances open at the
  // same time stack two overlays on top of each other.
  isOnboardingModalOpen: boolean
  onboardingModalOptions: OnboardingModalOptions
  openOnboardingModal: (options?: OnboardingModalOptions) => void
  closeOnboardingModal: () => void
  // Add more app-wide states here as needed
}

export const AppContext = createContext<AppContextType>({
  hideNavBar: false,
  setHideNavBar: () => {},
  language: 'en',
  setLanguage: () => {},
  openLessons: [],
  setOpenLessons: () => {},
  isOnboardingModalOpen: false,
  onboardingModalOptions: {},
  openOnboardingModal: () => {},
  closeOnboardingModal: () => {},
})

export function AppProvider({ children }: { children: React.ReactNode }) {
  const [hideNavBar, setHideNavBar] = useState(false)
  const [language, setLanguage] = useState('en')
  const [openLessons, setOpenLessons] = useState<string[]>([])
  const [isOnboardingModalOpen, setIsOnboardingModalOpen] = useState(false)
  const [onboardingModalOptions, setOnboardingModalOptions] =
    useState<OnboardingModalOptions>({})
  const router = useRouter()

  // Tells the lesson pages' server-rendered hero (LessonSeoBlock) that the
  // interactive app tree is on screen. AppProvider mounts once Web3Providers'
  // dynamic chunk has loaded and stays mounted across client-side navigations,
  // which is exactly the signal's meaning.
  //
  // useLayoutEffect, not useEffect: it fires before the browser paints the
  // newly-mounted app tree, and the hero's listener setState flushes in the
  // same pre-paint pass — so the app appearing and the hero disappearing are
  // ONE paint. With useEffect there was a one-frame double-stack (app + hero
  // + article) that made the article visibly jump. AppProvider is client-only
  // (inside a dynamic ssr:false boundary), so the SSR warning cannot fire.
  useLayoutEffect(() => {
    markAppMounted()
  }, [])

  const openOnboardingModal = useCallback(
    (options: OnboardingModalOptions = {}) => {
      setOnboardingModalOptions(options)
      setIsOnboardingModalOpen(true)
    },
    []
  )

  // keep the options while closing so the content doesn't flip mid-animation
  const closeOnboardingModal = useCallback(
    () => setIsOnboardingModalOpen(false),
    []
  )

  // Single source of truth for the active language: the Next.js locale. Every
  // page has one URL per language (/fr/..., English un-prefixed), so the URL
  // decides what renders — no page ever shows French chrome at an English URL.
  //
  //   locale !== 'en'  explicit choice -> apply AND remember
  //   locale === 'en'  apply English; when the reader has a stored non-English
  //                    preference, NAVIGATE to their locale's URL instead of
  //                    restyling this one (replace, so Back is not trapped).
  //                    Exception: a lesson without that translation stays on
  //                    the English URL — its localized URL does not exist.
  useEffect(() => {
    const locale = normalizeLangCode(router.locale)
    const path = router.asPath.split(/[?#]/)[0]

    // Non-localized pages (explorer, Notion aliases) keep the pre-locale-URL
    // behavior: the URL stays bare and the UI renders the STORED preference.
    // Never URL-swap here — the localized URLs only 308 back, which would
    // loop through the network.
    if (isNonLocalizedPath(path)) {
      const pref = readPreferredLanguage() || 'en'
      setLanguage(pref)
      applyDocumentLanguage(pref)
      void loadLanguage(pref).then(() => {
        if (i18next.language !== pref) i18next.changeLanguage(pref)
      })
      return
    }

    if (locale === 'en') {
      const pref = readPreferredLanguage()
      if (pref && pref !== 'en') {
        const segments = path.split('/').filter(Boolean)
        const isLessonPage =
          segments[0] === 'lessons' &&
          segments.length === 2 &&
          !['handbook', 'preview'].includes(segments[1])
        const lessonSlug = isLessonPage
          ? segments[1].replace('-datadisk', '')
          : null
        const translationExists =
          !isLessonPage ||
          LESSONS.some(
            (l) =>
              l.slug === lessonSlug &&
              (l.languages as any)?.includes(pref) &&
              !segments[1].endsWith('-datadisk')
          )
        if (translationExists) {
          void router.replace(router.asPath, undefined, { locale: pref })
          return
        }
      }
    } else {
      writePreferredLanguage(locale)
    }

    setLanguage(locale)
    applyDocumentLanguage(locale)
    // loadLanguage is idempotent and MUST NOT be gated on the language
    // differing: after a reload the detector has already set i18next.language
    // to the stored language, so that guard skipped the load entirely and left
    // the UI in English with the right language selected.
    void loadLanguage(locale).then(() => {
      if (i18next.language !== locale) i18next.changeLanguage(locale)
    })
  }, [router.asPath, router.locale])

  const value = {
    hideNavBar,
    setHideNavBar,
    language,
    setLanguage: (lang: string) => {
      setLanguage(lang)
      applyDocumentLanguage(lang)
      void loadLanguage(lang).then(() => i18next.changeLanguage(lang))
    },
    openLessons,
    setOpenLessons,
    isOnboardingModalOpen,
    onboardingModalOptions,
    openOnboardingModal,
    closeOnboardingModal,
  }

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>
}

export function useApp() {
  const context = useContext(AppContext)
  if (context === undefined) {
    throw new Error('useApp must be used within an AppProvider')
  }
  return context
}
