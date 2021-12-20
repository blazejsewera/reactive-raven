import * as React from 'react'
import { FC } from '../../../../type/react'
import { cx } from '../../../../util/classname/cx'
import { Label, LabelPosition } from './celltype/Label'
import { AreaTextInput } from './celltype/AreaTextInput'
import { InlineTextInput } from './celltype/InlineTextInput'
import { content } from './styleClass/content'

export enum InputSize {
  TEXT_LARGE,
  TEXT_MEDIUM,
  TEXT_AREA,
}

export interface SectionProps {
  name: string
  onChange: (s: string) => void
  id?: string
  inputSize?: InputSize
  labelPosition?: LabelPosition
}

export const Section: FC<SectionProps> = ({ name, onChange, id, inputSize, labelPosition }) => {
  const isTextArea = inputSize === InputSize.TEXT_AREA
  const sectionId = React.useMemo(() => sectionIdOf(name, id), [name])

  return (
    <label htmlFor={sectionId} className={cx('flex', 'flex-row', 'w-full')}>
      <Label labelPosition={labelPosition}>{name}</Label>
      <div className={cx(content)}>
        {isTextArea ? (
          <AreaTextInput id={sectionId} onChange={onChange} />
        ) : (
          <InlineTextInput size={inputSize} id={sectionId} onChange={onChange} />
        )}
      </div>
    </label>
  )
}

const sectionIdOf = (name: string, id?: string): string => (id ? `form-${name}-${id}` : `form-${name}`)
