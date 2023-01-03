import React, { useEffect } from 'react'

import WalletConnect from 'components/Quest/WalletConnect'
import WalletBasics from 'components/Quest/WalletBasics'
import IntroToDeFi from 'components/Quest/IntroToDeFi'
import BlockchainBasics from 'components/Quest/BlockchainBasics'
import AcademyCommunity from 'components/Quest/AcademyCommunity'
import Web3Security from 'components/Quest/Web3Security'
import Layer1Blockchains from 'components/Quest/Layer1Blockchains'
import DEXAggregators from 'components/Quest/DEXAggregators'
import { ConnectFirst } from 'components/Quest/WalletConnect'

import { useActiveWeb3React, useSmallScreen } from 'hooks/index'
import { QUESTS } from 'constants/index'
import { api } from 'utils'

export type QuestComponentType = typeof QUESTS[number]

export const ONCHAIN_QUESTS = ['DEXAggregators']

const QuestComponent = (
  component: QuestComponentType | null,
  kudosId?: number
): {
  isQuestCompleted: boolean
  questComponent: React.ReactElement
} => {
  const QUEST_COMPONENTS = {
    WalletConnect: WalletConnect,
    WalletBasics: WalletBasics,
    IntroToDeFi: IntroToDeFi,
    BlockchainBasics: BlockchainBasics,
    AcademyCommunity: AcademyCommunity,
    Web3Security: Web3Security,
    Layer1Blockchains: Layer1Blockchains,
    DEXAggregators: DEXAggregators,
  }
  if (!component || !QUESTS.includes(component)) return null

  const { account } = useActiveWeb3React()
  const [isSmallScreen] = useSmallScreen()

  const Component =
    component in QUEST_COMPONENTS
      ? QUEST_COMPONENTS[component](account)
      : WalletConnect(account)

  useEffect(() => {
    const validateQuest = async () => {
      const data: any = { address: account, quest: component }
      if (kudosId) data.kudosId = kudosId
      const result = await api('/api/validate-quest', data)
      if (result && result.status === 200) {
        // do nothing
      } else {
        // TODO: handle errors
      }
    }
    if (
      account &&
      Component.isQuestCompleted &&
      // don't do the validation here for onchain quests but inside the quest component instead
      !ONCHAIN_QUESTS.includes(component)
    ) {
      validateQuest().catch(console.error)
    }
  }, [account, Component.isQuestCompleted])

  if (!account && component !== 'WalletBasics') {
    return {
      isQuestCompleted: false,
      questComponent: ConnectFirst(isSmallScreen, account),
    }
  }

  return {
    isQuestCompleted: Component.isQuestCompleted,
    questComponent: Component.questComponent,
  }
}

export default QuestComponent
