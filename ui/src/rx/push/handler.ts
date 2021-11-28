import type { Observable } from 'rxjs'
import { webSocket } from 'rxjs/webSocket'
import type { Action } from '../../store/action/action'

export type PushHandler = (pushUrl: string) => Observable<Action>
export const handler: PushHandler = pushUrl => webSocket(pushUrl) // TODO: map ws to Action
