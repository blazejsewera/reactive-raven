import * as React from 'react'
import type { FC } from './type/react'
import { intl } from './i18l/intl'
import { cx } from './util/cx'
import { full, fullWithImage, minimal, partial, anotherUser } from './mock/message.mock'
import { handlers as mockContainerHandlers } from './mock/messageContainer.mock'
import './style/main.css'
import './style/inter.css'
import { MessageBoardConnected as MessageBoard } from './component/message/board/MessageBoard'
import { dispatch, store } from './store/store'
import { T_SUCCESS } from './store/action/message/fetch'
import { Provider } from 'react-redux'
import { AppCanvasConnected as AppCanvas } from './component/canvas/AppCanvas'

const _propagateState = () => {
  const messages = [full, fullWithImage, partial, minimal, anotherUser]

  dispatch({ type: T_SUCCESS, messages })
}

export const App: FC = () => {
  React.useEffect(() => {
    _propagateState() // run only once (for mocking)
  }, [])

  return (
    <Provider store={store}>
      <AppCanvas>
        <MessageBoard intl={intl} containerHandlers={mockContainerHandlers} />
      </AppCanvas>
    </Provider>
  )
}
