import * as React from 'react'
import { FC } from '../../../../type/react'
import { cx } from '../../../../util/classname/cx'

export interface SectionProps {
  name: string
}

let sectionId = 0

export const Section: FC<SectionProps> = ({ name }) => {
  const id = React.useMemo(() => generateId(name, sectionId++), [name])
  return (
    <label htmlFor={id} className={cx('flex', 'basis-1/4')}>
      <span className={cx('flex-1')}>{name}</span>
      <div className={cx('inline-flex flex-3')}>
        <input id={id} type="text" />
      </div>
    </label>
  )
}

const generateId = (name: string, sectionId: number): string => `${name}-${sectionId}`
