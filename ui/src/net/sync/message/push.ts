import { getApi } from '../../../api/api'
import { ApiMessage } from '../../../api/type/message'
import { Message } from '../../../type/message'

const { pushMessage: pushUrl } = getApi()

const toApiMessage = (message: Message): ApiMessage => ({
  username: message.username,
  timestamp: message.timestamp,
  title: message.title,
  subtitle: message.subtitle,
  body: message.body,
  id: message.id,
})

export const pushMessage = (message: Message) => {
  fetch(pushUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(toApiMessage(message)),
  })
}
