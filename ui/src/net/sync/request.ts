import { config } from '../../config/reactiveRaven'
import { pushMessage as pushMessageHandler } from './message/push'
import { pushMessage as mockPushMessageHandler } from '../../mock/net/sync/message/push.mock'

const deps = config.mockAll
  ? {
      pushMessage: mockPushMessageHandler,
    }
  : {
      pushMessage: pushMessageHandler,
    }

export const pushMessage = deps.pushMessage
