/* eslint-disable no-console */
import { NextApiRequest, NextApiResponse } from 'next'
import Parser from 'rss-parser'

const websiteFeeds = [{
  name: 'Bankless Academy',
  feed: 'https://app.banklessacademy.com/rss.xml'
}, {
  name: 'BanklessDAO newsletter',
  feed: 'https://banklessdao.substack.com/feed/'
}, {
  name: 'Bankless Publishing',
  feed: 'https://krux.co/banklesspublishing.php'
}]
// https://banklesspublishing.com/feed/

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
    ).sort((a, b) => Date.parse(b.pubDate) - Date.parse(a.pubDate)).slice(0, 2)
    ).flat()
      .sort((a, b) => Date.parse(b.pubDate) - Date.parse(a.pubDate))
      .slice(0, 10)
    console.log(feed)
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
    return res.status(200).send({ feed })
  } catch (error) {
    console.error(error)
    return res.status(500).json({ error })
  }
}
