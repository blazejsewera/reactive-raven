import * as React from 'react'
import { FC } from '../../../../../type/react'

export interface InitialsAppAvatarProps {
  username: string
  /**
   * @deprecated bgColor will be generated automatically from appName in the future,
   * expect this prop to be removed
   */
  bgColor?: string
}

export const InitialsAppAvatar: FC<InitialsAppAvatarProps> = ({ username, bgColor }) => {
  const backgroundColor = bgColor ?? generateBackgroundColor(username)
  const fontSize = 0.5 // svg is scaled for 1px, so it's roughly half the height
  return (
    <svg viewBox="0 0 1 1">
      <rect width={1} height={1} fill={backgroundColor} />
      <text
        x={0.5}
        y={0.5}
        style={{ fontWeight: 'bold', fontFamily: 'Inter', fontSize: fontSize }}
        fill="#FFF"
        textAnchor="middle"
        dy={(fontSize * 0.356).toFixed(3)}
      >
        {makeInitials(username)}
      </text>
    </svg>
  )
}

// TODO: implement a color generator
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const generateBackgroundColor = (_seed: string): string => '#000'

const makeInitials = (name: string) => name.substr(0, 2)
