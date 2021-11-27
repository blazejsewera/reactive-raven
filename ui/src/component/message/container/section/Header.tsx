import * as React from 'react'
import type { FC } from '../../../../type/react'
import { Title } from '../text/Title'
import { cx } from '../../../../util/cx'
import { ClearAllButton } from '../sprite/button/ClearAllButton'
import type { OnMessageContainerClearAll } from '../../../../type/handler'

export interface HeaderProps {
  title: string
  onClearAll: OnMessageContainerClearAll
}

export const Header: FC<HeaderProps> = ({ title, onClearAll }) => (
  <div className={cx('flex', 'mb-4', 'mx-2')}>
    <Title>{title}</Title>
    <ClearAllButton onClick={onClearAll} />
  </div>
)
