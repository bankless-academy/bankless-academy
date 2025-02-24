import { NextApiRequest, NextApiResponse } from 'next'
import fs from 'fs'
import path from 'path'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const filePath = path.join(process.cwd(), 'README.md')
    const fileContent = fs.readFileSync(filePath, 'utf8')

    res.setHeader('Content-Type', 'text/plain')
    res.status(200).send(fileContent)
  } catch (error) {
    res.status(500).json({ error: 'Failed to load agent.txt' })
  }
} 
