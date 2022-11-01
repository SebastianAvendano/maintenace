export const useStorage = () => {
  const setItem = (key, data) => {
    window.localStorage.setItem([key], JSON.stringify(data))
  }

  const getItem = (key) => {
    const data = window.localStorage.getItem([key])
    return data ? JSON.parse(data) : {}
  }

  const clearStorage = () => {
    window.localStorage.clear()
  }

  return {
    setItem,
    getItem,
    clearStorage
  }
}
