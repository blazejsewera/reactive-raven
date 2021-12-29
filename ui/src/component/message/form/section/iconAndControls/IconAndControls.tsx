import * as React from 'react'
import { connect } from 'react-redux'
import { State } from '../../../../../store/store'
import { FC } from '../../../../../type/react'
import { cx } from '../../../../../util/classname/cx'
import { AppAvatar } from '../../../card/sprite/avatar/AppAvatar'
import { Label } from '../common/inputSection/cell/Label'
import { FormControls as Controls } from './controls/FormControls'
import { content } from '../common/styleClass/content'
import { Intl } from '../../../../../i18l/intl'

export interface IconAndControlsProps {
  intl: Intl
  username: string
  onClear: () => void
  onSend: () => void
}

export const IconAndControls: FC<IconAndControlsProps> = ({ intl, username, onClear, onSend }) => {
  const _ = intl.getTranslation

  return (
    <div className={cx('w-full', 'flex', 'flex-col', 'sm:flex-row')}>
      <Label>{_('icon')}</Label>
      <div className={cx(content)}>
        <AppAvatar className={cx('my-auto')} username={username} />
        <Controls className={cx('ml-auto')} {...{ onClear, onSend }} />
      </div>
    </div>
  )
}

const mapState = (state: State): Pick<IconAndControlsProps, 'username'> => ({
  username: state.messageForm.username,
})

export const IconAndControlsConnected = connect(mapState)(IconAndControls)
