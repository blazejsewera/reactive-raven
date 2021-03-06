import * as React from 'react'
import { connect } from 'react-redux'
import { Intl } from '../../../../../i18l/intl'
import { State } from '../../../../../store/store'
import { FC } from '../../../../../type/react'
import { InputSection } from '../common/inputSection/InputSection'

interface UsernameProps {
  intl: Intl
  updateUsername: (s: string) => void
  valid: boolean
  value?: string
}

export const Username: FC<UsernameProps> = ({ intl, updateUsername, valid, value }) => (
  <InputSection intl={intl} name="username" onChange={updateUsername} value={value} valid={valid} />
)

type StateMapper = (state: State) => Pick<UsernameProps, 'value'>
const mapState: StateMapper = state => ({
  value: state.messageForm.username,
})

export const UsernameConnected = connect(mapState)(Username)
