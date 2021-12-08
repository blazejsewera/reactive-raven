import { Message } from '../type/message'
import { fiveSentenceLoremIpsum } from './asset/text/lipsum'
import githubIcon from './asset/icon/github-icon.svg'

const body = `This is a simple test message.

It spans over multiple lines.`

export const full: Message = {
  username: 'Primary',
  title: 'Test title',
  subtitle: '— primary',
  body,
  timestamp: '2 hours ago',
  id: '0',
}

export const fullWithImage: Message = {
  ...full,
  id: '1',
  userImgUri: githubIcon,
}

export const fullWithLoremIpsum: Message = {
  ...full,
  id: '2',
  body: fiveSentenceLoremIpsum,
}

export const partial: Message = {
  username: full.username,
  title: full.title,
  body: full.body,
  timestamp: full.timestamp,
  id: '3',
}

export const minimal: Message = {
  username: full.username,
  title: full.title,
  timestamp: full.timestamp,
  id: '4',
}

export const anotherUser: Message = {
  username: 'Other',
  title: 'Other title',
  subtitle: '— other',
  body,
  timestamp: '1 hour ago',
  id: '5',
}
