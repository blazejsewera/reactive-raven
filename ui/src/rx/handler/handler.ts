import type { Observable } from '../../external/rxjs'
import type { Action } from '../../store/action/action'

export type Handler = (url: string) => Observable<Action>
