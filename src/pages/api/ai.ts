/* eslint-disable no-console */
import { NextApiRequest, NextApiResponse } from 'next'

interface AIResponse {
  answer: string
  lessonName?: string
  lessonLink?: string
  usage: {
    promptTokens: number
    completionTokens: number
    totalTokens: number
    cached: boolean
    responseTime: number
  }
  error?: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  try {
    const { prompt, address, username } = req.body

    if (!prompt) {
      return res.status(400).json({ error: 'Prompt is required' })
    }

    console.log('prompt', prompt, address, username)

    const response = await fetch(
      `https://ai.bankless.ac/api/ai?apiKey=${process.env.HUGGINGFACE_API_KEY}&prompt=${encodeURIComponent(prompt)}&address=${address}&username=${username}&platform=Web`
    )

    const data = await response.json() as AIResponse
    console.log('data', data);

    if (response.status !== 500) {
      if (response.status === 200) {
        return res.status(200).json({
          response: data.answer,
          lessonName: data?.lessonName,
          lessonLink: data?.lessonLink,
        })
      } else {
        return res.status(200).json({
          response: data?.error,
        })
      }
    }

    if (!data.answer) {
      throw new Error('No answer received from AI service')
    }

    return res.status(200).json({
      response: data.answer,
      lessonName: data.lessonName,
      lessonLink: data.lessonLink,
    })
  } catch (error) {
    console.error('AI API Error:', error)
    return res.status(500).json({
      error: error instanceof Error ? error.message : 'Failed to get AI response'
    })
  }
}
