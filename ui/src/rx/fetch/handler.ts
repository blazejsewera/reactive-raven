import { switchMap, catchError, map, from as observableFrom, of as observableOf } from 'rxjs'
import type { Observable } from 'rxjs'
import type { Action } from '../../store/action/action'
import type { ApiMessage } from '../../api/type/message'
import type { Message } from '../../type/message'
import { actionFetchFail, actionFetchSuccess } from '../../store/action/action'
import { fromFetch as observableFromFetch } from 'rxjs/fetch'

const SERVER_ERROR_MSG = 'Server error when fetching messages'
const NETWORK_ERROR_MSG = 'Network error when fetching messages'

const toMessages = (payload: ApiMessage[]): Message[] =>
  payload.map(m => ({
    username: m.username,
    timestamp: m.timestamp,
    title: m.title,
    subtitle: m.subtitle,
    body: m.body,
    id: m.id,
  }))

const toAction = (payload: ApiMessage[]): Action => actionFetchSuccess(toMessages(payload))
const observableActionSuccess = (response: Response): Observable<Action> =>
  observableFrom(response.json()).pipe(map(toAction))

const observableActionFail = (message: string): Observable<Action> => observableOf(actionFetchFail(message))

export type FetchHandler = (requestUrl: string) => Observable<Action>
export const handler: FetchHandler = requestUrl =>
  observableFromFetch(requestUrl).pipe(
    switchMap(
      (response): Observable<Action> =>
        response.ok ? observableActionSuccess(response) : observableActionFail(SERVER_ERROR_MSG),
    ),
    catchError((): Observable<Action> => observableActionFail(NETWORK_ERROR_MSG)),
  )
