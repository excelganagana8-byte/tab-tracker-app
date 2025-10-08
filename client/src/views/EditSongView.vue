<template>
  <BackgroundWrapper>
    <MainHeader />

    <PageHeader title="Edit Song" subtitle="Make new changes to your song" />

    <FormContainer>
      <form class="space-y-6" @submit.prevent="handleSubmit">
        <!-- Song Title -->
        <div>
          <FormInput
            id="title"
            label="Song Title"
            placeholder="Enter song title"
            v-model="title"
            :error="errors.title"
          />
          <p v-if="errors.title" class="text-red-500 text-sm mt-1 ml-1">{{ errors.title }}</p>
        </div>

        <!-- Artist -->
        <div>
          <FormInput
            id="artist"
            label="Artist"
            placeholder="Enter artist name"
            v-model="artist"
            :error="errors.artist"
          />
          <p v-if="errors.artist" class="text-red-500 text-sm mt-1 ml-1">{{ errors.artist }}</p>
        </div>

        <!-- Album -->
        <FormInput
          id="album"
          label="Album (Optional)"
          placeholder="Enter album name"
          v-model="album"
        />

        <!-- Genre & YouTube ID -->
        <div class="grid grid-cols-2 gap-4">
          <div class="group">
            <label for="genre" class="block text-sm font-semibold text-gray-700 mb-2">
              Genre
            </label>
            <select
              v-model="genre"
              id="genre"
              :class="[
                'border w-full py-3 px-4 rounded-xl bg-white/80 text-gray-900 focus:ring-2 focus:ring-cyan-500/20 transition-all duration-300 group-hover:border-cyan-300',
                errors.genre
                  ? 'border-red-500 focus:border-red-500'
                  : 'border-gray-200 focus:border-cyan-500',
              ]"
            >
              <option value="" disabled>Select genre</option>
              <option value="pop">Pop</option>
              <option value="rock">Rock</option>
              <option value="hiphop">Hip Hop</option>
              <option value="electronic">Electronic</option>
              <option value="jazz">Jazz</option>
              <option value="classical">Classical</option>
              <option value="country">Country</option>
              <option value="r&b">R&B</option>
            </select>
            <p v-if="errors.genre" class="text-red-500 text-sm mt-1">{{ errors.genre }}</p>
          </div>

          <FormInput
            id="youtubeId"
            label="YouTube ID"
            placeholder="YouTube video ID"
            v-model="youtubeId"
          />
        </div>

        <!-- Album Image URL -->
        <FormInput
          id="albumImage"
          label="Album Image URL (Optional)"
          placeholder="https://example.com/album-cover.jpg"
          v-model="albumImage"
        />

        <!-- Lyrics -->
        <div class="group">
          <label for="lyrics" class="block text-sm font-semibold text-gray-700 mb-2">
            Lyrics (Optional)
          </label>
          <textarea
            v-model="lyrics"
            id="lyrics"
            placeholder="Enter song lyrics"
            rows="4"
            class="border border-gray-200 w-full py-3 px-4 rounded-xl bg-white/80 text-gray-900 focus:ring-2 focus:ring-cyan-500/20 focus:border-cyan-500 transition-all duration-300 placeholder-gray-400 group-hover:border-cyan-300 resize-none"
          ></textarea>
        </div>

        <!-- Tab -->
        <div class="group">
          <label for="tab" class="block text-sm font-semibold text-gray-700 mb-2">
            Guitar Tab (Optional)
          </label>
          <textarea
            v-model="tab"
            id="tab"
            placeholder="Enter guitar tab"
            rows="4"
            class="border border-gray-200 w-full py-3 px-4 rounded-xl bg-white/80 text-gray-900 focus:ring-2 focus:ring-cyan-500/20 focus:border-cyan-500 transition-all duration-300 placeholder-gray-400 group-hover:border-cyan-300 resize-none"
          ></textarea>
        </div>

        <!-- Action Buttons -->
        <div class="flex space-x-4 pt-4">
          <button
            @click="go"
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
                d="M5 13l4 4L19 7"
              ></path>
            </svg>
            Update Song
          </button>
        </div>
      </form>
    </FormContainer>
  </BackgroundWrapper>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import SongService from '@/services/SongService'
import MainHeader from '@/components/MainHeader.vue'
import BackgroundWrapper from '@/components/BackgroundWrapper.vue'
import PageHeader from '@/components/PageHeader.vue'
import FormContainer from '@/components/FormContainer.vue'
import FormInput from '@/components/FormInput.vue'
import { useRouter, useRoute } from 'vue-router'

const title = ref('')
const artist = ref('')
const album = ref('')
const genre = ref('')
const albumImage = ref('')
const youtubeId = ref('')
const lyrics = ref('')
const tab = ref('')
const errors = ref({})

const router = useRouter()
const route = useRoute()

// Fetch song data when component mounts
onMounted(async () => {
  try {
    const songId = route.params.songsId
    const response = await SongService.show(songId)
    const songData = response.data

    // Populate form fields with existing data
    title.value = songData.title || ''
    artist.value = songData.artist || ''
    album.value = songData.album || ''
    genre.value = songData.genre || ''
    albumImage.value = songData.albumImage || ''
    youtubeId.value = songData.youtubeId || ''
    lyrics.value = songData.lyrics || ''
    tab.value = songData.tab || ''

    console.log('Loaded song data:', songData)
  } catch (error) {
    console.log('Error fetching song data:', error)
    alert('Failed to load song data. Please try again.')
  }
})

const handleSubmit = async () => {
  // Reset errors
  errors.value = {}

  // Validate fields
  if (!title.value) errors.value.title = 'Title is required'
  if (!artist.value) errors.value.artist = 'An Artist is required'
  if (!genre.value) errors.value.genre = 'Please select a genre'

  // Check if there are any errors
  if (Object.keys(errors.value).length > 0) return

  try {
    const song = {
      title: title.value,
      artist: artist.value,
      album: album.value,
      genre: genre.value,
      albumImage: albumImage.value,
      youtubeId: youtubeId.value,
      lyrics: lyrics.value,
      tab: tab.value,
    }

    const songId = route.params.songsId
    const response = await SongService.patch(songId, song)

    alert('Song updated successfully!')
    console.log('Song updated', response.data)

    // Redirect to the song detail page
    router.push(`/songs/${songId}`)
  } catch (err) {
    console.log('Error updating song', err)
    alert('Failed to update song. Please try again.')
  }
}

const props = defineProps({
  to: {
    type: String,
    default: '/songs',
  },
})

function go() {
  router.push(props.to)
}
</script>
