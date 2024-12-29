/* eslint-disable no-console */
import { NextApiRequest, NextApiResponse } from 'next'
import Parser from 'rss-parser'

import LESSONS from 'constants/lessons'
import { lessonLink } from 'utils/index'
import { DOMAIN_URL, POTION_API } from 'constants/index'
import { fetchBE } from 'utils/server'

const websiteFeeds = [
  {
    name: 'BanklessDAO Weekly Rollup',
    feed: 'https://banklessdao.substack.com/feed?sectionId=11612'
  },
  {
    name: 'State of the DAOs',
    feed: 'https://banklessdao.substack.com/feed?sectionId=6708'
  },
  {
    name: 'Bankless Publishing Recap',
    feed: 'https://banklessdao.substack.com/feed?sectionId=27514'
  },
  {
    name: 'BanklessDAO Forum',
    feed: 'https://forum.bankless.community/latest.rss'
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
// const parserWithImage = new Parser({
//   customFields: {
//     item: [
//       ['media:content', 'image', { keepArray: false }],
//     ]
//   }
// })
const loadFeeds = async () => {
  try {
    const res = await Promise.all(websiteFeeds.map(website => parser.parseURL(website.feed)))
    // console.log(res)
    const feed = res.map((website, index) => website.items?.map(item => {
      return {
        title: item.title.split(' | ')[0],
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
    const announcement = await fetchBE(`${POTION_API}/api/html?id=1eb0f5822f5b4fb8a0d3965a591ddb7e`)
    // console.log(announcement)
    const feed = await loadFeeds()
    // console.log(feed)
    const featured = []
    // bankless.com
    // const latestBanklessArticle = (await parserWithImage.parseURL('https://www.bankless.com/rss/feed')).items[0]
    // console.log(latestBanklessArticle)
    // featured.push({
    //   title: latestBanklessArticle.title,
    //   link: `${latestBanklessArticle.link}?ref=bankless.community`,
    //   pubDate: latestBanklessArticle.pubDate,
    //   website: 'Bankless',
    //   image: latestBanklessArticle.image['$']['url']
    // })
    // bDAO Community Call
    const latestYoutubeCC = (await parser.parseURL('https://www.youtube.com/feeds/videos.xml?playlist_id=PLxKM96XfN8gCGOxl0wxduL8kfa4wRBvfX'))?.items[0]
    if (latestYoutubeCC?.title?.includes('Community Call'))
      featured.push({
        title: latestYoutubeCC.title,
        link: latestYoutubeCC.link,
        pubDate: latestYoutubeCC.pubDate,
        website: 'BanklessDAO Youtube',
        image: `https://img.youtube.com/vi/BZtLowguYiE/maxresdefault.jpg`
        // image: `https://img.youtube.com/vi/${latestYoutubeCC?.id?.replace('yt:video:', '')}/maxresdefault.jpg`
      })
    // Bankless Academy
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
    // console.log(featured)
    const news = { announcement, feed, featured }
    console.log(news)
    return res.status(200).send(news)
  } catch (error) {
    console.error(error)
    return res.status(500).json({ error })
  }
}
