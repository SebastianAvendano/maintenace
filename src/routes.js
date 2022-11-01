import {
  AppstoreOutlined,
  MenuUnfoldOutlined,
  LayoutOutlined,
  MenuFoldOutlined,
  UserOutlined,
  UserAddOutlined,
  UploadOutlined,
  CalendarOutlined,
  LineChartOutlined


} from '@ant-design/icons'

export const routesMain = [
  {
    name: 'Agenda',
    route: '/home',
    icon: <CalendarOutlined />,
    // component: <Home />,
    validateAccess: true,
    showSidebar: true
  },
  {
    name: 'Administrativos',
    route: '/administrative',
    icon: <UserOutlined />,
    // component: <Clients />,
    validateAccess: true,
    showSidebar: true
  },
  
  {
    name: 'Dashboard',
    route: '/dashboard',
    icon: <LineChartOutlined />,
    // component: <Clients />,
    validateAccess: true,
    showSidebar: true
  },
  {
    name: 'Clientes',
    route: '/clients',
    icon: <UserAddOutlined />,
    // component: <Clients />,
    validateAccess: true,
    showSidebar: true
  },
  {
    name: 'Servicios',
    route: '/services',
    icon: <MenuFoldOutlined />,
    // component: <Services />,
    validateAccess: true,
    showSidebar: true
  },
  {
    name: 'Categorias',
    route: '/categorys',
    icon: <UploadOutlined />,
    validateAccess: true,
    showSidebar: true
  },
  {
    name: 'Proveedores',
    route: '/providers',
    icon: <LayoutOutlined />,
    // component: <Providers />,
    validateAccess: true,
    showSidebar: true
  },
  {
    name: 'Productos',
    route: '/products',
    icon: <MenuUnfoldOutlined />,
    // component: <Products />
    validateAccess: true,
    showSidebar: true
  },
  {
    name: 'Ventas',
    route: '/sells',
    icon: <AppstoreOutlined />,
    isValidate: true,
    validateAccess: true,
    showSidebar: true
  }
  // {
  //   name: 'Prueba',
  //   route: '/prueba',
  //   icon: <AppstoreOutlined/>
  // }
]
