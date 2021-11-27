import type { Message } from '../../../type/message'

export const T_PUSH = 'message/push'
export type Push = {
  type: typeof T_PUSH
  message: Message
}
