// partial https://github.com/gitcoinco/passport/blob/main/types/src/index.d.ts

import { JsonRpcSigner } from "@ethersproject/providers";

// A ProviderContext is used as a temporary storage so that providers can can share data
// between them, in case multiple VCs are requests in one http request
export type ProviderContext = {
  [key: string]: unknown;
};

// rough outline of a VerifiableCredential
export type VerifiableCredential = {
  "@context": string[];
  type: string[];
  credentialSubject: {
    id: string;
    "@context": { [key: string]: string }[];
    hash?: string;
    provider?: string;
    address?: string;
    challenge?: string;
    metaPointer?: string;
  };
  issuer: string;
  issuanceDate: string;
  expirationDate: string;
  proof: {
    type: string;
    proofPurpose: string;
    verificationMethod: string;
    created: string;
    jws: string;
  };
};

export type SignatureType = "EIP712" | "Ed25519";

// values received from client and fed into the verify route
export type RequestPayload = {
  type: string;
  types?: string[];
  address: string;
  version: string;
  proofs?: {
    [k: string]: string;
  };
  signer?: {
    challenge: VerifiableCredential;
    signature: string;
    address: string;
  };
  jsonRpcSigner?: JsonRpcSigner;
  challenge?: string;
  issuer?: string;
  signatureType?: SignatureType;
};

// response Object return by verify procedure
export type VerifiedPayload = {
  valid: boolean;
  // failureReason?: string;
  errors?: string[];
  // This will be combined with the ProofRecord (built from the verified content in the Payload)
  record?: { [k: string]: string };
  expiresInSeconds?: number;
};

export type PLATFORM_ID =
  | "Google"
  | "Ens"
  | "Poh"
  | "Twitter"
  | "POAP"
  | "Facebook"
  | "Brightid"
  | "Github"
  | "Gitcoin"
  | "Linkedin"
  | "Discord"
  | "Signer"
  | "Snapshot"
  | "ETH"
  | "GtcStaking"
  | "NFT"
  | "ZkSync"
  | "Lens"
  | "GnosisSafe"
  | "Coinbase"
  | "GuildXYZ"
  | "Hypercerts"
  | "PHI"
  | "Holonym"
  | "Idena"
  | "Civic"
  | "CyberConnect"
  | "GrantsStack"
  | "TrustaLabs";

export type PROVIDER_ID =
  | "Signer"
  | "Google"
  | "Ens"
  | "Poh"
  | "POAP"
  | "Facebook"
  | "FacebookProfilePicture"
  | "Brightid"
  | "Github"
  | "TenOrMoreGithubFollowers"
  | "FiftyOrMoreGithubFollowers"
  | "ForkedGithubRepoProvider"
  | "StarredGithubRepoProvider"
  | "FiveOrMoreGithubRepos"
  | "githubContributionActivityGte#30"
  | "githubContributionActivityGte#60"
  | "githubContributionActivityGte#120"
  | "githubAccountCreationGte#90"
  | "githubAccountCreationGte#180"
  | "githubAccountCreationGte#365"
  | "GitcoinContributorStatistics#numGrantsContributeToGte#1"
  | "GitcoinContributorStatistics#numGrantsContributeToGte#10"
  | "GitcoinContributorStatistics#numGrantsContributeToGte#25"
  | "GitcoinContributorStatistics#numGrantsContributeToGte#100"
  | "GitcoinContributorStatistics#totalContributionAmountGte#10"
  | "GitcoinContributorStatistics#totalContributionAmountGte#100"
  | "GitcoinContributorStatistics#totalContributionAmountGte#1000"
  | "GitcoinContributorStatistics#numRoundsContributedToGte#1"
  | "GitcoinContributorStatistics#numGr14ContributionsGte#1"
  | "Linkedin"
  | "Discord"
  | "Snapshot"
  | "SnapshotProposalsProvider"
  | "SnapshotVotesProvider"
  | "ethPossessionsGte#1"
  | "ethPossessionsGte#10"
  | "ethPossessionsGte#32"
  | "FirstEthTxnProvider"
  | "EthGTEOneTxnProvider"
  | "EthGasProvider"
  | "SelfStakingBronze"
  | "SelfStakingSilver"
  | "SelfStakingGold"
  | "CommunityStakingBronze"
  | "CommunityStakingSilver"
  | "CommunityStakingGold"
  | "NFT"
  | "ZkSync"
  | "ZkSyncEra"
  | "Lens"
  | "GnosisSafe"
  | "CoinbaseDualVerification"
  | "GuildMember"
  | "GuildAdmin"
  | "GuildPassportMember"
  | "Hypercerts"
  | "CyberProfilePremium"
  | "CyberProfilePaid"
  | "CyberProfileOrgMember"
  | "PHIActivitySilver"
  | "PHIActivityGold"
  | "HolonymGovIdProvider"
  | "IdenaState#Newbie"
  | "IdenaState#Verified"
  | "IdenaState#Human"
  | "IdenaStake#1k"
  | "IdenaStake#10k"
  | "IdenaStake#100k"
  | "IdenaAge#5"
  | "IdenaAge#10"
  | "CivicCaptchaPass"
  | "CivicUniquenessPass"
  | "CivicLivenessPass"
  | "Twitter"
  | "TwitterTweetGT10"
  | "TwitterFollowerGT100"
  | "TwitterFollowerGT500"
  | "TwitterFollowerGTE1000"
  | "TwitterFollowerGT5000"
  | "twitterAccountAgeGte#180"
  | "twitterAccountAgeGte#365"
  | "twitterAccountAgeGte#730"
  | "twitterTweetDaysGte#30"
  | "twitterTweetDaysGte#60"
  | "twitterTweetDaysGte#120"
  | "GrantsStack3Projects"
  | "GrantsStack5Projects"
  | "GrantsStack7Projects"
  | "GrantsStack2Programs"
  | "GrantsStack4Programs"
  | "GrantsStack6Programs"
  | "TrustaLabs"
  | "BeginnerCommunityStaker"
  | "ExperiencedCommunityStaker"
  | "TrustedCitizen";
