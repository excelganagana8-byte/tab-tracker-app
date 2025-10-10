<template>
  <div class="flex justify-center px-4 sm:px-6">
    <div class="relative w-full max-w-md lg:max-w-lg xl:max-w-xl">
      <input
        type="text"
        placeholder="Search by song title or artist..."
        class="p-3 md:p-4 border border-gray-300 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-pink-400 focus:border-transparent text-base placeholder-gray-500 pr-10 md:pr-12"
        v-model="search"
        @keyup.enter="handleSearch"
      />

      <!-- Clear button -->
      <button
        v-if="search"
        @click="clearSearch"
        class="absolute right-3 top-1/2 transform -translate-y-1/2 p-1 rounded-full hover:bg-gray-100 transition-colors text-gray-400"
        type="button"
      >
        <svg class="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M6 18L18 6M6 6l12 12"
          ></path>
        </svg>
      </button>

      <!-- Search icon -->
      <div
        v-else
        class="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none"
      >
        <svg class="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          ></path>
        </svg>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()
const emit = defineEmits(['update:search'])

// Initialize search from URL query
const search = ref(route.query.search || '')

// Debounce search to avoid too many API calls
let searchTimeout = null

watch(search, (newValue) => {
  // Clear previous timeout
  if (searchTimeout) {
    clearTimeout(searchTimeout)
  }

  // Set new timeout for debouncing
  searchTimeout = setTimeout(() => {
    // Update URL
    if (newValue) {
      router.replace({ name: 'songs', query: { search: newValue } })
    } else {
      router.replace({ name: 'songs' })
    }

    // Emit event to parent component
    emit('update:search', newValue)
  }, 300) // 300ms debounce delay
})

// Watch for URL changes (when user manually changes URL)
watch(
  () => route.query.search,
  (newQuery) => {
    if (newQuery !== search.value) {
      search.value = newQuery || ''
    }
  },
)

// Clear search function
const clearSearch = () => {
  search.value = ''
}
</script>
