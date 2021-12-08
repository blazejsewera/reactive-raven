import * as React from 'react'
import { FC } from '../../../../type/react'
import { cx } from '../../../../util/classname/cx'
import { TITLE_INPUT_ID } from '../const/ids'

export interface TitleFormProps {
  children?: string
}

export const TitleForm: FC<TitleFormProps> = ({ children }) => (
  <p className={cx('text-lg', 'font-bold', 'mb-0', 'leading-5', 'text-gray-800', 'dark:text-gray-300')}>
    <label htmlFor={TITLE_INPUT_ID}>Title</label>
    <input id={TITLE_INPUT_ID} type="text" className={cx('border rounded-md')}>
      {children}
    </input>
  </p>
)
