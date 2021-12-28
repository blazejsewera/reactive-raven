import * as React from 'react'
import { connect } from 'react-redux'
import { State } from '../../../../../store/store'
import { FC } from '../../../../../type/react'
import { InputSection } from '../common/inputSection/InputSection'

interface UsernameProps {
  updateUsername: (s: string) => void
  value?: string
}

export const Username: FC<UsernameProps> = ({ updateUsername, value }) => (
  <InputSection name="username" onChange={updateUsername} value={value} />
)

type StateMapper = (state: State) => Pick<UsernameProps, 'value'>
const mapState: StateMapper = state => ({
  value: state.messageForm.username,
})

export const UsernameConnected = connect(mapState)(Username)
