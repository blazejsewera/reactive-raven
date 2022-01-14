import * as React from 'react'
import { FC } from '../../../../../../type/react'
import { cx } from '../../../../../../util/classname/cx'
import { Label, LabelPosition } from './cell/Label'
import { AreaTextInput } from './cell/AreaTextInput'
import { InlineTextInput } from './cell/InlineTextInput'
import { content } from '../styleClass/content'
import { Intl } from '../../../../../../i18l/intl'

export enum InputSize {
  TEXT_LARGE,
  TEXT_MEDIUM,
  TEXT_AREA,
}

export interface InputSectionProps {
  intl: Intl
  name: string
  onChange: (s: string) => void
  valid?: boolean
  value?: string
  id?: string
  inputSize?: InputSize
  labelPosition?: LabelPosition
}

export const InputSection: FC<InputSectionProps> = ({
  intl,
  name,
  onChange,
  valid,
  value,
  id,
  inputSize,
  labelPosition,
}) => {
  const _ = intl.getTranslation
  const isTextArea = inputSize === InputSize.TEXT_AREA
  const sectionId = React.useMemo(() => sectionIdOf(name, id), [name])
  const isValid = valid ?? true

  return (
    <label htmlFor={sectionId} className={cx('flex', 'sm:flex-row', 'flex-col', 'w-full')}>
      <Label labelPosition={labelPosition}>{_(name)}</Label>
      <div className={cx(content)}>
        {isTextArea ? (
          <AreaTextInput {...{ id: sectionId, onChange, value, valid: isValid }} />
        ) : (
          <InlineTextInput {...{ id: sectionId, size: inputSize, onChange, value, valid: isValid }} />
        )}
      </div>
    </label>
  )
}

const sectionIdOf = (name: string, id?: string): string => (id ? `form-${name}-${id}` : `form-${name}`)
