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
  learnings: string
  learningActions: string
  knowledgeRequirements: string
  slides: {
    type: SlideType
    title: string
    content?: string
    quiz?: {
      id: string
      answer_1: string
      answer_2: string
      answer_3?: string
      answer_4?: string
      rightAnswerNumber: number
    }
    component?: QuestComponentType
  }[]
}
