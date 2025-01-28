import React, { useEffect } from 'react'
import WalletConnect from 'components/Quest/WalletConnect'
import SocialSharing from 'components/Quest/SocialSharing'
import BitcoinBasics from 'components/Quest/BitcoinBasics'
import WalletBasics from 'components/Quest/WalletBasics'
import IntroToDeFi from 'components/Quest/IntroToDeFi'
import BlockchainBasics from 'components/Quest/BlockchainBasics'
import AcademyCommunity from 'components/Quest/AcademyCommunity'
import Web3Security from 'components/Quest/Web3Security'
import Layer1Blockchains from 'components/Quest/Layer1Blockchains'
import DecentralizedExchanges from 'components/Quest/DecentralizedExchanges'
import StakingOnEthereum from 'components/Quest/StakingOnEthereum'
import DEXAggregators from 'components/Quest/DEXAggregators'
import Layer2Blockchains from 'components/Quest/Layer2Blockchains'
import BanklessArchetypes from 'components/Quest/BanklessArchetypes'
import OptimismGovernance from 'components/Quest/OptimismGovernance'
import { ConnectFirst } from 'components/Quest/WalletConnect'
import { useAccount } from 'wagmi'

import { useSmallScreen } from 'hooks/index'
import { QUESTS } from 'constants/index'
import { api } from 'utils/index'
import { LessonType } from 'entities/lesson'

export type QuestComponentType = typeof QUESTS[number]

export type QuestType = {
  isQuestCompleted: boolean
  questComponent: React.ReactElement
}

export const ONCHAIN_QUESTS = [
  'DEXAggregators',
  'Layer2Blockchains',
  'DecentralizedExchanges',
  'StakingOnEthereum',
  'OptimismGovernance',
]

// TODO: revamp QuestComponent
const QuestComponent = (lesson: LessonType, badgeId?: number): QuestType => {
  const component = lesson?.quest
  const isSocialSharing = lesson?.questSocialMessage?.length > 0
  const QUEST_COMPONENTS = {
    WalletConnect: WalletConnect,
    SocialSharing: SocialSharing,
    BitcoinBasics: BitcoinBasics,
    WalletBasics: WalletBasics,
    IntroToDeFi: IntroToDeFi,
    BlockchainBasics: BlockchainBasics,
    AcademyCommunity: AcademyCommunity,
    Web3Security: Web3Security,
    Layer1Blockchains: Layer1Blockchains,
    DecentralizedExchanges: DecentralizedExchanges,
    StakingOnEthereum: StakingOnEthereum,
    DEXAggregators: DEXAggregators,
    Layer2Blockchains: Layer2Blockchains,
    BanklessArchetypes: BanklessArchetypes,
    OptimismGovernance: OptimismGovernance,
  }
  if (!component || !QUESTS.includes(component)) return null

  const { address } = useAccount()
  const [isSmallScreen] = useSmallScreen()

  const Component = isSocialSharing
    ? QUEST_COMPONENTS['SocialSharing'](
        address,
        component,
        lesson.questSocialMessage
      )
    : component === 'BitcoinBasics'
    ? QUEST_COMPONENTS['BitcoinBasics']({ test: false })
    : component in QUEST_COMPONENTS
    ? QUEST_COMPONENTS[component](address)
    : WalletConnect(address)

  useEffect(() => {
    const validateQuest = async () => {
      const data: any = { address, quest: component }
      if (badgeId) data.badgeId = badgeId
      if (data.quest === 'ConceptosBasicosDeBlockchain')
        data.quest = 'BlockchainBasics'
      const result = await api('/api/validate-quest', data)
      if (result && result.status === 200) {
        // do nothing
      } else {
        // TODO: handle errors
      }
    }
    if (
      address &&
      Component.isQuestCompleted &&
      // don't do the validation here for onchain quests but inside the quest component instead
      !ONCHAIN_QUESTS.includes(component)
    ) {
      validateQuest().catch(console.error)
    }
  }, [address, Component.isQuestCompleted])

  if (
    !address &&
    component !== 'WalletBasics' &&
    component !== 'BitcoinBasics'
  ) {
    return {
      isQuestCompleted: false,
      questComponent: ConnectFirst(isSmallScreen, address),
    }
  }

  return {
    isQuestCompleted: Component.isQuestCompleted,
    questComponent: Component.questComponent,
  }
}

export default QuestComponent
