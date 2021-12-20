import * as React from 'react'
import { FC } from '../../../../../type/react'
import { cx } from '../../../../../util/classname/cx'
import { onChangeEvent } from '../../../../../util/input/text'
import { InputSize } from '../Section'
import { textInput as textInputClasses } from '../styleClass/input'

export interface InlineTextInputProps {
  id: string
  onChange: (s: string) => void
  size?: InputSize
}

export const InlineTextInput: FC<InlineTextInputProps> = ({ id, onChange, size }) => {
  const sizeClasses: Record<InputSize, string | string[]> = {
    [InputSize.TEXT_MEDIUM]: '',
    [InputSize.TEXT_LARGE]: ['text-xl', 'font-bold'],
    [InputSize.TEXT_AREA]: '',
  }

  const sizeClass = sizeClasses[size ?? InputSize.TEXT_MEDIUM]

  return (
    <input
      type="text"
      id={id}
      className={cx(textInputClasses, sizeClass, 'w-full', 'p-1')}
      onChange={onChangeEvent(onChange)}
    />
  )
}
