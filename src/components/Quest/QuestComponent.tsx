import WalletBasics from './WalletBasics'
import BorrowWithAave from './BorrowWithAave'
import IntroToDeFi from './IntroToDeFi'

import { QuestComponentType } from 'entities/quest'

const QuestComponent = (
  component: QuestComponentType | null
): {
  isQuestCompleted: boolean
  questComponent: React.ReactElement
} => {
  const QUEST_COMPONENTS = {
    WalletBasics: WalletBasics,
    BorrowWithAave: BorrowWithAave,
    IntroToDeFi: IntroToDeFi,
  }
  if (!component || !(component in QUEST_COMPONENTS)) return null
  const Component = QUEST_COMPONENTS[component]()
  return {
    isQuestCompleted: Component.isQuestCompleted,
    questComponent: Component.questComponent,
  }
}

export default QuestComponent
