import * as React from 'react'
import { Trash } from '../../../../../../external/icon'
import { FC } from '../../../../../../type/react'
import { cx } from '../../../../../../util/classname/cx'

export interface ClearProps {
  onClear: () => void
  className?: string
}

export const Clear: FC<ClearProps> = ({ onClear, className }) => (
  <button type="button" className={className} onClick={onClear}>
    <Trash className={cx('text-gray-500', 'dark:text-gray-400')} />
  </button>
)
