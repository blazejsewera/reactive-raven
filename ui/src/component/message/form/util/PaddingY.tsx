import * as React from 'react'
import { FC } from '../../../../type/react'
import { cx } from '../../../../util/classname/cx'

export const PaddingY: FC = () => (
  <div className={cx('hidden', 'sm:flex', 'flex-row', 'w-full', 'h-2')}>
    <div className={cx('basis-1/4', 'bg-gray-300', 'dark:bg-gray-800')}></div>
    <div className={cx('basis-3/4', 'bg-gray-100', 'dark:bg-gray-700')}></div>
  </div>
)
