import React from 'react'
import { Spin, Row, Col, Button } from 'antd'

const FooterComponent = ({ loading, openAndClosedModal, edit }) => {
  return loading ? (
    <Row justify='end'>
      <Spin />
    </Row>
  ) : (
    <Row justify='end'>
      <Col>
        <Button onClick={openAndClosedModal}> Cancelar </Button>
      </Col>
      <Col style={{ marginLeft: 20 }}>
        <Button type='primary' htmlType='submit'>
          {edit ? 'Actualizar' : 'Crear'}
        </Button>
      </Col>
    </Row>
  )
}

export default FooterComponent
