import { Observable, observableOf } from '../../external/rxjs'
import { map, catchError, webSocket } from '../../external/rxjs'
import type { ApiMessage } from '../../api/type/message'
import type { Message } from '../../type/message'
import { Action, actionPush } from '../../store/action/action'
import { actionPushError } from '../../store/action/message/push'
import { updateTime } from '../../util/message/time'

const PUSH_ERROR_MSG = 'Error when pushing message to ui: '

const toMessage = (m: ApiMessage): Message =>
  updateTime({
    username: m.username,
    timestamp: m.timestamp,
    title: m.title,
    subtitle: m.subtitle,
    body: m.body,
    id: m.id,
  })

export type PushHandler = (pushUrl: string) => Observable<Action>
export const handler: PushHandler = pushUrl =>
  webSocket<ApiMessage>(pushUrl).pipe(
    map(m => actionPush(toMessage(m))),
    catchError(err => observableOf(actionPushError(PUSH_ERROR_MSG + err?.message))),
  )
