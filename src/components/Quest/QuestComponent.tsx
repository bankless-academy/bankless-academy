import React, { useEffect } from 'react'
import axios from 'axios'
import { useMediaQuery } from '@chakra-ui/react'

import WalletConnect from './WalletConnect'
import WalletBasics from './WalletBasics'
import IntroToDeFi from './IntroToDeFi'
import BlockchainBasics from './BlockchainBasics'
import AcademyCommunity from './AcademyCommunity'
import Web3Security from './Web3Security'
import { ConnectFirst } from './WalletConnect'

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
    BlockchainBasics: BlockchainBasics,
    AcademyCommunity: AcademyCommunity,
    Web3Security: Web3Security,
  }
  if (!component || !QUESTS.includes(component)) return null

  const { account } = useActiveWeb3React()
  const [isSmallScreen] = useMediaQuery('(max-width: 800px)')

  const Component =
    component in QUEST_COMPONENTS
      ? QUEST_COMPONENTS[component](account)
      : WalletConnect(account)

  useEffect(() => {
    if (account && Component.isQuestCompleted) {
      axios
        .get(`/api/validate-quest?address=${account}&quest=${component}`)
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
