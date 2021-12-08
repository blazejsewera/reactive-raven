import * as React from 'react'
import { FC } from '../../../../type/react'
import { cx } from '../../../../util/classname/cx'

export interface SubtitleFormProps {
  children: string
}

export const SubtitleForm: FC<SubtitleFormProps> = ({ children }) => (
  <p className={cx('text-xs', 'font-bold', 'text-gray-500', 'dark:text-gray-400')}>{children}</p>
)
