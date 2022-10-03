import { QuestComponentType } from 'components/Quest/QuestComponent'

export type SlideType = 'LEARN' | 'QUIZ' | 'QUEST' | 'POAP' | 'END'

export interface LessonType {
  name: string
  slug: string
  notionId: string
  poapEventId?: number
  kudosId?: number
  description: string
  marketingDescription: string
  duration: number
  difficulty: 'Easy' | 'Advanced' | 'Expert'
  poapImageLink?: string
  lessonImageLink?: string
  socialImageLink?: string
  moduleId?: string
  learnings: string
  learningActions: string
  knowledgeRequirements?: string
  quest?: QuestComponentType
  imageLinks: string[]
  publicationStatus: 'publish' | 'hidden' | 'preview'
  isFeaturedOnHomepage: boolean
  isCommentsEnabled: boolean
  endOfLessonRedirect?: string
  endOfLessonText?: string
  communityDiscussionLink?: string
  slides: {
    type: SlideType
    title: string
    notionId?: string
    content?: string
    quiz?: {
      id: string
      question: string
      answers: string[]
      rightAnswerNumber: number
    }
    component?: QuestComponentType
  }[]
}
