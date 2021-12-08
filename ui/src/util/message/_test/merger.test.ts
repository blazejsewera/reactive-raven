import { Message } from '../../../type/message'
import { merge } from '../merger'

describe('message merger to reduce duplication', () => {
  it('deduplicates messages', () => {
    // given
    const messages: Message[] = [
      { username: 'a', timestamp: 'a', title: 'a', id: '1' },
      { username: 'b', timestamp: 'b', title: 'b', id: '2' },
      { username: 'a', timestamp: 'a', title: 'a', id: '1' },
      { username: 'a', timestamp: 'a', title: 'a', id: '1' },
    ]
    const merged: Message[] = [
      { username: 'a', timestamp: 'a', title: 'a', id: '1' },
      { username: 'b', timestamp: 'b', title: 'b', id: '2' },
    ]

    // when
    const tested = merge(messages)

    // then
    expect(tested.length).toEqual(merged.length)
    expect(tested).toEqual(merged)
  })
})
