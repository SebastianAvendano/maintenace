import { useEffect, useState } from 'react'
// import moment from 'moment';
import swal from 'sweetalert'
import { useStorage } from '../../../hooks/storage'
import ProductRepository from '../repository'
import CategoryRepository from '../../categorys/repository'
import ProviderRepository from '../../providers/repository'
import { Form } from 'antd'

export const useProducto = () => {
  const [form] = Form.useForm()

  const storage = useStorage()
  const [data, setData] = useState([])
  const [categories, setCategories] = useState([])
  const [providers, setProviders] = useState([])
  const [loading, setLoading] = useState(false)
  const [modal, setModal] = useState(false)
  // const [defaults, setDefaults] = useState([])
  const [products, setProducts] = useState({})

  useEffect(() => {
    getData()
    getCategories()
    getProviders()
  }, [])

  const getData = async () => {
    const { token } = storage.getItem('auth')
    const response = await ProductRepository.getData(token)
    setData(response)
  }

  const getCategories = async () => {
    const { token } = storage.getItem('auth')
    const response = await CategoryRepository.getData(token)
    setCategories(response)
  }

  const getProviders = async () => {
    const { token } = storage.getItem('auth')
    const response = await ProviderRepository.getData(token)
    setProviders(response)
  }

  const deleteProduct = async (id) => {
    const { token } = storage.getItem('auth')
    const response = await ProductRepository.deleteProduct(id, token)
    if (response.updated) {
      swal({
        text: 'El registro se ha eliminado con exito',
        icon: 'success',
        timer: '2000'
      })
      getData()
    }
  }

  const updateProduct = async (data) => {
    const { token } = storage.getItem('auth')
    setLoading(true)
    const response = await ProductRepository.updateProduct(
      products._id,
      data,
      token
    )
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

  const createProduct = async (data) => {
    const { token } = storage.getItem('auth')
    setLoading(true)
    const response = await ProductRepository.createProduct(data, token)
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
    form.resetFields()
    setProducts({})
    openAndClosedModal()
  }

  const editProduct = (products) => {
    const categories = []
    const provider = products.provider ? products.provider[0]._id : ''
    if (products.category) {
      products.category.map((category) => {
        categories.push(category._id)
      })
    }
    const newData = {
      ...products,
      provider,
      category: categories
    }
    form.setFieldsValue(newData)
    setProducts({ ...products, edit: true })
    openAndClosedModal()
  }

  const onPressBtnModal = (newProduct) => {
    if (products.edit) {
      updateProduct(newProduct)
    } else {
      createProduct(newProduct)
    }
  }
  const openSwal = async (record) => {
    const response = await swal({
      title: 'Eliminar Registro',
      text: `¿Desea eliminar el Producto ${record.name}?`,
      icon: 'warning',
      buttons: ['No', 'Si']
    })
    if (response) {
      deleteProduct(record._id)
    }
  }

  return {
    data,
    products,
    loading,
    editProduct,
    openAndClosedModal,
    openSwal,
    onPressBtnModal,
    setModal,
    openModalCreate,
    modal,
    categories,
    providers,
    form
  }
}
