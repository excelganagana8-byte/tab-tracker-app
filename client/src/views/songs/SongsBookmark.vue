<script setup>
import { onMounted, ref } from 'vue'
import { useAuthStore } from '@/stores/auth'
import { useRouter } from 'vue-router'
import BookmarksServices from '@/services/BookmarksServices'

const auth = useAuthStore()
const router = useRouter()

const bookmarks = ref([])
const loading = ref(true)
const errorMessage = ref('')

async function removeBookmark(songId) {
  try {
    const userId = auth.user?.id
    await BookmarksServices.delete(songId, userId)
    bookmarks.value = bookmarks.value.filter((b) => b.song._id !== songId)
    console.log('Bookmark removed successfully')
  } catch (error) {
    console.error('Error removing bookmark:', error)
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
  if (!auth.isLoggedIn) {
    console.log('User not logged in — redirecting...')
    router.push('/login')
    return
  }

  try {
    console.log('Fetching bookmarks for user:', auth.user?.id)
    const { data } = await BookmarksServices.index(auth.user?.id)

    // 🕒 Sort bookmarks by date in descending order
    bookmarks.value = data.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
    console.log('Fetched bookmarks (sorted):', bookmarks.value)
  } catch (error) {
    console.error('Error fetching bookmarks:', error)
    errorMessage.value = 'Failed to load bookmarks. Try again later.'
  } finally {
    loading.value = false
  }
})
</script>

<template>
  <div class="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
    <!-- <Nav /> -->

    <!-- Main Content -->
    <main class="container mx-auto px-3 xs:px-4 sm:px-6 py-6 sm:py-8 md:py-12">
      <!-- Header Section -->
      <div class="text-center mb-8 sm:mb-12 md:mb-16">
        <h1 class="text-3xl xs:text-4xl sm:text-5xl md:text-6xl font-bold mb-3 sm:mb-4 md:mb-6">
          <span
            class="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent"
          >
            Your Bookmarks
          </span>
        </h1>
        <p
          class="text-base xs:text-lg sm:text-xl text-gray-300 mb-4 sm:mb-6 md:mb-8 flex items-center justify-center gap-1 xs:gap-2 flex-wrap"
        >
          <span class="text-lg xs:text-xl sm:text-2xl">🎵</span>
          <span
            class="bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text text-transparent font-semibold"
          >
            Your saved songs
          </span>
          <span class="text-lg xs:text-xl sm:text-2xl">🎶</span>
        </p>
      </div>

      <!-- Bookmarks Grid -->
      <div v-if="loading" class="flex justify-center items-center py-12">
        <div class="text-center">
          <div
            class="inline-block animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-purple-500 mb-4"
          ></div>
          <p class="text-gray-400 text-lg">Loading your bookmarks...</p>
        </div>
      </div>

      <div
        v-else-if="errorMessage"
        class="bg-red-500/10 backdrop-blur-lg rounded-2xl p-6 border border-red-500/30 text-center max-w-md mx-auto"
      >
        <svg
          class="w-12 h-12 text-red-400 mx-auto mb-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          ></path>
        </svg>
        <h3 class="text-xl font-semibold text-white mb-2">Something went wrong</h3>
        <p class="text-gray-300">{{ errorMessage }}</p>
        <button
          @click="router.push('/')"
          class="mt-4 px-6 py-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl text-white font-semibold hover:shadow-2xl hover:shadow-purple-500/30 transition-all transform hover:-translate-y-1"
        >
          Go Home
        </button>
      </div>

      <div
        v-else-if="bookmarks.length === 0"
        class="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 text-center max-w-md mx-auto"
      >
        <svg
          class="w-16 h-16 text-purple-400 mx-auto mb-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"
          ></path>
        </svg>
        <h3 class="text-xl font-semibold text-white mb-2">No bookmarks yet</h3>
        <p class="text-gray-300 mb-6">Start saving your favorite songs to see them here!</p>
        <button
          @click="router.push('/songs')"
          class="px-6 py-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl text-white font-semibold hover:shadow-2xl hover:shadow-purple-500/30 transition-all transform hover:-translate-y-1"
        >
          Browse Songs
        </button>
      </div>

      <div v-else class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 xs:gap-6 sm:gap-8">
        <div
          v-for="bookmark in bookmarks"
          :key="bookmark._id"
          class="bg-white/5 backdrop-blur-lg rounded-2xl p-4 xs:p-5 sm:p-6 border border-white/10 hover:border-purple-500/30 transition-all group"
        >
          <div class="flex justify-between items-start mb-3">
            <div class="flex items-center space-x-2 xs:space-x-3">
              <div
                class="w-8 h-8 xs:w-10 xs:h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center flex-shrink-0"
              >
                <svg
                  class="w-4 h-4 xs:w-5 xs:h-5 text-white"
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
                <h3 class="text-white font-semibold text-base xs:text-lg truncate">
                  {{ bookmark.song.title }}
                </h3>
                <p class="text-gray-400 text-xs xs:text-sm truncate">{{ bookmark.song.artist }}</p>
              </div>
            </div>
            <button
              @click="removeBookmark(bookmark.song._id)"
              class="text-gray-400 hover:text-red-400 transition-colors p-1 rounded-full hover:bg-red-500/10"
              title="Remove bookmark"
            >
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                ></path>
              </svg>
            </button>
          </div>

          <div class="flex justify-between items-center mt-4">
            <button
              @click="router.push({ name: 'songView', params: { id: bookmark.song._id } })"
              class="px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl text-white font-semibold hover:shadow-2xl hover:shadow-purple-500/30 transition-all transform hover:-translate-y-0.5 text-xs xs:text-sm"
            >
              View Song
            </button>

            <div class="text-xs text-gray-400">Saved {{ formatDate(bookmark.createdAt) }}</div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<style scoped>
/* Custom styles can be added here if needed */
</style>
