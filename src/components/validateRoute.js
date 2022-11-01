import React from 'react'
import { Redirect } from 'react-router-dom'
import { useStorage } from '../hooks/storage'

const ValidateRoute = ({ children, urlReader }) => {
  const { getItem } = useStorage()
  const token = getItem('auth')
  return token ? children : <Redirect to={urlReader} />
}

export default ValidateRoute
