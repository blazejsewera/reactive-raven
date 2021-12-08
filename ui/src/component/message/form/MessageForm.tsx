import * as React from 'react'
import { FC } from '../../../type/react'
import { Message } from '../../../type/message'
import { Intl } from '../../../i18l/intl'
import { cx } from '../../../util/classname/cx'
import { Header } from './section/Header'
import { Body } from './section/Body'
import { Footer } from './section/Footer'

export interface MessageFormProps {
  intl: Intl
}

export const MessageForm: FC<MessageFormProps> = ({ intl }) => {
  return (
    <div className={cx('rounded-3xl', 'bg-white', 'dark:bg-gray-800', 'w-80', 'p-5', 'shadow-lg', 'relative')}>
      <Header intl={intl} />
      <Body intl={intl}></Body>
      <Footer />
    </div>
  )
}
