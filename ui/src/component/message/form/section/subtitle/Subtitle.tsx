import * as React from 'react'
import { connect } from 'react-redux'
import { State } from '../../../../../store/store'
import { FC } from '../../../../../type/react'
import { InputSection } from '../common/inputSection/InputSection'

interface SubtitleProps {
  updateSubtitle: (s: string) => void
  value?: string
}

export const Subtitle: FC<SubtitleProps> = ({ updateSubtitle, value }) => (
  <InputSection name="subtitle" onChange={updateSubtitle} value={value} />
)

type StateMapper = (state: State) => Pick<SubtitleProps, 'value'>
const mapState: StateMapper = state => ({
  value: state.messageForm.subtitle,
})

export const SubtitleConnected = connect(mapState)(Subtitle)
