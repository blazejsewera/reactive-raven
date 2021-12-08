import * as React from 'react'
import { FC } from '../../../../type/react'
import { cx } from '../../../../util/classname/cx'

export interface TitleFormProps {
  children?: string
}

export const TitleForm: FC<TitleFormProps> = ({ children }) => (
  <p className={cx('text-lg', 'font-bold', 'mb-0', 'leading-5', 'text-gray-800', 'dark:text-gray-300')}>
    <input type="text">{children}</input>
  </p>
)
