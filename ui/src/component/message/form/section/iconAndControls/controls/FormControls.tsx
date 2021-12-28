import * as React from 'react'
import { FC } from '../../../../../../type/react'
import { cx } from '../../../../../../util/classname/cx'
import { Clear } from './Clear'
import { Send } from './Send'

export interface FormControlsProps {
  onSend: () => void
  onClear: () => void
  className?: string
}

export const FormControls: FC<FormControlsProps> = ({ className, onClear, onSend }) => (
  <div className={cx('flex', 'flex-row', 'h-full', className ?? '')}>
    <Clear className={cx('my-auto')} onClear={onClear} />
    <Send className={cx('my-auto')} onSend={onSend} />
  </div>
)
