import * as React from 'react'
import { connect } from 'react-redux'
import { Intl } from '../../../../../i18l/intl'
import { State } from '../../../../../store/store'
import { FC } from '../../../../../type/react'
import { InputSection, InputSize } from '../common/inputSection/InputSection'

interface TitleProps {
  intl: Intl
  updateTitle: (s: string) => void
  value?: string
}

export const Title: FC<TitleProps> = ({ intl, updateTitle, value }) => (
  <InputSection intl={intl} name="title" inputSize={InputSize.TEXT_LARGE} onChange={updateTitle} value={value} />
)

type StateMapper = (state: State) => Pick<TitleProps, 'value'>
const mapState: StateMapper = state => ({
  value: state.messageForm.title,
})

export const TitleConnected = connect(mapState)(Title)
