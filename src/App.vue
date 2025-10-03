<template>
  <div>
    <nav v-if="showNav" class="p-4 bg-gray-200 flex gap-4">
      <router-link to="/">Home</router-link>
    </nav>
    <router-view />
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

// Hide nav on register page
const showNav = computed(() => route.name !== 'register')
</script>
