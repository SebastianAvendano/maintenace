import React from 'react'
import { Form, Input, Card } from 'antd'
import styles from '../styles'
import Button from '../../../../components/button'

const FormLogin = ({ onFinish }) => {
  return (
    <Card title='INICIO DE SESION'>
      <Form
        layout='vertical'
        style={styles.form}
        name='basic_login'
        onFinish={onFinish}
      >
        <Form.Item
          label='Username'
          name='email'
          rules={[{ required: true, message: 'Por favor ingrese el correo' }]}
        >
          <Input
            name='email'
            placeholder='Ingrese su Usuario'
          />
        </Form.Item>

        <Form.Item
          label='Password'
          name='password'
          rules={[
            { required: true, message: 'Por favor ingrese la contraseña!' }
          ]}
        >
          <Input.Password
            name='password'
            placeholder='Ingrese la contraseña'
          />
        </Form.Item>

        <Form.Item>
          <Button label='Ingresar' />
        </Form.Item>
      </Form>
    </Card>
  )
}
export default FormLogin
