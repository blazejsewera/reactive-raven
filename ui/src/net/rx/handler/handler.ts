import { Observable } from '../../../external/rxjs'
import { Action } from '../../../store/action/action'

export type Handler = (url: string) => Observable<Action>
