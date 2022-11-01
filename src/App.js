import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Login from './pages/login/ui'
import Home from './pages/home/ui'
import Client from './pages/client/ui'
import Services from './pages/services/ui'
import Providers from './pages/providers/ui'
import Products from './pages/products/ui'
import Sells from './pages/Sells/ui'
import Categorys from './pages/categorys/ui'
import Admin from './pages/administrative/ui'
import Dashboard from './pages/dashboard/ui'
import 'antd/dist/antd.css'

export default function App () {
  return (
    <Router>
      <Switch>
        <Route path='/home'>
          <Home />
        </Route>
        <Route path='/clients'>
          <Client />
        </Route>
        <Route path='/administrative'>
          <Admin />
        </Route>
        <Route path='/dashboard'>
          <Dashboard />
        </Route>
        <Route path='/categorys'>
          <Categorys />
        </Route>
        <Route path='/services'>
          <Services />
        </Route>
        <Route path='/providers'>
          <Providers />
        </Route>
        <Route path='/products'>
          <Products />
        </Route>
        <Route path='/sells'>
          <Sells />
        </Route>
        <Route path='/'>
          <Login />
        </Route>
      </Switch>
    </Router>
  )
}
