import { Space, Col, Typography } from 'antd'
import React from 'react'
import logoFh from '../../../../assets/images/logo.svg'
import colors from '../../../../utils/colors'
import styles from '../styles'

const { Title } = Typography

const SectionLeft = () => {
  return (
    <Col span={12} style={styles.content({ backgroundColor: colors.primary })}>
      <Space direction='vertical' size='large' style={{ alignItems: 'center' }}>
        <img src={logoFh} alt='logo' style={styles.image} />
        <Title level={3} style={{ textAlign: 'center', color: 'white' }}>
          Sistema de Gestión Administrativo
        </Title>
      </Space>
    </Col>
  )
}

export default SectionLeft
