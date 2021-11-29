import type { Message } from '../../type/message'

type Period = 's' | 'm' | 'h' | 'D' | 'W' | 'M' | 'Y'
type Since = Record<Period, number>
const periodSequence: Period[] = ['s', 'm', 'h', 'D', 'W', 'M', 'Y']

export const formatSince = (since: Since): string => {
  let result = ''
  periodSequence.reverse().forEach(period => {
    if (since[period] <= 0) return
    result += `${since[period]}${period}, `
  })
  return result.slice(0, -2)
}

export const since = (past: Date, present: Date): Since => {
  const offset = Math.floor((present.getTime() - past.getTime()) / 1000)
  const lengths: Since = { s: 60, m: 60, h: 24, D: 7, W: 4.35, M: 12, Y: 10000 }
  let result: Since = { s: 0, m: 0, h: 0, D: 0, W: 0, M: 0, Y: 0 }

  let offsetLeft = offset

  periodSequence.forEach(period => {
    result[period] = offsetLeft % lengths[period]
    offsetLeft -= result[period]
    offsetLeft = Math.floor(offsetLeft / lengths[period])
  })

  return result
}

const getRelativeTime = (message: Message): string | undefined => {
  const now = new Date()
  const messageTime = new Date(message.timestamp)
  if (messageTime.toString() === 'Invalid Date') return undefined
  return `${formatSince(since(messageTime, now))} ago`
}

export const updateTime = (messages: Message[]): Message[] =>
  messages.map(message => ({ ...message, relativeTime: getRelativeTime(message) }))
