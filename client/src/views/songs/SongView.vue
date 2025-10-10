<script setup>
import SongService from '@/services/SongService'
import BookmarksServices from '@/services/BookmarksServices'
import BackgroundWrapper from '@/components/BackgroundWrapper.vue'
import YouTubeEmbed from '@/components/YouTubeEmbed.vue'
import { useAuthStore } from '@/stores/auth'
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
const isBookmarked = ref(false)
const auth = useAuthStore()
// Copy to clipboard function
const copyToClipboard = async (text) => {
  try {
    await navigator.clipboard.writeText(text)
    console.log('Copied to clipboard!')
  } catch (err) {
    console.error('Failed to copy: ', err)
  }
}

const edit = (songId) => {
  // Use named route for edit
  router.push({ name: 'editSong', params: { id: songId } })
}
async function setASBookmark() {
  try {
    const userId = auth.user?.id //'68e2d5c7615e3e58ef5a8bfe'
    const songId = song.value._id

    await BookmarksServices.create({ user: userId, song: songId })
    isBookmarked.value = true
  } catch (error) {
    console.error('Error adding bookmark:', error)
  }
}

async function removeBookmark() {
  try {
    const userId = auth.user?.id //'68e2d5c7615e3e58ef5a8bfe'
    const songId = song.value._id

    await BookmarksServices.delete(songId, userId)
    isBookmarked.value = false
  } catch (error) {
    console.error('Error removing bookmark:', error)
  }
}

onMounted(async () => {
  try {
    const songId = route.params.id
    const userId = auth.user?.id //'68e2d5c7615e3e58ef5a8bfe' /👈 Replace later with real logged-in user

    if (!songId) {
      console.error('❌ No song ID found in route parameters')
      return
    }

    console.log('🎵 Fetching song with ID:', songId)

    // 1️⃣ Fetch song info
    const songResponse = await SongService.show(songId)
    song.value = songResponse.data
    console.log('✅ Fetched song:', songResponse.data)

    // 2️⃣ Fetch user bookmarks
    const { data: bookmarks } = await BookmarksServices.index(userId)
    console.log('📚 User bookmarks:', bookmarks)

    // 3️⃣ Check if this song is bookmarked
    isBookmarked.value = bookmarks.some((b) => b.song._id === songId)
    console.log('🔖 isBookmarked:', isBookmarked.value)
  } catch (error) {
    console.error('🔥 Error fetching song or bookmarks:', error)
  }
})
</script>

<template>
  <BackgroundWrapper>
    <div class="p-4 md:p-8">
      <div class="max-w-7xl mx-auto">
        <!-- Main Content Grid -->
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
          <!-- Left Column - Song Info & Content -->
          <div class="lg:col-span-2">
            <!-- Song Header -->
            <div class="mb-6 md:mb-8">
              <div class="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4 mb-6">
                <div class="flex-1">
                  <h1
                    class="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-2"
                  >
                    {{ song.title }}
                  </h1>
                  <div
                    class="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-gray-400"
                  >
                    <p class="flex items-center space-x-1">
                      <svg
                        class="w-4 h-4 sm:w-5 sm:h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M15.75 8.25a4.5 4.5 0 01-4.5 4.5m0 0a4.5 4.5 0 01-4.5-4.5m4.5 4.5a4.5 4.5 0 004.5 4.5m0 0a4.5 4.5 0 004.5-4.5m-4.5 0"
                        ></path>
                      </svg>
                      <span class="font-medium text-white text-sm sm:text-base">{{
                        song.artist
                      }}</span>
                    </p>
                    <span class="hidden sm:inline text-gray-500">•</span>
                    <p
                      class="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium w-fit"
                    >
                      {{ song.genre }}
                    </p>
                  </div>
                </div>

                <!-- Action Buttons Group -->
                <div class="flex items-center space-x-2 sm:space-x-3">
                  <!-- Back Button -->
                  <button
                    @click="$router.back()"
                    class="bg-white/10 border border-purple-400/30 text-purple-300 px-3 sm:px-5 py-2 sm:py-2.5 rounded-xl font-semibold hover:bg-white/20 hover:border-purple-300/50 hover:text-purple-200 hover:shadow-lg hover:shadow-purple-500/10 transform hover:-translate-y-0.5 transition-all duration-300 flex items-center space-x-2 text-sm sm:text-base"
                  >
                    <svg
                      class="w-3 h-3 sm:w-4 sm:h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M10 19l-7-7m0 0l7-7m-7 7h18"
                      />
                    </svg>
                    <span class="hidden sm:inline">Back</span>
                  </button>

                  <!-- Edit Button -->
                  <button
                    @click="edit(song._id)"
                    class="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-3 sm:px-5 py-2 sm:py-2.5 rounded-xl font-semibold hover:from-purple-600 hover:to-pink-600 hover:shadow-lg hover:shadow-purple-500/25 transform hover:-translate-y-0.5 transition-all duration-300 flex items-center space-x-2 text-sm sm:text-base"
                  >
                    <svg
                      class="w-3 h-3 sm:w-4 sm:h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                      />
                    </svg>
                    <span class="hidden sm:inline">Edit</span>
                  </button>
                </div>
              </div>
            </div>

            <!-- Content Tabs -->
            <div class="mb-4 md:mb-6">
              <div
                class="flex space-x-1 bg-white/10 backdrop-blur-sm rounded-2xl p-1.5 border border-white/10 shadow-sm max-w-md"
              >
                <button
                  @click="activeTab = 'tab'"
                  :class="[
                    'flex-1 py-2 sm:py-2.5 px-3 sm:px-4 rounded-xl font-medium transition-all duration-300 text-sm sm:text-base',
                    activeTab === 'tab'
                      ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-md'
                      : 'text-gray-400 hover:text-white',
                  ]"
                >
                  Guitar Tab
                </button>
                <button
                  @click="activeTab = 'lyrics'"
                  :class="[
                    'flex-1 py-2 sm:py-2.5 px-3 sm:px-4 rounded-xl font-medium transition-all duration-300 text-sm sm:text-base',
                    activeTab === 'lyrics'
                      ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-md'
                      : 'text-gray-400 hover:text-white',
                  ]"
                >
                  Lyrics
                </button>

                <!-- Bookmark Icon Button -->
                <button
                  v-if="!isBookmarked"
                  @click="setASBookmark"
                  class="ml-2 p-2 sm:p-2.5 rounded-xl text-gray-400 hover:text-amber-400 hover:bg-amber-500/20 transition-all duration-300 flex items-center justify-center"
                >
                  <svg
                    class="w-4 h-4 sm:w-5 sm:h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"
                    />
                  </svg>
                </button>

                <!-- Bookmarked Icon Button -->
                <button
                  v-if="isBookmarked"
                  @click="removeBookmark"
                  class="ml-2 p-2 sm:p-2.5 rounded-xl text-amber-400 bg-amber-500/20 hover:bg-amber-500/30 transition-all duration-300 flex items-center justify-center"
                >
                  <svg class="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"
                    />
                  </svg>
                </button>
              </div>
            </div>

            <!-- Content Area -->
            <div class="relative">
              <div
                class="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-2xl"
              ></div>

              <div
                class="relative bg-white/10 backdrop-blur-sm border border-white/10 rounded-2xl shadow-lg p-4 sm:p-6 md:p-8"
              >
                <!-- Guitar Tab -->
                <div v-if="activeTab === 'tab'" class="transition-all duration-300">
                  <div
                    class="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2 mb-4 sm:mb-6"
                  >
                    <h3 class="text-lg sm:text-xl font-bold text-white">Guitar Tab</h3>
                    <button
                      @click="copyToClipboard(song.tab)"
                      class="text-purple-300 hover:text-purple-200 font-medium text-sm flex items-center space-x-1 transition-colors duration-200 w-fit"
                    >
                      <svg
                        class="w-3 h-3 sm:w-4 sm:h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
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
                    class="bg-white/5 rounded-xl p-4 sm:p-6 border border-white/10 max-h-64 sm:max-h-80 md:max-h-96 overflow-y-auto"
                  >
                    <pre
                      class="font-mono text-gray-200 whitespace-pre-wrap text-xs sm:text-sm md:text-base leading-relaxed"
                      >{{ song.tab }}</pre
                    >
                  </div>
                </div>

                <!-- Lyrics -->
                <div v-if="activeTab === 'lyrics'" class="transition-all duration-300">
                  <div
                    class="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2 mb-4 sm:mb-6"
                  >
                    <h3 class="text-lg sm:text-xl font-bold text-white">Lyrics</h3>
                    <button
                      @click="copyToClipboard(song.lyrics)"
                      class="text-purple-300 hover:text-purple-200 font-medium text-sm flex items-center space-x-1 transition-colors duration-200 w-fit"
                    >
                      <svg
                        class="w-3 h-3 sm:w-4 sm:h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
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
                    class="bg-white/5 rounded-xl p-4 sm:p-6 border border-white/10 max-h-64 sm:max-h-80 md:max-h-96 overflow-y-auto"
                  >
                    <pre
                      class="font-mono text-gray-200 whitespace-pre-wrap text-xs sm:text-sm md:text-base leading-relaxed"
                      >{{ song.lyrics }}</pre
                    >
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Right Column - YouTube Video -->
          <div class="lg:col-span-1">
            <div class="sticky top-4 md:top-8 space-y-4 md:space-y-6">
              <!-- Video Card -->
              <div
                class="bg-white/10 backdrop-blur-sm border border-white/10 rounded-2xl shadow-lg overflow-hidden"
              >
                <!-- Card Header -->
                <div class="bg-gradient-to-r from-purple-500 to-pink-500 p-3 sm:p-4">
                  <h3
                    class="text-white font-semibold flex items-center space-x-2 text-sm sm:text-base"
                  >
                    <svg class="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path
                        d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"
                      />
                    </svg>
                    <span>Video</span>
                  </h3>
                </div>

                <!-- Video Container -->
                <div class="p-3 sm:p-4">
                  <YouTubeEmbed
                    :videoId="song.youtubeId"
                    class="rounded-xl overflow-hidden shadow-md"
                  />

                  <!-- Video Info -->
                  <div class="mt-3 sm:mt-4 space-y-2 sm:space-y-3">
                    <div class="flex items-center justify-between text-xs sm:text-sm text-gray-400">
                      <span class="font-medium">Now Playing:</span>
                      <span class="text-purple-300 font-semibold truncate ml-2">{{
                        song.title
                      }}</span>
                    </div>

                    <!-- Quick Actions -->
                    <div class="flex space-x-2 pt-2">
                      <button
                        @click="activeTab = 'tab'"
                        :class="[
                          'flex-1 py-2 px-2 sm:px-3 rounded-lg text-xs sm:text-sm font-medium transition-all duration-200',
                          activeTab === 'tab'
                            ? 'bg-purple-500 text-white shadow-sm'
                            : 'bg-white/5 text-gray-300 hover:bg-white/10',
                        ]"
                      >
                        View Tab
                      </button>
                      <button
                        @click="activeTab = 'lyrics'"
                        :class="[
                          'flex-1 py-2 px-2 sm:px-3 rounded-lg text-xs sm:text-sm font-medium transition-all duration-200',
                          activeTab === 'lyrics'
                            ? 'bg-purple-500 text-white shadow-sm'
                            : 'bg-white/5 text-gray-300 hover:bg-white/10',
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
                class="bg-white/10 backdrop-blur-sm border border-white/10 rounded-2xl shadow-lg p-3 sm:p-4"
              >
                <h4
                  class="font-semibold text-white mb-2 sm:mb-3 flex items-center space-x-2 text-sm sm:text-base"
                >
                  <svg
                    class="w-3 h-3 sm:w-4 sm:h-4 text-purple-400"
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
                <div class="space-y-1 sm:space-y-2 text-xs sm:text-sm text-gray-400">
                  <div class="flex justify-between">
                    <span>Artist:</span>
                    <span class="font-medium text-white truncate ml-2">{{ song.artist }}</span>
                  </div>
                  <div class="flex justify-between">
                    <span>Genre:</span>
                    <span class="font-medium text-white">{{ song.genre }}</span>
                  </div>
                  <div class="flex justify-between">
                    <span>Difficulty:</span>
                    <span class="font-medium text-purple-300">Intermediate</span>
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
