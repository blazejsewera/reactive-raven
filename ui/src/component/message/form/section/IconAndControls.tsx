import * as React from 'react'
import { FC } from '../../../../type/react'
import { cx } from '../../../../util/classname/cx'
import { Label } from '../celltype/Label'

export const IconAndControls: FC = () => (
  <>
    <Label>icon</Label>
    <div className={cx('inline-block')}>Icon and controls</div>
  </>
)
