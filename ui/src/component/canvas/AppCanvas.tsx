import * as React from 'react'
import { connect } from 'react-redux'
import { dispatch } from '../../store/store'
import { actionDarkmodeOn, actionDarkmodeOff, actionDarkmodeToggle } from '../../store/action/action'
import type { State } from '../../store/store'
import type { FC } from '../../type/react'
import { cx } from '../../util/cx'
import { ToggleDarkModeButton } from '../button/ToggleDarkModeButton'

export interface AppCanvasProps {
  checkForDarkModePreference: () => void
  isDarkMode: boolean
  toggleDarkMode: () => void
  children?: React.ReactNode
}

/**
 * Default application canvas with dark mode switch button
 */
export const AppCanvas: FC<AppCanvasProps> = ({ checkForDarkModePreference, isDarkMode, toggleDarkMode, children }) => {
  React.useEffect(() => {
    checkForDarkModePreference()
  }, [])

  return (
    <div className={cx('App', 'min-h-screen', isDarkMode ? 'dark' : '')}>
      <div className={cx('bg-gray-200', 'dark:bg-gray-600', 'min-h-screen', 'py-12', 'px-8', 'min-w-max')}>
        {children}
      </div>
      <div className={cx('fixed', 'top-5', 'right-5')}>
        <ToggleDarkModeButton onClick={toggleDarkMode} isDarkMode={isDarkMode} />
      </div>
    </div>
  )
}

const toggleDarkModeConnected = () => {
  dispatch(actionDarkmodeToggle())
}

const checkForDarkModePreferenceConnected = () => {
  window.matchMedia('(prefers-color-scheme: dark)').matches
    ? dispatch(actionDarkmodeOn())
    : dispatch(actionDarkmodeOff())
}

type StateMapper = (
  state: State,
) => Pick<AppCanvasProps, 'isDarkMode' | 'toggleDarkMode' | 'checkForDarkModePreference'>
const mapState: StateMapper = state => ({
  isDarkMode: state.isDarkMode,
  toggleDarkMode: toggleDarkModeConnected,
  checkForDarkModePreference: checkForDarkModePreferenceConnected,
})

export const AppCanvasConnected = connect(mapState)(AppCanvas)
