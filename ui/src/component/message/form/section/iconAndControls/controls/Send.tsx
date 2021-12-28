import * as React from 'react'
import { FC } from '../../../../../../type/react'
import { Send as SendIcon } from '../../../../../../external/icon'
import { cx } from '../../../../../../util/classname/cx'

export interface SendProps {
  onSend: () => void
  className?: string
}

interface Evt {
  preventDefault: () => void
}

export const Send: FC<SendProps> = ({ onSend, className }) => {
  const onSendPreventDefault = (e: Evt) => {
    e.preventDefault()
    onSend()
  }

  return (
    <button
      type="submit"
      className={cx(className ?? '', 'flex', 'w-14', 'h-14', 'rounded-full', 'bg-gray-700', 'dark:bg-gray-400')}
      onClick={onSendPreventDefault}
    >
      <SendIcon className={cx('text-gray-100', 'dark:text-gray-600', 'm-auto', '-translate-x-px', 'translate-y-px')} />
    </button>
  )
}
