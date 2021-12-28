import { Api } from './api'

export const dev: Api = {
  fetchMessages: 'http://localhost:8080/messages',
  pushMessage: 'http://localhost:8080/push',
  messagesWs: 'ws://localhost:8080/ws',
}
