import * as React from 'react'
import { FC } from '../../../../type/react'
import { cx } from '../../../../util/classname/cx'

export interface TextAreaProps {}

export const TextArea: FC<TextAreaProps> = ({}) => (
  <div
    className={cx(
      'font-bold',
      'text-left', // mobile
      'w-100',
      'block',
      'sm:text-right', // desktop
      'sm:inline-block',
      'p-2',
      'bg-gray-100',
    )}
  >
    <input></input>
  </div>
)
