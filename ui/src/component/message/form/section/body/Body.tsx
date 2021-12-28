import * as React from 'react'
import { connect } from 'react-redux'
import { Intl } from '../../../../../i18l/intl'
import { State } from '../../../../../store/store'
import { FC } from '../../../../../type/react'
import { LabelPosition } from '../common/inputSection/cell/Label'
import { InputSection, InputSize } from '../common/inputSection/InputSection'

interface BodyProps {
  intl: Intl
  updateBody: (s: string) => void
  value?: string
}

export const Body: FC<BodyProps> = ({ intl, updateBody, value }) => (
  <InputSection
    intl={intl}
    name="body"
    inputSize={InputSize.TEXT_AREA}
    labelPosition={LabelPosition.TOP}
    onChange={updateBody}
    value={value}
  />
)

type StateMapper = (state: State) => Pick<BodyProps, 'value'>
const mapState: StateMapper = state => ({
  value: state.messageForm.body,
})

export const BodyConnected = connect(mapState)(Body)
