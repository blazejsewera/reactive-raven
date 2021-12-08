import { mergeMap, observableOf } from '../../external/rxjs'
import { Handler } from '../handler/handler'

export const getMessageResponse$ = (url: string) => (handler: Handler) => observableOf(url).pipe(mergeMap(handler))
