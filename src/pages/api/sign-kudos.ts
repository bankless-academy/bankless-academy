/* eslint-disable no-console */
import { NextApiRequest, NextApiResponse } from 'next'

import { verifyTypedSignature } from 'utils'
import { MINTKUDOS_DOMAIN_INFO } from 'constants/kudos'

import { db, TABLES } from 'utils/db'
import { GENERIC_ERROR_MESSAGE, LESSONS } from 'constants/index'
import { ALLOWED_SIGNERS } from 'constants/kudos'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> {
  // check params + signature
  const { address, kudosId, signature } = req.body
  if (
    !address ||
    !kudosId ||
    !signature ||
    typeof address === 'object' ||
    typeof signature === 'object'
  )
    return res.json({ error: 'Wrong params' })

  console.log('address: ', address)
  console.log('kudosId: ', kudosId)
  // console.log('signature: ', signature)

  // TODO: require to sign in less than 2 minutes?

  try {
    if (!ALLOWED_SIGNERS.includes(address.toLowerCase()))
      return res.json({ error: 'Address not allowed to sign' })

    const adminTypes = {
      CommunityAdminAirdrop: [{ name: 'tokenId', type: 'uint256' }],
    }
    const message = {
      tokenId: kudosId,
    }
    console.log('message', JSON.stringify(message))
    if (
      !verifyTypedSignature(
        signature,
        message,
        address,
        adminTypes,
        MINTKUDOS_DOMAIN_INFO
      )
    )
      return res.json({ error: 'Wrong signature' })

    const notionId = LESSONS.find(
      (lesson) => lesson.kudosId === kudosId
    )?.notionId
    if (!notionId) return res.json({ error: 'notionId not found' })

    const updated = await db(TABLES.credentials)
      .where('notion_id', notionId)
      .update({ signature })
    console.log(updated)
    if (updated === 1) return res.json({ result: 'Signature updated' })
    else return res.json({ error: 'notionID missing?' })
  } catch (error) {
    console.error(error)
    res.json({
      error: `error ${error?.code}: ${GENERIC_ERROR_MESSAGE}`,
    })
  }
}
