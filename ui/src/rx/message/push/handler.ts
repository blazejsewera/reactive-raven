import { observableOf } from '../../../external/rxjs'
import { map, catchError, webSocket } from '../../../external/rxjs'
import { ApiMessage } from '../../../api/type/message'
import { Message } from '../../../type/message'
import { Handler } from '../../handler/handler'
import { actionPush } from '../../../store/action/action'
import { actionPushError } from '../../../store/action/message/push'
import { updateTime } from '../../../util/message/time'

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

export const handler: Handler = pushUrl =>
  webSocket<ApiMessage>(pushUrl).pipe(
    map(m => actionPush(toMessage(m))),
    catchError(err => observableOf(actionPushError(PUSH_ERROR_MSG + err?.message))),
  )
