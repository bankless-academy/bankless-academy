/* eslint-disable no-console */
import { NextApiRequest, NextApiResponse } from 'next'
import axios from 'axios'
import { formatEther } from 'viem'

import { db, TABLE, TABLES, getUserId } from 'utils/db'
import {
  LESSONS,
  GENERIC_ERROR_MESSAGE,
  WALLET_SIGNATURE_MESSAGE,
  ALCHEMY_KEY_BACKEND,
} from 'constants/index'
import { BADGE_ADDRESS, BADGE_MINTER, BADGES_ALLOWED_SIGNERS, IS_BADGE_PROD } from 'constants/badges'
import { api } from 'utils/index'
import { trackBE } from 'utils/mixpanel'
import { ethers } from 'ethers'
import { verifySignature } from 'utils/SignatureUtil'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> {
  // check params + signature
  const { address, badgeId, embed, signature, referrer, chainId } = req.body
  // console.log(req)
  if (!address || !badgeId)
    return res.status(400).json({ error: 'Wrong params' })


  console.log('address: ', address)
  console.log('badgeId: ', badgeId)
  console.log('signature: ', signature)

  if (!signature)
    return res.status(400).json({ error: 'Missing wallet signature' })

  if (!chainId)
    return res.status(400).json({ error: 'Missing chainId' })

  if (!await verifySignature({ address, signature, message: WALLET_SIGNATURE_MESSAGE, chainId }))
    return res.status(403).json({ error: 'Wrong signature' })

  const message = { tokenId: badgeId }
  console.log('message: ', message)

  try {
    const userId = await getUserId(address, embed)
    console.log(userId)
    if (!(userId && Number.isInteger(userId))) {
      trackBE(address, 'issue_user_not_found', { context: 'mint-badge' })
      return res.status(403).json({ error: 'userId not found' })
    }

    const notionId = LESSONS.find(
      (lesson) => lesson.badgeId === badgeId
    )?.notionId
    if (!notionId) return res.status(403).json({ error: 'notionId not found' })

    const lessonName = LESSONS.find(
      (lesson) => lesson.badgeId === badgeId
    )?.englishName

    const [credential] = await db(TABLES.credentials)
      .select('id')
      .where(TABLE.credentials.notion_id, notionId)
    if (!credential)
      return res.status(403).json({ error: 'credentialId not found' })

    const [questCompleted] = await db(TABLES.completions)
      .select(TABLE.completions.id, TABLE.completions.transaction_at, TABLE.completions.transaction_hash)
      .where(TABLE.completions.credential_id, credential.id)
      .where(TABLE.completions.user_id, userId)
      .where(TABLE.completions.is_quest_completed, true)
    console.log('questCompleted', questCompleted)

    let questStatus = ''

    // Exception: No quest page for Ethereum Basics (badgeId !== 14)
    if (!questCompleted?.id && badgeId !== 14) {
      questStatus = 'quest not completed'
      console.log(questStatus)
      return res.status(403).json({ status: questStatus })
    }

    if (IS_BADGE_PROD && questCompleted?.transaction_at) {
      console.log(questCompleted.transaction_at)
      const currentTimestamp = Math.floor(Date.now() / 1000)
      console.log(currentTimestamp)
      const transactionTimestamp = Date.parse(questCompleted.transaction_at) / 1000
      console.log(transactionTimestamp)
      console.log('diff',)
      const diff = currentTimestamp - transactionTimestamp
      if (diff < 60) {
        questStatus = 'minting already in progress ...'
        console.log(questStatus)
        return res.status(200).json({ transactionHash: questCompleted.transaction_hash, status: questStatus })
      } else {
        // TODO: create email alert
        trackBE(address, 'badge_issue', {
          error: questCompleted,
          badgeId,
          address,
        })
        // TODO: verify tx hash result
        questStatus = 'minting already in progress... check back in 1 minute'
        console.log(questStatus)
        return res.status(200).json({ transactionHash: questCompleted.transaction_hash, status: questStatus })
      }
    }

    const userBadges = await axios.get(
      `${req.headers.origin}/api/user/${address}?badges=true`
    )
    // console.log('userBadges', userBadges?.data?.data)

    const badgeAlreadyClaimed: boolean =
      userBadges?.data?.badgeTokenIds.find(
        (badge: number) => badge === badgeId
      ) || false

    if (badgeAlreadyClaimed && !BADGES_ALLOWED_SIGNERS.includes(address.toLowerCase())) {
      questStatus = 'badge already claimed'
      console.log(questStatus)
      return res.status(403).json({ status: questStatus })
    }

    // Sybil check with Academy Passport
    const result = await api(`${req.headers.origin}/api/passport`, {
      address: address,
    })
    if (result && result.status === 200) {
      if (result.data?.error) {
        return res.status(200).json({
          status: result.data?.error,
        })
      }
      if (!result.data.verified) {
        return res.status(200).json({
          status: `Passport requirement: ${result.data.requirement}`,
        })
      }
    } else {
      // TODO: handle errors
    }

    try {
      // TODO: move to private repo?

      // MINTING SECURITY CHECK
      // check in DB if > than 10 mints in the last 5 min + email alert
      const numberOfRecentTx = await db(TABLES.completions)
        .select(TABLE.completions.id, TABLE.completions.user_id)
        .where(TABLE.completions.transaction_at, '>=', db.raw("NOW() - INTERVAL '5 MINUTE'"))
      console.log('numberOfRecentTx', numberOfRecentTx)
      const numberOfRecentTxFromUser = numberOfRecentTx.filter(c => c.user_id === userId).length
      console.log('numberOfRecentTxFromUser', numberOfRecentTxFromUser)
      if (numberOfRecentTxFromUser >= 2) {
        trackBE(address, 'badge_spam', {
          error: numberOfRecentTxFromUser,
          badgeId,
          address,
        })
        questStatus = "Your account has been flagged as doing suspicious activity! Reminder: Lesson badges are a non-transferable digital proofs of your learning. They don't have any monetary value and will never give you access to airdrops."
        return res.status(200).json({
          status: questStatus,
        })
        // TODO: flag in DB
      }
      if (numberOfRecentTx?.length >= 50) {
        trackBE(address, 'badge_overload', {
          error: numberOfRecentTx,
          badgeId,
          address,
        })
        questStatus = "Too many minting... try again later. Reminder: Lesson badges are non-transferable digital proofs of your learning. They don't have any monetary value and will never give you access to airdrops."
        return res.status(200).json({
          status: questStatus,
        })
      }
      // Cancel tx if gas > 300 gwei
      // estimate gas fees
      const estimation = await (await fetch(`https://api.blocknative.com/gasprices/blockprices?chainid=137`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': process.env.BLOCKNATIVE_API_KEY
        },
      })).json()
      // select confidence: 95% = [1]
      console.log(estimation)
      console.log('estimation.blockPrices', estimation.blockPrices)
      // 99% confidence
      const maxFeePerGasInGwei = estimation.blockPrices[0].estimatedPrices[0].maxFeePerGas || 40
      const maxPriorityFeePerGasInGwei = estimation.blockPrices[0].estimatedPrices[0].maxPriorityFeePerGas || 40
      const options: any = {}
      if (IS_BADGE_PROD) {
        options.maxFeePerGas = ethers.utils.parseUnits(
          Math.ceil(maxFeePerGasInGwei) + '',
          'gwei'
        )
        options.maxPriorityFeePerGas = ethers.utils.parseUnits(
          Math.ceil(maxPriorityFeePerGasInGwei) + '',
          'gwei'
        )
      }
      console.log(options)
      if (maxFeePerGasInGwei > 500) {
        questStatus = 'Polygon is currently experiencing high gas prices... try again in 1 hour.'
        console.log(questStatus)
        return res.status(403).json({ status: questStatus })
      }
      // TODO: too many tx pending
      // https://docs.alchemy.com/reference/sdk-gettransactioncount pending
      // TODO: cancel if spent > 1$ in the last hour
      // https://docs.alchemy.com/reference/sdk-getlogs

      console.log('mint !!!!!!!!!')
      // send email alert if balance < 1 MATIC
      // TODO: add alternate provider + handle timeout
      const provider = new ethers.providers.AlchemyProvider(IS_BADGE_PROD ? 'matic' : 'maticmum', ALCHEMY_KEY_BACKEND)
      const balance = formatEther((await provider.getBalance(BADGE_MINTER)).toBigInt())
      console.log('balance: ', balance)
      if (parseInt(balance) < 1) {
        console.log('low balance')
        trackBE(address, 'low_balance')
      }
      // prod: 0x472A74C4F7e281e590Bed861daa66721A6ACADBC
      // dev: 0x03ab46a7E99279a4b7931626338244DD8236F0Ac
      const signer = new ethers.Wallet(process.env.PRIVATE_KEY, provider)
      const contract = new ethers.Contract(BADGE_ADDRESS, [
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "account",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "id",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "amount",
              "type": "uint256"
            },
            {
              "internalType": "bytes",
              "name": "data",
              "type": "bytes"
            }
          ],
          "name": "mint",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
        },
      ], signer)
      const contractFunction = 'mint(address,uint256,uint256,bytes)'
      const functionParams = [address.toLowerCase(), badgeId, 1, '0x00']
      // console.log(functionParams)
      try {
        // transaction simulation
        const simulation = await contract.callStatic[contractFunction](...functionParams)
        console.log('simulation', simulation)
      } catch (error) {
        console.log(error)
        return res.status(500).json({
          error: 'simulation fail',
          status: error?.reason,
        })
      }

      let mint;
      try {
        mint = await contract[contractFunction](...functionParams, options)
      } catch (error) {
        options.gasLimit = ethers.utils.hexlify(100000); // Higher gas limit for complex transactions
        options.maxFeePerGas = ethers.utils.parseUnits('330', 'gwei'); // Higher max fee for faster processing
        options.maxPriorityFeePerGas = ethers.utils.parseUnits('80', 'gwei'); // Higher priority fee to incentivize miners
        console.log('Updated options with higher gas fees:', options);
        mint = await contract[contractFunction](...functionParams, options);
        // if (error.code === 'SERVER_ERROR' && error.error && error.error.code === -32000) {
        //   console.log('Transaction underpriced. Increasing maxPriorityFeePerGas...');
        //   options.maxPriorityFeePerGas = ethers.utils.parseUnits('25', 'gwei');
        //   console.log('Updated options:', options);
        //   mint = await contract[contractFunction](...functionParams, options);
        // } else if (error.code === 'UNPREDICTABLE_GAS_LIMIT') {
        //   console.log('Unpredictable gas limit. Setting manual gas limit...');
        //   options.gasLimit = ethers.utils.hexlify(550000);
        //   console.log('Updated options:', options);
        //   mint = await contract[contractFunction](...functionParams, options);
        // } else if (error.code === 'UNPREDICTABLE_GAS_LIMIT' && error.error && error.error.code === -32000) {
        //   console.log('Max priority fee per gas higher than max fee per gas. Adjusting fees...');
        //   options.maxPriorityFeePerGas = ethers.utils.parseUnits('10', 'gwei');
        //   options.maxFeePerGas = ethers.utils.parseUnits('20', 'gwei');
        //   console.log('Updated options:', options);
        //   mint = await contract[contractFunction](...functionParams, options);
        // } else {
        //   throw error;
        // }
      }

      // DEV: uncomment this line to test simulate minting
      // const mint = { hash: 'test' }
      console.log(mint)

      if (mint?.hash) {
        // referral
        console.log('referrer', referrer)
        if (referrer?.length === 42) {
          //check if user already has a referrer
          const [userReferralInfos] = await db(TABLES.users)
            .select(TABLE.users.created_at, TABLE.users.referrer)
            .where(TABLE.users.id, userId)
          console.log(userReferralInfos)
          if (userReferralInfos && !userReferralInfos.referrer) {
            const date = new Date(userReferralInfos.created_at)
            // only valid for newly onboarded users
            const compareDate = new Date('2023-12-12')
            console.log(date)
            console.log(compareDate)
            if (date > compareDate) {
              console.log('new user')
              console.log('add referrer', referrer)
              const [referrerId] = await db(TABLES.users)
                .select(
                  TABLE.users.id,
                )
                .whereILike('address', referrer.toLowerCase())
              if (referrerId) {
                const addReferrer = await db(TABLES.users)
                  .where(TABLE.users.id, userId)
                  .update({ referrer: referrerId.id })
                console.log('referrer added', addReferrer)
              } else {
                console.log('referrer id not found')
              }
            } else {
              console.log('old user')
            }
          } else if (userReferralInfos && userReferralInfos.referrer) {
            console.log('user already has a referrer')
          } else {
            console.log('user not found')
          }
        } else {
          console.log('no referrer')
        }

        if (questCompleted?.id) {
          const updated = await db(TABLES.completions)
          .where(TABLE.completions.id, questCompleted.id)
          .update({ transaction_at: db.raw("NOW()"), transaction_hash: mint.hash })
          console.log(`updated `, updated)
        }
        trackBE(address, 'mint_badge', {
          lesson: lessonName,
          badgeId,
          address,
          gas: options
        })
        return res.status(200).json({
          transactionHash: mint.hash,
          status: questStatus,
        })
      } else {
        console.log(mint)
        questStatus = 'problem while minting'
        return res.status(200).json({
          status: questStatus,
        })
      }

    } catch (error) {
      console.log(error)
      console.error(error?.response?.data)
      trackBE(address, 'mint_kudos_issue', {
        error,
        badgeId,
        address,
      })
      return res.status(500).json({
        error: 'something went wrong while minting',
        status: '',
      })
    }
  } catch (error) {
    console.error(error)
    res.status(500).json({
      error: `error ${error?.code}: ${GENERIC_ERROR_MESSAGE}`,
    })
  }
}
