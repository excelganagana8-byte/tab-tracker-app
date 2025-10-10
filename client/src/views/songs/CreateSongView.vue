<template>
  <BackgroundWrapper>
    <PageHeader title="Add New Song" subtitle="Share your music with the world" />

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

        <!-- Tab -->
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
            class="flex-1 py-3 px-4 bg-white/10 border border-purple-400/30 text-purple-300 rounded-xl font-semibold hover:bg-white/20 hover:border-purple-300/50 hover:text-purple-200 hover:shadow-md transition-all duration-300"
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
                d="M12 4v16m8-8H4"
              ></path>
            </svg>
            Create Song
          </button>
        </div>
      </form>
    </FormContainer>
  </BackgroundWrapper>
</template>

<script setup>
import { ref } from 'vue'
import SongService from '@/services/SongService'
import BackgroundWrapper from '@/components/BackgroundWrapper.vue'
import PageHeader from '@/components/PageHeader.vue'
import FormContainer from '@/components/FormContainer.vue'
import FormInput from '@/components/FormInput.vue'
import FormSelect from '@/components/FormSelect.vue'
import { useRouter } from 'vue-router'

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
    const newSong = {
      title: title.value,
      artist: artist.value,
      album: album.value,
      genre: genre.value,
      albumImage: albumImage.value,
      youtubeId: youtubeId.value,
      lyrics: lyrics.value,
      tab: tab.value,
    }

    const response = await SongService.post(newSong)

    alert('Song created successfully!')
    console.log('Form submitted', response.data)

    // Redirect to songs list
    router.push('/songs')
  } catch (err) {
    console.log('Error creating song', err)
    alert('Failed to create song. Please try again.')
  }
}

const props = defineProps({
  to: {
    type: String,
    default: '/songs',
  },
})

const router = useRouter()
function go() {
  router.push(props.to)
}
</script>
