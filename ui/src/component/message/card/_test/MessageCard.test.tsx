import * as React from 'react'
import { create as render } from 'react-test-renderer'
import type { Message } from '../../../../type/message'
import { MessageCard } from '../MessageCard'
import { intlMock } from '../../../../mock/intl.mock'
import { full, fullWithImage, fullWithLoremIpsum, minimal, partial } from '../../../../mock/message.mock'

describe('MessageCard component', () => {
  // given
  const intl = intlMock
  const testMessageCard = (message: Message) => {
    const tree = render(<MessageCard {...{ message, intl }} />).toJSON()
    expect(tree).toMatchSnapshot()
  }

  it('renders correctly with full message', () => {
    testMessageCard(full)
  })
  it('renders correctly with full with image message', () => {
    testMessageCard(fullWithImage)
  })
  it('renders correctly with full with very long text message', () => {
    testMessageCard(fullWithLoremIpsum)
  })
  it('renders correctly with partial message', () => {
    testMessageCard(partial)
  })
  it('renders correctly with minimal message', () => {
    testMessageCard(minimal)
  })
})
