import * as React from 'react'
import { FC } from '../../../type/react'
import { Intl } from '../../../i18l/intl'
import { cx } from '../../../util/classname/cx'
import { Body } from './section/Body'
import { Title } from './section/Title'
import { Subtitle } from './section/Subtitle'
import { Username } from './section/Username'
import { IconAndControls } from './section/IconAndControls'

export interface MessageFormProps {
  intl: Intl
}

export const MessageForm: FC<MessageFormProps> = ({ intl }) => {
  return (
    <div
      className={cx(
        'rounded-3xl',
        'bg-gray-100',
        'dark:bg-gray-700',
        'w-128',
        'overflow-hidden',
        'shadow-lg',
        'relative',
      )}
    >
      <Title />
      <Subtitle />
      <Body intl={intl} />
      <Username />
      <IconAndControls />
    </div>
  )
}
