export const T_UPDATE_TIME = 'message/time/update'
export type UpdateTime = {
  type: typeof T_UPDATE_TIME
}
export const actionUpdateTime = (): UpdateTime => ({ type: T_UPDATE_TIME })
