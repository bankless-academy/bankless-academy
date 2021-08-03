export type QuestComponentType = 'WalletBasics' | 'BorrowWithAave'

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
    type: 'LEARN' | 'QUIZ' | 'QUEST' | 'POAP'
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
