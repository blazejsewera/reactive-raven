import * as React from 'react'
import { create as render } from 'react-test-renderer'
import { Message } from '../../../../type/message'
import { intlMock } from '../../../../mock/intl.mock'
import { MessageContainer } from '../MessageContainer'
import { full, minimal } from '../../../../mock/message.mock'
import { MessageContainerHandlers } from '../../../../type/handler'

describe('MessageContainer component', () => {
  // given
  const intl = intlMock
  const handlers: MessageContainerHandlers = { onClear: jest.fn() }

  const testMessageContainer = (messages: Message[]) => {
    const tree = render(<MessageContainer {...{ title: 'TestTitle', messages, intl, handlers }} />).toJSON()
    expect(tree).toMatchSnapshot()
  }

  it('renders correctly with no messages', () => {
    testMessageContainer([])
  })
  it('renders correctly with one message', () => {
    testMessageContainer([full])
  })
  it('renders correctly with multiple messages', () => {
    testMessageContainer([full, minimal])
  })
})
