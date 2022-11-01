import React from 'react'
import { Row } from 'antd'
import SectionLeft from './components/sectionLeft'
import SectionRight from './components/sectionRight'

const Login = () => {
  return (
    <Row justify='space-around' align='middle'>
      <SectionLeft />
      <SectionRight />
    </Row>
  )
}

export default Login
