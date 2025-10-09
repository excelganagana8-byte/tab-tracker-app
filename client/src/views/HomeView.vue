<template>
  <div class="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
    <Nav />
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
        <p
          class="text-base xs:text-lg sm:text-xl text-gray-300 mb-4 sm:mb-6 md:mb-8 flex items-center justify-center gap-1 xs:gap-2 flex-wrap"
        >
          <span class="text-lg xs:text-xl sm:text-2xl">🎵</span>
          <span
            class="bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text text-transparent font-semibold"
          >
            at its best
          </span>
          <span class="text-lg xs:text-xl sm:text-2xl">🎶</span>
        </p>
        <div
          class="flex flex-col xs:flex-row justify-center gap-2 xs:gap-3 sm:gap-4 mt-4 sm:mt-6 md:mt-8"
        >
          <button
            class="px-4 xs:px-6 sm:px-8 py-2 xs:py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl text-white font-semibold hover:shadow-2xl hover:shadow-purple-500/30 transition-all transform hover:-translate-y-1 text-xs xs:text-sm sm:text-base"
          >
            Get Started
          </button>
          <button
            class="px-4 xs:px-6 sm:px-8 py-2 xs:py-3 border border-purple-500/50 rounded-xl text-purple-300 font-semibold hover:bg-purple-500/10 transition-all text-xs xs:text-sm sm:text-base"
          >
            Learn More
          </button>
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

      <!-- Recent Activity -->
      <div
        class="bg-white/5 backdrop-blur-lg rounded-2xl p-3 xs:p-4 sm:p-6 md:p-8 border border-white/10"
      >
        <h2 class="text-lg xs:text-xl sm:text-2xl font-bold text-white mb-3 xs:mb-4 sm:mb-6">
          Recent Activity
        </h2>
        <div class="space-y-2 xs:space-y-3 sm:space-y-4">
          <div
            class="flex flex-col xs:flex-row xs:items-center justify-between p-2 xs:p-3 sm:p-4 bg-white/5 rounded-xl hover:bg-white/10 transition-colors gap-1 xs:gap-2 sm:gap-0"
          >
            <div class="flex items-center space-x-2 xs:space-x-3 sm:space-x-4">
              <div
                class="w-6 h-6 xs:w-8 xs:h-8 sm:w-10 sm:h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center flex-shrink-0"
              >
                <svg
                  class="w-3 h-3 xs:w-4 xs:h-4 sm:w-5 sm:h-5 text-white"
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
              <div class="min-w-0 flex-1">
                <h4 class="text-white font-medium text-sm xs:text-base truncate">
                  Sweet Child O' Mine
                </h4>
                <p class="text-gray-400 text-xs truncate">Guns N' Roses • 2 hours ago</p>
              </div>
            </div>
            <div
              class="text-purple-300 font-semibold text-xs xs:text-sm sm:text-base xs:ml-2 sm:ml-4 mt-1 xs:mt-0"
            >
              87%
            </div>
          </div>

          <div
            class="flex flex-col xs:flex-row xs:items-center justify-between p-2 xs:p-3 sm:p-4 bg-white/5 rounded-xl hover:bg-white/10 transition-colors gap-1 xs:gap-2 sm:gap-0"
          >
            <div class="flex items-center space-x-2 xs:space-x-3 sm:space-x-4">
              <div
                class="w-6 h-6 xs:w-8 xs:h-8 sm:w-10 sm:h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center flex-shrink-0"
              >
                <svg
                  class="w-3 h-3 xs:w-4 xs:h-4 sm:w-5 sm:h-5 text-white"
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
              <div class="min-w-0 flex-1">
                <h4 class="text-white font-medium text-sm xs:text-base truncate">Wonderwall</h4>
                <p class="text-gray-400 text-xs truncate">Oasis • 1 day ago</p>
              </div>
            </div>
            <div
              class="text-purple-300 font-semibold text-xs xs:text-sm sm:text-base xs:ml-2 sm:ml-4 mt-1 xs:mt-0"
            >
              92%
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup>
import Nav from '@/components/Nav.vue'
</script>

<style scoped>
/* Custom styles can be added here if needed */
</style>
