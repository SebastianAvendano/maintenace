import React from 'react'
import { Layout } from 'antd'
import SideBar from '../../../components/sideBar'
import HomeCalendar from './components/calendar'

const { Content, Footer } = Layout

const Home = () => {
  return (
    <Layout>
      <SideBar />
      <Layout className='site-layout' style={{ marginLeft: 200 }}>
        <Content style={{ margin: '24px 16px 0', overflow: 'initial' }}>
          <HomeCalendar />
        </Content>
        <Footer style={{ textAlign: 'center' }}>
          Ant Design ©2018 Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  )
}

export default Home
