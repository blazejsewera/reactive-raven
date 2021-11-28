import { DarkmodeOff, DarkmodeOn, DarkmodeToggle } from './darkmode/toggle'
import type {
  Request as MessagesFetchRequest,
  Success as MessagesFetchSuccess,
  Fail as MessagesFetchFail,
} from './message/fetch'
import { Push as MessagePush } from './message/push'

export type Action =
  | MessagesFetchRequest
  | MessagesFetchSuccess
  | MessagesFetchFail
  | MessagePush
  | DarkmodeOn
  | DarkmodeOff
  | DarkmodeToggle
