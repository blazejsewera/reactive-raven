import * as React from 'react'
import type { FC } from '../../../../../type/react'
import { CheckSquare } from '../../../../../external/icon'
import { cx } from '../../../../../util/cx'
import { OnMessageContainerClearAll } from '../../../../../type/handler'

export interface ClearAllButtonProps {
  onClick: OnMessageContainerClearAll
}

export const ClearAllButton: FC<ClearAllButtonProps> = ({ onClick }) => (
  <button type="button" className={cx('inline ml-auto my-auto')} onClick={onClick}>
    <CheckSquare className={cx('stroke-current', 'text-gray-500', 'dark:text-gray-300', 'w-5', 'h-5')} />
  </button>
)
