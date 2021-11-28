import { mergeMap, of as observableOf } from 'rxjs'
import { getApi } from '../../api/api'
import type { PushHandler } from './handler'

const { pushMessages } = getApi()

const setupWebSocket$ = observableOf(pushMessages)

export const getPushResponse$ = (handler: PushHandler) => setupWebSocket$.pipe(mergeMap(handler))
