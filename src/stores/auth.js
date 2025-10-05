import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useAuthStore = defineStore('auth', () => {
  const token = ref(null)
  const user = ref(null)
  const isLoggedIn = ref(false)

  function setToken(newToken) {
    token.value = newToken
    isLoggedIn.value = !!newToken
  }

  function setUser(newUser) {
    user.value = newUser
  }

  function logout() {
    token.value = null
    user.value = null
    isLoggedIn.value = false
  }

  return { token, user, isLoggedIn, setToken, setUser, logout }
})
