import * as React from 'react'
import { FC } from '../../../../../../type/react'
import { Check, Send as SendIcon } from '../../../../../../external/icon'
import { cx } from '../../../../../../util/classname/cx'

export interface SendProps {
  onSend: () => boolean
  className?: string
}

interface Evt {
  preventDefault: () => void
}

export const Send: FC<SendProps> = ({ onSend, className }) => {
  const [sendIconAnimate, setSendIconAnimate] = React.useState(false)
  const [sendIconHide, setSendIconHide] = React.useState(false)
  const [sendIconTransparent, setSendIconTransparent] = React.useState(false)
  const [checkIconHide, setCheckIconHide] = React.useState(true)
  const [checkIconTransparent, setCheckIconTransparent] = React.useState(true)

  const sendAnimation = () => {
    const displayAndTransparencyDelay = 50
    const sendIconAnimationDuration = 200
    const checkIconAnimationDuration = 200
    const hideSendIconKeyframe = sendIconAnimationDuration
    const showCheckIconKeyframe = 500
    const hideCheckIconKeyframe = 1600
    const showSendIconKeyframe = 2000

    setSendIconAnimate(true)

    setTimeout(() => {
      setSendIconTransparent(true)
      setSendIconHide(true)
    }, hideSendIconKeyframe)

    setTimeout(() => {
      setCheckIconHide(false)
    }, showCheckIconKeyframe - displayAndTransparencyDelay)

    setTimeout(() => {
      setCheckIconTransparent(false)
    }, showCheckIconKeyframe)

    setTimeout(() => {
      setCheckIconTransparent(true)
    }, hideCheckIconKeyframe)

    setTimeout(() => {
      setCheckIconHide(true)
    }, hideCheckIconKeyframe + checkIconAnimationDuration + displayAndTransparencyDelay)

    setTimeout(() => {
      setSendIconHide(false)
      setSendIconAnimate(false)
    }, showSendIconKeyframe - sendIconAnimationDuration - displayAndTransparencyDelay)

    setTimeout(() => {
      setSendIconTransparent(false)
    }, showSendIconKeyframe)
  }

  const onSendPreventDefault = (e: Evt) => {
    e.preventDefault()
    const sentSuccessfully = onSend()
    if (sentSuccessfully) sendAnimation()
  }

  const iconStyles = ['text-gray-100', 'dark:text-gray-600', 'm-auto']

  return (
    <button
      type="submit"
      className={cx(
        className ?? '',
        'flex',
        'w-14',
        'h-14',
        'rounded-full',
        'bg-gray-700',
        'dark:bg-gray-400',
        'overflow-clip',
      )}
      onClick={onSendPreventDefault}
    >
      <SendIcon
        className={cx(
          iconStyles,
          'transition',
          'duration-200',
          'ease-in',
          sendIconHide ? 'hidden' : 'block',
          sendIconTransparent ? 'opacity-0' : 'opacity-100',
          sendIconAnimate ? ['-translate-y-6', 'translate-x-6'] : ['-translate-x-px', 'translate-y-px'],
        )}
      />
      <Check
        className={cx(
          iconStyles,
          'transition-opacity',
          'duration-200',
          'ease-in-out',
          checkIconHide ? 'hidden' : 'block',
          checkIconTransparent ? 'opacity-0' : 'opacity-100',
        )}
      />
    </button>
  )
}
