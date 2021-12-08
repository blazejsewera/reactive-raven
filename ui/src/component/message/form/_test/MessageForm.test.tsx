import * as React from 'react'
import { create as render } from 'react-test-renderer'
import { Message } from '../../../../type/message'
import { MessageForm } from '../MessageForm'
import { intlMock } from '../../../../mock/intl.mock'
import { full, fullWithImage, fullWithLoremIpsum, minimal, partial } from '../../../../mock/message.mock'

describe('MessageForm component', () => {
  // given
  const intl = intlMock
  const testMessageForm = (message: Message) => {
    const tree = render(<MessageForm {...{ message, intl }} />).toJSON()
    expect(tree).toMatchSnapshot()
  }

  it('renders correctly with full message', () => {
    testMessageForm(full)
  })
  it('renders correctly with full with image message', () => {
    testMessageForm(fullWithImage)
  })
  it('renders correctly with full with very long text message', () => {
    testMessageForm(fullWithLoremIpsum)
  })
  it('renders correctly with partial message', () => {
    testMessageForm(partial)
  })
  it('renders correctly with minimal message', () => {
    testMessageForm(minimal)
  })
})
