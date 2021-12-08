import * as React from 'react'
import { FC } from '../../../type/react'
import { Message } from '../../../type/message'
import { Intl } from '../../../i18l/intl'
import { cx } from '../../../util/classname/cx'
import { Header } from './section/Header'
import { Body } from './section/Body'
import { Footer } from './section/Footer'

export interface MessageCardProps {
  message: Message
  intl: Intl
}

export const MessageCard: FC<MessageCardProps> = ({ message, intl }) => {
  const { username, userImgUri: appImgUri, title, subtitle, body, timestamp, relativeTime } = message

  return (
    <div className={cx('rounded-3xl', 'bg-white', 'dark:bg-gray-800', 'w-80', 'p-5', 'shadow-lg', 'relative')}>
      <Header {...{ username, appImgUri, title, subtitle }} />
      <Body intl={intl}>{body ?? ''}</Body>
      <Footer {...{ username, timestamp, relativeTime }} />
    </div>
  )
}
