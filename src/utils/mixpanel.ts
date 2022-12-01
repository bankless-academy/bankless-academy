import Mixpanel from 'mixpanel'

interface Dict {
  [key: string]: any
}

import { ACTIVATE_MIXPANEL, DOMAIN_PROD } from 'constants/index'

// TODO: remove debug

const mixpanel = ACTIVATE_MIXPANEL
  ? Mixpanel.init(process.env.NEXT_PUBLIC_MIXPANEL_PROJECT_ID, {
      api_host: 'https://api-eu.mixpanel.com',
      debug: true,
    })
  : null

// call this function in back-end
export function trackBA(
  address: string,
  event: string,
  // eslint-disable-next-line @typescript-eslint/ban-types
  data?: Dict
): void {
  if (address?.length && event?.length) {
    const data_object =
      typeof data === 'object'
        ? { domain: DOMAIN_PROD, ...data }
        : { domain: DOMAIN_PROD }
    mixpanel?.track(event, {
      distinct_id: address?.toLowerCase(),
      ...data_object,
    })
  } else {
    // eslint-disable-next-line no-console
    console.log('wrong tracking params:', `${address?.toLowerCase()}/${event}`)
  }
}
