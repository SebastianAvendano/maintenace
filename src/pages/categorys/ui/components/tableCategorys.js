import React from 'react'
import { Table, Card, Button, Row, Col, Modal, Form, Input } from 'antd'
import {
  EditOutlined,
  DeleteOutlined,
  PlusCircleOutlined
} from '@ant-design/icons'
import { useCategory } from '../../providers'
import FooterComponent from '../../../../components/footerModal'

const { Item } = Form
const CategoryComponent = () => {
  const {
    data,
    category,
    loading,
    editCategory,
    openAndClosedModal,
    openSwal,
    onPressBtnModal,
    openModalCreate,
    modal
  } = useCategory()

  const columns = [
    {
      title: 'Nombre',
      width: 20,
      dataIndex: 'name',
      key: 'name'
    },
    {
      title: 'Descripcion',
      width: 30,
      dataIndex: 'description',
      key: 'description'
    },
    {
      title: 'Accion',
      key: 'operation',
      fixed: 'right',
      width: 15,
      render: (_, category, index) => (
        <>
          <Button
            type='default'
            width='2px'
            onClick={() => editCategory(category)}
          >
            <EditOutlined />
          </Button>{' '}
          {'   '}
          <Button
            type='default'
            danger
            onClick={() => openSwal(category, index)}
          >
            <DeleteOutlined />
          </Button>
        </>
      )
    }
  ]

  return (
    <Card
      title='Categorias'
      extra={
        <Button type='primary' size='middle' onClick={openModalCreate}>
          <PlusCircleOutlined />
          Agregar
        </Button>
      }
    >
      <Modal
        width='120vh'
        title='Registro Categorias'
        visible={modal}
        destroyOnClose
        onCancel={openAndClosedModal}
        footer={null}
      >
        <Form
          initialValues={category}
          layout='vertical'
          onFinish={onPressBtnModal}
        >
          <Row>
            <Col span={11}>
              <Item name='name' rules={[{ required: true }]} label='Nombre'>
                <Input
                  name='name'
                  placeholder='Ingrese el nombre de la categoria'
                />
              </Item>
            </Col>
            <Col span={11} offset={2}>
              <Item
                label='Descripción'
                name='description'
                rules={[{ required: true }]}
              >
                <Input
                  name='description'
                  placeholder='Digitalice la descripcion de la categoria'
                />
              </Item>
            </Col>
          </Row>
          <FooterComponent loading={loading} openAndClosedModal={openAndClosedModal} edit={category.edit} />
        </Form>
      </Modal>
      <Table columns={columns} dataSource={data} scroll={{ x: 700 }} sticky />
    </Card>
  )
}

export default CategoryComponent
