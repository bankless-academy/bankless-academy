import { QuestComponentType } from 'components/Quest/QuestComponent'

export type SlideType = 'LEARN' | 'QUIZ' | 'QUEST' | 'END'

export interface LessonType {
  name: string
  slug: string
  notionId: string
  badgeId?: number
  kudosId?: number
  description: string
  marketingDescription: string
  duration: number
  difficulty: 'Easy' | 'Advanced' | 'Expert'
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
  imageLinks?: string[]
  publicationStatus: 'publish' | 'planned' | 'hidden'
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
    component?: QuestComponentType
  }[]
}
