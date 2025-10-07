<template>
  <BackgroundWrapper>
    <MainHeader />

    <div class="p-8">
      <div class="max-w-4xl mx-auto">
        <!-- Song Header -->
        <div class="mb-8">
          <div class="flex justify-between items-start mb-6">
            <div>
              <h1
                class="text-4xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent mb-2"
              >
                {{ song.title }}
              </h1>
              <div class="flex items-center space-x-4 text-gray-600">
                <p class="flex items-center space-x-1">
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M15.75 8.25a4.5 4.5 0 01-4.5 4.5m0 0a4.5 4.5 0 01-4.5-4.5m4.5 4.5a4.5 4.5 0 004.5 4.5m0 0a4.5 4.5 0 004.5-4.5m-4.5 0"
                    ></path>
                  </svg>
                  <span class="font-medium">{{ song.artist }}</span>
                </p>
                <span class="text-gray-300">•</span>
                <p
                  class="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium"
                >
                  {{ song.genre }}
                </p>
              </div>
            </div>

            <button
              @click="$router.back()"
              class="bg-white border border-cyan-200 text-cyan-600 px-5 py-2.5 rounded-xl font-semibold hover:bg-gradient-to-r hover:from-cyan-600 hover:to-blue-600 hover:text-white hover:shadow-lg hover:shadow-cyan-500/25 transform hover:-translate-y-0.5 transition-all duration-300 flex items-center space-x-2"
            >
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M10 19l-7-7m0 0l7-7m-7 7h18"
                />
              </svg>
              <span>Back</span>
            </button>
          </div>
        </div>

        <!-- Content Tabs -->
        <div class="mb-6">
          <div
            class="flex space-x-1 bg-white/70 backdrop-blur-sm rounded-2xl p-1.5 border border-white/50 shadow-sm max-w-md"
          >
            <button
              @click="activeTab = 'tab'"
              :class="[
                'flex-1 py-2.5 px-4 rounded-xl font-medium transition-all duration-300',
                activeTab === 'tab'
                  ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-md'
                  : 'text-gray-600 hover:text-gray-900',
              ]"
            >
              Guitar Tab
            </button>
            <button
              @click="activeTab = 'lyrics'"
              :class="[
                'flex-1 py-2.5 px-4 rounded-xl font-medium transition-all duration-300',
                activeTab === 'lyrics'
                  ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-md'
                  : 'text-gray-600 hover:text-gray-900',
              ]"
            >
              Lyrics
            </button>
          </div>
        </div>

        <!-- Content Area -->
        <div class="relative">
          <div
            class="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-blue-500/5 rounded-2xl"
          ></div>

          <div
            class="relative bg-white/90 backdrop-blur-sm border border-white/50 rounded-2xl shadow-lg p-8"
          >
            <!-- Guitar Tab -->
            <div v-if="activeTab === 'tab'" class="transition-all duration-300">
              <div class="flex justify-between items-center mb-6">
                <h3 class="text-xl font-bold text-gray-800">Guitar Tab</h3>
                <button
                  class="text-cyan-600 hover:text-cyan-700 font-medium text-sm flex items-center space-x-1"
                >
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                    />
                  </svg>
                  <span>Copy Tab</span>
                </button>
              </div>

              <div class="bg-gray-50 rounded-xl p-6 border border-gray-100">
                <pre class="font-mono text-gray-800 whitespace-pre-wrap text-sm md:text-base">{{
                  song.tab
                }}</pre>
              </div>
            </div>

            <!-- Lyrics -->
            <div v-if="activeTab === 'lyrics'" class="transition-all duration-300">
              <div class="flex justify-between items-center mb-6">
                <h3 class="text-xl font-bold text-gray-800">Lyrics</h3>
                <button
                  class="text-cyan-600 hover:text-cyan-700 font-medium text-sm flex items-center space-x-1"
                >
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                    />
                  </svg>
                  <span>Copy Lyrics</span>
                </button>
              </div>

              <div class="bg-gray-50 rounded-xl p-6 border border-gray-100">
                <pre class="font-mono text-gray-800 whitespace-pre-wrap text-sm md:text-base">{{
                  song.lyrics
                }}</pre>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </BackgroundWrapper>
</template>

<script setup>
import SongService from '@/services/SongService'
import MainHeader from '@/components/MainHeader.vue'
import BackgroundWrapper from '@/components/BackgroundWrapper.vue'
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'

const song = ref({
  title: '',
  artist: '',
  genre: '',
  tab: '',
  lyrics: '',
})
const activeTab = ref('tab') // Default to showing tab
const route = useRoute()

onMounted(async () => {
  try {
    const songId = route.params.songsId
    const response = await SongService.show(songId)
    song.value = response.data
    console.log('fetched songs', response.data)
  } catch (error) {
    console.log('there was an error', error)
  }
})
</script>
