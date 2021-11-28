import { config } from '../config/reactiveRaven'
import { dev } from './dev'
import { prod } from './prod'

export type Api = {
  fetchMessages: string
}

export const getApi = () => (config.mode == 'dev' ? dev : prod)
