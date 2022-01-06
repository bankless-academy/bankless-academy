import WalletBasics from './WalletBasics'
import BlockchainFundamentals from './BlockchainFundamentals'
import IntroToDeFi from './IntroToDeFi'

export type QuestComponentType =
  | 'WalletBasics'
  | 'IntroToDeFi'
  | 'BlockchainFundamentals'

const QuestComponent = (
  component: QuestComponentType | null
): {
  isQuestCompleted: boolean
  questComponent: React.ReactElement
} => {
  const QUEST_COMPONENTS = {
    WalletBasics: WalletBasics,
    IntroToDeFi: IntroToDeFi,
    BlockchainFundamentals: BlockchainFundamentals,
  }
  if (!component || !(component in QUEST_COMPONENTS)) return null
  const Component = QUEST_COMPONENTS[component]()
  return {
    isQuestCompleted: Component.isQuestCompleted,
    questComponent: Component.questComponent,
  }
}

export default QuestComponent
