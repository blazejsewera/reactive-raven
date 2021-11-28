import { DarkmodeOff, DarkmodeOn, DarkmodeToggle } from './darkmode/set'
import type {
  Request as MessageFetchRequest,
  Success as MessageFetchSuccess,
  Fail as MessageFetchFail,
} from './message/fetch'
import { Push as MessagePush } from './message/push'

export type Action =
  | MessageFetchRequest
  | MessageFetchSuccess
  | MessageFetchFail
  | MessagePush
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
