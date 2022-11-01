import { useEffect, useState } from 'react'
import swal from 'sweetalert'
import { useStorage } from '../../../hooks/storage'
import ProviderRepository from '../repository'
export const useProveedor = () => {
  const storage = useStorage()
  const [data, setData] = useState([])
  const [provider, setProvider] = useState({})
  const [loading, setLoading] = useState(false)
  const [modal, setModal] = useState(false)

  useEffect(() => {
    getData()
  }, [])

  const getData = async () => {
    const { token } = storage.getItem('auth')
    // console.log('token', token)
    const response = await ProviderRepository.getData(token)
    setData(response)
  }

  const deleteProvider = async (id) => {
    const { token } = storage.getItem('auth')
    const response = await ProviderRepository.deleteProvider(id, token)
    if (response.updated) {
      swal({
        text: 'El registro se ha eliminado con exito',
        icon: 'success',
        timer: '2000'
      })
      getData()
    }
  }

  const updateProvider = async (newProvider) => {
    const { token } = storage.getItem('auth')
    setLoading(true)
    const response = await ProviderRepository.updateProvider(provider._id, newProvider, token)
    console.log(response)
    setLoading(false)
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

  const createProvider = async (data) => {
    const { token } = storage.getItem('auth')
    setLoading(true)
    const response = await ProviderRepository.createProvider(data, token)
    setLoading(false)
    if (response._id) {
      swal({
        text: 'El registro se ha creado con exito',
        icon: 'success',
        timer: '2000'
      })
      setModal(false)
      getData()
    }
  }

  const openAndClosedModal = () => {
    setModal(!modal)
  }

  const openModalCreate = () => {
    setProvider({})
    openAndClosedModal()
  }

  const editProvider = (provider) => {
    setProvider({ ...provider, edit: true })
    openAndClosedModal()
  }

  const onPressBtnModal = (newProvider) => {
    if (provider.edit) {
      updateProvider(newProvider)
    } else {
      createProvider(newProvider)
    }
  }
  const openSwal = async (record) => {
    const response = await swal({
      title: 'Eliminar Registro',
      text: `¿Desea eliminar el proveedor ${record.name}?`,
      icon: 'warning',
      buttons: ['No', 'Si']
    })
    if (response) {
      deleteProvider(record._id)
    }
  }

  return {
    data,
    provider,
    loading,
    editProvider,
    openAndClosedModal,
    openSwal,
    onPressBtnModal,
    setModal,
    openModalCreate,
    modal
  }
}
