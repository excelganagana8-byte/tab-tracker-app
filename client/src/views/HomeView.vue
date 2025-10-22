<template>
  <div class="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
    <!-- <Nav /> -->
    <!-- Main Content -->
    <main class="container mx-auto px-3 xs:px-4 sm:px-6 py-6 sm:py-8 md:py-12">
      <!-- Hero Section -->
      <div class="text-center mb-8 sm:mb-12 md:mb-16">
        <h1 class="text-3xl xs:text-4xl sm:text-5xl md:text-6xl font-bold mb-3 sm:mb-4 md:mb-6">
          <span
            class="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent"
          >
            Tab Tracker
          </span>
        </h1>

        <!-- Dynamic Subtitle based on login state -->
        <div v-if="authStore.isLoggedIn" class="space-y-4 xs:space-y-6">
          <p class="text-base xs:text-lg sm:text-xl text-gray-300 mb-4 sm:mb-6 md:mb-8">
            Welcome back! Ready to continue your musical journey? 🎸
          </p>
          <div
            class="bg-white/5 backdrop-blur-lg rounded-2xl p-4 xs:p-6 border border-purple-500/30 max-w-md mx-auto"
          >
            <p class="text-purple-200 text-sm xs:text-base mb-3">
              <span class="font-semibold text-white">Quick Stats:</span><br />
              <span class="text-gray-300">Keep track of your progress and discover new tabs!</span>
            </p>
          </div>
        </div>

        <div v-else class="space-y-4 xs:space-y-6">
          <!-- Main User-Friendly Message -->
          <div class="max-w-2xl mx-auto">
            <p class="text-base xs:text-lg sm:text-xl text-gray-300 mb-3 sm:mb-4">
              Master your favorite songs with the ultimate guitar tab companion 🎵
            </p>

            <!-- Benefits Highlight -->
            <div
              class="bg-gradient-to-r from-purple-500/10 to-pink-500/10 backdrop-blur-lg rounded-2xl p-4 xs:p-6 border border-purple-500/20 mb-4 sm:mb-6"
            >
              <p class="text-white text-sm xs:text-base font-semibold mb-2">
                Start your musical journey in seconds:
              </p>
              <div class="grid grid-cols-1 xs:grid-cols-2 gap-2 text-xs xs:text-sm text-gray-300">
                <div class="flex items-center gap-2">
                  <span class="text-green-400 text-lg">✓</span>
                  <span>Access 10,000+ tabs</span>
                </div>
                <div class="flex items-center gap-2">
                  <span class="text-green-400 text-lg">✓</span>
                  <span>Track your progress</span>
                </div>
                <div class="flex items-center gap-2">
                  <span class="text-green-400 text-lg">✓</span>
                  <span>Sync across devices</span>
                </div>
                <div class="flex items-center gap-2">
                  <span class="text-green-400 text-lg">✓</span>
                  <span>Completely free</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Action Buttons -->
        <div
          class="flex flex-col xs:flex-row justify-center gap-2 xs:gap-3 sm:gap-4 mt-4 sm:mt-6 md:mt-8"
        >
          <button
            v-if="authStore.isLoggedIn"
            @click="goToAddTab"
            class="px-4 xs:px-6 sm:px-8 py-2 xs:py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl text-white font-semibold hover:shadow-2xl hover:shadow-purple-500/30 transition-all transform hover:-translate-y-1 text-xs xs:text-sm sm:text-base flex items-center justify-center gap-2"
          >
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 4v16m8-8H4"
              />
            </svg>
            Add New Tab
          </button>

          <button
            v-else
            @click="goToSignUp"
            class="px-4 xs:px-6 sm:px-8 py-2 xs:py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl text-white font-semibold hover:shadow-2xl hover:shadow-purple-500/30 transition-all transform hover:-translate-y-1 text-xs xs:text-sm sm:text-base flex items-center justify-center gap-2 group"
          >
            <svg
              class="w-4 h-4 group-hover:scale-110 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M13 10V3L4 14h7v7l9-11h-7z"
              />
            </svg>
            Start Playing Now - It's Free!
          </button>

          <button
            v-if="!authStore.isLoggedIn"
            @click="goToLogin"
            class="px-4 xs:px-6 sm:px-8 py-2 xs:py-3 border border-purple-500/50 rounded-xl text-purple-300 font-semibold hover:bg-purple-500/10 transition-all text-xs xs:text-sm sm:text-base"
          >
            I Have an Account
          </button>

          <button
            v-else
            @click="goToLearnMore"
            class="px-4 xs:px-6 sm:px-8 py-2 xs:py-3 border border-purple-500/50 rounded-xl text-purple-300 font-semibold hover:bg-purple-500/10 transition-all text-xs xs:text-sm sm:text-base flex items-center justify-center gap-2"
          >
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              />
            </svg>
            Learn More
          </button>
        </div>

        <!-- Additional info for non-logged in users -->
        <div v-if="!authStore.isLoggedIn" class="mt-4 sm:mt-6">
          <p class="text-gray-400 text-xs xs:text-sm">
            Join <span class="text-purple-300 font-semibold">5,000+ guitarists</span> already
            improving their skills
          </p>
        </div>
      </div>

      <!-- Features Grid -->
      <div
        class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 xs:gap-6 sm:gap-8 mb-8 sm:mb-12 md:mb-16"
      >
        <div
          class="bg-white/5 backdrop-blur-lg rounded-2xl p-3 xs:p-4 sm:p-6 border border-white/10 hover:border-purple-500/30 transition-all group"
        >
          <div
            class="w-8 h-8 xs:w-10 xs:h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mb-2 xs:mb-3 sm:mb-4 group-hover:scale-110 transition-transform"
          >
            <svg
              class="w-4 h-4 xs:w-5 xs:h-5 sm:w-6 sm:h-6 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3"
              ></path>
            </svg>
          </div>
          <h3 class="text-base xs:text-lg sm:text-xl font-semibold text-white mb-1 xs:mb-2">
            Chord Library
          </h3>
          <p class="text-gray-400 text-xs xs:text-sm sm:text-base leading-relaxed">
            Access thousands of guitar chords and tabs from your favorite artists
          </p>
        </div>

        <div
          class="bg-white/5 backdrop-blur-lg rounded-2xl p-3 xs:p-4 sm:p-6 border border-white/10 hover:border-purple-500/30 transition-all group"
        >
          <div
            class="w-8 h-8 xs:w-10 xs:h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mb-2 xs:mb-3 sm:mb-4 group-hover:scale-110 transition-transform"
          >
            <svg
              class="w-4 h-4 xs:w-5 xs:h-5 sm:w-6 sm:h-6 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3"
              ></path>
            </svg>
          </div>
          <h3 class="text-base xs:text-lg sm:text-xl font-semibold text-white mb-1 xs:mb-2">
            Practice Tools
          </h3>
          <p class="text-gray-400 text-xs xs:text-sm sm:text-base leading-relaxed">
            Metronome, tuner, and speed trainer to improve your playing skills
          </p>
        </div>

        <div
          class="bg-white/5 backdrop-blur-lg rounded-2xl p-3 xs:p-4 sm:p-6 border border-white/10 hover:border-purple-500/30 transition-all group"
        >
          <div
            class="w-8 h-8 xs:w-10 xs:h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mb-2 xs:mb-3 sm:mb-4 group-hover:scale-110 transition-transform"
          >
            <svg
              class="w-4 h-4 xs:w-5 xs:h-5 sm:w-6 sm:h-6 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3"
              ></path>
            </svg>
          </div>
          <h3 class="text-base xs:text-lg sm:text-xl font-semibold text-white mb-1 xs:mb-2">
            Cloud Sync
          </h3>
          <p class="text-gray-400 text-xs xs:text-sm sm:text-base leading-relaxed">
            Your tabs and progress synchronized across all your devices
          </p>
        </div>
      </div>

      <SongHistory />
    </main>
  </div>
</template>

<script setup>
import SongHistory from '@/components/SongHistory.vue'
import { useAuthStore } from '@/stores/auth'
import { useRouter } from 'vue-router'

const router = useRouter()
const authStore = useAuthStore()

function goToSignUp() {
  router.push('/register')
}

function goToLogin() {
  router.push('/login')
}

function goToAddTab() {
  router.push('/song/create')
}

function goToLearnMore() {
  router.push('/learnmore')
  // You can route to a features page, documentation, or keep it as is
  // For now, let's just scroll to features
  const featuresSection = document.querySelector('.grid.grid-cols-1')
  if (featuresSection) {
    featuresSection.scrollIntoView({ behavior: 'smooth' })
  }
}
</script>

<style scoped></style>
