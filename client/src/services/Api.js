// src/services/Api.js
import axios from 'axios'

export default () => {
  const instance = axios.create({
    baseURL: 'http://localhost:3000/api',
    // baseURL: 'https://xiomara-intertentacular-sunny.ngrok-free.dev/api',
  })

  // ✅ Automatically attach JWT from localStorage for every request
  instance.interceptors.request.use((config) => {
    const token = localStorage.getItem('token')
    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }
    return config
  })

  // Optional: handle expired or invalid tokens
  instance.interceptors.response.use(
    (response) => response,
    (error) => {
      if (error.response?.status === 401) {
        localStorage.removeItem('token')
        localStorage.removeItem('user')
        // optional: redirect to login
        // window.location = '/login'
      }
      return Promise.reject(error)
    },
  )

  return instance
}
