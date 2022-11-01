import React from 'react'
import { Table, Card, Button, Row, Col, Modal, Form, Input } from 'antd'
import {
  EditOutlined,
  DeleteOutlined,
  PlusCircleOutlined
} from '@ant-design/icons'
import swal from 'sweetalert'
import { useProveedor } from '../../providers'
import FooterComponent from '../../../../components/footerModal'

const { Item } = Form
const ProviderComponent = () => {
  const {
    data,
    provider,
    loading,
    editProvider,
    openAndClosedModal,
    openSwal,
    onPressBtnModal,
    setModal,
    openModalCreate,
    modal
  } = useProveedor()
  const columns = [
    {
      title: 'Identificacion',
      width: 20,
      dataIndex: 'identification',
      key: 'identification'
    },
    {
      title: 'Nombre',
      width: 20,
      dataIndex: 'name',
      key: 'name'
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
      width: 20
    },
    {
      title: 'Telefono',
      dataIndex: 'cellphone',
      key: 'cellphone',
      width: 15
    },
    {
      title: 'Direccion',
      dataIndex: 'direction',
      key: 'direction',
      width: 20
    },
    {
      title: 'Ciudad',
      dataIndex: 'city',
      key: 'city',
      width: 15
    },
    {
      title: 'Accion',
      key: 'operation',
      fixed: 'right',
      width: 15,
      render: (_, provider, index) => (
        <>
          <Button
            type='default'
            width='2px'
            onClick={() => editProvider(provider)}
          >
            <EditOutlined />
          </Button>{' '}
          {'   '}
          <Button
            type='default'
            danger
            onClick={() => openSwal(provider, index)}
          >
            <DeleteOutlined />
          </Button>
        </>
      )
    }
  ]

  return (
    <Card
      title='Proveedores'
      extra={
        <Button type='primary' size='middle' onClick={openModalCreate}>
          <PlusCircleOutlined />
          Agregar
        </Button>
      }
    >
      <Modal
        width='120vh'
        title='Registrar Proveedor'
        visible={modal}
        destroyOnClose
        onCancel={openAndClosedModal}
        footer={null}
      >
        <Form
          initialValues={provider}
          layout='vertical'
          onFinish={onPressBtnModal}
        >

          <Row>
            <Col span={11}>
              <Item
                label='Identificacion'
                name='identification'
                rules={[{ required: true }]}
              >

                <Input name='identificacion' placeholder='Ingrese una identificación' />
              </Item>
            </Col>
            <Col span={11} offset={2}>
              <Item
                label='Nombre'
                name='name'
                rules={[{ required: true }]}
              >
                <Input name='Nombre' placeholder='Ingrese un nombre' />
              </Item>
            </Col>
          </Row>
          <Row>
            <Col span={11}>
              <Item
                label='Email'
                name='email'
                rules={[{ required: true }]}
              >
                <Input name='email' placeholder='ejemplo@correo.com' />
              </Item>
            </Col>
            <Col span={11} offset={2}>
              <Item
                label='Telefono'
                name='cellphone'
                rules={[{ required: true }]}
              >
                <Input name='cellphone' placeholder='ingresa un numero celular' />
              </Item>
            </Col>
          </Row>
          <Row>
            <Col span={11}>
              <Item
                label='Direccion'
                name='direction'
                rules={[{ required: true }]}
              >
                <Input name='direction' placeholder='Ingrese una dirección' />
              </Item>
            </Col>
            <Col span={11} offset={2}>
              <Item
                label='Ciudad'
                name='city'
                rules={[{ required: true }]}
              >
                <Input name='city' placeholder='ingrese una ciudad' />
              </Item>
            </Col>
          </Row>
          <FooterComponent loading={loading} openAndClosedModal={openAndClosedModal} edit={provider.edit} />
        </Form>
      </Modal>
      <Table columns={columns} dataSource={data} scroll={{ x: 1100 }} sticky />
    </Card>
  )
}

export default ProviderComponent
