import { DarkmodeOff, DarkmodeOn, DarkmodeToggle } from './darkmode/set'
import {
  Request as MessageFetchRequest,
  Success as MessageFetchSuccess,
  Fail as MessageFetchFail,
} from './message/fetch'
import { Push as MessagePush, PushError as MessagePushError } from './message/push'
import { UpdateTime as MessageUpdateTime } from './message/time'

export type Action =
  | MessageFetchRequest
  | MessageFetchSuccess
  | MessageFetchFail
  | MessagePush
  | MessagePushError
  | MessageUpdateTime
  | DarkmodeOn
  | DarkmodeOff
  | DarkmodeToggle

export {
  actionRequest as actionFetchRequest,
  actionSuccess as actionFetchSuccess,
  actionFail as actionFetchFail,
} from './message/fetch'

export { actionPush } from './message/push'

export { actionDarkmodeOn, actionDarkmodeOff, actionDarkmodeToggle } from './darkmode/set'
