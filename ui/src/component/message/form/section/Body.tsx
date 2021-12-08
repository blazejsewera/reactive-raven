import * as React from 'react'
import { Intl } from '../../../../i18l/intl'
import { FC } from '../../../../type/react'
import { cx } from '../../../../util/classname/cx'

export interface BodyProps {
  intl: Intl
}

export const Body: FC<BodyProps> = ({ intl }) => {
  return (
    <input
      type="text"
      className={cx('whitespace-pre-line', 'text-sm', 'leading-4', 'my-3', 'text-gray-800', 'dark:text-gray-300')}
    ></input>
  )
}
