/* eslint-disable no-console */
import { NextApiRequest, NextApiResponse } from 'next'
import { createPublicClient, http, formatEther } from 'viem'
import { base } from 'viem/chains'

import {
  fetchGivethDonations,
  fetchExplorerData,
  fetchFromUrl,
} from 'utils/index'
import { fetchGitcoinDonations } from 'utils/server'
import { fetchPassport, PassportResponseSchema } from 'utils/passport_lib'
import { PASSPORT_COMMUNITY_ID } from 'constants/passport'
import { BADGE_MINTER, INDEXER_URL } from 'constants/badges'
import { ALCHEMY_KEY_BACKEND } from 'constants/index'
import { getNewsletterSubscribers } from 'utils/newsletter'

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
    // Handle both string and number types (indexer may return strings)
    const hasAllRequired = REQUIRED_EXPLORER_DATA[key].every((value) =>
      data[key].includes(value) || data[key].includes(String(value))
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

/** Alchemy JSON-RPC host segment per chain (same API key as elsewhere in this app). */
const ALCHEMY_NETWORK_BY_CHAIN_ID: Record<number, string> = {
  8453: 'base-mainnet',
  10: 'opt-mainnet',
  137: 'polygon-mainnet',
}

const fetchAlchemyBlockNumber = async (
  chainId: number
): Promise<number | undefined> => {
  const network = ALCHEMY_NETWORK_BY_CHAIN_ID[chainId]
  if (!network) return undefined
  const url = `https://${network}.g.alchemy.com/v2/${ALCHEMY_KEY_BACKEND}`
  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        jsonrpc: '2.0',
        id: 1,
        method: 'eth_blockNumber',
        params: [],
      }),
    })
    const data = await response.json()
    if (data.error || data.result == null) {
      console.error('Alchemy eth_blockNumber error:', data.error)
      return undefined
    }
    return parseInt(data.result, 16)
  } catch (err) {
    console.error('Alchemy eth_blockNumber fetch failed:', err)
    return undefined
  }
}

// Helper function to validate ENS data
const validateENSData = (data: any): boolean => {
  return (
    data &&
    typeof data === 'object' &&
    typeof data.address === 'string' &&
    data.address.startsWith('0x') &&
    data.address.length === 42
  )
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // Get query parameters
  const { slug, address: addressParam, monitoringKey } = req.query
  if (!monitoringKey || typeof monitoringKey !== 'string') {
    return res.status(400).json({ error: 'Missing or invalid monitoringKey' })
  }
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
      case 'explorer-indexer-backup': {
        data = await fetchExplorerData(
          address || '0xe1887fF140BfA9D3b45D0B2077b7471124acD242'.toLowerCase(),
          true
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
      case 'ens-data': {
        const ensName = 'didierkrux.eth'
        const response = await fetch(`https://api.ensdata.net/${ensName}`)
        if (!response.ok) {
          return res.status(400).json({
            success: false,
            error: 'Failed to fetch ENS data',
          })
        }
        data = await response.json()
        if (!validateENSData(data)) {
          return res.status(400).json({
            success: false,
            error: 'Invalid ENS data format',
            data,
          })
        }
        break
      }
      case 'indexer-sync': {
        const queryChainMetadata = `
          query IndexerSyncHealth {
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
        const maxBlockDiff = 100

        const [result, alchemyBaseLatest] = await Promise.all([
          fetchFromUrl(INDEXER_URL, queryChainMetadata),
          fetchAlchemyBlockNumber(8453),
        ])

        const chainMetadata = result.chain_metadata || []
        // Get details for all chains (for display)
        const allChainsValidation = validateIndexerSync(
          chainMetadata,
          maxBlockDiff
        )
        // Only check base chain (chain_id 8453) for validation failure
        const baseChainMetadata =
          chainMetadata.filter((chain: any) => chain.chain_id === 8453) || []
        const baseChainValidation = validateIndexerSync(
          baseChainMetadata,
          maxBlockDiff
        )

        if (!baseChainValidation.isValid) {
          return res.status(400).json({
            success: false,
            error: `Indexer is not in sync - base chain is more than ${maxBlockDiff} blocks behind`,
            details: allChainsValidation.details,
          })
        }

        const baseMeta = chainMetadata.find((c: any) => c.chain_id === 8453)
        const latestProcessed = Number(baseMeta?.latest_processed_block)
        const indexerHead = Number(baseMeta?.block_height)

        const alchemyDetails: Record<string, unknown> = {
          baseAlchemyBlockNumber: alchemyBaseLatest ?? null,
        }

        if (alchemyBaseLatest != null && Number.isFinite(latestProcessed)) {
          const processingLagVsAlchemy = alchemyBaseLatest - latestProcessed
          alchemyDetails.baseProcessingLagVsAlchemy = processingLagVsAlchemy

          if (processingLagVsAlchemy > maxBlockDiff) {
            return res.status(400).json({
              success: false,
              error: `Indexer is not in sync - Base processed block lags Alchemy chain tip by more than ${maxBlockDiff} blocks`,
              details: { ...allChainsValidation.details, ...alchemyDetails },
            })
          }

          if (Number.isFinite(indexerHead)) {
            const headSkewVsAlchemy = Math.abs(indexerHead - alchemyBaseLatest)
            alchemyDetails.baseHeadSkewVsAlchemy = headSkewVsAlchemy
            if (headSkewVsAlchemy > maxBlockDiff) {
              return res.status(400).json({
                success: false,
                error: `Indexer chain head disagrees with Alchemy by more than ${maxBlockDiff} blocks`,
                details: { ...allChainsValidation.details, ...alchemyDetails },
              })
            }
          }
        } else if (alchemyBaseLatest == null) {
          alchemyDetails.alchemyBaseCrossCheck = 'unavailable'
        }

        data = { ...allChainsValidation.details, ...alchemyDetails }
        break
      }
      case 'read-x': {
        const response = await fetch(
          `https://x.bankless.ac/api/tweets/1869099842800365863?apiKey=${process.env.TWITTER_CLIENT_API_KEY}`,
          {
            headers: {
              'X-API-KEY': process.env.TWITTER_CLIENT_API_KEY,
            },
          }
        )
        if (!response.ok) {
          return res.status(400).json({
            success: false,
            error: 'Failed to fetch data from read-x',
          })
        }
        data = await response.json()
        break
      }
      case 'newsletter-subscribers': {
        data = await getNewsletterSubscribers()
        if (!data) {
          return res.status(400).json({
            success: false,
            error: 'Invalid newsletter subscribers',
            data,
          })
        }
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
