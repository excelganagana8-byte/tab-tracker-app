<template>
  <div>
    <Nav />
    <router-view />
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import { useAuthStore } from './stores/auth'
import Nav from './components/Nav.vue'

const auth = useAuthStore()
onMounted(() => {
  //restore login state on refresh
  auth.loadUser()
})
</script>
