import { Api } from './api'

const currentAddress = window.location.host ?? 'locathost:3000'

export const dev: Api = {
  fetchMessages: '/api/messages',
  pushMessage: '/api/push',
  messagesWs: `ws://${currentAddress}/api/ws`,
}
