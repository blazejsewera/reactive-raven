import * as React from 'react'
import { FC } from '../../../../../../type/react'
import { cx } from '../../../../../../util/classname/cx'
import { Label, LabelPosition } from './cell/Label'
import { AreaTextInput } from './cell/AreaTextInput'
import { InlineTextInput } from './cell/InlineTextInput'
import { content } from '../styleClass/content'

export enum InputSize {
  TEXT_LARGE,
  TEXT_MEDIUM,
  TEXT_AREA,
}

export interface InputSectionProps {
  name: string
  onChange: (s: string) => void
  value?: string
  id?: string
  inputSize?: InputSize
  labelPosition?: LabelPosition
}

export const InputSection: FC<InputSectionProps> = ({ name, onChange, value, id, inputSize, labelPosition }) => {
  const isTextArea = inputSize === InputSize.TEXT_AREA
  const sectionId = React.useMemo(() => sectionIdOf(name, id), [name])

  return (
    <label htmlFor={sectionId} className={cx('flex', 'flex-row', 'w-full')}>
      <Label labelPosition={labelPosition}>{name}</Label>
      <div className={cx(content)}>
        {isTextArea ? (
          <AreaTextInput {...{ id: sectionId, onChange, value }} />
        ) : (
          <InlineTextInput {...{ id: sectionId, size: inputSize, onChange, value }} />
        )}
      </div>
    </label>
  )
}

const sectionIdOf = (name: string, id?: string): string => (id ? `form-${name}-${id}` : `form-${name}`)
