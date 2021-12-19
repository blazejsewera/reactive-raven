import * as React from 'react'
import { Intl } from '../../../../i18l/intl'
import { fiveSentenceLoremIpsum } from '../../../../mock/asset/text/lipsum'
import { FC } from '../../../../type/react'
import { cx } from '../../../../util/classname/cx'
import { Label } from '../celltype/Label'
import { TextArea } from '../celltype/TextArea'

export interface BodyProps {
  intl: Intl
}

export const Body: FC<BodyProps> = ({ intl }) => {
  return (
    <>
      <Label>body</Label>
      <TextArea />
    </>
  )
}
// <input
//   type="text"
//   className={cx('whitespace-pre-line', 'text-sm', 'leading-4', 'my-3', 'text-gray-800', 'dark:text-gray-300')}
// ></input>
