import * as React from 'react'
import { create as render } from 'react-test-renderer'
import { MessageForm } from '../MessageForm'
import { intlMock } from '../../../../mock/intl.mock'
import { Provider } from 'react-redux'
import { store } from '../../../../store/store'

describe('MessageForm component', () => {
  it('renders correctly', () => {
    // given
    const intl = intlMock
    const tree = render(
      <Provider store={store}>
        <MessageForm intl={intl} />
      </Provider>,
    ).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
