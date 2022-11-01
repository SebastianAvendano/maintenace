import React from 'react'
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
  Tag
} from 'antd'
import {
  EditOutlined,
  DeleteOutlined,
  PlusCircleOutlined
} from '@ant-design/icons'
import { useProducto } from '../../provider'
import FooterComponent from '../../../../components/footerModal'

const { Option } = Select

const { Item } = Form
const ProductsComponent = () => {
  const {
    data,
    products,
    loading,
    editProduct,
    openAndClosedModal,
    openSwal,
    onPressBtnModal,
    openModalCreate,
    modal,
    categories,
    providers,
    form
  } = useProducto()

  const columns = [
    {
      title: 'Referencia',
      dataIndex: 'reference',
      key: 'reference'
    },
    {
      title: 'Nombre',
      dataIndex: 'name',
      key: 'name'
    },
    {
      title: 'Marca',
      dataIndex: 'stamp',
      key: 'stamp'
    },
    {
      title: 'Categoria',
      dataIndex: 'category',
      key: 'category',
      render: (category) => (
        <>
          {category.map((item) => {
            return (
              <Tag key={item._id} color='blue'>
                {item.name}
              </Tag>
            )
          })}
        </>
      )
    },
    {
      title: 'Categoria',
      dataIndex: 'category',
      key: 'category',
      render: (category) => (
        <>
          {category.map((item) => {
            return (
              <Tag key={item._id} color='blue'>
                {item.name}
              </Tag>
            )
          })}
        </>
      )
    },
    {
      title: 'Proveedor',
      dataIndex: 'provider',
      key: 'provider',
      render: (provider) => (
        <>
          {provider.map((item) => {
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
      title: 'Precio',
      dataIndex: 'cost',
      key: 'cost'
    },
    {
      title: 'Accion',
      key: 'operation',
      fixed: 'right',
      render: (_, products, index) => (
        <>
          <Button
            type='default'
            width='2px'
            onClick={() => editProduct(products)}
          >
            <EditOutlined />
          </Button>{' '}
          {'   '}
          <Button
            type='default'
            danger
            onClick={() => openSwal(products, index)}
          >
            <DeleteOutlined />
          </Button>
        </>
      )
    }
  ]

  return (
    <Card
      title='Productos'
      extra={
        <Button type='primary' size='middle' onClick={openModalCreate}>
          <PlusCircleOutlined />
          Agregar
        </Button>
      }
    >
      <Modal
        width='120vh'
        title='Nuevo Producto'
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
                name='reference'
                rules={[{ required: true }]}
                label='Referencia'
              >
                <Input
                  name='reference'
                  placeholder='ingrese la referencia del producto'
                />
              </Item>
            </Col>
            <Col span={11} offset={2}>
              <Item label='Nombre' name='name' rules={[{ required: true }]}>
                <Input
                  name='nombre'
                  placeholder='ingrese el nombre del producto'
                />
              </Item>
            </Col>
          </Row>
          <Row>
            <Col span={11}>
              <Item label='Marca' name='stamp' rules={[{ required: true }]}>
                <Input name='stamp' />
              </Item>
            </Col>
            <Col span={11} offset={2}>
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
          <Row>
            <Col span={11}>
              <Item
                label='Proveedor'
                name='provider'
                rules={[{ required: true }]}
              >
                <Select showSearch placeholder='Seleccione el proveedor'>
                  {providers.map((item) => (
                    <Option value={item._id} key={item._id}>
                      {item.name}
                    </Option>
                  ))}
                </Select>
              </Item>
            </Col>
            <Col span={11} offset={2}>
              <Item label='Precio' name='cost' rules={[{ required: true }]}>
                <Input name='cost' />
              </Item>
            </Col>
          </Row>
          <FooterComponent
            loading={loading}
            openAndClosedModal={openAndClosedModal}
            edit={products.edit}
          />
        </Form>
      </Modal>
      <Table columns={columns} dataSource={data} scroll={{ x: 1200 }} sticky />
    </Card>
  )
}

export default ProductsComponent
