<template>
  <div
    class="min-h-screen bg-gradient-to-br from-sky-50 via-blue-50 to-cyan-100 flex flex-col transition-colors"
  >
    <MainHeader />

    <!-- Page Title -->
    <div class="p-8 flex justify-center">
      <div class="text-center">
        <h2
          class="text-4xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent mb-2"
        >
          All Songs
        </h2>
        <p class="text-gray-500 text-sm">{{ songs.length }} songs in your collection</p>
      </div>
    </div>

    <!-- Song List -->
    <div v-if="songs.length" class="flex-1 max-w-2xl mx-auto w-full p-6 space-y-4">
      <ul class="space-y-4">
        <li v-for="(song, index) in songs" :key="song._id" class="group relative">
          <div
            class="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-blue-500/5 rounded-2xl transform group-hover:scale-105 transition-all duration-300"
          ></div>
          <div
            class="relative bg-white/90 backdrop-blur-sm border border-white/50 rounded-2xl shadow-sm group-hover:shadow-2xl group-hover:border-cyan-200/50 transition-all duration-300 p-6 flex justify-between items-center"
          >
            <div class="flex items-center space-x-4">
              <div
                class="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300"
              >
                <span class="text-white font-bold text-sm">{{ index + 1 }}</span>
              </div>
              <div>
                <p
                  class="text-lg font-semibold text-gray-800 tracking-tight group-hover:text-gray-900 transition-colors"
                >
                  {{ song.title }}
                </p>
                <p
                  class="text-sm text-gray-500 group-hover:text-gray-600 transition-colors flex items-center space-x-1"
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
              class="relative bg-white border border-cyan-200 text-cyan-600 px-5 py-2.5 rounded-xl font-semibold hover:bg-gradient-to-r hover:from-cyan-600 hover:to-blue-600 hover:text-white hover:shadow-lg hover:shadow-cyan-500/25 transform hover:-translate-y-0.5 transition-all duration-300 flex items-center space-x-2 group/btn"
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

    <!-- Empty State -->
    <div v-else class="flex-1 flex items-center justify-center p-8">
      <div class="text-center max-w-md">
        <div
          class="w-24 h-24 bg-gradient-to-br from-cyan-100 to-blue-100 rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-lg"
        >
          <svg
            class="w-12 h-12 text-cyan-400"
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
        <h3 class="text-2xl font-bold text-gray-700 mb-2">No songs yet</h3>
        <p class="text-gray-500 mb-6">
          Start building your music collection by adding your first song
        </p>
        <button
          class="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-300"
        >
          Add First Song
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import MainHeader from '@/components/MainHeader.vue'
import SongService from '@/services/SongService'
import { onMounted, ref } from 'vue'

const songs = ref([])

onMounted(async () => {
  try {
    const response = await SongService.index()
    songs.value = response.data
  } catch (error) {
    console.error('Error fetching songs:', error)
  }
})
</script>
