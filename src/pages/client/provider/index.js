import { useEffect, useState } from 'react'
import ClientRepository from '../repository'
import swal from 'sweetalert'
import { useStorage } from '../../../hooks/storage'

const useClientProvider = () => {
  const storage = useStorage()
  const [data, setData] = useState([])
  const [userClient, setUserClient] = useState({
    rol: "6098b0895a99a6034023b298"
  })
  const [loading, setloading] = useState(false)
  const [modal, setModal] = useState(false)

  useEffect(() => {
    getData()
  }, [])

  const getData = async () => {
    const { token } = storage.getItem('auth')
    const response = await ClientRepository.getData(token)
    setData(response)
  }

  const deleteUser = async (id) => {
    const { token } = storage.getItem('auth')
    const response = await ClientRepository.deleteUser(id, token)
    if (response.updated) {
      swal({
        text: 'El registro se ha eliminado con exito',
        icon: 'success',
        timer: '2000'
      })
      getData()
    }
  }

  const updateUser = async (newUser) => {
    const { token } = storage.getItem('auth')
    setloading(true)
    const response = await ClientRepository.updateUser(userClient._id, newUser, token)
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

  const createUSer = async (data) => {
    const { token } = storage.getItem('auth')
    setloading(true)
    const response = await ClientRepository.createUser(data, token)
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
    setUserClient({})
    openAndClosedModal()
  }

  const editUser = (userClient) => {
    setUserClient({ ...userClient, edit: true })
    openAndClosedModal()
  }

  const openAndClosedModal = () => {
    setModal(!modal)
  }

  const onPressBtnModal = (newUser) => {
    if (userClient.edit) {
      updateUser(newUser)
    } else {
      createUSer(newUser)
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
      deleteUser(record._id)
    }
  }

  return {
    data,
    userClient,
    modal,
    openSwal,
    onPressBtnModal,
    openAndClosedModal,
    editUser,
    openModalCreate,
    setModal,
    loading
  }
}

export default useClientProvider
