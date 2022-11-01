import React from 'react'
import { Table, Card, Button, Row, Col, Modal, Form, Input } from 'antd'
import {
  EditOutlined,
  DeleteOutlined,
  PlusCircleOutlined
} from '@ant-design/icons'
import useClientProvider from '../../provider'
import FooterComponent from '../../../../components/footerModal'

const { Item } = Form

const TableClients = () => {
  const {
    data,
    openSwal,
    userClient,
    editUser,
    modal,
    onPressBtnModal,
    openAndClosedModal,
    openModalCreate,
    loading
  } = useClientProvider()

  const columns = [
    {
      title: 'Nombre',
      dataIndex: 'name',
      key: 'name'
    },
    {
      title: 'Identificación',
      dataIndex: 'identification',
      key: 'identification'
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email'
    },
    {
      title: 'Telefono',
      dataIndex: 'cellphone',
      key: 'cellphone'
    },
    {
      title: 'Dirección',
      dataIndex: 'direction',
      key: 'direction'
    },
    {
      title: 'Acciones',
      dataIndex: 'acciones',
      key: 'acciones',
      render: (_, userClient, index) => (
        <>
          <Button
            type='default'
            onClick={() => editUser(userClient)}
            width='2px'
          >
            <EditOutlined />
          </Button>{' '}
          {'   '}
          <Button
            type='default'
            danger
            onClick={() => openSwal(userClient, index)}
          >
            <DeleteOutlined />
          </Button>
        </>
      )
    }
  ]

  return (
    <Card
      title='Clientes'
      extra={
        <Button type='primary' size='middle' onClick={openModalCreate}>
          <PlusCircleOutlined />
          Agregar
        </Button>
      }
    >
      <Modal
        width='120vh'
        title='Registro Cliente'
        visible={modal}
        destroyOnClose
        onCancel={openAndClosedModal}
        footer={null}
      >
        <Form
          initialValues={userClient}
          layout='vertical'
          onFinish={onPressBtnModal}
        >
          <Row>
            <Col span={11}>
              <Item
                name='identification'
                rules={[{ required: true }]}
                label='Identificacion'
              >
                <Input
                  placeholder='Ingrese su identificacion'
                  name='identification'
                />
              </Item>
            </Col>
            <Col span={11} offset={2}>
              <Item name='name' rules={[{ required: true }]} label='Nombre'>
                <Input placeholder='Ingrese su Nombre' name='name' />
              </Item>
            </Col>
          </Row>
          <Row>
            <Col span={11}>
              <Item
                name='email'
                rules={[{ type: 'email', required: true }]}
                label='Email'
              >
                <Input placeholder='Ejemplo@correo.com' name='email' />
              </Item>
            </Col>
            <Col span={11} offset={2}>
              <Item
                name='cellphone'
                label='telefono'
                rules={[{ required: true }]}
              >
                <Input placeholder='Ingrese su telefono' name='cellphone' />
              </Item>
            </Col>
          </Row>
          <Row justify='center'>
            <Col span={16}>
              <Item
                name='direction'
                label='Dirección'
                rules={[{ required: true }]}
              >
                <Input placeholder='Ingrese una dirección' name='direction' />
              </Item>
            </Col>
          </Row>
          <FooterComponent
            loading={loading}
            openAndClosedModal={openAndClosedModal}
            edit={userClient.edit}
          />
        </Form>
      </Modal>
      <Table columns={columns} dataSource={data} />
    </Card>
  )
}

export default TableClients
