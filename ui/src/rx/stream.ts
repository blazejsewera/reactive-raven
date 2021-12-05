import { config } from '../config/reactiveRaven'
import { dispatch } from '../store/store'
import { getFetchResponse$ } from './message/fetch/fetch.stream'
import { handler as fetchHandler } from './message/fetch/handler'
import { handler as mockFetchHandler } from '../mock/rx/fetch/handler'
import { handler as pushHandler } from './message/push/handler'
import { handler as mockPushHandler } from '../mock/rx/push/handler'
import { getPushResponse$ } from './message/push/push.stream'
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
