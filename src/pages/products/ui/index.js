import React from 'react'
import { Layout } from 'antd'
import SideBar from '../../../components/sideBar'
import ProductsComponent from './components/tableProducts'

const { Content, Footer } = Layout

const Productos = () => {
  return (
    <Layout>
      <SideBar />
      <Layout className='site-layout' style={{ marginLeft: 200 }}>
        <Content style={{ margin: '24px 16px 0', overflow: 'initial' }}>
          <ProductsComponent />
        </Content>
        <Footer style={{ textAlign: 'center' }}>
          Ant Design ©2018 Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  )
}

export default Productos
