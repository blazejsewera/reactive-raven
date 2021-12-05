import { getApi } from '../../../api/api'
import { getMessageResponse$ } from '../message.stream'

const { fetchMessages } = getApi()

export const getFetchResponse$ = getMessageResponse$(fetchMessages)
