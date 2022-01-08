import * as React from 'react'
import { FC } from '../../../../type/react'
import { Title } from '../text/Title'
import { cx } from '../../../../util/classname/cx'

export interface HeaderProps {
  title: string
}

export const Header: FC<HeaderProps> = ({ title }) => (
  <div className={cx('flex', 'mb-4', 'mx-2')}>
    <Title>{title}</Title>
  </div>
)
