import * as React from 'react'
import { Archive } from '../../../../../external/icon'
import type { OnMessageCardArchive } from '../../../../../type/handler'
import type { FC } from '../../../../../type/react'
import { ControlButton } from './ControlButton'

export interface ArchiveButtonProps {
  onClick: OnMessageCardArchive
}

export const ArchiveButton: FC<ArchiveButtonProps> = ({ onClick }) => (
  <ControlButton SvgIcon={Archive} onClick={onClick} />
)
