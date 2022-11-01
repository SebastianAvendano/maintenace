import swal from 'sweetalert'
import { useEffect, useState } from 'react'
import { useStorage } from '../../../hooks/storage'
import SellsRepository from '../repository'
import ClientsRepository from '../../client/repository'
import CategoryRepository from '../../categorys/repository'
import ProductsRepository from '../../products/repository'
import { Form } from 'antd'
import moment from 'moment'

export const useSells = () => {
  const [form] = Form.useForm()

  const storage = useStorage()
  const [data, setData] = useState([])
  const [clients, setClients] = useState([])
  const [categories, setCategories] = useState([])
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(false)
  const [modal, setModal] = useState(false)
  // const [defaults, setDefaults] = useState([])
  const [sells, setSells] = useState({
    Codigo: '',
    Producto: '',
    Cliente: '',
    Empleado: '',
    Category: '',
    Descripcion: '',
    FechaVenta: '',
    PrecioVenta: ''
  })

  useEffect(() => {
    getData()
    getClients()
    getCategories()
    getProducts()
  }, [])

  const getData = async () => {
    const { token } = storage.getItem('auth')
    const response = await SellsRepository.getData(token)
    setData(response)
  }

  const getClients = async () => {
    const { token } = storage.getItem('auth')
    const response = await ClientsRepository.getData(token)
    setClients(response)
  }

  const getCategories = async () => {
    const { token } = storage.getItem('auth')
    const response = await CategoryRepository.getData(token)
    setCategories(response)
  }

  const getProducts = async () => {
    const { token } = storage.getItem('auth')
    const response = await ProductsRepository.getData(token)
    setProducts(response)
  }

  const deleteSells = async (id) => {
    const { token } = storage.getItem('auth')
    const response = await SellsRepository.deleteSells(id, token)
    if (response.updated) {
      swal({
        text: 'El registro se ha eliminado con exito',
        icon: 'success',
        timer: '2000'
      })
      getData()
    }
  }

  const updateSells = async (newSell) => {
    const products = []

    newSell.product.map((item) => {
      products.push(JSON.parse(item))
    })
    newSell.product = products
    const { token } = storage.getItem('auth')
    setLoading(true)
    const response = await SellsRepository.updateSells(sells._id, newSell, token)
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

  const createSells = async (data) => {
    const products = []

    data.product.map((item) => {
      products.push(JSON.parse(item))
    })
    data.product = products
    const { token } = storage.getItem('auth')
    setLoading(true)
    const response = await SellsRepository.createSells(data, token)
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
    console.log(data)
  }

  const openAndClosedModal = () => {
    setModal(!modal)
  }

  const openModalCreate = () => {
    form.resetFields()
    setSells({})
    openAndClosedModal()
  }

  const editSell = (sells) => {
    const products = []
    const client = sells.client ? sells.client._id : ''
    if (sells.product) {
      sells.product.map((product) => {
        products.push(JSON.stringify(product))
      })
    };
    const newData = {
      ...sells,
      client,
      dateSell: moment(sells.dateSell),
      product: products
    }
    form.setFieldsValue(newData)
    setSells({ ...sells, edit: true })
    openAndClosedModal()
  }

  const onPressBtnModal = (newSell) => {
    if (sells.edit) {
      updateSells(newSell)
    } else {
      createSells(newSell)
    }
  }
  const openSwal = async (record) => {
    const response = await swal({
      title: 'Eliminar Registro',
      text: `¿Desea eliminar el registro ${record.code}?`,
      icon: 'warning',
      buttons: ['No', 'Si']
    })
    if (response) {
      deleteSells(record._id)
    }
  }

  return {
    data,
    products,
    loading,
    sells,
    editSell,
    openAndClosedModal,
    openSwal,
    onPressBtnModal,
    setModal,
    openModalCreate,
    modal,
    clients,
    categories,
    form
  }
}
