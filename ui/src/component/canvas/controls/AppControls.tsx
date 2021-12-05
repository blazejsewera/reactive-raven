import * as React from 'react'
import type { FC } from '../../../type/react'
import { cx } from '../../../util/classname/cx'
import { ToggleClientViewButton } from '../../button/ToggleClientViewButton'
import { ToggleDarkModeButton } from '../../button/ToggleDarkModeButton'

export interface AppControlsProps {
  isDarkMode: boolean
  onToggleDarkMode: () => void
  isClient: boolean
}

export const AppControls: FC<AppControlsProps> = ({ isDarkMode, onToggleDarkMode, isClient }) => (
  <div
    className={cx(
      'fixed',
      'top-5',
      'right-5',
      'grid',
      'gap-3',
      'grid-cols-1',
      'p-3',
      'bg-gray-100',
      'dark:bg-gray-800',
      'rounded-lg',
      'shadow-lg',
    )}
  >
    <ToggleDarkModeButton onClick={onToggleDarkMode} isDarkMode={isDarkMode} />
    <ToggleClientViewButton isClient={isClient} />
  </div>
)
