import { of as observableOf, delay } from 'rxjs'
import type { PushHandler } from '../../../rx/push/handler'
import { actionPush } from '../../../store/action/action'
import type { Message } from '../../../type/message'

const message: Message = {
  username: 'Pushed',
  timestamp: '2',
  title: 'Pushed Message',
  id: 'pushed1',
}

const action = actionPush(message)

export const handler: PushHandler = () => observableOf(action).pipe(delay(1500))
