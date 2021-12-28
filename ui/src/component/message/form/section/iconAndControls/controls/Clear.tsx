import * as React from 'react'
import { Trash } from '../../../../../../external/icon'
import { FC } from '../../../../../../type/react'

export interface ClearProps {
  onClear: () => void
  className?: string
}

export const Clear: FC<ClearProps> = ({ onClear, className }) => (
  <button type="button" className={className} onClick={onClear}>
    <Trash />
  </button>
)
