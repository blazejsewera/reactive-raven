import { observableOf } from '../../../external/rxjs'
import { Handler } from '../../../rx/handler/handler'
import { actionFetchSuccess } from '../../../store/action/action'
import { full, fullWithImage, partial, minimal, anotherUser } from '../../message.mock'

const messages = [full, fullWithImage, partial, minimal, anotherUser]

export const handler: Handler = () => observableOf(actionFetchSuccess(messages))
