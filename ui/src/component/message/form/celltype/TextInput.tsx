import * as React from 'react'
import { FC } from '../../../../type/react'
import { cx } from '../../../../util/classname/cx'

export interface TextInputProps {
  size: 'large' | 'small'
}

export const TextInput: FC<TextInputProps> = ({ size }) => (
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
