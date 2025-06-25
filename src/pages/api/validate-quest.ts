/* eslint-disable no-console */
import { NextApiRequest, NextApiResponse } from 'next'
import { TwitterApi } from 'twitter-api-v2'

import { db, TABLE, TABLES, getUserId } from 'utils/db'
import { LESSONS, QUESTS, GENERIC_ERROR_MESSAGE } from 'constants/index'
import { ONCHAIN_QUESTS } from 'components/Quest/QuestComponent'
import { validateOnchainQuest } from 'utils/index'
import { trackBE } from 'utils/mixpanel'

type TwitterResponse = {
  success: boolean
  data: {
    mentions: { username: string }[]
    urls: string[]
    text: string
    isRetweet: boolean
  }
}

// function extractFirstLink(str) {
//   // Regular expression to match URLs
//   const urlRegex = /(https?:\/\/[^\s]+)/;

//   // Match the first URL in the string
//   const match = str.match(urlRegex);

//   // If a match is found, return the URL, otherwise return null
//   return match ? match[0] : null;
// }

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> {
  const DEV_SECRET = process.env.DEV_SECRET
  const param =
    DEV_SECRET && req.query?.dev === DEV_SECRET ? req.query : req.body
  const { address, quest, tx, embed, messageLink } = param
  if (
    !address ||
    // TODO: replace quest with notionId?
    !quest ||
    typeof address === 'object' ||
    typeof quest === 'object' ||
    !QUESTS.includes(quest)
  )
    return res
      .status(400)
      .json({ isQuestValidated: false, error: 'Wrong params' })

  console.log('address', address)
  console.log('quest', quest)

  try {
    const userId = await getUserId(address, embed)
    console.log(userId)
    if (!(userId && Number.isInteger(userId))) {
      trackBE(address, 'issue_user_not_found', { context: 'validate-quest' })
      return res.status(403).json({ error: 'userId not found' })
    }

    const notionId = LESSONS.find((lesson) => lesson.quest === quest)?.notionId
    if (!notionId) return res.status(403).json({ error: 'notionId not found' })
    const questSocialMessage = LESSONS.find((lesson) => lesson.quest === quest)?.questSocialMessage
    const isSocialSharingQuest = questSocialMessage?.length > 0
    const socialSharingQuestType = isSocialSharingQuest ? questSocialMessage?.startsWith('http') ? 'RT' : 'TWEET' : ''

    const [credential] = await db(TABLES.credentials)
      .select('id')
      .where(TABLE.credentials.notion_id, notionId)
    if (!credential)
      return res.status(403).json({ error: 'credentialId not found' })

    let questStatus = ''
    const [completion] = await db(TABLES.completions)
      .select(TABLE.completions.id, TABLE.completions.is_quest_completed)
      .where(TABLE.completions.credential_id, credential.id)
      .where(TABLE.completions.user_id, userId)
    console.log(completion)
    const lesson = LESSONS.find((lesson) => lesson.quest === quest)?.name
    if (completion?.is_quest_completed === true) {
      questStatus = 'Quest already completed'
      trackBE(address, 'quest_already_completed', { lesson, embed })
      return res
        .status(200)
        .json({ isQuestValidated: true, status: questStatus })
    }
    if (!completion) {
      trackBE(address, 'quest_start', { lesson, embed })
      const [createCompletion] = await db(TABLES.completions).insert(
        { credential_id: credential.id, user_id: userId },
        ['id']
      )
      console.log('new completion added: ', createCompletion)
    }

    // Backend quest verification
    if (isSocialSharingQuest) {
      // Social Sharing Quest
      if (socialSharingQuestType === 'RT') {
        try {
          const [{ socials }] = await db(TABLES.users)
            .select('socials')
            .where(TABLE.users.id, userId)
          console.log(socials)
          const twitterId = socials?.twitter
          if (!twitterId) {
            return res.status(200).json({
              isQuestValidated: false,
              error: 'Twitter account not connected.',
            })
          }
          // RT intent
          const client = new TwitterApi(process.env.TWITTER_BEARER_TOKEN).readOnly;
          // timeline check
          const messageId = questSocialMessage.split('/').pop()
          console.log(messageId)
          const tm = await client.v2.userTimeline(twitterId, {
            "tweet.fields": [
              "created_at",
              "author_id",
              "referenced_tweets",
            ],
            "max_results": 100,
            "exclude": 'replies'
          })
          // console.log('tm', tm)
          const tweets = tm.data.data
          const isQuestValidated = tweets.some(t => {
            const referenced_tweet: any = t?.referenced_tweets?.length ? t.referenced_tweets[0] : {}
            if (referenced_tweet?.id === messageId)
              console.log(t)
            return (referenced_tweet?.type === 'retweeted' && referenced_tweet?.id === messageId) || false
          }) || false
          console.log('isQuestValidated', isQuestValidated)
          if (!isQuestValidated)
            return res.status(200).json({
              isQuestValidated: false,
              error: 'Repost not found. Try again in a couple seconds. If you have already reposted this tweet a long time ago, undo, then repost.',
            })
          // const rt = await client.v2.tweetRetweetedBy(messageId)
          // console.log('rt', rt)
        } catch (error) {
          console.log(error)
          return res.status(200).json({
            isQuestValidated: false,
            error: error?.data?.detail,
          })
        }
      } else if (socialSharingQuestType === 'TWEET') {
        // TWEET intent
        if (!messageLink || !messageLink.startsWith('http')) {
          return res.status(403).json({ isQuestValidated: false, error: 'Missing Message Link' })
        }
        try {
          const messageId = messageLink.split('/').pop()
          let message = ""
          let resolvedLink = ""
          if (messageLink.includes('warpcast') || messageLink.includes('farcaster')) {
            // Farcaster verification
            const options = {
              method: 'GET',
              headers: { accept: 'application/json', api_key: process.env.NEYNAR_API_KEY }
            }
            const cast = await (await fetch(`https://api.neynar.com/v2/farcaster/cast?identifier=${encodeURIComponent(messageLink)}&type=url`, options)).json()
            // TODO: return feedback if cast isn't available yet...
            console.log('cast', cast)
            message = cast.cast?.text
            console.log('message', message)
            resolvedLink = cast.cast?.embeds[0]?.url
            console.log('resolvedLink', resolvedLink)
          } else {
            // Twitter verification
            const twitterResponse = await fetch(`https://x.bankless.ac/api/tweets/${messageId}`, {
              headers: {
                'X-API-KEY': process.env.TWITTER_CLIENT_API_KEY
              }
            })
            const twitterData: TwitterResponse = await twitterResponse.json()
            console.log('twitterData', twitterData)
            if (!twitterData.success) {
              return res.status(200).json({
                isQuestValidated: false,
                error: 'Could not verify tweet. Please try again.',
              })
            }

            message = twitterData.data.text
            console.log('message', message)

            // Get the first URL from the urls array
            resolvedLink = twitterData.data.urls[0]
            console.log('resolvedLink', resolvedLink)
          }
          const messageIncludesTwitterTag = message?.toLowerCase()?.includes('@BanklessAcademy'.toLowerCase())
          const messageIncludesReferrerAddress = resolvedLink?.toLowerCase()?.includes(`referrer=${address?.toLowerCase()}`)
          // TODO: add lesson slug verification
          const isQuestValidated = messageLink?.length > 0 && messageIncludesTwitterTag && messageIncludesReferrerAddress
          if (!isQuestValidated)
            return res.status(200).json({
              isQuestValidated: false,
              error: !messageIncludesTwitterTag ? 'Missing @BanklessAcademy Twitter Tag' : !messageIncludesReferrerAddress ? 'Missing Referrer Address' : 'Unknown Error',
            })
        } catch (error) {
          console.log(error);
          return res.status(200).json({
            isQuestValidated: false,
            error: 'Onchain quest not completed',
          })
        }
      }
    } else if (ONCHAIN_QUESTS.includes(quest)) {
      // Onchain Quests
      if (['DEXAggregators', 'DecentralizedExchanges'].includes(quest)) {
        if (!tx || typeof tx !== 'string') {
          return res
            .status(403)
            .json({ isQuestValidated: false, error: 'Missing transaction' })
        }
        const isOnchainQuestCompleted = await validateOnchainQuest(
          quest,
          address,
          tx
        )
        if (!isOnchainQuestCompleted)
          return res.status(200).json({
            isQuestValidated: false,
            error: 'Onchain quest not completed',
          })
      }
      else if (['Layer2Blockchains', 'OptimismGovernance', 'StakingOnEthereum'].includes(quest)) {
        const isOnchainQuestCompleted = await validateOnchainQuest(quest, address)
        if (!isOnchainQuestCompleted)
          return res.status(200).json({
            isQuestValidated: false,
            error: 'Onchain quest not completed',
          })
      } else {
        return res.status(200).json({
          isQuestValidated: false,
          error: 'Onchain quest not completed',
        })
      }
    }

    // quest is completed
    const onchainConversion = completion?.id ? 'quest_conversion' : 'quest_already_done'
    trackBE(address, onchainConversion, { lesson, embed })
    const updateQuestCompletion = await db(TABLES.completions)
      .where(TABLE.completions.credential_id, credential.id)
      .where(TABLE.completions.user_id, userId)
      .update({ is_quest_completed: true, is_quest_conversion: onchainConversion === 'quest_conversion', quest_completed_at: db.raw("NOW()") })
    console.log('update quest completion', updateQuestCompletion)
    if (updateQuestCompletion) {
      questStatus = 'Quest completed'
      trackBE(address, 'quest_completed', { lesson, embed })
      return res.status(200).json({
        isQuestValidated: true,
        status: questStatus,
      })
    } else {
      questStatus = 'Problem while updating quest'
      return res.status(200).json({
        isQuestValidated: false,
        status: questStatus,
      })
    }
  } catch (error) {
    console.error(error)
    return res.status(500).json({
      isQuestValidated: false,
      error: `error ${error?.code}: ${GENERIC_ERROR_MESSAGE}`,
    })
  }
}
