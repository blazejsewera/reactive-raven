import * as React from 'react'
import { FC } from '../../../type/react'
import { Intl } from '../../../i18l/intl'
import { cx } from '../../../util/classname/cx'
import { IconAndControlsConnected as IconAndControls } from './section/iconAndControls/IconAndControls'
import { PaddingY } from './util/PaddingY'
import { dispatch, store } from '../../../store/store'
import {
  actionFormClear,
  actionFormUpdateBody,
  actionFormUpdateSubtitle,
  actionFormUpdateTitle,
  actionFormUpdateUsername,
} from '../../../store/action/message/form'
import { TitleConnected as Title } from './section/title/Title'
import { SubtitleConnected as Subtitle } from './section/subtitle/Subtitle'
import { BodyConnected as Body } from './section/body/Body'
import { UsernameConnected as Username } from './section/username/Username'
import { Message } from '../../../type/message'
import { pushMessage } from '../../../net/sync/request'
import { hash } from '../../../external/hash'

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
      <Title {...{ intl, updateTitle }} />
      <Subtitle {...{ intl, updateSubtitle }} />
      <Body {...{ intl, updateBody }} />
      <Username {...{ intl, updateUsername }} />
      <IconAndControls intl={intl} onClear={clearForm} onSend={send} />
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
const clearForm = () => {
  dispatch(actionFormClear())
}
const send = () => {
  const { messageForm } = store.getState()
  const message = addTimestamp(addId(messageForm))

  pushMessage(message)
  console.log('pushed')
}

const addId = (message: Message): Message => {
  const id = hash(JSON.stringify(message))
  return { ...message, id }
}

const addTimestamp = (message: Message): Message => {
  const now = new Date().toISOString()
  return { ...message, timestamp: now }
}
