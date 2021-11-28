import * as React from 'react'
import type { FC } from './type/react'
import { intl } from './i18l/intl'
import { handlers as mockContainerHandlers } from './mock/messageContainer.mock'
import './style/main.css'
import './style/inter.css'
import { MessageBoardConnected as MessageBoard } from './component/message/board/MessageBoard'
import { store } from './store/store'
import { Provider } from 'react-redux'
import { AppCanvasConnected as AppCanvas } from './component/canvas/AppCanvas'
import { setupStreams } from './rx/stream'

export const App: FC = () => {
  React.useEffect(() => {
    setupStreams() // run only once (for mocking)
  }, [])

  return (
    <Provider store={store}>
      <AppCanvas>
        <MessageBoard intl={intl} containerHandlers={mockContainerHandlers} />
      </AppCanvas>
    </Provider>
  )
}
