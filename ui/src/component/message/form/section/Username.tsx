import * as React from 'react'
import { FC } from '../../../../type/react'
import { cx } from '../../../../util/classname/cx'
import { Label } from '../celltype/Label'
import { TextInput } from '../celltype/TextInput'

export const Username: FC = () => (
  <>
    <Label>username</Label>
    <TextInput size="small" />
  </>
)
