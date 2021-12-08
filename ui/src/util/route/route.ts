import { Location } from '../../route/route'

const trimSlashes = (s: string): string => s.replace(/^\//g, '').replace(/\/$/g, '')

export const isRoute = (tested: Location, current: string): boolean => trimSlashes(tested) === trimSlashes(current)
