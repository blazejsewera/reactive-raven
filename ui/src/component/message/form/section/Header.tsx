import * as React from 'react'
import { Intl } from '../../../../i18l/intl'
import { FC } from '../../../../type/react'
import { cx } from '../../../../util/classname/cx'
import { AppAvatar } from '../../card/sprite/avatar/AppAvatar'
import { CardFunctionTitle } from '../text/CardFunctionTitle'
import { SubtitleForm } from '../text/SubtitleForm'
import { TitleForm } from '../text/TitleForm'

export interface HeaderProps {
  intl: Intl
}

export const Header: FC<HeaderProps> = ({ intl }) => (
  <div>
    <CardFunctionTitle intl={intl} />
    <div className={cx('flex')}>
      <AppAvatar size="medium" username="Tx" />
      <div className={cx('my-auto', 'inline-block', 'ml-5')}>
        <TitleForm></TitleForm>
      </div>
    </div>
  </div>
)
