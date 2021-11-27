import * as React from 'react'
import { Archive } from '../../../../../external/icon'
import type { OnMessageCardSettings } from '../../../../../type/handler'
import type { FC } from '../../../../../type/react'
import { ControlButton } from './ControlButton'

export interface SettingsButtonProps {
  onClick: OnMessageCardSettings
}

export const SettingsButton: FC<SettingsButtonProps> = ({ onClick }) => (
  <ControlButton SvgIcon={Archive} onClick={onClick} />
)
