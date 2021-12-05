import * as React from 'react'
import type { FC } from '../../../../type/react'
import { cx } from '../../../../util/classname/cx'

export interface MetaProps {
  username: string
  timestamp: string
  relativeTime?: string
}

export const Meta: FC<MetaProps> = ({ username, timestamp, relativeTime }) => {
  const textClasses = ['text-xs', 'font-bold', 'text-gray-500', 'dark:text-gray-400']
  return (
    <div className="inline-block">
      <p className={cx(...textClasses)}>— by {username}</p>
      <p className={cx(...textClasses)}>{relativeTime ?? timestamp}</p>
    </div>
  )
}
