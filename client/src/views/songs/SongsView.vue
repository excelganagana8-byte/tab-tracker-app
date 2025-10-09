<template>
  <div
    class="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex flex-col transition-colors"
  >
    <!-- <MainHeader /> -->
    <Nav />

    <div class="p-8">
      <div class="max-w-2xl mx-auto flex justify-between items-center">
        <div class="text-center">
          <h2
            class="text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-2"
          >
            All Songs
          </h2>
          <p class="text-gray-400 text-sm">
            {{ songs.length }} {{ songs.length === 1 ? 'song' : 'songs' }}
            <span v-if="searchTerm">matching "{{ searchTerm }}"</span>
            <span v-else>in your collection</span>
          </p>
        </div>

        <button
          @click="go"
          class="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl hover:shadow-purple-500/25 transform hover:-translate-y-0.5 transition-all duration-300 flex items-center space-x-2"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="2"
            stroke="currentColor"
            class="w-5 h-5"
          >
            <path stroke-linecap="round" stroke-linejoin="round" d="M12 4v16m8-8H4" />
          </svg>
          <span>Add Song</span>
        </button>
      </div>
    </div>
    <SongSearch v-model:search="searchTerm" />

    <!-- Song List -->
    <div v-if="songs.length" class="flex-1 max-w-2xl mx-auto w-full p-6 space-y-4">
      <ul class="space-y-4">
        <li v-for="(song, index) in songs" :key="song._id" class="group relative">
          <div
            class="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-2xl transform group-hover:scale-105 transition-all duration-300"
          ></div>
          <div
            class="relative bg-white/10 backdrop-blur-sm border border-white/10 rounded-2xl shadow-sm group-hover:shadow-2xl group-hover:border-purple-400/30 transition-all duration-300 p-6 flex justify-between items-center"
          >
            <div class="flex items-center space-x-4">
              <div
                class="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center shadow-lg shadow-purple-500/25 group-hover:scale-110 transition-transform duration-300"
              >
                <span class="text-white font-bold text-sm">{{ index + 1 }}</span>
              </div>
              <div>
                <p
                  class="text-lg font-semibold text-white tracking-tight group-hover:text-purple-100 transition-colors"
                >
                  {{ song.title }}
                </p>
                <p
                  class="text-sm text-gray-400 group-hover:text-gray-300 transition-colors flex items-center space-x-1"
                >
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M15.75 8.25a4.5 4.5 0 01-4.5 4.5m0 0a4.5 4.5 0 01-4.5-4.5m4.5 4.5a4.5 4.5 0 004.5 4.5m0 0a4.5 4.5 0 004.5-4.5m-4.5 0"
                    ></path>
                  </svg>
                  <span>{{ song.artist }}</span>
                </p>
              </div>
            </div>
            <button
              @click="view(song._id)"
              class="relative bg-white/10 border border-purple-400/30 text-purple-300 px-5 py-2.5 rounded-xl font-semibold hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500 hover:text-white hover:shadow-lg hover:shadow-purple-500/25 transform hover:-translate-y-0.5 transition-all duration-300 flex items-center space-x-2 group/btn"
            >
              <span>View</span>
              <svg
                class="w-4 h-4 transform group-hover/btn:translate-x-1 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 5l7 7-7 7"
                ></path>
              </svg>
            </button>
          </div>
        </li>
      </ul>
    </div>

    <!-- No Search Results State -->
    <div v-else-if="searchTerm" class="flex-1 flex items-center justify-center p-8">
      <div class="text-center max-w-md">
        <div
          class="w-24 h-24 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-lg backdrop-blur-sm"
        >
          <svg
            class="w-12 h-12 text-purple-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1.5"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            ></path>
          </svg>
        </div>
        <h3 class="text-2xl font-bold text-white mb-2">No songs found</h3>
        <p class="text-gray-400 mb-6">
          No songs found matching "{{ searchTerm }}". Try searching by title or artist name.
        </p>
        <button
          @click="clearSearch"
          class="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl hover:shadow-purple-500/25 transform hover:-translate-y-0.5 transition-all duration-300"
        >
          Clear Search
        </button>
      </div>
    </div>

    <!-- Empty Collection State -->
    <div v-else class="flex-1 flex items-center justify-center p-8">
      <div class="text-center max-w-md">
        <div
          class="w-24 h-24 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-lg backdrop-blur-sm"
        >
          <svg
            class="w-12 h-12 text-purple-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1.5"
              d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3"
            ></path>
          </svg>
        </div>
        <h3 class="text-2xl font-bold text-white mb-2">No songs yet</h3>
        <p class="text-gray-400 mb-6">
          Start building your music collection by adding your first song
        </p>
        <button
          @click="go"
          class="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl hover:shadow-purple-500/25 transform hover:-translate-y-0.5 transition-all duration-300"
        >
          Add First Song
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import Nav from '@/components/Nav.vue'
import SongService from '@/services/SongService'
import SongSearch from '@/components/SongSearch.vue'
import { onMounted, ref, watch } from 'vue'
import { useRouter } from 'vue-router'

const songs = ref([])
const searchTerm = ref('')
const router = useRouter()

// Fetch songs function that can be reused
const fetchSongs = async (search = '') => {
  try {
    const response = await SongService.index({ search })
    songs.value = response.data
  } catch (error) {
    console.error('Error fetching songs:', error)
  }
}

// Initial load
onMounted(() => {
  fetchSongs(searchTerm.value)
})

// Watch search term and fetch songs
watch(searchTerm, (newSearch) => {
  fetchSongs(newSearch)
})

// Use named routes instead of string replacement (more reliable)
function go() {
  router.push({ name: 'createSong' }) // Use the route name
}

function view(songId) {
  // Option 1: Use named route (Recommended)
  router.push({ name: 'viewSong', params: { id: songId } })

  // Option 2: Use path (Alternative)
  // router.push(`/songs/${songId}`)
}

function clearSearch() {
  searchTerm.value = ''
}
</script>
