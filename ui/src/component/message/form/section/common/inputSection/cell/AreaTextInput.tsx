import * as React from 'react'
import { FC } from '../../../../../../../type/react'
import { cx } from '../../../../../../../util/classname/cx'
import { onChangeEvent } from '../../../../../../../util/input/text'
import { textInput as textInputClasses } from '../../styleClass/input'

export interface AreaTextInputProps {
  id: string
  onChange: (s: string) => void
  value?: string
}

export const AreaTextInput: FC<AreaTextInputProps> = ({ id, onChange, value }) => (
  <textarea
    id={id}
    className={cx(textInputClasses, 'w-full', 'p-1', 'min-h-9', 'max-h-48')}
    onChange={onChangeEvent(onChange)}
    value={value}
  />
)
