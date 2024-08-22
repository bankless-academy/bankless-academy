/* eslint-disable no-console */
import { NextApiRequest, NextApiResponse } from 'next'
const sendGridClient = require('@sendgrid/client')
import mailchimpClient from "@mailchimp/mailchimp_marketing"
import md5 from 'md5'

sendGridClient.setApiKey(process.env.SENDGRID_API_KEY)

const MAILCHIMP_API_KEY = process.env.MAILCHIMP_API_KEY

import { GENERIC_ERROR_MESSAGE, NOTION_IDS } from 'constants/index'

const NEWSLETTER_LIST_IDS = {
  // newsletter: 'd957b2bf-9885-4bab-a4dd-e3736de25838',
  newsletter: '008a9b1f6b',
  // Going Bankless
  '89cf10ef71b54fbfa7c3e6b41d55b36f': '8df9b57f-cc2d-4cb4-89d1-8569856dca78',
  // Layer 2 Blockchains
  '340eb401ab824dea8f85aace1aaf69c1': '3b351188-6398-480a-b8ab-aa2277016ce2',
  // DEXs and AMMs
  '0ff0ff5bde6c43f99f7710352069163e': '815359f3-c669-43a0-9f05-6d654b0bb6fe',
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> {
  const { email, notionId, wallet, ens } = req.body
  if (!email || (notionId && !NOTION_IDS.includes(notionId)))
    return res
      .status(400)
      .json({ isQuestValidated: false, error: 'Wrong params' })

  console.log('email', email)
  console.log('notionId', notionId)
  const newsletterId = Object.keys(NEWSLETTER_LIST_IDS).includes(notionId)
    ? NEWSLETTER_LIST_IDS[notionId]
    : NEWSLETTER_LIST_IDS['newsletter']
  console.log('newsletterId', newsletterId)

  try {
    if (newsletterId === NEWSLETTER_LIST_IDS['newsletter']) {
      // Mailchimp

      mailchimpClient.setConfig({
        apiKey: MAILCHIMP_API_KEY,
        server: "us21",
      })

      const merge_fields = {}
      if (wallet?.length)
        merge_fields['WALLET'] = wallet.toLowerCase()
      if (ens?.length)
        merge_fields['ENS'] = ens

      const subscriber_hash = md5(email.toLowerCase())

      const response = await mailchimpClient.lists.setListMember(newsletterId, subscriber_hash, {
        email_address: email,
        status: "subscribed",
        tags: ['General', 'Newsletter subscription form'],
        merge_fields
      })
      console.log(response)
      if (response && response.email_address === email) {
        // TODO: save email in DB if we have an address to associate with
        return res.status(200).json({ result: 'OK' })
      }
      else
        return res.status(403).json({ error: 'Problem with Mailchimp API.' })
    } else {
      // Sendgrid

      const data = {
        list_ids: [newsletterId],
        contacts: [
          {
            email,
          },
        ],
      }

      const request = {
        url: `/v3/marketing/contacts`,
        method: 'PUT',
        body: data,
      }

      sendGridClient.request(request).then(([response, body]) => {
        console.log(response?.statusCode)
        console.log(body)
        if (response?.statusCode === 202) {
          return res.status(200).json({ result: 'OK' })
        } else {
          return res.status(403).json({ error: body })
        }
      })
    }
  } catch (error) {
    console.error(error)
    return res.status(500).json({
      error: `error ${error?.code}: ${GENERIC_ERROR_MESSAGE}`,
    })
  }
}
