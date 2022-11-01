import React from 'react'
import { Layout } from 'antd'
import SideBar from '../../../components/sideBar'
import TableAdmin from './components/TableAdmin'
import useAdminProvider from '../provider'

const { Footer } = Layout

const Administrative = () => {
  const { data } = useAdminProvider()

  console.log(data)

  return (
    <Layout>
      <SideBar />
      <Layout className='site-layout' style={{ marginLeft: 200 }}>
        <TableAdmin />
        <Footer style={{ textAlign: 'center' }}>
          created for Sebastian Avendaño
        </Footer>
      </Layout>
    </Layout>
  )
}

export default Administrative
