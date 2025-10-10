<template>
  <BackgroundWrapper>
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
          <p v-if="errors.title" class="text-red-400 text-sm mt-1 ml-1">{{ errors.title }}</p>
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
          <p v-if="errors.artist" class="text-red-400 text-sm mt-1 ml-1">{{ errors.artist }}</p>
        </div>

        <!-- Album -->
        <FormInput
          id="album"
          label="Album (Optional)"
          placeholder="Enter album name"
          v-model="album"
        />

        <div class="grid grid-cols-2 gap-4">
          <FormSelect
            id="genre"
            label="Genre"
            placeholder="Select genre"
            v-model="genre"
            :options="genreOptions"
            :error="errors.genre"
          />

          <FormInput
            id="youtubeId"
            label="YouTube ID"
            placeholder="Enter YouTube video ID"
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
        <FormInput
          id="lyrics"
          label="Lyrics (Optional)"
          placeholder="Enter song lyrics"
          v-model="lyrics"
          :isTextarea="true"
          :rows="4"
        />

        <FormInput
          id="tab"
          label="Guitar Tab (Optional)"
          placeholder="Enter guitar tab"
          v-model="tab"
          :isTextarea="true"
          :rows="6"
        />

        <!-- Action Buttons -->
        <div class="flex space-x-4 pt-4">
          <button
            @click="go"
            type="button"
            class="flex-1 py-3 px-4 bg-white/10 border border-purple-400/30 text-purple-500 rounded-xl font-semibold hover:bg-white/20 hover:border-purple-300/50 hover:text-purple-200 hover:shadow-md transition-all duration-300"
          >
            Cancel
          </button>
          <button
            type="submit"
            class="flex-1 py-3 px-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl hover:shadow-purple-500/25 transform hover:-translate-y-0.5 transition-all duration-300 flex items-center justify-center"
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
import BackgroundWrapper from '@/components/BackgroundWrapper.vue'
import PageHeader from '@/components/PageHeader.vue'
import FormContainer from '@/components/FormContainer.vue'
import FormInput from '@/components/FormInput.vue'
import FormSelect from '@/components/FormSelect.vue'
import { useRouter, useRoute } from 'vue-router'

const title = ref('')
const artist = ref('')
const album = ref('')
const genre = ref('')
const albumImage = ref('')
const youtubeId = ref('')
const lyrics = ref('')
const tab = ref('')
const genreOptions = [
  { value: 'pop', label: 'Pop' },
  { value: 'rock', label: 'Rock' },
  { value: 'hiphop', label: 'Hip Hop' },
  { value: 'electronic', label: 'Electronic' },
  { value: 'jazz', label: 'Jazz' },
  { value: 'classical', label: 'Classical' },
  { value: 'country', label: 'Country' },
  { value: 'r&b', label: 'R&B' },
]

const errors = ref({})

const router = useRouter()
const route = useRoute()

// Fetch song data when component mounts
onMounted(async () => {
  try {
    const songId = route.params.id
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

    const songId = route.params.id
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
