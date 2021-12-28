import * as React from 'react'
import { FC } from './type/react'
import { intl } from './i18l/intl'
import { handlers as mockContainerHandlers } from './mock/messageContainer.mock'
import './style/main.css'
import './style/inter.css'
import { MessageBoardConnected as MessageBoard } from './component/message/board/MessageBoard'
import { store } from './store/store'
import { Provider } from 'react-redux'
import { AppCanvasConnected as AppCanvas } from './component/canvas/AppCanvas'
import { setupStreams } from './net/rx/stream'
import { Route, Routes, useLocation } from 'react-router'
import { CLIENT, DASHBOARD } from './route/route'
import { isRoute } from './util/route/route'
import { MessageFormPage } from './component/message/form/MessageFormPage'

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
          <Route path={CLIENT} element={<MessageFormPage intl={intl} />} />
        </Routes>
      </AppCanvas>
    </Provider>
  )
}
