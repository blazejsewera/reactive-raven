import type { Message } from '../../../type/message'

export const T_REQUEST = 'message/fetch/request'
export type Request = {
  type: typeof T_REQUEST
}

export const T_SUCCESS = 'message/fetch/success'
export type Success = {
  type: typeof T_SUCCESS
  messages: Message[]
}

export const T_FAIL = 'message/fetch/fail'
export type Fail = {
  type: typeof T_FAIL
  message: string
}
