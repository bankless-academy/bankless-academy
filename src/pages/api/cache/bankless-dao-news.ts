/* eslint-disable no-console */
import { NextApiRequest, NextApiResponse } from 'next'
import Parser from 'rss-parser'

import LESSONS from 'constants/lessons'
import { lessonLink } from 'utils'
import { DOMAIN_URL } from 'constants/index'

const websiteFeeds = [
  {
    name: 'BanklessDAO newsletter',
    feed: 'https://banklessdao.substack.com/feed/'
  },
  {
    name: 'Bankless Publishing',
    // https://banklesspublishing.com/feed/
    feed: 'https://krux.co/banklesspublishing.php'
  },
  {
    name: 'Making Bank',
    feed: 'https://media.rss.com/making-bank-banklessdao/feed.xml'
  },
  {
    name: 'The Rug',
    feed: 'https://therug.mirror.xyz/feed/atom'
  }
]

const parser = new Parser()
const loadFeeds = async () => {
  try {
    const res = await Promise.all(websiteFeeds.map(website => parser.parseURL(website.feed)))
    console.log(res)
    const feed = res.map((website, index) => website.items?.map(item => {
      return {
        title: item.title,
        link: item.link,
        pubDate: item.pubDate,
        website: websiteFeeds[index].name
      }
    }
    ).sort((a, b) => Date.parse(b.pubDate) - Date.parse(a.pubDate)).slice(0, 1)
    ).flat()
      .sort((a, b) => Date.parse(b.pubDate) - Date.parse(a.pubDate))
      .slice(0, 10)

    return feed
  } catch (error) {
    console.log(error)
  }
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> {
  try {
    const feed = await loadFeeds()
    console.log(feed)
    const featured = []
    const latestAcademyLesson = LESSONS
      .filter(lesson => !lesson.isArticle)
      .sort((a, b) => a.publicationDate > b.publicationDate ? -1 : 1)[0]
    featured.push({
      title: latestAcademyLesson.name,
      link: lessonLink(latestAcademyLesson),
      pubDate: latestAcademyLesson.publicationDate,
      website: 'Bankless Academy',
      image: `${DOMAIN_URL}${latestAcademyLesson.socialImageLink}`
    })
    const latestYoutubeCC = (await parser.parseURL('https://www.youtube.com/feeds/videos.xml?playlist_id=PLxKM96XfN8gCGOxl0wxduL8kfa4wRBvfX'))?.items[0]
    console.log(featured)
    if (latestYoutubeCC?.title?.includes('Community Call'))
      featured.push({
        title: latestYoutubeCC.title,
        link: latestYoutubeCC.link,
        pubDate: latestYoutubeCC.pubDate,
        website: 'BanklessDAO Youtube',
        image: `https://img.youtube.com/vi/${latestYoutubeCC.id?.replace('yt:video:', '')}/maxresdefault.jpg`
      })
    return res.status(200).send({ feed, featured })
  } catch (error) {
    console.error(error)
    return res.status(500).json({ error })
  }
}
