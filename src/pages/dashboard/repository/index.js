import axios from 'axios'

const url = 'http://localhost:3001/user'

class ClientRepository {
  async getData (token) {
    const response = await axios.get(`${url}/type/client`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    if (response.status === 200) {
      return response.data
    }
    return []
  }
}

export default new ClientRepository()
