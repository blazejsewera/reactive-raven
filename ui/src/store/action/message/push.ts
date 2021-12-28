import { Message } from '../../../type/message'

export const T_RECEIVE_PUSHED = 'message/receivePushed'
export type ReceivePushed = {
  type: typeof T_RECEIVE_PUSHED
  message: Message
}
export const actionReceivePushed = (message: Message): ReceivePushed => ({ type: T_RECEIVE_PUSHED, message })

export const T_RECEIVE_PUSHED_ERROR = 'message/receivePushed/error'
export type ReceivePushedError = {
  type: typeof T_RECEIVE_PUSHED_ERROR
  message: string
}
export const actionReceivePushedError = (message: string): ReceivePushedError => ({
  type: T_RECEIVE_PUSHED_ERROR,
  message,
})
