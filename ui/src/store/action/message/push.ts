import type { Message } from '../../../type/message'

export const T_PUSH = 'message/push'
export type Push = {
  type: typeof T_PUSH
  message: Message
}
export const actionPush = (message: Message): Push => ({ type: T_PUSH, message })

export const T_PUSH_ERROR = 'message/push/error'
export type PushError = {
  type: typeof T_PUSH_ERROR
  message: string
}
export const actionPushError = (message: string): PushError => ({ type: T_PUSH_ERROR, message })
