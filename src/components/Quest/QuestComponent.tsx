import WalletBasics from './WalletBasics'
import BorrowWithAave from './BorrowWithAave'

import { QuestComponentType } from 'entities/quest'

const QuestComponent = ({
  // TODO: return true when quest is completed or do this via backend?
  component,
}: {
  component: QuestComponentType
}): React.ReactElement => (
  <>
    {component === 'WalletBasics' && <WalletBasics />}
    {component === 'BorrowWithAave' && <BorrowWithAave />}
  </>
)

export default QuestComponent
