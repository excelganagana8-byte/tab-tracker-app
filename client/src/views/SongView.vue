<template>
  <BackgroundWrapper>
    <MainHeader />

    <div class="p-8">
      <div class="max-w-7xl mx-auto">
        <!-- Main Content Grid -->
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <!-- Left Column - Song Info & Content -->
          <div class="lg:col-span-2">
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

                <!-- Action Buttons Group -->
                <div class="flex items-center space-x-3">
                  <!-- Back Button -->
                  <button
                    @click="$router.back()"
                    class="bg-white border border-gray-200 text-gray-700 px-5 py-2.5 rounded-xl font-semibold hover:bg-gray-50 hover:border-gray-300 hover:text-gray-900 hover:shadow-lg hover:shadow-gray-500/10 transform hover:-translate-y-0.5 transition-all duration-300 flex items-center space-x-2"
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

                  <!-- Edit Button -->
                  <button
                    @click="edit(song._id)"
                    class="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-5 py-2.5 rounded-xl font-semibold hover:from-cyan-600 hover:to-blue-700 hover:shadow-lg hover:shadow-cyan-500/25 transform hover:-translate-y-0.5 transition-all duration-300 flex items-center space-x-2"
                  >
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                      />
                    </svg>
                    <span>Edit</span>
                  </button>
                </div>
              </div>
            </div>

            <!-- Rest of your content remains exactly the same -->
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
                      @click="copyToClipboard(song.tab)"
                      class="text-cyan-600 hover:text-cyan-700 font-medium text-sm flex items-center space-x-1 transition-colors duration-200"
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

                  <div
                    class="bg-gray-50 rounded-xl p-6 border border-gray-100 max-h-96 overflow-y-auto"
                  >
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
                      @click="copyToClipboard(song.lyrics)"
                      class="text-cyan-600 hover:text-cyan-700 font-medium text-sm flex items-center space-x-1 transition-colors duration-200"
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

                  <div
                    class="bg-gray-50 rounded-xl p-6 border border-gray-100 max-h-96 overflow-y-auto"
                  >
                    <pre class="font-mono text-gray-800 whitespace-pre-wrap text-sm md:text-base">{{
                      song.lyrics
                    }}</pre>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Right Column - YouTube Video -->
          <div class="lg:col-span-1">
            <div class="sticky top-8">
              <!-- Video Card -->
              <div
                class="bg-white/90 backdrop-blur-sm border border-white/50 rounded-2xl shadow-lg overflow-hidden"
              >
                <!-- Card Header -->
                <div class="bg-gradient-to-r from-cyan-500 to-blue-600 p-4">
                  <h3 class="text-white font-semibold flex items-center space-x-2">
                    <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path
                        d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"
                      />
                    </svg>
                    <span>Video</span>
                  </h3>
                </div>

                <!-- Video Container -->
                <div class="p-4">
                  <YouTubeEmbed
                    :videoId="song.youtubeId"
                    class="rounded-xl overflow-hidden shadow-md"
                  />

                  <!-- Video Info -->
                  <div class="mt-4 space-y-3">
                    <div class="flex items-center justify-between text-sm text-gray-600">
                      <span class="font-medium">Now Playing:</span>
                      <span class="text-cyan-600 font-semibold">{{ song.title }}</span>
                    </div>

                    <!-- Quick Actions -->
                    <div class="flex space-x-2 pt-2">
                      <button
                        @click="activeTab = 'tab'"
                        :class="[
                          'flex-1 py-2 px-3 rounded-lg text-sm font-medium transition-all duration-200',
                          activeTab === 'tab'
                            ? 'bg-cyan-500 text-white shadow-sm'
                            : 'bg-gray-100 text-gray-700 hover:bg-gray-200',
                        ]"
                      >
                        View Tab
                      </button>
                      <button
                        @click="activeTab = 'lyrics'"
                        :class="[
                          'flex-1 py-2 px-3 rounded-lg text-sm font-medium transition-all duration-200',
                          activeTab === 'lyrics'
                            ? 'bg-cyan-500 text-white shadow-sm'
                            : 'bg-gray-100 text-gray-700 hover:bg-gray-200',
                        ]"
                      >
                        View Lyrics
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Additional Info Card -->
              <div
                class="mt-6 bg-white/90 backdrop-blur-sm border border-white/50 rounded-2xl shadow-lg p-4"
              >
                <h4 class="font-semibold text-gray-800 mb-3 flex items-center space-x-2">
                  <svg
                    class="w-4 h-4 text-cyan-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <span>Song Info</span>
                </h4>
                <div class="space-y-2 text-sm text-gray-600">
                  <div class="flex justify-between">
                    <span>Artist:</span>
                    <span class="font-medium text-gray-800">{{ song.artist }}</span>
                  </div>
                  <div class="flex justify-between">
                    <span>Genre:</span>
                    <span class="font-medium text-gray-800">{{ song.genre }}</span>
                  </div>
                  <div class="flex justify-between">
                    <span>Difficulty:</span>
                    <span class="font-medium text-cyan-600">Intermediate</span>
                  </div>
                </div>
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
import YouTubeEmbed from '@/components/YouTubeEmbed.vue'
import { onMounted, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const song = ref({
  title: '',
  artist: '',
  genre: '',
  tab: '',
  lyrics: '',
  youtubeId: '',
})
const activeTab = ref('tab')
const route = useRoute()
const router = useRouter()

// Copy to clipboard function
const copyToClipboard = async (text) => {
  try {
    await navigator.clipboard.writeText(text)
    // You could add a toast notification here
    console.log('Copied to clipboard!')
  } catch (err) {
    console.error('Failed to copy: ', err)
  }
}

const edit = () => {
  const songId = route.params.songsId
  router.push(`/songs/${songId}/edit`)
}

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
