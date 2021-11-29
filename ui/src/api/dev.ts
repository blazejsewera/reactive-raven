import type { Api } from './api'

export const dev: Api = {
  fetchMessages: 'http://localhost:8080/messages',
  pushMessages: 'ws://localhost:8080/ws',
}
