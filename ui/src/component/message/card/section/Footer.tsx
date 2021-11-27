import * as React from 'react'
import type { FC } from '../../../../type/react'
import { cx } from '../../../../util/cx'
import { Meta } from '../text/Meta'

export interface FooterProps {
  appName: string
  timestamp: string
}

export const Footer: FC<FooterProps> = ({ appName, timestamp }) => (
  <div className={cx('flex')}>
    <Meta {...{ appName, timestamp }} />
  </div>
)
