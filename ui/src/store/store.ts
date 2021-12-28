import { createStore } from 'redux'
import { Store } from 'redux'
import { Action } from './action/action'
import { Message } from '../type/message'
import { T_FAIL, T_REQUEST, T_SUCCESS } from './action/message/fetch'
import { T_PUSH, T_PUSH_ERROR } from './action/message/push'
import { merge } from '../util/message/merger'
import { T_DARKMODE_OFF, T_DARKMODE_ON, T_DARKMODE_TOGGLE } from './action/darkmode/set'
import { T_UPDATE_TIME } from './action/message/time'
import { updateTimeAll } from '../util/message/time'
import { config } from '../config/reactiveRaven'
import {
  T_FORM_CLEAR,
  T_FORM_UPDATE_BODY,
  T_FORM_UPDATE_SUBTITLE,
  T_FORM_UPDATE_TITLE,
  T_FORM_UPDATE_USERNAME,
} from './action/message/form'

export type State = {
  state: 'loading' | 'ok' | 'fail'
  messages: Message[]
  messageForm: Message
  isDarkMode: boolean
}

const emptyMessage: Message = {
  title: '',
  subtitle: '',
  body: '',
  username: '',
  timestamp: '',
}

const defaultState: State = {
  state: 'ok',
  messages: [],
  messageForm: emptyMessage,
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
      console.warn(action.message)
      return { ...previousState, state: 'fail' }
    case T_PUSH:
      return { ...previousState, state: 'ok', messages: merge([...previousState.messages, action.message]) } // PERF: possible room for optimization
    case T_PUSH_ERROR:
      console.warn(action.message)
      return { ...previousState, state: 'fail' }
    case T_UPDATE_TIME:
      return { ...previousState, messages: updateTimeAll(previousState.messages) }
    case T_FORM_UPDATE_TITLE:
      return { ...previousState, messageForm: { ...previousState.messageForm, title: action.title } }
    case T_FORM_UPDATE_SUBTITLE:
      return { ...previousState, messageForm: { ...previousState.messageForm, subtitle: action.subtitle } }
    case T_FORM_UPDATE_BODY:
      return { ...previousState, messageForm: { ...previousState.messageForm, body: action.body } }
    case T_FORM_UPDATE_USERNAME:
      return { ...previousState, messageForm: { ...previousState.messageForm, username: action.username } }
    case T_FORM_CLEAR:
      return { ...previousState, messageForm: emptyMessage }
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

const isDev = config.mode === 'dev'
const composeEnhancers = isDev
  ? (window as any).__REDUX_DEVTOOLS_EXTENSION__ && (window as any).__REDUX_DEVTOOLS_EXTENSION__()
  : undefined

export const store: Store<State, Action> = createStore(reducer, composeEnhancers)
export const { dispatch, subscribe } = store
