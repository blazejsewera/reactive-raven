import { Message } from '../../type/message'

type MessageCategorizer = (messages: Message[]) => Record<string, Message[]>

/**
 * Categorizes messages by username, and puts them in an object, where
 * username is the key, and user's messages are the values.
 *
 * @example
 * const msgs = [
 *   { username: 'a', timestamp: 'a', title: 'a' },
 *   { username: 'a', timestamp: 'b', title: 'b' },
 *   { username: 'b', timestamp: 'b', title: 'b' },
 * ]
 * const categorized = byUsername(msgs)
 * // will group them into { a: [...(2 msgs)], b: [...(1 msg)] }
 */
export const byUsername: MessageCategorizer = messages =>
  messages.reduce(
    (categorized: Record<string, Message[]>, curr) => ({
      ...categorized,
      [curr.username]: [...(categorized[curr.username] ?? []), curr],
    }),
    {},
  )
