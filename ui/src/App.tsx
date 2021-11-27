import * as React from 'react'
import type { FC } from './type/react'
import { intl } from './i18l/intl'
import { cx } from './util/cx'
import { full, fullWithImage, minimal, partial, anotherUser } from './mock/message.mock'
import { handlers as mockContainerHandlers } from './mock/messageContainer.mock'
import './style/main.css'
import './style/inter.css'
import { MessageContainer } from './component/message/container/MessageContainer'
import { ToggleDarkModeButton } from './component/button/ToggleDarkModeButton'
import { MessageBoard } from './component/message/board/MessageBoard'

export const App: FC = () => {
  const messages = [full, fullWithImage, partial, minimal, anotherUser]
  const [isDarkMode, setDarkMode] = React.useState(false)
  const toggleDarkMode = () => setDarkMode(!isDarkMode)
  return (
    <div className={cx('App', 'min-h-screen', isDarkMode ? 'dark' : '')}>
      <div className={cx('bg-gray-200', 'dark:bg-gray-600', 'min-h-screen', 'py-12', 'px-8', 'min-w-max')}>
        <MessageBoard messages={messages} intl={intl} />
      </div>
      <div className={cx('fixed', 'top-5', 'right-5')}>
        <ToggleDarkModeButton onClick={toggleDarkMode} isDarkMode={isDarkMode} />
      </div>
    </div>
  )
}
