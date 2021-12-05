import * as React from 'react'
import { Link } from 'react-router-dom'
import { Columns, Edit } from '../../external/icon'
import { CLIENT, DASHBOARD } from '../../route/route'
import type { FC } from '../../type/react'
import { cx } from '../../util/classname/cx'

export interface ToggleClientViewButtonProps {
  isClient: boolean
}

export const ToggleClientViewButton: FC<ToggleClientViewButtonProps> = ({ isClient }) => {
  const ToggleIcon = isClient ? Columns : Edit
  const destination = isClient ? DASHBOARD : CLIENT

  return (
    <button>
      <Link to={destination}>
        <ToggleIcon className={cx('stroke-current', 'text-gray-500', 'dark:text-gray-300', 'w-5', 'h-5')} />
      </Link>
    </button>
  )
}
