<template>
  <div class="min-h-screen bg-gradient-to-br from-sky-50 via-blue-50 to-cyan-100 flex flex-col">
    <MainHeader />

    <!-- Page Title -->
    <div class="p-8 flex justify-center">
      <div class="text-center">
        <h2
          class="text-4xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent mb-2"
        >
          Add New Song
        </h2>
        <p class="text-gray-500 text-sm">Share your music with the world</p>
      </div>
    </div>

    <!-- Create Song Form -->
    <div class="flex-1 flex justify-center p-4">
      <div
        class="border border-cyan-200 rounded-2xl shadow-lg w-full max-w-lg bg-white/90 backdrop-blur-sm p-6"
      >
        <form class="space-y-6">
          <!-- Song Title -->
          <div class="group">
            <label for="title" class="block text-sm font-semibold text-gray-700 mb-2">
              Song Title
            </label>
            <div>
              <input
                type="text"
                v-model="title"
                id="title"
                placeholder="Enter song title"
                autocomplete="off"
                class="border border-gray-200 w-full py-3 px-4 rounded-xl bg-white/80 text-gray-900 focus:ring-2 focus:ring-cyan-500/20 focus:border-cyan-500 transition-all duration-300 placeholder-gray-400 group-hover:border-cyan-300"
              />
            </div>
          </div>

          <!-- Artist -->
          <div class="group">
            <label for="artist" class="block text-sm font-semibold text-gray-700 mb-2">
              Artist
            </label>
            <div>
              <input
                type="text"
                v-model="artist"
                id="artist"
                placeholder="Enter artist name"
                autocomplete="off"
                class="border border-gray-200 w-full py-3 px-4 rounded-xl bg-white/80 text-gray-900 focus:ring-2 focus:ring-cyan-500/20 focus:border-cyan-500 transition-all duration-300 placeholder-gray-400 group-hover:border-cyan-300"
              />
            </div>
          </div>

          <!-- Album -->
          <div class="group">
            <label for="album" class="block text-sm font-semibold text-gray-700 mb-2">
              Album (Optional)
            </label>
            <div>
              <input
                type="text"
                v-model="album"
                id="album"
                placeholder="Enter album name"
                autocomplete="off"
                class="border border-gray-200 w-full py-3 px-4 rounded-xl bg-white/80 text-gray-900 focus:ring-2 focus:ring-cyan-500/20 focus:border-cyan-500 transition-all duration-300 placeholder-gray-400 group-hover:border-cyan-300"
              />
            </div>
          </div>

          <!-- Genre & YouTube ID -->
          <div class="grid grid-cols-2 gap-4">
            <div class="group">
              <label for="genre" class="block text-sm font-semibold text-gray-700 mb-2">
                Genre
              </label>
              <select
                v-model="genre"
                id="genre"
                class="border border-gray-200 w-full py-3 px-4 rounded-xl bg-white/80 text-gray-900 focus:ring-2 focus:ring-cyan-500/20 focus:border-cyan-500 transition-all duration-300 group-hover:border-cyan-300"
              >
                <option value="" disabled selected>Select genre</option>
                <option value="pop">Pop</option>
                <option value="rock">Rock</option>
                <option value="hiphop">Hip Hop</option>
                <option value="electronic">Electronic</option>
                <option value="jazz">Jazz</option>
                <option value="classical">Classical</option>
                <option value="country">Country</option>
                <option value="r&b">R&B</option>
              </select>
            </div>

            <div class="group">
              <label for="youtubeId" class="block text-sm font-semibold text-gray-700 mb-2">
                YouTube ID
              </label>
              <div>
                <input
                  type="text"
                  v-model="youtubeId"
                  id="youtubeId"
                  placeholder="YouTube video ID"
                  autocomplete="off"
                  class="border border-gray-200 w-full py-3 px-4 rounded-xl bg-white/80 text-gray-900 focus:ring-2 focus:ring-cyan-500/20 focus:border-cyan-500 transition-all duration-300 placeholder-gray-400 group-hover:border-cyan-300"
                />
              </div>
            </div>
          </div>

          <!-- Album Image URL -->
          <div class="group">
            <label for="albumImage" class="block text-sm font-semibold text-gray-700 mb-2">
              Album Image URL (Optional)
            </label>
            <div>
              <input
                type="text"
                v-model="albumImage"
                id="albumImage"
                placeholder="https://example.com/album-cover.jpg"
                autocomplete="off"
                class="border border-gray-200 w-full py-3 px-4 rounded-xl bg-white/80 text-gray-900 focus:ring-2 focus:ring-cyan-500/20 focus:border-cyan-500 transition-all duration-300 placeholder-gray-400 group-hover:border-cyan-300"
              />
            </div>
          </div>

          <!-- Lyrics -->
          <div class="group">
            <label for="lyrics" class="block text-sm font-semibold text-gray-700 mb-2">
              Lyrics (Optional)
            </label>
            <div>
              <textarea
                v-model="lyrics"
                id="lyrics"
                placeholder="Enter song lyrics"
                rows="4"
                class="border border-gray-200 w-full py-3 px-4 rounded-xl bg-white/80 text-gray-900 focus:ring-2 focus:ring-cyan-500/20 focus:border-cyan-500 transition-all duration-300 placeholder-gray-400 group-hover:border-cyan-300 resize-none"
              ></textarea>
            </div>
          </div>

          <!-- Tab -->
          <div class="group">
            <label for="tab" class="block text-sm font-semibold text-gray-700 mb-2">
              Guitar Tab (Optional)
            </label>
            <div>
              <textarea
                v-model="tab"
                id="tab"
                placeholder="Enter guitar tab"
                rows="4"
                class="border border-gray-200 w-full py-3 px-4 rounded-xl bg-white/80 text-gray-900 focus:ring-2 focus:ring-cyan-500/20 focus:border-cyan-500 transition-all duration-300 placeholder-gray-400 group-hover:border-cyan-300 resize-none"
              ></textarea>
            </div>
          </div>

          <!-- Action Buttons -->
          <div class="flex space-x-4 pt-4">
            <button
              type="button"
              class="flex-1 py-3 px-4 bg-white border border-cyan-200 text-cyan-600 rounded-xl font-semibold hover:bg-cyan-50 hover:shadow-md transition-all duration-300"
            >
              Cancel
            </button>
            <button
              type="submit"
              class="flex-1 py-3 px-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-300 flex items-center justify-center"
            >
              <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 4v16m8-8H4"
                ></path>
              </svg>
              Create Song
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import MainHeader from '@/components/MainHeader.vue'

const title = ref('')
const artist = ref('')
const album = ref('')
const genre = ref('')
const albumImage = ref('')
const youtubeId = ref('')
const lyrics = ref('')
const tab = ref('')
</script>
