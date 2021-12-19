import * as React from 'react'
import { FC } from '../../../../type/react'
import { cx } from '../../../../util/classname/cx'

export interface LabelProps {
  children: string
}

export const Label: FC<LabelProps> = ({ children }) => (
  <div
    className={cx(
      'font-bold',
      'text-left', // mobile
      'w-100',
      'block',
      'sm:text-right', // desktop
      'sm:w-32',
      'sm:inline-block',
      'p-2',
      'bg-gray-300',
    )}
  >
    {children}
  </div>
)
