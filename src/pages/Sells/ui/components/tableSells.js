import React, { } from 'react'
import {
  Table,
  Card,
  Button,
  Row,
  Col,
  Modal,
  Form,
  Input,
  Select,
  Tag,
  DatePicker
} from 'antd'

import {
  EditOutlined,
  DeleteOutlined,
  PlusCircleOutlined
} from '@ant-design/icons'
import { useSells } from '../../provider'
import FooterComponent from '../../../../components/footerModal'
// import moment from 'moment'

const { Option } = Select

const { Item } = Form

const SellsComponent = () => {
  const {
    data,
    sells,
    products,
    loading,
    editSell,
    openAndClosedModal,
    onPressBtnModal,
    openSwal,
    openModalCreate,
    modal,
    categories,
    clients,
    form
  } = useSells()

  const columns = [
    {
      title: 'No. Orden',
      dataIndex: 'code',
      key: 'code'
    },
    {
      title: 'Item',
      dataIndex: 'product',
      key: 'product',
      render: (products) => (
        <>
          {products.map((item) => {
            return (
              <Tag key={item._id} color='green'>
                {item.name}
              </Tag>
            )
          })}
        </>
      )
    },
    {
      title: 'Cliente',
      dataIndex: 'client',
      key: '    ',
      render: (client) => (
        <Tag key={client._id} color='blue'>
          {client.name}
        </Tag>
      )
    },
    {
      title: 'Empleado',
      dataIndex: 'employee',
      key: 'employee'
    },
    {
      title: 'Descripcion',
      dataIndex: 'description',
      key: 'description'
    },
    {
      title: 'Fecha',
      dataIndex: 'dateSell',
      key: 'dateSell'
    },
    {
      title: 'Precio',
      dataIndex: 'valueSell',
      key: 'valueSell'
    },
    {
      title: 'Accion',
      key: 'operation',
      fixed: 'right',
      render: (_, sells, index) => (
        <>
          <Button
            type='default'
            width='2px'
            onClick={() => editSell(sells)}
          >
            <EditOutlined />
          </Button>{' '}
          {'   '}
          <Button
            type='default'
            danger
            onClick={() => openSwal(sells, index)}
          >
            <DeleteOutlined />
          </Button>
        </>
      )
    }
  ]

  return (
    <Card
      title='Ventas'
      extra={
        <Button type='primary' size='middle' onClick={openModalCreate}>
          <PlusCircleOutlined />
          Agregar
        </Button>
      }
    >
      <Modal
        width='120vh'
        title='Nueva Venta'
        visible={modal}
        destroyOnClose
        onCancel={openAndClosedModal}
        footer={null}
      >
        <Form
          form={form}
          layout='vertical'
          onFinish={onPressBtnModal}
        >
          <Row>
            <Col span={11}>
              <Item
                name='code'
                label='Codigo'
              >
                <Input
                  name='code'
                  placeholder='Numero de Orden'
                />
              </Item>
            </Col>
            <Col span={11} offset={2}>
              <Item
                rules={[{ required: true }]}
                name='product'
                label='Producto'
              >
                <Select showSearch mode='multiple' placeholder='Seleccione el producto'>
                  {products.map((item) => (
                    <Option value={JSON.stringify(item)} key={item._id}>
                      {item.name}
                    </Option>
                  ))}
                </Select>
              </Item>
            </Col>
          </Row>
          <Row>
            <Col span={11}>
              <Item
                rules={[{ required: true }]}
                name='client'
                label='Cliente'
              >
                <Select showSearch placeholder='Seleccione el cliente'>
                  {clients.map((item) => (
                    <Option value={item._id} key={item._id}>
                      {item.name}
                    </Option>
                  ))}
                </Select>
              </Item>
            </Col>
            <Col span={11} offset={2}>
              <Item
                name='employee'
                label='Empleado'
              >
                <Input name='employees' placeholder='Nombre del vendedor' />
              </Item>
            </Col>
          </Row>
          <Row>
            <Col span={11}>
              <Item
                name='valueSell'
                label='Precio'
                rules={[{ required: true }]}
              >
                <Input
                  name='valuesell'
                />
              </Item>
            </Col>
            <Col span={11} offset={2}>
              <Item
                name='dateSell'
                label='Fecha'
              >
                <DatePicker name='dateSell' /* defaultValue={moment(new Date(), 'YYYY/MM/DD')} */ />
              </Item>
            </Col>
          </Row>
          <Row justify='start'>
            <Col span={10}>
              <Item
                label='Categoria'
                name='category'
                rules={[{ required: true }]}
              >
                <Select showSearch mode='multiple' placeholder='Seleccione la categoria'>
                  {categories.map((item) => (
                    <Option value={item._id} key={item._id}>
                      {item.name}
                    </Option>
                  ))}
                </Select>
              </Item>
            </Col>
          </Row>
          <Row justify='center'>
            <Col span={24}>
              <Item
                name='description'
                label='Descripcion'
              >
                <Input name='description' />
              </Item>
            </Col>
          </Row>
          <FooterComponent
            loading={loading}
            openAndClosedModal={openAndClosedModal}
            edit={sells.edit}
          />
        </Form>
      </Modal>
      <Table columns={columns} dataSource={data} scroll={{ x: 1500 }} sticky />
    </Card>
  )
}

export default SellsComponent
