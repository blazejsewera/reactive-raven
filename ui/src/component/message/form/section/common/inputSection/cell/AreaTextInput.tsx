import * as React from 'react'
import { FC } from '../../../../../../../type/react'
import { cx } from '../../../../../../../util/classname/cx'
import { onChangeEvent } from '../../../../../../../util/input/text'
import { textInput as textInputClasses } from '../../styleClass/input'

export interface AreaTextInputProps {
  id: string
  onChange: (s: string) => void
  valid: boolean
  value?: string
}

export const AreaTextInput: FC<AreaTextInputProps> = ({ id, onChange, valid, value }) => (
  <textarea
    id={id}
    className={cx(
      textInputClasses,
      'w-full',
      'p-1',
      'min-h-9',
      'max-h-48',
      valid ? [] : ['border-red-400', 'dark:border-red-900'],
    )}
    onChange={onChangeEvent(onChange)}
    value={value}
  />
)
