// SOURCE: https://github.com/gitcoinco/passport/blob/main/platforms/src/Ens/Providers/EnsProvider.ts
/* eslint-disable no-console */

// ----- Types
import { ProviderExternalVerificationError, type Provider, type ProviderOptions } from "../types";
import type { RequestPayload, VerifiedPayload } from "../passport-types";
import { getBasename } from "utils/basenames";

// ----- Credential verification
import { getRPCProvider } from "../signer";

const ENS_PUBLIC_RESOLVERS = [
  "0x231b0ee14048e9dccd1d247744d114a4eb5e8e63",
  "0x4976fb03c32e5b8cfe2b6ccb31c09ba78ebaba41",
];

// Export a Ens Provider to carry out Ens name check and return a record object
export class EnsProvider implements Provider {
  // Give the provider a type so that we can select it with a payload
  type = "Ens";
  // Options can be set here and/or via the constructor
  _options = {};

  // construct the provider instance with supplied options
  constructor(options: ProviderOptions = {}) {
    this._options = { ...this._options, ...options };
  }

  // Verify that the address defined in the payload has an ENS reverse lookup registered
  async verify(payload: RequestPayload): Promise<VerifiedPayload> {
    const errors = [];
    let valid = false,
      reportedName: string,
      record = undefined;

    try {
      const provider = getRPCProvider(payload);
      reportedName = await provider.lookupAddress(payload.address);
      console.log('reportedName', reportedName)

      if (reportedName) {
        const resolver = await provider.getResolver(reportedName);
        if (ENS_PUBLIC_RESOLVERS.includes(resolver?.address?.toLowerCase())) {
          valid = true;
          record = {
            ens: reportedName,
          };
        } else {
          errors.push(
            "Apologies! Your primary ENS name uses an alternative resolver and is not eligible for the ENS stamp."
          );
        }
      } else {
        // check basename
        const basename = await getBasename(`0x${payload.address.substring(2)}` as `0x${string}`)
        if (basename) {
          valid = true;
          record = {
            ens: basename,
          };
        } else {
          errors.push("Primary ENS name was not found for given address.");
        }
      }

      return {
        valid,
        errors,
        record,
      };
    } catch (e: unknown) {
      throw new ProviderExternalVerificationError(`Error verifying ENS name: ${String(e)}`);
    }
  }
}
