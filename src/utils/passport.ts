import { Stamp } from '@gitcoinco/passport-sdk-types'
import { ALLOWED_ISSUER, STAMP_PROVIDERS } from 'constants/passport'
import { Stamps } from 'entities/passport'

const ALLOWED_PROVIDERS = Object.keys(STAMP_PROVIDERS)

export const filterValidStamps = (stamps: Stamp[]): Stamp[] => {
  // const currentTimestamp = 1665401965000
  const currentTimestamp = Date.now()
  const filteredStamps = []
  for (let i = 0; i < stamps.length; i++) {
    const stamp = stamps[i]
    if (
      stamp.credential.issuer === ALLOWED_ISSUER &&
      ALLOWED_PROVIDERS.includes(stamp.provider) &&
      !stamps.slice(i + 1).find((s) => s.provider === stamp.provider) &&
      Date.parse(stamp.credential.expirationDate) > currentTimestamp
    ) {
      filteredStamps.push(stamp)
    }
  }
  return filteredStamps
}

export const getNumberOfValidStamps = (stamps: Stamps): number | null => {
  if (stamps === null || !stamps) return null
  const array = Object.values(stamps)
  if (!array.length) {
    return 0
  }
  return filterValidStamps(Object.values(stamps)).length
}
