import { getApi } from '../../../../api/api'
import { getMessageResponse$ } from '../message.stream'

const { messagesWs: receivePushedMessages } = getApi()

export const getPushedResponse$ = getMessageResponse$(receivePushedMessages)
