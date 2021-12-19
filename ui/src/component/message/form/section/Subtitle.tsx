import { INSPECT_MAX_BYTES } from 'buffer'
import * as React from 'react'
import { FC } from '../../../../type/react'
import { cx } from '../../../../util/classname/cx'
import { TextInput } from '../celltype/TextInput'
import { Label } from '../celltype/Label'

export const Subtitle: FC = () => (
  <>
    <Label>subtitle</Label>
    <TextInput size="small" />
  </>
)
