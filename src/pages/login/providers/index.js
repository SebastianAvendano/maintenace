import AuthRepository from '../repository'
import { useHistory } from 'react-router-dom'
import { useStorage } from '../../../hooks/storage'

export const useLogin = () => {
  const history = useHistory()
  const { setItem } = useStorage()

  const onFinish = async (values) => {
    const auth = await AuthRepository.authenticate(values)
    if (auth.token) {
      setItem('auth', auth)
      history.replace('/home')
    }
  }
  return {
    onFinish
  }
}
