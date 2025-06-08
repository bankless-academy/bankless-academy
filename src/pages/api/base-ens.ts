/* eslint-disable no-console */
import { NextApiRequest, NextApiResponse } from 'next'

import { GENERIC_ERROR_MESSAGE } from 'constants/index'
import { getBasename, getBasenameAvatar } from 'utils/basenames';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> {
  try {
    const { address } = req.query
    const basename = await getBasename(address as any)
    const basenameAvatar = basename ? await getBasenameAvatar(basename) : null

    return res.status(200).send({ basename, basenameAvatar })
  } catch (error) {
    console.error(error)
    return res.status(500).json({
      error: `error ${error?.code}: ${GENERIC_ERROR_MESSAGE}`,
    })
  }
}
