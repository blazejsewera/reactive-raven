import * as React from 'react'
import { FC } from '../../../../type/react'
import { cx } from '../../../../util/classname/cx'

export interface SectionProps {
  name: string
  inputSize?: 'text-lg' | 'text-md' | 'text-area'
}

let sectionId = 0

export const Section: FC<SectionProps> = ({ name, inputSize }) => {
  const isTextArea = inputSize === 'text-area'
  const id = React.useMemo(() => generateId(name, sectionId++), [name])
  return (
    <label htmlFor={id} className={cx('flex', 'flex-row', 'w-full')}>
      <div
        className={cx(
          'font-bold',
          'text-left', // mobile
          'w-full',
          'sm:text-right', // desktop
          'sm:basis-1/4',
          'p-2',
          'bg-gray-300',
        )}
      >
        {name}
      </div>
      <div className={cx('basis-3/4', 'flex', 'p-2')}>
        {isTextArea ? (
          <textarea id={id} className={cx('w-full')} />
        ) : (
          <input id={id} type="text" className={cx('w-full')} />
        )}
      </div>
    </label>
  )
}

const generateId = (name: string, sectionId: number): string => `${name}-${sectionId}`
