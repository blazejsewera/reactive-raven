export const config: Config = {
  mode: 'dev',
  mockAll: true,
}

export type Config = {
  mode: 'prod' | 'dev'
  mockAll: boolean
}
