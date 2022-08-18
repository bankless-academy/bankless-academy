/* eslint-disable no-console */
import { NextApiRequest, NextApiResponse } from 'next'
import axios from 'axios'

import { getUserId } from 'utils/db'
import { GENERIC_ERROR_MESSAGE } from 'constants/index'
import { MINTKUDOS_API, MINTKUDOS_ENCODED_STRING } from 'constants/index'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> {
  // check params + signature
  const { address, kudosId, signature, message } = req.body
  console.log(req.body)
  if (
    !address ||
    !kudosId ||
    !signature ||
    !message ||
    typeof address === 'object' ||
    typeof signature === 'object'
  )
    return res.json({ error: 'Wrong params' })

  console.log('address: ', address)
  console.log('kudosId: ', kudosId)
  console.log('signature: ', signature)
  console.log('message: ', message)

  // if (!verifySignature(address, signature, message))
  //   return res.json({ error: 'Wrong signature' })
  // TODO: require to sign in less than 2 minutes?

  try {
    const userId = await getUserId(address)
    console.log(userId)
    if (userId && Number.isInteger(userId)) {
      // TODO: check if the POAP was already claimed
      // TODO: verify that quest has been completed | for WL: check if allowed (level 1, X tokens, ...) + add address to allowlist
      // TODO: max 2 POAP claiming / lesson / IP to prevent manual farming
      try {
        const bodyParameters = {
          claimingAddress: address,
          signature: signature,
        }
        const config = {
          headers: {
            Authorization: `Basic ${MINTKUDOS_ENCODED_STRING}`,
          },
        }
        // claim SBT
        const result = await axios.post(
          `${MINTKUDOS_API}/v1/tokens/${kudosId}/claim`,
          bodyParameters,
          config
        )
        // console.log(result)
        if (result.headers.status === 202) {
          console.log(result.headers.location)
          // TODO: check header/Location to know when the token has been claimed
          return res.json({ location: result.headers.location })
        }
      } catch (error) {
        // TODO: add error feedback
        console.error(error?.response?.data)
      }
    }
  } catch (error) {
    console.error(error)
    res.json({
      error: `error ${error?.code}: ${GENERIC_ERROR_MESSAGE}`,
    })
  }
}
