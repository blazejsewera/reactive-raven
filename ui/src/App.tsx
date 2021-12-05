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
import { Route, Routes, useLocation } from 'react-router'
import { MessageCard } from './component/message/card/MessageCard'
import { full } from './mock/message.mock'
import { CLIENT, DASHBOARD } from './route/route'
import { isRoute } from './util/route/route'

export const App: FC = () => {
  React.useEffect(() => {
    setupStreams() // run only once (for mocking)
  }, [])

  const { pathname } = useLocation()
  const isClient = isRoute(CLIENT, pathname)

  return (
    <Provider store={store}>
      <AppCanvas isClient={isClient}>
        <Routes>
          <Route path={DASHBOARD} element={<MessageBoard intl={intl} containerHandlers={mockContainerHandlers} />} />
          <Route path={CLIENT} element={<MessageCard intl={intl} message={full} />} />
        </Routes>
      </AppCanvas>
    </Provider>
  )
}
