import * as React from 'react'
import type { FC } from '../../type/react'
import type { State } from '../../store/store'
import { Moon, Sun } from '../../external/icon'
import { cx } from '../../util/classname/cx'
import { connect } from 'react-redux'

export interface ToggleDarkModeButtonProps {
  isDarkMode: boolean
  onClick: () => void
}

export const ToggleDarkModeButton: FC<ToggleDarkModeButtonProps> = ({ isDarkMode, onClick }) => {
  const ToggleIcon = isDarkMode ? Sun : Moon
  return (
    <button onClick={onClick}>
      <ToggleIcon className={cx('stroke-current', 'text-gray-500', 'dark:text-gray-300', 'w-5', 'h-5')} />
    </button>
  )
}

type StateMapper = (state: State) => Pick<ToggleDarkModeButtonProps, 'isDarkMode'>
const mapState: StateMapper = state => ({ isDarkMode: state.isDarkMode })

export const ToggleDarkModeButtonConnected = connect(mapState)(ToggleDarkModeButton)
