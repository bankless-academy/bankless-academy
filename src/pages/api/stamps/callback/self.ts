/* eslint-disable no-console */
import { NextApiRequest, NextApiResponse } from "next";
import { ATTESTATION_ID, ConfigMismatchError } from "@selfxyz/core";

import { buildSelfVerifier, extractUserId } from "utils/stamps/platforms/self";
import { generateHash, VERSION } from "pages/api/stamps/callback/[...slug]";
import { STAMP_PLATFORMS } from "constants/passport";
import { TABLE, TABLES, db } from "utils/db";
import { trackBE } from "utils/mixpanel";
import { DEMO_ACCOUNTS_IDS } from "constants/index";

// In-memory status store keyed by session userId (UUID generated client-side
// and embedded in the proof's userContextData). Survives long enough for the
// frontend to poll after the user returns from the Self mobile app.
// Uses globalThis so the Map is shared across Next.js module instances in dev.
type StampStatus = {
  isStampValidated: boolean;
  status: string;
  fraud?: string;
};

const g = globalThis as unknown as {
  __selfStampStore?: Map<string, StampStatus>;
};
if (!g.__selfStampStore) g.__selfStampStore = new Map<string, StampStatus>();
const stampStore = g.__selfStampStore;

function setStatus(userId: string, value: StampStatus) {
  stampStore.set(userId, value);
  setTimeout(() => stampStore.delete(userId), 30 * 60 * 1000);
}

function humanReadable(error: unknown): string {
  if (error instanceof ConfigMismatchError) {
    const issues = (error as ConfigMismatchError).issues as
      | Array<{ type: string; message: string }>
      | undefined;
    if (issues?.some((i) => i.type === "InvalidRoot")) {
      return "Verification failed: the document root is not on-chain. Make sure you are using a real ID, not a mock or test document.";
    }
    if (issues?.some((i) => i.type === "InvalidId")) {
      return "Document type not supported.";
    }
    return error.message;
  }
  return error instanceof Error ? error.message : "Unknown error";
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> {
  // GET — frontend polling: return the latest status for a userId.
  if (req.method === "GET") {
    const { userId } = req.query;
    if (!userId || typeof userId !== "string") {
      return res.status(400).json({ error: "userId required" });
    }
    const status = stampStore.get(userId);
    if (!status) return res.status(200).json({ pending: true });
    return res.status(200).json(status);
  }

  if (req.method !== "POST") {
    res.setHeader("Allow", ["GET", "POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
    return;
  }

  const isStaging = req.query.staging === "true";
  const address = (req.query.address as string)?.toLowerCase();

  try {
    const { attestationId, proof, publicSignals, userContextData } = req.body;
    if (!proof || !publicSignals) {
      return res.status(200).json({
        status: "error",
        result: false,
        reason: "Missing proof or publicSignals",
      });
    }

    const sessionUserId = extractUserId(userContextData);

    if (!address) {
      return res.status(400).json({
        status: "error",
        result: false,
        reason: "Missing address query param",
      });
    }

    // Look up the BA user before doing the expensive verification.
    const [user] = await db(TABLES.users)
      .select("id")
      .where("address", "ilike", `%${address}%`);
    const userId = user?.id;
    if (!(userId && Number.isInteger(userId))) {
      return res.status(403).json({ error: "userId not found" });
    }
    const isDemoAccount = DEMO_ACCOUNTS_IDS.includes(userId);

    // Reject unknown attestations early. AllIds covers the four supported types.
    const knownIds = [
      ATTESTATION_ID.PASSPORT,
      ATTESTATION_ID.BIOMETRIC_ID_CARD,
      ATTESTATION_ID.AADHAAR,
      ATTESTATION_ID.SELFRICA_ID_CARD,
    ];
    if (!knownIds.includes(attestationId)) {
      const reason = "Unsupported document type.";
      if (sessionUserId)
        setStatus(sessionUserId, { isStampValidated: false, status: reason });
      return res.status(200).json({
        status: "error",
        result: false,
        reason,
      });
    }

    const verifier = buildSelfVerifier(isStaging);
    const result = await verifier.verify(
      attestationId,
      proof,
      publicSignals,
      userContextData
    );

    if (!result.isValidDetails.isValid) {
      const reason = "Verification failed";
      if (sessionUserId)
        setStatus(sessionUserId, { isStampValidated: false, status: reason });
      return res.status(200).json({
        status: "error",
        result: false,
        reason,
      });
    }

    const nullifier = result.discloseOutput?.nullifier;
    if (!nullifier) {
      const reason = "Could not determine identity nullifier from proof";
      if (sessionUserId)
        setStatus(sessionUserId, { isStampValidated: false, status: reason });
      return res.status(200).json({
        status: "error",
        result: false,
        reason,
      });
    }

    // Build the stamp record using the nullifier as the unique id. The
    // nullifier is stable per ID document but reveals nothing about the user,
    // so it's the right primitive for sybil checking.
    const platform = "self";
    const type = STAMP_PLATFORMS[platform].provider;
    const version = VERSION?.replace("v", "");
    const record = {
      type,
      version,
      id: String(nullifier),
    };
    const hash = `${VERSION}:${generateHash(record)}`;

    if (hash?.length !== 51) {
      const reason = `Problem with stamp (${hash}): close the window and try again.`;
      if (sessionUserId)
        setStatus(sessionUserId, { isStampValidated: false, status: reason });
      return res.status(200).json({
        status: "error",
        result: false,
        reason,
      });
    }

    const stampHash: Record<string, string> = { [type]: hash };
    const socialId: Record<string, string> = { [platform]: String(nullifier) };

    // Sybil check — same shape as the [...slug].ts callback.
    const sybil = await db(TABLES.users)
      .select("id", "address")
      .whereNot(TABLE.users.id, userId)
      .whereNull(TABLE.users.sybil_user_id)
      .where(db.raw(`(ba_stamps @> ?)`, [stampHash]))
      .orWhereNot(TABLE.users.id, userId)
      .where(TABLE.users.sybil_user_id, "=", 12)
      .where(db.raw(`(ba_stamps @> ?)`, [stampHash]));

    if (sybil?.length && !isDemoAccount) {
      console.log("fraud detected:", sybil);
      trackBE(address, "duplicate_stamps_ba", {
        sybil_id: sybil[0]?.id,
        sybil_address: sybil[0]?.address,
      });
      await db(TABLES.users)
        .where(TABLE.users.id, userId)
        .update({ sybil_user_id: sybil[0]?.id });
      const reason = "Duplicate stamp detected.";
      const fraud = sybil[0]?.address;
      if (sessionUserId)
        setStatus(sessionUserId, {
          isStampValidated: false,
          status: reason,
          fraud,
        });
      return res.status(200).json({
        status: "error",
        result: false,
        reason,
        fraud,
      });
    }

    // Persist the stamp.
    const updated = await db.raw(
      `update "users" set "ba_stamps" = ba_stamps || ?, "socials" = socials || ? where "users"."id" = ?`,
      [stampHash, socialId, userId]
    );
    if (updated) console.log("stamps updated:", updated?.rowCount);
    trackBE(address, "stamp_added", { platform });

    const okStatus = `Stamp OK: ${hash} You can close the window.`;
    if (sessionUserId)
      setStatus(sessionUserId, { isStampValidated: true, status: okStatus });

    return res.status(200).json({ status: "success", result: true });
  } catch (error) {
    console.error("[stamps/self] verification error:", error);
    const sessionUserId = extractUserId(req.body?.userContextData);
    const reason = humanReadable(error);
    if (sessionUserId)
      setStatus(sessionUserId, { isStampValidated: false, status: reason });
    return res.status(200).json({
      status: "error",
      result: false,
      reason,
    });
  }
}
