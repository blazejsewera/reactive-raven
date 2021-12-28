import { config } from '../../config/reactiveRaven'
import { dispatch } from '../../store/store'
import { getFetchResponse$ } from './message/fetch/fetch.stream'
import { handler as fetchHandler } from './message/fetch/handler'
import { handler as mockFetchHandler } from '../../mock/net/rx/fetch/handler.mock'
import { handler as pushedHandler } from './message/receivePushed/handler'
import { handler as mockPushedHandler } from '../../mock/net/rx/push/handler.mock'
import { getPushedResponse$ } from './message/receivePushed/push.stream'
import { getRelativeTimeUpdate$ } from './time/updateTime.stream'

const deps = config.mockAll
  ? {
      fetchHandler: mockFetchHandler,
      pushedHandler: mockPushedHandler,
    }
  : {
      fetchHandler: fetchHandler,
      pushedHandler: pushedHandler,
    }

export const setupStreams = () => {
  const fetchResponse$ = getFetchResponse$(deps.fetchHandler)
  fetchResponse$.subscribe(dispatch)

  const pushResponse$ = getPushedResponse$(deps.pushedHandler)
  pushResponse$.subscribe(dispatch)

  const relativeTimeUpdate$ = getRelativeTimeUpdate$()
  relativeTimeUpdate$.subscribe(dispatch)
}
