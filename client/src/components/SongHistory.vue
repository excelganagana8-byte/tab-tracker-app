<script setup>
import { useAuthStore } from '@/stores/auth'
import SongHistoryService from '@/services/SongHistoryService'
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'

const authStore = useAuthStore()
const router = useRouter()

const history = ref([])
const loading = ref(true)
const errorMessage = ref('')

async function clearAllHistory() {
  try {
    const userId = authStore.user?._id || authStore.user?.id
    if (!userId) return

    const confirmDelete = confirm('Are you sure you want to clear all your history?')
    if (!confirmDelete) return

    await SongHistoryService.deleteAll(userId)
    history.value = [] // clears UI list
    console.log('All history cleared successfully')
  } catch (err) {
    console.error('Error clearing all history:', err)
    errorMessage.value = 'Failed to clear history. Please try again.'
  }
}

async function clearSingleHistory(songId) {
  try {
    const userId = authStore.user?._id || authStore.user?.id
    if (!userId) return

    const confirmDelete = confirm('Are you sure you want to remove this song from your history?')
    if (!confirmDelete) return

    await SongHistoryService.delete(songId, userId)
    history.value = history.value.filter((item) => item.song._id !== songId)
    console.log('Song removed from history successfully')
  } catch (err) {
    console.error('Error removing song from history:', err)
    errorMessage.value = 'Failed to remove song from history. Please try again.'
  }
}

function formatDate(dateString) {
  const date = new Date(dateString)
  const now = new Date()
  const diffTime = Math.abs(now - date)
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))

  if (diffDays === 1) return 'today'
  if (diffDays === 2) return 'yesterday'
  if (diffDays < 7) return `${diffDays - 1} days ago`
  if (diffDays < 30) return `${Math.floor(diffDays / 7)} weeks ago`

  return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })
}

onMounted(async () => {
  if (!authStore.isLoggedIn) {
    console.log('User not logged in — redirecting...')
    router.push('/login')
    return
  }

  try {
    console.log('Fetching history for user:', authStore.user?.id)
    const { data } = await SongHistoryService.index(authStore.user?.id)

    // 🕒 Sort history by date in descending order
    history.value = data.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
    console.log('Fetched history (sorted):', history.value)
  } catch (error) {
    console.error('Error fetching song history:', error)
    errorMessage.value = 'Failed to load history. Try again later.'
  } finally {
    loading.value = false
  }
})
</script>

<template>
  <!-- Recent Activity -->
  <div
    class="bg-white/5 backdrop-blur-lg rounded-2xl p-3 xs:p-4 sm:p-6 md:p-8 border border-white/10"
  >
    <div class="flex justify-between items-center mb-3 xs:mb-4 sm:mb-6">
      <h2 class="text-lg xs:text-xl sm:text-2xl font-bold text-white">
        {{ authStore.isLoggedIn ? 'Your Recent Activity' : 'Community Activity' }}
      </h2>
      <button
        v-if="authStore.isLoggedIn && history.length > 0"
        @click="clearAllHistory()"
        class="text-xs xs:text-sm text-gray-400 hover:text-red-400 transition-colors px-2 xs:px-3 py-1 hover:bg-white/5 rounded-lg border border-white/10"
        title="Clear all history"
      >
        Clear All
      </button>
    </div>

    <div v-if="loading" class="text-center py-8">
      <div class="text-white">Loading your history...</div>
    </div>

    <div v-else-if="errorMessage" class="text-center py-8">
      <div class="text-red-400">{{ errorMessage }}</div>
    </div>

    <div v-else-if="history.length === 0" class="text-center py-8">
      <div class="text-gray-400">No recent activity yet</div>
    </div>

    <div v-else class="space-y-2 xs:space-y-3 sm:space-y-4">
      <div
        v-for="item in history"
        :key="item._id"
        class="flex items-center justify-between p-2 xs:p-3 sm:p-4 bg-white/5 rounded-xl hover:bg-white/10 transition-colors"
      >
        <div class="flex items-center space-x-2 xs:space-x-3 sm:space-x-4 flex-1 min-w-0">
          <div
            class="w-6 h-6 xs:w-8 xs:h-8 sm:w-10 sm:h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center flex-shrink-0"
          >
            <svg
              class="w-3 h-3 xs:w-4 xs:h-4 sm:w-5 sm:h-5 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3"
              ></path>
            </svg>
          </div>
          <div class="min-w-0 flex-1">
            <h4 class="text-white font-medium text-sm xs:text-base truncate">
              {{ item.song?.title || 'Unknown Song' }}
            </h4>
            <p class="text-gray-400 text-xs truncate">
              {{ item.song?.artist || 'Unknown Artist' }} • {{ formatDate(item.createdAt) }}
            </p>
          </div>
        </div>

        <div class="flex items-center gap-2 xs:gap-3 ml-2 xs:ml-4">
          <div
            class="text-purple-300 font-semibold text-xs xs:text-sm sm:text-base whitespace-nowrap"
          >
            {{ Math.round(item.accuracy || 0) }}%
          </div>

          <button
            v-if="authStore.isLoggedIn"
            @click="
              () => {
                console.log('🧨 Delete clicked', item.song?._id)
                clearSingleHistory(item.song?._id)
              }
            "
            class="text-gray-400 hover:text-red-400 p-1 transition-colors flex-shrink-0"
            title="Remove from history"
          >
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
