import type { Message } from '../../../type/message'

export const T_PUSH = 'message/push'
export type Push = {
  type: typeof T_PUSH
  message: Message
}
export const actionPush = (message: Message): Push => ({ type: T_PUSH, message })
