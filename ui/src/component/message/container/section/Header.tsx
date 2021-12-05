import * as React from 'react'
import type { FC } from '../../../../type/react'
import { Title } from '../text/Title'
import { cx } from '../../../../util/classname/cx'
import { ClearButton } from '../sprite/button/ClearButton'
import type { OnMessageContainerClear } from '../../../../type/handler'

export interface HeaderProps {
  title: string
  onClear: OnMessageContainerClear
}

export const Header: FC<HeaderProps> = ({ title, onClear }) => (
  <div className={cx('flex', 'mb-4', 'mx-2')}>
    <Title>{title}</Title>
    <ClearButton onClick={onClear} containerTitle={title} />
  </div>
)
