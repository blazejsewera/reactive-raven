import * as React from 'react'
import { FC } from '../../../../../../type/react'
import { Send as SendIcon } from '../../../../../../external/icon'

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
    <button type="submit" className={className} onClick={onSendPreventDefault}>
      <SendIcon />
    </button>
  )
}
