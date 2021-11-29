import { config } from '../config/reactiveRaven'
import { dispatch } from '../store/store'
import { getFetchResponse$ } from './fetch/fetch.stream'
import { handler as fetchHandler } from './fetch/handler'
import { handler as mockFetchHandler } from '../mock/rx/fetch/handler'
import { handler as pushHandler } from './push/handler'
import { handler as mockPushHandler } from '../mock/rx/push/handler'
import { getPushResponse$ } from './push/push.stream'
import { getRelativeTimeUpdate$ } from './time/updateTime.stream'

const deps = config.mockAll
  ? {
      fetchHandler: mockFetchHandler,
      pushHandler: mockPushHandler,
    }
  : {
      fetchHandler: fetchHandler,
      pushHandler: pushHandler,
    }

export const setupStreams = () => {
  const fetchResponse$ = getFetchResponse$(deps.fetchHandler)
  fetchResponse$.subscribe(dispatch)

  const pushResponse$ = getPushResponse$(deps.pushHandler)
  pushResponse$.subscribe(dispatch)

  const relativeTimeUpdate$ = getRelativeTimeUpdate$()
  relativeTimeUpdate$.subscribe(dispatch)
}
