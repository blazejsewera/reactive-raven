import * as React from 'react'
import { FC } from '../../../type/react'
import { Message } from '../../../type/message'
import { Intl } from '../../../i18l/intl'
import { cx } from '../../../util/classname/cx'
import { Header } from './section/Header'
import { MessageCardList } from './section/MessageCardList'
import { MessageContainerHandlers } from '../../../type/handler'

export interface MessageContainerProps {
  title: string
  messages: Message[]
  handlers: MessageContainerHandlers
  intl: Intl
  style?: string
}

export const MessageContainer: FC<MessageContainerProps> = ({ title, messages, intl, style }) => {
  return (
    <div
      className={cx(
        'bg-gray-100',
        'dark:bg-gray-700',
        'inline-block',
        'p-5',
        'pb-6',
        'rounded-3xl',
        'shadow-xl',
        style ?? '',
      )}
    >
      <Header title={title} />
      <MessageCardList {...{ messages, intl }} />
    </div>
  )
}
