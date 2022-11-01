import React from 'react'
import {
  Calendar,
  Card,
  Typography,
  Row,
  Select,
  Col,
  Radio,
  Button,
  Modal,
  Form,
  Input,
  DatePicker
} from 'antd'
import { useAgenda } from '../../providers'

const { Item } = Form
const CalendarComponent = () => {
  const {
    onSelect,
    onChange,
    handleChange,
    cerrarModal,
    accion,
    modal,
    onPanelChange,
    modeCalendar
  } = useAgenda()

  return (
    <Card>
      <Modal
        width='120vh'
        title='Nuevo servicio'
        visible={modal}
        onCancel={cerrarModal}
        onOk={accion}
        footer={[
          <Button
            type='primary'
            danger onClick={cerrarModal}
          >
            Cancelar
          </Button>,
          <Button type='primary' onClick={accion}>
            Agregar
          </Button>
        ]}
      >
        <Form layout='vertical'>
          <Row>
            <Col span={11}>
              <Item label='Nombre'>
                <Input name='nombre' onChange={handleChange} />
              </Item>
            </Col>
            <Col span={11} offset={2}>
              <Item label='Descripcion'>
                <Input name='descripcion' onChange={handleChange} />
              </Item>
            </Col>
          </Row>
          <Row>
            <Col span={11}>
              <Item label='Cliente'>
                <Input name='cliente' onChange={handleChange} />
              </Item>
            </Col>
            <Col span={11} offset={2}>
              <Item label='Hora'>
                <DatePicker
                  inputReadOnly
                  onChange={onChange}
                  picker='time'
                />
              </Item>
            </Col>
          </Row>
          <Row>
            <Col span={11}>
              <Item label='Direccion'>
                <Input name='direccion' onChange={handleChange} />
              </Item>
            </Col>
            <Col span={11} offset={2}>
              <Item label='Ciudad'>
                <Input name='ciudad' onChange={handleChange} />
              </Item>
            </Col>
          </Row>
        </Form>
      </Modal>
      <Calendar
        onSelect={onSelect}
        onPanelChange={onPanelChange}
        onChange={onChange}
        headerRender={({ value, type, onChange, onTypeChange }) => {
          const start = 0
          const end = 12
          const monthOptions = []

          const current = value.clone()
          const localeData = value.localeData()
          const months = []
          for (let i = 0; i < 12; i++) {
            current.month(i)
            months.push(localeData.monthsShort(current))
          }

          for (let index = start; index < end; index++) {
            monthOptions.push(
              <Select.Option className='month-item' key={`${index}`}>
                {months[index]}
              </Select.Option>
            )
          }
          const month = value.month()

          const year = value.year()
          const options = []
          for (let i = year - 10; i < year + 10; i += 1) {
            options.push(
              <Select.Option key={i} value={i} className='year-item'>
                {i}
              </Select.Option>
            )
          }
          return (
            <Row align='middle' style={{ padding: 8 }}>
              <Col span={8}>
                <Typography.Title level={4}>
                  Servicios Agendados
                </Typography.Title>
              </Col>
              <Col span={8} offset={8}>
                <Row gutter={8} align='middle' justify='end'>
                  <Col>
                    <Radio.Group
                      size='small'
                      onChange={(e) => onTypeChange(e.target.value)}
                      value={type}
                    >
                      <Radio.Button value='month'>Month</Radio.Button>
                      <Radio.Button value='year'>Year</Radio.Button>
                    </Radio.Group>
                  </Col>
                  <Col>
                    <Select
                      size='small'
                      dropdownMatchSelectWidth={false}
                      className='my-year-select'
                      onChange={(newYear) => {
                        const now = value.clone().year(newYear)
                        onChange(now)
                      }}
                      value={String(year)}
                    >
                      {options}
                    </Select>
                  </Col>
                  {modeCalendar === 'month' ? (
                    <Col>
                      <Select
                        size='small'
                        dropdownMatchSelectWidth={false}
                        value={String(month)}
                        onChange={(selectedMonth) => {
                          const newValue = value.clone()
                          newValue.month(parseInt(selectedMonth, 10))
                          onChange(newValue)
                        }}
                      >
                        {monthOptions}
                      </Select>
                    </Col>
                  ) : (
                    <></>
                  )}
                </Row>
              </Col>
            </Row>
          )
        }}
      />
    </Card>
  )
}

export default CalendarComponent
