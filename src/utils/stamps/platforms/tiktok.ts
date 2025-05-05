// ----- Types
import type { RequestPayload, VerifiedPayload } from "../passport-types";
import { ProviderExternalVerificationError, type Provider, type ProviderOptions } from "../types";

// ----- Libs
import axios from "axios";

export type TikTokTokenResponse = {
  access_token: string;
  refresh_token: string;
  expires_in: number;
  open_id: string;
  scope: string;
  token_type: string;
};

export type TikTokUserResponse = {
  data?: {
    user?: {
      open_id?: string;
      union_id?: string;
      avatar_url?: string;
      display_name?: string;
    };
  };
  error?: {
    code: string;
    message: string;
    log_id: string;
  };
};

// Export a TikTok Provider to carry out OAuth and return a record object
export class TikTokProvider implements Provider {
  // Give the provider a type so that we can select it with a payload
  type = "TikTok";

  // Options can be set here and/or via the constructor
  _options = {};

  // construct the provider instance with supplied options
  constructor(options: ProviderOptions = {}) {
    this._options = { ...this._options, ...options };
  }

  // verify that the proof object contains valid === "true"
  async verify(payload: RequestPayload): Promise<VerifiedPayload> {
    const errors = [];
    let valid = false,
      verifiedPayload: TikTokUserResponse = {},
      record = undefined;

    try {
      // Verify CSRF state
      if (payload.proofs.state !== payload.proofs.csrfState) {
        throw new ProviderExternalVerificationError("CSRF state mismatch");
      }

      verifiedPayload = await verifyTikTok(payload.proofs.code);

      valid = verifiedPayload?.data?.user?.open_id ? true : false;
      if (valid) {
        record = {
          id: verifiedPayload.data.user.open_id,
        };
      } else {
        errors.push("We were not able to verify a TikTok account with your provided credentials.");
      }

      return {
        valid,
        record,
        errors,
      };
    } catch (e: unknown) {
      const error = e as { response?: { data?: { error_description?: string } } };
      throw new ProviderExternalVerificationError(
        `TikTok account check error: ${error.response?.data?.error_description || String(e)}`
      );
    }
  }
}

const requestAccessToken = async (code: string): Promise<TikTokTokenResponse> => {
  const clientKey = process.env.NEXT_PUBLIC_TIKTOK_CLIENT_ID;
  const clientSecret = process.env.TIKTOK_CLIENT_SECRET;
  const redirectUri = `${process.env.NEXT_PUBLIC_STAMP_CALLBACK}/tiktok`;

  try {
    // Exchange the code for an access token
    const tokenRequest = await axios.post(
      "https://open.tiktokapis.com/v2/oauth/token/",
      new URLSearchParams({
        client_key: clientKey,
        client_secret: clientSecret,
        code: code,
        grant_type: "authorization_code",
        redirect_uri: redirectUri
      }).toString(),
      {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          'Cache-Control': 'no-cache'
        }
      }
    );

    if (tokenRequest.status != 200) {
      throw `Post for request returned status code ${tokenRequest.status} instead of the expected 200`;
    }

    return tokenRequest.data as TikTokTokenResponse;
  } catch (e: unknown) {
    const error = e as { response?: { data?: { error_description?: string } } };
    console.error("Error when verifying TikTok account for user:", error.response?.data);
    throw e;
  }
};

const verifyTikTok = async (code: string): Promise<TikTokUserResponse> => {
  // retrieve user's auth bearer token to authenticate client
  const tokenResponse = await requestAccessToken(code);

  // Now that we have an access token fetch the user details
  const userRequest = await axios.get("https://open.tiktokapis.com/v2/user/info/", {
    headers: {
      Authorization: `Bearer ${tokenResponse.access_token}`,
    },
    params: {
      fields: 'open_id,union_id,display_name'
    }
  });

  if (userRequest.status != 200) {
    throw new ProviderExternalVerificationError(
      `Get user request returned status code ${userRequest.status} instead of the expected 200`
    );
  }

  return userRequest.data as TikTokUserResponse;
}; 
