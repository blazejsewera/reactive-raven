import { interval, map } from '../../external/rxjs'
import { actionUpdateTime } from '../../store/action/message/time'

const RELATIVE_TIME_UPDATE_PERIOD = 5000

const periodic$ = interval(RELATIVE_TIME_UPDATE_PERIOD)

export const getRelativeTimeUpdate$ = () => periodic$.pipe(map(() => actionUpdateTime()))
