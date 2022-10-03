export interface KudosType {
  kudosTokenId: number
  headline: string
  assetUrl: string
  createdAt: string
  claimStatus: 'claimed' | 'unclaimed'
  communityId: string
}
