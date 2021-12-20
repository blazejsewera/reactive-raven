import * as React from 'react'
import { FC } from '../../../type/react'
import { Intl } from '../../../i18l/intl'
import { cx } from '../../../util/classname/cx'
import { IconAndControlsConnected as IconAndControls } from './section/IconAndControls'
import { InputSize, Section } from './section/Section'
import { LabelPosition } from './section/celltype/Label'
import { PaddingY } from './util/PaddingY'
import { dispatch } from '../../../store/store'
import {
  actionFormUpdateBody,
  actionFormUpdateSubtitle,
  actionFormUpdateTitle,
  actionFormUpdateUsername,
} from '../../../store/action/message/form'

export interface MessageFormProps {
  intl: Intl
}

export const MessageForm: FC<MessageFormProps> = ({ intl }) => {
  return (
    <form
      className={cx(
        'rounded-3xl',
        'bg-gray-100',
        'dark:bg-gray-700',
        'w-128',
        'overflow-hidden',
        'shadow-lg',
        'relative',
      )}
    >
      <PaddingY />
      <Section name="title" inputSize={InputSize.TEXT_LARGE} onChange={updateTitle} />
      <Section name="subtitle" onChange={updateSubtitle} />
      <Section name="body" inputSize={InputSize.TEXT_AREA} labelPosition={LabelPosition.TOP} onChange={updateBody} />
      <Section name="username" onChange={updateUsername} />
      <IconAndControls />
      <PaddingY />
    </form>
  )
}

const updateTitle = (title: string) => {
  dispatch(actionFormUpdateTitle(title))
}
const updateSubtitle = (subtitle: string) => {
  dispatch(actionFormUpdateSubtitle(subtitle))
}
const updateBody = (body: string) => {
  dispatch(actionFormUpdateBody(body))
}
const updateUsername = (username: string) => {
  dispatch(actionFormUpdateUsername(username))
}
