import React from 'react'
import { Layout, Menu, Button } from 'antd'
import Logo from '../assets/images/fh.jpg'
import { routesMain } from '../routes'
import { useLocation, useHistory } from 'react-router-dom'
import {
  PoweroffOutlined
} from '@ant-design/icons'

const { Sider } = Layout

const HeaderComponent = () => {
  const location = useLocation()

  const history = useHistory()

  const redirectRoute = (route) => {
    history.push(route)
  }

  const poweroffOutlined = () => {
    history.replace('/')
  }

  return (
    <Sider
      style={{
        height: '100vh',
        position: 'fixed',
        left: 'auto',
        backgroundColor: 'white',
        width: '130px'
      }}
    >
      <div
        style={{
          padding: '15px 0px',
          alignItems: 'center',
          display: 'flex',
          justifyContent: 'center'
        }}
      >
        <img src={Logo} alt='logo' width='130px' />
      </div>

      <Menu
        theme='light'
        mode='inline'
        defaultSelectedKeys={[location.pathname]}
      >
        {routesMain.map((item) => {
          if (item.showSidebar) {
            return (
              <Menu.Item
                key={item.route}
                icon={item.icon}
                onClick={() => redirectRoute(item.route)}
              >
                {item.name}
              </Menu.Item>
            )
          }
        })}
      </Menu>
      <Button style={{ marginTop: 30, marginLeft: 25, borderRadius: 5 }} size='middle' type='default' onClick={poweroffOutlined}>
        <PoweroffOutlined />Cerrar Sesion
      </Button>
    </Sider>
  )
}

export default HeaderComponent
