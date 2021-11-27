import * as React from 'react'
import type { FC } from '../../../type/react'
import type { Message } from '../../../type/message'
import type { Intl } from '../../../i18l/intl'
import { cx } from '../../../util/cx'
import { Header } from './section/Header'
import { MessageCardList } from './section/MessageCardList'
import type { MessageContainerHandlers } from '../../../type/handler'

export interface MessageContainerProps {
  title: string
  messages: Message[]
  handlers: MessageContainerHandlers
  intl: Intl
  style?: string
}

export const MessageContainer: FC<MessageContainerProps> = ({ title, messages, handlers, intl, style }) => {
  const { onClear } = handlers
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
      <Header title={title} onClear={onClear} />
      <MessageCardList {...{ messages, intl }} />
    </div>
  )
}
