import axios from 'axios'

const url = 'http://localhost:3003/provider'

class ProviderRepository {
  async getData (token) {
    const result = await axios.get(`${url}/view`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    if (result.status === 200) {
      const response = result.data
      if (response.errors) {
        return []
      }
      return result.data
    }
    return []
  }

  async deleteProvider (id, token) {
    const response = await axios.put(`${url}/desabilityProvider/${id}`, {}, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    if (response.status === 200) {
      return response.data
    }
    return []
  }

  async updateProvider (id, data, token) {
    console.log(id)
    const response = await axios.put(`${url}/update/${id}`, data, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    if (response.status === 200) {
      return response.data
    }
    return []
  }

  async createProvider (data, token) {
    const response = await axios.post(`${url}/create`, data, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    if (response.status === 200) {
      return response.data
    }
    return []
  }

  async authenticate (data) {
    const response = await axios.post(`${url}/authentication`, data)
    if (response.status === 200) {
      return response.data
    }
    return false
  }
}

export default new ProviderRepository()
