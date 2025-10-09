<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
import { useAuthStore } from '@/stores/auth.js'

// eslint-disable-next-line no-unused-vars
const auth = useAuthStore()
</script>

<template>
  <header class="flex items-center space-x-3 mb-6 w-full max-w-full sm:max-w-md mx-auto px-4">
    <!-- Logo Icon -->
    <div
      class="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center shadow-lg shadow-purple-500/25"
    >
      <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3"
        ></path>
      </svg>
    </div>

    <!-- Title -->
    <div class="flex flex-col">
      <h1
        class="text-2xl sm:text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent font-sans tracking-tight"
      >
        Tab Tracker
      </h1>
      <p class="text-xs text-gray-400 -mt-1 hidden sm:block">Your music companion</p>
    </div>
  </header>
</template>
