/* eslint-disable no-console */
import { ALCHEMY_KEY_BACKEND, MIRROR_ARTICLE_ADDRESSES } from 'constants/index'
import { NextApiRequest, NextApiResponse } from 'next'
// import { createPublicClient, http } from 'viem'
// import { mainnet } from 'viem/chains'

import badges from 'data/badges.json'
// import leaderboard from 'data/leaderboard.json'
import { fetchBE } from 'utils/server'
import { BADGE_ADDRESS, BADGE_IDS } from 'constants/badges'

async function getCollectors(collectibleAddress) {
  // console.log(collectibleAddress)
  return await fetchBE(`https://opt-mainnet.g.alchemy.com/nft/v2/${ALCHEMY_KEY_BACKEND}/getOwnersForCollection?contractAddress=${collectibleAddress}&withTokenBalances=true`)
}

async function getBadgeHolders() {
  return await fetchBE(`https://polygon-mainnet.g.alchemy.com/nft/v2/${ALCHEMY_KEY_BACKEND}/getOwnersForCollection?contractAddress=${BADGE_ADDRESS}&withTokenBalances=true`)
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> {
  const leaderboard: any = {}
  try {
    const collectors = await getCollectors('0x5ce61b80931Ea67565f0532965DDe5be2d41331d')
    // console.log(collectors)
    for (const collector of collectors.ownerAddresses) {
      leaderboard[collector.ownerAddress] = { collectibles: collector.tokenBalances?.length, handbooks: 0, badges: 0 }
    }

    for (const mirrorArticleAddress of MIRROR_ARTICLE_ADDRESSES) {
      const collectors = await getCollectors(mirrorArticleAddress)
      // console.log(collectors)
      for (const collector of collectors.ownerAddresses) {
        if (collector.ownerAddress in leaderboard) leaderboard[collector.ownerAddress].handbooks += collector.tokenBalances?.length
        else leaderboard[collector.ownerAddress] = { collectibles: 0, handbooks: collector.tokenBalances?.length, badges: 0 }
      }
    }

    const badgeHolders = await getBadgeHolders()
    // console.log(badgeHolders)
    for (const owner of badgeHolders.ownerAddresses) {
      const address = owner.ownerAddress
      const badgeIds = []
      owner.tokenBalances.map(token => {
        badgeIds.push(parseInt(token.tokenId, 16))
      })
      if (address in badges) {
        badges[address] = [...badges[address], ...badgeIds]
      } else {
        badges[address] = badgeIds
      }
    }

    for (const [address, badgeIds] of Object.entries(badges)) {
      if (address in leaderboard) leaderboard[address].badges = badgeIds?.length
      else leaderboard[address] = { collectibles: 0, handbooks: 0, badges: badgeIds?.length }
    }

    // resolve ENS for top addresses
    const ensAddresses: any = []
    // const getEnsNames: any = []
    // const transport = http(`https://eth-mainnet.g.alchemy.com/v2/${ALCHEMY_KEY_BACKEND}`, {
    //   batch: true
    // })
    // const client = createPublicClient({
    //   chain: mainnet,
    //   transport,
    // })
    for (const address of Object.keys(leaderboard)) {
      if (leaderboard[address].collectibles >= 1 || leaderboard[address].handbooks >= 2 || leaderboard[address].badges >= BADGE_IDS.length) {
        ensAddresses.push(address)
        // getEnsNames.push(client.getEnsName({ address: `0x${address.slice(2)}` }))
      }
      // filter low badges
      if (leaderboard[address].badges < 2 && leaderboard[address].collectibles === 0 && leaderboard[address].handbooks === 0)
        delete leaderboard[address]
    }
    // console.log(ensAddresses)
    try {
      // const ensNames = await Promise.all(getEnsNames)
      const ensNames = {
        '0x11ebee2bf244325b5559f0f583722d35659ddce8': 'miguelrivero.eth',
        '0x20dfeed4bd0a027b31240a25dd257e85a42bffaf': 'dexterous.eth',
        '0x33995e2cc296496e911d92a25e849e7116c32564': 'ibuyhomes.eth',
        '0x34b515d8d5eb3f1828170c0ac992c1b539e6ca87': 'vault.didierkrux.eth',
        '0x78cd2a44e14529499559f374d8b39a37d2764bf4': 'coppa13.eth',
        '0x829e98b94802eb550d72e7c0074ea5be0eec2f3f': 'kryptoshrimp.eth',
        '0x9c54a0cba7aeb5d84020b02bdc8c3ae5ff65dd8e': 'gummyman.eth',
        '0xb30dd1198feed1e22ec969f61eed04cb75937adf': 'tetranome.eth',
        '0xb6ac0341fcf3fb507a8208d34a97f13779e1393d': 'icedcool.eth',
        '0xb749a586080436e616f097f193ba9cb6a25e7ea6': 'ornellaweb3.eth',
        '0xbd19a3f0a9cace18513a1e2863d648d13975cb30': 'didierkrux.eth',
        '0xd1ffda9c225ddee34f0837bf4d4a441bdd54c473': 'd0wnlore.eth',
        '0xe8c77e0eabd6d8b2f54343152a8b213d3a42e54e': 'doubleb.eth',
        '0xf99d5ee251872549da31dbc5882d0920cbaf80af': 'ckingdom.eth',
        '0xfcb5a922877683128cc8b52cd7883cab12d21229': 'garamtomasala.eth',
        '0xfff6b41a29881fc97bd6e8778529b1e37597d94a': 'damakadam.eth',
        '0x531bf2ee7050cad7ab1d2536de38185805f508cd': 'kal.avroniev.eth',
        '0x84acee946118abacc23d7dcfa3b4dc5f6bd17a81': 'garagepunks.eth',
        '0xcf529b9c37196537d891d9ba7eab262817c4f958': 'introvertedmind.eth',
        '0xf3b059c887172f2cc52b5e77ee3b2c8b3a32e6ef': 'ice-e-fresh.eth',
        '0x92ff5ebb3cb32ce771d9095d8efdb39765fb9108': 'styliann.eth',
        '0xe0b536a468496f9e9590f62e3b97f4a085b30283': 'zoldyx.eth',
        '0xe76d4165967fb1ed8d5a56d5dea87e3bc8ecd3ac': '1-3-3-7.eth',
        '0xe1887ff140bfa9d3b45d0b2077b7471124acd242': 'banklessacademy.eth',
        '0x13192b1056ed57eaa06bb7e49d70964a668e8604': 'slaparmy.eth',
        '0x41d2f3add533465d1038bfac72855e8430f92eec': 'lolshavuha.eth',
        '0x68e65cc8e6c1cf3e45bdd03ccdeb53bb8792a266': 'lauyk.eth',
        '0x714b831eb02fe854283219b2b9f1c6951f46dcb9': 'pedrovilela.eth',
        '0x746bb7befd31d9052bb8eba7d5dd74c9acf54c6d': 'jensei.eth',
        '0x841ad0abab2d33520ca236a2f5d8b038addc12ba': 'cardenas.eth',
        '0x86c17354b7af70cd2aabe8a7020d6dd58644272b': 'selcuksenturk.eth',
        '0xa8f0048a0d1a04663ca5010d0beac5bcaeea0eef': 'cryptoreumd.eth',
        '0xab888291f4127352b655fd476f64ac2ebfb8fe76': 'allenallen.eth',
        '0xc69ec94f3dce57b622d790e773899bc1d11a8074': 'intro711.eth',
        '0xd552aea491cc87b7e79e81086dfe50ba33bd4f30': 'jfcberlin.eth',
        '0xe4a5deaaa8aa07f507ffcef92a1a195dd47f7b69': 'gimlak81.eth',
        '0xe626e8ca82603e3b44751f8562b5ed126d345140': 'uintmaster.eth',
        '0x0bf58228425435eba4a3a4602a83c96f2707fa94': 'imajiner.eth',
        '0x102da0207ba3e1b18fcc826fde188a133e0d27d4': 'rhizencrypt.eth',
        '0x3496cc53d6d8650ec936891038e656a85475126b': 'kontoldao.eth',
        '0x50d2dec635c48f5e8cede341df87c651c6cd5318': 'willyampangestu.eth',
        '0x5e6d83a0abaf8cbca22370e53573b7f299cc7561': '0xkontol.eth',
        '0x76ec5398eb3b08f2b22b887b82578ec64fb7fcb0': 'paktani.eth',
        '0xab95778f6453f173c1191d82267ece99da2d0b65': 'japan🌸.eth',
        '0xac1ae60b7e49b6a13cc0dd18a9f9bc39c9f54a66': 'gajahmada.eth',
        '0xbb7f13bb2e444f5574589f2ad649da85446e3348': 'tumbal.eth',
        '0xe0ceed3ef907744ad71c6fafae0241e89cc64a7e': 'kukumila.eth',
        '0xfa08c5af59ba5554d5a2f509f17f9efedff5e7c0': 'soekotjo.eth'
      }

      // console.log(ensNames)
      for (let i = 0; i < ensAddresses?.length; i++) {
        const address = ensAddresses[i]
        // const ens = ensNames[i]
        const ens = ensNames[address] || null
        if (ens !== null) {
          leaderboard[ens] = leaderboard[address]
          delete leaderboard[address]
        }
      }
      // console.log(leaderboard)
      return res.status(200).send(leaderboard)
    } catch (error) {
      console.log('API limit reached.', error)
      return res.status(200).send(leaderboard)
    }
  } catch (error) {
    console.error(error)
  }
}
