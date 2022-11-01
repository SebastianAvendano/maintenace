import axios from 'axios'

const url = 'http://localhost:3001/user'

class AuthRepository {
  async authenticate (data) {
    const response = await axios.post(`${url}/authentication`, data)
    if (response.status === 200) {
      return response.data
    }
    return false
  }
}

export default new AuthRepository()
