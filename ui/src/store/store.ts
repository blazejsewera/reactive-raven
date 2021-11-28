import { createStore } from 'redux'
import type { Store } from 'redux'
import type { Action } from './action/action'
import type { Message } from '../type/message'
import { T_FAIL, T_REQUEST, T_SUCCESS } from './action/message/fetch'
import { T_PUSH } from './action/message/push'
import { merge } from '../util/message/merger'
import { T_DARKMODE_OFF, T_DARKMODE_ON, T_DARKMODE_TOGGLE } from './action/darkmode/toggle'

export type State = {
  state: 'loading' | 'ok' | 'fail'
  messages: Message[]
  isDarkMode: boolean
}

const defaultState: State = {
  state: 'ok',
  messages: [],
  isDarkMode: false,
}

type Reducer = (state: State | undefined, action: Action) => State

const reducer: Reducer = (previousState = defaultState, action) => {
  switch (action.type) {
    case T_REQUEST:
      return { ...previousState, state: 'loading' }
    case T_SUCCESS:
      return { ...previousState, state: 'ok', messages: merge([...previousState.messages, ...action.messages]) } // PERF: possible room for optimization
    case T_FAIL:
      return { ...previousState, state: 'fail' }
    case T_PUSH:
      return { ...previousState, state: 'ok', messages: merge([...previousState.messages, action.message]) } // PERF: possible room for optimization
    case T_DARKMODE_ON:
      return { ...previousState, isDarkMode: true }
    case T_DARKMODE_OFF:
      return { ...previousState, isDarkMode: false }
    case T_DARKMODE_TOGGLE:
      return { ...previousState, isDarkMode: !previousState.isDarkMode }
    default:
      return previousState
  }
}

export const store: Store<State, Action> = createStore(reducer)
export const { dispatch, subscribe } = store
