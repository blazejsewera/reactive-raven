import type { Message } from '../../type/message'

type DuplicateDetector = (messages: Message[], current: Message) => boolean

const isDuplicateByIdInArray: DuplicateDetector = (messages, current) => {
  if (!current.id) return false
  return messages.map(m => m.id ?? '').includes(current.id)
}

type MessageMerger = (messages: Message[]) => Message[]

/**
 * Merges (deduplicates) message array based on message id.
 * If an id is not present in the message, it is not deduplicated.
 *
 * @example
 * const msgs = [
 *   { username: 'a', timestamp: 'a', title: 'a', id: '1' },
 *   { username: 'b', timestamp: 'b', title: 'b', id: '2' },
 *   { username: 'a', timestamp: 'a', title: 'a', id: '1' },
 * ]
 * const merged = merge(msgs)
 * // will merge them into a 2-element array containing 0th and 1st element of msgs
 * // id: '1' is deduplicated
 */
export const merge: MessageMerger = messages =>
  messages.reduce(
    (merged: Message[], current) => (isDuplicateByIdInArray(merged, current) ? merged : [...merged, current]),
    [],
  )
