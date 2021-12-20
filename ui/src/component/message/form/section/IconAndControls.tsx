import * as React from 'react'
import { connect } from 'react-redux'
import { State } from '../../../../store/store'
import { FC } from '../../../../type/react'
import { cx } from '../../../../util/classname/cx'
import { AppAvatar } from '../../card/sprite/avatar/AppAvatar'
import { Label } from './celltype/Label'
import { content } from './styleClass/content'

export interface IconAndControlsProps {
  username: string
}

export const IconAndControls: FC<IconAndControlsProps> = ({ username }) => (
  <div className={cx('w-full', 'flex', 'flex-row')}>
    <Label>icon</Label>
    <div className={cx(content)}>
      <AppAvatar username={username} />
    </div>
  </div>
)

const mapState = (state: State): Pick<IconAndControlsProps, 'username'> => ({
  username: state.messageForm.username,
})

export const IconAndControlsConnected = connect(mapState)(IconAndControls)
