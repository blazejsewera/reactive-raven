import { Api } from './api'

const RR_PROD_BACKEND = 'rr.blazejsewera.pl/api'

export const prod: Api = {
  fetchMessages: `http://${RR_PROD_BACKEND}/messages`,
  pushMessage: `http://${RR_PROD_BACKEND}/push`,
  messagesWs: `ws://${RR_PROD_BACKEND}/ws`,
}
