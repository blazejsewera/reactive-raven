import * as React from 'react'
import { FC } from '../../../../../type/react'
import { Trash } from '../../../../../external/icon'
import { cx } from '../../../../../util/classname/cx'
import { OnMessageContainerClear } from '../../../../../type/handler'

export interface ClearButtonProps {
  onClick: OnMessageContainerClear
  containerTitle: string
}

export const ClearButton: FC<ClearButtonProps> = ({ onClick, containerTitle }) => (
  <button type="button" className={cx('inline ml-auto my-auto')} onClick={() => onClick(containerTitle)}>
    <Trash className={cx('stroke-current', 'text-gray-500', 'dark:text-gray-300', 'w-5', 'h-5')} />
  </button>
)
