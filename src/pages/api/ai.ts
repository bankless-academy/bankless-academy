/* eslint-disable no-console */
import { NextApiRequest, NextApiResponse } from 'next';

interface HuggingFaceResponse {
  generated_text: string;
}

interface TokenStats {
  promptTokens: number;
  completionTokens: number;
  totalTokens: number;
  cached: boolean;
  responseTime: number;  // in milliseconds
}

interface FormattedResponse {
  answer: string;
  lessonName?: string;
  lessonLink?: string;
  usage: TokenStats;
}

interface CacheEntry {
  response: FormattedResponse;
  timestamp: number;
}

// Cache configuration
const CACHE_DURATION = 24 * 60 * 60 * 1000; // 24 hours in milliseconds
const responseCache = new Map<string, CacheEntry>();

// Token counting helper
function countTokens(text: string): number {
  // Rough estimation: Split on whitespace and punctuation
  return text.split(/[\s,.!?;:"'()[\]{}<>/|+=\-_`~]+/).filter(Boolean).length;
}

// Stats tracking
let totalApiCalls = 0;
let totalCacheHits = 0;
let totalTokensUsed = 0;
let totalResponseTime = 0;
let avgResponseTime = 0;

// Clean up old cache entries periodically
setInterval(() => {
  const now = Date.now();
  for (const [key, entry] of responseCache.entries()) {
    if (now - entry.timestamp > CACHE_DURATION) {
      responseCache.delete(key);
    }
  }
}, CACHE_DURATION);

// API key validation
const API_KEY = process.env.HUGGINGFACE_API_KEY;

function isValidApiKey(req: NextApiRequest): boolean {
  const apiKey = req.headers['x-api-key'] || req.query.apiKey;
  return apiKey === API_KEY;
}

const HF_API_URL = "https://api-inference.huggingface.co/models/mistralai/Mistral-7B-Instruct-v0.2";

const LESSONS_DATA: Record<string, string> = {
  "Bitcoin Basics": "https://app.banklessacademy.com/lessons/bitcoin-basics",
  "Ethereum Basics": "https://app.banklessacademy.com/lessons/ethereum-basics",
  "Wallet Basics": "https://app.banklessacademy.com/lessons/wallet-basics",
  "Blockchain Basics": "https://app.banklessacademy.com/lessons/blockchain-basics",
  "Web3 Security": "https://app.banklessacademy.com/lessons/web3-security",
  "Layer 1 Blockchains": "https://app.banklessacademy.com/lessons/layer-1-blockchains",
  "Layer 2 Blockchains": "https://app.banklessacademy.com/lessons/layer-2-blockchains",
  "Intro to DeFi": "https://app.banklessacademy.com/lessons/intro-to-defi",
  "Decentralized Exchanges": "https://app.banklessacademy.com/lessons/decentralized-exchanges",
  "Staking on Ethereum": "https://app.banklessacademy.com/lessons/staking-on-ethereum",
  "DEX Aggregators": "https://app.banklessacademy.com/lessons/dex-aggregators",
  "Gitcoin 2.0 Essentials": "https://app.banklessacademy.com/lessons/gitcoin-2.0-essentials",
  "Optimism Governance": "https://app.banklessacademy.com/lessons/optimism-governance",
  "Creating a Crypto Wallet": "https://app.banklessacademy.com/lessons/creating-a-crypto-wallet",
  "Funding a Wallet on Layer 2": "https://app.banklessacademy.com/lessons/funding-a-wallet-on-layer-2",
  "Registering Your Web3 Username": "https://app.banklessacademy.com/lessons/registering-your-web3-username",
  "Understanding Stablecoins": "https://app.banklessacademy.com/lessons/understanding-stablecoins",
  "Swapping on a DEX": "https://app.banklessacademy.com/lessons/swapping-on-a-decentralized-exchange",
  "Staking Ether": "https://app.banklessacademy.com/lessons/staking-ether",
  "Managing Token Allowances": "https://app.banklessacademy.com/lessons/managing-token-allowances",
  "Ethereum Token Standards": "https://app.banklessacademy.com/lessons/understanding-ethereum-token-standards",
  "Delegating on Optimism": "https://app.banklessacademy.com/lessons/delegating-on-optimism"
}

async function queryHuggingFace(prompt: string): Promise<FormattedResponse> {
  const startTime = Date.now();

  // Normalize prompt to create consistent cache keys
  const normalizedPrompt = prompt.toLowerCase().trim();

  // Check cache first
  const cachedEntry = responseCache.get(normalizedPrompt);
  if (cachedEntry && Date.now() - cachedEntry.timestamp <= CACHE_DURATION) {
    console.log('Cache hit for prompt:', normalizedPrompt);
    totalCacheHits++;
    return {
      ...cachedEntry.response,
      usage: {
        ...cachedEntry.response.usage,
        cached: true,
        responseTime: Date.now() - startTime
      }
    };
  }

  totalApiCalls++;

  const availableLessons = Object.keys(LESSONS_DATA).join(', ');

  const systemPrompt = 'You are a helpful assistant for Bankless Academy, focused only on crypto, blockchain, and web3 topics. ' +
    'For non-crypto related questions, reply with "I can only help with crypto, blockchain, and web3 related topics." ' +
    'For crypto questions, you MUST follow this format exactly:\n' +
    '1. First line: A brief explanation\n' +
    '2. Second line: Empty line\n' +
    '3. Third line: ONE exact lesson name from the provided list\n' +
    'IMPORTANT: The lesson name must match EXACTLY with one from the list - no variations allowed.';

  // console.log('systemPrompt', systemPrompt);

  const userPrompt = `Question: ${prompt}\n\n` +
    `Available lessons names:\n${availableLessons}\n\n` +
    'Required format:\n' +
    '<brief explanation>\n\n' +
    '<lesson name>\n\n' +
    'Examples:\n' +
    'Q: What is Ethereum?\n' +
    'A programmable blockchain platform for decentralized applications.\n\n' +
    'Ethereum Basics\n\n' +
    'Q: What is a DEX?\n' +
    'A decentralized platform for trading cryptocurrencies without intermediaries.\n\n' +
    'Decentralized Exchanges\n\n' +
    'Q: How to stake ETH?\n' +
    'A way to earn rewards by securing the Ethereum network with your ETH.\n\n' +
    'Staking Ether';

  // console.log('userPrompt', userPrompt);

  const fullPrompt = `<s>[INST] ${systemPrompt} [/INST]
[INST] ${userPrompt} [/INST]`;

  const promptTokens = countTokens(fullPrompt);
  console.log('Cache miss, querying Hugging Face for prompt:', normalizedPrompt, '(tokens:', promptTokens, ')');

  try {
    const response = await fetch(HF_API_URL, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${API_KEY}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        inputs: fullPrompt,
        parameters: {
          max_new_tokens: 80,
          temperature: 0.3,
          top_p: 0.7,
          return_full_text: false,
          do_sample: false,
          early_stopping: true,
          stop: ["\n\n\n", "</s>"]
        }
      })
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error('Hugging Face API error:', {
        status: response.status,
        statusText: response.statusText,
        error: errorText
      });
      throw new Error(`API Error: ${response.status} - ${errorText}`);
    }

    const data: HuggingFaceResponse[] = await response.json();

    if (!data || !data[0] || !data[0].generated_text) {
      console.error('Invalid response format:', data);
      throw new Error('Invalid response format from Hugging Face API');
    }

    const aiResponse = data[0].generated_text.trim();
    const completionTokens = countTokens(aiResponse);
    const totalTokens = promptTokens + completionTokens;

    totalTokensUsed += totalTokens;

    console.log('AI Response:', aiResponse, '(tokens:', completionTokens, ')');

    const parts = aiResponse.split('\n\n');

    const responseTime = Date.now() - startTime;
    totalResponseTime += responseTime;
    avgResponseTime = totalResponseTime / (totalApiCalls + totalCacheHits);

    const formattedResponse: FormattedResponse = {
      answer: parts[0].trim(),
      usage: {
        promptTokens,
        completionTokens,
        totalTokens,
        cached: false,
        responseTime
      }
    };

    if (parts.length >= 2) {
      const lessonName = parts[1].trim();
      if (lessonName in LESSONS_DATA) {
        formattedResponse.lessonName = lessonName;
        formattedResponse.lessonLink = LESSONS_DATA[lessonName];
      } else {
        console.warn('Lesson not found in LESSONS_DATA:', lessonName);
      }
    }

    // Cache the response
    responseCache.set(normalizedPrompt, {
      response: formattedResponse,
      timestamp: Date.now()
    });

    return formattedResponse;
  } catch (error) {
    console.error('Error in queryHuggingFace:', error);
    throw error;
  }
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // API key validation
  if (!API_KEY) {
    console.error('HUGGINGFACE_API_KEY environment variable is not set');
    return res.status(500).json({ error: 'Server configuration error' });
  }

  if (!isValidApiKey(req)) {
    return res.status(401).json({ error: 'Invalid or missing API key' });
  }

  if (req.method !== 'POST' && req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  let prompt: string | undefined;

  if (req.method === 'POST') {
    prompt = req.body.prompt;
  } else {
    prompt = req.query.prompt as string;
  }

  if (!prompt || typeof prompt !== 'string') {
    return res.status(400).json({ error: 'Prompt is required and must be a string' });
  }

  try {
    const response = await queryHuggingFace(prompt);

    // Add global stats to response headers
    res.setHeader('X-Total-API-Calls', totalApiCalls);
    res.setHeader('X-Cache-Hits', totalCacheHits);
    res.setHeader('X-Total-Tokens-Used', totalTokensUsed);
    res.setHeader('X-Avg-Response-Time', Math.round(avgResponseTime));
    res.setHeader('X-Total-Response-Time', totalResponseTime);

    res.status(200).json(response);
  } catch (error) {
    console.error('Error in handler:', error);
    if (error instanceof Error) {
      if (error.message.startsWith('API Error:')) {
        return res.status(500).json({
          error: 'Hugging Face API error. Please try again later.',
          details: error.message
        });
      }
      if (error.message.includes('fetch failed')) {
        return res.status(504).json({ error: 'The request took too long to process. Please try again.' });
      }
    }
    res.status(500).json({ error: 'An unexpected error occurred. Please try again later.' });
  }
}
