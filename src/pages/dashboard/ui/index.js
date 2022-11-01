import React from 'react'
import { Layout } from 'antd'
import SideBar from '../../../components/sideBar'
import Dashboard from '../ui/components/Dashboard'

const { Footer } = Layout

const Dash = () => {
  return (
    <Layout>
      <SideBar />
      <Layout className='site-layout' style={{ marginLeft: 200 }}>
        <Dashboard />
        <Footer style={{ textAlign: 'center' }}>
          Ant Design ©2018 Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  )
}

export default Dash
