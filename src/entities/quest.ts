export type QuestComponentType = 'WalletBasics' | 'BorrowWithAave'

export interface QuestType {
  name: string
  slug: string
  poapId: number
  description: string
  duration: number
  difficulty: string
  poap_image: string
  slides: {
    type: 'LEARN' | 'QUIZ' | 'QUEST' | 'POAP'
    title: string
    content?: string
    quiz?: {
      id: string
      question: string
      answer_1: string
      answer_2: string
      answer_3: string
      answer_4: string
      right_answer_number: number
    }
    component?: QuestComponentType
  }[]
}
