import { observableOf, delay } from '../../../external/rxjs'
import type { Handler } from '../../../rx/handler/handler'
import { actionPush } from '../../../store/action/action'
import type { Message } from '../../../type/message'

const message: Message = {
  username: 'Pushed',
  timestamp: '2',
  title: 'Pushed Message',
  id: 'pushed1',
}

const action = actionPush(message)

export const handler: Handler = () => observableOf(action).pipe(delay(1500))
