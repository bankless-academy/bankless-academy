/* eslint-disable no-console */
import { NextApiRequest, NextApiResponse } from 'next'

import { db, TABLE, TABLES } from 'utils/db'
import { WALLET_SIGNATURE_MESSAGE_PROFILE } from 'constants/index'
import { verifySignature } from 'utils/SignatureUtil'

// A wallet address, and nothing else. Without this check the lookup below is a
// PATTERN match: `%`, or any short hex fragment, would match every row in
// `users` — and this route used to UPDATE on that match, so one unauthenticated
// call could rewrite everybody's newsletter_email.
const ADDRESS_RE = /^0x[a-fA-F0-9]{40}$/
// Deliberately loose: real validation is the double opt-in on the provider
// side. This only rejects the obviously-not-an-email.
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  const { email, address, signature, chainId } = req.body

  if (!email || !address) {
    return res.status(400).json({ error: 'Email and address are required' })
  }
  if (typeof address !== 'string' || !ADDRESS_RE.test(address)) {
    return res.status(400).json({ error: 'Invalid address' })
  }
  if (
    typeof email !== 'string' ||
    email.length > 320 ||
    !EMAIL_RE.test(email)
  ) {
    return res.status(400).json({ error: 'Invalid email' })
  }

  try {
    // whereILike + a validated address = exactly one row, case-insensitively.
    // Never reintroduce `ilike '%' + address + '%'` here.
    const [user] = await db(TABLES.users)
      .whereILike('address', address.toLowerCase())
      .select('id', 'newsletter_email')

    if (!user) {
      return res.status(400).json({ error: 'User not found' })
    }

    if (user.newsletter_email === email) {
      return res.status(200).json({ message: 'Email linked successfully' })
    }

    // Changing an address's EXISTING email is the hijack case, so it needs
    // proof of wallet ownership. A first-time link does not: the caller
    // (ConnectWalletButton) has no signature to offer until the reader has
    // signed for something else, and prompting on connect would be a wallet
    // popup for every visitor. Clients pass the cached `profile-signature`
    // when they have one, so most overwrites verify with no extra prompt.
    if (user.newsletter_email) {
      const verified =
        typeof signature === 'string' &&
        signature.length > 0 &&
        Number.isInteger(chainId) &&
        (await verifySignature({
          address,
          signature,
          message: WALLET_SIGNATURE_MESSAGE_PROFILE,
          chainId,
        }))
      if (!verified) {
        return res
          .status(403)
          .json({ error: 'Wallet signature required to change a linked email' })
      }
    }

    await db(TABLES.users)
      .where(TABLE.users.id, user.id)
      .update({ newsletter_email: email })

    return res.status(200).json({ message: 'Email linked successfully' })
  } catch (error) {
    console.error('Error linking email:', error)
    return res.status(500).json({ error: 'Internal server error' })
  }
}
