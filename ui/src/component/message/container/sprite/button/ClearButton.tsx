import * as React from 'react'
import type { FC } from '../../../../../type/react'
import { Trash } from '../../../../../external/icon'
import { cx } from '../../../../../util/cx'
import { OnMessageContainerClear } from '../../../../../type/handler'

export interface ClearButtonProps {
  onClick: OnMessageContainerClear
}

export const ClearButton: FC<ClearButtonProps> = ({ onClick }) => (
  <button type="button" className={cx('inline ml-auto my-auto')} onClick={onClick}>
    <Trash className={cx('stroke-current', 'text-gray-500', 'dark:text-gray-300', 'w-5', 'h-5')} />
  </button>
)
