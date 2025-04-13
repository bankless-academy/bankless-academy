import { NextApiRequest, NextApiResponse } from 'next'
import miniAppsData from 'constants/mini-apps.json'
import favoriteMiniAppsData from 'constants/favorite-mini-apps.json'

function cleanUrl(url: string) {
  // return the same object but without the proxy.wrpcd.net/?url= and url decoded 
  // remove &s=xxx from the url
  return decodeURIComponent(url?.replace('https://proxy.wrpcd.net/?url=', ''))?.split('&s=')[0]
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  // TEMP: only return 12 first apps
  const miniApps = [...favoriteMiniAppsData.result.frames, ...miniAppsData.result.frames].slice(0, 12)
  miniApps.forEach((app) => {
    app.imageUrl = cleanUrl(app.imageUrl)
    app.splashImageUrl = cleanUrl(app.splashImageUrl)
    app.iconUrl = cleanUrl(app.iconUrl)
  })
  res.status(200).json(miniApps)
}
