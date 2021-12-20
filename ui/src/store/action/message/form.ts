export const T_FORM_UPDATE_TITLE = 'message/form/update/title'
export type FormUpdateTitle = {
  type: typeof T_FORM_UPDATE_TITLE
  title: string
}
export const actionFormUpdateTitle = (title: string): FormUpdateTitle => ({ type: T_FORM_UPDATE_TITLE, title })

export const T_FORM_UPDATE_SUBTITLE = 'message/form/update/subtitle'
export type FormUpdateSubtitle = {
  type: typeof T_FORM_UPDATE_SUBTITLE
  subtitle: string
}
export const actionFormUpdateSubtitle = (subtitle: string): FormUpdateSubtitle => ({
  type: T_FORM_UPDATE_SUBTITLE,
  subtitle,
})

export const T_FORM_UPDATE_BODY = 'message/form/update/body'
export type FormUpdateBody = {
  type: typeof T_FORM_UPDATE_BODY
  body: string
}
export const actionFormUpdateBody = (body: string): FormUpdateBody => ({ type: T_FORM_UPDATE_BODY, body })

export const T_FORM_UPDATE_USERNAME = 'message/form/update/username'
export type FormUpdateUsername = {
  type: typeof T_FORM_UPDATE_USERNAME
  username: string
}
export const actionFormUpdateUsername = (username: string): FormUpdateUsername => ({
  type: T_FORM_UPDATE_USERNAME,
  username,
})
