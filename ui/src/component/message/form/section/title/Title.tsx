import * as React from 'react'
import { connect } from 'react-redux'
import { State } from '../../../../../store/store'
import { FC } from '../../../../../type/react'
import { InputSection, InputSize } from '../common/inputSection/InputSection'

interface TitleProps {
  updateTitle: (s: string) => void
  value?: string
}

export const Title: FC<TitleProps> = ({ updateTitle, value }) => (
  <InputSection name="title" inputSize={InputSize.TEXT_LARGE} onChange={updateTitle} value={value} />
)

type StateMapper = (state: State) => Pick<TitleProps, 'value'>
const mapState: StateMapper = state => ({
  value: state.messageForm.title,
})

export const TitleConnected = connect(mapState)(Title)
