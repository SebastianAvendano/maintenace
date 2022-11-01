import React from 'react'
import { Layout } from 'antd'
import SideBar from '../../../components/sideBar'
import TableClients from './components/TableClients'

const { Footer } = Layout

const Clientes = () => {
  return (
    <Layout>
      <SideBar />
      <Layout className='site-layout' style={{ marginLeft: 200 }}>
        <TableClients />
        <Footer style={{ textAlign: 'center' }}>
          Ant Design ©2018 Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  )
}

export default Clientes
