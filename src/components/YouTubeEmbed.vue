<template>
  <div class="youtube-embed-container transition-all duration-300">
    <div v-if="youtubeUrl" class="youtube-content">
      <div class="flex justify-between items-center mb-6">
        <h3 class="text-xl font-bold text-gray-800">YouTube Video</h3>
        <a
          :href="youtubeUrl"
          target="_blank"
          class="text-cyan-600 hover:text-cyan-700 font-medium text-sm flex items-center space-x-1"
        >
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
            />
          </svg>
          <span>Watch on YouTube</span>
        </a>
      </div>

      <!-- YouTube Embed -->
      <div class="bg-gray-900 rounded-2xl overflow-hidden shadow-lg">
        <div class="aspect-w-16 aspect-h-9">
          <iframe
            :src="embedUrl"
            class="w-full h-96 md:h-[480px]"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
      </div>

      <!-- Video Info -->
      <div class="mt-4 p-4 bg-gray-50 rounded-xl">
        <p class="text-sm text-gray-600 break-all"><strong>URL:</strong> {{ youtubeUrl }}</p>
      </div>
    </div>

    <!-- Empty State -->
    <div v-else class="text-center py-12">
      <div
        class="w-20 h-20 bg-gradient-to-br from-red-100 to-red-200 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg"
      >
        <svg class="w-10 h-10 text-red-500" fill="currentColor" viewBox="0 0 24 24">
          <path
            d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"
          />
        </svg>
      </div>
      <h3 class="text-xl font-bold text-gray-700 mb-2">No YouTube video</h3>
      <p class="text-gray-500">This song doesn't have a YouTube video associated with it.</p>
    </div>
  </div>
</template>

<script setup>
import { defineProps, computed } from 'vue'

const props = defineProps({
  youtubeUrl: {
    type: String,
    default: '',
  },
  activeTab: {
    type: String,
    default: '',
  },
})

// Extract YouTube ID from URL for embedding
const extractYouTubeId = (url) => {
  if (!url) return null

  const regex =
    /(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/
  const match = url.match(regex)
  return match ? match[1] : null
}

// Computed property for embed URL
const embedUrl = computed(() => {
  if (!props.youtubeUrl) return ''

  const videoId = extractYouTubeId(props.youtubeUrl)
  if (!videoId) return ''

  return `https://www.youtube.com/embed/${videoId}?modestbranding=1&rel=0`
})
</script>

<style scoped>
.aspect-w-16 {
  position: relative;
  padding-bottom: 56.25%; /* 16:9 aspect ratio */
}

.aspect-w-16 > * {
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
}
</style>
