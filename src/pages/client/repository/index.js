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

  async deleteUser (id, token) {
    const response = await axios.put(`${url}/desabilityUser/${id}`, {}, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    if (response.status === 200) {
      return response.data
    }
    return []
  }

  async updateUser (id, data, token) {
    console.log(id)
    const response = await axios.put(`${url}/update/userClient/${id}`, data, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    if (response.status === 200) {
      return response.data
    }
    return []
  }

  async createUser (data, token) {
    const response = await axios.post(`${url}/create/userClient`, data, {
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
