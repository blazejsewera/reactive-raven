import * as React from 'react'
import { FC } from '../../../../type/react'
import { Message } from '../../../../type/message'
import { Intl } from '../../../../i18l/intl'
import { cx } from '../../../../util/classname/cx'
import { MessageCard } from '../../card/MessageCard'

export interface MessageCardListProps {
  messages: Message[]
  intl: Intl
}

export const MessageCardList: FC<MessageCardListProps> = ({ messages, intl }) => (
  <div className={cx('grid grid-cols-1 space-y-5')}>
    {messages.map(message => (
      <MessageCard key={message.id} {...{ message, intl }} />
    ))}
  </div>
)
