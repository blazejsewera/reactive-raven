import { mergeMap, observableOf } from '../../external/rxjs'
import { getApi } from '../../api/api'
import type { PushHandler } from './handler'

const { pushMessages } = getApi()

const setupWebSocket$ = observableOf(pushMessages)

export const getPushResponse$ = (handler: PushHandler) => setupWebSocket$.pipe(mergeMap(handler))
