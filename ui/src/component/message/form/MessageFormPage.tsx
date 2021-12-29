import * as React from 'react'
import { Intl } from '../../../i18l/intl'
import { FC } from '../../../type/react'
import { cx } from '../../../util/classname/cx'
import { MessageForm } from './MessageForm'

interface MessageFormPageProps {
  intl: Intl
}

export const MessageFormPage: FC<MessageFormPageProps> = ({ intl }) => {
  const _ = intl.getTranslation

  return (
    <div className={cx('flex', 'w-full')}>
      <div className={cx('w-full', 'sm:w-128', 'mx-auto')}>
        <h1
          className={cx(
            'font-bold',
            'text-3xl',
            'text-gray-600',
            'dark:text-gray-300',
            'mb-5',
            'w-full',
            'whitespace-normal',
          )}
        >
          {_('New message')}
        </h1>
        <MessageForm intl={intl} />
      </div>
    </div>
  )
}
