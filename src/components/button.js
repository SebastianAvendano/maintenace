import { Button } from 'antd'
import React from 'react'
import colors from '../utils/colors'

const ButtonComponent = ({
  label,
  onClick,
  diseable = false,
  backgroundColor = colors.primary,
  width
}) => {
  return (
    <Button
      type='primary'
      onClick={onClick}
      disabled={diseable}
      htmlType='submit'
      style={{ backgroundColor, height: '45px', width: '100%' }}
    >
      {label}
    </Button>
  )
}

export default ButtonComponent
