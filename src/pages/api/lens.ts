/* eslint-disable no-console */
import { NextApiRequest, NextApiResponse } from 'next'

import { GENERIC_ERROR_MESSAGE } from 'constants/index'
import { getLensProfile } from "utils/index";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> {
  try {
    const { address } = req.query
    const lensProfile = await getLensProfile(address as string)
    return res.status(200).send(lensProfile)
  } catch (error) {
    console.error(error)
    return res.status(500).json({
      error: `error ${error?.code}: ${GENERIC_ERROR_MESSAGE}`,
    })
  }
}
