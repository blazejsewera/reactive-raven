import * as React from 'react'
import { FC } from '../../../../type/react'
import { Intl } from '../../../../i18l/intl'
import { cx } from '../../../../util/classname/cx'

export interface CardFunctionTitleProps {
  intl: Intl
}

export const CardFunctionTitle: FC<CardFunctionTitleProps> = ({ intl }) => {
  const _ = intl.getTranslation

  return (
    <p className={cx('text-lg', 'font-bold', 'mb-0', 'leading-5', 'text-gray-800', 'dark:text-gray-300')}>
      {_('New message')}
    </p>
  )
}
