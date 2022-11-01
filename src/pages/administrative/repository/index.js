import axios from 'axios'

const url = 'http://localhost:3001/user'

class AdminRepository {
  async getData (token) {
    const response = await axios.get(`${url}/type/admin`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    if (response.status === 200) {
      return response.data
    }
    return []
  }

  async deleteAdmin (id, token) {
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

  async updateAdmin (id, data, token) {
    const response = await axios.put(`${url}/update/admin/${id}`, data, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    if (response.status === 200) {
      return response.data
    }
    return []
  }

  async createAdmin (data, token) {
    const response = await axios.post(`${url}/create/admin`, data, {
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

export default new AdminRepository()
