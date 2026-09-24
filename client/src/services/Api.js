import axios from 'axios'

export default () => {
  const instance = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
  })

  // Automatically attach JWT from localStorage
  instance.interceptors.request.use((config) => {
    const token = localStorage.getItem('token')

    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }

    return config
  })

  // Handle expired or invalid tokens
  instance.interceptors.response.use(
    (response) => response,
    (error) => {
      if (error.response?.status === 401) {
        localStorage.removeItem('token')
        localStorage.removeItem('user')
      }

      return Promise.reject(error)
    },
  )

  return instance
}
