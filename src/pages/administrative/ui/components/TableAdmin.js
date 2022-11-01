import React from 'react'
import { Table, Card, Button, Row, Col, Modal, Form, Input, Spin, Tag, Select } from 'antd'
import {
  EditOutlined,
  DeleteOutlined,
  PlusCircleOutlined
} from '@ant-design/icons'
import useAdminProvider from '../../provider'
import FooterComponent from '../../../../components/footerModal'

const { Item } = Form
const { Option } = Select

const TableAdmin = () => {
  const {
    data,
    openSwal,
    admin,
    editAdmin,
    modal,
    onPressBtnModal,
    openAndClosedModal,
    openModalCreate,
    loading
  } = useAdminProvider()

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
      title: 'Estado',
      dataIndex: 'isActive',
      key: 'isActive',
      render: (isActive) => (
        <Tag color={isActive ? 'green' : 'red'}>
          {isActive ? 'Activo' : 'Inactivo'}
        </Tag>
      )
    },
    {
      title: 'Acciones',
      dataIndex: 'acciones',
      key: 'acciones',
      render: (_, admin, index) => (
        <>
          <Button type='default' onClick={() => editAdmin(admin)} width='2px'>
            <EditOutlined />
          </Button>{' '}
          {'   '}
          <Button type='default' danger onClick={() => openSwal(admin, index)}>
            <DeleteOutlined />
          </Button>
        </>
      )
    }
  ]

  return (
    <Card
      title='Administrativos'
      extra={
        <Button type='primary' size='middle' onClick={openModalCreate}>
          <PlusCircleOutlined />
          Agregar
        </Button>
      }
    >
      <Modal
        width='120vh'
        title='Registro Administrativos'
        visible={modal}
        destroyOnClose
        onCancel={openAndClosedModal}
        footer={null}
      >
        <Form
          initialValues={admin}
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
              <Item
                name='password'
                rules={[{ required: true }]}
                label='password'
              >
                <Input.Password
                  placeholder='Ingrese la contraseña'
                  name='password'
                />
              </Item>
            </Col>
          </Row>
          <Row>
            <Col span={11}>
              <Item name='name' rules={[{ required: true }]} label='Nombre'>
                <Input placeholder='Ingrese su Nombre' name='name' />
              </Item>
            </Col>
            <Col span={11} offset={2}>
              <Item
                name='email'
                rules={[{ type: 'email', required: true }]}
                label='Email'
              >
                <Input placeholder='Ejemplo@correo.com' name='email' />
              </Item>
            </Col>
          </Row>
          <Row>
            <Col span={11}>
              <Item
                name='cellphone'
                label='telefono'
                rules={[{ required: true }]}
              >
                <Input placeholder='Ingrese su telefono' name='cellphone' />
              </Item>
            </Col>
            <Col span={11} offset={2}>
              <Item name='isActive' rules={[{ required: true }]} label='Estado'>
                <Select placeholder='seleccione un estado'>
                  <Option value> Activo </Option>
                  <Option value={false}> Inactivo</Option>
                </Select>
              </Item>
            </Col>
          </Row>
          <Row justify='center'>
            <Col span={15}>
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
            edit={admin.edit}
          />
        </Form>
      </Modal>
      <Table columns={columns} dataSource={data} />
    </Card>
  )
}

export default TableAdmin
