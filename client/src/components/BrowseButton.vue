<script setup>
import { useRouter } from 'vue-router'

// Accept a 'to' prop
const props = defineProps({
  to: {
    type: String,
    default: '/songs',
  },
})

const router = useRouter()

function go() {
  router.push(props.to)
}
</script>

<template>
  <button
    @click="go"
    class="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl hover:shadow-purple-500/25 transform hover:-translate-y-0.5 transition-all duration-300 flex items-center space-x-2 group"
  >
    <span>Browse</span>
    <svg
      class="w-4 h-4 transform group-hover:translate-x-1 transition-transform"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
    </svg>
  </button>
</template>
