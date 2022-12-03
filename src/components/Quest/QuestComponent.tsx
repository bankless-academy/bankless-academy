import React, { useEffect } from 'react'
import axios from 'axios'

import WalletConnect from 'components/Quest/WalletConnect'
import WalletBasics from 'components/Quest/WalletBasics'
import IntroToDeFi from 'components/Quest/IntroToDeFi'
import BlockchainBasics from 'components/Quest/BlockchainBasics'
import AcademyCommunity from 'components/Quest/AcademyCommunity'
import Web3Security from 'components/Quest/Web3Security'
import BlockchainsLayer1 from 'components/Quest/BlockchainsLayer1'
import DEXAggregators from 'components/Quest/DEXAggregators'
import { ConnectFirst } from 'components/Quest/WalletConnect'

import { useActiveWeb3React, useSmallScreen } from 'hooks/index'
import { QUESTS } from 'constants/index'

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
    BlockchainsLayer1: BlockchainsLayer1,
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
    if (
      account &&
      Component.isQuestCompleted &&
      // don't do the validation here for onchain quests but inside the quest component instead
      !ONCHAIN_QUESTS.includes(component)
    ) {
      axios
        .get(
          `/api/validate-quest?address=${account}&quest=${component}${
            kudosId ? `&kudosId=${kudosId}` : ''
          }`
        )
        .catch(function (error) {
          console.error(error)
        })
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
