import { Space, Col } from 'antd'
import React from 'react'
import FormLogin from './form'
import styles from '../styles'
import colors from '../../../../utils/colors'
import { useLogin } from '../../providers'

const SectionRight = () => {
  const { onFinish } = useLogin()

  return (
    <Col span={12} className='card' style={styles.content({ backgroundColor: colors.gray })}>
      <Space direction='vertical' size='large' style={{ alignItems: 'center' }}>
        <FormLogin onFinish={onFinish} />
      </Space>
    </Col>
  )
}

export default SectionRight
