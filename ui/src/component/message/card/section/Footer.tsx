import * as React from 'react'
import type { FC } from '../../../../type/react'
import { cx } from '../../../../util/cx'
import { Meta } from '../text/Meta'

export interface FooterProps {
  username: string
  timestamp: string
  relativeTime?: string
}

export const Footer: FC<FooterProps> = ({ username, timestamp, relativeTime }) => (
  <div className={cx('flex')}>
    <Meta {...{ username, timestamp, relativeTime }} />
  </div>
)
