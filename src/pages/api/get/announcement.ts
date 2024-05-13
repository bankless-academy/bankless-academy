/* eslint-disable no-console */
import { NextApiRequest, NextApiResponse } from 'next'

import { POTION_API } from 'constants/index'
import { fetchBE } from 'utils/server'
import { AnnouncementType } from 'entities/announcement'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> {
  try {
    const announcements = await fetchBE(`${POTION_API}/table?id=d1088de6c02c457d9986e0d335472063`)
    console.log(announcements)
    const r = []
    for (const a of announcements) {
      const announcement: AnnouncementType = {
        announcement: a.fields.Name,
        isActif: a.fields['Is actif'],
        description: a.fields.Description,
        start: a.fields.Start,
        end: a.fields.End,
        image: a.fields.Image,
        link: a.fields.Link,
      }
      if (announcement.isActif)
        console.log(announcement)
      return res.status(200).send(announcement)
    }
    console.log(r)
    return res.status(200).send({})
  } catch (error) {
    console.error(error)
    return res.status(500).json({ error })
  }
}
