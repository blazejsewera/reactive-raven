import { of as observableOf } from 'rxjs'
import type { FetchHandler } from '../../../rx/fetch/handler'
import { actionFetchSuccess } from '../../../store/action/action'
import { full, fullWithImage, partial, minimal, anotherUser } from '../../message.mock'

const messages = [full, fullWithImage, partial, minimal, anotherUser]

export const handler: FetchHandler = () => observableOf(actionFetchSuccess(messages))
