import { useEffect, useState } from 'react'
import AdminRepository from '../repository'
import swal from 'sweetalert'
import { useStorage } from '../../../hooks/storage'

const useAdminProvider = () => {
  const storage = useStorage()
  const [data, setData] = useState([])
  const [admin, setAdmin] = useState({
    rol: "6098b0bd5a99a6034023b299"
  })
  const [loading, setloading] = useState(false)
  const [modal, setModal] = useState(false)

  useEffect(() => {
    getData()
  }, [])

  const getData = async () => {
    const { token } = storage.getItem('auth')
    const response = await AdminRepository.getData(token)
    setData(response)
  }

  const deleteAdmin = async (id) => {
    const { token } = storage.getItem('auth')
    const response = await AdminRepository.deleteAdmin(id, token)
    if (response.updated) {
      swal({
        text: 'El registro se ha eliminado con exito',
        icon: 'success',
        timer: '2000'
      })
      getData()
    }
  }

  const updateAdmin = async (newAdmin) => {
    const { token } = storage.getItem('auth')
    setloading(true)
    const response = await AdminRepository.updateAdmin(admin._id, newAdmin, token)
    setloading(false)
    if (response.updated) {
      swal({
        text: 'El registro se ha actualizado con exito',
        icon: 'success',
        timer: '2000'
      })
      setModal(false)
      getData()
    }
  }

  const createAdmin = async (data) => {
    const { token } = storage.getItem('auth')
    setloading(true)
    const response = await AdminRepository.createAdmin(data, token)
    setloading(false)
    if (response) {
      swal({
        text: 'El registro se ha creado con exito',
        icon: 'success',
        timer: '2000'
      })
      setModal(false)
      getData()
    }
  }

  const openModalCreate = () => {
    setAdmin({})
    openAndClosedModal()
  }

  const editAdmin = (admin) => {
    setAdmin({ ...admin, edit: true })
    openAndClosedModal()
  }

  const openAndClosedModal = () => {
    setModal(!modal)
  }

  const onPressBtnModal = (newAdmin) => {
    if (admin.edit) {
      updateAdmin(newAdmin)
    } else {
      createAdmin(newAdmin)
    }
  }

  const openSwal = async (record) => {
    const response = await swal({
      title: 'Eliminar Registro',
      text: `¿Desea eliminar el usuario ${record.name}?`,
      icon: 'warning',
      buttons: ['No', 'Si']
    })
    if (response) {
      deleteAdmin(record._id)
    }
  }

  return {
    data,
    admin,
    modal,
    openSwal,
    onPressBtnModal,
    openAndClosedModal,
    editAdmin,
    openModalCreate,
    setModal,
    loading
  }
}

export default useAdminProvider
