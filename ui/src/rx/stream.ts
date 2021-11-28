import { config } from '../config/reactiveRaven'
import { dispatch } from '../store/store'
import { getFetchResponse$ } from './fetch/fetch.stream'
import { handler } from './fetch/handler'
import { handler as mockHandler } from '../mock/rx/fetch/handler'

const deps = config.mockAll
  ? {
      fetchHandler: mockHandler,
    }
  : {
      fetchHandler: handler,
    }

export const setupStreams = () => {
  const fetchResponse$ = getFetchResponse$(deps.fetchHandler)
  fetchResponse$.subscribe(dispatch)
}
