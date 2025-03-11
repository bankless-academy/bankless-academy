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
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  try {
    const { prompt } = req.body

    if (!prompt) {
      return res.status(400).json({ error: 'Prompt is required' })
    }

    console.log('prompt', prompt);

    const response = await fetch(
      `https://ai.bankless.ac/api/ai?apiKey=${process.env.HUGGINGFACE_API_KEY}&prompt=${encodeURIComponent(prompt)}`
    )

    if (!response.ok) {
      throw new Error(`AI service responded with status: ${response.status}`)
    }

    const data = await response.json() as AIResponse
    console.log('data', data);

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
