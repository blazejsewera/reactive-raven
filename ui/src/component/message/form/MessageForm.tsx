import * as React from 'react'
import { FC } from '../../../type/react'
import { Intl } from '../../../i18l/intl'
import { cx } from '../../../util/classname/cx'
import { Body } from './section/Body'
import { Title } from './section/Title'
import { Subtitle } from './section/Subtitle'
import { Username } from './section/Username'
import { IconAndControls } from './section/IconAndControls'
import { Section } from './section/Section'

export interface MessageFormProps {
  intl: Intl
}

export const MessageForm: FC<MessageFormProps> = ({ intl }) => {
  return (
    <form
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
      <Section name="Title" />
      <Body intl={intl} />
      <Username />
      <IconAndControls />
    </form>
  )
}
