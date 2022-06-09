import React, { useEffect } from 'react'
import axios from 'axios'

import WalletConnect from './WalletConnect'
import WalletBasics from './WalletBasics'
import IntroToDeFi from './IntroToDeFi'
import BlockchainFundamentals from './BlockchainFundamentals'
import BanklessAcademyCommunity from './BanklessAcademyCommunity'

import { useActiveWeb3React } from 'hooks'
import { QUESTS } from 'constants/index'

export type QuestComponentType = typeof QUESTS[number]

const QuestComponent = (
  component: QuestComponentType | null
): {
  isQuestCompleted: boolean
  questComponent: React.ReactElement
} => {
  const QUEST_COMPONENTS = {
    WalletConnect: WalletConnect,
    WalletBasics: WalletBasics,
    IntroToDeFi: IntroToDeFi,
    BlockchainFundamentals: BlockchainFundamentals,
    BanklessAcademyCommunity: BanklessAcademyCommunity,
  }
  if (!component || !QUESTS.includes(component)) return null
  const Component =
    component in QUEST_COMPONENTS
      ? QUEST_COMPONENTS[component]()
      : WalletConnect()
  const { account } = useActiveWeb3React()

  useEffect(() => {
    if (Component.isQuestCompleted) {
      axios
        .get(`/api/validate-quest?address=${account}&quest=${component}`)
        .catch(function (error) {
          console.error(error)
        })
    }
  }, [Component.isQuestCompleted])

  return {
    isQuestCompleted: Component.isQuestCompleted,
    questComponent: Component.questComponent,
  }
}

export default QuestComponent
