import { useState } from 'react'
import moment from 'moment'

export const useAgenda = () => {
  const [services, setServices] = useState({
    Nombre: '',
    Descripcion: '',
    Cliente: '',
    Fecha: '',
    Direccion: '',
    ciudad: ''
  })
  const [selectDate, setSelectDate] = useState({
    value: moment('2020-06-22'),
    selectValue: moment('2020-06-22')
  })

  const [modeCalendar, setModeCalendar] = useState()
  const [modal, setModal] = useState(false)

  const abrirModal = () => {
    setModal(true)
  }

  const cerrarModal = () => {
    setModal(false)
  }

  const accion = () => {
    // console.log("services", services);
    cerrarModal()
  }

  const layout = {
    labelCol: {
      span: 5
    },
    wrapperCol: {
      span: 19
    }
  }
  const onChange = (date, dateString) => {
    console.log(date, dateString)
  }
  const handleChange = (e) => {
    const { name, value } = e.target
    setServices({ ...services, [name]: value })
  }

  const onSelect = (value) => {
    setSelectDate({
      value,
      selectValue: value
    })
    abrirModal()
  }

  const onPanelChange = (value, mode) => {
    console.log('hola', value.format('YYYY-MM-DD'), mode)
    setModeCalendar(mode)
  }

  return {
    onSelect,
    onChange,
    handleChange,
    layout,
    abrirModal,
    cerrarModal,
    accion,
    services,
    setServices,
    modal,
    setModal,
    selectDate,
    onPanelChange,
    modeCalendar
  }
}
