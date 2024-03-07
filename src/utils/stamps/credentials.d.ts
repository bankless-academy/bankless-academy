// SOURCE: https://github.com/gitcoinco/passport/blob/main/identity/src/credentials.ts

import { DIDKitLib, ProofRecord, RequestPayload, VerifiableCredential, IssuedCredential, IssuedChallenge, CredentialResponseBody, SignatureType } from "@gitcoin/passport-types";
export declare const VERSION = "v0.0.0";
export declare const MAX_VALID_DID_SESSION_AGE: number;
import { DocumentSignatureTypes, DocumentType } from "./signingDocuments";
export declare const CHALLENGE_EXPIRES_AFTER_SECONDS = 60;
export declare const CREDENTIAL_EXPIRES_AFTER_SECONDS: number;
export declare const objToSortedArray: (obj: {
  [k: string]: string;
}) => string[][];
declare type CredentialExpiresInSeconds = {
  expiresInSeconds: number;
};
declare type CredentialExpiresAt = {
  expiresAt: Date;
};
declare type Eip712CredentialSubject = {
  "@context": object;
  [k: string]: any;
};
declare type Eip712CredentialFields = {
  credentialSubject: Eip712CredentialSubject;
};
export declare const issueEip712Credential: (DIDKit: DIDKitLib, key: string, expiration: CredentialExpiresInSeconds | CredentialExpiresAt, fields: Eip712CredentialFields, signingDocument: DocumentSignatureTypes<DocumentType>, additionalContexts?: string[]) => Promise<VerifiableCredential>;
export declare const issueChallengeCredential: (DIDKit: DIDKitLib, key: string, record: RequestPayload, signatureType?: SignatureType) => Promise<IssuedCredential>;
export declare const issueHashedCredential: (DIDKit: DIDKitLib, key: string, address: string, record: ProofRecord, expiresInSeconds?: number, signatureType?: string, metaPointer?: string) => Promise<IssuedCredential>;
export declare const verifyCredential: (DIDKit: DIDKitLib, credential: VerifiableCredential) => Promise<boolean>;
export declare const fetchChallengeCredential: (iamUrl: string, payload: RequestPayload) => Promise<IssuedChallenge>;
export declare const fetchVerifiableCredential: (iamUrl: string, payload: RequestPayload, createSignedPayload: (data: any) => Promise<any>) => Promise<{
  credentials: CredentialResponseBody[];
}>;
export { };
