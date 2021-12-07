export type QuestComponentType =
  | 'WalletBasics'
  | 'BorrowWithAave'
  | 'IntroToDeFi'

export type SlideType = 'LEARN' | 'QUIZ' | 'QUEST' | 'POAP'

export interface QuestType {
  name: string
  slug: string
  notionId: string
  poapEventId: number
  description: string
  duration: number
  difficulty: 'Easy' | 'Advanced' | 'Expert'
  poapImageLink: string
  questImageLink: string
  learnings: string
  learningActions: string
  knowledgeRequirements: string
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
