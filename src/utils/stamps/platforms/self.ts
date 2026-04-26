// Self.xyz integration: wraps SelfBackendVerifier with AllIds (any supported
// ID document — passport, biometric ID card, Aadhaar, Selfrica ID card).
// Unlike OAuth providers, Self proofs are pushed to our endpoint by the Self
// mobile app, so this module only exposes the verifier configuration and a
// helper to extract the userId from the userContextData blob.

import { SelfBackendVerifier, DefaultConfigStore, AllIds } from "@selfxyz/core";

// Scope for Self attestations — must match the scope set on the frontend
// SelfAppBuilder. Defaults to a stable value tied to this app.
export const SELF_SCOPE = process.env.NEXT_PUBLIC_SELF_SCOPE || "bankless-academy";

// The Self mobile app POSTs proofs to this endpoint. The endpoint is bound
// into the ZK proof itself, so the frontend's SelfAppBuilder and the backend
// verifier MUST agree on this exact URL.
export const SELF_ENDPOINT =
  process.env.NEXT_PUBLIC_SELF_ENDPOINT ||
  `${process.env.NEXT_PUBLIC_STAMP_CALLBACK || ""}/self`;

export function buildSelfVerifier(isStaging: boolean): SelfBackendVerifier {
  // Empty disclosures: we only need the nullifier (always present) for sybil
  // checking; we don't request nationality, age, name, etc.
  const configStore = new DefaultConfigStore({});

  return new SelfBackendVerifier(
    SELF_SCOPE,
    SELF_ENDPOINT,
    isStaging,
    AllIds,
    configStore,
    "uuid"
  );
}

// Extract the session userId from userContextData using the same packing as
// SelfBackendVerifier (UUID at hex 64–128 of the context blob).
export function extractUserId(userContextData?: string): string | undefined {
  try {
    if (!userContextData || userContextData.length < 128) return undefined;
    const bigInt = BigInt("0x" + userContextData.slice(64, 128));
    const hex = bigInt.toString(16).padStart(32, "0");
    return `${hex.slice(0, 8)}-${hex.slice(8, 12)}-${hex.slice(12, 16)}-${hex.slice(16, 20)}-${hex.slice(20)}`;
  } catch {
    return undefined;
  }
}
