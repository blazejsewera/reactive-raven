import { ChangeEvent } from 'react'

interface TargetValueString {
  target: { value: string }
}

type OnChangeEvent = <T extends TargetValueString>(onChange: (s: string) => void) => (e: T) => void

export const onChangeEvent: OnChangeEvent = onChange => e => onChange(e.target.value)
