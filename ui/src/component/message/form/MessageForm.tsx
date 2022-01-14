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
  const [isTitleValid, setIsTitleValid] = React.useState(true)
  const [isUsernameValid, setIsUsernameValid] = React.useState(true)

  const updateTitle = (title: string) => {
    setIsTitleValid(true)
    dispatch(actionFormUpdateTitle(title))
  }
  const updateSubtitle = (subtitle: string) => {
    dispatch(actionFormUpdateSubtitle(subtitle))
  }
  const updateBody = (body: string) => {
    dispatch(actionFormUpdateBody(body))
  }
  const updateUsername = (username: string) => {
    setIsUsernameValid(true)
    dispatch(actionFormUpdateUsername(username))
  }
  const clearForm = () => {
    dispatch(actionFormClear())
  }

  const send = (): boolean => {
    const { messageForm } = store.getState()
    const message = addTimestamp(addId(messageForm))
    let isValid = true

    if (message.title.length == 0) {
      setIsTitleValid(false)
      isValid = false
    }

    if (message.username.length == 0) {
      setIsUsernameValid(false)
      isValid = false
    }

    isValid && pushMessage(message)
    return isValid
  }

  const addId = (message: Message): Message => {
    const id = hash(JSON.stringify(message))
    return { ...message, id }
  }

  const addTimestamp = (message: Message): Message => {
    const now = new Date().toISOString()
    return { ...message, timestamp: now }
  }

  return (
    <form
      className={cx(
        'rounded-3xl',
        'bg-gray-100',
        'dark:bg-gray-700',
        'w-full', // mobile
        'pt-1',
        'sm:w-128', // desktop
        'sm:pt-0',
        'overflow-hidden',
        'shadow-lg',
        'relative',
      )}
    >
      <PaddingY />
      <Title {...{ intl, updateTitle, valid: isTitleValid }} />
      <Subtitle {...{ intl, updateSubtitle }} />
      <Body {...{ intl, updateBody }} />
      <Username {...{ intl, updateUsername, valid: isUsernameValid }} />
      <IconAndControls intl={intl} onClear={clearForm} onSend={send} />
      <PaddingY />
    </form>
  )
}
