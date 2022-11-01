import { useEffect, useState } from 'react'
import swal from 'sweetalert'
import CategoryRepository from '../repository'
import { useStorage } from '../../../hooks/storage'

export const useCategory = () => {
  const storage = useStorage()
  const [data, setData] = useState([])
  const [category, setCategory] = useState({})
  const [loading, setLoading] = useState(false)
  const [modal, setModal] = useState(false)

  useEffect(() => {
    getData()
  }, [])

  const getData = async () => {
    const { token } = storage.getItem('auth')
    // console.log('token', token)
    const response = await CategoryRepository.getData(token)
    setData(response)
  }

  const deleteCategory = async (id) => {
    const { token } = storage.getItem('auth')
    const response = await CategoryRepository.deleteCategory(id, token)
    if (response.updated) {
      swal({
        text: 'El registro se ha eliminado con exito',
        icon: 'success',
        timer: '2000'
      })
      getData()
    }
  }

  const updateCategory = async (newCategory) => {
    const { token } = storage.getItem('auth')
    setLoading(true)
    const response = await CategoryRepository.updateCategory(category._id, newCategory, token)
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

  const createCategory = async (data) => {
    const { token } = storage.getItem('auth')
    setLoading(true)
    const response = await CategoryRepository.createCategory(data, token)
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
    setCategory({})
    openAndClosedModal()
  }

  const editCategory = (category) => {
    setCategory({ ...category, edit: true })
    openAndClosedModal()
  }

  const onPressBtnModal = (newCategory) => {
    if (category.edit) {
      updateCategory(newCategory)
    } else {
      createCategory(newCategory)
    }
  }
  const openSwal = async (record) => {
    const response = await swal({
      title: 'Eliminar Registro',
      text: `¿Desea eliminar la categoria ${record.name}?`,
      icon: 'warning',
      buttons: ['No', 'Si']
    })
    if (response) {
      deleteCategory(record._id)
    }
  }

  return {
    data,
    category,
    loading,
    editCategory,
    openAndClosedModal,
    openSwal,
    onPressBtnModal,
    setModal,
    openModalCreate,
    modal
  }
}
