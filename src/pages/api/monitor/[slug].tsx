import { NextApiRequest, NextApiResponse } from 'next'
import { createPublicClient, http, formatEther } from 'viem'
import { base } from 'viem/chains'

import {
  fetchGitcoinDonations,
  fetchGivethDonations,
  fetchExplorerData,
  fetchFromUrl,
} from 'utils/index'
import { fetchPassport, PassportResponseSchema } from 'utils/passport_lib'
import { PASSPORT_COMMUNITY_ID } from 'constants/passport'
import { BADGE_MINTER, INDEXER_URL } from 'constants/badges'
import { ALCHEMY_KEY_BACKEND } from 'constants/index'

// Required explorer data shape
const REQUIRED_EXPLORER_DATA = {
  handbooks: ['H005', 'H006', 'H007', 'H008', 'H009'],
  datadisks: [],
  badges: [1, 2, 3, 5, 6, 7, 8, 9, 10, 12, 11, 13, 14],
  polBadges: [10, 12, 11, 13, 14],
  baseBadges: [2, 3, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14],
  kudosBadges: [1, 2, 3, 5, 6, 7, 8, 9],
}

// Helper function to validate explorer data
const validateExplorerData = (data: any): boolean => {
  if (!data || typeof data !== 'object') return false

  // Check if all required properties exist
  for (const key of Object.keys(REQUIRED_EXPLORER_DATA)) {
    if (!data[key] || !Array.isArray(data[key])) return false

    // Check if all required values are present
    const hasAllRequired = REQUIRED_EXPLORER_DATA[key].every((value) =>
      data[key].includes(value)
    )
    if (!hasAllRequired) return false
  }

  return true
}

// Helper function to check ETH balance
const checkMinterBalance = async (): Promise<number> => {
  const client = createPublicClient({
    chain: base,
    transport: http(
      `https://base-mainnet.g.alchemy.com/v2/${ALCHEMY_KEY_BACKEND}`
    ),
  })

  const balance = await client.getBalance({ address: BADGE_MINTER })
  return parseFloat(formatEther(balance))
}

// Helper function to validate indexer sync
const validateIndexerSync = (
  chainMetadata: any[],
  maxBlockDiff: number = 10
): { isValid: boolean; details: any } => {
  const result = {
    isValid: true,
    details: {} as Record<
      string,
      {
        diff: number
        latest_processed_block: number
        block_height: number
      }
    >,
  }

  for (const chain of chainMetadata) {
    const diff = chain.block_height - chain.latest_processed_block
    result.details[`chain_${chain.chain_id}`] = {
      diff,
      latest_processed_block: chain.latest_processed_block,
      block_height: chain.block_height,
    }
    if (diff > maxBlockDiff) {
      result.isValid = false
    }
  }

  return result
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // Only allow GET requests
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  // Get query parameters
  const { slug, address: addressParam } = req.query
  const address = (
    typeof addressParam === 'string' ? addressParam : addressParam?.[0]
  )?.toLowerCase()

  if (!slug || typeof slug !== 'string') {
    return res.status(400).json({ error: 'Invalid indexer route' })
  }

  try {
    let data

    switch (slug) {
      case 'gitcoin-indexer': {
        data = await fetchGitcoinDonations(
          address || '0xe1887fF140BfA9D3b45D0B2077b7471124acD242'.toLowerCase()
        )
        if (typeof data !== 'number' || data < 1) {
          return res.status(400).json({
            success: false,
            error: 'Invalid Gitcoin donations data - must be a number >= 1',
          })
        }
        break
      }
      case 'giveth-indexer': {
        data = await fetchGivethDonations(
          address || '0xBD19a3F0A9CaCE18513A1e2863d648D13975CB30'.toLowerCase()
        )
        if (typeof data !== 'number' || data < 1) {
          return res.status(400).json({
            success: false,
            error: 'Invalid Giveth donations data - must be a number >= 1',
          })
        }
        break
      }
      case 'passport-score': {
        const response = await fetchPassport(
          address || '0xe1887fF140BfA9D3b45D0B2077b7471124acD242'.toLowerCase(),
          PASSPORT_COMMUNITY_ID
        )
        if (!response.ok) {
          return res.status(400).json({
            success: false,
            error: 'Failed to fetch passport score',
          })
        }
        const result = PassportResponseSchema.parse(await response.json())
        data = result.score ? parseInt(result.score) : 0
        if (typeof data !== 'number' || data < 20) {
          return res.status(400).json({
            success: false,
            error: 'Invalid passport score - must be a number >= 20',
          })
        }
        break
      }
      case 'minter-balance': {
        data = await checkMinterBalance()
        const minterBalance = 0.001
        if (typeof data !== 'number' || data < minterBalance) {
          return res.status(400).json({
            success: false,
            error: `Insufficient minter balance - must be >= ${minterBalance} ETH`,
            balance: data,
          })
        }
        break
      }
      case 'explorer-indexer': {
        data = await fetchExplorerData(
          address || '0xe1887fF140BfA9D3b45D0B2077b7471124acD242'.toLowerCase()
        )
        if (!validateExplorerData(data)) {
          return res.status(400).json({
            success: false,
            error: 'Invalid explorer data - missing required values',
            required: REQUIRED_EXPLORER_DATA,
          })
        }
        break
      }
      case 'indexer-sync': {
        const query = `
          query MyQuery {
            chain_metadata {
              block_height
              chain_id
              end_block
              first_event_block_number
              is_hyper_sync
              latest_fetched_block_number
              latest_processed_block
              num_batches_fetched
              num_events_processed
              start_block
              timestamp_caught_up_to_head_or_endblock
            }
          }
        `
        const result = await fetchFromUrl(INDEXER_URL, query)
        const maxBlockDiff = 10
        const validation = validateIndexerSync(
          result.chain_metadata,
          maxBlockDiff
        )

        if (!validation.isValid) {
          return res.status(400).json({
            success: false,
            error: `Indexer is not in sync - some chains are more than ${maxBlockDiff} blocks behind`,
            details: validation.details,
          })
        }

        data = validation.details
        break
      }
      default:
        return res.status(404).json({ error: 'Indexer route not found' })
    }

    return res.status(200).json({
      success: true,
      data,
    })
  } catch (error) {
    console.error(`Error fetching data from ${slug}:`, error)
    return res.status(500).json({
      success: false,
      error: 'Internal server error',
      details: error instanceof Error ? error.message : 'Unknown error',
    })
  }
}
