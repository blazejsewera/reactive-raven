import { createStore } from 'redux'
import type { Store } from 'redux'
import type { Action } from './action/action'
import type { Message } from '../type/message'
import { T_FAIL, T_REQUEST, T_SUCCESS } from './action/message/fetch'
import { T_PUSH } from './action/message/push'

export type State = {
  state: 'loading' | 'ok' | 'fail'
  messages: Message[]
}

const defaultState: State = {
  state: 'ok',
  messages: [],
}

type Reducer = (state: State | undefined, action: Action) => State

const reducer: Reducer = (previousState = defaultState, action) => {
  switch (action.type) {
    case T_REQUEST:
      return { ...previousState, state: 'loading' }
    case T_SUCCESS:
      return { ...previousState, state: 'ok', messages: [...previousState.messages, ...action.messages] }
    case T_FAIL:
      return { ...previousState, state: 'fail' }
    case T_PUSH:
      return { ...previousState, state: 'ok', messages: [...previousState.messages, action.message] }
    default:
      return previousState
  }
}

export const store: Store<State, Action> = createStore(reducer)
