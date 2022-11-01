import { useEffect, useState } from 'react'
import ClientRepository from '../repository'
import { useStorage } from '../../../hooks/storage'

const useClientProvider = () => {
  const storage = useStorage()
  const [data, setData] = useState([])
  const [userClient] = useState({
    rol: '6098b0895a99a6034023b298'
  })
  useEffect(() => {
    getData()
  }, [])

  const getData = async () => {
    const { token } = storage.getItem('auth')
    const response = await ClientRepository.getData(token)
    setData(response)
  }

  return {
    data,
    userClient
  }
}

export default useClientProvider
