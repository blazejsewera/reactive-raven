import * as React from 'react'
import type { FC } from '../../../type/react'
import type { Message } from '../../../type/message'
import type { Intl } from '../../../i18l/intl'
import { cx } from '../../../util/cx'
import { Header } from './section/Header'
import { Body } from './section/Body'
import { Footer } from './section/Footer'
import { Indicator } from './sprite/icon/Indicator'

export interface MessageCardProps {
  message: Message
  intl: Intl
}

export const MessageCard: FC<MessageCardProps> = ({ message, intl }) => {
  const { username: appName, userImgUri: appImgUri, title, subtitle, body, timestamp } = message

  return (
    <div className={cx('rounded-3xl', 'bg-white', 'dark:bg-gray-800', 'w-80', 'p-5', 'shadow-lg', 'relative')}>
      <Header {...{ appName, appImgUri, title, subtitle }} />
      <Indicator />
      <Body intl={intl}>{body ?? ''}</Body>
      <Footer {...{ appName, timestamp }} />
    </div>
  )
}
