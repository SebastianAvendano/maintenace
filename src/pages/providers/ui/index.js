import React from 'react'
import { Layout } from 'antd'
import SideBar from '../../../components/sideBar'
import ProvidersComponent from './components/providers'

const { Content, Footer } = Layout

const providers = () => {
  return (
    <Layout>
      <SideBar />
      <Layout className='site-layout' style={{ marginLeft: 200 }}>
        <Content style={{ margin: '24px 20px 0', overflow: 'initial' }}>
          <ProvidersComponent />
        </Content>
        <Footer style={{ textAlign: 'center' }}>
          Ant Design ©2018 Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  )
}

export default providers
