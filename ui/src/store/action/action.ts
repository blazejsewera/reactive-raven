import { DarkmodeOff, DarkmodeOn, DarkmodeToggle } from './darkmode/set'
import {
  Request as MessageFetchRequest,
  Success as MessageFetchSuccess,
  Fail as MessageFetchFail,
} from './message/fetch'
import { ReceivePushed as MessageReceivePushed, ReceivePushedError as MessageReceivePushedError } from './message/push'
import { UpdateTime as MessageUpdateTime } from './message/time'
import { FormUpdateTitle, FormUpdateSubtitle, FormUpdateBody, FormUpdateUsername, FormClear } from './message/form'

export type Action =
  | MessageFetchRequest
  | MessageFetchSuccess
  | MessageFetchFail
  | MessageReceivePushed
  | MessageReceivePushedError
  | MessageUpdateTime
  | FormUpdateTitle
  | FormUpdateSubtitle
  | FormUpdateBody
  | FormUpdateUsername
  | FormClear
  | DarkmodeOn
  | DarkmodeOff
  | DarkmodeToggle

export {
  actionRequest as actionFetchRequest,
  actionSuccess as actionFetchSuccess,
  actionFail as actionFetchFail,
} from './message/fetch'

export { actionReceivePushed } from './message/push'

export { actionDarkmodeOn, actionDarkmodeOff, actionDarkmodeToggle } from './darkmode/set'
