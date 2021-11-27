import * as React from 'react'
import type { Intl } from '../../../i18l/intl'
import type { Message } from '../../../type/message'
import type { FC } from '../../../type/react'
import { byUsername } from '../../../util/message/categorizer'
import { MessageContainer } from '../container/MessageContainer'

export interface MessageBoardProps {
  messages: Message[]
  intl: Intl
}

export const MessageBoard: FC<MessageBoardProps> = ({ messages, intl }) => {
  const categorized = byUsername(messages)
  const usernames = Object.keys(categorized)
  const containers = usernames.map(username => (
    <MessageContainer
      title={username}
      messages={categorized[username]}
      intl={intl}
      handlers={{ onClearAll: () => {} }}
    />
  ))

  return <div>{containers}</div>
}
