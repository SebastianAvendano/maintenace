import React from 'react'
import { Layout } from 'antd'
import SideBar from '../../../components/sideBar'
import CategoryComponent from './components/tableCategorys'

const { Content, Footer } = Layout

const Sells = () => {
  return (
    <Layout>
      <SideBar />
      <Layout className='site-layout' style={{ marginLeft: 200 }}>
        <Content style={{ margin: '24px 20px 0', overflow: 'initial' }}>
          <CategoryComponent />
        </Content>
        <Footer style={{ textAlign: 'center' }}>
          Ant Design ©2018 Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  )
}

export default Sells
