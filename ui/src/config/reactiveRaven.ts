export const config: Config = {
  mode: 'dev',
  mockAll: false,
}

export type Config = {
  mode: 'prod' | 'dev'
  mockAll: boolean
}
