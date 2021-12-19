import * as React from 'react'
import { FC } from '../../../../type/react'
import { cx } from '../../../../util/classname/cx'
import { TextInput } from '../celltype/TextInput'
import { Label } from '../celltype/Label'

export const Title: FC = () => (
  <>
    <Label>title</Label>
    <TextInput size="large" />
  </>
)
