<template>
  <div class="relative rounded-xl overflow-hidden shadow-md bg-gray-900">
    <iframe
      v-if="validVideoId"
      :src="`https://www.youtube.com/embed/${validVideoId}?modestbranding=1&rel=0`"
      title="YouTube video player"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
      class="w-full h-48"
    ></iframe>

    <div
      v-else
      class="flex items-center justify-center w-full h-48 bg-gray-800 text-gray-400 rounded-xl"
    >
      <div class="text-center">
        <svg class="w-8 h-8 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
          />
        </svg>
        <p class="text-sm">Video not available</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  videoId: {
    type: String,
    default: '',
  },
})

const extractYouTubeId = (input) => {
  if (!input) return null
  const regex =
    // eslint-disable-next-line no-useless-escape
    /(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)?([^"&?\/\s]{11})/
  const match = input.match(regex)
  return match ? match[1] : null
}

const validVideoId = computed(() => extractYouTubeId(props.videoId))
</script>
