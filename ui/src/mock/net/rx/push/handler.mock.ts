import { observableOf, delay } from '../../../../external/rxjs'
import { Handler } from '../../../../net/rx/handler/handler'
import { actionReceivePushed } from '../../../../store/action/action'
import { Message } from '../../../../type/message'

const message: Message = {
  username: 'Pushed',
  timestamp: '2',
  title: 'Pushed Message',
  id: 'pushed1',
}

const action = actionReceivePushed(message)

export const handler: Handler = () => observableOf(action).pipe(delay(1500))
