/* eslint-disable no-console */
import { NextApiRequest, NextApiResponse } from 'next'

import { POTION_API } from 'constants/index'
import { fetchBE } from 'utils/server'
import { ExploreType } from 'entities/explore'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> {
  try {
    const explore = await fetchBE(`${POTION_API}/table?id=8f2f600b38a44cbb98f7fd240686c27a`)
    console.log(explore)
    const r = []
    for (const e of explore) {
      const explore: ExploreType = {
        product: e.fields.Product,
        image: e.fields.Image,
        isActif: e.fields['Is Actif'],
        isFeatured: e.fields['Is Featured'],
        category: e.fields.Category?.[0],
        description: e.fields.Description,
        link: e.fields.Link,
      }
      if (explore.isActif) {
        r.push(explore)
      }
    }
    console.log(r)
    return res.status(200).send(r)
  } catch (error) {
    console.error(error)
    return res.status(500).json({ error })
  }
}
