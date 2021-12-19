import * as React from 'react'
import { FC } from '../../../../type/react'
import { cx } from '../../../../util/classname/cx'

export interface LabelProps {
  children: string
}

export const Label: FC<LabelProps> = ({ children }) => (
  <label
    className={cx(
      'font-bold',
      'text-left', // mobile
      'w-full',
      'block',
      'sm:text-right', // desktop
      'sm:w-1/4',
      'sm:h-full',
      'sm:inline-block',
      'p-2',
      'bg-gray-300',
    )}
  >
    {children}
  </label>
)
