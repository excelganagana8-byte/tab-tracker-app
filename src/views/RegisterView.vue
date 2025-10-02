<template>
  <div>
    <h1>Register</h1>

    <input type="email" name="email" placeholder="email" v-model="email">
    <br>
    <input type="password" name="password" placeholder="password" v-model="password">
    <br>
    <button
     @click="register"
    >Register

    </button>

  </div>
</template>

<script setup>
import AuthenticationService from '@/services/AuthenticationService'
import { ref } from 'vue'

let email = ref('')
let password = ref('')

const register = async () => {
  try {
    const res = await AuthenticationService.register({
      email: email.value,
      password: password.value
    })
    console.log(res.data)
    alert(res.data.message)
  } catch (error) {
    console.error(error)
    alert('Registration failed')
  }
}
</script>

