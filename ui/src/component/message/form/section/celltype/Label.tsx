import * as React from 'react'
import { FC } from '../../../../../type/react'
import { cx } from '../../../../../util/classname/cx'

export enum LabelPosition {
  TOP,
  MIDDLE,
  BOTTOM,
}

export interface LabelProps {
  children: string
  labelPosition?: LabelPosition
}

export const Label: FC<LabelProps> = ({ children, labelPosition }) => {
  const labelPositionClassMapping: Record<LabelPosition, string | string[]> = {
    [LabelPosition.TOP]: ['mb-auto', 'mt-1'],
    [LabelPosition.MIDDLE]: 'my-auto',
    [LabelPosition.BOTTOM]: ['mt-auto', 'mb-1'],
  }

  const labelPositionClass = labelPositionClassMapping[labelPosition ?? LabelPosition.MIDDLE]

  return (
    <div
      className={cx(
        'flex',
        'shrink-0',
        'font-bold',
        'text-left', // mobile
        'w-full',
        'sm:text-right', // desktop
        'sm:basis-1/4',
        'p-2',
        'bg-gray-300',
      )}
    >
      <span className={cx(labelPositionClass, 'w-full')}>{children}</span>
    </div>
  )
}
