import * as React from 'react'
import { FC } from '../../../../type/react'
import { cx } from '../../../../util/classname/cx'

export interface MetaFormProps {}

export const MetaForm: FC<MetaFormProps> = ({}) => {
  const textClasses = ['text-xs', 'font-bold', 'text-gray-500', 'dark:text-gray-400']
  return (
    <div className="inline-block">
      <p className={cx(...textClasses)}>— by {}</p>
    </div>
  )
}
