import * as React from 'react'
import { FC } from '../../../../type/react'
import { cx } from '../../../../util/classname/cx'
import { MetaForm } from '../text/MetaForm'

export interface FooterProps {}

export const Footer: FC<FooterProps> = ({}) => (
  <div className={cx('flex')}>
    <MetaForm />
  </div>
)
