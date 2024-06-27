// SOURCE: https://github.com/gitcoinco/passport/blob/main/platforms/src/utils/signer.ts

import { ALCHEMY_KEY_BACKEND } from "constants/index";

// ----- Types
import type { RequestPayload } from "./passport-types";

// ----- Verify signed message with ethers
import { JsonRpcProvider } from "ethers";

// ----- Credential verification
import * as DIDKit from "@spruceid/didkit-wasm-node";

// ----- Verify signed message with ethers
import { getAddress as getEthersAddress, verifyMessage } from "ethers";

import { DIDKitLib, VerifiableCredential } from "./passport-types";
export declare const verifyCredential: (DIDKit: DIDKitLib, credential: VerifiableCredential) => Promise<boolean>;

// set the network rpc url based on env
const RPC_URL = `https://eth-mainnet.g.alchemy.com/v2/${ALCHEMY_KEY_BACKEND}`;

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const getRPCProvider = (payload: RequestPayload): JsonRpcProvider => {
  const provider: JsonRpcProvider = new JsonRpcProvider(RPC_URL);

  return provider;
};

// get the address associated with the signer in the payload
export const getAddress = async ({ address, signer, issuer }: RequestPayload): Promise<string> => {
  // if signer proof is provided, check validity and return associated address instead of controller
  if (signer && signer.challenge && signer.signature) {
    // test the provided credential has not been tampered with
    const verified = await verifyCredential(DIDKit, signer.challenge);
    // check the credential was issued by us for this user...
    if (verified && issuer === signer.challenge.issuer && address === signer.challenge.credentialSubject.address) {
      // which ever wallet signed this message is the wallet we want to use in provider verifications
      return getEthersAddress(verifyMessage(signer.challenge.credentialSubject.challenge, signer.signature));
    }
  }

  // proof was missing/invalid return controller address from the payload
  return address;
};
