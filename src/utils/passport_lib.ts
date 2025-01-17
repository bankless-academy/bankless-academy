// SOURCE: https://github.com/gitcoinco/grants-stack/blob/main/packages/common/src/index.ts
// Doc Passport v2: https://docs.passport.xyz/building-with-passport/passport-api/api-reference

import z from "zod";

export enum PassportState {
  NOT_CONNECTED,
  INVALID_PASSPORT,
  SCORE_AVAILABLE,
  LOADING,
  ERROR,
  INVALID_RESPONSE,
}

// const PassportEvidenceSchema = z.object({
//   type: z.string().nullish(),
//   rawScore: z.coerce.number(),
//   threshold: z.string().nullish(),
// });

export type PassportResponse = z.infer<typeof PassportResponseSchema>;

export const PassportResponseSchema = z.object({
  address: z.string().nullish(),
  score: z.string().nullish(),
  // status: z.string().nullish(),
  // evidence: PassportEvidenceSchema.nullish(),
  error: z.string().nullish(),
  // detail: z.string().nullish(),
});

/**
 * Endpoint used to fetch the passport score for a given address
 *
 * @param address
 * @param communityId
 * @returns
 */
export const fetchPassport = (
  address: string,
  communityId: string
): Promise<Response> => {
  const url = `https://api.passport.xyz/v2/stamps/${communityId}/score/${address}`;
  return fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      // Authorization: `Bearer ${process.env.GITCOIN_PASSPORT_API_KEY}`,
      'X-API-Key': process.env.GITCOIN_PASSPORT_API_KEY,
    },
  });
};


// Deprecated
/**
 * Endpoint used to submit user's passport score for given communityId
 *
 * @param address string
 * @param communityId string
 * @returns
 */
// export const submitPassport = (
//   address: string,
//   communityId: string
// ): Promise<Response> => {
//   const url = `https://api.scorer.gitcoin.co/registry/v2/submit-passport`;

//   return fetch(url, {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//       // Authorization: `Bearer ${process.env.GITCOIN_PASSPORT_API_KEY}`,
//       'X-API-Key': process.env.GITCOIN_PASSPORT_API_KEY,
//     },
//     body: JSON.stringify({
//       address,
//       community: communityId,
//       signature: "",
//       nonce: "",
//     }),
//   });
// };
