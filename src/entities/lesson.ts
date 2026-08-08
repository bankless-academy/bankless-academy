import { QuestComponentType } from 'components/Quest/QuestComponent'
import { LanguageCode } from 'constants/languages'

export type SlideType = 'LEARN' | 'QUIZ' | 'POLL' | 'QUEST' | 'END'
// derived from the language registry (src/constants/languages.ts)
export type LanguageType = LanguageCode
export type LanguageDescriptionType = { [Key in LanguageType as string]?: string }
export type LevelType = 'Essentials' | 'Level 1' | 'Level 2' | 'Community Lessons'
export type LessonTypeType = 'LESSON' | 'HANDBOOK'

export interface LessonType {
  name: string
  englishName: string
  slug: string
  notionId: string
  lessonLinks?: { [key in LanguageType]?: string }
  rawContentFiles?: { [key in LanguageType]?: string }
  badgeId?: number
  datadiskVectorMint?: number
  collectibleId?: string
  description: string
  languages?: LanguageType[]
  level?: LevelType
  tags?: string[]
  community?: string
  lessonWriters?: string
  marketingDescription: string
  duration: number
  difficulty?: 'Easy' | 'Advanced' | 'Expert'
  badgeImageLink?: string
  lessonImageLink?: string
  lessonCollectedImageLink?: string
  lessonCollectibleGif?: string
  lessonCollectibleVideo?: string
  lessonCollectibleMintID?: string
  lessonCollectibleTokenAddress?: string
  hasCollectible?: boolean
  socialImageLink?: string
  moduleId?: string
  learnings: string
  learningActions: string
  knowledgeRequirements?: string
  quest?: QuestComponentType
  questSocialMessage?: string
  imageLinks?: string[]
  // 'deprecated': hidden from all listings but still reachable by direct URL,
  // with a warning banner on the intro slide
  publicationStatus: 'publish' | 'planned' | 'hidden' | 'deprecated'
  publicationDate?: string
  translationDate?: string
  featuredOrderOnHomepage?: number
  isCommentsEnabled: boolean
  endOfLessonRedirect?: string
  endOfLessonText?: string
  communityDiscussionLink?: string
  isArticle?: boolean
  mirrorLink?: string
  mirrorNFTAddress?: `0x${string}`
  areMirrorNFTAllCollected?: boolean
  articleContent?: string
  isPreview?: boolean
  sponsorName?: string
  sponsorLogo?: string
  nftGating?: string
  nftGatingRequirements?: string
  nftGatingImageLink?: string
  nftGatingLink?: string
  nftGatingCTA?: string
  lang?: LanguageType
  keywords?: string[]
  showContent?: boolean
  slides?: {
    type: SlideType
    title: string
    notionId?: string
    content?: string
    quiz?: {
      id: string
      question: string
      answers: string[]
      feedback?: string[]
      rightAnswerNumber?: number
    }
    md?: string
    component?: QuestComponentType
  }[]
}
