import { mergeMap, of as observableOf } from 'rxjs'
import { getApi } from '../../api/api'
import type { FetchHandler } from './handler'

const { fetchMessages } = getApi()

const startupRequest$ = observableOf(fetchMessages)

export const getFetchResponse$ = (handler: FetchHandler) => startupRequest$.pipe(mergeMap(handler))
