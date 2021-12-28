import * as React from 'react'
import { connect } from 'react-redux'
import { Intl } from '../../../../../i18l/intl'
import { State } from '../../../../../store/store'
import { FC } from '../../../../../type/react'
import { InputSection } from '../common/inputSection/InputSection'

interface SubtitleProps {
  intl: Intl
  updateSubtitle: (s: string) => void
  value?: string
}

export const Subtitle: FC<SubtitleProps> = ({ intl, updateSubtitle, value }) => (
  <InputSection intl={intl} name="subtitle" onChange={updateSubtitle} value={value} />
)

type StateMapper = (state: State) => Pick<SubtitleProps, 'value'>
const mapState: StateMapper = state => ({
  value: state.messageForm.subtitle,
})

export const SubtitleConnected = connect(mapState)(Subtitle)
