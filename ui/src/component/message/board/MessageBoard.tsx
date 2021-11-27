import * as React from 'react'
import type { Intl } from '../../../i18l/intl'
import type { MessageContainerHandlers } from '../../../type/handler'
import type { Message } from '../../../type/message'
import type { FC } from '../../../type/react'
import { cx } from '../../../util/cx'
import { byUsername } from '../../../util/message/categorizer'
import { MessageContainer } from '../container/MessageContainer'

export interface MessageBoardProps {
  messages: Message[]
  containerHandlers: MessageContainerHandlers
  intl: Intl
}

export const MessageBoard: FC<MessageBoardProps> = ({ messages, intl, containerHandlers }) => {
  const categorized = byUsername(messages)
  const usernames = Object.keys(categorized)
  const containers = usernames.map(username => (
    <MessageContainer
      key={username}
      title={username}
      messages={categorized[username]}
      intl={intl}
      handlers={containerHandlers}
      style={cx('inline-block')}
    />
  ))

  return <div className={cx('inline-block space-x-4 whitespace-nowrap')}>{containers}</div>
}
