import * as React from 'react'
import { create as render } from 'react-test-renderer'
import { intlMock } from '../../../../mock/intl.mock'
import { anotherUser, full, fullWithLoremIpsum } from '../../../../mock/message.mock'
import { handlers as mockContainerHandlers } from '../../../../mock/messageContainer.mock'
import { MessageBoard } from '../MessageBoard'

describe('MessageBoard component', () => {
  it('renders correctly with messages from 2 users', () => {
    // given
    const intl = intlMock
    const messages = [full, fullWithLoremIpsum, anotherUser]
    const containerHandlers = mockContainerHandlers

    // when
    const tree = render(<MessageBoard {...{ messages, intl, containerHandlers }} />).toJSON()

    // then
    expect(tree).toMatchSnapshot()
  })
})
