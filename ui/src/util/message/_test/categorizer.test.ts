import type { Message } from '../../../type/message'
import { byUsername } from '../categorizer'

describe('tests for message categorizer', () => {
  // given
  const messages: Message[] = [
    { username: 'a', timestamp: '2021-11-27T20:00:00.000Z', title: 'a' },
    { username: 'b', timestamp: '2021-11-27T20:01:00.000Z', title: 'b' },
    { username: 'a', timestamp: '2021-11-27T20:02:00.000Z', title: 'c' },
    { username: 'd', timestamp: '2021-11-27T20:03:00.000Z', title: 'd' },
    { username: 'd', timestamp: '2021-11-27T20:04:00.000Z', title: 'e' },
  ]

  const categorizedByUsername: Record<string, Message[]> = {
    a: [
      { username: 'a', timestamp: '2021-11-27T20:00:00.000Z', title: 'a' },
      { username: 'a', timestamp: '2021-11-27T20:02:00.000Z', title: 'c' },
    ],
    b: [{ username: 'b', timestamp: '2021-11-27T20:01:00.000Z', title: 'b' }],
    d: [
      { username: 'd', timestamp: '2021-11-27T20:03:00.000Z', title: 'd' },
      { username: 'd', timestamp: '2021-11-27T20:04:00.000Z', title: 'e' },
    ],
  }

  it('correctly categorizes by username', () => {
    // when
    const categorized = byUsername(messages)

    // then
    expect(categorized).toEqual(categorizedByUsername)
  })
})
