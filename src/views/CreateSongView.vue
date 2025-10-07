<template>
  <BackgroundWrapper>
    <MainHeader />

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
import MainHeader from '@/components/MainHeader.vue'
import BackgroundWrapper from '@/components/BackgroundWrapper.vue'
import PageHeader from '@/components/PageHeader.vue'
import FormContainer from '@/components/FormContainer.vue'
import FormInput from '@/components/FormInput.vue'
import { useRouter } from 'vue-router'

const title = ref('')
const artist = ref('')
const album = ref('')
const genre = ref('')
const albumImage = ref('')
const youtubeId = ref('')
const lyrics = ref('')
const tab = ref('')
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
