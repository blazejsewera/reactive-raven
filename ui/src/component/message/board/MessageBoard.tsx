import * as React from 'react'
import { connect } from 'react-redux'
import { Intl } from '../../../i18l/intl'
import { State } from '../../../store/store'
import { MessageContainerHandlers } from '../../../type/handler'
import { Message } from '../../../type/message'
import { FC } from '../../../type/react'
import { cx } from '../../../util/classname/cx'
import { byUsername } from '../../../util/message/categorizer'
import { MessageContainer } from '../container/MessageContainer'

export interface MessageBoardProps {
  messages: Message[]
  containerHandlers: MessageContainerHandlers
  intl: Intl
}

export const MessageBoard: FC<MessageBoardProps> = ({ messages, intl, containerHandlers }) => {
  const categorized = byUsername(messages) // PERF: possible room for optimization
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

type StateMapper = (state: State) => Pick<MessageBoardProps, 'messages'>
const mapState: StateMapper = state => ({
  messages: state.messages,
})

export const MessageBoardConnected = connect(mapState)(MessageBoard)
